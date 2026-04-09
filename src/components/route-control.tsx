"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { worldRoutes } from "@/content/app-data";
import { useGameState } from "@/components/game-state-provider";

export function RouteControl() {
  const router = useRouter();
  const { applyRouteEffect } = useGameState();
  const [routeIndex, setRouteIndex] = useState(0);
  const [methodIndex, setMethodIndex] = useState(0);

  const route = worldRoutes[routeIndex];
  const method = route.methods[methodIndex];

  const decisionNote = useMemo(() => {
    if (method.type.toLowerCase().includes("budget")) {
      return "You save money but give up comfort and luggage freedom.";
    }
    if (method.type.toLowerCase().includes("overland")) {
      return "You spend more time on the road, but the trip feels far more alive.";
    }
    if (method.type.toLowerCase().includes("remote")) {
      return "You pause movement and stabilize your finances before leaving.";
    }
    return "This is the most direct option, but it may reduce immersion or flexibility.";
  }, [method.type]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-4">
        {worldRoutes.map((item, index) => (
          <button
            key={`${item.from}-${item.to}`}
            type="button"
            onClick={() => {
              setRouteIndex(index);
              setMethodIndex(0);
            }}
            className={`w-full rounded-[1.75rem] border p-5 text-left transition ${
              routeIndex === index
                ? "border-[#f0a24d] bg-[#f0a24d]/12"
                : "border-white/10 bg-white/4"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#f7c58e]">Route option</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              {item.from} to {item.to}
            </h3>
            <p className="mt-2 text-sm text-[#c5d0dc]">
              {item.methods.length} ways to move, each with a different pressure profile.
            </p>
          </button>
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(94,210,160,0.12),rgba(9,20,35,0.94))] p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[#5ed2a0]">Manual route decision</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">
          {route.from} to {route.to}
        </h3>

        <div className="mt-6 grid gap-3">
          {route.methods.map((item, index) => (
            <button
              key={`${route.from}-${route.to}-${item.type}`}
              type="button"
              onClick={() => setMethodIndex(index)}
              className={`rounded-[1.5rem] border px-4 py-4 text-left transition ${
                methodIndex === index
                  ? "border-[#5ed2a0] bg-[#5ed2a0]/10"
                  : "border-white/10 bg-[#091423]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-semibold text-white">{item.type}</h4>
                <span className="text-sm text-[#5ed2a0]">{item.cost}</span>
              </div>
              <p className="mt-2 text-sm text-[#dce6f2]">{item.time}</p>
              <p className="mt-1 text-xs text-[#98a8bb]">{item.impact}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-black/16 p-5">
          <h4 className="text-lg font-semibold text-white">Selected consequence</h4>
          <p className="mt-3 text-sm leading-7 text-[#dce6f2]">{decisionNote}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.25rem] bg-[#091423] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#98a8bb]">Money</p>
              <p className="mt-2 text-lg font-semibold text-white">{method.cost}</p>
            </div>
            <div className="rounded-[1.25rem] bg-[#091423] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#98a8bb]">Travel time</p>
              <p className="mt-2 text-lg font-semibold text-white">{method.time}</p>
            </div>
            <div className="rounded-[1.25rem] bg-[#091423] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#98a8bb]">Trade-off</p>
              <p className="mt-2 text-lg font-semibold text-white">{method.impact}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              applyRouteEffect(`${route.from} to ${route.to}`, method.type, method.effect);
              router.push("/journey");
            }}
            className="mt-5 w-full rounded-full bg-[#5ed2a0] px-5 py-3 font-semibold text-[#091423] transition hover:bg-[#7be1b4]"
          >
            Commit route choice
          </button>
        </div>
      </div>
    </div>
  );
}
