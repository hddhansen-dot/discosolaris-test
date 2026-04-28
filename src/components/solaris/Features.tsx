import { GlowCard } from "./GlowCard";
import { User, Zap, Users, BookOpen } from "lucide-react";

const FEATURES = [
  {
    icon: User,
    title: "Identity System",
    desc: "Forge a one-of-one explorer with mutable traits, signature auras and persistent biome lore.",
    tag: "// AVATAR.SYS",
  },
  {
    icon: Zap,
    title: "Progression Engine",
    desc: "Daily missions, ascension tracks and on-chain rewards that compound across every cycle.",
    tag: "// MISSION.RUN",
  },
  {
    icon: Users,
    title: "Social Layer",
    desc: "Live leaderboards, guild constellations and visibility tools that turn solo runs into legends.",
    tag: "// SOCIAL.NET",
  },
  {
    icon: BookOpen,
    title: "Lore & Worldbuilding",
    desc: "Hidden chapters, cryptic transmissions and branching mythology unlocked only by the worthy.",
    tag: "// LORE.ARC",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-16 animate-rise">
          <p className="font-ui text-xs tracking-[0.5em] text-accent mb-4 uppercase">Core Systems</p>
          <h2 className="font-display text-6xl md:text-7xl text-glow-pink">
            Built for explorers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <GlowCard
              key={f.title}
              variant={i % 3 === 1 ? "accent" : "default"}
              className="animate-rise"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-14 w-14 rounded-xl bg-cosmic grid place-items-center shadow-glow-pink">
                  <f.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="font-ui text-[10px] tracking-[0.2em] text-accent">{f.tag}</span>
              </div>
              <h3 className="font-ui text-2xl font-bold uppercase tracking-wider mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
