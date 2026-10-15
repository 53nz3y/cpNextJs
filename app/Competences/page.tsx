import type { Metadata } from "next";
import { Competences } from "../Components/Competences";

export const metadata: Metadata = {
  title: "Compétences — Portfolio",
  description: "Aperçu des compétences techniques et humaines du portfolio.",
};

export default function CompetencesPage() {
  return <Competences />;
}
