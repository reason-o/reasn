import Logo from "../components/Logo";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-sm text-center px-6">

        <Logo />

        <p className="mt-12 text-lg">
          Welcome back.
        </p>

        <Link
  href="/login"
  className="
    mt-8
    block
    w-full
    rounded-xl
    bg-black
    py-3
    text-white
    font-medium
    hover:opacity-90
    transition
  "
>
  Log In
</Link>

       <Link
  href="/signup"
  className="
    mt-3
    block
    w-full
    rounded-xl
    border
    py-3
    font-medium
    hover:bg-gray-100
    transition
  "
>
  Create Account
</Link>

      </div>
    </main>
  );
}