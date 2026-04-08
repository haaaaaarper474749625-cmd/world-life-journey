import { socialConnections } from "@/content/app-data";
import { SectionCard } from "@/components/section-card";

export default function SocialPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="Social and romance layer" eyebrow="Human connections">
        <div className="grid gap-4 lg:grid-cols-3">
          {socialConnections.map((person) => (
            <article
              key={person.name}
              className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0a24d] text-lg font-semibold text-[#091423]">
                {person.name.slice(0, 1)}
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-white">{person.name}</h2>
              <p className="mt-1 text-sm text-[#f7c58e]">
                {person.role} · {person.city}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#c5d0dc]">{person.note}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#dce6f2]">
                  {person.status}
                </span>
                <button className="rounded-full bg-white/8 px-4 py-2 text-sm text-white transition hover:bg-white/12">
                  Open scene
                </button>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
