import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, stats } from "@/content/copy";
import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <Reveal>
          <p className="mb-6 inline-block border border-primary/50 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.24em] text-primary uppercase">
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display-xl max-w-4xl text-4xl sm:text-6xl lg:text-7xl">
            2.6 billion people are logging on to{" "}
            <span className="text-primary">Facebook</span> each and every month!
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-13 px-8 text-sm font-extrabold tracking-[0.12em] uppercase"
            >
              <a href="#free-report">
                {hero.primaryCta}
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 border-border bg-transparent px-8 text-sm font-extrabold tracking-[0.12em] uppercase hover:border-primary hover:text-primary"
            >
              <a href="#final-cta">{hero.secondaryCta}</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-muted-foreground/80 uppercase">
            {hero.updated}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mt-14 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="min-w-0">
                <dt className="display-xl text-4xl text-primary sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
