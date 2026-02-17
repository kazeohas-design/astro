// src/middleware.ts
import type { MiddlewareHandler } from "astro";
import { redis } from "./lib/redis";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, request, cookies, locals } = context;
  const pathname = url.pathname;

  const publicPaths = [
    "/",
    "/log_profil",
    "/controller/login",
    "/artikel",
    "/projek",
    "/tentang_saya",
    "/controller/detail_artikel",
  ];
  const isPublic = publicPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  const accept = request.headers.get("accept") || "";
  const isHtmlRequest = accept.includes("text/html");

  const sid = cookies.get("_session")?.value;
  const SESSION_TTL_SECONDS = 60 * 60;

  let token: string | null = null;
  let level: number | undefined;

  if (sid) {
    const raw = await redis.get(`sess:${sid}`); // type: unknown | string | null (tergantung client)
    if (raw) {
      await redis.expire(`sess:${sid}`, SESSION_TTL_SECONDS);

      // ✅ Tanpa .toString?.() — cast aman ke string
      const text = typeof raw === "string" ? raw : String(raw);

      try {
        const obj = JSON.parse(text);
        const t = obj?.token;
        const lv = obj?.level;

        token = typeof t === "string" && t.trim() !== "" ? t : null;

        const n = Number(lv);
        if (!Number.isNaN(n)) level = n;
      } catch {
        // biarin token null & level undefined
      }
    }
  }

  // ✅ Simpan sebagai number atau null (jangan di-string-kan)
  locals.token = token;
  locals.level = level !== undefined ? String(level) : null;

  if (!isPublic && isHtmlRequest && !token) {
    return Response.redirect(new URL("/", url).toString(), 302);
  }

  return next();
};
