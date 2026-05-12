import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gondor Chic — Magic VentesStock",
  description:
    "Artefacts magiques et produits fantaisie premium du Royaume de Gondor. Poudre de fée, chemises de mithril, cristaux elfiques et bien plus.",
  keywords: [
    "Gondor Chic",
    "magie",
    "fantaisie",
    "e-commerce",
    "mithril",
    "poudre de fée",
  ],
  icons: {
    icon: "/crown.svg",
    apple: "/crown.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-cormorant)]">
        {children}
      </body>
    </html>
  );
}
