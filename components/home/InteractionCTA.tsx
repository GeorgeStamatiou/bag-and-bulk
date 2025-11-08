"use client";

import { Button } from "@/components/ui/button";

export default function InteractionCTA() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-32 bg-[#2D2A8D] text-white text-center rounded-t-3xl">
      <h2 className="text-3xl font-bold mb-4">Ready to Build Your Machine?</h2>
      <p className="text-gray-200 max-w-2xl mx-auto mb-8">
        Partner with Bag & Bulk to design and build your custom mixer. We’ll
        bring your specifications to life.
      </p>

      <div className="flex justify-center gap-4">
        <Button className="bg-[#F15A24] hover:bg-[#d24f20] text-white">
          Build Your Machine
        </Button>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-[#2D2A8D]"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
