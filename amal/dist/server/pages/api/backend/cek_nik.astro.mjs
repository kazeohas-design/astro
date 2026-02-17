export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const auttoken = "ddK9Q8YlVCGBvTmZSBN12yo";
const GET = async ({ url }) => {
  const nik = url.searchParams.get("nik");
  console.log(nik);
  const endpoint = `${apiUrl}/cek_nik/${nik}`;
  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: auttoken
    }
  });
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
