"use client";

import { useGameState } from "@/components/game-state-provider";

export function ProfileDashboard() {
  const { state, resetGame } = useGameState();

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Visited routes", `${state.routeHistory.length}`],
          ["Current savings", `$${state.cash}`],
          ["Relationship", `${state.relationship}%`],
          ["Skill growth", `${state.skill}%`],
        ].map(([label, value]) => (
          <article
            key={label}
            className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
          >
            <p className="text-sm text-[#98a8bb]">{label}</p>
            <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#f7c58e]">Traveler</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {state.profile?.origin ?? "No traveler created yet"}
            </h2>
            <p className="mt-2 text-sm text-[#c5d0dc]">
              {state.profile
                ? `${state.profile.goal} · ${state.profile.trait}`
                : "Create a traveler to start your own save file."}
            </p>
          </div>
          <button
            type="button"
            onClick={resetGame}
            className="rounded-full border border-white/10 px-5 py-3 text-sm text-white transition hover:border-[#f0a24d]/70"
          >
            Reset save
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <section className="rounded-[2rem] border border-white/10 bg-white/4 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#f7c58e]">Recent actions</p>
          <ol className="mt-5 space-y-4">
            {state.activityLog.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-black/12 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#14304e] text-sm font-semibold text-[#dce6f2]">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm leading-7 text-[#dce6f2]">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/4 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#f7c58e]">Route history</p>
          <div className="mt-5 space-y-3">
            {state.routeHistory.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/10 bg-black/12 px-4 py-3 text-sm text-[#dce6f2]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
