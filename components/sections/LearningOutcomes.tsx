import {
  Bot,
  Search,
  Gamepad2,
  Network,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const outcomes = [
  {
    icon: Bot,
    title: "Design Intelligent Agents",
    description:
      "Design intelligent agents capable of perceiving environments and taking rational actions.",
  },
  {
    icon: Search,
    title: "Implement Search Algorithms",
    description:
      "Implement uninformed and informed search algorithms to solve AI problems efficiently.",
  },
  {
    icon: Gamepad2,
    title: "Solve CSP & Game Playing",
    description:
      "Solve Constraint Satisfaction Problems (CSP) and game-playing problems using AI techniques.",
  },
  {
    icon: Network,
    title: "Build Bayesian Networks",
    description:
      "Construct Bayesian Network models and perform probabilistic reasoning under uncertainty.",
  },
  {
    icon: BrainCircuit,
    title: "Solve MDP & Reinforcement Learning",
    description:
      "Model decision-making problems using Markov Decision Processes (MDPs) and reinforcement learning.",
  },
  {
    icon: Sparkles,
    title: "Explain Modern AI Techniques",
    description:
      "Explain the concepts behind modern Artificial Intelligence, including deep learning and Large Language Models.",
  },
];

export default function LearningOutcomes() {
  return (
    <section className="bg-slate-100 py-28">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Course Learning Outcomes
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            What You Will Achieve
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            After successfully completing this course, students will be able to:
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="text-blue-600" size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}