"use client";

import { useMemo, useState } from "react";
import { plannerSlots } from "@/content/app-data";

export function DayPlanner() {
  const [choices, setChoices] = useState<number[]>(plannerSlots.map(() => 0));

  const summary = useMemo(() => {
    const selected = plannerSlots.map((slot, index) => slot.options[choices[index]]);
    const money = selected.filter((item) => item.result.includes("$")).length;
    const social = selected.filter((item) => item.result.toLowerCase().includes("relationship")).length;
    const health = selected.filter((item) => item.result.toLowerCase().includes("health")).length;

    return {
      selected,
      tags: [
        money ? "Budget affected" : "Budget stable",
        social ? "Relationship growth" : "Low social focus",
        health ? "Health maintenance" : "Health risk unchanged",
      ],
    };
  }, [choices]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-4">
        {plannerSlots.map((slot, slotIndex) => (
          <article
            key={slot.time}
            className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#f7c58e]">
                  {slot.time}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{slot.title}</h3>
              </div>
              <span className="rounded-full bg-[#14304e] px-3 py-1 text-xs text-[#dce6f2]">
                Player choice
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              {slot.options.map((option, optionIndex) => (
                <button
                  key={`${slot.time}-${option.label}`}
                  type="button"
                  onClick={() =>
                    setChoices((current) =>
                      current.map((item, index) => (index === slotIndex ? optionIndex : item)),
                    )
                  }
                  className={`rounded-[1.25rem] border px-4 py-4 text-left transition ${
                    choices[slotIndex] === optionIndex
                      ? "border-[#f0a24d] bg-[#f0a24d]/12"
                      : "border-white/10 bg-[#091423]"
                  }`}
                >
                  <h4 className="font-semibold text-white">{option.label}</h4>
                  <p className="mt-2 text-sm text-[#c5d0dc]">{option.result}</p>
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(240,162,77,0.16),rgba(9,20,35,0.94))] p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">Live day result</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">Your day plan</h3>
        <div className="mt-6 space-y-4">
          {summary.selected.map((item, index) => (
            <div key={`${plannerSlots[index].time}-${item.label}`} className="rounded-[1.5rem] bg-black/16 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#98a8bb]">
                {plannerSlots[index].time}
              </p>
              <h4 className="mt-2 font-semibold text-white">{item.label}</h4>
              <p className="mt-2 text-sm leading-7 text-[#dce6f2]">{item.result}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {summary.tags.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#dce6f2]"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-[#c5d0dc]">
          This planner is the beginning of true hand control. Later versions can
          let players drag actions between time slots, carry unfinished tasks into
          tomorrow, and trigger city-specific events from each choice.
        </p>
      </div>
    </div>
  );
}
