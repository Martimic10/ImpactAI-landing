import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionLazyProvider } from "@/components/motion/MotionLazyProvider";
import { BRAND_LOGO_SRC } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ImpactAI — Social Golf & AI Coach",
  description:
    "The AI-powered social app for golfers. Upload swings, track progress, compete with friends on leaderboards, and get personalized coaching from your AI golf coach.",
  keywords: [
    "golf app",
    "social golf",
    "golf leaderboard",
    "AI golf coach",
    "golf improvement",
    "golf friends",
    "swing upload",
    "golf progress tracking",
  ],
  openGraph: {
    title: "ImpactAI — Social Golf & AI Coach",
    description:
      "Upload swings, track progress, compete with friends, and get personalized AI golf coaching — all in one modern app.",
    type: "website",
    siteName: "ImpactAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ImpactAI — Social Golf & AI Coach",
    description:
      "Upload swings, track progress, compete with friends, and get personalized AI golf coaching — all in one modern app.",
  },
  icons: {
    icon: [{ url: BRAND_LOGO_SRC, type: "image/png" }],
    apple: [{ url: BRAND_LOGO_SRC, type: "image/png" }],
    shortcut: BRAND_LOGO_SRC,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh min-h-[100dvh] flex-col bg-black text-foreground">
        <MotionLazyProvider>{children}</MotionLazyProvider>
      </body>
    </html>
  );
}
