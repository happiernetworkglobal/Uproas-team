import { Quote } from "lucide-react";
import {
  clientNames,
  proofClosing,
  testimonialNames,
  testimonialsHeading,
} from "@/content/copy";
import { Marquee } from "./Marquee";
import { Paragraphs, SectionShell } from "./Prose";
import { Reveal } from "./Reveal";

function initials(name: string) {
  return name
    .replace(/[^A-Za-z& ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function SuccessStories() {
  const featured = testimonialNames.slice(0, 6);

  return (
    <SectionShell id="success-stories">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[0.3em] text-primary uppercase">
            {testimonialsHeading.small}
          </p>
          <h2 className="display-xl mt-3 text-4xl sm:text-6xl lg:text-7xl">
            {testimonialsHeading.big}
          </h2>
        </div>
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((name, index) => (
          <Reveal as="li" key={name} delay={index * 60}>
            <article className="grain-overlay flex h-full flex-col justify-between border border-border bg-surface p-6 transition-colors hover:border-primary">
              <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                It’s stories like these that (almost) make our eyes sweat.
              </p>
              <div className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">
                  {initials(name)}
                </span>
                <span className="display-xl min-w-0 truncate text-base text-foreground">
                  {name}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-14">
        <Marquee items={testimonialNames} itemClassName="text-foreground/60" />
      </Reveal>
      <Reveal className="mt-5">
        <Marquee items={clientNames} reverse itemClassName="text-sm sm:text-lg" />
      </Reveal>

      <div className="mx-auto mt-16 max-w-3xl">
        <Reveal>
          <Paragraphs items={proofClosing} />
        </Reveal>
      </div>
    </SectionShell>
  );
}
