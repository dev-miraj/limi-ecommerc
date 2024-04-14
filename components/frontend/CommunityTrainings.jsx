import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";
import TrainingCarousel from "./TrainingCarousel";
import { getData } from "@/lib/getData";

export default async function CommunityTrainings() {
  const trainings = await getData("trainings");
  return (
    <div className="bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
      <div className="bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
        <h2>Limi Community</h2>
        <Link
          className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
          href="#"
        >
          See All
        </Link>
      </div>
      <div className="bg-white dark:bg-slate-700 p-4">
        <TrainingCarousel trainings={trainings} />
      </div>
    </div>
  );
}
