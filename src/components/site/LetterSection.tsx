import { afterProof, letterOpening } from "@/content/copy";
import proofSpend from "@/assets/proof-spend.jpg";
import { Paragraphs, SectionShell } from "./Prose";
import { Reveal } from "./Reveal";

export function LetterSection() {
  return (
    <SectionShell id="proof">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="display-xl mb-8 text-2xl text-primary sm:text-3xl">
            {letterOpening[0]}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <Paragraphs items={letterOpening.slice(1)} />
        </Reveal>
      </div>

      <Reveal delay={120}>
        <figure className="mt-12">
          <img
            src={proofSpend}
            alt="Ads manager account overview showing total amount spent, purchases and return on ad spend"
            width={1408}
            height={912}
            loading="lazy"
            className="w-full rounded-sm border border-border shadow-2xl"
          />
          <figcaption className="mt-3 text-center text-xs tracking-[0.16em] text-muted-foreground/70 uppercase">
            Ad account overview
          </figcaption>
        </figure>
      </Reveal>

      <div className="mx-auto mt-14 max-w-3xl">
        <Reveal>
          <Paragraphs items={afterProof} />
        </Reveal>
      </div>
    </SectionShell>
  );
}
