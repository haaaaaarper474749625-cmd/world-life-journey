import { profileHighlights, timeline } from "@/content/app-data";
import { SectionCard } from "@/components/section-card";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Player profile" eyebrow="Long-term life progression">
        <div className="grid gap-4 md:grid-cols-4">
          {profileHighlights.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
            >
              <p className="text-sm text-[#98a8bb]">{item.label}</p>
              <p className="mt-4 text-2xl font-semibold text-white">{item.value}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Passport history" eyebrow="Travel log">
        <ol className="space-y-4">
          {timeline.map((item, index) => (
            <li
              key={item}
              className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/4 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14304e] text-sm font-semibold text-[#dce6f2]">
                {index + 1}
              </div>
              <p className="pt-1 text-sm leading-7 text-[#dce6f2]">{item}</p>
            </li>
          ))}
        </ol>
      </SectionCard>
    </div>
  );
}
