export function ForgeContact() {
  return (
    <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,77,0,0.18),transparent_60%)]" />
        <div className="absolute inset-0 forge-grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,black,transparent_70%)] opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="font-mono text-[10px] text-accent uppercase tracking-[0.25em] block mb-6">
          ↳ READY TO FORGE
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] uppercase leading-[0.92] mb-8 text-balance">
          Build something
          <br />
          <span className="text-accent">unbreakable.</span>
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground font-light text-lg mb-12">
          Spin up a tempered cluster in under three minutes. Or talk to the engineering
          team and we'll architect your deployment with you.
        </p>

        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="email"
            placeholder="engineer@yourcompany.com"
            className="flex-1 h-12 px-4 bg-surface/60 border border-border text-sm font-mono placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="h-12 px-7 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent/90 transition-colors"
          >
            Request Access →
          </button>
        </form>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
          ↳ no credit card · 14&#8209;day evaluation · cancel any time
        </p>
      </div>
    </section>
  );
}
