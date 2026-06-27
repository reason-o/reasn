import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Header from "../../components/Header";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");

  if (!auth) {
    redirect("/login");
  }

  return (
    <>
      <Header username={auth.value} />

      <main
        style={{
          padding: "40px",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Welcome back 👋</h1>

        <p>프로젝트를 시작해보세요.</p>

        <button
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          + New Project
        </button>

        <div
          style={{
            marginTop: "30px",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          아직 프로젝트가 없습니다.
        </div>
      </main>
    </>
  );
}