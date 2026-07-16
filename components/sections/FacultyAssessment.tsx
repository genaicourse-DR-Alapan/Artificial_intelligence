import { assessment } from "@/data/assessment";
import {
  Mail,
  GraduationCap,
  MapPin,
  Clock,
} from "lucide-react";

export default function FacultyAssessment() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Faculty */}

        <div>

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            Instructor
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Meet Your Instructor
          </h2>

          <div className="mt-10 rounded-3xl border bg-slate-50 p-8">

            <div className="flex items-center gap-6">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">

                AK

              </div>

              <div>

                <h3 className="text-3xl font-bold">

                  Dr. Alapan Kuila

                </h3>

                <p className="mt-2 text-slate-600">

                  Assistant Professor

                </p>

              </div>

            </div>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <GraduationCap className="text-blue-600" />

                Department of Computer Science

              </div>

              <div className="flex gap-4">

                <MapPin className="text-blue-600" />

                IIITDM Kurnool

              </div>

              <div className="flex gap-4">

                <Mail className="text-blue-600" />

                alapan@iiitk.ac.in

              </div>

              <div className="flex gap-4">

                <Clock className="text-blue-600" />

                Office Hours: Monday 2PM–4PM

              </div>

            </div>

          </div>

        </div>

        {/* Assessment */}

        <div>

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">

            Grading Policy

          </p>

          <h2 className="mt-4 text-5xl font-bold">

            Course Assessment

          </h2>

          <div className="mt-10 space-y-8">

            {assessment.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border bg-slate-50 p-8"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-semibold">

                    {item.title}

                  </h3>

                  <span className="text-2xl font-bold">

                    {item.percentage}

                  </span>

                </div>

                <div className="mt-5 h-3 rounded-full bg-slate-200">

                  <div
                    className={`${item.color} h-3 rounded-full transition-all duration-700`}
                    style={{
                      width: item.percentage,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}