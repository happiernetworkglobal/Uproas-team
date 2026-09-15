import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, nav } from "@/content/copy";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <a
          href="#top"
          className="display-xl min-w-0 truncate text-2xl tracking-tight text-foreground"
        >
          {BRAND}
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden justify-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            asChild
            className="hidden font-extrabold tracking-[0.1em] uppercase sm:inline-flex"
          >
            <a href="#free-report">Get the free report</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background lg:hidden"
        >
          <nav className="flex flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-sm font-bold tracking-[0.16em] text-foreground uppercase last:border-0 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-5 w-full font-extrabold tracking-[0.1em] uppercase"
              onClick={() => setOpen(false)}
            >
              <a href="#free-report">Get the free report</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
