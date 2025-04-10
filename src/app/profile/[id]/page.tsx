import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Image from "next/image";

// Tipo para o perfil
interface Profile {
    id: string;
    name: string;
    photo: string;
    profession: string;
    bio: string;
    skills: string[];
    contact: {
        email: string;
        linkedin: string;
        github: string;
    };
}

// Função para buscar os dados do perfil a partir do ID
const fetchProfileData = async (id: string) => {
    const filePath = path.join(process.cwd(), "data", "profile.json");

    try {
        const fileData = fs.readFileSync(filePath, "utf8");
        const profiles: Profile[] = JSON.parse(fileData);
        return profiles.find((profile) => profile.id === id) || null;
    } catch (error) {
        console.error("Erro ao ler o arquivo de perfil:", error);
        return null;
    }
};

// Função de geração de metadata, para alterar o título e descrição dinamicamente
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params; // Espera a Promise resolver
    const profile = await fetchProfileData(resolvedParams.id);

    if (!profile) {
        notFound(); // Retorna a página de "Não Encontrado"
    }

    return {
        title: `${profile.name} - Perfil`,
        description: `Saiba mais sobre ${profile.name}`,
    };
}

// Função para gerar os parâmetros estáticos, que o Next.js vai usar para gerar as páginas dinâmicas
export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), "data", "profile.json");

    try {
        const fileData = fs.readFileSync(filePath, "utf8");
        const profiles: Profile[] = JSON.parse(fileData);

        return profiles.map((profile) => ({
            id: profile.id,
        }));
    } catch (error) {
        console.error("Erro ao gerar parâmetros estáticos para os perfis:", error);
        return [];
    }
}

// Função da página dinâmica do perfil
const ProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params; // Aguarda a resolução de params
    const profile = await fetchProfileData(resolvedParams.id);

    if (!profile) {
        return <p>Perfil não encontrado.</p>; // Se o perfil não for encontrado, exibe uma mensagem de erro
    }

    return (
        <div>
            <h1>Sobre {profile.name}</h1>
            <div>
                <Image src={profile.photo} alt={profile.name} width={150} height={150} />
                <h2>{profile.name}</h2>
                <p>{profile.profession}</p>
                <p>{profile.bio}</p>
                <h3>Habilidades</h3>
                <ul>
                    {profile.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h3>Contatos</h3>
                <ul>
                    <li>Email: <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></li>
                    <li>LinkedIn: <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li>GitHub: <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
