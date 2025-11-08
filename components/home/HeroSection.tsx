"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-16 lg:px-32 bg-white">
      {/* Left content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-bold text-[#2D2A8D] md:text-5xl leading-tight">
          Transform Ideas <br /> Into Reality
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
          mauris vitae efficitur ullamcorper. Suspendisse sed rhoncus mauris,
          dui eget mauris eleifend.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <Button className="bg-[#F15A24] hover:bg-[#d24f20] text-white">
            Get Started
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/images/logo/vercel.svg"
          alt="Machine Illustration"
          width={400}
          height={400}
          priority
          className="drop-shadow-lg"
        />
      </div>
    </section>
  );
}
