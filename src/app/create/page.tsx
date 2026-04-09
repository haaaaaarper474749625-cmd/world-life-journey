import { CharacterCreator } from "@/components/character-creator";
import { GameStatusBar } from "@/components/game-status-bar";
import { SectionCard } from "@/components/section-card";

export default function CreatePage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="Create your traveler" eyebrow="Player-driven setup">
        <div className="max-w-3xl text-sm leading-8 text-[#c5d0dc]">
          Choose your opening conditions before the trip begins. This is where the
          game starts feeling personal: your origin, money, main desire, and control
          style shape what kind of travel life is possible in the first weeks.
        </div>
        <div className="mt-8">
          <CharacterCreator />
        </div>
      </SectionCard>
    </div>
  );
}
