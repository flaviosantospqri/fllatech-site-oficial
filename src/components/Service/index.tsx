import Image from "next/image";
import React from "react";
import "./style.scss";
import servicesImg from "../../assets/svg/services.svg";
import { CardService } from "../CardService";
import { CardCharacter } from "../CardCharacter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faDesktop, faListCheck } from "@fortawesome/free-solid-svg-icons";

export const Service: React.FC = () => {
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
                    <h1>Nossos Principais Produtos</h1>
                    <p>
                        A Fllatech tem como missão levar aos empreendedores inovação e
                        soluções em tecnologia. Se você deseja se destacar digitalmente, a
                        Fllatech te ajuda!
                    </p>
                    <p>
                        Nós estaremos juntos em cada processo, em prol do mesmo objetivo,
                        alcançar as suas metas.
                    </p>
                </div>
                <div className="service-card-gallery">
                    <CardService
                        title="Pacote Web"
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
                            "Sites responsivos",
                            "Sistemas web",
                            "E-commerce",
                            "Landing page",
                        ]}
                        target={false}
                        price={400}
                    />
                    <CardService
                        title="Pacote Redes Sociais"
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
                            "Sites responsivos",
                            "Sistemas web",
                            "E-commerce",
                            "Landing page",
                        ]}
                        target={true}
                        price={800}
                    />
                    <CardService
                        title="Tráfego e Divulgação"
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
                            "Sites responsivos",
                            "Sistemas web",
                            "E-commerce",
                            "Landing page",
                        ]}
                        target={false}
                        price={1300}
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
                    <h1>Funcionalidades Inclusas</h1>
                    <p>
                        A Fllatech tem como missão levar aos empreendedores inovação e
                        soluções em tecnologia. Se você deseja se destacar digitalmente, a
                        Fllatech te ajuda!
                    </p>
                    <p>
                        Nós estaremos juntos em cada processo, em prol do mesmo objetivo,
                        alcançar as suas metas.
                    </p>
                </div>
                <div className="service-card-gallery">
                    <CardCharacter
                        title="Responsividade & SEO"
                        subtitle="Otimização de Sites, sites responsivos e com as melhores práticas de SEO."
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
                        subtitle="Sem materiais prontos, aqui é tudo personalizado e exclusivo."
                        description="Apareça nas primeiras páginas do Google."
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
                        subtitle="Você é nossa prioridade, sempre!"
                        description="Apareça nas primeiras páginas do Google."
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
            </div>
        </div>
    );
};
