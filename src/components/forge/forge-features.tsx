const FEATURES = [
  {
    n: "01",
    title: "Cold Storage Compute",
    desc: "Stateless execution environments designed for zero-leakage security protocols. Encrypted weights at rest, in transit, in memory.",
    spec: "AES-256 · HSM",
  },
  {
    n: "02",
    title: "Tempered Training",
    desc: "Proprietary annealing algorithms reduce model drift by 84% in dynamic production environments without retraining cycles.",
    spec: "Drift −84%",
  },
  {
    n: "03",
    title: "Logic Hardening",
    desc: "Formal verification of AI outputs against custom rule schemas. Guarantee compliance with critical safety standards.",
    spec: "SOC-2 · HIPAA",
  },
  {
    n: "04",
    title: "Atomic Scaling",
    desc: "Scale from single requests to millions of concurrent streams in under three seconds, with no cold-start tax.",
    spec: "0ms cold start",
  },
  {
    n: "05",
    title: "Hardware Native",
    desc: "Direct optimization for A100/H100 clusters without virtualization overhead. Bare-metal performance, container ergonomics.",
    spec: "A100 / H100",
  },
  {
    n: "06",
    title: "Deterministic Inference",
    desc: "Reproducible outputs across runs given identical inputs. The first AI platform you can actually unit-test.",
    spec: "100% reproducible",
  },
];

export function ForgeFeatures() {
  return (
    <section id="features" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-20">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] block mb-5">
              <span className="opacity-50">01/</span>FEATURES
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-[-0.03em] uppercase leading-[0.95]">
              Precision tools
              <br />
              <span className="text-muted-foreground/60">for modern engineers.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground font-light leading-relaxed">
            Every primitive is engineered to a hardware standard — measured, repeatable,
            and tested under load. Nothing in ForgeAI is an approximation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-px">
          {FEATURES.map((f) => (
            <div
              key={f.n}
              className="group relative p-10 lg:p-12 border border-border -mx-px -my-px hover:bg-surface/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="size-9 border border-accent/30 grid place-items-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-colors">
                  <span className="font-mono text-[10px] font-medium">{f.n}</span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  {f.spec}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {f.desc}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Read spec <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
