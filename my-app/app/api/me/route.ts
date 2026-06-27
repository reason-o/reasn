import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");

  return Response.json({
    loggedIn: !!auth,
    user: auth?.value ?? null,
  });
}