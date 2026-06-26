import { useState } from "react";

const FAQS = [
  {
    q: "How is ForgeAI different from a typical LLM gateway?",
    a: "Gateways route requests. ForgeAI runs deterministic inference on dedicated hardware with verified outputs — gateways are a thin layer, ForgeAI is the full stack.",
  },
  {
    q: "Can I bring my own model weights?",
    a: "Yes. Upload any open-weight model or your fine-tuned checkpoints. ForgeAI compiles and optimises them for your assigned hardware automatically.",
  },
  {
    q: "What does 'deterministic' actually mean in practice?",
    a: "Given identical inputs and the same model version, ForgeAI returns the same output every time — across runs, regions, and replicas. This makes AI surfaces testable.",
  },
  {
    q: "Do you support on-premise deployment?",
    a: "Foundry-tier customers receive an air-gapped install with the same dashboard and tooling, deployable to your private hardware in roughly four hours.",
  },
  {
    q: "How do you handle PII and compliance?",
    a: "All weights and request payloads are encrypted with hardware security modules. ForgeAI is SOC-2 Type II and HIPAA certified, with BAAs available on request.",
  },
  {
    q: "Is there a free tier for evaluation?",
    a: "Every paid tier ships with a 14-day evaluation period, no credit card. Researchers can apply for the perpetual research tier.",
  },
];

export function ForgeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 border-t border-border bg-surface/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] block mb-5">
              <span className="opacity-50">05/</span>QUESTIONS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.03em] uppercase leading-[0.95]">
              Frequently
              <br />
              asked.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground font-light leading-relaxed">
              Still unclear? Reach the engineering team directly — no support tier required.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                  >
                    <div className="flex items-start gap-5 min-w-0">
                      <span className="font-mono text-[10px] text-accent uppercase tracking-[0.22em] mt-1.5 shrink-0">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="font-display font-medium text-base md:text-lg text-foreground">
                        {f.q}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 size-7 border border-border grid place-items-center transition-all ${
                        isOpen ? "bg-accent border-accent text-accent-foreground rotate-45" : "text-muted-foreground group-hover:border-foreground/40"
                      }`}
                    >
                      <span className="text-base leading-none">+</span>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-11 pr-10 text-sm text-muted-foreground font-light leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
