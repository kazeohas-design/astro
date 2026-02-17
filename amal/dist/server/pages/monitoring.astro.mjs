import { e as createComponent, f as createAstro, r as renderTemplate, n as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BcueGiGm.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CsKcIMyr.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const token = Astro2.locals.token;
  const url = undefined                             ;
  const headers = { Authorization: `${token}` };
  const urlUnit = new URL("/api/backend/unit_kerja", Astro2.url);
  new URL("/api/backend/layanan", Astro2.url);
  const selectedUnitKerja = Astro2.url.searchParams.get("id_unit_kerja") ?? "";
  const selectedLayanan = Astro2.url.searchParams.get("id_layanan") ?? "";
  const monitoringUrl = new URL("/monitoring", url);
  if (selectedUnitKerja) {
    monitoringUrl.searchParams.set("id_unit_kerja", selectedUnitKerja);
  }
  if (selectedLayanan) {
    monitoringUrl.searchParams.set("id_layanan", selectedLayanan);
  }
  const monitoring = await fetch(monitoringUrl, { headers }).then(
    (res) => res.json()
  );
  const unitKerja = await fetch(urlUnit, {
    headers: {
      cookie: Astro2.request.headers.get("cookie") ?? ""
    }
  }).then((res) => res.json());
  const unitLayanan = Array.isArray(monitoring?.layanan) ? monitoring.layanan : [];
  const topLayanan = Array.isArray(monitoring?.topLayanan) ? monitoring.topLayanan : [];
  const layananRaw = Array.isArray(monitoring?.layanan) ? monitoring.layanan : [];
  const layananAktif = layananRaw.filter(
    (layanan) => layanan.status_layanan === "Aktif"
  );
  const layananTidakAktif = layananRaw.filter(
    (layanan) => layanan.status_layanan !== "Aktif"
  );
  const { sum: layananSlaSum, count: layananSlaCount } = layananAktif.reduce(
    (acc, item) => {
      const parsed = Number(
        String(item?.sla_hari ?? "").trim().replace(",", ".")
      );
      if (Number.isFinite(parsed)) {
        acc.sum += parsed;
        acc.count += 1;
      }
      return acc;
    },
    { sum: 0, count: 0 }
  );
  const layananPenyelesaianRata = layananSlaCount > 0 ? layananSlaSum / layananSlaCount : null;
  const layananPenyelesaianRataDisplay = layananPenyelesaianRata === null ? "-" : layananPenyelesaianRata.toFixed(1);
  const layananDetail = Array.isArray(monitoring?.detaillayanan) ? monitoring.detaillayanan : [];
  const dataChart = Array.isArray(monitoring?.data) ? monitoring.data : [];
  const dataPerbulanRaw = Array.isArray(monitoring?.labels) ? monitoring.labels : [];
  const defaultMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ];
  const toNumber = (value) => {
    const parsed = Number(
      String(value ?? "").trim().replace(",", ".")
    );
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const dataTotalPermohonan = dataChart.map((item) => toNumber(item?.total));
  const dataKepatuhan = dataChart.map((item) => toNumber(item?.rata_rata));
  const dataPerbulanFromChart = dataChart.map((item) => {
    const raw = item?.bulan ?? item?.month ?? item?.label ?? item?.periode;
    if (raw === void 0 || raw === null || raw === "") return "";
    const asNumber = Number(raw);
    if (Number.isFinite(asNumber) && asNumber >= 1 && asNumber <= 12) {
      return defaultMonths[asNumber - 1];
    }
    return String(raw);
  }).filter((label) => label);
  const dataPerbulan = dataPerbulanRaw.length > 0 ? dataPerbulanRaw : dataPerbulanFromChart;
  console.log(dataChart);
  const toPercent = (value) => toNumber(value);
  const getStatusMeta = (pct) => {
    if (pct >= 90) {
      return { label: "Baik", className: "bg-success-subtle text-success" };
    }
    if (pct >= 70) {
      return {
        label: "Perlu Perhatian",
        className: "bg-warning-subtle text-warning"
      };
    }
    return { label: "Bermasalah", className: "bg-danger-subtle text-danger" };
  };
  const dataEstimasi = Array.isArray(monitoring?.estimasi) ? monitoring.estimasi : [];
  let onTime = 0;
  let validCount = 0;
  dataEstimasi.forEach((item) => {
    const parseEstimasi = Number(item?.estimasi_selesai);
    const parseSelesai = Number(item?.realisasi_selesai);
    if (!Number.isFinite(parseEstimasi) || !Number.isFinite(parseSelesai)) {
      return;
    }
    validCount += 1;
    if (parseSelesai <= parseEstimasi) {
      onTime += 1;
    }
  });
  const kepatuhan = validCount > 0 ? onTime / validCount * 100 : 0;
  const maxTotal = Math.max(
    ...topLayanan.map((x) => Number(x.total) || 0),
    1
  );
  return renderTemplate(_a || (_a = __template(["", '  <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const initSelect2Multi = () => {\n      if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.select2) {\n        return;\n      }\n      const $ = window.jQuery;\n      $(".js-select2").each((_, el) => {\n        const $el = $(el);\n        if ($el.data("select2")) return;\n        const placeholder = $el.data("placeholder") || "Pilih";\n        $el.select2({\n          width: "100%",\n          placeholder,\n          allowClear: true,\n        });\n      });\n    };\n\n    initSelect2Multi();\n\n    window.onFilterChange = (field) => {\n      const el = document.getElementById(field);\n      if (!(el instanceof HTMLSelectElement)) return;\n      const value = el.value || "";\n      const url = new URL(window.location.href);\n      const param = field === "layanan" ? "id_layanan" : "id_unit_kerja";\n      if (value) {\n        url.searchParams.set(param, value);\n      } else {\n        url.searchParams.delete(param);\n      }\n      if (field === "unit_kerja") {\n        url.searchParams.delete("id_layanan");\n      }\n      window.location.href = `${url.pathname}${url.search}`;\n    };\n\n    const rawLabels = JSON.parse(\n      document.getElementById("sla-chart")?.dataset?.label || "[]",\n    );\n\n    const rawKepatuhan = JSON.parse(\n      document.getElementById("sla-chart")?.dataset?.kepatuhan || "[]",\n    );\n\n    const rawPermohonan = JSON.parse(\n      document.getElementById("sla-chart")?.dataset?.permohonan || "[]",\n    );\n\n    const defaultMonths = [\n      "Jan",\n      "Feb",\n      "Mar",\n      "Apr",\n      "Mei",\n      "Jun",\n      "Jul",\n      "Agu",\n      "Sep",\n      "Okt",\n      "Nov",\n      "Des",\n    ];\n\n    const totalData = Array.isArray(rawPermohonan) ? rawPermohonan : [];\n    const kepatuhanData = Array.isArray(rawKepatuhan) ? rawKepatuhan : [];\n\n    const maxLen = Math.max(totalData.length, kepatuhanData.length);\n    const categories =\n      Array.isArray(rawLabels) && rawLabels.length\n        ? rawLabels\n        : defaultMonths.slice(0, maxLen || defaultMonths.length);\n\n    const el = document.querySelector("#sla-chart");\n    if (!el || typeof ApexCharts === "undefined") return;\n    const options = {\n      series: [\n        {\n          name: "Jumlah Permohonan",\n          type: "column",\n          data: totalData,\n        },\n        {\n          name: "Persentase Kepatuhan (%)",\n          type: "line",\n          data: kepatuhanData,\n        },\n      ],\n      chart: {\n        height: 280,\n        type: "line",\n        toolbar: { show: false },\n      },\n      stroke: {\n        width: [0, 3],\n        curve: "smooth",\n      },\n      plotOptions: {\n        bar: {\n          borderRadius: 6,\n          columnWidth: "45%",\n        },\n      },\n      dataLabels: {\n        enabled: false,\n      },\n      colors: ["#7fb5ff", "#6bb38f"],\n      xaxis: {\n        categories,\n      },\n      yaxis: [\n        {\n          labels: { style: { colors: "#6c757d" } },\n        },\n        {\n          opposite: true,\n          min: 0,\n          max: 100,\n          labels: { style: { colors: "#6c757d" } },\n        },\n      ],\n      grid: {\n        strokeDashArray: 4,\n        borderColor: "rgba(0,0,0,0.08)",\n      },\n      legend: {\n        position: "bottom",\n        markers: { radius: 4 },\n      },\n      tooltip: {\n        shared: true,\n      },\n    };\n    const chart = new ApexCharts(el, options);\n    chart.render();\n  });\n</script>'], ["", '  <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const initSelect2Multi = () => {\n      if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.select2) {\n        return;\n      }\n      const $ = window.jQuery;\n      $(".js-select2").each((_, el) => {\n        const $el = $(el);\n        if ($el.data("select2")) return;\n        const placeholder = $el.data("placeholder") || "Pilih";\n        $el.select2({\n          width: "100%",\n          placeholder,\n          allowClear: true,\n        });\n      });\n    };\n\n    initSelect2Multi();\n\n    window.onFilterChange = (field) => {\n      const el = document.getElementById(field);\n      if (!(el instanceof HTMLSelectElement)) return;\n      const value = el.value || "";\n      const url = new URL(window.location.href);\n      const param = field === "layanan" ? "id_layanan" : "id_unit_kerja";\n      if (value) {\n        url.searchParams.set(param, value);\n      } else {\n        url.searchParams.delete(param);\n      }\n      if (field === "unit_kerja") {\n        url.searchParams.delete("id_layanan");\n      }\n      window.location.href = \\`\\${url.pathname}\\${url.search}\\`;\n    };\n\n    const rawLabels = JSON.parse(\n      document.getElementById("sla-chart")?.dataset?.label || "[]",\n    );\n\n    const rawKepatuhan = JSON.parse(\n      document.getElementById("sla-chart")?.dataset?.kepatuhan || "[]",\n    );\n\n    const rawPermohonan = JSON.parse(\n      document.getElementById("sla-chart")?.dataset?.permohonan || "[]",\n    );\n\n    const defaultMonths = [\n      "Jan",\n      "Feb",\n      "Mar",\n      "Apr",\n      "Mei",\n      "Jun",\n      "Jul",\n      "Agu",\n      "Sep",\n      "Okt",\n      "Nov",\n      "Des",\n    ];\n\n    const totalData = Array.isArray(rawPermohonan) ? rawPermohonan : [];\n    const kepatuhanData = Array.isArray(rawKepatuhan) ? rawKepatuhan : [];\n\n    const maxLen = Math.max(totalData.length, kepatuhanData.length);\n    const categories =\n      Array.isArray(rawLabels) && rawLabels.length\n        ? rawLabels\n        : defaultMonths.slice(0, maxLen || defaultMonths.length);\n\n    const el = document.querySelector("#sla-chart");\n    if (!el || typeof ApexCharts === "undefined") return;\n    const options = {\n      series: [\n        {\n          name: "Jumlah Permohonan",\n          type: "column",\n          data: totalData,\n        },\n        {\n          name: "Persentase Kepatuhan (%)",\n          type: "line",\n          data: kepatuhanData,\n        },\n      ],\n      chart: {\n        height: 280,\n        type: "line",\n        toolbar: { show: false },\n      },\n      stroke: {\n        width: [0, 3],\n        curve: "smooth",\n      },\n      plotOptions: {\n        bar: {\n          borderRadius: 6,\n          columnWidth: "45%",\n        },\n      },\n      dataLabels: {\n        enabled: false,\n      },\n      colors: ["#7fb5ff", "#6bb38f"],\n      xaxis: {\n        categories,\n      },\n      yaxis: [\n        {\n          labels: { style: { colors: "#6c757d" } },\n        },\n        {\n          opposite: true,\n          min: 0,\n          max: 100,\n          labels: { style: { colors: "#6c757d" } },\n        },\n      ],\n      grid: {\n        strokeDashArray: 4,\n        borderColor: "rgba(0,0,0,0.08)",\n      },\n      legend: {\n        position: "bottom",\n        markers: { radius: 4 },\n      },\n      tooltip: {\n        shared: true,\n      },\n    };\n    const chart = new ApexCharts(el, options);\n    chart.render();\n  });\n</script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Data Monitoring" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-fluid"> <div class="row align-items-center mb-4"> <div class="col-lg-12"> <h2 class="fw-bold mb-2">Monitoring Layanan Publik</h2> <p class="text-muted mb-0">
Pantau performa SLA layanan publik secara real-time untuk memastikan
          kepatuhan terhadap standar penyelesaian layanan.
</p> </div> <div class="col-lg-12"> <div class="row g-2 justify-content-lg-end mt-3 mt-lg-0 monitoring-filters"> <div class="col-12 col-lg-auto"> <select class="form-select w-100"> <option>Periode</option> <option>30 Hari Terakhir</option> <option>3 Bulan</option> <option>12 Bulan</option> </select> </div> <div class="col-12 col-lg-auto"> <select class="form-select w-100 js-select2" data-placeholder="Semua Unit" id="unit_kerja" onchange="onFilterChange('unit_kerja')"> <option value=""${addAttribute(!selectedUnitKerja, "selected")}>
Semua Unit
</option> ${unitKerja.map((item) => renderTemplate`<option${addAttribute(item.id ?? item.nama, "value")}${addAttribute(
    String(item.id ?? item.nama) === selectedUnitKerja,
    "selected"
  )}> ${item.nama} </option>`)} </select> </div> <div class="col-12 col-lg-auto"> <select class="form-select w-100 js-select2" data-placeholder="Semua Layanan" id="layanan" onchange="onFilterChange('layanan')"${addAttribute(!selectedUnitKerja, "disabled")}> <option value=""${addAttribute(!selectedLayanan, "selected")}>
Semua Layanan
</option> ${unitLayanan.filter((item) => item.status_layanan === "Aktif").map((item) => renderTemplate`<option${addAttribute(item.id_layanan ?? item.nama, "value")}${addAttribute(
    String(item.id_layanan ?? item.nama) === selectedLayanan,
    "selected"
  )}> ${item.nama} </option>`)} </select> </div> </div> </div> </div> <div class="row g-3 mb-4"> <div class="col-lg-3 col-md-6"> <div class="card border-0 shadow-sm rounded-4 h-100"> <div class="card-body"> <div class="d-flex align-items-center gap-2"> <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary p-2"> <i class="ti ti-briefcase fs-5"></i> </span> <h6 class="mb-0 fw-semibold">Total Layanan Aktif</h6> </div> <div class="d-flex align-items-end gap-2 mt-3"> <h3 class="fw-bold mb-0">${layananAktif.length}</h3> <span class="text-muted">Layanan siap digunakan</span> </div> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card border-0 shadow-sm rounded-4 h-100"> <div class="card-body"> <div class="d-flex align-items-center gap-2"> <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-info-subtle text-info p-2"> <i class="ti ti-clock fs-5"></i> </span> <h6 class="mb-0 fw-semibold">Rata-rata SLA</h6> </div> <div class="d-flex align-items-end gap-2 mt-3"> <h3 class="fw-bold mb-0">${layananPenyelesaianRataDisplay}</h3> <span class="text-muted">Hari</span> </div> <div class="text-muted mt-1">Waktu penyelesaian rata-rata</div> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card border-0 shadow-sm rounded-4 h-100"> <div class="card-body"> <div class="d-flex align-items-center gap-2"> <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success p-2"> <i class="ti ti-check fs-5"></i> </span> <h6 class="mb-0 fw-semibold">Kepatuhan SLA</h6> </div> <div class="d-flex align-items-center gap-2 mt-3"> <h3 class="fw-bold mb-0">${Math.round(kepatuhan)}%</h3> <span class="badge bg-success rounded-pill px-3">Tepat waktu</span> </div> <div class="text-muted mt-1">SLA diselesaikan tepat waktu</div> </div> </div> </div> <div class="col-lg-3 col-md-6"> <div class="card border-0 shadow-sm rounded-4 h-100"> <div class="card-body"> <div class="d-flex align-items-center gap-2"> <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning p-2"> <i class="ti ti-alert-triangle fs-5"></i> </span> <h6 class="mb-0 fw-semibold">Layanan Bermasalah</h6> </div> <div class="d-flex align-items-center gap-2 mt-3"> <h3 class="fw-bold mb-0">${layananTidakAktif.length}</h3> <span class="badge bg-warning text-dark rounded-pill px-3">
Butuh perhatian
</span> </div> <div class="text-muted mt-1">Layanan masih tertunda</div> </div> </div> </div> </div> <div class="row g-3 mb-4"> <div class="col-lg-7"> <div class="card border-0 shadow-sm rounded-4 h-100"> <div class="card-body"> <div class="d-flex align-items-center justify-content-between mb-2"> <h5 class="fw-semibold mb-0">Kepatuhan SLA per Bulan</h5> <i class="ti ti-chart-line text-muted"></i> </div> <div class="text-muted mb-3">
Perbandingan jumlah permohonan dan persentase kepatuhan SLA
</div> <div id="sla-chart" style="min-height: 280px;"${addAttribute(JSON.stringify(dataPerbulan), "data-label")}${addAttribute(JSON.stringify(dataKepatuhan), "data-kepatuhan")}${addAttribute(JSON.stringify(dataTotalPermohonan), "data-permohonan")}></div> </div> </div> </div> <div class="col-lg-5"> <div class="card border-0 shadow-sm rounded-4 h-100"> <div class="card-body"> <div class="d-flex align-items-center justify-content-between mb-2"> <h5 class="fw-semibold mb-0">
Top 5 Layanan Paling Banyak Digunakan
</h5> <i class="ti ti-chevron-right text-muted"></i> </div> <div class="text-muted mb-3">
Data layanan berdasarkan jumlah permohonan
</div> <div class="d-flex flex-column gap-3"> ${topLayanan.map((datalayanan) => renderTemplate`<div class="d-flex align-items-center gap-2"> <div class="flex-grow-1"> <div class="small fw-semibold">${datalayanan.layanan}</div> <div class="progress" style="height: 8px;"> <div class="progress-bar" role="progressbar"${addAttribute(`width: ${Number(datalayanan.total) / maxTotal * 100}%`, "style")}></div> </div> </div> <div class="fw-semibold">${datalayanan.total}</div> </div>`)} </div> </div> </div> </div> </div> <div class="card border-0 shadow-sm rounded-4"> <div class="card-body"> <div class="d-flex flex-wrap align-items-center justify-content-between mb-3"> <h5 class="fw-semibold mb-0">Detail Monitoring per Layanan</h5> <div class="input-group w-auto"> <span class="input-group-text bg-light border-0"> <i class="ti ti-search"></i> </span> <input type="text" class="form-control border-0 bg-light" placeholder="Search"> </div> </div> <div class="table-responsive"> <table class="table align-middle"> <thead class="text-muted"> <tr> <th>Nama Layanan</th> <th>Unit Kerja</th> <th>Jenis Layanan</th> <th>SLA (hari)</th> <th>Jumlah Permohonan</th> <th>Rata-rata Waktu Selesai</th> <th>Status</th> </tr> </thead> <tbody> ${layananDetail.map((item) => {
    const pct = toPercent(item.rata_rata);
    const status = getStatusMeta(pct);
    return renderTemplate`<tr> <td>${item.layanan}</td> <td>${item.unit_kerja}</td> <td>${item.jenis}</td> <td>${item.sla_hari}</td> <td>${item.jumlah_pengaduan}</td> <td>${pct}%</td> <td> <span${addAttribute(`badge ${status.className} rounded-pill`, "class")}> ${status.label} </span> </td> </tr>`;
  })} </tbody> </table> </div> </div> </div> </div> ` }));
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/monitoring/index.astro", void 0);
const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/monitoring/index.astro";
const $$url = "/monitoring";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
