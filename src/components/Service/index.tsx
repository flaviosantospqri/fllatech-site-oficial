'use client'
import Image from "next/image";
import React from "react";
import "./style.scss";
import servicesImg from "../../assets/svg/services.svg";
import { CardService } from "../CardService";
import { CardCharacter } from "../CardCharacter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faDesktop,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export const Service: React.FC = () => {
    const allServices = {
        destaqueServices: [
            {
                title: "Pacote Web",
                description:
                    "Desenvolvemos sites e sistemas web personalizados para o seu negócio.",
                icon: (
                    <Image
                        src={servicesImg}
                        width={25}
                        height={25}
                        alt="service us icon"
                    />
                ),
                descriptionDetails: [
                    "Sites responsivos",
                    "Sistemas web",
                    "E-commerce",
                    "Landing page",
                ],
                target: false,
                price: 400,
            },
            {
                title: "Pacote Redes Sociais",
                description:
                    "Desenvolvemos sites e sistemas web personalizados para o seu negócio.",
                icon: (
                    <Image
                        src={servicesImg}
                        width={25}
                        height={25}
                        alt="service us icon"
                    />
                ),
                descriptionDetails: [
                    "Sites responsivos",
                    "Sistemas web",
                    "E-commerce",
                    "Landing page",
                ],
                target: true,
                price: 800,
            },
            {
                title: "Tráfego e Divulgação",
                description:
                    "Desenvolvemos sites e sistemas web personalizados para o seu negócio.",
                icon: (
                    <Image
                        src={servicesImg}
                        width={25}
                        height={25}
                        alt="service us icon"
                    />
                ),
                descriptionDetails: [
                    "Sites responsivos",
                    "Sistemas web",
                    "E-commerce",
                    "Landing page",
                ],
                target: false,
                price: 1300,
            },
        ],
        ourServices: [
            {
                title: "MARKETING DIGITAL",
                subtitle: "Marketing Digital para alavancar o seu negócio.",
                description: "Apareça nas primeiras páginas do Google.",
                icon: (
                    <FontAwesomeIcon
                        icon={faDesktop}
                        width={50}
                        height={50}
                        color="#69df16"
                    />
                ),
            },
            {
                title: "SOLUÇÕES WEB",
                subtitle:
                    "Desenvolvemos sites e sistemas web personalizados para o seu negócio.",
                description: "Apareça nas primeiras páginas do Google.",
                icon: (
                    <FontAwesomeIcon
                        icon={faCamera}
                        width={50}
                        height={50}
                        color="#69df16"
                    />
                ),
            },
            {
                title: "CONSULTORIA ESTRATÉGICA",
                subtitle: "Consultoria estratégica para o seu negócio.",
                description: "Apareça nas primeiras páginas do Google.",
                icon: (
                    <FontAwesomeIcon
                        icon={faListCheck}
                        width={50}
                        height={50}
                        color="#69df16"
                    />
                ),
            },
            {
                title: "CRIAÇÃO DE CONTEÚDO",
                subtitle: "Conteúdos exclusivos e personalizados para o seu negócio.",
                description: "Apareça nas primeiras páginas do Google.",
                icon: (
                    <FontAwesomeIcon
                        icon={faListCheck}
                        width={50}
                        height={50}
                        color="#69df16"
                    />
                ),
            },
            {
                title: "SOLUÇÕES EM COMUNICAÇÃO",
                subtitle:
                    "Soluções em comunicação para o seu negócio, com foco em resultados.",
                description: "Apareça nas primeiras páginas do Google.",
                icon: (
                    <FontAwesomeIcon
                        icon={faListCheck}
                        width={50}
                        height={50}
                        color="#69df16"
                    />
                ),
            },
            {
                title: "UX/UI DESIGN",
                subtitle: "Designe de interfaces e experiência do usuário.",
                description: "Apareça nas primeiras páginas do Google.",
                icon: (
                    <FontAwesomeIcon
                        icon={faListCheck}
                        width={50}
                        height={50}
                        color="#69df16"
                    />
                ),
            },
        ],
    };
    return (
        <div>
            <div className="service-container" id="service">
                <div className="service-text">
                    <div className="bullet-service">
                        <p>
                            <Image
                                src={servicesImg}
                                width={25}
                                height={25}
                                alt="service us icon"
                            />
                            Mais procurados
                        </p>
                    </div>

                    <h1>Nossos principais serviços</h1>

                    <p>
                        Nossa missão é levar para os empreendedores soluções em tecnologia,
                        que otimizem seu tempo e façam sua empresa crescer e vender mais no
                        digital. Nossos serviços têm esse objetivo, fazer sua empresa
                        destacar, crescer, vender mais.
                    </p>

                    <p>A Fllatech te ajuda a alcançar suas metas.</p>
                </div>
                <div className="service-card-gallery">
                    <CardService
                        title="Pacote Essencial"
                        description="Para quem quer começar a crescer no digital com consistência, estratégia e baixo custo."
                        icon={
                            <Image
                                src={servicesImg}
                                width={25}
                                height={25}
                                alt="service us icon"
                            />
                        }
                        descriptionDetails={[
                            "1 Post por semana - Instagram",
                            "2 stories por semana - Instagram",
                            "1 Consultoria por mês",
                            "Cronograma de Posts",
                        ]}
                        target={false}
                        price={499.9}
                    />

                    <CardService
                        title="Pacote Clássico"
                        description="Presença forte, estratégia mensal e benefícios extras pra acelerar seu digital."
                        icon={
                            <Image
                                src={servicesImg}
                                width={25}
                                height={25}
                                alt="service us icon"
                            />
                        }
                        descriptionDetails={[
                            "3 Posts por semana",
                            "5 Stories por semana",
                            "1 Consultoria por mês ",
                            "Cronograma de Postagens",
                            "Desconto em serviços de Desenvolvimento(Landing Page, Site, etc)",
                            "Desconto em serviços de Tráfego Pago",
                        ]}
                        target={true}
                        price={899.9}
                    />

                    <CardService
                        title="Pacote Fllatech"
                        description="Desenvolvemos sites e sistemas web personalizados para o seu negócio."
                        icon={
                            <Image
                                src={servicesImg}
                                width={25}
                                height={25}
                                alt="service us icon"
                            />
                        }
                        descriptionDetails={[
                            "3 Posts por semana",
                            "5 Stories por semana",
                            "Consultoria livre(sem limite)",
                            "Cronograma de Postagens",
                            "Landing page de Alta Conversão",
                            "Suporte 24/7",
                            "Desconto em serviços de Tráfego Pago",
                            "Descontos especiais",
                        ]}
                        target={false}
                        price={1990.9}
                    />
                </div>

                <div className="service-text">
                    <div className="bullet-service">
                        <p>
                            <Image
                                src={servicesImg}
                                width={25}
                                height={25}
                                alt="service us icon"
                            />
                            Funcionalidades
                        </p>
                    </div>
                    <h1>Nosso diferencial e funcionalidades importantes</h1>
                    <p>
                        Valorizamos um serviço de extrema qualidade, com inovação, materias
                        personalizados, atendimento que dê atenção a sua demanda de forma
                        única.
                    </p>
                    <p>
                        Te entregamos o melhor serviço para você obter os melhores
                        resultados.
                    </p>
                </div>
                <div className="service-card-gallery">
                    <CardCharacter
                        title="Responsividade & SEO"
                        subtitle="Todos os nossos sites são responsivos, se adaptam aos dispositivos. Otimização SEO, seu site sempre no topo."
                        description="Apareça nas primeiras páginas do Google."
                        icon={
                            <FontAwesomeIcon
                                icon={faDesktop}
                                width={50}
                                height={50}
                                color="#69df16"
                            />
                        }
                    />

                    <CardCharacter
                        title="Exclusividade"
                        subtitle="Prezamos por materiais exclusivos, para cada cliente. Não oferecemos materiais ou design prontos, trabalhamos de forma personalizada"
                        description="Prezamos por materiais exclusivos, para cada cliente. Não oferecemos materiais ou design prontos, trabalhamos de forma personalizada para melhor atender a sua marca. "
                        icon={
                            <FontAwesomeIcon
                                icon={faCamera}
                                width={50}
                                height={50}
                                color="#69df16"
                            />
                        }
                    />

                    <CardCharacter
                        title="Atendimento"
                        subtitle="Atendimento qualificado, sua demanda é atendida com total atenção, respeito e todo nosso profissionalismo."
                        description="Mais do que um cliente você é um parceiro, e como tal, sua demanda é atendida com total atenção, respeito e todo nosso profissionalismo."
                        icon={
                            <FontAwesomeIcon
                                icon={faListCheck}
                                width={50}
                                height={50}
                                color="#69df16"
                            />
                        }
                    />
                </div>
                <div className="service-text">
                    <div className="bullet-service">
                        <p>
                            <Image
                                src={servicesImg}
                                width={25}
                                height={25}
                                alt="service us icon"
                            />
                            Tudo que você precisa
                        </p>
                    </div>
                    <h1>Soluções para sua empresa</h1>
                    <p>
                        Queremos que a sua marca seja reconhecida, seja destaque em crescimento e
                        vendas no digital.
                    </p>
                    <p>
                        Entregamos soluções estratégicas que te coloca a frente dos seus concorrentes, que
                        leva profissionalismo e autoridade.

                    </p>
                </div>

                <div className="service-card-gallery">
                    {allServices.ourServices.map((service, index) => (
                        <CardCharacter
                            key={index}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
