"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { tiers } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";

export default function PricingPage() {
  useEffect(() => {
    if (window.location.hash === "#quote") {
      setTimeout(() => {
        document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-6">Simple pricing</Badge>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Monthly retainers. <span className="gradient-text">Unlimited ROI.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Every tier is month-to-month after onboarding. Cancel anytime, keep every
              automation. No setup fee, no hidden costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {tiers.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-3xl p-8",
                  t.highlighted
                    ? "gradient-border glass-strong shadow-glow-lg scale-[1.02]"
                    : "glass"
                )}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-cyan-electric to-indigo-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-900">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">
                  {t.tag}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold tabular-nums">
                    ${t.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-electric" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Button
                    variant={t.highlighted ? "primary" : "outline"}
                    className="w-full"
                    onClick={() => startCheckout(t.id)}
                  >
                    Start {t.name}
                  </Button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    30-day onboarding · no setup fee
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mx-auto mt-16 max-w-5xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 pr-6 font-medium">Feature</th>
                  {tiers.map((t) => (
                    <th key={t.id} className="pb-3 text-center font-medium">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Production automations", "1", "Up to 5", "Unlimited"],
                  ["Custom GPT agents", "—", "1", "2 + voice"],
                  ["Optimization cycles", "Monthly", "Weekly", "Continuous"],
                  ["SLA", "48h", "12h", "Same-day"],
                  ["Dedicated engineer", "—", "—", "✓"],
                  ["Portal + run logs", "✓", "✓", "✓"],
                  ["ROI reporting", "—", "Monthly", "Live dashboard"],
                  ["Team training", "—", "1 session", "Unlimited"],
                  ["Strategy offsite", "—", "—", "Quarterly"],
                ].map(([feature, ...vals]) => (
                  <tr key={feature} className="border-b border-border/50">
                    <td className="py-3 pr-6 text-muted-foreground">{feature}</td>
                    {vals.map((v, i) => (
                      <td key={i} className="py-3 text-center">
                        {v === "✓" ? (
                          <Check className="mx-auto h-4 w-4 text-cyan-electric" />
                        ) : v === "—" ? (
                          <span className="text-muted-foreground/40">—</span>
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Retainer calculator */}
      <section className="pb-20">
        <div className="container">
          <RetainerCalculator />
        </div>
      </section>

      {/* Quote form */}
      <ContactForm />

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-3xl gradient-border glass-strong p-10 text-center">
            <h2 className="font-display text-3xl font-semibold">
              Still deciding?
            </h2>
            <p className="mt-3 text-muted-foreground">
              See the results we&apos;ve delivered for businesses like yours.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/results">
                <Button size="lg">
                  View case studies
                  <ArrowRight className="h-4 w-4" />
                </Button>
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

async function startCheckout(tierId: string) {
  try {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tier: tierId }),
    });
    const data = (await res.json()) as { url?: string; error?: string };
    if (data.url) window.location.href = data.url;
    else alert(data.error ?? "Checkout unavailable. Try again shortly.");
  } catch {
    alert("Checkout unavailable. Try again shortly.");
  }
}

function RetainerCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [tasks, setTasks] = useState(3);

  const monthlyWaste = useMemo(
    () => Math.round(hoursPerWeek * hourlyCost * 4.33 * (tasks / 3)),
    [hoursPerWeek, hourlyCost, tasks]
  );

  const suggestedTier =
    monthlyWaste < 1800 ? tiers[0] : monthlyWaste < 5500 ? tiers[1] : tiers[2];
  const netGain = monthlyWaste - suggestedTier.price;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="gradient-border glass-strong overflow-hidden rounded-3xl p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">
              Retainer calculator
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              Find your payoff tier in 10 seconds.
            </h3>
          </div>
          <div className="grid flex-1 gap-4 sm:grid-cols-3">
            <Slider label="Hours / week on repetitive work" min={2} max={80} step={1} value={hoursPerWeek} onChange={setHoursPerWeek} format={(v) => `${v} h`} />
            <Slider label="Fully-loaded hourly cost" min={15} max={120} step={1} value={hourlyCost} onChange={setHourlyCost} format={(v) => `$${v}`} />
            <Slider label="Processes to automate" min={1} max={10} step={1} value={tasks} onChange={setTasks} format={(v) => `${v}`} />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Result label="Monthly waste right now" value={formatCurrency(monthlyWaste)} />
          <Result label="Suggested tier" value={suggestedTier.name} sub={`${formatCurrency(suggestedTier.price)}/mo`} highlight />
          <Result label="Net monthly gain" value={netGain > 0 ? `+${formatCurrency(netGain)}` : formatCurrency(netGain)} sub={`${Math.max(0, Math.round((netGain / Math.max(suggestedTier.price, 1)) * 100))}% ROI`} />
        </div>
      </div>
    </div>
  );
}

function Slider({ label, min, max, step, value, onChange, format }: { label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; format: (v: number) => string }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className="font-display text-sm text-foreground tabular-nums">{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-electric" />
    </label>
  );
}

function Result({ label, value, sub, highlight }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={cn("rounded-2xl border p-5", highlight ? "border-cyan-electric/40 bg-cyan-electric/10" : "border-border bg-card/40")}>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={cn("mt-1 font-display text-2xl font-semibold tabular-nums", highlight && "gradient-text")}>{value}</p>
      {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}
