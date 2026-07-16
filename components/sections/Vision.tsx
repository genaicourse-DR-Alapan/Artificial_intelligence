import { Eye, Target } from "lucide-react";

export default function Vision() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-28 text-white">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Vision */}

          <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500">

              <Eye size={34} />

            </div>

            <h2 className="text-4xl font-bold">
              Course Vision
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-200">

              This course introduces students to the foundations of
              Artificial Intelligence while preparing them to understand
              modern AI systems such as Deep Learning, Transformers and
              Large Language Models.

              Students will develop both theoretical understanding and
              practical implementation skills.

            </p>

          </div>

          {/* Objectives */}

          <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">

              <Target size={34} />

            </div>

            <h2 className="text-4xl font-bold">

              Course Objectives

            </h2>

            <ul className="mt-8 space-y-5 text-lg leading-8 text-slate-200">

              <li>✓ Understand intelligent agents and search.</li>

              <li>✓ Learn problem solving techniques.</li>

              <li>✓ Study probabilistic reasoning.</li>

              <li>✓ Implement reinforcement learning algorithms.</li>

              <li>✓ Understand deep learning fundamentals.</li>

              <li>✓ Explore Transformers & Large Language Models.</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}