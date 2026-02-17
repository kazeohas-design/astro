import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals, url }) => {
  const { token } = locals;
  const publik = url.searchParams.get("publik");

  if (publik === "true") {
    console.log("publik");
    try {
      const res = await fetch(
        import.meta.env.AUTH_BASE_URL + "/projek_publik?publik=true",
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
            res.headers.get("content-type") ??
            "application/json; charset=utf-8",
        },
      });
    } catch {
      return failureResponse();
    }
  } else {
    console.log("private");
    try {
      const res = await fetch(import.meta.env.AUTH_BASE_URL + "/projek", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      if (!res.ok) {
        return failureResponse();
      }

      const dataConvert = await res.text();
      return new Response(dataConvert, {
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
    const res = await fetch(import.meta.env.AUTH_BASE_URL + `/projek/${id}`, {
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

  const judul = formData.get("judul") as string;
  const id_kategori = formData.get("id_kategori") as string;
  const klien = formData.get("klien") as string;
  const projek = formData.get("projek") as string;
  const oldImage = formData.get("oldImage") as string;
  const link = formData.get("link") as string;
  const start = formData.get("start_tanggal") as string;
  const end = formData.get("end_tanggal") as string;
  const gambar = formData.get("gambar");

  const id_projek = formData.get("id_projek") as string;

  const forwardForm = new FormData();

  if (judul) forwardForm.append("judul", judul);
  if (id_projek) forwardForm.append("id_projek", id_projek);
  if (id_kategori) forwardForm.append("id_kategori", id_kategori);
  if (klien) forwardForm.append("klien", klien);
  if (projek) forwardForm.append("projek", projek);
  if (link) forwardForm.append("link", link);
  if (start) forwardForm.append("start_tanggal", start);
  if (end) forwardForm.append("end_tanggal", end);
  if (oldImage) forwardForm.append("oldImage", oldImage);

  if (gambar instanceof File) {
    forwardForm.append("gambar", gambar, gambar.name);
  } else if (typeof gambar === "string" && gambar) {
    forwardForm.append("gambar", gambar);
  }

  try {
    const res = await fetch(import.meta.env.AUTH_BASE_URL + "/projek", {
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
