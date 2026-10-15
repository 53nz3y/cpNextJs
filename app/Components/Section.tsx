import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

/**
 * Section heading with a consistent vertical rhythm.
 * Keeps every block of the portfolio aligned and evenly spaced.
 */
export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
          ) : null}
        </header>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
