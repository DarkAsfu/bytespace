import Link from "next/link";
import { routes } from "@/lib/routes";

export const DESKTOP_INPUT =
  "h-[52px] w-[453px] appearance-none rounded-[12px] border border-shuttle-100 bg-white px-6 font-satoshi text-[18px] leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400 focus-visible:border-persian-blue";

export const MOBILE_INPUT =
  "h-[52px] w-full appearance-none rounded-[12px] border border-shuttle-100 bg-white px-5 font-satoshi text-[16px] leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400 focus-visible:border-persian-blue";

const LABEL = "font-satoshi text-[14px] font-medium leading-[1.2] text-shuttle-950";
const FIELD = "flex w-full flex-col items-start gap-2";

export function AuthField({
  id,
  label,
  name,
  inputClass,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  inputClass: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className={FIELD}>
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  );
}

/** Social buttons are always centred within the content column. */
export function SocialRow({ inputClass }: { inputClass: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${inputClass}`}>
      <button
        type="button"
        aria-label="Continue with Facebook"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-shuttle-200 bg-white text-shuttle-950 transition-colors hover:bg-shuttle-50"
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Continue with Google"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-shuttle-200 bg-white text-shuttle-950 transition-colors hover:bg-shuttle-50"
      >
        <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.203 0 3.602.859 4.423 1.649l3.214-3.092C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24Z" />
        </svg>
      </button>
    </div>
  );
}

export function AuthDivider() {
  return (
    <div className="flex w-full items-center gap-4">
      <span className="h-px flex-1 bg-shuttle-200" />
      <span className="font-satoshi text-[16px] leading-[1.6] text-shuttle-400">or</span>
      <span className="h-px flex-1 bg-shuttle-200" />
    </div>
  );
}

export function SignUpForm({ inputClass }: { inputClass: string }) {
  return (
    <form action={routes.register()} className="flex w-full flex-col items-end gap-6">
      <AuthField id="name" label="Full Name" name="name" placeholder="Jamie Davis" autoComplete="name" inputClass={inputClass} />
      <AuthField id="email" label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" inputClass={inputClass} />
      <AuthField id="password" label="Password" name="password" type="password" placeholder="********" autoComplete="new-password" inputClass={inputClass} />
      <button
        type="submit"
        className="flex items-center justify-center rounded-[24px] bg-electric-lime px-6 py-3 font-satoshi text-[18px] font-medium leading-[1.2] whitespace-nowrap text-shuttle-950"
      >
        Continue
      </button>
    </form>
  );
}

export function SignInForm({ inputClass }: { inputClass: string }) {
  return (
    <form action={routes.login()} className="flex w-full flex-col items-end gap-6">
      <AuthField id="email" label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" inputClass={inputClass} />
      <AuthField id="password" label="Password" name="password" type="password" placeholder="********" autoComplete="current-password" inputClass={inputClass} />
      <button
        type="submit"
        className="self-end flex items-center justify-center rounded-[24px] bg-electric-lime px-6 py-3 font-satoshi text-[18px] font-medium leading-[1.2] whitespace-nowrap text-shuttle-950"
      >
        Sign In
      </button>
      <AuthDivider />
      <SocialRow inputClass={inputClass} />
    </form>
  );
}

export function AuthNote({ question, linkLabel, href }: { question: string; linkLabel: string; href: string }) {
  return (
    <p className="text-center font-satoshi text-[16px] leading-[1.6]">
      <span className="text-shuttle-400">{question} </span>
      <Link href={href} className="text-persian-blue">
        {linkLabel}
      </Link>
    </p>
  );
}