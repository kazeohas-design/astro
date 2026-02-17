export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const GET = async ({ url, locals }) => {
  const endpoint = `${apiUrl}/kategori_publik`;
  const res = await fetch(endpoint);
  const data = await res.json().catch(() => ({}));
  return json(data, res.status);
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
