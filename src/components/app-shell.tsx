import Link from "next/link";
import type { ReactNode } from "react";
import { BottomNav } from "@/components/bottom-nav";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/create", label: "Create" },
  { href: "/map", label: "Map" },
  { href: "/planner", label: "Planner" },
  { href: "/journey", label: "Journey" },
  { href: "/social", label: "Social" },
  { href: "/profile", label: "Profile" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-frame">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#08111e]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0a24d] text-base font-bold text-[#091423]">
              WJ
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">Global route sim</p>
              <h1 className="text-lg font-semibold text-white">World Life Journey</h1>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#dce6f2] transition hover:border-[#f0a24d]/70 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-28 pt-6 md:px-8 md:pb-16 md:pt-8">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
