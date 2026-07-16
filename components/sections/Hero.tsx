import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}

        <div className="mb-8 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">

          Department of Computer Science • IIITDM Kurnool

        </div>

        {/* Title */}

        <h1 className="max-w-5xl text-6xl font-extrabold tracking-tight text-slate-900 md:text-7xl">

          Artificial Intelligence

        </h1>

        <p className="mt-5 text-2xl font-medium text-blue-600">

          AD203 • Autumn 2026

        </p>

        <p className="mt-10 max-w-3xl text-lg leading-9 text-slate-600">

          Build strong foundations in Artificial Intelligence through
          intelligent agents, search, reasoning, reinforcement learning,
          deep learning, and modern Large Language Models.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700">

            <BookOpen size={18} />

            Course Syllabus

          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium transition hover:bg-slate-100">

            <CalendarDays size={18} />

            Weekly Schedule

          </button>

        </div>

        {/* Stats */}

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="text-4xl font-bold text-blue-600">

              6

            </h2>

            <p className="mt-2 text-slate-600">

              Modules

            </p>

          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="text-4xl font-bold text-blue-600">

              14

            </h2>

            <p className="mt-2 text-slate-600">

              Teaching Weeks

            </p>

          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="text-4xl font-bold text-blue-600">

              5

            </h2>

            <p className="mt-2 text-slate-600">

              Programming Assignments

            </p>

          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="text-4xl font-bold text-blue-600">

              3

            </h2>

            <p className="mt-2 text-slate-600">

              Credits

            </p>

          </div>

        </div>

        {/* Scroll */}

        <div className="mt-16 flex items-center gap-2 text-sm text-slate-500">

          Scroll to Explore

          <ArrowRight size={16} />

        </div>

      </div>

    </section>
  );
}