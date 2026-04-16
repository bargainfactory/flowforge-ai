"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { steps } from "@/lib/data";

const turnarounds = ["30 min", "48 hours", "7 days", "Day 14", "Ongoing"];
const details = [
  "A 30-minute video call where we map your top 3 revenue leaks. You walk away with a scoped plan, prioritized by ROI, before we write a single line of logic.",
  "We shadow your tools for 48 hours — email, CRM, Zapier, Slack — and return a ranked list of automations with projected cost savings and hours recovered for each.",
  "Our engineers wire up Zapier flows + custom GPT agents directly in your stack. Every automation is tested against real data from your business before going live.",
  "Go-live in 14 days with Loom training videos, a written runbook, a dedicated Slack warroom, and a 72-hour stabilization window where we monitor everything.",
  "Monthly retainer kicks in: new agents on demand, performance monitoring, weekly optimizations, always-on Slack support. Your automations get smarter every month.",
];

export default function ProcessPage() {
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
            <Badge className="mb-6">Our process</Badge>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
              One perfect workflow. <span className="gradient-text">Five steps.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Discovery to scale in 14 days. Every client, every vertical, every time.
              No scope creep, no ambiguity, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24">
        <div className="container">
          <div className="relative mx-auto max-w-4xl">
            {/* Vertical line */}
            <div className="pointer-events-none absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-electric/60 via-cyan-electric/20 to-transparent md:block" />

            <div className="space-y-12">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative grid gap-6 md:grid-cols-[64px_1fr] md:gap-8"
                  >
                    {/* Step number */}
                    <div className="flex items-start justify-center">
                      <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-electric to-indigo-400 font-display text-xl font-semibold text-navy-900 shadow-glow">
                        {s.n}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="gradient-border glass rounded-3xl p-8">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                          <Icon className="h-5 w-5 text-cyan-electric" />
                        </div>
                        <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                        <div className="flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {turnarounds[i]}
                        </div>
                      </div>

                      <p className="mt-4 text-muted-foreground">{s.desc}</p>
                      <p className="mt-3 text-sm text-muted-foreground/80">{details[i]}</p>

                      {i === steps.length - 1 && (
                        <div className="mt-6">
                          <Link href="/pricing">
                            <Button>
                              See retainer tiers
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="border-y border-border/60 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold">
              The <span className="gradient-text">14-day guarantee</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              If we don&apos;t have your first automation live and running within 14 days
              of kickoff, you don&apos;t pay for the first month. No questions asked. We&apos;ve never
              had to honor this — but it&apos;s there so you can sign with confidence.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { label: "Avg. time to first live automation", value: "11 days" },
              { label: "On-time delivery rate", value: "100%" },
              { label: "Clients who upgrade in month 2", value: "68%" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card/40 p-5 text-center"
              >
                <p className="font-display text-2xl font-semibold gradient-text">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-3xl gradient-border glass-strong p-10 text-center">
            <h2 className="font-display text-3xl font-semibold">
              Start with a free discovery call
            </h2>
            <p className="mt-3 text-muted-foreground">
              30 minutes, no commitment. We&apos;ll map your revenue leaks and show you what automation can do.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/pricing#quote">
                <Button size="lg">
                  Get my free audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="secondary" size="lg">View pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
