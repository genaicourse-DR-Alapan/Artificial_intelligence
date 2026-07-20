"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
            AI
          </div>

          <div>

            <h2 className="font-bold text-slate-900">
              Artificial Intelligence
            </h2>

            <p className="text-xs text-slate-500">
              AD203
            </p>

          </div>

        </Link>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-8">

        <Link href="/">Home</Link>

        <Link href="#syllabus">Syllabus</Link>

        <Link href="#schedule">Schedule</Link>

        <Link href="#lectures">Lectures</Link>

        <Link href="#resources">Resources</Link>

        <Link href="#contact">Contact</Link>

      </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <button className="hidden rounded-full bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 md:block">
            Course Portal
          </button>

          <button className="rounded-lg border p-2 md:hidden">

            <Menu size={22} />

          </button>

        </div>

      </div>
    </header>
  );
}