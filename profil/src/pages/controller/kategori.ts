import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals, url }) => {
  const { token } = locals;
  const publik = url.searchParams.get("publik");

  if (publik === "true") {
    try {
      const res = await fetch(
        import.meta.env.AUTH_BASE_URL + "/kategori_publik",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${import.meta.env.AUTH_TOKEN}`,
          },
        }
      );

      console.log(res);
      if (!res.ok) {
        return failureResponse();
      }

      const data = await res.text();

      return new Response(data, {
        status: 200,
        headers: {
          "Content-Type":
            res.headers.get("content-type") ??
            "application/json; charset=utf-8",
        },
      });
    } catch {
      return failureResponse();
    }
  } else {
    try {
      const res = await fetch(import.meta.env.AUTH_BASE_URL + "/kategori", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      console.log(res);
      if (!res.ok) {
        return failureResponse();
      }

      const data = await res.text();

      return new Response(data, {
        status: 200,
        headers: {
          "Content-Type":
            res.headers.get("content-type") ??
            "application/json; charset=utf-8",
        },
      });
    } catch {
      return failureResponse();
    }
  }
};

export const DELETE: APIRoute = async ({ request, locals }) => {
  const { token } = locals;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) {
    return new Response("Invalid id", { status: 400 });
  }

  try {
    const res = await fetch(import.meta.env.AUTH_BASE_URL + `/kategori/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!res.ok) {
      return failureResponse();
    }
  } catch {
    return failureResponse();
  }

  return new Response(null, { status: 200 });
};

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  const { token } = locals;
  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return new Response("Invalid form data", { status: 400 });
  }

  const kategori = formData.get("kategori");
  const id_kategori = formData.get("id_kategori");

  if (typeof kategori !== "string") {
    return new Response("Invalid kategori", { status: 400 });
  }

  try {
    const res = await fetch(import.meta.env.AUTH_BASE_URL + "/kategori", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `${token}`,
      },
      body: new URLSearchParams({
        kategori,
        id_kategori: id_kategori as string,
      }),
    });
    if (!res.ok) {
      return failureResponse();
    }
  } catch {
    return failureResponse();
  }

  return new Response(null, { status: 200 });
};

const failureResponse = () => new Response(null, { status: 401 });
