import React from "react";
import "./style.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons/faHandshake";
import { Reveal } from "../Reveal";

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
            title: "OBSERVAMOS E ANALISAMOS",
            description: `Por meio de reuniões, conversas, análises, identificamos como está seu
            empreendimento, seus pontos fortes e fracos, onde podemos chegar, qual plano
            devemos traçar para impulsionar sua marca. Seja começando tudo do zero ou
            aperfeiçoando e seguindo.`
        },
        {
            title: "PLANEJAMOS E DESENVOLVEMOS",
            description: `
            Após análise detalhada, vamos para o planejamento e desenvolvimento. Criamos tudo
            personalizado para você, desde campanhas de vendas e trafego, cronograma de rede
            social, ao design e desenvolvimento do seu site ou sistema.`
        },
        {
            title: "TE LEVAMOS AO DIGITAL",
            description: `Depois do seu projeto desenvolvido, te colocamos no digital, levamos a sua marca
            para o mundo, fazendo seu site ou rede social atrair mais clientes e mais vendas. Te
            dando suporte em cada processo, analisando metas e segmentações que faça sentido
            para a sua atuação e te leve mais longe.`
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
            link: "https://api.whatsapp.com/send?phone=5532984738948&text=Olá, quero saber mais",
        },
    ];

    return (
        <div className="container-process-all" id="process">
            <div className="bullet-about">
                <p>
                    <FontAwesomeIcon icon={faHandshake} width={25} /> Nosso Processo
                </p>
            </div>
            <Reveal variant="fadeIn" delay={0.2}>
                <h1>Como funciona nosso processo</h1>
            </Reveal>
            <Reveal variant="slideLeft" delay={0.2}>
                <p className="process-text-description">
                    A Fllatech cuida de cada detalhe do seu projeto, fazemos todo um diagnóstico, uma
                    profunda analise de como seu negócio se encontra hoje, para elaborar um Plano de
                    Ação que visa alcançar seus próximos objetivos.
                </p>
            </Reveal>
            <Reveal variant="slideRight" delay={0.2}>
                <ul className="process-container">
                    {data.map((item, index) => (
                        <li key={index} className="process-item">
                            <div className="process-item-image">
                                <Image
                                    src={item.image}
                                    loading="lazy"
                                    alt={item.title}
                                    width={700}
                                    height={700}
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
            </Reveal>
        </div>
    );
};

export default Process;
