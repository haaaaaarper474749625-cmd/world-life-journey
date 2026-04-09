"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { controlTraits, travelerGoals, travelerOrigins } from "@/content/app-data";
import { useGameState } from "@/components/game-state-provider";

export function CharacterCreator() {
  const router = useRouter();
  const { createTraveler } = useGameState();
  const [origin, setOrigin] = useState(travelerOrigins[0].city);
  const [goal, setGoal] = useState(travelerGoals[2]);
  const [trait, setTrait] = useState(controlTraits[1]);
  const [budget, setBudget] = useState(1600);

  const startingPressure = useMemo(() => {
    if (budget <= 900) return "High pressure start";
    if (budget <= 1800) return "Balanced survival start";
    return "Comfortable opening";
  }, [budget]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">Origin city</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {travelerOrigins.map((item) => (
              <button
                key={item.city}
                type="button"
                onClick={() => setOrigin(item.city)}
                className={`rounded-[1.5rem] border px-4 py-4 text-left transition ${
                  origin === item.city
                    ? "border-[#f0a24d] bg-[#f0a24d]/14"
                    : "border-white/10 bg-[#091423]"
                }`}
              >
                <h3 className="font-semibold text-white">{item.city}</h3>
                <p className="mt-2 text-sm leading-6 text-[#c5d0dc]">{item.reason}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">Primary goal</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {travelerGoals.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setGoal(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  goal === item
                    ? "border-[#f0a24d] bg-[#f0a24d] text-[#091423]"
                    : "border-white/10 text-[#dce6f2]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">Control style</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {controlTraits.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTrait(item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  trait === item
                    ? "border-[#5ed2a0] bg-[#5ed2a0]/12 text-[#dff8ec]"
                    : "border-white/10 text-[#dce6f2]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(240,162,77,0.18),rgba(13,33,55,0.94))] p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">Starting budget</p>
        <div className="mt-4">
          <input
            type="range"
            min={500}
            max={5000}
            step={100}
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value))}
            className="w-full accent-[#f0a24d]"
          />
        </div>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-4xl font-semibold text-white">${budget}</p>
            <p className="mt-2 text-sm text-[#dce6f2]">{startingPressure}</p>
          </div>
          <div className="rounded-full bg-[#091423] px-4 py-2 text-sm text-[#c5d0dc]">
            User controlled
          </div>
        </div>

        <div className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-black/14 p-5">
          <h3 className="text-2xl font-semibold text-white">Traveler summary</h3>
          <div className="space-y-3 text-sm text-[#dce6f2]">
            <p>
              <span className="text-[#98a8bb]">Origin:</span> {origin}
            </p>
            <p>
              <span className="text-[#98a8bb]">Main objective:</span> {goal}
            </p>
            <p>
              <span className="text-[#98a8bb]">Play style:</span> {trait}
            </p>
            <p>
              <span className="text-[#98a8bb]">Pressure level:</span> {startingPressure}
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-[#091423] p-4 text-sm leading-7 text-[#c5d0dc]">
            This opening determines how risky your first month feels. Lower money
            increases the need for part-time work. A social goal unlocks more
            relationship scenes. A study goal opens more education content first.
          </div>

          <button
            type="button"
            onClick={() => {
              createTraveler({
                origin,
                goal,
                trait,
                startingBudget: budget,
              });
              router.push("/journey");
            }}
            className="w-full rounded-full bg-[#f0a24d] px-5 py-3 font-semibold text-[#091423] transition hover:bg-[#f6b56e]"
          >
            Start this life
          </button>
        </div>
      </div>
    </div>
  );
}
