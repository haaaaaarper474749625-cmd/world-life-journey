"use client";

import { useRouter } from "next/navigation";
import { useGameState } from "@/components/game-state-provider";

type ActionCard = {
  title: string;
  summary: string;
  effect: {
    cash?: number;
    energy?: number;
    mood?: number;
    relationship?: number;
    skill?: number;
    health?: number;
    day?: number;
  };
};

export function ActionHub({
  sectionLabel,
  cards,
}: {
  sectionLabel: string;
  cards: ActionCard[];
}) {
  const router = useRouter();
  const { applyAction } = useGameState();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#f7c58e]">{sectionLabel}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{card.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#c5d0dc]">{card.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.entries(card.effect).map(([key, value]) => (
              <span
                key={`${card.title}-${key}`}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#dce6f2]"
              >
                {key} {value}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              applyAction(card.title, card.effect);
              router.push("/journey");
            }}
            className="mt-5 w-full rounded-full bg-[#f0a24d] px-5 py-3 font-semibold text-[#091423] transition hover:bg-[#f6b56e]"
          >
            Take action
          </button>
        </article>
      ))}
    </div>
  );
}
