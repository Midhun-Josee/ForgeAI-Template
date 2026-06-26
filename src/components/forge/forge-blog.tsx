const POSTS = [
  {
    cat: "Engineering",
    date: "26 Jun 2026",
    title: "Why deterministic inference is the only inference that matters in production.",
    read: "8 min",
  },
  {
    cat: "Changelog",
    date: "18 Jun 2026",
    title: "ForgeAI v2.0 — tempered training, hardware-native runtime, audit logs.",
    read: "4 min",
  },
  {
    cat: "Field Notes",
    date: "02 Jun 2026",
    title: "How Meridian Health replaced three vendors with a single ForgeAI deployment.",
    read: "12 min",
  },
];

export function ForgeBlog() {
  return (
    <section id="blog" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] block mb-5">
              <span className="opacity-50">06/</span>JOURNAL
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] uppercase leading-[0.95]">
              From the foundry.
            </h2>
          </div>
          <a
            href="#"
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent hover:text-foreground transition-colors"
          >
            All entries →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {POSTS.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group bg-background p-10 flex flex-col min-h-[320px] hover:bg-surface/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {p.cat}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.date}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-[1.15] mb-auto text-balance group-hover:text-accent transition-colors">
                {p.title}
              </h3>

              <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  ↳ {p.read} read
                </span>
                <span className="font-mono text-sm text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
