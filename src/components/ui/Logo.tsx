import { Crown } from "lucide-react";
import Link from "next/link";

export default function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-4xl md:text-5xl",
  };

  const iconSize = {
    small: 18,
    default: 24,
    large: 36,
  };

  return (
    <Link href="/" className="group flex items-center gap-2 no-underline">
      <Crown
        size={iconSize[size]}
        className="text-gondor-gold transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
      <span
        className={`font-[family-name:var(--font-cinzel)] font-semibold tracking-wider text-gondor-brown-dark transition-colors duration-300 group-hover:text-gondor-gold ${sizeClasses[size]}`}
      >
        Gondor
        <span className="text-gradient-gold"> Chic</span>
      </span>
    </Link>
  );
}
