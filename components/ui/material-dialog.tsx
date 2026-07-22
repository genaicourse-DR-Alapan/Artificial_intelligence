"use client";

import { useState } from "react";
import { basePath } from "@/lib/basePath";
import { weeklyMaterials } from "@/data/materials";
import {
  FileText,
  Download,
  Eye,
  X,
  BookOpen,
  FileCode,
  NotebookPen,
} from "lucide-react";

interface Props {
  week: number;
}

export default function MaterialDialog({ week }: Props) {
  const [open, setOpen] = useState(false);

  const materials = weeklyMaterials[week] || [];

  const getIcon = (type: string) => {
    switch (type) {
      case "Lecture":
        return <BookOpen size={18} className="text-blue-600" />;
      case "Lab":
        return <FileCode size={18} className="text-green-600" />;
      case "Assignment":
        return <NotebookPen size={18} className="text-red-600" />;
      default:
        return <FileText size={18} className="text-slate-600" />;
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium transition hover:bg-blue-50 hover:border-blue-500"
      >
        <FileText size={18} />
        Course Materials
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">

          <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b p-6">

              <div>
                <h2 className="text-2xl font-bold">
                  📚 Week {week} Materials
                </h2>

                <p className="text-slate-500">
                  Lecture slides, notes, assignments and resources.
                </p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={26} />
              </button>

            </div>

            <div className="max-h-[500px] overflow-y-auto p-6 space-y-4">

              {materials.length === 0 && (
                <p className="text-slate-500">
                  No materials uploaded yet.
                </p>
              )}

              {materials.map((m, index) => (
                <div
                  key={index}
                  className="rounded-xl border p-4 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">
                      {getIcon(m.type)}

                      <div>
                        <h3 className="font-semibold">
                          {m.title}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {m.type}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">

                      <a
                        // href={m.file}
                        href={`${basePath}${m.file}`}
                        target="_blank"
                        className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 flex items-center gap-2"
                      >
                        <Eye size={16} />
                        View
                      </a>

                      <a
                        href={`${basePath}${m.file}`}
                        download
                        className="rounded-lg border px-3 py-2 hover:bg-slate-100 flex items-center gap-2"
                      >
                        <Download size={16} />
                        Download
                      </a>

                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      )}
    </>
  );
}