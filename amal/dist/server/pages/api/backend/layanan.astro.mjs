export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const auttoken = "ddK9Q8YlVCGBvTmZSBN12yo";
const GET = async ({ url, locals }) => {
  const id_layanan = url.searchParams.get("id");
  const search = url.searchParams.get("search");
  const id_unit_kerja = url.searchParams.get("id_unit_kerja");
  const status = url.searchParams.get("status");
  const valid = url.searchParams.get("valid");
  const page = url.searchParams.get("page");
  const isPublik = page === "publik";
  const token = requireToken(locals);
  if (!isPublik && !token) return json({ message: "Unauthorized" }, 401);
  let endpoint = "";
  if (isPublik) {
    const apiPublik = new URL(`${apiUrl}/layanan_publik`);
    if (status) apiPublik.searchParams.set("status", status);
    endpoint = apiPublik.toString();
  } else if (id_layanan) {
    endpoint = `${apiUrl}/layanan/${id_layanan}`;
  } else if (search || id_unit_kerja) {
    const api = new URL(`${apiUrl}/cari_layanan`);
    if (search) api.searchParams.set("search", search);
    if (id_unit_kerja) api.searchParams.set("id_unit_kerja", id_unit_kerja);
    if (status) api.searchParams.set("status", status);
    if (valid) api.searchParams.set("valid", valid);
    endpoint = api.toString();
  } else {
    const apiValidator = new URL(`${apiUrl}/layanan`);
    if (status) apiValidator.searchParams.set("status", status);
    endpoint = apiValidator.toString();
  }
  const headers = {};
  if (isPublik) {
    headers.Authorization = auttoken;
  } else if (token) {
    headers.Authorization = token;
  }
  return fetchJson(endpoint, { headers });
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
