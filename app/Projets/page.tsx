import type { Metadata } from "next";
import { Projets } from "../Components/Projets";

export const metadata: Metadata = {
  title: "Projets — Portfolio",
  description: "Sélection de projets : HTML/CSS, JavaScript, React, Redux et MongoDB.",
};

export default function ProjetsPage() {
  return <Projets />;
}
