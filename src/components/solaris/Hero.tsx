import heroImage from "@/assets/hero-solaris.jpg";
import { NeonButton } from "./NeonButton";
import { Particles } from "./Particles";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Disco Solaris alien sunset landscape with lone explorer silhouette"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 scanline opacity-40" />
      </div>

      {/* Drifting light beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-60"
          style={{ left: "20%", animation: "drift 18s linear infinite" }}
        />
        <div
          className="absolute top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent opacity-50"
          style={{ left: "60%", animation: "drift 24s linear infinite 4s" }}
        />
      </div>

      <Particles count={50} />

      {/* Top nav */}
      <nav className="relative z-20 container flex items-center justify-between pt-8">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-primary shadow-glow-pink animate-pulse-glow" />
          <span className="font-ui font-bold text-sm tracking-[0.3em] uppercase">Solaris</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-ui text-xs uppercase tracking-[0.2em]">
          <a href="#roadmap" className="text-foreground/70 hover:text-primary transition-colors">Starmap</a>
          <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">Systems</a>
          <a href="#leaderboard" className="text-foreground/70 hover:text-primary transition-colors">Ranks</a>
          <a href="#enter" className="text-foreground/70 hover:text-primary transition-colors">Enter</a>
        </div>
        <span className="font-ui text-[10px] tracking-[0.3em] text-accent uppercase hidden md:block">
          Cycle 2089 · Live
        </span>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center pt-32 pb-40 min-h-[calc(100vh-100px)]">
        <div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 mb-8 animate-rise">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse-yellow" />
          <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-foreground/80">
            Transmission · Sector Solaris
          </span>
        </div>

        <h1
          className="font-display text-[clamp(5rem,18vw,15rem)] leading-[0.9] text-glow-pink animate-rise"
          style={{ animationDelay: "0.1s" }}
        >
          Disco
          <br />
          <span className="bg-clip-text text-transparent bg-cosmic">Solaris</span>
        </h1>

        <p
          className="font-ui text-base md:text-lg text-foreground/85 max-w-2xl mt-6 mb-10 tracking-wide animate-rise"
          style={{ animationDelay: "0.25s" }}
        >
          Chart your path. Shape your identity. Explore the unknown.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-rise" style={{ animationDelay: "0.4s" }}>
          <NeonButton size="lg" onClick={() => document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })}>
            Enter the Starmap <ArrowRight className="h-4 w-4" />
          </NeonButton>
          <NeonButton size="lg" variant="ghost">
            Read Transmission
          </NeonButton>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-12 left-0 right-0 hidden md:flex justify-between container">
          <Stat label="Explorers" value="48,201" />
          <Stat label="Sectors Charted" value="1,209" />
          <Stat label="Cycle" value="2089.4" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-left">
    <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-primary/70">{label}</div>
    <div className="font-display text-3xl text-glow-yellow">{value}</div>
  </div>
);
