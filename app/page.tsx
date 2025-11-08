import { Button } from "../components/ui/button";
import Hero from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ValueProposition from "@/components/home/ValueProposition";
import UseCases from "@/components/home/UseCases";
import MixingMachines from "@/components/home/MixingMachines";
import PricingPlans from "@/components/home/PricingPlans";
import Resources from "@/components/home/Resources";
import InteractionCTA from "@/components/home/InteractionCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ValueProposition />
      <UseCases />
      <MixingMachines />
      <PricingPlans />
      <Resources />
      <InteractionCTA />
      {/* other sections follow */}
    </main>
  );
}
