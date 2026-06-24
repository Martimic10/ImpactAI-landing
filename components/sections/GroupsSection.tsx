"use client";

import { m } from "framer-motion";
import { Activity, Calendar, Crown, Users } from "lucide-react";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const leaderboard = [
  { name: "Mike", pts: 42, rank: 1 },
  { name: "Jake", pts: 39, rank: 2 },
  { name: "Ryan", pts: 35, rank: 3 },
  { name: "Alex", pts: 31, rank: 4 },
];

const recentActivity = [
  { text: "Jake won Longest Drive", time: "2h ago" },
  { text: "Mike birdied #7", time: "3h ago" },
  { text: "New round started", time: "5h ago" },
];

export default function GroupsSection() {
  return (
    <section id="groups" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl min-w-0">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.05)}
        >
          <m.div variants={fadeUpVariants} className="px-1 text-center">
            <p className="section-label mb-3">Groups</p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Golf Group Finally Has A Home.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
              Every round changes the standings.
            </p>
          </m.div>

          <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
            <m.div
              variants={fadeUpSoftVariants}
              className="card-lift rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <Users className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Group
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">Saturday Crew</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                4 members · 12 rounds played · Weekly rankings
              </p>
              <div className="mt-5 flex -space-x-2">
                {["M", "J", "R", "A"].map((initial) => (
                  <span
                    key={initial}
                    className="inline-flex size-8 items-center justify-center rounded-full border-2 border-card bg-brand/20 text-xs font-bold text-brand"
                  >
                    {initial}
                  </span>
                ))}
              </div>
            </m.div>

            <m.div
              variants={fadeUpSoftVariants}
              className="card-lift rounded-3xl border border-border bg-card p-6 lg:col-span-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Crown className="size-4 text-brand" />
                  <h3 className="font-semibold text-foreground">Saturday Crew</h3>
                </div>
                <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
                  This Week
                </span>
              </div>
              <ul className="mt-5 space-y-3">
                {leaderboard.map((player) => (
                  <li
                    key={player.name}
                    className="flex items-center justify-between rounded-xl bg-muted px-4 py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex size-6 items-center justify-center rounded-full text-xs font-bold ${
                          player.rank === 1
                            ? "bg-brand text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {player.rank}
                      </span>
                      <span className="text-sm font-medium text-foreground">{player.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-brand">{player.pts} pts</span>
                  </li>
                ))}
              </ul>
            </m.div>

            <m.div
              variants={fadeUpSoftVariants}
              className="card-lift rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-2">
                <Activity className="size-4 text-brand" />
                <h3 className="font-semibold text-foreground">Recent Activity</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {recentActivity.map((item) => (
                  <li key={item.text} className="flex items-start justify-between gap-3">
                    <p className="text-sm text-foreground/80">{item.text}</p>
                    <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-muted px-4 py-3">
                <Calendar className="size-4 shrink-0 text-brand" />
                <p className="text-xs text-muted-foreground">Next round: Saturday 8:00 AM</p>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
