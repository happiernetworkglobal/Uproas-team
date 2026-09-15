import { TrendingDown } from "lucide-react";
import { problemBody, problemIntro, problemPoints, solutionBody } from "@/content/copy";
import { Paragraphs, SectionShell } from "./Prose";
import { Reveal } from "./Reveal";

export function ProblemSection() {
  return (
    <SectionShell id="problem" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="display-xl text-2xl text-foreground sm:text-3xl">
            {problemIntro}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid gap-3">
            {problemPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 border-l-2 border-destructive bg-background/60 px-4 py-4"
              >
                <TrendingDown
                  className="mt-0.5 h-5 w-5 shrink-0 text-destructive"
                  aria-hidden="true"
                />
                <span className="min-w-0 text-base font-semibold text-foreground sm:text-lg">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <Paragraphs items={problemBody} className="mt-10" />
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 border-l-4 border-primary bg-background px-5 py-7 sm:px-8">
            <Paragraphs items={solutionBody} className="text-foreground" />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
