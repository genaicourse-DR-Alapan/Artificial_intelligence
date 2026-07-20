import { Target } from "lucide-react";

export default function Vision() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500">
            <Target size={34} />
          </div>

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-300">
            Course Objectives
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What This Course Aims to Teach
          </h2>

          <ul className="mt-10 space-y-5 text-lg leading-8 text-slate-200">

            <li>✓ Understand intelligent agents and rational decision making.</li>

            <li>✓ Learn classical search and heuristic search algorithms.</li>

            <li>✓ Solve game-playing and constraint satisfaction problems.</li>

            <li>✓ Apply probabilistic reasoning using Bayesian Networks.</li>

            <li>✓ Understand Markov Decision Processes and Reinforcement Learning.</li>

            <li>✓ Explore modern AI including Deep Learning, Transformers and Large Language Models.</li>

            <li>✓ Learn the importance of Responsible AI and AI Safety.</li>

          </ul>

        </div>

      </div>
    </section>
  );
}