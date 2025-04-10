
import PrivacyPolicy from "@/components/Policy";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | Fllatech",
    description: "Conheça nossa Política de Privacidade e Termos de Uso de dados.",
    robots: "index, follow",
};

export default function PoliticaDePrivacidadePage() {
    return <PrivacyPolicy />;
}
