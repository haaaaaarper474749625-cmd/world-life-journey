"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home", icon: "H" },
  { href: "/map", label: "Map", icon: "M" },
  { href: "/journey", label: "Journey", icon: "J" },
  { href: "/events", label: "Events", icon: "E" },
  { href: "/profile", label: "Profile", icon: "P" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="glass-panel mx-auto flex max-w-xl items-center justify-between rounded-[1.75rem] px-3 py-2">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-[64px] flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs transition ${
                active
                  ? "bg-[#f0a24d] text-[#091423]"
                  : "text-[#c9d4df] hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-sm font-semibold">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
