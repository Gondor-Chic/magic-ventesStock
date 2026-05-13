import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cinzel, Cinzel_Decorative, Cormorant_Garamond, Uncial_Antiqua } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const uncialAntiqua = Uncial_Antiqua({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gondor Chic | Magic VentesStock",
  description:
    "Découvrez Gondor Chic, plateforme e-commerce premium vendant artefacts magiques, poudre de fée, chemises de mithril et cristaux elfiques du Royaume de Gondor.",
  keywords: [
    "Gondor Chic",
    "e-commerce",
    "magie",
    "fantaisie",
    "poudre de fée",
    "chemise mithril",
    "cristal elfique",
    "artefacts magiques",
    "produits fantasy",
    "e-commerce fantasy",
  ],
  authors: [{ name: "Gondor Chic" }],
  creator: "Gondor Chic",
  publisher: "Gondor Chic",
  icons: {
    icon: "/crown.svg",
    apple: "/crown.svg",
  },
  metadataBase: new URL("https://m1-dil-gondor-chic-callarduran-2026.vercel.app"),
  alternates: {
    canonical: "https://m1-dil-gondor-chic-callarduran-2026.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://m1-dil-gondor-chic-callarduran-2026.vercel.app",
    siteName: "Gondor Chic",
    title: "Gondor Chic — Plateforme E-commerce Fantaisie",
    description:
      "Artefacts magiques et produits fantaisie premium du Royaume de Gondor.",
    images: [
      {
        url: "https://m1-dil-gondor-chic-callarduran-2026.vercel.app/crown.svg",
        width: 200,
        height: 200,
        alt: "Logo Gondor Chic - Couronne",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GondorChic",
    creator: "@GondorChic",
    title: "Gondor Chic — Magic VentesStock",
    description:
      "Plateforme e-commerce de produits magiques et artefacts fantaisie.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gondor Chic",
    url: "https://m1-dil-gondor-chic-callarduran-2026.vercel.app",
    logo: "https://m1-dil-gondor-chic-callarduran-2026.vercel.app/crown.svg",
    description:
      "Plateforme e-commerce vendant artefacts magiques et produits fantaisie premium du Royaume de Gondor.",
    sameAs: [
      "https://facebook.com/gondorchic",
      "https://twitter.com/gondorchic",
      "https://instagram.com/gondorchic",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-23-45-67-89",
      contactType: "Customer Service",
      email: "contact@gondor-chic.example.com",
    },
  };

  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${cormorant.variable} ${uncialAntiqua.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-cormorant)]">
        {children}
      </body>
    </html>
  );
}
