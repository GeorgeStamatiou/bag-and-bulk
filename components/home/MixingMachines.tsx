"use client";

import Image from "next/image";

export default function MixingMachines() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-32 bg-white">
      <h2 className="text-3xl font-bold text-[#2D2A8D] text-center mb-4">
        Our Mixing Machines
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Professional-grade soil and fertilizer mixing equipment designed for
        efficiency and durability.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <h3 className="text-lg font-semibold text-[#2D2A8D] mb-4">
            Rotating Drum Mixer
          </h3>
          <div className="flex justify-center">
            <Image
              src="/images/logo/globe.svg"
              alt="Rotating Drum Mixer"
              width={220}
              height={220}
              className="mx-auto drop-shadow-md"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <h3 className="text-lg font-semibold text-[#2D2A8D] mb-4">
            Ribbon Blender
          </h3>
          <div className="flex justify-center">
            <Image
              src="/images/logo/next.svg"
              alt="Ribbon Blender"
              width={220}
              height={220}
              className="mx-auto drop-shadow-md"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center">
          <h3 className="text-lg font-semibold text-[#2D2A8D] mb-4">
            Paddle Mixer
          </h3>
          <div className="flex justify-center">
            <Image
              src="/images/logo/window.svg"
              alt="Paddle Mixer"
              width={220}
              height={220}
              className="mx-auto drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
