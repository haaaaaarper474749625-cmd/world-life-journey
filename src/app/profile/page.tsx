import { GameStatusBar } from "@/components/game-status-bar";
import { ProfileDashboard } from "@/components/profile-dashboard";
import { SectionCard } from "@/components/section-card";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="Player profile" eyebrow="Long-term life progression">
        <ProfileDashboard />
      </SectionCard>
    </div>
  );
}
