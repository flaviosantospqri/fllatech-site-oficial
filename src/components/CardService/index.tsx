import React from 'react';
import './style.scss';
import { faCheckCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface CardServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    descriptionDetails: string[];
    target: boolean;
    price?: number;
}

export const CardService: React.FC<CardServiceProps> = ({ title, description, icon, descriptionDetails, target, price }) => {
    return (
        <div className="card-service">
            {
                target && <span className="target"><FontAwesomeIcon icon={faStar} width={15} height={15} color='#69df16' />Melhor Opção</span>
            }
            <div className='card-title'>
                <h2 className="card-service-title">{title}</h2>
                <p className="card-service-description">{description}</p>
                <h2 className='card-service-price'>
                    R$ {price},00
                </h2>
            </div>
            <ul>
                {
                    descriptionDetails.map((detail, index) => (
                        <li key={index}>
                            <FontAwesomeIcon icon={faCheckCircle} width={15} height={15} color='#69df16' />
                            {detail}
                        </li>
                    ))
                }

            </ul>
            <div className="card-btn">
                <button>Saiba mais</button>
            </div>
        </div>
    );
};