"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

const links = [
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portal", label: "Client Portal" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all",
            scrolled
              ? "glass-strong shadow-lg shadow-black/5"
              : "bg-transparent"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-semibold text-base tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-electric to-indigo-400 text-navy-900 shadow-glow">
              <Zap className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span>FlowForge <span className="gradient-text">AI</span></span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors hover:text-foreground",
                  pathname === l.href ? "text-cyan-electric" : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LocaleSelect locale={locale} onChange={setLocale} />
            <ThemeToggle />
            <Link href="/pricing#quote" className="hidden md:inline-flex">
              <Button variant="primary" size="sm">
                Free Audit
              </Button>
            </Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass-strong mt-2 rounded-3xl p-4 md:hidden">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/pricing#quote" onClick={() => setOpen(false)}>
                <Button className="mt-2 w-full">Free Audit</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function LocaleSelect({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (l: Locale) => void;
}) {
  return (
    <div className="hidden rounded-full border border-border bg-card/50 p-0.5 text-xs backdrop-blur md:flex">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            locale === l
              ? "bg-cyan-electric text-navy-900"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
