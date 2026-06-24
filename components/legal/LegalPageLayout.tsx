import Link from "next/link";
import Navbar from "@/components/Navbar";
import { COMPANY_NAME } from "@/lib/legal";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-0 min-w-0 flex-1 bg-background text-foreground">
        <article className="section-pad pt-[calc(env(safe-area-inset-top,0px)+6rem)] sm:pt-28">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              ← Back to home
            </Link>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            <div className="mt-10 space-y-8">{children}</div>
          </div>
        </article>

        <div className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="/privacy" className="transition hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition hover:text-foreground">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
