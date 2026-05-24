import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-soft border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        {eyebrow && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-secondary">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
