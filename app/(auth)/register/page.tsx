import type { Metadata } from "next";
import { AuthCanvas } from "@/components/auth/auth-canvas";
import { AuthMobile } from "@/components/auth/auth-mobile";
import { RegisterStage } from "@/components/auth/register-stage";
import { StageFrame } from "@/components/auth/stage-frame";
import {
  AuthNote,
  MOBILE_INPUT,
  SignUpForm,
} from "@/components/auth/auth-forms";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account.",
};

export default function RegisterPage() {
  return (
    <AuthCanvas>
      <div className="w-full">
        <AuthMobile
          title="Sign up and come in"
          description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
        >
          <p className="font-satoshi text-[16px] leading-[1.6] text-persian-blue">
            Create an Account
          </p>
          <h1 className="mt-1 font-poppins text-[30px] font-semibold leading-[1.15] tracking-[-0.3px] text-shuttle-950 sm:text-[36px]">
            Welcome to ByteSpace
          </h1>

          <div className="mt-8">
            <SignUpForm inputClass={MOBILE_INPUT} />
          </div>

          <div className="mt-8">
            <AuthNote
              question="Already have an account?"
              linkLabel="Login"
              href={routes.login()}
            />
          </div>
        </AuthMobile>

        <div className="hidden w-full lg:block">
          <StageFrame>
            <RegisterStage />
          </StageFrame>
        </div>
      </div>
    </AuthCanvas>
  );
}