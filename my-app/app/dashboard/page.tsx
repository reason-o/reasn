import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");

  if (!auth) {
    redirect("/login");
  }

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>🎉 Dashboard</h1>

      <p>안녕하세요, <b>{auth.value}</b>님!</p>

      <p>로그인된 사용자만 이 페이지를 볼 수 있습니다.</p>
    </main>
  );
}