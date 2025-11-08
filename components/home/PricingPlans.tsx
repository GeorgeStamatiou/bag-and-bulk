"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPlans() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-32 bg-[#F9FAFB]">
      <h2 className="text-3xl font-bold text-[#2D2A8D] text-center mb-4">
        Pricing Plans
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Choose a plan that fits your production scale — from entry-level mixers
        to full-industrial systems.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Basic */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-[#2D2A8D] mb-2">Starter</h3>
          <p className="text-gray-500 mb-4">Ideal for small-scale operations</p>
          <p className="text-3xl font-bold text-[#F15A24] mb-6">R19 000</p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Drum capacity 250 L
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Manual discharge
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Basic warranty
            </li>
          </ul>
          <Button className="bg-[#F15A24] hover:bg-[#d24f20] text-white">
            Get Started
          </Button>
        </div>

        {/* Professional */}
        <div className="rounded-xl border-2 border-[#F15A24] bg-white p-8 text-center shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-[#2D2A8D] mb-2">
            Professional
          </h3>
          <p className="text-gray-500 mb-4">Best for mid-sized operations</p>
          <p className="text-3xl font-bold text-[#F15A24] mb-6">R39 000</p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Drum capacity 500 L
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Electric discharge
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Extended warranty
            </li>
          </ul>
          <Button className="bg-[#F15A24] hover:bg-[#d24f20] text-white">
            Contact Sales
          </Button>
        </div>

        {/* Enterprise */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-[#2D2A8D] mb-2">
            Industrial
          </h3>
          <p className="text-gray-500 mb-4">For high-volume production</p>
          <p className="text-3xl font-bold text-[#F15A24] mb-6">R59 000</p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Drum capacity 1000 L
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Automated control
            </li>
            <li className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#F15A24]" /> Priority support
            </li>
          </ul>
          <Button variant="outline">Request Quote</Button>
        </div>
      </div>
    </section>
  );
}
