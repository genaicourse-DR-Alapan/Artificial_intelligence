import {
  Mail,
  Globe,
  GraduationCap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold">
                AI
              </div>

              <div>

                <h3 className="text-xl font-bold">

                  Artificial Intelligence

                </h3>

                <p className="text-slate-400">

                  AD203

                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">

              Official course website for Artificial Intelligence
              offered by the Department of Computer Science,
              IIITDM Kurnool.

            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold">

              Course

            </h3>

            <div className="mt-6 space-y-3 text-slate-400">

              <p>Syllabus</p>
              <p>Schedule</p>
              <p>Assignments</p>
              <p>Resources</p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold">

              Department

            </h3>

            <div className="mt-6 space-y-3 text-slate-400">

              <p>Computer Science</p>
              <p>IIITDM Kurnool</p>
              <p>Research</p>
              <p>Faculty</p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold">

              Connect

            </h3>

            <div className="mt-8 flex gap-4">

                <div className="rounded-xl bg-slate-800 p-3">
                    <Mail />
                </div>

                <div className="rounded-xl bg-slate-800 p-3">
                    <Globe />
                </div>

                <div className="rounded-xl bg-slate-800 p-3">
                    <GraduationCap />
                </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">

          © 2026 Artificial Intelligence (AD203)
          • IIITDM Kurnool

        </div>

      </div>

    </footer>
  );
}