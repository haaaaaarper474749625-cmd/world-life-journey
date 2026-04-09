import { GameStatusBar } from "@/components/game-status-bar";
import { JourneyDashboard } from "@/components/journey-dashboard";
import { SectionCard } from "@/components/section-card";

export default function JourneyPage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="Current journey" eyebrow="City life simulation">
        <JourneyDashboard />
      </SectionCard>
    </div>
  );
}
