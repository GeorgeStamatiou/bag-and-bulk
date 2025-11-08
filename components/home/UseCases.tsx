"use client";

import { Play, LineChart, Zap, Headset } from "lucide-react";

export default function UseCases() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-32 bg-[#F9FAFB]">
      {/* Top row: text + video */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#2D2A8D] mb-4">Use Cases</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            volutpat, sit maximus nibh, ut tempus pulvinar magna aliquet amet
            ultricies. Ut ut dui ut sapien magna aliquam.
          </p>
          <p className="text-gray-600">
            Discover how our technology adapts across industries — from
            agriculture and manufacturing to environmental solutions.
          </p>
        </div>

        {/* Right video */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-video bg-[#2D2A8D] rounded-xl flex items-center justify-center shadow-md">
            <button className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md hover:scale-105 transition-transform">
              <Play className="w-8 h-8 text-[#2D2A8D]" />
            </button>
            <video
              className="w-full h-full rounded-xl object-cover opacity-60"
              src="/videos/usecase-demo.mp4"
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <LineChart className="w-10 h-10 text-[#F15A24]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D2A8D]">Innovation</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Unique ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Zap className="w-10 h-10 text-[#F15A24]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D2A8D]">Speed</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Unique ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <Headset className="w-10 h-10 text-[#F15A24]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D2A8D]">Support</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Unique ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
