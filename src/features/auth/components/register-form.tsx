"use client";

import { useState } from "react";
import Link from "next/link";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Call API
    console.log("Register submitted:", { name, email, password });
  };

  return (
    <main className="flex flex-col justify-center px-6 py-12 md:px-20 lg:col-span-7 lg:px-32">
      <div className="mx-auto w-full max-w-md space-y-12">
        {/* ── HEADER ── */}
        <header className="space-y-4">
          <h2 className="text-5xl font-black tracking-tighter text-[#191833]">Create account.</h2>
          <p className="font-medium text-[#464553]">
            Join our community of lifelong learners and scholars.
          </p>
        </header>

        <div className="space-y-6">
          {/* ── GOOGLE OAUTH BUTTON ── */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded border border-[#c7c4d6]/20 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:bg-gray-50"
          >
            {/* Google SVG icon */}
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
              or register with email
            </span>
            <div className="h-px flex-grow bg-[#c7c4d6] opacity-20" />
          </div>

          {/* ── REGISTER FORM ── */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full name field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#464553] uppercase">
                Full name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="David Alcade"
                className="w-full rounded-lg border border-[#c7c4d6]/20 bg-white p-4 transition-all outline-none placeholder:text-[#777585]/50 focus:border-[#241da0] focus:ring-4 focus:ring-[#e2dfff]"
              />
            </div>
            {/* Email field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#464553] uppercase">
                Email
              </label>
              {/*
                CONTROLLED INPUT: value={email} means React controls this input.
                onChange fires on every keystroke, calling setEmail with the new value.
                Flow: user types → onChange → setEmail → re-render → input shows new value.
                Like two-way binding in Angular, or binding form fields to a DTO.
              */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@university.edu"
                className="w-full rounded-lg border border-[#c7c4d6]/20 bg-white p-4 transition-all outline-none placeholder:text-[#777585]/50 focus:border-[#241da0] focus:ring-4 focus:ring-[#e2dfff]"
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold tracking-wider text-[#464553] uppercase">
                Create Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-[#c7c4d6]/20 bg-white p-4 transition-all outline-none placeholder:text-[#777585]/50 focus:border-[#241da0] focus:ring-4 focus:ring-[#e2dfff]"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded bg-[#241da0] py-4 font-bold text-white shadow-lg transition-all hover:bg-[#3d3bb7]"
            >
              <span>Create Account</span>
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </button>
          </form>
        </div>

        {/* ── FOOTER: Link to login ── */}
        <footer className="border-t border-[#c7c4d6]/10 pt-8 text-center">
          <p className="text-[#464553]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-[#241da0] underline-offset-4 hover:underline"
            >
              Login here
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
