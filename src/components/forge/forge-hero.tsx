import dashboardImg from "@/assets/forge-dashboard.jpg";

export function ForgeHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Ambient gradient + grid */}
      <div className="absolute inset-0 forge-grid-bg [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent_70%)] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] aspect-[2/1] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,77,0,0.22),transparent_60%)] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top status row */}
        <div className="flex items-center justify-center gap-3 mb-10 animate-reveal">
          <div className="inline-flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 border border-accent/30 bg-accent/5 rounded-full">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full size-1.5 bg-accent" />
            </span>
            <span className="font-mono text-[10px] text-accent uppercase tracking-[0.22em]">
              v2.0 — Tempered Precision Release
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="font-display font-bold tracking-[-0.04em] text-balance leading-[0.92] text-[clamp(2.75rem,9vw,7.5rem)] animate-reveal [animation-delay:80ms]">
            METAL&#8209;GRADE
            <br />
            <span className="relative inline-block">
              INTELLIGENCE.
              <span className="absolute -right-3 top-2 text-accent text-2xl md:text-4xl font-mono font-normal">
                /
              </span>
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-muted-foreground text-lg font-light text-pretty animate-reveal [animation-delay:180ms]">
            ForgeAI delivers deterministic compute for high&#8209;stakes workflows.
            No hallucinations. No drift. Just tempered, production&#8209;ready logic.
          </p>

          {/* CTA row */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 animate-reveal [animation-delay:260ms]">
            <button className="group relative w-full sm:w-auto px-7 h-12 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent/90 transition-all">
              <span className="absolute -inset-px border border-accent/40" />
              <span className="relative">Initialize Deployment →</span>
            </button>
            <button className="w-full sm:w-auto px-7 h-12 border border-border bg-surface/40 text-foreground text-xs font-bold uppercase tracking-[0.2em] hover:border-foreground/30 hover:bg-surface transition-all">
              View Documentation
            </button>
          </div>

          {/* Specs strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground/70 animate-reveal [animation-delay:320ms]">
            <span>↳ 99.99% uptime</span>
            <span className="hidden sm:inline opacity-30">/</span>
            <span>↳ sub&#8209;100ms latency</span>
            <span className="hidden sm:inline opacity-30">/</span>
            <span>↳ soc&#8209;2 type ii</span>
          </div>
        </div>

        {/* Dashboard surface */}
        <div className="mt-24 relative animate-reveal [animation-delay:420ms]">
          <div className="absolute -inset-x-20 -top-10 bottom-10 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,77,0,0.25),transparent_60%)] blur-2xl -z-10" />

          {/* Frame */}
          <div className="relative mx-auto max-w-6xl">
            {/* Corner ticks */}
            <CornerTick className="-top-2 -left-2" />
            <CornerTick className="-top-2 -right-2" rotate="90" />
            <CornerTick className="-bottom-2 -right-2" rotate="180" />
            <CornerTick className="-bottom-2 -left-2" rotate="270" />

            <div className="relative bg-surface border border-border p-1.5 shadow-forge">
              <div className="absolute top-0 inset-x-0 h-px hairline-x" />
              <img
                src={dashboardImg}
                alt="ForgeAI operational dashboard with workflow graph, latency metrics and model distribution"
                width={1600}
                height={1008}
                className="w-full aspect-[16/10] object-cover object-top"
              />
            </div>

            {/* Floating UI fragment */}
            <div className="hidden lg:block absolute -right-10 top-1/3 animate-float-slow">
              <div className="bg-surface/90 backdrop-blur-md border border-border shadow-2xl p-4 w-56">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    P95 / LATENCY
                  </span>
                  <span className="size-1.5 rounded-full bg-green-500" />
                </div>
                <div className="font-display text-2xl font-bold tracking-tight">
                  62<span className="text-muted-foreground text-sm font-light">ms</span>
                </div>
                <div className="mt-3 flex items-end gap-1 h-8">
                  {[40, 60, 35, 80, 55, 70, 45, 90, 50, 65, 75, 40].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-accent/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -left-10 bottom-12 animate-float-slow [animation-delay:1.5s]">
              <div className="bg-surface/90 backdrop-blur-md border border-border shadow-2xl p-4 w-52">
                <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent mb-2">
                  ↳ DEPLOY/COMPLETE
                </div>
                <div className="font-display text-sm font-medium leading-snug">
                  cluster&#8209;eu&#8209;west&#8209;3
                </div>
                <div className="font-mono text-[10px] text-muted-foreground mt-1">
                  1,024 nodes online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerTick({ className = "", rotate = "0" }: { className?: string; rotate?: string }) {
  return (
    <div
      className={`absolute size-4 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="absolute top-0 left-0 w-3 h-px bg-accent" />
      <div className="absolute top-0 left-0 w-px h-3 bg-accent" />
    </div>
  );
}
