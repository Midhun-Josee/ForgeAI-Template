const LOGOS = [
  "OPENFORGE", "NEXUS", "ANVIL/AI", "TEMPERED", "MERIDIAN",
  "QUANTA", "HELIX", "OBSIDIAN", "VERTEX", "ATLAS·CO",
];

export function ForgeMarquee() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section className="relative py-12 border-y border-border bg-surface/30 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-6 mb-6 px-6 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground shrink-0">
          ↳ Forged with the operators of
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex animate-marquee w-max">
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 font-display font-bold text-2xl tracking-tighter text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            <span className="size-1.5 rounded-full bg-accent/60" />
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
