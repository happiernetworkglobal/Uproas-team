import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}

/** Infinite horizontal ticker. Items are duplicated once for a seamless loop. */
export function Marquee({ items, reverse, className, itemClassName }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      role="marquee"
      aria-label="Client list"
    >
      <div
        className={cn(
          "flex w-max items-center gap-10 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn(
              "display-xl shrink-0 text-lg whitespace-nowrap text-muted-foreground/70 sm:text-2xl",
              itemClassName,
            )}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
