import { e as createComponent, n as renderComponent, r as renderTemplate } from '../chunks/astro/server_BcueGiGm.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CsKcIMyr.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Hak Akses" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormVue", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "/Users/kazeohasan/Documents/projek/astro/amal/src/vue/hak_akses/data.vue", "client:component-export": "default" })} ` })}`;
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/hak_akses/index.astro", void 0);

const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/hak_akses/index.astro";
const $$url = "/hak_akses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
