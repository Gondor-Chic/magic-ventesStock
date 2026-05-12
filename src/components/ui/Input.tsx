import type { ReactNode, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

export default function Input({ label, icon, error, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-[family-name:var(--font-cinzel)] text-sm font-medium tracking-wide text-gondor-brown"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gondor-gold">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`w-full rounded-lg border border-gondor-cream-dark bg-gondor-ivory/80 px-4 py-3 text-gondor-charcoal placeholder:text-gondor-brown-light/50 transition-all duration-300 focus:border-gondor-gold focus:outline-none focus:ring-2 focus:ring-gondor-gold/20 focus:bg-white ${
            icon ? "pl-11" : ""
          } ${error ? "border-gondor-ruby" : ""} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <span className="text-xs text-gondor-ruby font-medium">{error}</span>
      )}
    </div>
  );
}
