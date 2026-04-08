import type { ReactNode } from "react";

export function SectionCard({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="glass-panel rounded-[2rem] p-6 md:p-8">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-[#f7c58e]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
