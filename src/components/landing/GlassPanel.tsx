import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassPanel({ children, className, hover = false }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-3xl",
        hover && "glass-panel-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
