import { schedule } from "@/data/schedule";
import { CalendarDays, FileText } from "lucide-react";
import MaterialDialog from "@/components/ui/material-dialog";

export default function WeeklyTimeline() {
  return (
    <section  id="schedule" className="bg-slate-50 py-28">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Weekly Teaching Plan
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Semester Schedule
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Weekly lecture plan based on the official course syllabus.
          </p>
        </div>

        <div className="grid gap-6">

          {schedule.map((item) => (
            <div
              key={item.week}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <CalendarDays size={28} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                      Week {item.week}
                    </p>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {item.topics}
                    </p>
                  </div>

                </div>

                {/* <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium transition hover:bg-blue-50 hover:border-blue-500">
                  <FileText size={18} />
                  {item.slides}
                </button> */}
                <MaterialDialog week={item.week} />

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}