import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionLazyProvider } from "@/components/motion/MotionLazyProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
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
  title: "TeeUp — Compete With Your Golf Crew",
  description:
    "The social golf competition app. Create rounds with friends, track scores live, complete challenges, and climb your group leaderboard.",
  keywords: [
    "golf app",
    "social golf",
    "golf leaderboard",
    "golf competition",
    "golf friends",
    "golf groups",
    "golf challenges",
    "golf scoring",
  ],
  openGraph: {
    title: "TeeUp — Compete With Your Golf Crew",
    description:
      "Create rounds with friends, track scores live, complete challenges, and climb your group leaderboard.",
    type: "website",
    siteName: "TeeUp",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeeUp — Compete With Your Golf Crew",
    description:
      "Create rounds with friends, track scores live, complete challenges, and climb your group leaderboard.",
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
  themeColor: "#f8faf8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh min-h-[100dvh] flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){if('scrollRestoration' in history)history.scrollRestoration='manual';window.scrollTo(0,0);})();",
          }}
        />
        <MotionLazyProvider>
          <ScrollToTop />
          {children}
        </MotionLazyProvider>
      </body>
    </html>
  );
}
