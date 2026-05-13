import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
  icons: {
    icon: "/ImpactAI-logo-removebg-preview.png",
    apple: "/ImpactAI-logo-removebg-preview.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("impactai-theme");if(t==="dark"){document.documentElement.classList.add("dark");}else if(t==="light"){document.documentElement.classList.remove("dark");}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
