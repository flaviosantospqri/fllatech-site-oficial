import React from 'react';
import Link from 'next/link';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faListCheck
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faTwitter,
    faSlack,
    faReact,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faMicrosoft,
    faTrello,
    faGoogle,
    faJs,

} from '@fortawesome/free-brands-svg-icons';

interface CardProfileProps {
    title: string;
    description: string;
    icon?: keyof typeof icons | string | undefined;
    link?: string;
}

const icons = {
    email: faEnvelope,
    phone: faPhone,
    github: faGithub,
    linkedin: faLinkedin,
    instagram: faInstagram,
    twitter: faTwitter,
    slack: faSlack,
    react: faReact,
    nodejs: faNodeJs,
    html: faHtml5,
    css: faCss3Alt,
    excel: faMicrosoft,
    world: faMicrosoft,
    trello: faTrello,
    google: faGoogle,
    javascript: faJs,
    scrum: faListCheck

}

const CardProfile = ({ title, description, icon, link }: CardProfileProps) => {
    const CardContent = (
        <div className="card-profile">
            <div className="card-profile-header">
                <div className='title'>
                    {icon && (
                        <FontAwesomeIcon icon={
                            icons[icon as keyof typeof icons]

                        } width={15} />
                    )}
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="card-profile-body">
                <p>{description}</p>
            </div>
        </div>
    );

    return (
        <div className="card-profile-container">
            {link ? (
                <Link href={link} className="card-profile-link">
                    {CardContent}
                </Link>
            ) : (
                CardContent
            )}
        </div>
    );
};

export default CardProfile;
