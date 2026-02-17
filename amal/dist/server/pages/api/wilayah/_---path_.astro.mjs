export { renderers } from '../../../renderers.mjs';

const UPSTREAM = "https://emsifa.github.io/api-wilayah-indonesia/api";
const mem = /* @__PURE__ */ new Map();
const TTL = 10 * 60 * 1e3;
const GET = async ({ params }) => {
  const rest = Array.isArray(params.path) ? params.path.join("/") : params.path || "";
  const url = `${UPSTREAM}/${rest}`;
  const now = Date.now();
  const hit = mem.get(url);
  if (hit && now - hit.t < TTL) {
    return new Response(hit.body.slice(0), {
      status: 200,
      headers: { "content-type": hit.type || "application/json" }
    });
  }
  try {
    const res = await fetch(url, { headers: { "user-agent": "astro-proxy" } });
    if (!res.ok) return new Response(`Upstream ${res.status}`, { status: 502 });
    const buf = await res.arrayBuffer();
    const type = res.headers.get("content-type") || "application/json";
    mem.set(url, { t: now, body: buf, type });
    return new Response(buf.slice(0), {
      status: 200,
      headers: { "content-type": type }
    });
  } catch (e) {
    return new Response(`Proxy fetch failed: ${e?.message || e}`, {
      status: 502
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
