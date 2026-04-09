import { ActionHub } from "@/components/action-hub";
import { GameStatusBar } from "@/components/game-status-bar";
import { SectionCard } from "@/components/section-card";
import { healthActions } from "@/content/app-data";

export default function HealthPage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="Health and recovery" eyebrow="Playable medical system">
        <p className="max-w-3xl text-sm leading-8 text-[#c5d0dc]">
          Medical and recovery decisions should feel practical and expensive, not
          decorative. These options now directly change your health, energy, and cash.
        </p>
        <div className="mt-8">
          <ActionHub sectionLabel="Health" cards={healthActions} />
        </div>
      </SectionCard>
    </div>
  );
}
