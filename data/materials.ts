export interface Material {
  title: string;
  type: "Lecture" | "Lab" | "Assignment" | "Notes" | "Reference";
  file: string;
}

export const weeklyMaterials: Record<number, Material[]> = {
  1: [
    {
      title: "Lecture 1 - Welcome to the Course",
      type: "Lecture",
      file: "/materials/week1/lecture1-welcome.pdf",
    },
     {
      title: "Lecture 2 - Evolution of Artificial Intelligence",
      type: "Lecture",
      file: "/materials/week1/lecture2-ai-evolution.pdf",
    },
  ],

  2: [],

  3: [],

  4: [],

  5: [],

  6: [],

  7: [],

  8: [],

  9: [],

  10: [],

  11: [],

  12: [],

  13: [],

  14: [],
};