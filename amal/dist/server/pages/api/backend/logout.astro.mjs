import { r as redis } from '../../../chunks/redis_BhoeqTc1.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ cookies }) => {
  const sid = cookies.get("_session")?.value;
  if (sid) {
    await redis.del(`sess:${sid}`);
  }
  cookies.delete("_session", { path: "/" });
  return Response.json({ ok: true });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
