const TIERS = [
  {
    name: "Standard Issue",
    price: "$249",
    desc: "For teams shipping their first AI surface.",
    features: ["50k API requests / mo", "8-core execution", "Community support", "5 deployed models", "Public endpoints"],
    cta: "Initialize Tier",
  },
  {
    name: "Industrial Grade",
    price: "$899",
    desc: "Production scale with isolated infrastructure.",
    features: ["Unlimited requests", "Isolated H100 clusters", "1hr support SLA", "Unlimited models", "Private endpoints", "Audit logs"],
    cta: "Acquire License",
    featured: true,
  },
  {
    name: "Foundry",
    price: "Custom",
    desc: "Bespoke deployment, dedicated hardware.",
    features: ["Negotiated SLA", "Dedicated hardware", "On-prem deployment", "Custom training", "White-glove onboarding"],
    cta: "Contact Sales",
  },
];

export function ForgePricing() {
  return (
    <section id="pricing" className="py-32 border-t border-border bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] block mb-5">
            <span className="opacity-50">03/</span>PRICING
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] uppercase leading-[0.95]">
            Scale without drift.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative p-10 flex flex-col ${
                t.featured ? "bg-surface" : "bg-background"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em]">
                  Recommended
                </div>
              )}

              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-8">
                {t.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-display text-5xl font-bold tracking-tighter">
                  {t.price}
                </span>
                {t.price !== "Custom" && (
                  <span className="text-muted-foreground font-light">/mo</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground font-light mb-10">{t.desc}</p>

              <ul className="space-y-3.5 mb-12 flex-grow">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/80 font-light">
                    <div className={`size-1 mt-2 shrink-0 ${t.featured ? "bg-accent" : "bg-foreground/40"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full h-12 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  t.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {t.cta} →
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          ↳ all tiers include 14&#8209;day evaluation period
        </p>
      </div>
    </section>
  );
}
