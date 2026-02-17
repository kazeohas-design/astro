export { renderers } from '../../../renderers.mjs';

const prerender = false;
const apiUrl = "https://amalapi.khazeo.dev";
const GET = async ({ url, locals }) => {
  const id_level = url.searchParams.get("search");
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  var endpoint = `${apiUrl}/menu/${id_level}`;
  const res = await fetch(endpoint, {
    headers: { Authorization: `${token}` }
  });
  const data = await res.json().catch(() => ({}));
  return json(data, res.status);
};
const PUT = async ({ request, locals }) => {
  const token = locals.token;
  if (!token) return json({ message: "Unauthorized" }, 401);
  const formData = await request.json();
  const endpoint = `${apiUrl}/menu_akses`;
  const res = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });
  const raw = await res.text();
  let data = {};
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error("MENU_BACKEND ERROR:", res.status, endpoint);
    console.error("RAW RESPONSE:", raw);
    return json({ message: "Invalid JSON from backend /menu_akses" }, 502);
  }
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
  PUT,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
