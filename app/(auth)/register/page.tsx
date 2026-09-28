import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight">Register</h1>
      {/* TODO: form from @/components/auth/RegisterForm */}
      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium underline">
          Login
        </Link>
      </p>
    </div>
  );
}
