import { e as createComponent, f as createAstro, n as renderComponent, r as renderTemplate } from '../chunks/astro/server_BcueGiGm.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CsKcIMyr.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const level = Astro2.locals.level ?? null;
  const idUnitKerja = Astro2.locals.id_unit_kerja ?? null;
  const id_user = Astro2.locals.id_user ?? null;
  const nama_user = Astro2.locals.nama_user ?? null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Validasi Layanan" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormVue", null, { "client:only": "vue", "level": level, "idUnitKerja": idUnitKerja, "id_user": id_user, "nama_user": nama_user, "client:component-hydration": "only", "client:component-path": "/Users/kazeohasan/Documents/projek/astro/amal/src/vue/validator/data.vue", "client:component-export": "default" })} ` })}`;
}, "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/validator/index.astro", void 0);

const $$file = "/Users/kazeohasan/Documents/projek/astro/amal/src/pages/validator/index.astro";
const $$url = "/validator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
