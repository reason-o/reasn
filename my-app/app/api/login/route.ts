import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (username !== "test" || password !== "1234") {
      return Response.json({ error: "invalid" }, { status: 401 });
    }

    const cookieStore = await cookies();

    cookieStore.set("auth", username, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "server error" }, { status: 500 });
  }
}