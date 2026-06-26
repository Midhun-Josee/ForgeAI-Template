import { useEffect, useState } from "react";

export function ForgeNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="relative grid place-items-center size-7 bg-accent text-accent-foreground font-display font-bold text-xs tracking-tighter">
              <span className="absolute inset-0 bg-accent blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
              <span className="relative">PF</span>
            </span>
            <span className="font-display font-bold text-base tracking-tighter uppercase">
              Forge<span className="text-accent">AI</span>
            </span>
          </a>
          <div className="hidden md:flex gap-7 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors">
            Sign in
          </button>
          <button className="group relative px-4 py-2 bg-foreground text-background text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-accent hover:text-accent-foreground transition-colors">
            <span className="absolute inset-0 -m-px border border-foreground/30 group-hover:border-accent/40 transition-colors" />
            <span className="relative">Get Started →</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
