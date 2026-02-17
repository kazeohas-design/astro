import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ locals, url }) => {
  const slug = url.searchParams.get("slug");
  console.log(import.meta.env.AUTH_TOKEN);
  try {
    const res = await fetch(
      import.meta.env.AUTH_BASE_URL + "/projek_detail/" + slug,
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

const failureResponse = () => new Response(null, { status: 401 });
