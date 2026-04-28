import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "accent";
}

export const GlowCard = ({ children, className, variant = "default", ...props }: GlowCardProps) => {
  return (
    <div
      className={cn(
        "glass-panel holo-border rounded-2xl p-6 transition-all duration-500",
        "hover:-translate-y-2",
        variant === "accent"
          ? "hover:shadow-glow-yellow"
          : "hover:shadow-glow-pink",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
