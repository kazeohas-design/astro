import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, l as renderHead } from '../../chunks/astro/server_BcueGiGm.mjs';
import 'clsx';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Tracking = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tracking;
  const ticket = Astro2.url.searchParams.get("ticket") ?? "";
  const statusParam = Astro2.url.searchParams.get("status") ?? "DIPROSES";
  const normalizedStatus = statusParam.trim().toUpperCase().replace(/\s+/g, "");
  console.log(normalizedStatus);
  const displayTicket = ticket || "3508 28 ** 0001";
  const hasTicket = ticket.trim() !== "";
  const STATUS_CONFIG = {
    MASUK: {
      label: "Masuk",
      className: "status-info",
      step: 1,
      desc: "Pengajuan diterima dan menunggu verifikasi."
    },
    DIVERIFIKASI: {
      label: "Diverifikasi",
      className: "status-warning",
      step: 2,
      desc: "Berkas sedang diverifikasi oleh petugas."
    },
    DIDISPOSISIKAN: {
      label: "Didisposisikan",
      className: "status-teal",
      step: 3,
      desc: "Pengajuan telah diteruskan ke petugas terkait."
    },
    DIPROSES: {
      label: "Sedang Diproses",
      className: "status-primary",
      step: 4,
      desc: "Permohonan Anda sedang diproses oleh petugas."
    },
    DITANGGAPI: {
      label: "Ditanggapi",
      className: "status-indigo",
      step: 5,
      desc: "Petugas telah memberikan tanggapan atas pengajuan."
    },
    DITOLAK: {
      label: "Ditolak",
      className: "status-danger",
      step: 5,
      desc: "Pengajuan ditolak. Periksa catatan atau hubungi petugas."
    },
    SELESAI: {
      label: "Selesai",
      className: "status-success",
      step: 5,
      desc: "Pengajuan telah selesai diproses."
    }
  };
  const currentStatus = STATUS_CONFIG[normalizedStatus] || STATUS_CONFIG.DIPROSES;
  const stepIndex = currentStatus.step;
  const isRejected = normalizedStatus === "DITOLAK";
  const step5Label = normalizedStatus === "SELESAI" ? "Selesai" : isRejected ? "Ditolak" : "Ditanggapi";
  return renderTemplate(_a || (_a = __template(['<html lang="en" dir="ltr" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical" data-astro-cid-fbx25b4c> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="shortcut icon" type="image/png" href="/apple-touch-icon.png"><link rel="stylesheet" href="/assets/css/styles.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap"><title>Lacak Status Pengajuan</title>', '</head> <body class="tracking-page" data-astro-cid-fbx25b4c> <header class="header portal-header" data-astro-cid-fbx25b4c> <nav class="navbar navbar-expand-lg py-0 portal-nav" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <a class="navbar-brand me-0 py-0 portal-brand" href="/form_layanan" data-astro-cid-fbx25b4c> <img src="/kominfo.png" width="150" alt="Logo Diskominfo" data-astro-cid-fbx25b4c> </a> <button class="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" data-astro-cid-fbx25b4c> <i class="ti ti-menu-2 fs-9" data-astro-cid-fbx25b4c></i> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent" data-astro-cid-fbx25b4c> <ul class="navbar-nav align-items-center mb-2 mb-lg-0 ms-auto" data-astro-cid-fbx25b4c> <li class="nav-item" data-astro-cid-fbx25b4c> <a class="nav-link" href="/form_layanan#top" data-astro-cid-fbx25b4c>Beranda</a> </li> <li class="nav-item" data-astro-cid-fbx25b4c> <a class="nav-link" href="/form_layanan#alur-layanan" data-astro-cid-fbx25b4c>Panduan</a> </li> <li class="nav-item ms-3" data-astro-cid-fbx25b4c> <a class="btn portal-cta" href="/form_layanan/tracking" data-astro-cid-fbx25b4c> <i class="ti ti-search" data-astro-cid-fbx25b4c></i>\nTracking\n</a> </li> </ul> </div> </div> </nav> </header> <main data-astro-cid-fbx25b4c> <section class="tracking-hero" data-astro-cid-fbx25b4c> <!-- <img\n          class="tracking-clouds"\n          src="/assets/illustrations/tracking-clouds.png"\n          alt="Awan"\n        /> --> <div class="container" data-astro-cid-fbx25b4c> <div class="tracking-shell" data-astro-cid-fbx25b4c> <h1 class="tracking-title" data-astro-cid-fbx25b4c>Lacak Status Pengajuan Anda</h1> <p class="tracking-subtitle" data-astro-cid-fbx25b4c>\nMasukkan nomor tiket Anda untuk mengecek status layanan yang\n              diajukan.\n</p> <div class="tracking-search-shell" data-astro-cid-fbx25b4c> <form id="tracking-form" class="tracking-search" data-astro-cid-fbx25b4c> <div class="tracking-input-wrap" data-astro-cid-fbx25b4c> <span class="tracking-search-icon" data-astro-cid-fbx25b4c> <i class="ti ti-search" data-astro-cid-fbx25b4c></i> </span> <input id="ticket-input" class="tracking-input" type="text" name="ticket" placeholder="Masukkan nomor tiket / nik anda"', ' data-astro-cid-fbx25b4c> </div> <button type="submit" class="tracking-button" id="tracking-submit" data-astro-cid-fbx25b4c>\nCek Status\n</button> </form> </div> <div id="tracking-alert" class="tracking-alert d-none" data-astro-cid-fbx25b4c></div> </div> </div> </section> <section', ' id="tracking-result-section" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <div class="result-card" data-astro-cid-fbx25b4c> <div class="result-left" data-astro-cid-fbx25b4c> <div class="result-header" data-astro-cid-fbx25b4c> <span', ' id="current-status-pill" data-astro-cid-fbx25b4c> <i class="ti ti-loader" data-astro-cid-fbx25b4c></i> <span id="current-status-label" data-astro-cid-fbx25b4c>', '</span> </span> </div> <div class="ticket-block" data-astro-cid-fbx25b4c> <div class="ticket-icon" data-astro-cid-fbx25b4c> <img src="/tiket.png" alt="Ikon tiket" data-astro-cid-fbx25b4c> </div> <div data-astro-cid-fbx25b4c> <div class="ticket-number" id="ticket-display" data-astro-cid-fbx25b4c> ', ' </div> <div class="ticket-meta" id="ticket-service" data-astro-cid-fbx25b4c>\nAjukan Layanan / Pengaduan\n</div> </div> </div> <div class="ticket-meta" data-astro-cid-fbx25b4c>\nDiajukan Pada: <span id="submitted-date" data-astro-cid-fbx25b4c>24 April 2024</span> </div> <div class="status-note d-none" id="status-note" data-astro-cid-fbx25b4c> <div class="status-note-title" data-astro-cid-fbx25b4c>Keterangan Penolakan</div> <div class="status-note-body" id="status-note-text" data-astro-cid-fbx25b4c></div> </div> <div class="biodata-card" data-astro-cid-fbx25b4c> <div class="biodata-title" data-astro-cid-fbx25b4c>Biodata Pemohon</div> <ul class="biodata-list" data-astro-cid-fbx25b4c> <li class="biodata-item" data-biodata-field="nama" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-user" data-astro-cid-fbx25b4c></i> </span>\nNama: <span data-biodata-value="nama" data-astro-cid-fbx25b4c>Budi Santoso</span> </li> <li class="biodata-item" data-biodata-field="nik" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-id-badge" data-astro-cid-fbx25b4c></i> </span>\nNIK: <span data-biodata-value="nik" data-astro-cid-fbx25b4c>3508280000010001</span> </li> <li class="biodata-item" data-biodata-field="alamat" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-map-pin" data-astro-cid-fbx25b4c></i> </span>\nAlamat:\n<span data-biodata-value="alamat" data-astro-cid-fbx25b4c>\nJl. Melati No. 12, Lumajang\n</span> </li> <li class="biodata-item" data-biodata-field="kontak" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-phone" data-astro-cid-fbx25b4c></i> </span>\nKontak: <span data-biodata-value="kontak" data-astro-cid-fbx25b4c>0812-3456-7890</span> </li> </ul> </div> <div class="progress-shell" data-astro-cid-fbx25b4c> <div class="progress-steps" data-astro-cid-fbx25b4c> <div', ' data-step-key="MASUK" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>Masuk</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> </div> <div', ' data-step-key="DIVERIFIKASI" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>Diverifikasi</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> </div> <!-- <div\n                    class={"progress-step step-blue " +\n                      (stepIndex >= 3 ? "" : "pending")}\n                    data-step-key="DIDISPOSISIKAN"\n                  >\n                    <span class="step-icon"\n                      ><i class="ti ti-check fa-2x"></i></span\n                    >\n                    <div class="step-meta">\n                      <span data-step-label>Didisposisikan</span>\n                      <small class="step-date" data-step-date> </small>\n                    </div>\n                  </div> --> <div', ' data-step-key="DIPROSES" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>Sedang Diproses</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> ', " </div> <div", ' data-step-key="STEP5" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>', '</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> </div> </div> <div class="estimate-card" data-astro-cid-fbx25b4c> <span class="estimate-icon" data-astro-cid-fbx25b4c> <i class="ti ti-calendar" data-astro-cid-fbx25b4c></i> </span> <div data-astro-cid-fbx25b4c> <div class="fw-semibold" data-astro-cid-fbx25b4c>Estimasi Penyelesaian</div> <div class="text-muted" data-biodata-field="penyelesaian" data-astro-cid-fbx25b4c>\nPada 26 April 2024\n</div> </div> </div> </div> <a class="home-action" href="/form_layanan#top" data-astro-cid-fbx25b4c>\nKembali ke Beranda\n<i class="ti ti-chevron-right" data-astro-cid-fbx25b4c></i> </a> </div> <div class="result-right" data-astro-cid-fbx25b4c> <div class="operator-card" data-astro-cid-fbx25b4c> <img src="/petugas.png" alt="Ilustrasi petugas" data-astro-cid-fbx25b4c> </div> <div class="faq-card" data-astro-cid-fbx25b4c> <h5 data-astro-cid-fbx25b4c>Pertanyaan Umum</h5> <!-- <div class="faq-item">\n                  <span>Bagaimana jika nomor tiket saya hilang?</span>\n                  <i class="ti ti-plus"></i>\n                </div>\n                <div class="faq-item">\n                  <span>\n                    Berapa lama proses layanan yang biasanya dibutuhkan?\n                  </span>\n                  <i class="ti ti-plus"></i>\n                </div> --> <div class="accordion" id="accordionExample" data-astro-cid-fbx25b4c> <div class="accordion-item" data-astro-cid-fbx25b4c> <h2 class="accordion-header" id="headingOne" data-astro-cid-fbx25b4c> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-astro-cid-fbx25b4c>\nBagaimana jika lupa nomor tiket saya ?\n</button> </h2> <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-astro-cid-fbx25b4c> <div class="accordion-body" data-astro-cid-fbx25b4c> <strong data-astro-cid-fbx25b4c>\nAnda bisa menggunakan NIK yang terdaftar pada saat\n                          pengajuan layanan untuk melacak status pengajuan anda,\n                          pastikan NIK yang dimasukkan benar dan sesuai dengan\n                          data yang terdaftar pada sistem kami.\n</strong> </div> </div> </div> <div class="accordion-item" data-astro-cid-fbx25b4c> <h2 class="accordion-header" id="headingTwo" data-astro-cid-fbx25b4c> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-astro-cid-fbx25b4c>\nBerapa lama proses layanan yang biasanya dibutuhkan ?\n</button> </h2> <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" data-astro-cid-fbx25b4c> <div class="accordion-body" data-astro-cid-fbx25b4c> <strong data-astro-cid-fbx25b4c>Estimasi waktu penyelesaian layanan dapat bervariasi\n                          tergantung pada jenis layanan yang diajukan dan\n                          kompleksitasnya.</strong> </div> </div> </div> </div> </div> </div> </div> </div> </section> <section', ` id="tracking-empty-section" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <div class="empty-card" data-astro-cid-fbx25b4c> <div class="empty-content" data-astro-cid-fbx25b4c> <h3 class="empty-title" data-astro-cid-fbx25b4c>Belum ada data untuk ditampilkan</h3> <p class="empty-text" data-astro-cid-fbx25b4c>
Masukkan nomor tiket yang Anda terima setelah pengajuan dikirim
                untuk melihat perkembangan status layanan.
</p> <div class="empty-actions" data-astro-cid-fbx25b4c> <a class="portal-cta" href="/form_layanan#top" data-astro-cid-fbx25b4c>
Ajukan Layanan Baru
</a> </div> </div> <div class="empty-illustration" data-astro-cid-fbx25b4c> <img src="/tracking_notfound.png" alt="Ilustrasi tracking kosong" data-astro-cid-fbx25b4c> </div> </div> </div> </section> <footer class="footer-part pt-7 pb-5" id="kontak" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <div class="row justify-content-center" data-astro-cid-fbx25b4c> <div class="col-lg-4" data-astro-cid-fbx25b4c> <div class="text-center" data-astro-cid-fbx25b4c> <a href="index-new.html" data-astro-cid-fbx25b4c> <img src="/kominfo.png" alt="modernize-img" class="img-fluid pb-3" data-astro-cid-fbx25b4c> </a> <p class="mb-0 text-dark" data-astro-cid-fbx25b4c>
All rights reserved by kominfo lumajang. Designed & Developed
                  Kha
<a class="text-dark text-hover-primary border-bottom border-primary" href="https://adminmart.com/" data-astro-cid-fbx25b4c>goitech.</a> </p> </div> </div> </div> </div> </footer> </main> <div class="offcanvas offcanvas-start modernize-lp-offcanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-astro-cid-fbx25b4c> <div class="offcanvas-header p-4" data-astro-cid-fbx25b4c> <img src="/kominfo.png" alt="modernize-img" class="img-fluid" width="150" data-astro-cid-fbx25b4c> </div> <div class="offcanvas-body p-4" data-astro-cid-fbx25b4c> <ul class="navbar-nav justify-content-end flex-grow-1" data-astro-cid-fbx25b4c> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#top" data-astro-cid-fbx25b4c>
Beranda
</a> </li> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#alur-layanan" data-astro-cid-fbx25b4c>
Panduan
</a> </li> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#tentang" data-astro-cid-fbx25b4c>
Tentang
</a> </li> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#kontak" data-astro-cid-fbx25b4c>
Kontak
</a> </li> </ul> <div class="d-flex mt-3" data-astro-cid-fbx25b4c> <a class="btn portal-cta w-100" href="/form_layanan/tracking" data-astro-cid-fbx25b4c> <i class="ti ti-search" data-astro-cid-fbx25b4c></i>
Tracking
</a> </div> </div> </div> <script src="/assets/js/vendor.min.js" defer><\/script> <script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" defer><\/script> <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js" defer><\/script> <script>
      window.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("tracking-form");
        const input = document.getElementById("ticket-input");
        const submitBtn = document.getElementById("tracking-submit");
        const resultSection = document.getElementById(
          "tracking-result-section",
        );
        const emptySection = document.getElementById("tracking-empty-section");
        const ticketDisplay = document.getElementById("ticket-display");
        const statusPill = document.getElementById("current-status-pill");
        const statusLabel = document.getElementById("current-status-label");
        const ticketService = document.getElementById("ticket-service");
        const submittedDate = document.getElementById("submitted-date");
        const inlinePill = document.getElementById("progress-inline-pill");
        const statusNote = document.getElementById("status-note");
        const statusNoteText = document.getElementById("status-note-text");
        const biodataValueEls = {
          nama: document.querySelector('[data-biodata-value="nama"]'),
          nik: document.querySelector('[data-biodata-value="nik"]'),
          alamat: document.querySelector('[data-biodata-value="alamat"]'),
          kontak: document.querySelector('[data-biodata-value="kontak"]'),
        };
        const biodataItemEls = {
          nama: document.querySelector('[data-biodata-field="nama"]'),
          nik: document.querySelector('[data-biodata-field="nik"]'),
          alamat: document.querySelector('[data-biodata-field="alamat"]'),
          kontak: document.querySelector('[data-biodata-field="kontak"]'),
          estimasi: document.querySelector(
            '[data-biodata-field="penyelesaian"]',
          ),
        };

        const STATUS_META = {
          MASUK: { label: "Masuk", className: "status-info", step: 1 },
          DIVERIFIKASI: {
            label: "Diverifikasi",
            className: "status-warning",
            step: 2,
          },
          DIDISPOSISIKAN: {
            label: "Didisposisikan",
            className: "status-teal",
            step: 3,
          },
          DIPROSES: {
            label: "Sedang Diproses",
            className: "status-primary",
            step: 4,
          },
          DITANGGAPI: {
            label: "Ditanggapi",
            className: "status-indigo",
            step: 5,
          },
          DITOLAK: { label: "Ditolak", className: "status-danger", step: 5 },
          SELESAI: { label: "Selesai", className: "status-success", step: 5 },
        };
        const STATUS_CLASSES = [
          "status-info",
          "status-warning",
          "status-teal",
          "status-primary",
          "status-indigo",
          "status-danger",
          "status-success",
        ];

        const normalizeStatus = (value) =>
          String(value || "")
            .trim()
            .toUpperCase()
            .replace(/\\s+/g, "");
        const formatDateId = (date) =>
          date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

        const parseEstimateDays = (value) => {
          if (value === null || value === undefined) return null;
          if (typeof value === "number" && Number.isFinite(value)) {
            return value;
          }
          const raw = String(value).trim();
          if (!raw) return null;
          const match = raw.replace(",", ".").match(/-?\\d+(\\.\\d+)?/);
          if (!match) return null;
          const parsed = Number(match[0]);
          return Number.isFinite(parsed) ? parsed : null;
        };

        const setBiodataField = (key, value) => {
          const itemEl = biodataItemEls[key];
          const valueEl = biodataValueEls[key];
          if (!itemEl || !valueEl) return;
          const hasValue =
            value !== null &&
            value !== undefined &&
            String(value).trim() !== "";
          itemEl.classList.toggle("d-none", !hasValue);
          if (hasValue) {
            valueEl.textContent = String(value);
          }
        };

        const setEstimateField = (value) => {
          const estimateEl = biodataItemEls.estimasi;
          if (!estimateEl) return;
          const estimateDays = parseEstimateDays(value);
          if (estimateDays !== null) {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + estimateDays);
            estimateEl.textContent = \`Pada \${formatDateId(targetDate)}\`;
            estimateEl.classList.remove("d-none");
            return;
          }

          const parsedDate = value ? Date.parse(String(value)) : NaN;
          if (!Number.isNaN(parsedDate)) {
            estimateEl.textContent = \`Pada \${formatDateId(
              new Date(parsedDate),
            )}\`;
            estimateEl.classList.remove("d-none");
            return;
          }

          estimateEl.classList.add("d-none");
        };

        const getProgressLabel = (item) => item?.status;

        const getProgressNote = (item) => {
          const raw =
            item?.keterangan ??
            item?.catatan ??
            item?.alasan ??
            item?.deskripsi ??
            item?.note;
          if (raw === null || raw === undefined) return "";
          return String(raw).trim();
        };

        const getRejectionNote = (progres) => {
          if (!Array.isArray(progres)) return "";
          const found = progres.find(
            (item) => normalizeStatus(getProgressLabel(item)) === "DITOLAK",
          );
          return getProgressNote(found);
        };

        const getProgressDate = (item) => {
          const tanggalTracking = item?.tanggal_tracking;
          const waktuTracking = item?.waktu_tracking;
          if (tanggalTracking && waktuTracking) {
            return \`\${tanggalTracking} \${waktuTracking}\`;
          }
          return tanggalTracking || waktuTracking || "";
        };

        const getStatusKeyFromProgress = (progres, fallbackStatus) => {
          let bestKey = normalizeStatus(fallbackStatus);
          let bestStep = STATUS_META[bestKey]?.step || 0;

          if (Array.isArray(progres)) {
            progres.forEach((item) => {
              const key = normalizeStatus(getProgressLabel(item));
              const step = STATUS_META[key]?.step || 0;
              if (step > bestStep) {
                bestStep = step;
                bestKey = key;
              }
            });
          }

          return bestKey || "DIPROSES";
        };

        const buildProgressMap = (progres) => {
          const map = new Map();

          if (!Array.isArray(progres)) return map;
          progres.forEach((item) => {
            const label = getProgressLabel(item);
            const key = normalizeStatus(label);
            if (!key) return;
            map.set(key, {
              label: label,
              date: getProgressDate(item),
              note: getProgressNote(item),
            });
          });
          return map;
        };

        const updateStatusPill = (statusKey, rawLabel) => {
          if (!statusPill || !statusLabel) return;
          const meta = STATUS_META[statusKey] || STATUS_META.DIPROSES;
          statusLabel.textContent =
            rawLabel || meta?.label || "Sedang Diproses";
          statusPill.classList.remove(...STATUS_CLASSES);
          if (meta?.className) {
            statusPill.classList.add(meta.className);
          }
        };

        const updateProgressSteps = (progres, statusKey) => {
          const progressMap = buildProgressMap(progres);
          const maxStep = Array.from(progressMap.keys()).reduce((max, key) => {
            const step = STATUS_META[key]?.step || 0;
            return Math.max(max, step);
          }, 0);
          const stepIndex = STATUS_META[statusKey]?.step || 0;
          const currentStepIndex = Math.max(stepIndex, maxStep);
          const steps = document.querySelectorAll(
            ".progress-step[data-step-key]",
          );
          const hideRejectedSteps = statusKey === "DITOLAK";
          const step5Key =
            STATUS_META[statusKey]?.step === 5
              ? statusKey
              : progressMap.has("DITOLAK")
                ? "DITOLAK"
                : progressMap.has("SELESAI")
                  ? "SELESAI"
                  : "DITANGGAPI";
          const currentStepKey =
            currentStepIndex === 5
              ? step5Key
              : currentStepIndex === 4
                ? "DIPROSES"
                : currentStepIndex === 3
                  ? "DIDISPOSISIKAN"
                  : currentStepIndex === 2
                    ? "DIVERIFIKASI"
                    : "MASUK";

          const setDateVisibility = (el, value) => {
            if (!el) return;
            const hasValue =
              value !== null &&
              value !== undefined &&
              String(value).trim() !== "";
            el.classList.toggle("d-none", !hasValue);
            el.textContent = hasValue ? String(value) : "";
          };

          steps.forEach((stepEl) => {
            const key = stepEl.dataset.stepKey;
            const labelEl = stepEl.querySelector("[data-step-label]");
            const dateEl = stepEl.querySelector("[data-step-date]");
            const stepNumber =
              key === "STEP5" ? 5 : STATUS_META[key]?.step || 0;
            const shouldHideStep =
              hideRejectedSteps &&
              (key === "DIVERIFIKASI" || key === "DIPROSES");
            stepEl.classList.toggle("d-none", shouldHideStep);
            if (shouldHideStep) return;
            const isDone = stepNumber
              ? currentStepIndex >= stepNumber
              : progressMap.has(key);
            const isCurrent = stepNumber
              ? currentStepIndex === stepNumber
              : false;
            const isComplete = stepNumber
              ? currentStepIndex > stepNumber
              : false;

            stepEl.classList.toggle("pending", !isDone);
            stepEl.classList.toggle("is-current", isCurrent && isDone);
            stepEl.classList.toggle("is-complete", isComplete && isDone);

            if (key === "STEP5") {
              const label =
                STATUS_META[step5Key]?.label ||
                labelEl?.textContent ||
                "Ditanggapi";
              const date =
                progressMap.get(step5Key)?.date ||
                progressMap.get("DITANGGAPI")?.date ||
                progressMap.get("SELESAI")?.date ||
                progressMap.get("DITOLAK")?.date;
              if (labelEl) labelEl.textContent = label;
              setDateVisibility(dateEl, date);
              stepEl.classList.toggle("danger", step5Key === "DITOLAK");
              return;
            }

            const label =
              STATUS_META[key]?.label || progressMap.get(key)?.label;
            const date = progressMap.get(key)?.date;
            if (labelEl && label) labelEl.textContent = label;
            setDateVisibility(dateEl, date);
          });

          if (inlinePill) {
            inlinePill.classList.toggle(
              "d-none",
              currentStepKey !== "DIPROSES",
            );
          }
        };

        const updateTrackingUI = (data, ticketValue) => {
          const biodata = data?.biodata || {};
          const progres = data?.progres || [];
          const fallbackStatus = data?.status_laporan || biodata?.status;
          const statusKey = getStatusKeyFromProgress(progres, fallbackStatus);

          const statusLabelText =
            STATUS_META[statusKey]?.label ||
            fallbackStatus ||
            "Sedang Diproses";

          if (ticketDisplay) {
            ticketDisplay.textContent = biodata?.tiket;
          }

          const layananText = biodata?.layanan;
          if (ticketService && layananText) {
            ticketService.textContent = layananText;
          }

          const submittedText = biodata?.tanggal_pengajuan;
          if (submittedDate && submittedText) {
            submittedDate.textContent = submittedText;
          }

          const estimateValue = biodata?.estimasi_selesai;
          setEstimateField(estimateValue);

          setBiodataField("nama", biodata?.nama);
          setBiodataField("nik", biodata?.nik);
          setBiodataField("alamat", biodata?.alamat);
          setBiodataField("kontak", biodata?.no_hp);

          if (statusNote && statusNoteText) {
            const rejectionNote =
              statusKey === "DITOLAK"
                ? getRejectionNote(progres) ||
                  data?.keterangan ||
                  data?.catatan ||
                  ""
                : "";
            const hasNote = String(rejectionNote || "").trim() !== "";
            statusNote.classList.toggle("d-none", !hasNote);
            statusNoteText.textContent = hasNote ? String(rejectionNote) : "";
          }

          updateStatusPill(statusKey, statusLabelText);
          updateProgressSteps(progres, statusKey);

          emptySection?.classList.add("d-none");
          resultSection?.classList.remove("d-none");
          return statusLabelText;
        };

        if (form && input) {
          form.addEventListener("submit", (event) => {
            event.preventDefault();
            const value = input.value.trim();
            if (!value) {
              showAlert(
                "warning",
                "Nomor tiket kosong",
                "Silakan masukkan nomor tiket terlebih dahulu.",
              );
              return;
            }
            submitTracking(value);
          });
        }

        if (input?.value?.trim()) {
          submitTracking(input.value.trim());
        }

        async function submitTracking(value) {
          showLoading("Mencari data...", "Mohon tunggu sebentar");
          submitBtn?.classList.add("is-loading");
          submitBtn?.setAttribute("disabled", "true");

          try {
            const res = await fetch(\`/api/backend/tracking\`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ pos: value }),
            });
            if (res.status === 404) {
              showAlert(
                "error",
                "Nomor tiket tidak ditemukan",
                "Periksa kembali nomor tiket Anda.",
              );
              emptySection?.classList.remove("d-none");
              resultSection?.classList.add("d-none");
            } else {
              const data = await res.json().catch(() => null);
              const statusValue = data?.status_laporan;

              if (typeof Swal !== "undefined" && Swal.isVisible?.()) {
                Swal.close();
              }
              console.log(data);
              if (data) {
                const statusLabelText = updateTrackingUI(data, value);
                const url = new URL(window.location.href);
                url.searchParams.set("ticket", value);
                if (statusLabelText || statusValue) {
                  url.searchParams.set(
                    "status",
                    statusLabelText || statusValue,
                  );
                }
                window.history.replaceState({}, "", url.toString());
              } else {
                emptySection?.classList.remove("d-none");
                resultSection?.classList.add("d-none");
              }
            }
          } catch (error) {
            console.error(error);
            resultSection?.classList.add("d-none");
            emptySection?.classList.remove("d-none");
            const errMsg = String(error?.message || "").toLowerCase();
            if (errMsg.includes("pengaduan not found")) {
              showAlert(
                "error",
                "Nomor tiket tidak ditemukan",
                "Periksa kembali nomor tiket Anda.",
              );
            } else {
              showAlert(
                "error",
                "Terjadi kesalahan",
                "Coba lagi beberapa saat.",
              );
            }
          } finally {
            // if (typeof Swal !== "undefined" && Swal.isVisible?.()) Swal.close();
            submitBtn?.classList.remove("is-loading");
            submitBtn?.removeAttribute("disabled");
          }
        }

        function showLoading(title, text) {
          if (typeof Swal === "undefined") return;
          if (Swal.isVisible?.()) {
            Swal.update({
              icon: undefined,
              title,
              text: text || "",
              showConfirmButton: false,
              allowOutsideClick: false,
              allowEnterKey: false,
              didOpen: () => Swal.showLoading(),
            });
          } else {
            Swal.fire({
              title,
              text: text || "",
              showConfirmButton: false,
              allowOutsideClick: false,
              allowEnterKey: false,
              didOpen: () => Swal.showLoading(),
            });
          }
        }

        function showAlert(icon, title, text) {
          if (typeof Swal === "undefined") return;
          if (Swal.isVisible?.()) Swal.close();
          return Swal.fire({
            icon,
            title,
            text,
            allowEnterKey: false,
          });
        }
      });
    <\/script> </body> </html>`], ['<html lang="en" dir="ltr" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical" data-astro-cid-fbx25b4c> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="shortcut icon" type="image/png" href="/apple-touch-icon.png"><link rel="stylesheet" href="/assets/css/styles.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap"><title>Lacak Status Pengajuan</title>', '</head> <body class="tracking-page" data-astro-cid-fbx25b4c> <header class="header portal-header" data-astro-cid-fbx25b4c> <nav class="navbar navbar-expand-lg py-0 portal-nav" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <a class="navbar-brand me-0 py-0 portal-brand" href="/form_layanan" data-astro-cid-fbx25b4c> <img src="/kominfo.png" width="150" alt="Logo Diskominfo" data-astro-cid-fbx25b4c> </a> <button class="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" data-astro-cid-fbx25b4c> <i class="ti ti-menu-2 fs-9" data-astro-cid-fbx25b4c></i> </button> <div class="collapse navbar-collapse" id="navbarSupportedContent" data-astro-cid-fbx25b4c> <ul class="navbar-nav align-items-center mb-2 mb-lg-0 ms-auto" data-astro-cid-fbx25b4c> <li class="nav-item" data-astro-cid-fbx25b4c> <a class="nav-link" href="/form_layanan#top" data-astro-cid-fbx25b4c>Beranda</a> </li> <li class="nav-item" data-astro-cid-fbx25b4c> <a class="nav-link" href="/form_layanan#alur-layanan" data-astro-cid-fbx25b4c>Panduan</a> </li> <li class="nav-item ms-3" data-astro-cid-fbx25b4c> <a class="btn portal-cta" href="/form_layanan/tracking" data-astro-cid-fbx25b4c> <i class="ti ti-search" data-astro-cid-fbx25b4c></i>\nTracking\n</a> </li> </ul> </div> </div> </nav> </header> <main data-astro-cid-fbx25b4c> <section class="tracking-hero" data-astro-cid-fbx25b4c> <!-- <img\n          class="tracking-clouds"\n          src="/assets/illustrations/tracking-clouds.png"\n          alt="Awan"\n        /> --> <div class="container" data-astro-cid-fbx25b4c> <div class="tracking-shell" data-astro-cid-fbx25b4c> <h1 class="tracking-title" data-astro-cid-fbx25b4c>Lacak Status Pengajuan Anda</h1> <p class="tracking-subtitle" data-astro-cid-fbx25b4c>\nMasukkan nomor tiket Anda untuk mengecek status layanan yang\n              diajukan.\n</p> <div class="tracking-search-shell" data-astro-cid-fbx25b4c> <form id="tracking-form" class="tracking-search" data-astro-cid-fbx25b4c> <div class="tracking-input-wrap" data-astro-cid-fbx25b4c> <span class="tracking-search-icon" data-astro-cid-fbx25b4c> <i class="ti ti-search" data-astro-cid-fbx25b4c></i> </span> <input id="ticket-input" class="tracking-input" type="text" name="ticket" placeholder="Masukkan nomor tiket / nik anda"', ' data-astro-cid-fbx25b4c> </div> <button type="submit" class="tracking-button" id="tracking-submit" data-astro-cid-fbx25b4c>\nCek Status\n</button> </form> </div> <div id="tracking-alert" class="tracking-alert d-none" data-astro-cid-fbx25b4c></div> </div> </div> </section> <section', ' id="tracking-result-section" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <div class="result-card" data-astro-cid-fbx25b4c> <div class="result-left" data-astro-cid-fbx25b4c> <div class="result-header" data-astro-cid-fbx25b4c> <span', ' id="current-status-pill" data-astro-cid-fbx25b4c> <i class="ti ti-loader" data-astro-cid-fbx25b4c></i> <span id="current-status-label" data-astro-cid-fbx25b4c>', '</span> </span> </div> <div class="ticket-block" data-astro-cid-fbx25b4c> <div class="ticket-icon" data-astro-cid-fbx25b4c> <img src="/tiket.png" alt="Ikon tiket" data-astro-cid-fbx25b4c> </div> <div data-astro-cid-fbx25b4c> <div class="ticket-number" id="ticket-display" data-astro-cid-fbx25b4c> ', ' </div> <div class="ticket-meta" id="ticket-service" data-astro-cid-fbx25b4c>\nAjukan Layanan / Pengaduan\n</div> </div> </div> <div class="ticket-meta" data-astro-cid-fbx25b4c>\nDiajukan Pada: <span id="submitted-date" data-astro-cid-fbx25b4c>24 April 2024</span> </div> <div class="status-note d-none" id="status-note" data-astro-cid-fbx25b4c> <div class="status-note-title" data-astro-cid-fbx25b4c>Keterangan Penolakan</div> <div class="status-note-body" id="status-note-text" data-astro-cid-fbx25b4c></div> </div> <div class="biodata-card" data-astro-cid-fbx25b4c> <div class="biodata-title" data-astro-cid-fbx25b4c>Biodata Pemohon</div> <ul class="biodata-list" data-astro-cid-fbx25b4c> <li class="biodata-item" data-biodata-field="nama" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-user" data-astro-cid-fbx25b4c></i> </span>\nNama: <span data-biodata-value="nama" data-astro-cid-fbx25b4c>Budi Santoso</span> </li> <li class="biodata-item" data-biodata-field="nik" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-id-badge" data-astro-cid-fbx25b4c></i> </span>\nNIK: <span data-biodata-value="nik" data-astro-cid-fbx25b4c>3508280000010001</span> </li> <li class="biodata-item" data-biodata-field="alamat" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-map-pin" data-astro-cid-fbx25b4c></i> </span>\nAlamat:\n<span data-biodata-value="alamat" data-astro-cid-fbx25b4c>\nJl. Melati No. 12, Lumajang\n</span> </li> <li class="biodata-item" data-biodata-field="kontak" data-astro-cid-fbx25b4c> <span class="biodata-icon" data-astro-cid-fbx25b4c> <i class="ti ti-phone" data-astro-cid-fbx25b4c></i> </span>\nKontak: <span data-biodata-value="kontak" data-astro-cid-fbx25b4c>0812-3456-7890</span> </li> </ul> </div> <div class="progress-shell" data-astro-cid-fbx25b4c> <div class="progress-steps" data-astro-cid-fbx25b4c> <div', ' data-step-key="MASUK" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>Masuk</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> </div> <div', ' data-step-key="DIVERIFIKASI" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>Diverifikasi</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> </div> <!-- <div\n                    class={"progress-step step-blue " +\n                      (stepIndex >= 3 ? "" : "pending")}\n                    data-step-key="DIDISPOSISIKAN"\n                  >\n                    <span class="step-icon"\n                      ><i class="ti ti-check fa-2x"></i></span\n                    >\n                    <div class="step-meta">\n                      <span data-step-label>Didisposisikan</span>\n                      <small class="step-date" data-step-date> </small>\n                    </div>\n                  </div> --> <div', ' data-step-key="DIPROSES" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>Sedang Diproses</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> ', " </div> <div", ' data-step-key="STEP5" data-astro-cid-fbx25b4c> <span class="step-icon" data-astro-cid-fbx25b4c><i class="ti ti-check fa-2x" data-astro-cid-fbx25b4c></i></span> <div class="step-meta" data-astro-cid-fbx25b4c> <span data-step-label data-astro-cid-fbx25b4c>', '</span> <small class="step-date" data-step-date data-astro-cid-fbx25b4c></small> </div> </div> </div> <div class="estimate-card" data-astro-cid-fbx25b4c> <span class="estimate-icon" data-astro-cid-fbx25b4c> <i class="ti ti-calendar" data-astro-cid-fbx25b4c></i> </span> <div data-astro-cid-fbx25b4c> <div class="fw-semibold" data-astro-cid-fbx25b4c>Estimasi Penyelesaian</div> <div class="text-muted" data-biodata-field="penyelesaian" data-astro-cid-fbx25b4c>\nPada 26 April 2024\n</div> </div> </div> </div> <a class="home-action" href="/form_layanan#top" data-astro-cid-fbx25b4c>\nKembali ke Beranda\n<i class="ti ti-chevron-right" data-astro-cid-fbx25b4c></i> </a> </div> <div class="result-right" data-astro-cid-fbx25b4c> <div class="operator-card" data-astro-cid-fbx25b4c> <img src="/petugas.png" alt="Ilustrasi petugas" data-astro-cid-fbx25b4c> </div> <div class="faq-card" data-astro-cid-fbx25b4c> <h5 data-astro-cid-fbx25b4c>Pertanyaan Umum</h5> <!-- <div class="faq-item">\n                  <span>Bagaimana jika nomor tiket saya hilang?</span>\n                  <i class="ti ti-plus"></i>\n                </div>\n                <div class="faq-item">\n                  <span>\n                    Berapa lama proses layanan yang biasanya dibutuhkan?\n                  </span>\n                  <i class="ti ti-plus"></i>\n                </div> --> <div class="accordion" id="accordionExample" data-astro-cid-fbx25b4c> <div class="accordion-item" data-astro-cid-fbx25b4c> <h2 class="accordion-header" id="headingOne" data-astro-cid-fbx25b4c> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-astro-cid-fbx25b4c>\nBagaimana jika lupa nomor tiket saya ?\n</button> </h2> <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-astro-cid-fbx25b4c> <div class="accordion-body" data-astro-cid-fbx25b4c> <strong data-astro-cid-fbx25b4c>\nAnda bisa menggunakan NIK yang terdaftar pada saat\n                          pengajuan layanan untuk melacak status pengajuan anda,\n                          pastikan NIK yang dimasukkan benar dan sesuai dengan\n                          data yang terdaftar pada sistem kami.\n</strong> </div> </div> </div> <div class="accordion-item" data-astro-cid-fbx25b4c> <h2 class="accordion-header" id="headingTwo" data-astro-cid-fbx25b4c> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-astro-cid-fbx25b4c>\nBerapa lama proses layanan yang biasanya dibutuhkan ?\n</button> </h2> <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" data-astro-cid-fbx25b4c> <div class="accordion-body" data-astro-cid-fbx25b4c> <strong data-astro-cid-fbx25b4c>Estimasi waktu penyelesaian layanan dapat bervariasi\n                          tergantung pada jenis layanan yang diajukan dan\n                          kompleksitasnya.</strong> </div> </div> </div> </div> </div> </div> </div> </div> </section> <section', ` id="tracking-empty-section" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <div class="empty-card" data-astro-cid-fbx25b4c> <div class="empty-content" data-astro-cid-fbx25b4c> <h3 class="empty-title" data-astro-cid-fbx25b4c>Belum ada data untuk ditampilkan</h3> <p class="empty-text" data-astro-cid-fbx25b4c>
Masukkan nomor tiket yang Anda terima setelah pengajuan dikirim
                untuk melihat perkembangan status layanan.
</p> <div class="empty-actions" data-astro-cid-fbx25b4c> <a class="portal-cta" href="/form_layanan#top" data-astro-cid-fbx25b4c>
Ajukan Layanan Baru
</a> </div> </div> <div class="empty-illustration" data-astro-cid-fbx25b4c> <img src="/tracking_notfound.png" alt="Ilustrasi tracking kosong" data-astro-cid-fbx25b4c> </div> </div> </div> </section> <footer class="footer-part pt-7 pb-5" id="kontak" data-astro-cid-fbx25b4c> <div class="container" data-astro-cid-fbx25b4c> <div class="row justify-content-center" data-astro-cid-fbx25b4c> <div class="col-lg-4" data-astro-cid-fbx25b4c> <div class="text-center" data-astro-cid-fbx25b4c> <a href="index-new.html" data-astro-cid-fbx25b4c> <img src="/kominfo.png" alt="modernize-img" class="img-fluid pb-3" data-astro-cid-fbx25b4c> </a> <p class="mb-0 text-dark" data-astro-cid-fbx25b4c>
All rights reserved by kominfo lumajang. Designed & Developed
                  Kha
<a class="text-dark text-hover-primary border-bottom border-primary" href="https://adminmart.com/" data-astro-cid-fbx25b4c>goitech.</a> </p> </div> </div> </div> </div> </footer> </main> <div class="offcanvas offcanvas-start modernize-lp-offcanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" data-astro-cid-fbx25b4c> <div class="offcanvas-header p-4" data-astro-cid-fbx25b4c> <img src="/kominfo.png" alt="modernize-img" class="img-fluid" width="150" data-astro-cid-fbx25b4c> </div> <div class="offcanvas-body p-4" data-astro-cid-fbx25b4c> <ul class="navbar-nav justify-content-end flex-grow-1" data-astro-cid-fbx25b4c> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#top" data-astro-cid-fbx25b4c>
Beranda
</a> </li> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#alur-layanan" data-astro-cid-fbx25b4c>
Panduan
</a> </li> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#tentang" data-astro-cid-fbx25b4c>
Tentang
</a> </li> <li class="nav-item mt-3" data-astro-cid-fbx25b4c> <a class="nav-link fs-3 text-dark" href="/form_layanan#kontak" data-astro-cid-fbx25b4c>
Kontak
</a> </li> </ul> <div class="d-flex mt-3" data-astro-cid-fbx25b4c> <a class="btn portal-cta w-100" href="/form_layanan/tracking" data-astro-cid-fbx25b4c> <i class="ti ti-search" data-astro-cid-fbx25b4c></i>
Tracking
</a> </div> </div> </div> <script src="/assets/js/vendor.min.js" defer><\/script> <script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" defer><\/script> <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js" defer><\/script> <script>
      window.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("tracking-form");
        const input = document.getElementById("ticket-input");
        const submitBtn = document.getElementById("tracking-submit");
        const resultSection = document.getElementById(
          "tracking-result-section",
        );
        const emptySection = document.getElementById("tracking-empty-section");
        const ticketDisplay = document.getElementById("ticket-display");
        const statusPill = document.getElementById("current-status-pill");
        const statusLabel = document.getElementById("current-status-label");
        const ticketService = document.getElementById("ticket-service");
        const submittedDate = document.getElementById("submitted-date");
        const inlinePill = document.getElementById("progress-inline-pill");
        const statusNote = document.getElementById("status-note");
        const statusNoteText = document.getElementById("status-note-text");
        const biodataValueEls = {
          nama: document.querySelector('[data-biodata-value="nama"]'),
          nik: document.querySelector('[data-biodata-value="nik"]'),
          alamat: document.querySelector('[data-biodata-value="alamat"]'),
          kontak: document.querySelector('[data-biodata-value="kontak"]'),
        };
        const biodataItemEls = {
          nama: document.querySelector('[data-biodata-field="nama"]'),
          nik: document.querySelector('[data-biodata-field="nik"]'),
          alamat: document.querySelector('[data-biodata-field="alamat"]'),
          kontak: document.querySelector('[data-biodata-field="kontak"]'),
          estimasi: document.querySelector(
            '[data-biodata-field="penyelesaian"]',
          ),
        };

        const STATUS_META = {
          MASUK: { label: "Masuk", className: "status-info", step: 1 },
          DIVERIFIKASI: {
            label: "Diverifikasi",
            className: "status-warning",
            step: 2,
          },
          DIDISPOSISIKAN: {
            label: "Didisposisikan",
            className: "status-teal",
            step: 3,
          },
          DIPROSES: {
            label: "Sedang Diproses",
            className: "status-primary",
            step: 4,
          },
          DITANGGAPI: {
            label: "Ditanggapi",
            className: "status-indigo",
            step: 5,
          },
          DITOLAK: { label: "Ditolak", className: "status-danger", step: 5 },
          SELESAI: { label: "Selesai", className: "status-success", step: 5 },
        };
        const STATUS_CLASSES = [
          "status-info",
          "status-warning",
          "status-teal",
          "status-primary",
          "status-indigo",
          "status-danger",
          "status-success",
        ];

        const normalizeStatus = (value) =>
          String(value || "")
            .trim()
            .toUpperCase()
            .replace(/\\\\s+/g, "");
        const formatDateId = (date) =>
          date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

        const parseEstimateDays = (value) => {
          if (value === null || value === undefined) return null;
          if (typeof value === "number" && Number.isFinite(value)) {
            return value;
          }
          const raw = String(value).trim();
          if (!raw) return null;
          const match = raw.replace(",", ".").match(/-?\\\\d+(\\\\.\\\\d+)?/);
          if (!match) return null;
          const parsed = Number(match[0]);
          return Number.isFinite(parsed) ? parsed : null;
        };

        const setBiodataField = (key, value) => {
          const itemEl = biodataItemEls[key];
          const valueEl = biodataValueEls[key];
          if (!itemEl || !valueEl) return;
          const hasValue =
            value !== null &&
            value !== undefined &&
            String(value).trim() !== "";
          itemEl.classList.toggle("d-none", !hasValue);
          if (hasValue) {
            valueEl.textContent = String(value);
          }
        };

        const setEstimateField = (value) => {
          const estimateEl = biodataItemEls.estimasi;
          if (!estimateEl) return;
          const estimateDays = parseEstimateDays(value);
          if (estimateDays !== null) {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + estimateDays);
            estimateEl.textContent = \\\`Pada \\\${formatDateId(targetDate)}\\\`;
            estimateEl.classList.remove("d-none");
            return;
          }

          const parsedDate = value ? Date.parse(String(value)) : NaN;
          if (!Number.isNaN(parsedDate)) {
            estimateEl.textContent = \\\`Pada \\\${formatDateId(
              new Date(parsedDate),
            )}\\\`;
            estimateEl.classList.remove("d-none");
            return;
          }

          estimateEl.classList.add("d-none");
        };

        const getProgressLabel = (item) => item?.status;

        const getProgressNote = (item) => {
          const raw =
            item?.keterangan ??
            item?.catatan ??
            item?.alasan ??
            item?.deskripsi ??
            item?.note;
          if (raw === null || raw === undefined) return "";
          return String(raw).trim();
        };

        const getRejectionNote = (progres) => {
          if (!Array.isArray(progres)) return "";
          const found = progres.find(
            (item) => normalizeStatus(getProgressLabel(item)) === "DITOLAK",
          );
          return getProgressNote(found);
        };

        const getProgressDate = (item) => {
          const tanggalTracking = item?.tanggal_tracking;
          const waktuTracking = item?.waktu_tracking;
          if (tanggalTracking && waktuTracking) {
            return \\\`\\\${tanggalTracking} \\\${waktuTracking}\\\`;
          }
          return tanggalTracking || waktuTracking || "";
        };

        const getStatusKeyFromProgress = (progres, fallbackStatus) => {
          let bestKey = normalizeStatus(fallbackStatus);
          let bestStep = STATUS_META[bestKey]?.step || 0;

          if (Array.isArray(progres)) {
            progres.forEach((item) => {
              const key = normalizeStatus(getProgressLabel(item));
              const step = STATUS_META[key]?.step || 0;
              if (step > bestStep) {
                bestStep = step;
                bestKey = key;
              }
            });
          }

          return bestKey || "DIPROSES";
        };

        const buildProgressMap = (progres) => {
          const map = new Map();

          if (!Array.isArray(progres)) return map;
          progres.forEach((item) => {
            const label = getProgressLabel(item);
            const key = normalizeStatus(label);
            if (!key) return;
            map.set(key, {
              label: label,
              date: getProgressDate(item),
              note: getProgressNote(item),
            });
          });
          return map;
        };

        const updateStatusPill = (statusKey, rawLabel) => {
          if (!statusPill || !statusLabel) return;
          const meta = STATUS_META[statusKey] || STATUS_META.DIPROSES;
          statusLabel.textContent =
            rawLabel || meta?.label || "Sedang Diproses";
          statusPill.classList.remove(...STATUS_CLASSES);
          if (meta?.className) {
            statusPill.classList.add(meta.className);
          }
        };

        const updateProgressSteps = (progres, statusKey) => {
          const progressMap = buildProgressMap(progres);
          const maxStep = Array.from(progressMap.keys()).reduce((max, key) => {
            const step = STATUS_META[key]?.step || 0;
            return Math.max(max, step);
          }, 0);
          const stepIndex = STATUS_META[statusKey]?.step || 0;
          const currentStepIndex = Math.max(stepIndex, maxStep);
          const steps = document.querySelectorAll(
            ".progress-step[data-step-key]",
          );
          const hideRejectedSteps = statusKey === "DITOLAK";
          const step5Key =
            STATUS_META[statusKey]?.step === 5
              ? statusKey
              : progressMap.has("DITOLAK")
                ? "DITOLAK"
                : progressMap.has("SELESAI")
                  ? "SELESAI"
                  : "DITANGGAPI";
          const currentStepKey =
            currentStepIndex === 5
              ? step5Key
              : currentStepIndex === 4
                ? "DIPROSES"
                : currentStepIndex === 3
                  ? "DIDISPOSISIKAN"
                  : currentStepIndex === 2
                    ? "DIVERIFIKASI"
                    : "MASUK";

          const setDateVisibility = (el, value) => {
            if (!el) return;
            const hasValue =
              value !== null &&
              value !== undefined &&
              String(value).trim() !== "";
            el.classList.toggle("d-none", !hasValue);
            el.textContent = hasValue ? String(value) : "";
          };

          steps.forEach((stepEl) => {
            const key = stepEl.dataset.stepKey;
            const labelEl = stepEl.querySelector("[data-step-label]");
            const dateEl = stepEl.querySelector("[data-step-date]");
            const stepNumber =
              key === "STEP5" ? 5 : STATUS_META[key]?.step || 0;
            const shouldHideStep =
              hideRejectedSteps &&
              (key === "DIVERIFIKASI" || key === "DIPROSES");
            stepEl.classList.toggle("d-none", shouldHideStep);
            if (shouldHideStep) return;
            const isDone = stepNumber
              ? currentStepIndex >= stepNumber
              : progressMap.has(key);
            const isCurrent = stepNumber
              ? currentStepIndex === stepNumber
              : false;
            const isComplete = stepNumber
              ? currentStepIndex > stepNumber
              : false;

            stepEl.classList.toggle("pending", !isDone);
            stepEl.classList.toggle("is-current", isCurrent && isDone);
            stepEl.classList.toggle("is-complete", isComplete && isDone);

            if (key === "STEP5") {
              const label =
                STATUS_META[step5Key]?.label ||
                labelEl?.textContent ||
                "Ditanggapi";
              const date =
                progressMap.get(step5Key)?.date ||
                progressMap.get("DITANGGAPI")?.date ||
                progressMap.get("SELESAI")?.date ||
                progressMap.get("DITOLAK")?.date;
              if (labelEl) labelEl.textContent = label;
              setDateVisibility(dateEl, date);
              stepEl.classList.toggle("danger", step5Key === "DITOLAK");
              return;
            }

            const label =
              STATUS_META[key]?.label || progressMap.get(key)?.label;
            const date = progressMap.get(key)?.date;
            if (labelEl && label) labelEl.textContent = label;
            setDateVisibility(dateEl, date);
          });

          if (inlinePill) {
            inlinePill.classList.toggle(
              "d-none",
              currentStepKey !== "DIPROSES",
            );
          }
        };

        const updateTrackingUI = (data, ticketValue) => {
          const biodata = data?.biodata || {};
          const progres = data?.progres || [];
          const fallbackStatus = data?.status_laporan || biodata?.status;
          const statusKey = getStatusKeyFromProgress(progres, fallbackStatus);

          const statusLabelText =
            STATUS_META[statusKey]?.label ||
            fallbackStatus ||
            "Sedang Diproses";

          if (ticketDisplay) {
            ticketDisplay.textContent = biodata?.tiket;
          }

          const layananText = biodata?.layanan;
          if (ticketService && layananText) {
            ticketService.textContent = layananText;
          }

          const submittedText = biodata?.tanggal_pengajuan;
          if (submittedDate && submittedText) {
            submittedDate.textContent = submittedText;
          }

          const estimateValue = biodata?.estimasi_selesai;
          setEstimateField(estimateValue);

          setBiodataField("nama", biodata?.nama);
          setBiodataField("nik", biodata?.nik);
          setBiodataField("alamat", biodata?.alamat);
          setBiodataField("kontak", biodata?.no_hp);

          if (statusNote && statusNoteText) {
            const rejectionNote =
              statusKey === "DITOLAK"
                ? getRejectionNote(progres) ||
                  data?.keterangan ||
                  data?.catatan ||
                  ""
                : "";
            const hasNote = String(rejectionNote || "").trim() !== "";
            statusNote.classList.toggle("d-none", !hasNote);
            statusNoteText.textContent = hasNote ? String(rejectionNote) : "";
          }

          updateStatusPill(statusKey, statusLabelText);
          updateProgressSteps(progres, statusKey);

          emptySection?.classList.add("d-none");
          resultSection?.classList.remove("d-none");
          return statusLabelText;
        };

        if (form && input) {
          form.addEventListener("submit", (event) => {
            event.preventDefault();
            const value = input.value.trim();
            if (!value) {
              showAlert(
                "warning",
                "Nomor tiket kosong",
                "Silakan masukkan nomor tiket terlebih dahulu.",
              );
              return;
            }
            submitTracking(value);
          });
        }

        if (input?.value?.trim()) {
          submitTracking(input.value.trim());
        }

        async function submitTracking(value) {
          showLoading("Mencari data...", "Mohon tunggu sebentar");
          submitBtn?.classList.add("is-loading");
          submitBtn?.setAttribute("disabled", "true");

          try {
            const res = await fetch(\\\`/api/backend/tracking\\\`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ pos: value }),
            });
            if (res.status === 404) {
              showAlert(
                "error",
                "Nomor tiket tidak ditemukan",
                "Periksa kembali nomor tiket Anda.",
              );
              emptySection?.classList.remove("d-none");
              resultSection?.classList.add("d-none");
            } else {
              const data = await res.json().catch(() => null);
              const statusValue = data?.status_laporan;

              if (typeof Swal !== "undefined" && Swal.isVisible?.()) {
                Swal.close();
              }
              console.log(data);
              if (data) {
                const statusLabelText = updateTrackingUI(data, value);
                const url = new URL(window.location.href);
                url.searchParams.set("ticket", value);
                if (statusLabelText || statusValue) {
                  url.searchParams.set(
                    "status",
                    statusLabelText || statusValue,
                  );
                }
                window.history.replaceState({}, "", url.toString());
              } else {
                emptySection?.classList.remove("d-none");
                resultSection?.classList.add("d-none");
              }
            }
          } catch (error) {
            console.error(error);
            resultSection?.classList.add("d-none");
            emptySection?.classList.remove("d-none");
            const errMsg = String(error?.message || "").toLowerCase();
            if (errMsg.includes("pengaduan not found")) {
              showAlert(
                "error",
                "Nomor tiket tidak ditemukan",
                "Periksa kembali nomor tiket Anda.",
              );
            } else {
              showAlert(
                "error",
                "Terjadi kesalahan",
                "Coba lagi beberapa saat.",
              );
            }
          } finally {
            // if (typeof Swal !== "undefined" && Swal.isVisible?.()) Swal.close();
            submitBtn?.classList.remove("is-loading");
            submitBtn?.removeAttribute("disabled");
          }
        }

        function showLoading(title, text) {
          if (typeof Swal === "undefined") return;
          if (Swal.isVisible?.()) {
            Swal.update({
              icon: undefined,
              title,
              text: text || "",
              showConfirmButton: false,
              allowOutsideClick: false,
              allowEnterKey: false,
              didOpen: () => Swal.showLoading(),
            });
          } else {
            Swal.fire({
              title,
              text: text || "",
              showConfirmButton: false,
              allowOutsideClick: false,
              allowEnterKey: false,
              didOpen: () => Swal.showLoading(),
            });
          }
        }

        function showAlert(icon, title, text) {
          if (typeof Swal === "undefined") return;
          if (Swal.isVisible?.()) Swal.close();
          return Swal.fire({
            icon,
            title,
            text,
            allowEnterKey: false,
          });
        }
      });
    <\/script> </body> </html>`])), renderHead(), addAttribute(ticket, "value"), addAttribute(`tracking-result ${hasTicket ? "" : "d-none"}`, "class"), addAttribute("status-pill " + currentStatus.className, "class"), currentStatus.label, displayTicket, addAttribute("progress-step step-green " + (stepIndex >= 1 ? "" : "pending"), "class"), addAttribute("progress-step step-blue " + (stepIndex >= 2 ? "" : "pending") + (isRejected ? " d-none" : ""), "class"), addAttribute("progress-step step-yellow " + (stepIndex >= 4 ? "" : "pending") + (isRejected ? " d-none" : ""), "class"), renderTemplate`<span${addAttribute(
    "status-pill-inline " + (stepIndex === 4 ? "" : "d-none"),
    "class"
  )} id="progress-inline-pill" data-astro-cid-fbx25b4c>
Sedang Diproses
</span>`, addAttribute("progress-step step-blue " + (stepIndex >= 5 ? "" : "pending"), "class"), step5Label, addAttribute(`tracking-empty ${hasTicket ? "d-none" : ""}`, "class"));
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/form_layanan/tracking.astro", void 0);

const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/form_layanan/tracking.astro";
const $$url = "/form_layanan/tracking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tracking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
