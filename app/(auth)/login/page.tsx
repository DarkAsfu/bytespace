import type { Metadata } from "next";
import { AuthCanvas } from "@/components/auth/auth-canvas";
import { AuthMobile } from "@/components/auth/auth-mobile";
import { SigninStage } from "@/components/auth/signin-stage";
import { StageFrame } from "@/components/auth/stage-frame";
import { AuthNote, MOBILE_INPUT, SignInForm } from "@/components/auth/auth-forms";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account.",
};

export default function LoginPage() {
  return (
    <AuthCanvas>
      <div className="w-full">
        <AuthMobile
          title="Sign in with ease"
          description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        >
          <p className="font-satoshi text-[16px] leading-[1.6] text-persian-blue">Sign In</p>
          <h1 className="mt-1 font-poppins text-[30px] font-semibold leading-[1.15] tracking-[-0.3px] text-shuttle-950 sm:text-[36px]">
            Welcome Back
          </h1>

          <div className="mt-8">
            <SignInForm inputClass={MOBILE_INPUT} />
          </div>

          <div className="mt-8">
            <AuthNote question="New user?" linkLabel="Create an account" href={routes.register()} />
          </div>
        </AuthMobile>

        <div className="hidden w-full lg:block">
          <StageFrame>
            <SigninStage />
          </StageFrame>
        </div>
      </div>
    </AuthCanvas>
  );
}