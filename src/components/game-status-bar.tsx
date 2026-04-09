"use client";

import { useGameState } from "@/components/game-state-provider";

export function GameStatusBar() {
  const { state } = useGameState();

  return (
    <div className="mb-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
      {[
        ["City", state.city],
        ["Cash", `$${state.cash}`],
        ["Energy", `${state.energy}%`],
        ["Health", `${state.health}%`],
        ["Mood", `${state.mood}%`],
        ["Day", `Day ${state.day}`],
      ].map(([label, value]) => (
        <div
          key={label}
          className="rounded-[1.35rem] border border-white/10 bg-white/4 px-4 py-3"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#98a8bb]">{label}</p>
          <p className="mt-2 text-lg font-semibold text-white">{value}</p>
        </div>
      ))}
    </div>
  );
}
