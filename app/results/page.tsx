"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ResultsPage() {
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
            <Badge className="mb-6">Case studies & results</Badge>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Real dollars. <span className="gradient-text">Real hours back.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Four verticals, four months post-launch, measured in the client&apos;s own
              dashboards. No vanity metrics — only hard cost savings and time recovered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Aggregate stats */}
      <section className="pb-16">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-4">
            {[
              { label: "Avg. savings / month", value: "$5,250" },
              { label: "Avg. hours back", value: "56h" },
              { label: "Avg. ROI", value: "6.4×" },
              { label: "Client retention", value: "96%" },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card/40 p-5 text-center backdrop-blur"
              >
                <p className="font-display text-3xl font-semibold gradient-text">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual case studies */}
      <section className="pb-24">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <motion.article
                  key={cs.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid gap-8 lg:grid-cols-5">
                    {/* Summary card */}
                    <div className="lg:col-span-2">
                      <div className="gradient-border glass sticky top-32 rounded-3xl p-8">
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-electric/15 text-cyan-electric">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                            {cs.vertical}
                          </span>
                        </div>
                        <h2 className="mt-4 font-display text-2xl font-semibold">
                          {cs.company}
                        </h2>
                        <p className="mt-2 text-muted-foreground">{cs.headline}</p>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-cyan-electric/30 bg-cyan-electric/10 p-4">
                            <p className="text-xs text-muted-foreground">Saved / mo</p>
                            <p className="mt-1 font-display text-2xl font-semibold gradient-text">
                              {cs.savings}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-border bg-card/40 p-4">
                            <p className="text-xs text-muted-foreground">Hours / mo</p>
                            <p className="mt-1 font-display text-2xl font-semibold">
                              {cs.hoursPerMonth}h
                            </p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Link href="/pricing#quote">
                            <Button className="w-full">
                              Get results like this
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Before / After */}
                    <div className="space-y-4 lg:col-span-3">
                      <BeforeAfterCard title="Before FlowForge" items={cs.before} tone="before" />
                      <BeforeAfterCard title="After FlowForge" items={cs.after} tone="after" />

                      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card/40 px-5 py-3 text-xs text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Live — metrics synced from client dashboard
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border/60 py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-semibold">
            What clients say
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-3xl p-7"
              >
                <p className="text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                  <span className="rounded-full border border-cyan-electric/25 bg-cyan-electric/10 px-3 py-1 text-sm font-semibold text-cyan-electric tabular-nums">
                    {t.metric}
                  </span>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-3xl gradient-border glass-strong p-10 text-center">
            <h2 className="font-display text-3xl font-semibold">
              Ready to join them?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get a free, personalized automation audit in under 60 seconds.
            </p>
            <div className="mt-6">
              <Link href="/pricing#quote">
                <Button size="lg">
                  Get my free audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function BeforeAfterCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: { label: string; value: string }[];
  tone: "before" | "after";
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-6",
        tone === "before"
          ? "border-border bg-card/40"
          : "gradient-border glass bg-cyan-electric/[0.03]"
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">{title}</p>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            tone === "before"
              ? "bg-red-400/10 text-red-300"
              : "bg-emerald-400/10 text-emerald-300"
          )}
        >
          {tone === "before" ? "Baseline" : "Post-launch"}
        </span>
      </div>
      <dl className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0"
          >
            <dt className="text-sm text-muted-foreground">{item.label}</dt>
            <dd className="font-display text-lg font-semibold tabular-nums">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
