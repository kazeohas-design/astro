export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const GET = async ({ url, locals }) => {
  const id_layanan = url.searchParams.get("id_layanan");
  const token = requireToken(locals);
  if (!token) return json({ message: "Unauthorized" }, 401);
  let endpoint = "";
  endpoint = `${apiUrl}/riwayat_layanan/${id_layanan}`;
  return fetchJson(endpoint, { headers: { Authorization: token } });
};
const DELETE = async ({ url, locals }) => {
  const id_layanan = url.searchParams.get("id");
  const token = requireToken(locals);
  if (!token) return json({ message: "Unauthorized" }, 401);
  const endpoint = `${apiUrl}/layanan/${id_layanan}`;
  const res = await fetch(endpoint, {
    method: "DELETE",
    headers: { Authorization: token }
  });
  return json(res.status);
};
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const POST = async ({ request, locals }) => {
  const token = requireToken(locals);
  if (!token) return json({ message: "Unauthorized" }, 401);
  const formData = await request.formData();
  const url = new URL(request.url);
  const id_layanan = url.searchParams.get("id");
  const riwayat = url.searchParams.get("riwayat");
  if (id_layanan) formData.set("id", id_layanan);
  const endpoint = riwayat ? `${apiUrl}/riwayat_layanan` : `${apiUrl}/layanan`;
  return fetchJson(endpoint, {
    method: "POST",
    headers: { Authorization: token },
    body: formData
  });
};
function requireToken(locals) {
  return locals.token;
}
async function fetchJson(endpoint, init) {
  const res = await fetch(endpoint, init);
  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await res.json().catch(() => ({})) : await res.text().catch(() => "");
  const payload = isJson ? data : { message: data };
  return json(payload, res.status);
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
