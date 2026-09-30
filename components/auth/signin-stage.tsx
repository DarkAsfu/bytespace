import Link from "next/link";
import { routes } from "@/lib/routes";
import { AuthCourseCard } from "@/components/auth/auth-course-card";
import { HappyStudentsLime } from "@/components/auth/happy-students";
import { Decor } from "@/components/auth/decor";

const FIELD_LABEL = "font-satoshi text-[14px] font-medium leading-[1.2] whitespace-nowrap text-shuttle-950";
const FIELD_INPUT =
  "h-[52px] w-[453px] appearance-none rounded-[12px] border border-shuttle-100 bg-white px-6 font-satoshi text-[18px] leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400 focus-visible:border-persian-blue";

function FacebookIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.203 0 3.602.859 4.423 1.649l3.214-3.092C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24Z" />
    </svg>
  );
}

export function SigninStage() {
  return (
    <div style={{ position: "relative", width: 1440, height: 1024, overflow: "hidden" }}>
      <header style={{ position: "absolute", left: 0, top: 0, width: 1440, height: 120, overflow: "hidden" }}>
        <Link
          href={routes.home()}
          aria-label="ByteSpace"
          className="absolute left-[122px] top-[35px] block h-[31.5px] w-[28.875px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-icon.svg"
            alt="ByteSpace"
            width={28.875}
            height={31.5}
            className="h-full w-full"
          />
        </Link>
      </header>

      {/* Intro copy */}
      <section
        style={{ position: "absolute", left: 122, top: 120 }}
        className="flex flex-col gap-4 text-shuttle-50"
      >
        <h2 className="font-poppins text-[20px] font-semibold leading-[1.2] tracking-[-0.2px] whitespace-nowrap">
          Sign in with ease
        </h2>
        <p className="w-[475px] font-satoshi text-[18px] leading-[1.6]">
          Experience a seamless and efficient sign-in process that grants you instant access to
          a world of knowledge.
        </p>
      </section>

      {/* Sign in card */}
      <section
        style={{ position: "absolute", left: 741, top: 120, width: 579, height: 784 }}
        className="rounded-[24px] bg-white"
      >
        <div style={{ position: "absolute", left: 63, top: 61 }} className="flex flex-col">
          <p className="font-satoshi text-[18px] leading-[1.6] whitespace-nowrap text-persian-blue">
            Sign In
          </p>
          <h1 className="w-[453px] font-poppins text-[44px] font-semibold leading-[1.2] tracking-[-0.44px] text-shuttle-950">
            Welcome Back
          </h1>

          <form action={routes.login()} className="mt-10 flex flex-col items-end">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email" className={FIELD_LABEL}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="designer@example.com"
                autoComplete="email"
                className={FIELD_INPUT}
              />
            </div>
            <div className="mt-6 flex flex-col items-start gap-2">
              <label htmlFor="password" className={FIELD_LABEL}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                autoComplete="current-password"
                className={FIELD_INPUT}
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex items-center justify-center rounded-[24px] bg-electric-lime px-6 py-3 font-satoshi text-[18px] font-medium leading-[1.2] whitespace-nowrap text-shuttle-950"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="mt-10 flex w-[453px] items-center gap-4">
              <span className="h-px flex-1 bg-shuttle-200" />
              <span className="font-satoshi text-[16px] leading-[1.6] text-shuttle-400">or</span>
              <span className="h-px flex-1 bg-shuttle-200" />
            </div>

            {/* Social — centred across the card, unlike the fields/button above */}
            <div className="mt-8 flex w-[453px] items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Continue with Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-shuttle-200 bg-white text-shuttle-950 transition-colors hover:bg-shuttle-50"
              >
                <FacebookIcon />
              </button>
              <button
                type="button"
                aria-label="Continue with Google"
                className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-shuttle-200 bg-white text-shuttle-950 transition-colors hover:bg-shuttle-50"
              >
                <GoogleIcon />
              </button>
            </div>
          </form>

          <p className="mt-10 text-center font-satoshi text-[16px] leading-[1.6] whitespace-nowrap">
            <span className="text-shuttle-400">New user?</span>{" "}
            <Link href={routes.register()} className="text-persian-blue">
              Create an account
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