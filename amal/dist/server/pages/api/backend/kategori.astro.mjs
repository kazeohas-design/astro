export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const GET = async ({ url, locals }) => {
  const id_kategori = url.searchParams.get("id");
  const search = url.searchParams.get("search");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  var endpoint = "";
  if (search && search != "") {
    endpoint = `${apiUrl}/cari_kategori?search=${search}`;
  } else {
    endpoint = id_kategori ? `${apiUrl}/kategori/${id_kategori}` : `${apiUrl}/kategori`;
  }
  const res = await fetch(endpoint, {
    headers: { Authorization: `${token}` }
  });
  const data = await res.json().catch(() => ({}));
  return json(data, res.status);
};
const PUT = async ({ url, request, locals }) => {
  const id_kategori = url.searchParams.get("id");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  const formData = await request.formData();
  const endpoint = `${apiUrl}/kategori/${id_kategori}`;
  const res = await fetch(endpoint, {
    method: "PUT",
    headers: { Authorization: `${token}` },
    body: formData
  });
  const data = await res.json().catch(() => ({}));
  return json(data, res.status);
};
const DELETE = async ({ url, locals }) => {
  const id_kategori = url.searchParams.get("id");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  const endpoint = `${apiUrl}/kategori/${id_kategori}`;
  const res = await fetch(endpoint, {
    method: "DELETE",
    headers: { Authorization: `${token}` }
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
  const token = locals.token;
  const body = Object.fromEntries(await request.formData());
  const res = await fetch(`${apiUrl}/kategori`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || ""
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
