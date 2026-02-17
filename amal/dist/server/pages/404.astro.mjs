import { e as createComponent, r as renderTemplate, k as renderScript, l as renderHead } from '../chunks/astro/server_BcueGiGm.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" dir="ltr" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical"> <head><!-- Required meta tags --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon icon--><link rel="shortcut icon" type="image/png" href="/apple-touch-icon.png"><!-- Core Css --><link rel="stylesheet" href="/assets/css/styles.css"><title>Halaman 404</title>', '</head> <body> <!-- Preloader --> <div class="preloader"> <img src="/assets/images/logos/favicon.png" alt="loader" class="lds-ripple img-fluid"> </div> <div id="main-wrapper"> <div class="position-relative overflow-hidden min-vh-100 w-100 d-flex align-items-center justify-content-center"> <div class="d-flex align-items-center justify-content-center w-100"> <div class="row justify-content-center w-100"> <div class="col-lg-4"> <div class="text-center"> <img src="/assets/images/backgrounds/errorimg.svg" alt="modernize-img" class="img-fluid" width="500"> <h1 class="fw-semibold mb-7 fs-9">Opps!!!</h1> <h4 class="fw-semibold mb-7">\nHalaman yang Anda cari tidak ditemukan.\n</h4> <a class="btn btn-primary" href="/dashboard" role="button">Kembali</a> </div> </div> </div> </div> </div> </div> <div class="dark-transparent sidebartoggler"></div> <!-- Import Js Files --> <script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" defer><\/script> <script src="/assets/libs/simplebar/dist/simplebar.min.js" defer><\/script> <script src="/assets/js/theme/app.minisidebar.init.js" defer><\/script> <script src="/assets/js/theme/theme.js" defer><\/script> <script src="/assets/js/theme/app.min.js" defer><\/script> <!-- solar icons --> ', " </body> </html>"])), renderHead(), renderScript($$result, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/404.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/404.astro", void 0);

const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
