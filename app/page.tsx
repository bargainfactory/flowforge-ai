"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ClipboardCheck,
  Inbox,
  Play,
  Sparkles,
  Mail,
  Calendar,
  Star,
  Utensils,
  ShoppingBag,
  Briefcase,
  Wrench,
} from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { testimonials, trustBadges, tiers } from "@/lib/data";

const workflow = [
  { icon: Mail, label: "Lead lands", sub: "Form · DM · Missed call", accent: "from-cyan-electric/20 to-cyan-electric/5" },
  { icon: Bot, label: "Agent qualifies", sub: "GPT scores · drafts reply", accent: "from-indigo-500/20 to-indigo-500/5" },
  { icon: Calendar, label: "Meeting booked", sub: "Calendly · CRM · Slack", accent: "from-emerald-400/20 to-emerald-400/5" },
];

const serviceCards = [
  { icon: Sparkles, title: "Lead Capture", sub: "↑ 38% reply rate" },
  { icon: ClipboardCheck, title: "Onboarding Autopilot", sub: "0 manual touchpoints" },
  { icon: Inbox, title: "Inbox Triage", sub: "↓ 82% inbox time" },
  { icon: Bot, title: "Custom Agents", sub: "$1,200+/mo saved" },
];

const resultTeasers = [
  { icon: Utensils, vertical: "Restaurant", saved: "$3,400/mo", hours: "76h" },
  { icon: ShoppingBag, vertical: "E-commerce", saved: "$7,200/mo", hours: "48h" },
  { icon: Briefcase, vertical: "Consulting", saved: "$5,600/mo", hours: "60h" },
  { icon: Wrench, vertical: "Local services", saved: "$4,800/mo", hours: "40h" },
];

export default function Home() {
  return (
    <PageLayout>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pb-24 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid-glow dark:bg-mesh-dark" />

        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6"><Sparkles className="h-3 w-3" />Premium AI automation for small business</Badge>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
              Ship revenue-grade{" "}
              <span className="gradient-text">automations</span> in 14 days —{" "}
              <span className="text-muted-foreground">not 14 weeks.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              FlowForge AI builds done-for-you Zapier flows and custom GPT agents for
              restaurants, e-com stores and local service owners. Recurring retainers
              from <span className="text-foreground font-medium">$500/mo</span>.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/pricing#quote">
                <Button size="lg">Get my free 60s audit<ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link href="/results">
                <Button variant="secondary" size="lg"><Play className="h-4 w-4" />See live results</Button>
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card · 14-day build guarantee · 47 agencies built this month
            </p>
          </motion.div>

          {/* Animated workflow demo */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto mt-16 max-w-5xl">
            <div className="gradient-border relative overflow-hidden rounded-3xl glass-strong shadow-glow">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-electric" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-electric" />
                  </span>
                  flowforge.ai / live-flow-demo
                </div>
                <span className="text-xs text-muted-foreground">auto-play</span>
              </div>
              <div className="relative p-8 md:p-12">
                <div className="grid gap-4 md:grid-cols-3">
                  {workflow.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.25, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${step.accent} p-5`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 backdrop-blur">
                            <Icon className="h-5 w-5 text-cyan-electric" />
                          </div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Step {i + 1}</span>
                        </div>
                        <p className="mt-4 font-medium">{step.label}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{step.sub}</p>
                        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                          <motion.div className="h-full bg-gradient-to-r from-cyan-electric to-indigo-400" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.6, delay: i * 0.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }} />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm md:flex-row">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                    Run completed in <span className="text-foreground font-medium">1.8s</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span>Leads captured today: <span className="text-foreground font-medium tabular-nums">142</span></span>
                    <span>·</span>
                    <span>Hours saved: <span className="text-foreground font-medium tabular-nums">37.4</span></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust logos */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Built on the stack your business already trusts</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-70">
              {["Zapier", "OpenAI", "Stripe", "HubSpot", "Shopify", "Calendly"].map((l) => (
                <span key={l} className="font-display text-lg font-semibold tracking-tight text-muted-foreground">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services teaser ─── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">Services</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Four services. <span className="gradient-text">Zero busywork.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <Link href="/services" className="group block rounded-3xl glass p-6 transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-electric/25 to-indigo-500/15 text-cyan-electric">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-cyan-electric">{s.sub}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-cyan-electric">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Results teaser ─── */}
      <section className="py-24 lg:py-32 border-y border-border/60">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">Results</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Real dollars. <span className="gradient-text">Real hours back.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resultTeasers.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <Link href="/results" className="group block rounded-3xl glass p-6 transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan-electric" />
                      <span className="text-sm font-medium text-muted-foreground">{r.vertical}</span>
                    </div>
                    <p className="mt-4 font-display text-2xl font-semibold gradient-text">{r.saved}</p>
                    <p className="text-sm text-muted-foreground">{r.hours} saved / month</p>
                    <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-cyan-electric">
                      Read case study <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Process teaser ─── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">Our process</span>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Discovery to scale in <span className="gradient-text">14 days.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                A proven 5-step workflow that takes you from &quot;I have no automations&quot; to
                &quot;my agents run the business while I sleep.&quot; Every client, every vertical.
              </p>
              <div className="mt-6">
                <Link href="/process">
                  <Button size="lg">See the full process<ArrowRight className="h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {["Discovery", "Audit", "Build", "Launch", "Scale"].map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-4 rounded-2xl glass p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-electric to-indigo-400 font-display text-sm font-semibold text-navy-900">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{s}</p>
                    <p className="text-xs text-muted-foreground">
                      {["30 min call", "48h tool audit", "7-day build sprint", "Go-live day 14", "Monthly retainer"][i]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing teaser ─── */}
      <section className="py-24 lg:py-32 border-y border-border/60">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">Pricing</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Monthly retainers. <span className="gradient-text">Unlimited ROI.</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {tiers.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href="/pricing" className={`group block rounded-3xl p-7 transition hover:-translate-y-1 ${t.highlighted ? "gradient-border glass-strong shadow-glow" : "glass"}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">{t.tag}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{t.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-semibold tabular-nums">${t.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">/ mo</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-cyan-electric">
                    View details <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">Testimonials</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Clients who <span className="gradient-text">stopped doing it manually.</span>
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass rounded-3xl p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-3 text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                  <span className="rounded-full border border-cyan-electric/25 bg-cyan-electric/10 px-3 py-1 text-sm font-semibold text-cyan-electric tabular-nums">{t.metric}</span>
                </div>
              </motion.blockquote>
            ))}
          </div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {trustBadges.map((b) => (
              <span key={b} className="rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-medium text-muted-foreground">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-3xl gradient-border glass-strong p-10 text-center">
            <h2 className="font-display text-3xl font-semibold">
              Ready to automate?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get a free, personalized audit in under 60 seconds. No credit card required.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/pricing#quote">
                <Button size="lg">Get my free audit<ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link href="/process">
                <Button variant="secondary" size="lg">See how we work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
