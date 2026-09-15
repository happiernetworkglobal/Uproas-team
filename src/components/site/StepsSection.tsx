import { steps, stepsOutro } from "@/content/copy";
import { DisplayHeading, Eyebrow, Paragraphs, SectionShell } from "./Prose";
import { Reveal } from "./Reveal";

export function StepsSection() {
  return (
    <SectionShell id="strategy">
      <Reveal>
        <Eyebrow>The step-by-step strategy</Eyebrow>
        <DisplayHeading className="max-w-3xl">
          How to turn your ads manager into a{" "}
          <span className="text-primary">majestical place</span>
        </DisplayHeading>
      </Reveal>

      <div className="mt-14 space-y-14">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 40}>
            <article className="grid gap-6 border-t border-border pt-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12">
              <header className="min-w-0">
                <span className="display-xl block text-6xl text-primary/25 sm:text-7xl">
                  {step.number}
                </span>
                <h3 className="display-xl mt-3 text-2xl text-foreground sm:text-3xl">
                  {step.title}
                </h3>
              </header>
              <Paragraphs items={step.body} className="min-w-0" />
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <Reveal>
          <Paragraphs items={stepsOutro} className="text-foreground" />
        </Reveal>
      </div>
    </SectionShell>
  );
}
