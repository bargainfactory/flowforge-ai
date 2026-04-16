"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Clock,
  LineChart,
  Lock,
  Settings,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const automations = [
  {
    name: "Inbox triage agent",
    status: "active",
    runs: 12_847,
    successRate: 99.3,
    saved: 4_280,
    lastRun: "34s ago",
  },
  {
    name: "Lead qualifier",
    status: "active",
    runs: 3_182,
    successRate: 98.7,
    saved: 2_140,
    lastRun: "2m ago",
  },
  {
    name: "Review response bot",
    status: "active",
    runs: 847,
    successRate: 99.8,
    saved: 620,
    lastRun: "8m ago",
  },
  {
    name: "Cart recovery flow",
    status: "paused",
    runs: 521,
    successRate: 97.4,
    saved: 1_870,
    lastRun: "1h ago",
  },
  {
    name: "Booking after-hours agent",
    status: "active",
    runs: 1_093,
    successRate: 99.1,
    saved: 3_600,
    lastRun: "just now",
  },
];

const recentLogs = [
  { time: "11:42 AM", event: "Lead qualified — scored 87/100 → HubSpot", type: "success" },
  { time: "11:38 AM", event: 'Email drafted re: "Catering inquiry" — pending review', type: "info" },
  { time: "11:35 AM", event: "Missed call → SMS follow-up sent + Calendly link", type: "success" },
  { time: "11:22 AM", event: "Google review reply published (5★)", type: "success" },
  { time: "11:10 AM", event: "Cart recovery: $89 order recovered via email #2", type: "success" },
  { time: "10:58 AM", event: "Onboarding: Contract signed → portal invite sent", type: "success" },
];

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/60">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:border-cyan-electric/40"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-electric to-indigo-400 text-navy-900">
                <Zap className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-display font-semibold">
                FlowForge <span className="gradient-text">Portal</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              Demo mode
            </span>
            <Button variant="outline" size="sm">
              <Lock className="h-3.5 w-3.5" />
              Sign in
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-electric">
            Dashboard · Nona Bistro
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold">
            Your automations, live.
          </h1>
          <p className="mt-1 text-muted-foreground">
            Real-time status, run logs, and ROI tracking for every agent we built.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPI icon={Activity} label="Runs this month" value="18,490" delta="+23%" />
          <KPI icon={Clock} label="Hours saved" value="147h" delta="+18h" />
          <KPI icon={CheckCircle2} label="Avg success rate" value="99.1%" delta="+0.2%" />
          <KPI icon={ArrowUpRight} label="ROI this month" value="$12,510" delta="+$2.1k" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card/40 backdrop-blur">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <h2 className="flex items-center gap-2 font-display font-semibold">
                  <Bot className="h-4 w-4 text-cyan-electric" />
                  Active automations
                </h2>
                <button className="grid h-8 w-8 place-items-center rounded-full border border-border transition hover:border-cyan-electric/40">
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="px-6 py-3 text-left font-medium">Automation</th>
                      <th className="px-4 py-3 text-left font-medium">Status</th>
                      <th className="px-4 py-3 text-right font-medium">Runs</th>
                      <th className="px-4 py-3 text-right font-medium">Success</th>
                      <th className="px-4 py-3 text-right font-medium">Saved</th>
                      <th className="px-4 py-3 text-right font-medium">Last run</th>
                    </tr>
                  </thead>
                  <tbody>
                    {automations.map((a) => (
                      <tr
                        key={a.name}
                        className="border-b border-border/50 last:border-0"
                      >
                        <td className="px-6 py-4 font-medium">{a.name}</td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                              a.status === "active"
                                ? "bg-emerald-400/10 text-emerald-300"
                                : "bg-yellow-400/10 text-yellow-300"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                a.status === "active" ? "bg-emerald-400" : "bg-yellow-400"
                              }`}
                            />
                            {a.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right tabular-nums text-muted-foreground">
                          {a.runs.toLocaleString()}
                        </td>
                        <td className="px-4 py-4 text-right tabular-nums">
                          {a.successRate}%
                        </td>
                        <td className="px-4 py-4 text-right font-display font-semibold tabular-nums text-cyan-electric">
                          ${a.saved.toLocaleString()}
                        </td>
                        <td className="px-4 py-4 text-right text-xs text-muted-foreground">
                          {a.lastRun}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-border bg-card/40 backdrop-blur">
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <h2 className="flex items-center gap-2 font-display font-semibold">
                  <LineChart className="h-4 w-4 text-cyan-electric" />
                  Live log
                </h2>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              </div>
              <ul className="divide-y divide-border/50">
                {recentLogs.map((l, i) => (
                  <li key={i} className="px-5 py-3">
                    <p className="text-xs text-muted-foreground">{l.time}</p>
                    <p className="mt-0.5 text-sm">{l.event}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-electric/20 bg-cyan-electric/5 p-8 text-center">
          <Lock className="mx-auto h-8 w-8 text-cyan-electric" />
          <h3 className="mt-3 font-display text-xl font-semibold">
            This is a demo dashboard.
          </h3>
          <p className="mt-1 text-muted-foreground">
            Real clients get a private portal with live data, one-click tune-ups, and Slack-integrated alerting.
          </p>
          <Button className="mt-5" size="lg" asChild={false}>
            <Link href="/#quote">Get your own portal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function KPI({
  icon: Icon,
  label,
  value,
  delta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card/40 p-5 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <Icon className="h-4 w-4 text-cyan-electric" />
      </div>
      <p className="mt-2 font-display text-2xl font-semibold tabular-nums">{value}</p>
      <p className="text-[11px] text-emerald-300">{delta} vs last month</p>
    </motion.div>
  );
}
