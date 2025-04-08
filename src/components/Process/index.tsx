import React from "react";
import "./style.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons/faHandshake";

interface ProcessItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface ProcessData {
    title: string;
    description: string;
}

const Process = () => {
    const processData: ProcessData[] = [
        {
            title: "ENTENDEMOS E OBSERVAMOS",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            title: "NÓS PLANEJAMOS E CRIAMOS, VOCÊ NOS DIRECIONA",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            title: "NÓS TE COLOCAMOS NO DIGITAL, VOCÊ ESCOLHE O QUE FAZER",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },

    ]
    const data: ProcessItem[] = [
        {
            title: "VISIBILIDADE",
            description:
                "Contratar a Fllatech não só te dá mais tempo para focar no seu negócio, mas também garante mais visibilidade para sua marca. Nossa equipe de especialistas trabalha para posicionar sua empresa no digital de forma estratégica, aumentando seu alcance e atraindo o público certo para seus produtos ou serviços." +
                "Com campanhas otimizadas, conteúdo de qualidade e gestão eficiente das suas redes, você não apenas aparece mais, mas se torna referência no seu mercado. Enquanto cuidamos do seu marketing, você aproveita os resultados: mais reconhecimento, mais clientes e mais crescimento para o seu negócio.",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://www.google.com",
        },
    ];

    return (
        <div className="container-process-all">
            <div className="bullet-about">
                <p>
                    <FontAwesomeIcon icon={faHandshake} width={25} /> Nosso Processo
                </p>
            </div>
            <h1>Como funciona nosso processo</h1>
            <p className="process-text-description">
                Nossa empresa, Fllatech, é mais do que uma simples prestadora de
                serviços. Nós somos seus parceiros estratégicos, comprometidos em
                entender suas necessidades e objetivos. Trabalhamos lado a lado com
                você, oferecendo soluções personalizadas que realmente fazem a diferença
                no seu negócio. Nossa equipe é formada por especialistas apaixonados
                pelo que fazem, prontos para transformar sua visão em realidade. Com a
                Fllatech, você não está apenas contratando um serviço; você está
                investindo em um relacionamento de confiança e resultados duradouros.
            </p>
            <ul className="process-container">
                {data.map((item, index) => (
                    <li key={index} className="process-item">
                        <div className="process-item-image">
                            <Image
                                src={item.image}
                                loading="lazy"
                                alt={item.title}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="process-item-text">
                            {processData.map((item, index) => (
                                <div key={index} className="process-item-text-content">
                                    <h1 className="title-element">{item.title}</h1>
                                    <p className="paragraph-element">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Process;
