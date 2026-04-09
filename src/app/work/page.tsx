import { ActionHub } from "@/components/action-hub";
import { GameStatusBar } from "@/components/game-status-bar";
import { SectionCard } from "@/components/section-card";
import { workActions } from "@/content/app-data";

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="Work for travel money" eyebrow="Playable work system">
        <p className="max-w-3xl text-sm leading-8 text-[#c5d0dc]">
          When money gets tight, the player should be able to actively work instead
          of just reading about survival pressure. These jobs now change cash,
          energy, skill, and relationships.
        </p>
        <div className="mt-8">
          <ActionHub sectionLabel="Work" cards={workActions} />
        </div>
      </SectionCard>
    </div>
  );
}
