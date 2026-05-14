import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { MotionLazyProvider } from "@/components/motion/MotionLazyProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
    icon: "/ImpactAI-logo-removebg-preview.png",
    apple: "/ImpactAI-logo-removebg-preview.png",
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070807" },
    { media: "(prefers-color-scheme: light)", color: "#f8faf8" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieVal = cookieStore.get("impactai-theme")?.value;
  const initialTheme = cookieVal === "light" ? "light" : "dark";

  return (
    <html
      lang="en"
      className={`${initialTheme === "dark" ? "dark " : ""}${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh min-h-[100dvh] flex-col bg-background text-foreground">
        <ThemeProvider initialTheme={initialTheme}>
          <MotionLazyProvider>{children}</MotionLazyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
