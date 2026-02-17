import type { APIRoute } from "astro";
import { redis } from "../../lib/redis";

const redirect = (location: string) =>
  new Response(null, {
    status: 303,
    headers: { Location: location },
  });

const failureResponse = () => redirect("/log_profil?error=1");

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData().catch(() => null);

  if (!formData) {
    return failureResponse();
  }
  const username = formData.get("username");
  const password = formData.get("password");

  if (typeof username !== "string" || typeof password !== "string") {
    return failureResponse();
  }

  try {
    const res = await fetch(import.meta.env.AUTH_BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      return failureResponse();
    }

    const data = await res.json();

    const sid = crypto.randomUUID();
    const sessionPayload = {
      token: data.token,
    };

    await redis.set(`sess:${sid}`, JSON.stringify(sessionPayload));
    cookies.set("_session", sid, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch {
    return failureResponse();
  }

  return redirect("/admin/dashboard");
};

export const GET: APIRoute = async ({ cookies }) => {
  const sid = cookies.get("_session")?.value;

  if (sid) {
    // hapus session di Redis
    await redis.del(`sess:${sid}`);
  }

  // hapus cookie _session
  cookies.delete("_session", { path: "/" });

  // balik ke halaman login + flag logout
  return redirect("/controller/log_profil?logout=1");
};
