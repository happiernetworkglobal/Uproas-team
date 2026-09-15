import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Renders an ordered list of paragraphs from supplied copy. */
export function Paragraphs({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
        className,
      )}
    >
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold tracking-[0.28em] text-primary uppercase">
      {children}
    </p>
  );
}

export function DisplayHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "display-xl text-3xl text-foreground sm:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
