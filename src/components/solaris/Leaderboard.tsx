import { Crown, TrendingUp, TrendingDown, Minus } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { cn } from "@/lib/utils";

const TOP3 = [
  { rank: 2, name: "VEX-09", score: "184,290", avatar: avatar2, color: "secondary" },
  { rank: 1, name: "NOVA_PRIME", score: "208,471", avatar: avatar1, color: "primary" },
  { rank: 3, name: "ORION.RX", score: "172,008", avatar: avatar3, color: "accent" },
];

const ROWS = [
  { rank: 4, name: "HELIOS_VII", score: "164,221", trend: "up", sector: "OMEGA-3" },
  { rank: 5, name: "ZARA_NULL", score: "159,883", trend: "down", sector: "DELTA-9" },
  { rank: 6, name: "KAI_ECHO", score: "154,701", trend: "up", sector: "PRIME-1" },
  { rank: 7, name: "STELLA_X", score: "148,019", trend: "same", sector: "SIGMA-4" },
  { rank: 8, name: "RYU_77", score: "142,556", trend: "up", sector: "OMEGA-3" },
];

export const Leaderboard = () => {
  return (
    <section id="leaderboard" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-sunset opacity-30" />
      <div className="container relative z-10">
        <div className="text-center mb-20 animate-rise">
          <p className="font-ui text-xs tracking-[0.5em] text-primary mb-4 uppercase">Galactic Standings</p>
          <h2 className="font-display text-6xl md:text-7xl text-glow-pink">Top Explorers</h2>
        </div>

        {/* Podium */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-12 items-end">
          {TOP3.map((p) => {
            const isFirst = p.rank === 1;
            return (
              <div
                key={p.rank}
                className={cn(
                  "flex flex-col items-center animate-rise",
                  isFirst ? "order-2" : p.rank === 2 ? "order-1" : "order-3"
                )}
              >
                <div className="relative mb-4">
                  {isFirst && (
                    <Crown className="absolute -top-8 left-1/2 -translate-x-1/2 h-8 w-8 text-accent animate-pulse-yellow" />
                  )}
                  <div
                    className={cn(
                      "rounded-full p-1 bg-cosmic",
                      isFirst ? "shadow-glow-yellow animate-pulse-yellow" : "shadow-glow-pink animate-pulse-glow"
                    )}
                  >
                    <img
                      src={p.avatar}
                      alt={`${p.name} explorer avatar`}
                      width={isFirst ? 128 : 96}
                      height={isFirst ? 128 : 96}
                      loading="lazy"
                      className={cn("rounded-full object-cover", isFirst ? "h-28 w-28 md:h-32 md:w-32" : "h-20 w-20 md:h-24 md:w-24")}
                    />
                  </div>
                </div>
                <div className="font-display text-5xl text-glow-pink mb-1">#{p.rank}</div>
                <div className="font-ui font-bold text-sm tracking-wider">{p.name}</div>
                <div className="font-ui text-xs text-accent mt-1">{p.score}</div>
                <div
                  className={cn(
                    "w-full mt-4 rounded-t-xl glass-panel holo-border",
                    isFirst ? "h-32" : p.rank === 2 ? "h-20" : "h-12"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto glass-panel holo-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-primary/20 font-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Explorer</div>
            <div className="col-span-3">Sector</div>
            <div className="col-span-2 text-right">Score</div>
            <div className="col-span-1 text-right">Δ</div>
          </div>
          {ROWS.map((r, i) => (
            <div
              key={r.rank}
              className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-primary/10 last:border-0 hover:bg-primary/5 transition-all relative overflow-hidden group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s linear infinite",
                }}
              />
              <div className="col-span-1 font-display text-2xl text-primary">#{r.rank}</div>
              <div className="col-span-5 font-ui font-semibold text-sm">{r.name}</div>
              <div className="col-span-3 font-ui text-xs text-muted-foreground">{r.sector}</div>
              <div className="col-span-2 text-right font-ui text-accent">{r.score}</div>
              <div className="col-span-1 flex justify-end">
                {r.trend === "up" && <TrendingUp className="h-4 w-4 text-primary" />}
                {r.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive" />}
                {r.trend === "same" && <Minus className="h-4 w-4 text-muted-foreground" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
