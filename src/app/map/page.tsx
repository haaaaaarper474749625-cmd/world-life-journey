import { worldRoutes } from "@/content/app-data";
import { SectionCard } from "@/components/section-card";

export default function MapPage() {
  return (
    <div className="space-y-8">
      <SectionCard title="World route map" eyebrow="Travel planning">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(94,210,160,0.22),transparent_28%),linear-gradient(180deg,#0d2137,#091423)] p-6">
            <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] border border-dashed border-white/12 bg-white/3 text-center">
              <div className="max-w-md">
                <p className="text-xs uppercase tracking-[0.35em] text-[#5ed2a0]">
                  World map prototype
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Interactive world navigation will live here.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#c5d0dc]">
                  First version focuses on route comparison, budget pressure, and
                  realistic city-to-city movement. Later versions can add zoomable
                  countries, visas, seasons, and local event layers.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {worldRoutes.map((route) => (
              <article
                key={`${route.from}-${route.to}`}
                className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[#f7c58e]">
                  {route.from} to {route.to}
                </p>
                <div className="mt-4 space-y-3">
                  {route.methods.map((method) => (
                    <div
                      key={`${route.from}-${route.to}-${method.type}`}
                      className="rounded-[1.25rem] border border-white/10 bg-[#091423] px-4 py-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-white">{method.type}</h3>
                        <span className="text-sm text-[#5ed2a0]">{method.cost}</span>
                      </div>
                      <p className="mt-2 text-sm text-[#d7e2ee]">{method.time}</p>
                      <p className="mt-1 text-xs text-[#98a8bb]">{method.impact}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
