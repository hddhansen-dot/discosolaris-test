import { Hero } from "@/components/solaris/Hero";
import { Roadmap } from "@/components/solaris/Roadmap";
import { Features } from "@/components/solaris/Features";
import { Leaderboard } from "@/components/solaris/Leaderboard";
import { CTA, Footer } from "@/components/solaris/CTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Disco Solaris — Chart your path across the unknown";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Disco Solaris — a cyberpunk progression universe. Forge your identity, climb the starmap, and explore the unknown."
    );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Roadmap />
      <Features />
      <Leaderboard />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
