import Image from "next/image";
import { HiArrowDown, HiOutlineEnvelope } from "react-icons/hi2";

export function Hero() {
  return (
    <section id="accueil" aria-labelledby="accueil-title">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Chef de projet digital · Genève
          </p>

          <h1
            id="accueil-title"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Je conçois et pilote des <span className="text-accent">projets web</span> de bout en
            bout.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            J&apos;ai 29 ans et j&apos;occupe un poste de chef de projet digital pour une société
            multi-services à Genève. Au fil de mes formations et expériences, je me suis
            spécialisé en développement web et en marketing digital — voici un aperçu de mon
            parcours.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover dark:text-neutral-900"
            >
              Voir mes projets
              <HiArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-150 hover:bg-surface-2"
            >
              <HiOutlineEnvelope aria-hidden="true" className="h-4 w-4" />
              Me contacter
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs lg:max-w-none">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-surface-2">
            <Image
              src="/Images/avatar.webp"
              alt="Portrait de l'auteur du portfolio"
              fill
              sizes="(min-width: 1024px) 33vw, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
