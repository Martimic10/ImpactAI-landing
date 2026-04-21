import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ImpactAI — AI Golf Swing Analysis App",
  description:
    "Improve your golf swing with AI. Record your swing, get instant feedback, visual analysis, drills, and progress tracking with ImpactAI.",
  keywords: [
    "golf swing analyzer",
    "AI golf coaching",
    "golf swing analysis app",
    "golf improvement app",
    "golf AI feedback",
  ],
  openGraph: {
    title: "ImpactAI — AI Golf Swing Analysis App",
    description:
      "Improve your golf swing with AI. Record your swing, get instant feedback, visual analysis, drills, and progress tracking with ImpactAI.",
    type: "website",
    siteName: "ImpactAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImpactAI — AI Golf Swing Analysis App",
    description:
      "Improve your golf swing with AI. Record your swing, get instant feedback, visual analysis, drills, and progress tracking with ImpactAI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {children}
      </body>
    </html>
  );
}
