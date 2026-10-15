import Image from "next/image";
import { Section } from "./Section";

interface Projet {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projets: Projet[] = [
  {
    id: 1,
    title: "HTML & CSS",
    description:
      "Intégration d'interfaces responsives à partir de maquettes : layout en Grid, composants réutilisables et rendu soigné sur tous les écrans.",
    image: "/Images/projet_html.avif",
    tags: ["HTML5", "CSS3", "Responsive"],
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "Logique applicative côté client : DOM, promesses et APIs, validations de formulaires et micro-interactions sans dépendance inutile.",
    image: "/Images/javascript.jpg",
    tags: ["ES6+", "DOM", "Async"],
  },
  {
    id: 3,
    title: "React",
    description:
      "Interface composable en composants fonctionnels, gestion d'état locale, hooks et rendu optimisé d'une application multi-vues.",
    image: "/Images/React.jpg",
    tags: ["React", "Hooks", "Component-driven"],
  },
  {
    id: 4,
    title: "Redux & Redux Toolkit",
    description:
      "Architecture de l'état global avec des actions explicites, slices prévisibles et une source de vérité unique et testable.",
    image: "/Images/imgredux.png",
    tags: ["Redux", "Redux Toolkit", "State"],
  },
  {
    id: 5,
    title: "MongoDB",
    description:
      "Modélisation de données non relationnelles, requêtes d'agrégation et intégration d'une API Node.js avec une base documentaire.",
    image: "/Images/relation.jpg",
    tags: ["NoSQL", "Node.js", "API"],
  },
];

export function Projets() {
  return (
    <Section
      id="projets"
      eyebrow="Projets"
      title="Travaux sélectionnés"
      description="Une sélection de réalisations qui illustrent mon parcours, du socle front-end à la gestion d'état et aux données."
    >
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projets.map((item) => (
          <li key={item.id} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_32px_-20px_rgba(28,25,23,0.4)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-surface-2">
                <Image
                  src={item.image}
                  alt={`Aperçu du projet ${item.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-surface-2 px-2 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
