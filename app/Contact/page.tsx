import type { Metadata } from "next";
import { FormContact } from "../Components/FormContact";

export const metadata: Metadata = {
  title: "Contact — Portfolio",
  description: "Prenons contact pour parler de votre projet.",
};

export default function ContactPage() {
  return <FormContact />;
}
