const TESTIMONIALS = [
  {
    quote: "We replaced three vendors and a six-engineer platform team with ForgeAI. The determinism alone justified the switch — for the first time we can write tests against our AI surface.",
    name: "Mira Chen",
    role: "VP Engineering, Meridian Health",
    initials: "MC",
  },
  {
    quote: "ForgeAI's drift control is the difference between a model that works in the demo and a model that works in production at 3am. We sleep through deploys now.",
    name: "Jonas Weber",
    role: "Principal Engineer, Anvil/AI",
    initials: "JW",
  },
  {
    quote: "I have never seen infrastructure this well engineered. Documentation reads like a Linear changelog, errors are actually actionable, and the dashboard is genuinely beautiful.",
    name: "Priya Raman",
    role: "CTO, Vertex Robotics",
    initials: "PR",
  },
];

export function ForgeTestimonials() {
  return (
    <section className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] block mb-5">
              <span className="opacity-50">04/</span>FIELD&nbsp;REPORTS
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] uppercase leading-[0.95]">
              Operators speak.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              className="bg-background p-10 flex flex-col justify-between min-h-[360px] hover:bg-surface/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl font-bold text-accent leading-none">"</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  0{idx + 1} / {TESTIMONIALS.length.toString().padStart(2, "0")}
                </span>
              </div>

              <blockquote className="text-[15px] font-light leading-relaxed text-foreground/90 mb-10">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="size-9 border border-accent/40 grid place-items-center font-mono text-[10px] font-medium text-accent">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
