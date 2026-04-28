import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "yellow";
  size?: "md" | "lg";
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center font-ui font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 group overflow-hidden";
    const sizes = {
      md: "px-6 py-3 text-xs",
      lg: "px-10 py-4 text-sm",
    };
    const variants = {
      primary:
        "bg-primary text-primary-foreground shadow-glow-pink hover:shadow-[0_0_40px_hsl(var(--primary)/0.9),0_0_80px_hsl(var(--primary)/0.5)] hover:scale-105",
      yellow:
        "bg-accent text-accent-foreground shadow-glow-yellow hover:scale-105",
      ghost:
        "border border-primary/40 text-foreground hover:border-primary hover:bg-primary/10 hover:shadow-glow-pink",
    };
    return (
      <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...props}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
      </button>
    );
  }
);
NeonButton.displayName = "NeonButton";
