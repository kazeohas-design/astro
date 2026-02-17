export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const auttoken = "ddK9Q8YlVCGBvTmZSBN12yo";
const POST = async ({ url, request }) => {
  const { pos } = await request.json();
  const endpoint = `${apiUrl}/tracking`;
  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: auttoken
    },
    method: "POST",
    body: JSON.stringify({ tracking: pos })
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
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
