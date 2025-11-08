"use client";

import { Play } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-20 md:px-16 lg:px-32 bg-[#F9FAFB]">
      {/* Left text content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#2D2A8D] mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
          volutpat, sit maximus nibh, ut tempus pulvinar magna aliquet amet
          ultricies. Ut ut dui ut sapien magna aliquam.
        </p>

        <ul className="space-y-3 text-gray-700 text-sm">
          <li>✅ Professional-grade design and manufacturing.</li>
          <li>✅ Reliable support and consultation for every project.</li>
          <li>✅ Fast lead times and durable machinery built to last.</li>
        </ul>
      </div>

      {/* Right video / interactive demo */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md aspect-video bg-[#2D2A8D] rounded-xl flex items-center justify-center shadow-md">
          {/* play icon overlay */}
          <button className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md hover:scale-105 transition-transform">
            <Play className="w-8 h-8 text-[#2D2A8D]" />
          </button>
          {/* optional video thumbnail placeholder */}
          <video
            className="w-full h-full rounded-xl object-cover opacity-60"
            src="/videos/demo.mp4"
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
