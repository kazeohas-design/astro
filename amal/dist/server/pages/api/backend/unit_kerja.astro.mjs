export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const GET = async ({ url, locals }) => {
  const id_unit_kerja = url.searchParams.get("id");
  const search = url.searchParams.get("search");
  const token = requireToken(locals);
  if (!token) return json({ message: "Unauthorized" }, 401);
  const endpoint = search ? `${apiUrl}/cari_unit_kerja?search=${search}` : id_unit_kerja ? `${apiUrl}/unit_kerja/${id_unit_kerja}` : `${apiUrl}/unit_kerja`;
  return fetchJson(endpoint, { headers: { Authorization: token } });
};
const DELETE = async ({ url, locals }) => {
  const id_unit_kerja = url.searchParams.get("id");
  const token = requireToken(locals);
  if (!token) return json({ message: "Unauthorized" }, 401);
  const endpoint = `${apiUrl}/unit_kerja/${id_unit_kerja}`;
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
  const id_unit_kerja = new URL(request.url).searchParams.get("id");
  if (id_unit_kerja) formData.set("id", id_unit_kerja);
  return fetchJson(`${apiUrl}/unit_kerja`, {
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
