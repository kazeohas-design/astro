export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const auttoken = "ddK9Q8YlVCGBvTmZSBN12yo";
const GET = async ({ url, locals }) => {
  const id_pengaduan = url.searchParams.get("id");
  const search = url.searchParams.get("search");
  const dari_tanggal = url.searchParams.get("dari_tanggal");
  const sampai_tanggal = url.searchParams.get("sampai_tanggal");
  const id_unit_kerja = url.searchParams.get("id_unit_kerja");
  const valid = url.searchParams.get("valid");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  var endpoint = "";
  if (search && search != "" || dari_tanggal && dari_tanggal != "" && sampai_tanggal && sampai_tanggal != "") {
    endpoint = `${apiUrl}/cari_pengaduan?valid=${valid}&id_unit_kerja=${id_unit_kerja}&search=${search}&dari_tanggal=${dari_tanggal}&sampai_tanggal=${sampai_tanggal}`;
  } else {
    endpoint = id_pengaduan ? `${apiUrl}/pengaduan/${id_pengaduan}` : `${apiUrl}/pengaduan?valid=${valid}&id_unit_kerja=${id_unit_kerja}`;
  }
  const res = await fetch(endpoint, {
    headers: { Authorization: `${token}` }
  });
  const data = await res.json().catch(() => ({}));
  return json(data, res.status);
};
const DELETE = async ({ url, locals }) => {
  const id_pengaduan = url.searchParams.get("id");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  const endpoint = `${apiUrl}/pengaduan/${id_pengaduan}`;
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
  const form = await request.formData();
  const page = form.get("page");
  console.log(form);
  var urlPage = `${apiUrl}/pengaduan`;
  if (page == "admin") {
    urlPage = `${apiUrl}/update_pengaduan`;
  }
  const res = await fetch(urlPage, {
    method: "POST",
    headers: {
      Authorization: auttoken
    },
    body: form
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
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
