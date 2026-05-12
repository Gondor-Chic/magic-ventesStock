import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white border border-gondor-cream-dark/60 shadow-gondor overflow-hidden transition-all duration-300 ${
        hover ? "hover:shadow-gondor-lg hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
