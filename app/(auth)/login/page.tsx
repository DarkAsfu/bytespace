import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
      {/* TODO: form from @/components/auth/LoginForm */}
      <p className="text-sm text-muted-foreground">
        No account?{" "}
        <Link href="/register" className="font-medium underline">
          Register
        </Link>
      </p>
    </div>
  );
}
