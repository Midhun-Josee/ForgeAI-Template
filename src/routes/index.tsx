import { createFileRoute } from "@tanstack/react-router";
import { ForgeNav } from "@/components/forge/forge-nav";
import { ForgeHero } from "@/components/forge/forge-hero";
import { ForgeMarquee } from "@/components/forge/forge-marquee";
import { ForgeFeatures } from "@/components/forge/forge-features";
import { ForgeIntegrations } from "@/components/forge/forge-integrations";
import { ForgePricing } from "@/components/forge/forge-pricing";
import { ForgeTestimonials } from "@/components/forge/forge-testimonials";
import { ForgeFaq } from "@/components/forge/forge-faq";
import { ForgeBlog } from "@/components/forge/forge-blog";
import { ForgeContact } from "@/components/forge/forge-contact";
import { ForgeFooter } from "@/components/forge/forge-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ForgeAI — Metal-Grade Intelligence | PixelForge" },
      {
        name: "description",
        content:
          "Premium AI startup landing page template. Deterministic compute, tempered precision, production-ready logic. Forged by PixelForge.",
      },
      { property: "og:title", content: "ForgeAI — Metal-Grade Intelligence" },
      {
        property: "og:description",
        content:
          "The premium AI platform template. Hardware-precise typography, purposeful motion, and an exceptional attention to detail.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: ForgeAIPage,
});

function ForgeAIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      <ForgeNav />
      <main>
        <ForgeHero />
        <ForgeMarquee />
        <ForgeFeatures />
        <ForgeIntegrations />
        <ForgePricing />
        <ForgeTestimonials />
        <ForgeFaq />
        <ForgeBlog />
        <ForgeContact />
      </main>
      <ForgeFooter />
    </div>
  );
}
