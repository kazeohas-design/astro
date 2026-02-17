// public/js/nik-validator.js
const API_BASE = "/api/wilayah";
const _jsonCache = new Map();

async function getJSON(url) {
  if (_jsonCache.has(url)) return _jsonCache.get(url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Gagal fetch ${url}`);
  const data = await res.json();
  _jsonCache.set(url, data);
  return data;
}

function extractWilayahIdsFromNik(nik) {
  return {
    provId: nik.slice(0, 2),     // AA
    regencyId: nik.slice(0, 4),  // AABB
    districtId: nik.slice(0, 6), // AABBCC
  };
}

async function validateWilayahFromNik(nik) {
  const { provId, regencyId, districtId } = extractWilayahIdsFromNik(nik);

  // 1) Provinsi
  const provs = await getJSON(`${API_BASE}/provinces.json`);
  const prov = provs.find(p => String(p.id).padStart(2, "0") === provId);
  if (!prov) return { ok:false, reason:"Kode provinsi tidak ditemukan." };

  // 2) Kab/Kota
  const regs = await getJSON(`${API_BASE}/regencies/${prov.id}.json`);
  const reg = regs.find(r => String(r.id).slice(0,4) === regencyId);
  if (!reg) return { ok:false, reason:"Kode kabupaten/kota tidak ditemukan pada provinsi tersebut." };

  // 3) Kecamatan (Emsifa 7 digit → match 6 digit prefix dari NIK)
  const dists = await getJSON(`${API_BASE}/districts/${reg.id}.json`);

  // match utama: 6 digit pertama
  let dist = dists.find(d => String(d.id).slice(0,6) === districtId);

  // fallback 1: floor/10 (3508170 → 350817)
  if (!dist) {
    const target = Number(districtId);
    dist = dists.find(d => Math.floor(Number(d.id)/10) === target);
  }

  // fallback 2: startsWith (lebih longgar)
  if (!dist) {
    dist = dists.find(d => String(d.id).startsWith(districtId));
  }

  // debug opsional biar jelas kalau masih gak ketemu
  if (!dist) {
    console.debug("DEBUG kecamatan", {
      regIdUsed: reg.id,
      districtId,
      first5: dists.slice(0,5).map(d => String(d.id))
    });
    return { ok:false, reason:"Kode kecamatan tidak ditemukan pada kab/kota tersebut." };
  }

  return {
    ok:true,
    prov:{ id:String(prov.id).padStart(2,"0"), name:prov.name },
    reg: { id:String(reg.id), name:reg.name },
    dist:{ id:String(dist.id), name:dist.name },
  };
}


function parseBirthDateFromNik(nik) {
  let dd = parseInt(nik.slice(6, 8), 10);
  const mm = parseInt(nik.slice(8, 10), 10);
  const yy = parseInt(nik.slice(10, 12), 10);

  const isFemale = dd > 40;
  if (isFemale) dd -= 40;

  const now = new Date();
  const currentYY = now.getFullYear() % 100;
  const y1900 = 1900 + yy;
  const y2000 = 2000 + yy;

  let year = yy > currentYY ? y1900 : y2000;

  const tryDate = (y, m, d) => {
    const dt = new Date(y, m - 1, d);
    return dt.getFullYear() === y && dt.getMonth() + 1 === m && dt.getDate() === d ? dt : null;
  };

  let birthDate = tryDate(year, mm, dd);
  if (!birthDate || birthDate > now) {
    const altYear = year >= 2000 ? y1900 : y2000;
    const alt = tryDate(altYear, mm, dd);
    if (alt && alt <= now) birthDate = alt;
  }

  return { birthDate, isFemale };
}

function validateNIK(nikRaw) {
  const nik = String(nikRaw).trim();
  if (!/^\d{16}$/.test(nik)) {
    return { valid: false, reason: "Format harus 16 digit angka." };
  }
  const { birthDate, isFemale } = parseBirthDateFromNik(nik);
  if (!birthDate) {
             
    return { valid: false, reason: "Tanggal lahir pada NIK tidak valid." };
  }
  return { valid: true, gender: isFemale ? "Perempuan" : "Laki-Laki", birthDate };
}

async function validateNIKWithWilayah(nikRaw) {
  const nik = String(nikRaw).trim();
  const basic = validateNIK(nik);
  if (!basic.valid) return { valid: false, reason: basic.reason };
  const wilayah = await validateWilayahFromNik(nik);
  if (!wilayah.ok) return { valid: false, reason: wilayah.reason };
  return { valid: true, ...basic, wilayah };
}

// Ekspos ke global supaya bisa dipanggil dari inline script
window.validateNIK = validateNIK;
window.validateNIKWithWilayah = validateNIKWithWilayah;
