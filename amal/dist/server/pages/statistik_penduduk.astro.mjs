import { e as createComponent, f as createAstro, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderScript } from '../chunks/astro/server_BcueGiGm.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CsKcIMyr.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentUrl = new URL(Astro2.request.url);
  const desaParams = currentUrl.searchParams.get("desa");
  const tahunParams = currentUrl.searchParams.get("tahun");
  const token = Astro2.locals.token;
  const url = undefined                             ;
  const headers = { Authorization: `${token}` };
  const baseParams = `desa=${desaParams ?? ""}&tahun=${tahunParams ?? ""}`;
  async function fetchStatistik(params) {
    const res = await fetch(`${url}/statistik?${params}`, { headers });
    return res.json();
  }
  const [
    statistik,
    cerai_hidup,
    belum_nikah,
    menikah,
    cerai_mati,
    groupBalita,
    groupAnak,
    groupRemaja,
    groupDewasa,
    groupLansia,
    desa
  ] = await Promise.all([
    fetchStatistik(baseParams),
    fetchStatistik(`status_nikah=CERAI%20HIDUP&${baseParams}`),
    fetchStatistik(`status_nikah=BELUM%20MENIKAH&${baseParams}`),
    fetchStatistik(`status_nikah=MENIKAH&${baseParams}`),
    fetchStatistik(`status_nikah=CERAI%20MATI&${baseParams}`),
    fetchStatistik(`status_umur=balita&${baseParams}`),
    fetchStatistik(`status_umur=anak&${baseParams}`),
    fetchStatistik(`status_umur=remaja&${baseParams}`),
    fetchStatistik(`status_umur=dewasa&${baseParams}`),
    fetchStatistik(`status_umur=lansia&${baseParams}`),
    fetch(`${url}/penduduk`, { headers }).then((res) => res.json())
  ]);
  const listDesaUnik = [
    ...new Set(
      desa.map((item) => item.desa).filter((d) => d && d.trim() !== "")
    )
  ];
  const listTahunUnik = [
    ...new Set(
      desa.map((item) => item.tanggal).map((t) => t.slice(0, 4))
    )
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Statistik Penduduk" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="row align-items-stretch justify-content-center"> <div class="col-lg-12 col-12"> <div class="card"> <div class="card-body"> <div class="row g-3"> <div class="col-md-6"> <select id="desa" class="form-select" onchange="onFilterChange()"> <option value="">Semua Desa</option> ${listDesaUnik.map((item) => renderTemplate`<option${addAttribute(item, "value")}>${item}</option>`)} </select> </div> <div class="col-md-6"> <select id="tahun" class="form-select" onchange="onFilterChange()"> <option value="">Tahun</option> ${listTahunUnik.map((item) => renderTemplate`<option${addAttribute(item, "value")}>${item}</option>`)} </select> </div> </div> </div> </div> </div> <div class="col-lg-6 col-12"> <div class="card"> <div class="card-body"> <h4 class="card-title">Jenis Kelamin</h4> <div id="chart-jenis"${addAttribute(statistik.laki, "data-laki")}${addAttribute(statistik.cewek, "data-cewek")}></div> </div> </div> </div> <div class="col-lg-6 col-12"> <div class="card"> <div class="card-body"> <h4 class="card-title">Pekerjaan</h4> <div id="chart-kawin"${addAttribute(cerai_hidup.status_nikah, "data-cerai_hidup")}${addAttribute(belum_nikah.status_nikah, "data-belum_nikah")}${addAttribute(menikah.status_nikah, "data-menikah")}${addAttribute(cerai_mati.status_nikah, "data-cerai_mati")}></div> </div> </div> </div> <div class="col-lg-12 col-12"> <div class="card"> <div class="card-body"> <h4 class="card-title">Usia</h4> <div id="chart-usia"${addAttribute(groupBalita.status_umur, "data-balita")}${addAttribute(groupAnak.status_umur, "data-anak")}${addAttribute(groupRemaja.status_umur, "data-remaja")}${addAttribute(groupDewasa.status_umur, "data-dewasa")}${addAttribute(groupLansia.status_umur, "data-lansia")}></div> </div> </div> </div> </div>  ${renderScript($$result2, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/statistik_penduduk/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/statistik_penduduk/index.astro", void 0);
const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/statistik_penduduk/index.astro";
const $$url = "/statistik_penduduk";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
