import { Hero } from "./Components/Hero";
import { Competences } from "./Components/Competences";
import { Projets } from "./Components/Projets";
import { FormContact } from "./Components/FormContact";

export default function Home() {
  return (
    <>
      <Hero />
      <Competences />
      <Projets />
      <FormContact />
    </>
  );
}
