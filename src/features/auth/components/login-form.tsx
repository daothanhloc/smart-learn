"use client";

import { useState } from "react";
import Link from "next/link";

import { loginSchema } from "@/features/auth/schemas/login.schema";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // errors = a map of field name → error message.
  // Like a Map<String, String> in Java — field name is the key.
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // safeParse = like @Valid in Spring Boot.
    // Returns { success, data, error } — doesn't throw.
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      // Flatten Zod errors into a simple { field: message } map
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Validation passed — clear errors, proceed to API call
    setErrors({});

    // TODO: Call your NestJS API here
    console.log("Login submitted:", { email, password, rememberMe });
  };

  return (
    <main className="flex flex-col justify-center px-6 py-12 md:px-20 lg:col-span-7 lg:px-32">
      <div className="mx-auto w-full max-w-md space-y-12">
        {/* ── HEADER ── */}
        <header className="space-y-4">
          <h2 className="text-5xl font-black tracking-tighter text-[#191833]">Welcome back.</h2>
          <p className="font-medium text-[#464553]">
            Continue your intellectual journey or begin a new chapter.
          </p>
        </header>

        <div className="space-y-6">
          {/* ── GOOGLE OAUTH BUTTON ── */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded border border-[#c7c4d6]/20 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-semibold text-[#191833]">Continue with Google</span>
          </button>

          {/* ── DIVIDER ── */}
          <div className="relative flex items-center gap-4">
            <div className="h-px flex-grow bg-[#c7c4d6] opacity-20" />
            <span className="bg-[#fcf8ff] px-2 text-xs tracking-widest text-[#777585] uppercase">
              or academic email
            </span>
            <div className="h-px flex-grow bg-[#c7c4d6] opacity-20" />
          </div>

          {/* ── LOGIN FORM ── */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#464553] uppercase">
                Institutional Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                }}
                placeholder="name@university.edu"
                className="w-full rounded-lg border border-[#c7c4d6]/20 bg-white p-4 transition-all outline-none placeholder:text-[#777585]/50 focus:border-[#241da0] focus:ring-4 focus:ring-[#e2dfff]"
              />
              {/* Show error if exists — like binding Errors object in Thymeleaf */}
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#464553] uppercase">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
                }}
                placeholder="••••••••"
                className="w-full rounded-lg border border-[#c7c4d6]/20 bg-white p-4 transition-all outline-none placeholder:text-[#777585]/50 focus:border-[#241da0] focus:ring-4 focus:ring-[#e2dfff]"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Remember me + Forgot password row */}
            <div className="flex items-center justify-between py-2">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-[#c7c4d6] text-[#241da0] focus:ring-[#e2dfff]"
                />
                <span className="text-sm text-[#464553]">Remember session</span>
              </label>
              <button
                type="button"
                className="text-sm font-semibold text-[#241da0] transition-colors hover:text-[#6464f4]"
              >
                Forgot code?
              </button>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded bg-[#241da0] py-4 font-bold text-white shadow-lg transition-all hover:bg-[#3d3bb7]"
            >
              <span>Explore With Us</span>
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>

        {/* ── FOOTER: Link to register ── */}
        <footer className="border-t border-[#c7c4d6]/10 pt-8 text-center">
          <p className="text-[#464553]">
            New scholar?{" "}
            <Link
              href="/register"
              className="font-bold text-[#241da0] underline-offset-4 hover:underline"
            >
              Apply for entry
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
