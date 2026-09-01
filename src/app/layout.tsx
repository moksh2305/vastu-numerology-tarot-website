import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Bhumi Shah | Vastu Consultant, Tarot Reader & Numerologist | Mumbai India",
  description: "Bhumi Shah – Certified Vastu Shastra consultant, Tarot reader, Numerologist & Graphologist in Mumbai. 10+ years experience, 1000+ clients.",
  keywords: "Vastu consultant Mumbai, Vastu Shastra expert, Bhumi Shah, tarot reader Mumbai, numerologist Mumbai, graphologist, Astro Vastu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
