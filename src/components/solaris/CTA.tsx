import { NeonButton } from "./NeonButton";
import { Particles } from "./Particles";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="enter" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-sunset opacity-80" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <Particles count={30} />

      <div className="container relative z-10 text-center max-w-3xl">
        <p className="font-ui text-xs tracking-[0.5em] text-accent mb-6 uppercase animate-rise">
          // Initiate Sequence
        </p>
        <h2
          className="font-display text-6xl md:text-9xl text-glow-pink leading-[0.9] mb-6 animate-rise"
          style={{ animationDelay: "0.1s" }}
        >
          Step into <br />
          <span className="bg-clip-text text-transparent bg-cosmic">Disco Solaris</span>
        </h2>
        <p
          className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto animate-rise"
          style={{ animationDelay: "0.2s" }}
        >
          Your journey across the unknown begins now. The starmap is alive — and it's waiting for you.
        </p>
        <div className="animate-rise" style={{ animationDelay: "0.3s" }}>
          <NeonButton size="lg">
            Begin Transmission <ArrowRight className="h-4 w-4" />
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-primary/15 py-10 px-6">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-primary shadow-glow-pink" />
        <span className="font-ui text-xs tracking-[0.3em] uppercase">Disco Solaris</span>
      </div>
      <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        © Cycle 2089 · Transmitting from the edge of known space
      </p>
    </div>
  </footer>
);
