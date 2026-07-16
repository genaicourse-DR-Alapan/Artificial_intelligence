import { course } from "@/data/course";

import {
  GraduationCap,
  User,
  Clock3,
  BookOpen,
  Building2,
  Mail,
} from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Instructor",
    value: course.instructor,
    subtitle: course.designation,
  },

  {
    icon: GraduationCap,
    title: "Credits",
    value: course.credits,
    subtitle: "Lecture • Tutorial • Practical",
  },

  {
    icon: Building2,
    title: "Classroom",
    value: course.classroom,
    subtitle: course.institute,
  },

  {
    icon: Clock3,
    title: "Schedule",
    value: course.timing,
    subtitle: course.semester,
  },

  {
    icon: Mail,
    title: "Email",
    value: course.email,
    subtitle: "Office Hours: TBA",
  },

  {
    icon: BookOpen,
    title: "Prerequisites",
    value: course.prerequisites.join(", "),
    subtitle: "",
  },
];

export default function CourseInfo() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-600">

            Course Overview

          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight">

            Course Information

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Everything students need to know before starting the course.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => {

            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                  <Icon className="text-blue-600" size={28} />

                </div>

                <h3 className="text-lg font-semibold text-slate-500">

                  {card.title}

                </h3>

                <p className="mt-4 text-2xl font-bold">

                  {card.value}

                </p>

                <p className="mt-4 text-slate-500">

                  {card.subtitle}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}