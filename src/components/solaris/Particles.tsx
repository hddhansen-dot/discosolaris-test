import { useMemo } from "react";

export const Particles = ({ count = 40 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 6,
        color: Math.random() > 0.5 ? "var(--primary)" : "var(--accent)",
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: `hsl(${p.color})`,
            boxShadow: `0 0 ${p.size * 4}px hsl(${p.color})`,
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
