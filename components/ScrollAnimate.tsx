"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  animationType?: "fade-up" | "fade" | "scale";
  delay?: 0 | 100 | 200 | 300 | 400;
}

export default function ScrollAnimate({
  children,
  className = "",
  animationType = "fade-up",
  delay = 0,
}: ScrollAnimateProps) {
  const { ref, isVisible } = useScrollAnimation();

  const delayClass = delay > 0 ? `scroll-animate-delay-${delay}` : "";
  const animationClass = `scroll-animate-${animationType}`;
  const animateClass = isVisible ? "animate" : "";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${animateClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}


