import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import './style.scss'; // Importando o CSS para estilização
import CardProfile from "@/components/CardProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface ProfileSkill {
    title: string;
    description: string;
    icon?: string;
    group?: string;
}
interface Profile {
    id: string;
    name: string;
    photo: string;
    profession: string;
    bio: string;
    skills: ProfileSkill[];
    contact: {
        email: string;
        linkedin: string;
        github: string;
    };
}

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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const profile = await fetchProfileData(resolvedParams.id);

    if (!profile) {
        notFound();
    }

    return {
        title: `${profile.name} - Perfil`,
        description: `Saiba mais sobre ${profile.name}`,
    };
}

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



const ProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const profile = await fetchProfileData(resolvedParams.id);




    if (!profile) {
        return <p>Perfil não encontrado.</p>;
    }


    return (
        <div className="profile-page">
            <ul className="menu">
                <li className="about"><Link href={`/profile/${profile.id}`}> Sobre</Link></li>
                <li className="blog"><Link href={`/blog='${profile.id}'`}>Blog</Link></li>
            </ul>
            <div>
                <div className="container-img">
                    <figure className="img-container">
                        <Image src={profile.photo} alt={profile.name} width={150} height={150} />
                    </figure>
                </div>
                <div className="info-profile">
                    <h2>{profile.name}</h2>
                    <p className="profession">{profile.profession}</p>
                    <p>{profile.bio}</p>
                </div>
                <div className="info-skills">
                    <h3>Habilidades</h3>
                    <ul className="skills-list">
                        {profile.skills.map((skill, index) => (
                            <CardProfile
                                title={skill.title}
                                description={skill.description}
                                key={index}
                                icon={skill.icon}
                            />
                        ))}
                    </ul>
                </div>
                <h3>Contatos</h3>
                <ul className="contact-list">
                    <a href={`mailto:${profile.contact.email}`}> <FontAwesomeIcon icon={faEnvelopeOpen} width={35} /></a>
                    <a href={profile.contact.linkedin}><FontAwesomeIcon icon={faLinkedin} width={35} /></a>
                    <a href={profile.contact.github}><FontAwesomeIcon icon={faGithub} width={35} /></a>
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
