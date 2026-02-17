import { r as redis } from './chunks/redis_BhoeqTc1.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BVKJEebj.mjs';
import './chunks/astro/server_BcueGiGm.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_BW8MRu1h.mjs';

const apiUrl = undefined                             ;
const onRequest$1 = async (context, next) => {
  const { url, request, cookies, locals } = context;
  const pathname = url.pathname;
  const publicPaths = [
    "/",
    "/login",
    "/register",
    "/form_layanan",
    "/api/cek_nik",
    "/api/backend/kategori_publik"
    // NOTE: jangan whitelist "/api" global kalau ada endpoint yang butuh auth
  ];
  const isPublic = publicPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  const accept = request.headers.get("accept") || "";
  const isHtmlRequest = accept.includes("text/html");
  const sid = cookies.get("_session")?.value;
  const SESSION_TTL_SECONDS = 60 * 60;
  let token = null;
  let level;
  let idUnitKerja;
  let id_unit_kerja;
  let id_user;
  let nama_user = null;
  if (sid) {
    const raw = await redis.get(`sess:${sid}`);
    if (raw) {
      await redis.expire(`sess:${sid}`, SESSION_TTL_SECONDS);
      const text = typeof raw === "string" ? raw : String(raw);
      try {
        const obj = JSON.parse(text);
        const t = obj?.token;
        const lv = obj?.level;
        const uk = obj?.id_unit_kerja;
        const id_unit_kerja_val = obj?.id_unit_kerja;
        const id_user_val = obj?.id_user;
        const nama_user_val = obj?.nama_user;
        if (typeof id_unit_kerja_val === "number") {
          id_unit_kerja = id_unit_kerja_val;
        }
        if (typeof id_user_val === "number") {
          id_user = id_user_val;
        }
        nama_user = nama_user_val;
        token = typeof t === "string" && t.trim() !== "" ? t : null;
        const n = Number(lv);
        if (!Number.isNaN(n)) level = n;
        const ukNum = Number(uk);
        if (!Number.isNaN(ukNum)) idUnitKerja = ukNum;
      } catch {
      }
    }
  }
  locals.token = token;
  locals.level = level !== void 0 ? String(level) : null;
  locals.id_unit_kerja = idUnitKerja ?? null;
  locals.id_user = id_user ?? null;
  locals.nama_user = nama_user;
  if (!isPublic && isHtmlRequest) {
    if (!token) {
      return Response.redirect(new URL("/", url).toString(), 302);
    }
    const valid = await verifyToken(token);
    if (!valid) {
      return Response.redirect(new URL("/", url).toString(), 302);
    }
  }
  return next();
};
async function verifyToken(token) {
  try {
    const endpoint = new URL(`${apiUrl}/cek_token`);
    const res = await fetch(endpoint.toString(), {
      headers: { Authorization: token }
    });
    if (res.status === 401) return false;
    return res.ok;
  } catch {
    return true;
  }
}

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
