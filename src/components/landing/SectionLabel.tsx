import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  variant?: "lime" | "dark";
}

export function SectionLabel({ children, variant = "lime" }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-8",
        variant === "lime"
          ? "border-primary/30 text-primary bg-primary/5"
          : "border-foreground/20 text-foreground bg-foreground/5"
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full animate-pulse",
          variant === "lime" ? "bg-primary" : "bg-foreground"
        )}
      />
      {children}
    </div>
  );
}
