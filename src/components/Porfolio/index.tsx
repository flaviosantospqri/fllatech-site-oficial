import React from "react";
import "./style.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons/faHandshake";
import { Reveal } from "../Reveal";

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Porfolio = () => {
    const data: PortfolioItem[] = [
        {
            title: "VISIBILIDADE",
            description:
                "Contratar a Fllatech não só te dá mais tempo para focar no seu negócio, mas também garante mais visibilidade para sua marca. Nossa equipe de especialistas trabalha para posicionar sua empresa no digital de forma estratégica, aumentando seu alcance e atraindo o público certo para seus produtos ou serviços." +
                "Com campanhas otimizadas, conteúdo de qualidade e gestão eficiente das suas redes, você não apenas aparece mais, mas se torna referência no seu mercado. Enquanto cuidamos do seu marketing, você aproveita os resultados: mais reconhecimento, mais clientes e mais crescimento para o seu negócio.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
        {
            title: "IDENTIDADE FORTE",
            description:
                "Com a Fllatech, sua marca não só ganha mais visibilidade, mas também constrói uma identidade forte e marcante. Criamos estratégias que reforçam a autenticidade do seu negócio, garantindo que seu público reconheça e confie na sua empresa em qualquer canal de comunicação." +
                "Do design ao tom de voz, cada detalhe é pensado para que sua marca se destaque da concorrência e gere conexão com seus clientes. Enquanto cuidamos da sua identidade no digital, você foca no crescimento e nos resultados do seu negócio.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
        {
            title: "AGILIDADE! MAIS TEMPO LIVRE",
            description:
                "Contratar a Fllatech significa que você pode focar no que realmente importa: o crescimento do seu negócio. Em vez de perder tempo tentando entender algoritmos, criar campanhas ou acompanhar tendências, deixamos essa parte com especialistas que sabem exatamente o que fazer para gerar resultados de forma rápida e eficiente." +
                "Além disso, você não precisa lidar com retrabalho, erros ou a gestão de uma equipe interna.Com a Fllatech, seu marketing funciona como um motor de crescimento constante, enquanto você ganha mais tempo para investir na operação, melhorar o atendimento e inovar no seu mercado.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
    ];

    return (
        <div className="container-portfolio-all" id="portfolio">
            <div className="bullet-about">
                <p>
                    <FontAwesomeIcon icon={faHandshake} width={25} /> Nossas
                    Características
                </p>
            </div>
            <Reveal variant="fadeIn" delay={0.2}>
                <h1>Aqui você é levado a sério</h1>
            </Reveal>

            <Reveal variant="slideLeft" delay={0.2}>

                <p className="portfolio-text-description">
                    Nossa empresa, Fllatech, é mais do que uma simples prestadora de
                    serviços. Nós somos seus parceiros estratégicos, comprometidos em
                    entender suas necessidades e objetivos. Trabalhamos lado a lado com
                    você, oferecendo soluções personalizadas que realmente fazem a diferença
                    no seu negócio. Nossa equipe é formada por especialistas apaixonados
                    pelo que fazem, prontos para transformar sua visão em realidade. Com a
                    Fllatech, você não está apenas contratando um serviço; você está
                    investindo em um relacionamento de confiança e resultados duradouros.
                </p>
            </Reveal>
            <ul className="portfolio-container">
                {data.map((item, index) => (
                    <li key={index} className="portfolio-item">
                        <div className="portfolio-item-image">
                            <Image
                                src={item.image}
                                loading="lazy"
                                alt={item.title}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="portfolio-item-text">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <a href={item.link}>Contato</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Porfolio;
