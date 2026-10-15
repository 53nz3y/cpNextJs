import { HiOutlineBolt, HiOutlineCodeBracket, HiOutlineUsers } from "react-icons/hi2";
import { Section } from "./Section";

interface Competence {
  id: number;
  name: string;
  details: string;
  icon: typeof HiOutlineCodeBracket;
}

const competences: Competence[] = [
  {
    id: 1,
    name: "HTML & CSS",
    icon: HiOutlineCodeBracket,
    details:
      "Structure sémantique, sélecteurs et propriétés essentielles. Conception responsive avec Flexbox et CSS Grid, préprocesseurs (Sass/Less) et optimisation de la compatibilité navigateurs.",
  },
  {
    id: 2,
    name: "JavaScript & React",
    icon: HiOutlineBolt,
    details:
      "Manipulation du DOM, APIs asynchrones et écosystème React. Gestion d'état avec Redux et Redux Toolkit, puis back-end avec Node.js et Express pour des applications complètes.",
  },
  {
    id: 3,
    name: "Compétences humaines",
    icon: HiOutlineUsers,
    details:
      "Veille technologique continue, communication et travail d'équipe en environnement Agile. Esprit critique et méthode pour résoudre les problèmes, debugger et optimiser les applications.",
  },
];

export function Competences() {
  return (
    <Section
      id="competences"
      eyebrow="Compétences"
      title="Ce que je sais faire"
      description="Un panel non exhaustif des compétences techniques et humaines que j'applique au quotidien."
    >
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {competences.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_-18px_rgba(28,25,23,0.35)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.details}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
