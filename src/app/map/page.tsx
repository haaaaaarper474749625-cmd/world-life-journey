import { GameStatusBar } from "@/components/game-status-bar";
import { RouteControl } from "@/components/route-control";
import { SectionCard } from "@/components/section-card";

export default function MapPage() {
  return (
    <div className="space-y-8">
      <GameStatusBar />
      <SectionCard title="World route map" eyebrow="Travel planning">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(94,210,160,0.22),transparent_28%),linear-gradient(180deg,#0d2137,#091423)] p-6">
          <div className="mb-6 flex h-[220px] items-center justify-center rounded-[1.5rem] border border-dashed border-white/12 bg-white/3 text-center md:h-[280px]">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#5ed2a0]">
                World map prototype
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Manual route decisions sit at the center of the game.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#c5d0dc]">
                Instead of pushing players down one scripted path, the map should let
                them compare trade-offs and choose what kind of life they want next.
              </p>
            </div>
          </div>

          <RouteControl />
        </div>
      </SectionCard>
    </div>
  );
}
