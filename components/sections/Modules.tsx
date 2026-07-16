"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { modules } from "@/data/modules";

export default function Modules() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Course Syllabus
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Course Modules
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Explore each module to see the topics covered throughout the
            semester.
          </p>
        </div>

        <div className="space-y-6">

          {modules.map((module, index) => {

            const isOpen = openModule === index;

            return (

              <div
                key={module.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all"
              >

                <button
                  onClick={() =>
                    setOpenModule(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left hover:bg-slate-50"
                >

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                      {module.id}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {module.title}
                    </h3>

                    <p className="mt-2 text-slate-500">
                      {module.weeks}
                    </p>

                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="grid gap-4 p-8 md:grid-cols-2 lg:grid-cols-3">

                      {module.topics.map((topic) => (

                        <div
                          key={topic}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-500 hover:bg-blue-50"
                        >
                          {topic}
                        </div>

                      ))}

                    </div>

                  </div>
                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}