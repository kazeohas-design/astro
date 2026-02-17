import { r as redis } from '../../../chunks/redis_BhoeqTc1.mjs';
export { renderers } from '../../../renderers.mjs';

const AUTH = "https://amalapi.khazeo.dev";
const POST = async ({ request, cookies }) => {
  const body = await request.json();
  const res = await fetch(`${AUTH}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await res.json().catch(() => ({}));
  if (res.ok && data.token) {
    const sid = crypto.randomUUID();
    await redis.set(
      `sess:${sid}`,
      JSON.stringify({
        token: data.token,
        level: Number(data.level),
        id_unit_kerja: data.id_unit_kerja || 0,
        id_user: data.id_user || 0,
        nama_user: data.nama || null
      }),
      "EX",
      60 * 60 * 24
    );
    const isProd = true;
    cookies.set("_session", sid, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: isProd,
      maxAge: 60 * 60 * 24
      // 1 hari
    });
    return Response.json({ ok: true });
  }
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
