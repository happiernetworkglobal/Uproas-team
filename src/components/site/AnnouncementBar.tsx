import { ArrowRight } from "lucide-react";
import { announcement } from "@/content/copy";

export function AnnouncementBar() {
  return (
    <a
      href="#free-report"
      className="group block bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5 text-center">
        <span className="text-[11px] font-extrabold tracking-[0.14em] uppercase sm:text-xs">
          {announcement}
        </span>
        <ArrowRight
          className="hidden h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 sm:block"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}
