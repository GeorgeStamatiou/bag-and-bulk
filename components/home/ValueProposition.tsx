"use client";

import { LineChart, Zap, Headset } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-32 bg-white">
      <h2 className="text-3xl font-bold text-[#2D2A8D] text-center mb-10">
        Value Proposition
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="flex justify-center mb-4">
            <LineChart className="w-10 h-10 text-[#F15A24]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D2A8D]">Innovation</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Unique ipsum dolor sit amet, consectetur adipiscing elit. Constantly
            improving designs and technology to stay ahead.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="flex justify-center mb-4">
            <Zap className="w-10 h-10 text-[#F15A24]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D2A8D]">Speed</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Unique ipsum dolor sit amet, consectetur adipiscing elit. We deliver
            solutions quickly without compromising quality.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <div className="flex justify-center mb-4">
            <Headset className="w-10 h-10 text-[#F15A24]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D2A8D]">Support</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Unique ipsum dolor sit amet, consectetur adipiscing elit. Our team
            provides ongoing technical assistance and maintenance.
          </p>
        </div>
      </div>
    </section>
  );
}
