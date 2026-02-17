import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals, url }) => {
  const slug = url.searchParams.get("slug");
  console.log(import.meta.env.AUTH_TOKEN);
  try {
    const res = await fetch(
      import.meta.env.AUTH_BASE_URL + "/artikel_detail/" + slug,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${import.meta.env.AUTH_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      return failureResponse();
    }

    const dataConvert = await res.text();
    return new Response(dataConvert, {
      status: 200,
      headers: {
        "Content-Type":
          res.headers.get("content-type") ?? "application/json; charset=utf-8",
      },
    });
  } catch {
    return failureResponse();
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
    const res = await fetch(
      import.meta.env.AUTH_BASE_URL + `/artikel_detail/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );

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

  const judul = formData.get("judul") as string;
  const id_kategori = formData.get("id_kategori") as string;
  const status = formData.get("status") as string;
  const artikel = formData.get("artikel") as string;
  const oldImage = formData.get("oldImage") as string;
  const gambar = formData.get("gambar");

  const id_artikel = formData.get("id_artikel") as string;

  const forwardForm = new FormData();

  if (judul) forwardForm.append("judul", judul);
  if (id_artikel) forwardForm.append("id_artikel", id_artikel);
  if (id_kategori) forwardForm.append("id_kategori", id_kategori);
  if (status) forwardForm.append("status", status);
  if (artikel) forwardForm.append("artikel", artikel);
  if (oldImage) forwardForm.append("oldImage", oldImage);

  if (gambar instanceof File) {
    forwardForm.append("gambar", gambar, gambar.name);
  } else if (typeof gambar === "string" && gambar) {
    forwardForm.append("gambar", gambar);
  }

  try {
    const res = await fetch(import.meta.env.AUTH_BASE_URL + "/artikel", {
      method: "POST",
      headers: {
        Authorization: `${token}`,
      },
      body: forwardForm,
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
