import { e as createComponent, r as renderTemplate, k as renderScript, n as renderComponent, l as renderHead } from '../chunks/astro/server_BcueGiGm.mjs';
import { defineComponent, useSSRContext, ref } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginAmal",
  setup(__props, { expose: __expose }) {
    __expose();
    const username = ref("");
    const password = ref("");
    const error = ref("");
    const loading = ref(false);
    async function postJSON(url, body) {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      let data = null;
      try {
        data = await res.json();
      } catch {
      }
      return { ok: res.ok, status: res.status, data };
    }
    async function login() {
      error.value = "";
      if (!username.value || !password.value) {
        error.value = "Username dan password wajib diisi.";
        return;
      }
      loading.value = true;
      const { ok, status, data } = await postJSON("/api/backend/login", {
        username: username.value,
        password: password.value
      });
      loading.value = false;
      if (!ok) {
        error.value = data?.message || (status === 401 ? "Username atau password salah." : "Login gagal");
        return;
      }
      window.location.href = data?.redirect || "/dashboard";
    }
    const __returned__ = { username, password, error, loading, postJSON, login };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($setup.error) {
    _push(`<div class="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show" role="alert"><button type="button" class="btn-close btn-close-white" aria-label="Close"></button> ${ssrInterpolate($setup.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form novalidate><div class="mb-3"><label for="username" class="form-label visually-hidden">Username</label><div class="input-group login-input"><span class="input-group-text"><i class="ti ti-user"></i></span><input id="username" type="text" class="form-control" placeholder="Username"${ssrRenderAttr("value", $setup.username)} autocomplete="username" required></div></div><div class="mb-3"><label for="password" class="form-label visually-hidden">Password</label><div class="input-group login-input"><span class="input-group-text"><i class="ti ti-lock"></i></span><input id="password" type="password" class="form-control" placeholder="Password"${ssrRenderAttr("value", $setup.password)} autocomplete="current-password" required></div></div><button type="submit" class="btn btn-primary w-100 py-8 mb-3 rounded-2 login-submit"${ssrIncludeBooleanAttr($setup.loading) ? " disabled" : ""}>`);
  if ($setup.loading) {
    _push(`<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(` ${ssrInterpolate($setup.loading ? "Memproses..." : "Login")}</button></form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/component/vue/LoginAmal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginAmal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" dir="ltr" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical" data-astro-cid-j7pv25f6> <head><!-- Required meta tags --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon icon--><link rel="shortcut icon" type="image/png" href="/apple-touch-icon.png"><!-- Core Css --><link rel="stylesheet" href="/assets/css/styles.css"><title>Login AMAL</title>', '</head> <body data-astro-cid-j7pv25f6> <!-- Preloader --> <div class="preloader" data-astro-cid-j7pv25f6> <img src="/assets/images/logos/favicon.png" alt="loader" class="lds-ripple img-fluid" data-astro-cid-j7pv25f6> </div> <div id="main-wrapper" class="auth-customizer-none" data-astro-cid-j7pv25f6> <div class="position-relative overflow-hidden radial-gradient min-vh-100 w-100 auth-hero" data-astro-cid-j7pv25f6> <div class="position-relative z-index-5" data-astro-cid-j7pv25f6> <div class="row" data-astro-cid-j7pv25f6> <div class="col-xl-7 col-xxl-8" data-astro-cid-j7pv25f6> <div class="d-none d-xl-flex flex-column align-items-center justify-content-center h-n80 login-illustration" data-astro-cid-j7pv25f6> <img src="/bg-amal.png" alt="Ilustrasi pelayanan masyarakat" class="img-fluid login-hero-img" data-astro-cid-j7pv25f6> </div> </div> <div class="col-xl-5 col-xxl-4" data-astro-cid-j7pv25f6> <div class="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4 login-panel-wrap" data-astro-cid-j7pv25f6> <div class="auth-max-width col-sm-8 col-md-6 col-xl-7 px-4" data-astro-cid-j7pv25f6> <div class="login-card" data-astro-cid-j7pv25f6> <h2 class="mb-1 fs-7 fw-bolder login-title" data-astro-cid-j7pv25f6>\nSelamat Datang di AMAL\n</h2> <p class="mb-7 login-subtitle" data-astro-cid-j7pv25f6>\nAplikasi Manajemen Layanan Masyarakat\n</p> ', ' </div> </div> </div> </div> </div> </div> </div> </div> <div class="dark-transparent sidebartoggler" data-astro-cid-j7pv25f6></div> <!-- Import Js Files --> <script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" defer><\/script> <script src="/assets/libs/simplebar/dist/simplebar.min.js" defer><\/script> <script src="/assets/js/theme/app.init.js" defer><\/script> <script src="/assets/js/theme/theme.js" defer><\/script> <script src="/assets/js/theme/app.min.js" defer><\/script> <!-- solar icons --> ', "  </body> </html>"])), renderHead(), renderComponent($$result, "LoginAmal", LoginAmal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/kazeohasan/Documents/projek/astro/amal/src/component/vue/LoginAmal.vue", "client:component-export": "default", "data-astro-cid-j7pv25f6": true }), renderScript($$result, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/index.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/index.astro", void 0);

const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
