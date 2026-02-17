import { e as createComponent, f as createAstro, n as renderComponent, r as renderTemplate } from '../chunks/astro/server_BcueGiGm.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CsKcIMyr.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const level = Astro2.locals.level ?? null;
  const idUnitKerja = Astro2.locals.id_unit_kerja ?? null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Layanan" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FormVue", null, { "client:only": "vue", "level": level, "idUnitKerja": idUnitKerja, "client:component-hydration": "only", "client:component-path": "/Users/kazeohasan/Documents/projek/astro/amal/src/vue/layanan/data.vue", "client:component-export": "default" })}  `, "head": ($$result2) => renderTemplate`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css">`, "scripts": ($$result2) => renderTemplate(_a || (_a = __template(['<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js" defer><\/script>']))) })}`;
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/layanan/index.astro", void 0);

const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/layanan/index.astro";
const $$url = "/layanan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
