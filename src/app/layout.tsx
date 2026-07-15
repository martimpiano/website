import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martim Almeida — Pianist",
  description:
    "Official website of Martim Almeida, concert pianist. Biography, upcoming performances, discography, media and gallery.",
  keywords: [
    "Martim Almeida",
    "pianist",
    "classical piano",
    "concert pianist",
    "recital",
    "chamber music",
  ],
  authors: [{ name: "Martim Almeida" }],
  openGraph: {
    title: "Martim Almeida — Pianist",
    description:
      "Concert pianist. Solo recitals, chamber music and recordings across Europe and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} antialiased bg-paper text-ink`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
