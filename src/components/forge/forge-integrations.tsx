const INTEGRATIONS = [
  { name: "Postgres", cat: "Storage" },
  { name: "Vercel", cat: "Edge" },
  { name: "Stripe", cat: "Billing" },
  { name: "Linear", cat: "Workflow" },
  { name: "Slack", cat: "Notify" },
  { name: "GitHub", cat: "CI/CD" },
  { name: "Datadog", cat: "Observability" },
  { name: "Pinecone", cat: "Vector" },
  { name: "Snowflake", cat: "Warehouse" },
  { name: "Segment", cat: "Events" },
  { name: "AWS", cat: "Cloud" },
  { name: "Kafka", cat: "Streaming" },
];

export function ForgeIntegrations() {
  return (
    <section id="integrations" className="py-32 border-t border-border relative">
      <div className="absolute inset-0 forge-grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_70%)] -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] block mb-5">
            <span className="opacity-50">02/</span>INTEGRATIONS
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] uppercase leading-[0.95] mb-6">
            Slots into your stack.
          </h2>
          <p className="text-muted-foreground font-light">
            Native connectors for the tools you already run. No glue code, no vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {INTEGRATIONS.map((i) => (
            <div
              key={i.name}
              className="group bg-background hover:bg-surface/60 transition-colors p-8 flex flex-col gap-6 aspect-square justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="size-10 border border-border grid place-items-center group-hover:border-accent transition-colors">
                  <div className="size-3 bg-foreground group-hover:bg-accent transition-colors" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                  {i.cat}
                </span>
              </div>
              <div>
                <div className="font-display text-xl font-bold tracking-tight">{i.name}</div>
                <div className="font-mono text-[10px] text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  → connect
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="w-12 h-px bg-border" />
            Browse all 80+ integrations
            <span className="w-12 h-px bg-border" />
          </a>
        </div>
      </div>
    </section>
  );
}
