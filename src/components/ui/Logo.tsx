import Link from "next/link";

export default function Logo({
  size = "default",
  showAppName = false,
}: {
  size?: "small" | "default" | "large";
  showAppName?: boolean;
}) {
  const dimensions = {
    small: { w: 48, h: 62 },
    default: { w: 64, h: 83 },
    large: { w: 88, h: 114 },
  };

  const textSizes = {
    small: "text-sm",
    default: "text-lg",
    large: "text-2xl md:text-3xl",
  };

  const { w, h } = dimensions[size];

  return (
    <Link
      href="/"
      className="group flex flex-col items-center gap-3 no-underline"
    >
      {/* Gondorian Shield Crest — White Tree, Crown & Seven Stars */}
      <svg
        viewBox="0 0 100 130"
        width={w}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(26,15,5,0.4)]"
        aria-label="Gondor Chic — Blason du Royaume"
      >
        {/* Crown */}
        <path
          d="M32 20 L37 8 L44 15 L50 3 L56 15 L63 8 L68 20Z"
          fill="#cc7722"
          stroke="#a05e18"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="32"
          y="20"
          width="36"
          height="5"
          rx="1"
          fill="#cc7722"
          stroke="#a05e18"
          strokeWidth="1"
        />

        {/* Shield */}
        <path
          d="M12 30 L88 30 L88 82 Q88 92 78 100 L50 124 L22 100 Q12 92 12 82Z"
          fill="#1a0f05"
          stroke="#cc7722"
          strokeWidth="2.5"
        />
        {/* Inner shield border */}
        <path
          d="M18 35 L82 35 L82 79 Q82 88 73 95 L50 116 L27 95 Q18 88 18 79Z"
          fill="none"
          stroke="#cc7722"
          strokeWidth="0.6"
          opacity="0.3"
        />

        {/* Tree trunk */}
        <line
          x1="50"
          y1="108"
          x2="50"
          y2="55"
          stroke="#cc7722"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Roots */}
        <path
          d="M50 108 C46 112 40 114 36 112"
          stroke="#cc7722"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50 108 C54 112 60 114 64 112"
          stroke="#cc7722"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Main branches */}
        <path
          d="M50 60 C42 54 33 47 27 39"
          stroke="#cc7722"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50 60 C58 54 67 47 73 39"
          stroke="#cc7722"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Secondary branches */}
        <path
          d="M50 72 C44 68 37 62 33 54"
          stroke="#cc7722"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50 72 C56 68 63 62 67 54"
          stroke="#cc7722"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Small branches */}
        <path
          d="M50 84 C46 81 42 76 40 69"
          stroke="#cc7722"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50 84 C54 81 58 76 60 69"
          stroke="#cc7722"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Seven Stars of Gondor */}
        <circle cx="30" cy="46" r="1.8" fill="#F2E6D0" opacity="0.85" />
        <circle cx="70" cy="46" r="1.8" fill="#F2E6D0" opacity="0.85" />
        <circle cx="35" cy="37" r="1.5" fill="#F2E6D0" opacity="0.7" />
        <circle cx="65" cy="37" r="1.5" fill="#F2E6D0" opacity="0.7" />
        <circle cx="42" cy="40" r="1.3" fill="#F2E6D0" opacity="0.6" />
        <circle cx="58" cy="40" r="1.3" fill="#F2E6D0" opacity="0.6" />
        <circle cx="50" cy="44" r="2.2" fill="#F2E6D0" opacity="1" />
      </svg>

      {/* Brand name */}
      <div className="flex flex-col items-center gap-0.5">
        <span
          className={`font-[family-name:var(--font-cinzel-decorative)] font-bold tracking-[0.2em] text-[#FBF3E6] transition-all duration-300 group-hover:text-white drop-shadow-[0_1px_3px_rgba(26,15,5,0.3)] ${textSizes[size]}`}
        >
          GONDOR CHIC
        </span>
        {showAppName && (
          <span className="font-[family-name:var(--font-cormorant)] text-[11px] tracking-[0.3em] uppercase text-[#FBF3E6]/60 mt-0.5">
            Magic VentesStock
          </span>
        )}
      </div>
    </Link>
  );
}
