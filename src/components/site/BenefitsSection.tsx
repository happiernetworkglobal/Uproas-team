import { Sparkles } from "lucide-react";
import { benefits, benefitsOutro } from "@/content/copy";
import { Paragraphs, SectionShell } from "./Prose";
import { Reveal } from "./Reveal";

export function BenefitsSection() {
  return (
    <SectionShell id="benefits" className="border-y border-border bg-surface">
      <ul className="grid gap-4 sm:grid-cols-2">
        {benefits.map((item, index) => (
          <Reveal as="li" key={item} delay={index * 50}>
            <div className="flex h-full items-start gap-3 border border-border bg-background px-5 py-5 transition-colors hover:border-primary">
              <Sparkles
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="min-w-0 text-base leading-relaxed text-foreground">
                {item}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mx-auto mt-14 max-w-3xl text-center">
        <Reveal>
          <Paragraphs items={benefitsOutro} className="text-foreground" />
        </Reveal>
      </div>
    </SectionShell>
  );
}
