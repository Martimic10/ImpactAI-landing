import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
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

const themeInitScript = `(function(){try{var t=localStorage.getItem("impactai-theme");if(t==="light"){document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-dvh min-h-[100dvh] flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
