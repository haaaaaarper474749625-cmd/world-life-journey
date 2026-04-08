import { cityPanels, quickActions } from "@/content/app-data";
import { SectionCard } from "@/components/section-card";

export default function JourneyPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Current journey" eyebrow="City life simulation">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(240,162,77,0.18),rgba(14,31,50,0.88))] p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">
              Active city
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Tokyo, Japan</h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#dce6f2]">
              You have enough money for twelve more days if you live carefully.
              Energy is dropping because of long commute days. A language class and
              weekend cafe shift are both available, but they compete for time.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Cash", "$1,240"],
                ["Sleep debt", "Medium"],
                ["Next visa check", "21 days"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.5rem] bg-black/16 p-4">
                  <p className="text-sm text-[#98a8bb]">{label}</p>
                  <p className="mt-3 text-xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickActions.map((action) => (
              <article
                key={action.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{action.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#c5d0dc]">{action.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard title="City systems" eyebrow="What the player can experience">
        <div className="grid gap-4 md:grid-cols-3">
          {cityPanels.map((panel) => (
            <article
              key={panel.city}
              className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[#f7c58e]">
                {panel.city}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#dce6f2]">{panel.summary}</p>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
