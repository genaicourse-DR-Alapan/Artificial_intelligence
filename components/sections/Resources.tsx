import { textbooks, software } from "@/data/resources";
import { BookOpen, Laptop, Download } from "lucide-react";

export default function Resources() {
  return (
    <section id="resources" className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Resources
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Books & Software
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Recommended books and software required throughout the course.
          </p>

        </div>

        {/* BOOKS */}

        <div className="mt-20">

          <h3 className="mb-8 flex items-center gap-3 text-3xl font-bold">

            <BookOpen className="text-blue-600" />

            Textbooks

          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {textbooks.map((book) => (

              <div
                key={book.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div
                  className={`${book.color} mb-8 flex h-48 items-center justify-center rounded-2xl text-6xl text-white`}
                >

                  📘

                </div>

                <p className="text-sm uppercase tracking-widest text-blue-600">

                  {book.type}

                </p>

                <h4 className="mt-3 text-2xl font-bold">

                  {book.title}

                </h4>

                <p className="mt-4 text-slate-600">

                  {book.authors}

                </p>

                <p className="mt-2 text-slate-500">

                  {book.edition}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* SOFTWARE */}

        <div className="mt-28">

          <h3 className="mb-8 flex items-center gap-3 text-3xl font-bold">

            <Laptop className="text-blue-600" />

            Software

          </h3>

          <div className="grid gap-5 md:grid-cols-3">

            {software.map((item) => (

              <div
                key={item}
                className="rounded-2xl border bg-white p-5 shadow-sm transition hover:border-blue-600"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* DOWNLOADS */}

        <div className="mt-28">

          <h3 className="mb-8 flex items-center gap-3 text-3xl font-bold">

            <Download className="text-blue-600" />

            Downloads

          </h3>

          <div className="grid gap-6 md:grid-cols-3">

            <button className="rounded-2xl bg-blue-600 px-8 py-6 text-white transition hover:bg-blue-700">

              Course Syllabus

            </button>

            <button className="rounded-2xl border bg-white px-8 py-6 transition hover:bg-slate-100">

              Lecture Slides

            </button>

            <button className="rounded-2xl border bg-white px-8 py-6 transition hover:bg-slate-100">

              Assignment Sheet

            </button>

          </div>

        </div>
                {/* ================= Academic Integrity ================= */}

        <div className="mt-24">

          <div className="rounded-3xl border border-red-200 bg-red-50 p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-red-700">
              Academic Integrity
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Attendance for the course shall be governed by the institute's rules and regulations.
              Collaboration is encouraged, as discussing ideas with classmates is an effective way to
              learn. However, every submission must represent your own understanding and effort.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Any form of plagiarism, unauthorized copying, or submission of another person's work
              as your own will be considered academic misconduct.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              If you collaborate with classmates, you must explicitly acknowledge their names in
              your submission. Likewise, if you receive significant help from any external source,
              it should also be acknowledged appropriately.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Failure to follow these principles may result in negative marks, reporting under the
              institute's Academic Integrity Policy, course deregistration, or disciplinary action,
              depending on the severity of the violation.
            </p>

          </div>

        </div>

        {/* ================= LLM Policy ================= */}

        <div className="mt-10">

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-blue-700">
              LLM Use Policy
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              For this course, a Large Language Model (LLM) is considered another student in the
              class and an open book. Students are encouraged to use AI tools to understand concepts,
              build intuition, brainstorm ideas, critique approaches, learn programming syntax,
              and assist with debugging.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              However, AI-generated code, reports, solutions, or any other content must not be
              submitted as your own work. Instead, use AI to support your learning and produce
              your own original solution.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Whenever an LLM or any AI tool is used, its use must be explicitly disclosed in your
              submission, just as you would acknowledge a human collaborator or any external resource.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              During evaluation, you should be able to explain every line of code, every design
              decision, and every written statement included in your submission.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Failure to comply with these rules will be treated as academic misconduct in accordance
              with the institute's Academic Integrity guidelines.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}