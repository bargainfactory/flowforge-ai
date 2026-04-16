"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Loader2, Sparkles, Zap } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeader } from "@/components/services";
import { Button } from "@/components/ui/button";

const businessTypes = [
  "Restaurant / Hospitality",
  "E-commerce / DTC",
  "Consulting / Professional services",
  "Local services (plumber, HVAC, etc.)",
  "Healthcare / Clinic",
  "Real estate",
  "Other",
];

type QuoteState = "form" | "loading" | "ideas";

type Idea = { title: string; description: string; savingsEstimate: string };

export function ContactForm() {
  const [state, setState] = useState<QuoteState>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [biz, setBiz] = useState(businessTypes[0]);
  const [painPoints, setPainPoints] = useState("");
  const [ideas, setIdeas] = useState<Idea[]>([]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, businessType: biz, painPoints }),
      });
      const data = (await res.json()) as { ideas?: Idea[] };
      setIdeas(
        data.ideas ?? [
          {
            title: "Inbox Triage Agent",
            description: "AI reads & drafts replies to every inbound email in your voice.",
            savingsEstimate: "~$800/mo",
          },
          {
            title: "Lead Capture Flow",
            description: "Every form, DM, and missed call → CRM + instant reply.",
            savingsEstimate: "~$1,200/mo",
          },
          {
            title: "Review Response Bot",
            description: "Auto-reply to Google/Yelp reviews within 15 minutes.",
            savingsEstimate: "~$400/mo",
          },
        ]
      );
    } catch {
      setIdeas([
        {
          title: "Inbox Triage Agent",
          description: "AI reads & drafts replies to every inbound email in your voice.",
          savingsEstimate: "~$800/mo",
        },
        {
          title: "Lead Capture Flow",
          description: "Every form, DM, and missed call → CRM + instant reply.",
          savingsEstimate: "~$1,200/mo",
        },
        {
          title: "Review Response Bot",
          description: "Auto-reply to Google/Yelp reviews within 15 minutes.",
          savingsEstimate: "~$400/mo",
        },
      ]);
    } finally {
      setState("ideas");
    }
  }

  const calendlyUrl =
    typeof window !== "undefined"
      ? `${process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/flowforge/discovery"}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(biz)}`
      : "#";

  return (
    <section id="quote" className="relative py-24 lg:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Get your quote"
          title={
            <>
              Instant quote — <span className="gradient-text">AI-generated scope</span> in
              30 seconds.
            </>
          }
          sub="Tell us about your business. Our AI suggests 3 high-impact automations instantly."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="gradient-border glass-strong overflow-hidden rounded-3xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {state === "form" && (
                <motion.form
                  key="form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" required>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Maria Santos"
                        className="w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-cyan-electric/50 focus:outline-none focus:ring-1 focus:ring-cyan-electric/30"
                      />
                    </Field>
                    <Field label="Work email" required>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="maria@nonabistro.com"
                        className="w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-cyan-electric/50 focus:outline-none focus:ring-1 focus:ring-cyan-electric/30"
                      />
                    </Field>
                  </div>

                  <Field label="Business type" required>
                    <select
                      value={biz}
                      onChange={(e) => setBiz(e.target.value)}
                      className="w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm focus:border-cyan-electric/50 focus:outline-none focus:ring-1 focus:ring-cyan-electric/30"
                    >
                      {businessTypes.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="What eats your day?" required={false}>
                    <textarea
                      value={painPoints}
                      onChange={(e) => setPainPoints(e.target.value)}
                      rows={3}
                      placeholder="e.g. I spend 3 hours a day replying to reservation DMs and nobody answers the phone after 6pm…"
                      className="w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-cyan-electric/50 focus:outline-none focus:ring-1 focus:ring-cyan-electric/30"
                    />
                  </Field>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Sparkles className="h-4 w-4" />
                    Generate my free audit
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    No CC required · takes 30 seconds · AI-generated scope delivered instantly
                  </p>
                </motion.form>
              )}

              {state === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  <Loader2 className="h-10 w-10 animate-spin text-cyan-electric" />
                  <p className="mt-4 font-display text-lg font-medium">
                    Analyzing your business…
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    GPT-4 is matching automations to your pain points
                  </p>
                </motion.div>
              )}

              {state === "ideas" && (
                <motion.div
                  key="ideas"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-cyan-electric" />
                    <h3 className="font-display text-xl font-semibold">
                      Here&apos;s your personalized scope, {name.split(" ")[0] || "friend"}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    3 high-impact automations matched to{" "}
                    <span className="text-foreground">{biz}</span>
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {ideas.map((idea, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12 }}
                        className="rounded-2xl border border-border bg-card/40 p-5"
                      >
                        <span className="inline-flex items-center gap-1 rounded-full bg-cyan-electric/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-electric">
                          Idea {i + 1}
                        </span>
                        <h4 className="mt-3 font-semibold">{idea.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {idea.description}
                        </p>
                        <p className="mt-3 font-display text-lg font-semibold text-cyan-electric tabular-nums">
                          {idea.savingsEstimate}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                    <Button size="lg" asChild={false}>
                      <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                        <Calendar className="h-4 w-4" />
                        Book strategy call (pre-filled)
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => setState("form")}
                    >
                      Adjust answers
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-cyan-electric"> *</span>}
      </span>
      {children}
    </label>
  );
}
