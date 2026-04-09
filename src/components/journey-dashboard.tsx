"use client";

import Link from "next/link";
import { cityPanels, quickActions } from "@/content/app-data";
import { useGameState } from "@/components/game-state-provider";

export function JourneyDashboard() {
  const { state } = useGameState();

  const currentCityPanel =
    cityPanels.find((panel) => panel.city === state.city) ?? cityPanels[0];

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(240,162,77,0.18),rgba(14,31,50,0.88))] p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">Active city</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">{state.city}</h2>
          <p className="mt-1 text-sm text-[#f7c58e]">
            {state.profile?.goal ?? "Open simulation"} - {state.profile?.trait ?? "Flexible style"}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#dce6f2]">
            {currentCityPanel.summary}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Cash", `$${state.cash}`],
              ["Relationship", `${state.relationship}%`],
              ["Skill", `${state.skill}%`],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.5rem] bg-black/16 p-4">
                <p className="text-sm text-[#98a8bb]">{label}</p>
                <p className="mt-3 text-xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {quickActions.map((action) => (
            <article
              key={action.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{action.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#c5d0dc]">{action.detail}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {currentCityPanel.highlights.map((item) => (
          <article
            key={item}
            className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-[#f7c58e]">{state.city}</p>
            <p className="mt-3 text-sm leading-7 text-[#dce6f2]">{item}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            href: "/work",
            title: "Work",
            summary: "Earn travel money and trade fatigue for survival.",
          },
          {
            href: "/study",
            title: "Study",
            summary: "Spend money to gain skill and deeper local access.",
          },
          {
            href: "/health",
            title: "Health",
            summary: "Recover before poor condition starts controlling you.",
          },
          {
            href: "/events",
            title: "Events",
            summary: "Take social risks that can change mood and relationships.",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5 transition hover:border-[#f0a24d]/70"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#c5d0dc]">{item.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
