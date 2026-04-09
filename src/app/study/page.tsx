import { ActionHub } from "@/components/action-hub";
import { GameStatusBar } from "@/components/game-status-bar";
import { SectionCard } from "@/components/section-card";
import { studyActions } from "@/content/app-data";

export default function StudyPage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="Study and skill growth" eyebrow="Playable education system">
        <p className="max-w-3xl text-sm leading-8 text-[#c5d0dc]">
          Education is now something you can choose directly. Skill gains affect the
          sense of long-term growth, while money and time pressure still matter.
        </p>
        <div className="mt-8">
          <ActionHub sectionLabel="Study" cards={studyActions} />
        </div>
      </SectionCard>
    </div>
  );
}
