import { Crown } from "lucide-react";
import Link from "next/link";

export default function Logo({ size = "default", showAppName = false }: { size?: "small" | "default" | "large"; showAppName?: boolean }) {
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
    <Link href="/" className="group flex flex-col items-center gap-1 no-underline">
      <div className="flex items-center gap-2">
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
      </div>
      {showAppName && (
        <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.25em] uppercase text-gondor-brown-light/70">
          Magic VentesStock
        </span>
      )}
    </Link>
  );
}
