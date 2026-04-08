import Link from "next/link";
import {
  cityPanels,
  handControlPrinciples,
  heroStats,
  modules,
  quickActions,
  socialConnections,
  timeline,
} from "@/content/app-data";
import { SectionCard } from "@/components/section-card";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="glass-panel overflow-hidden rounded-[2.5rem]">
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.35fr_0.9fr] md:px-8 md:py-10">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.45em] text-[#f7c58e]">
              Real travel life simulation
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Build a globe-travel life, not just a trip.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#c5d0dc] md:text-lg">
                A realistic app-style experience where you plan routes, watch your
                budget, find temporary jobs, handle health and study choices, and
                build friendships or romance while crossing the world.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/create"
                className="rounded-full bg-[#f0a24d] px-6 py-3 font-semibold text-[#091423] transition hover:bg-[#f6b56e]"
              >
                Create your traveler
              </Link>
              <Link
                href="/planner"
                className="rounded-full border border-white/12 px-6 py-3 font-semibold text-white transition hover:border-[#f0a24d]/70"
              >
                Plan your first day
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm text-[#98a8bb]">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-[#c5d0dc]">{stat.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCard title="Why this feels hand controlled" eyebrow="Player agency">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {handControlPrinciples.map((item) => (
            <article
              key={item}
              className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5"
            >
              <p className="text-sm leading-7 text-[#dce6f2]">{item}</p>
            </article>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Today in your journey" eyebrow="Live snapshot">
          <div className="grid gap-4 md:grid-cols-2">
            {cityPanels.map((panel) => (
              <article
                key={panel.city}
                className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#f7c58e]">
                  {panel.country}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{panel.city}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c5d0dc]">{panel.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {panel.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#d8e1ea]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Quick actions" eyebrow="Main systems">
          <div className="grid gap-4">
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
        </SectionCard>
      </div>

      <SectionCard title="App modules" eyebrow="Prototype navigation">
        <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {modules.map((module) => (
            <Link
              key={module.title}
              href={module.href}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-[#f0a24d]/60"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#f7c58e]">
                {module.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{module.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c5d0dc]">{module.summary}</p>
            </Link>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <SectionCard title="Relationship network" eyebrow="Social layer">
          <div className="space-y-4">
            {socialConnections.map((person) => (
              <article
                key={person.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                    <p className="mt-1 text-sm text-[#f7c58e]">
                      {person.role} - {person.city}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#14304e] px-3 py-1 text-xs text-[#dce8f5]">
                    {person.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#c5d0dc]">{person.note}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Travel timeline" eyebrow="Session story">
          <ol className="space-y-4">
            {timeline.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/4 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0a24d] font-semibold text-[#091423]">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm leading-7 text-[#dce6f2]">{item}</p>
              </li>
            ))}
          </ol>
        </SectionCard>
      </div>
    </div>
  );
}
