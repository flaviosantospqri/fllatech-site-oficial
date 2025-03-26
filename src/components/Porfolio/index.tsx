import React from 'react';
import './style.scss';
import Image from 'next/image';

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Porfolio = () => {
    const data: PortfolioItem[] = [
        { "title": "Projeto 1", "description": "Descrição do projeto 1", "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "link": "https://www.google.com" },
        { "title": "Projeto 1", "description": "Descrição do projeto 1", "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "link": "https://www.google.com" },
        { "title": "Projeto 1", "description": "Descrição do projeto 1", "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "link": "https://www.google.com" },
    ]

    return (

        <ul className='portfolio-container'>
            {data.map((item, index) => (

                <li key={index} className='portfolio-item'>
                    <div className='portfolio-item-image'>
                        <Image src={item.image} loading='lazy' alt={item.title} width={100} height={100} />
                    </div>
                    <div className='portfolio-item-text'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.link}>Ver mais</a>
                    </div>
                </li>
            ))}
        </ul>

    );
}

export default Porfolio;
