import { DayPlanner } from "@/components/day-planner";
import { SectionCard } from "@/components/section-card";

export default function PlannerPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Day planner" eyebrow="Manual schedule control">
        <div className="max-w-3xl text-sm leading-8 text-[#c5d0dc]">
          Players should control how a day is spent instead of pressing a single
          continue button. This prototype lets you pick actions for morning,
          afternoon, and evening so money, energy, health, and relationships all
          reflect your priorities.
        </div>
        <div className="mt-8">
          <DayPlanner />
        </div>
      </SectionCard>
    </div>
  );
}
