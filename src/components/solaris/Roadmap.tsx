import { useState } from "react";
import { Check, Lock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Node = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: "completed" | "locked";
  icon?: string;
};

const NODES: Node[] = [
  { id: "1", title: "Daily Login", tagline: "Consistency is power", description: "Return each cycle to harvest stardust, streak bonuses and ascension fragments. Every login deepens your bond with Solaris.", status: "completed", icon: "◉" },
  { id: "2", title: "Missions", tagline: "Take on challenges. Earn. Progress.", description: "Procedurally generated objectives across the cosmos. Complete missions to unlock traits, lore fragments and tradeable artifacts.", status: "completed", icon: "✦" },
  { id: "3", title: "Leaderboard", tagline: "Climb the ranks", description: "Compete with explorers across the universe. Seasonal podiums, weekly shifts and prestige titles await the relentless.", status: "completed", icon: "▲" },
  { id: "4", title: "Profile Expansion", tagline: "More space. More you.", description: "Unlock additional avatar slots, biome backgrounds, and signature emotes. Your profile is your home in Solaris.", status: "completed", icon: "◈" },
  { id: "5", title: "Trait Forge", tagline: "Shape your identity", description: "Combine, evolve and mutate traits to craft a one-of-one explorer. Forged traits affect missions, drops and lore branches.", status: "completed", icon: "⬢" },
  { id: "6", title: "Starmap v2", tagline: "New routes. New goals.", description: "An expanded galactic atlas with branching pathways, dynamic events and hidden constellations only the bravest will chart.", status: "locked", icon: "✺" },
  { id: "7", title: "Disco Solar Necklace", tagline: "Symbolic reward / token", description: "A wearable on-chain artifact granted to early explorers. Confers governance, exclusive lore access and visual auras.", status: "locked", icon: "❍" },
  { id: "8", title: "Lore Expansion", tagline: "Deeper storytelling", description: "Unlock the buried mythology of Disco Solaris — long-form chapters, audio transmissions and cryptic hidden endings.", status: "locked", icon: "⟁" },
];

export const Roadmap = () => {
  const [active, setActive] = useState<Node | null>(null);

  return (
    <section id="roadmap" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-sunset opacity-50" />

      <div className="container relative z-10">
        <div className="text-center mb-20 animate-rise">
          <p className="font-ui text-xs tracking-[0.5em] text-primary mb-4 uppercase">Live Starmap</p>
          <h2 className="font-display text-6xl md:text-8xl text-glow-pink mb-4">The Journey</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Glowing nodes mark conquered worlds. Dimmed signals whisper of what's still to come.
          </p>
        </div>

        {/* Desktop: horizontal serpentine grid */}
        <div className="hidden lg:block relative">
          <RoadmapDesktop nodes={NODES} onSelect={setActive} />
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-muted" />
          <div className="space-y-8">
            {NODES.map((n, i) => (
              <RoadmapNodeMobile key={n.id} node={n} index={i} onClick={() => setActive(n)} />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="glass-panel holo-border border-0 max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={cn(
                      "h-10 w-10 rounded-full grid place-items-center text-xl",
                      active.status === "completed"
                        ? "bg-node text-primary-foreground shadow-glow-pink"
                        : "bg-locked text-muted-foreground"
                    )}
                  >
                    {active.icon}
                  </span>
                  <span className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent">
                    {active.status === "completed" ? "// SECTOR LIVE" : "// SECTOR LOCKED"}
                  </span>
                </div>
                <DialogTitle className="font-display text-4xl text-glow-pink">{active.title}</DialogTitle>
                <DialogDescription className="font-ui text-sm text-primary/90 uppercase tracking-widest">
                  {active.tagline}
                </DialogDescription>
              </DialogHeader>
              <p className="text-muted-foreground leading-relaxed">{active.description}</p>
              <div className="mt-4 pt-4 border-t border-primary/20 flex items-center gap-2 text-xs font-ui uppercase tracking-widest">
                <Sparkles className="h-3 w-3 text-accent" />
                <span className="text-muted-foreground">Coordinates · {active.id.padStart(4, "0")}.SOL</span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

const RoadmapDesktop = ({ nodes, onSelect }: { nodes: Node[]; onSelect: (n: Node) => void }) => {
  // Serpentine grid: 4 cols, 2 rows; reverse 2nd row for "snake" path
  const row1 = nodes.slice(0, 4);
  const row2 = nodes.slice(4, 8);

  return (
    <div className="relative">
      {/* Animated SVG path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pathGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--muted))" />
          </linearGradient>
        </defs>
        <path
          d="M 100 120 L 1100 120 Q 1180 120 1180 250 Q 1180 380 1100 380 L 100 380"
          fill="none"
          stroke="url(#pathGrad)"
          strokeWidth="2"
          strokeDasharray="8 8"
          style={{ animation: "dash-flow 4s linear infinite" }}
          opacity="0.6"
        />
      </svg>

      <div className="grid grid-cols-4 gap-8 mb-24">
        {row1.map((n, i) => (
          <RoadmapNode key={n.id} node={n} delay={i * 0.1} onClick={() => onSelect(n)} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-8">
        {row2.reverse().map((n, i) => (
          <RoadmapNode key={n.id} node={n} delay={(i + 4) * 0.1} onClick={() => onSelect(n)} />
        ))}
      </div>
    </div>
  );
};

const RoadmapNode = ({ node, delay, onClick }: { node: Node; delay: number; onClick: () => void }) => {
  const completed = node.status === "completed";
  return (
    <button
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
      className="group relative flex flex-col items-center text-center animate-rise"
    >
      <div className="relative mb-4">
        <div
          className={cn(
            "h-20 w-20 rounded-full grid place-items-center text-2xl font-ui transition-all duration-500",
            "group-hover:scale-110",
            completed
              ? "bg-node text-primary-foreground animate-pulse-glow"
              : "bg-locked text-muted-foreground/60 grayscale group-hover:grayscale-0"
          )}
        >
          {completed ? <Check className="h-7 w-7" strokeWidth={3} /> : <Lock className="h-6 w-6" />}
        </div>
        <span
          className={cn(
            "absolute -top-2 -right-2 h-6 w-6 rounded-full text-[10px] font-ui font-bold grid place-items-center",
            completed ? "bg-accent text-accent-foreground shadow-glow-yellow" : "bg-muted text-muted-foreground"
          )}
        >
          {node.id}
        </span>
      </div>
      <h3
        className={cn(
          "font-ui font-bold text-sm uppercase tracking-wider mb-1",
          completed ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {node.title}
      </h3>
      <p className={cn("text-xs", completed ? "text-primary/80" : "text-muted-foreground/60")}>
        {node.tagline}
      </p>
    </button>
  );
};

const RoadmapNodeMobile = ({ node, index, onClick }: { node: Node; index: number; onClick: () => void }) => {
  const completed = node.status === "completed";
  return (
    <button
      onClick={onClick}
      style={{ animationDelay: `${index * 0.08}s` }}
      className="relative flex items-start gap-4 text-left animate-rise w-full"
    >
      <div
        className={cn(
          "absolute -left-8 h-6 w-6 rounded-full grid place-items-center -translate-x-1/2",
          completed ? "bg-primary shadow-glow-pink animate-pulse-glow" : "bg-muted border border-border"
        )}
      >
        {completed ? <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} /> : <Lock className="h-2.5 w-2.5 text-muted-foreground" />}
      </div>
      <div className="glass-panel rounded-xl p-4 flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className={cn("font-ui font-bold uppercase text-sm", completed ? "text-foreground" : "text-muted-foreground")}>
            {node.title}
          </h3>
          <span className="font-ui text-[10px] text-accent">#{node.id}</span>
        </div>
        <p className={cn("text-xs", completed ? "text-primary/80" : "text-muted-foreground/60")}>{node.tagline}</p>
      </div>
    </button>
  );
};
