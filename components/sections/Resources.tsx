import { textbooks, software } from "@/data/resources";
import { BookOpen, Laptop, Download } from "lucide-react";

export default function Resources() {
  return (
    <section className="bg-slate-50 py-28">

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

      </div>

    </section>
  );
}