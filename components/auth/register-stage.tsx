import Link from "next/link";
import { routes } from "@/lib/routes";
import { AuthCourseCard } from "@/components/auth/auth-course-card";
import { HappyStudentsLime } from "@/components/auth/happy-students";
import { Decor } from "@/components/auth/decor";

const FIELD_LABEL = "font-satoshi text-[14px] font-medium leading-[1.2] whitespace-nowrap text-shuttle-950";
const FIELD_INPUT =
  "h-[52px] w-[453px] appearance-none rounded-[12px] border border-shuttle-100 bg-white px-6 font-satoshi text-[18px] leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400 focus-visible:border-persian-blue";

export function RegisterStage() {
  return (
    <div
      style={{ position: "relative", width: 1440, height: 1024, overflow: "hidden" }}
    >
      {/* Header */}
      <header style={{ position: "absolute", left: 0, top: 0, width: 1440, height: 120, overflow: "hidden" }}>
        <Link href={routes.home()} aria-label="ByteSpace" className="absolute left-[122px] top-[35px] block h-[31.5px] w-[28.875px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-icon.svg" alt="ByteSpace" width={28.875} height={31.5} className="h-full w-full" />
        </Link>
      </header>

      {/* Intro copy */}
      <section
        style={{ position: "absolute", left: 122, top: 120 }}
        className="flex flex-col gap-4 text-shuttle-50"
      >
        <h2 className="font-poppins text-[20px] font-semibold leading-[1.2] tracking-[-0.2px] whitespace-nowrap">
          Sign up and come in
        </h2>
        <p className="w-[475px] font-satoshi text-[18px] leading-[1.6]">
          The registration process is straightforward, uncomplicated, and efficient, allowing
          users to sign up quickly, easily, and at no cost
        </p>
      </section>

      {/* Register card */}
      <section
        style={{ position: "absolute", left: 741, top: 120, width: 579, height: 784 }}
        className="rounded-[24px] bg-white"
      >
        <div
          style={{ position: "absolute", left: 63, top: 61 }}
          className="flex flex-col items-center gap-[122px]"
        >
          <form action={routes.register()} className="flex flex-col gap-10">
            <div className="flex flex-col">
              <p className="font-satoshi text-[18px] leading-[1.6] whitespace-nowrap text-persian-blue">
                Create an Account
              </p>
              <h1 className="w-[453px] font-poppins text-[44px] font-semibold leading-[1.2] tracking-[-0.44px] text-shuttle-950">
                Welcome to ByteSpace
              </h1>
            </div>

            <div className="flex flex-col items-end gap-6">
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="name" className={FIELD_LABEL}>
                  Full Name
                </label>
                <input id="name" name="name" type="text" placeholder="Jamie Davis" autoComplete="name" className={FIELD_INPUT} />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="email" className={FIELD_LABEL}>
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" className={FIELD_INPUT} />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="password" className={FIELD_LABEL}>
                  Password
                </label>
                <input id="password" name="password" type="password" placeholder="********" autoComplete="new-password" className={FIELD_INPUT} />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center rounded-[24px] bg-electric-lime px-6 py-3 font-satoshi text-[18px] font-medium leading-[1.2] whitespace-nowrap text-shuttle-950"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="flex gap-1 font-satoshi text-[16px] leading-[1.6] whitespace-nowrap">
            <span className="text-shuttle-700">Already have an account?</span>
            <Link href={routes.login()} className="text-persian-blue">
              Login
            </Link>
          </p>
        </div>
      </section>

      {/* Course cards */}
      <AuthCourseCard
        title="Build Digital Asset"
        image="/images/auth/thumb-digital.png"
        left={122}
        top={394}
      />
      <AuthCourseCard
        title="the Power of Big Data"
        image="/images/auth/thumb-bigdata.png"
        clipTitle
        left={233}
        top={305}
      />

      <HappyStudentsLime />

      {/* 3D decorations */}
      <Decor
        variant="squiggle"
        image="/images/auth/squiggle.png"
        color="#F5F5F6"
        left={470}
        top={626}
        width={175}
        height={175}
        flipX
      />
      <Decor
        variant="cone"
        image="/images/auth/cone-1.png"
        color="#D4FB20"
        left={224}
        top={320}
        width={146}
        height={146}
      />
      <Decor
        variant="cone"
        image="/images/auth/cone-2.png"
        color="#D4FB20"
        left={90}
        top={702}
        width={188}
        height={188}
      />
    </div>
  );
}