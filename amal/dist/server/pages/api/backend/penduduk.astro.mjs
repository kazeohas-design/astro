export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const auttoken = "ddK9Q8YlVCGBvTmZSBN12yo";
const GET = async ({ url, locals }) => {
  const id_penduduk = url.searchParams.get("id");
  const search = url.searchParams.get("search");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  var endpoint = "";
  if (search && search != "") {
    endpoint = `${apiUrl}/cari_penduduk?search=${search}`;
  } else {
    endpoint = id_penduduk ? `${apiUrl}/penduduk/${id_penduduk}` : `${apiUrl}/penduduk`;
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
  const id_penduduk = url.searchParams.get("id");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  const endpoint = `${apiUrl}/penduduk/${id_penduduk}`;
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
  const body = Object.fromEntries(await request.formData());
  const res = await fetch(`${apiUrl}/pengaduan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auttoken
    },
    body: JSON.stringify(body)
  });
  if (res.status === 401) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const data = await res.json().catch(() => ({}));
  return new Response(JSON.stringify(data), {
    status: res.status,
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
