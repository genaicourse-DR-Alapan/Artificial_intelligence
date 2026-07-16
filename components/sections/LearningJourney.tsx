import {
  Brain,
  Search,
  Gamepad2,
  Network,
  Bot,
  ShieldCheck,
} from "lucide-react";

const roadmap = [
  {
    icon: Brain,
    title: "AI Foundations",
    desc: "Understand intelligent agents, PEAS, rationality and problem formulation.",
  },
  {
    icon: Search,
    title: "Search & Planning",
    desc: "Learn BFS, DFS, A*, heuristic search, local search and optimization.",
  },
  {
    icon: Gamepad2,
    title: "Reasoning & Games",
    desc: "Master Minimax, Alpha-Beta pruning and Constraint Satisfaction Problems.",
  },
  {
    icon: Network,
    title: "Probabilistic AI",
    desc: "Bayesian Networks, inference, uncertainty and decision making.",
  },
  {
    icon: Bot,
    title: "Reinforcement Learning",
    desc: "Markov Decision Processes, Q-Learning, SARSA and Policy Iteration.",
  },
  {
    icon: ShieldCheck,
    title: "Modern AI",
    desc: "Deep Learning, Transformers, LLMs, Responsible AI and AI Safety.",
  },
];

export default function LearningJourney() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            Learning Journey
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This course takes you from the fundamentals of Artificial
            Intelligence to modern Large Language Models through a carefully
            designed sequence of topics.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {roadmap.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute right-6 top-6 text-7xl font-black text-slate-100">
                  0{index + 1}
                </div>

                <div className="relative z-10">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="text-blue-600" size={30} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.desc}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}