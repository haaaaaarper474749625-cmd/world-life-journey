import { ActionHub } from "@/components/action-hub";
import { GameStatusBar } from "@/components/game-status-bar";
import { SectionCard } from "@/components/section-card";
import { eventActions } from "@/content/app-data";

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="Social events and relationship scenes" eyebrow="Playable event system">
        <p className="max-w-3xl text-sm leading-8 text-[#c5d0dc]">
          Social life now has real player actions. These scenes raise relationship
          scores, mood, and narrative momentum instead of staying as static descriptions.
        </p>
        <div className="mt-8">
          <ActionHub sectionLabel="Events" cards={eventActions} />
        </div>
      </SectionCard>
    </div>
  );
}
