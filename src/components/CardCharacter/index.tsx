import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
interface CardCharProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    subtitle: string;
}
export const CardCharacter: React.FC<CardCharProps> = ({ icon, title, subtitle }) => {
    return (
        <div className='card-char-container'>
            <div className="card-char">
                <div className="card-char-icon">
                    {icon}
                </div>
                <div className="card-char-text">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
            <div className="card-char-info">
                <button className='btn-char-info'><FontAwesomeIcon icon={faInfo} width={15} height={15} color='#ffffff' /></button>
            </div>
        </div>
    )
}


