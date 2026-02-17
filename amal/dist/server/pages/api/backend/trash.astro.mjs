export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const auttoken = "ddK9Q8YlVCGBvTmZSBN12yo";
const GET = async ({ url, locals }) => {
  const id_trash = url.searchParams.get("id");
  const search = url.searchParams.get("search");
  const dari_tanggal = url.searchParams.get("dari_tanggal");
  const sampai_tanggal = url.searchParams.get("sampai_tanggal");
  const page = url.searchParams.get("page");
  console.log("page", page);
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  var endpoint = "";
  if (search && search != "" || dari_tanggal && dari_tanggal != "" && sampai_tanggal && sampai_tanggal != "") {
    endpoint = page == "permohonan" ? `${apiUrl}/cari_trash_permohonan?search=${search}&dari_tanggal=${dari_tanggal}&sampai_tanggal=${sampai_tanggal}` : `${apiUrl}/cari_trash?search=${search}&dari_tanggal=${dari_tanggal}&sampai_tanggal=${sampai_tanggal}`;
  } else {
    if (id_trash != "") {
      endpoint = page == "permohonan" ? `${apiUrl}/trash_permohonan/${id_trash}` : `${apiUrl}/trash_layanan/${id_trash}`;
    } else {
      endpoint = page == "permohonan" ? `${apiUrl}/trash_permohonan` : `${apiUrl}/trash_layanan`;
    }
  }
  const res = await fetch(endpoint, {
    headers: { Authorization: `${token}` }
  });
  const data = await res.json().catch(() => ({}));
  console.log(data);
  return json(data, res.status);
};
const DELETE = async ({ request, locals }) => {
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  const payload = await request.json().catch(() => ({}));
  const status = typeof payload?.status === "string" ? payload.status.trim() : "";
  const ids = Array.isArray(payload?.ids) ? payload.ids.map((id) => String(id).trim()).filter((id) => id !== "") : [];
  const body = new URLSearchParams();
  body.set("status", status);
  ids.forEach((id) => body.append("ids[]", id));
  const page = payload.page;
  var trash_link = "";
  if (page == "permohonan") {
    trash_link = `${apiUrl}/trash_permohonan`;
  } else {
    trash_link = `${apiUrl}/trash_layanan`;
  }
  const res = await fetch(trash_link, {
    method: "POST",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: body.toString()
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
const POST = async ({ request, locals }) => {
  const form = await request.formData();
  const page = form.get("page");
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
