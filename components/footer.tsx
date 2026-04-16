import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-background">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display font-semibold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-electric to-indigo-400 text-navy-900">
                <Zap className="h-4 w-4" strokeWidth={2.5} />
              </span>
              FlowForge <span className="gradient-text">AI</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Premium AI automation for small business. Done-for-you Zapier flows
              and custom GPT agents, on monthly retainers from $500.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Agency
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-cyan-electric">Services</Link></li>
              <li><Link href="#results" className="hover:text-cyan-electric">Results</Link></li>
              <li><Link href="#pricing" className="hover:text-cyan-electric">Pricing</Link></li>
              <li><Link href="/portal" className="hover:text-cyan-electric">Client Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/api/roi-calculator" className="hover:text-cyan-electric">2026 ROI Calculator (PDF)</Link></li>
              <li><Link href="#faq" className="hover:text-cyan-electric">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-cyan-electric">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-electric">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} FlowForge AI. All rights reserved.</p>
          <p>Built with Next.js 15 · Deployed on Vercel · SOC 2 Ready</p>
        </div>
      </div>
    </footer>
  );
}
