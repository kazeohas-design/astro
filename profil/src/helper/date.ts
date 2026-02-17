// src/helper/date.ts

export const formatTanggalID = (tanggal: string): string => {
  if (!tanggal) return "";

  const [year, month, day] = tanggal.split("-");

  const bulan = [
    "", // biar index sama dengan nomor bulan
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const m = parseInt(month, 10);
  const d = parseInt(day, 10);

  if (!m || !d) return tanggal; // fallback kalau format aneh

  return `${d} ${bulan[m]} ${year}`;
};
