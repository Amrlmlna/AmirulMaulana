import Hero from "@/components/Hero";
import RevealSequence from "@/components/RevealSequence";
import WorkSection from "@/components/WorkSection";
import TechStack from "@/components/TechStack";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <RevealSequence />
      <WorkSection />
      <TechStack />
      <Credentials />
      <Contact />
    </main>
  );
}

