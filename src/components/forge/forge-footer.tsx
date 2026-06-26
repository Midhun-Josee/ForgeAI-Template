const COLS = [
  {
    title: "Protocol",
    links: ["Architecture", "Benchmarks", "Security", "Status", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Examples", "Tutorials"],
  },
  {
    title: "Company",
    links: ["About", "Journal", "Careers", "Contact", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Compliance"],
  },
];

export function ForgeFooter() {
  return (
    <footer className="border-t border-border pt-24 pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Oversized wordmark */}
        <div className="mb-24 select-none pointer-events-none">
          <div className="font-display font-bold tracking-[-0.06em] uppercase leading-none text-[clamp(4rem,18vw,16rem)] text-foreground/[0.04] hover:text-foreground/[0.06] transition-colors">
            FORGEAI
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="grid place-items-center size-7 bg-accent text-accent-foreground font-display font-bold text-xs tracking-tighter">
                PF
              </span>
              <span className="font-display font-bold tracking-tighter uppercase">
                Forge<span className="text-accent">AI</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground font-light leading-relaxed mb-6">
              Building the hardware standard for artificial intelligence logic.
              A product of <span className="text-foreground">PixelForge Studio</span>.
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.22em]">
              Forge Series · Vol. 01
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-6">
                {c.title}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground font-light">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="font-mono text-[10px] text-muted-foreground tracking-[0.22em] uppercase">
            © 2026 PixelForge Studio · All rights reserved
          </span>
          <div className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[10px] text-muted-foreground tracking-[0.22em] uppercase">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
