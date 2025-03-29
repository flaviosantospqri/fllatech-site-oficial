'use client'
import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface DataAnswer {
    question: string;
    response: string;
}

const Faq = () => {
    const data: DataAnswer[] = [
        {
            question: "Como posso entrar em contato?",
            response: "Você pode nos contatar através do formulário de contato em nosso site ou pelo e-mail support@example.com. Também estamos disponíveis para chats ao vivo durante o horário comercial."
        },
        {
            question: "Quais são os horários de atendimento?",
            response: "Nosso horário de atendimento é de segunda a sexta-feira, das 9h às 18h. Durante esse período, nossa equipe está disponível para atender todas as suas necessidades."
        },
        {
            question: "Vocês oferecem suporte após a venda?",
            response: "Sim, oferecemos suporte completo após a venda para garantir sua satisfação. Nosso suporte inclui manutenção contínua do site, atualizações de segurança e assistência técnica sempre que necessário."
        },
        {
            question: "Quais serviços de Marketing Digital vocês oferecem?",
            response: "Oferecemos uma ampla gama de serviços de Marketing Digital, incluindo SEO (Otimização para Motores de Busca), campanhas de Google Ads e redes sociais, marketing de conteúdo, e-mail marketing, automação de marketing e análise de dados."
        },
        {
            question: "Eu preciso de um site personalizado ou posso usar um modelo?",
            response: "Podemos criar um site totalmente personalizado que atenda às suas necessidades exclusivas ou adaptar um modelo existente. O tipo de solução depende das suas preferências, orçamento e objetivos de negócios."
        },
        {
            question: "Qual é o prazo para o desenvolvimento de um site?",
            response: "O prazo para o desenvolvimento de um site depende da complexidade do projeto. Em geral, leva de 4 a 8 semanas para concluir um site simples, enquanto projetos mais complexos, como sistemas personalizados, podem levar mais tempo."
        },
        {
            question: "Como funciona o processo de criação de um site?",
            response: "O processo de criação de um site geralmente envolve as seguintes etapas: 1) Entendimento dos requisitos e objetivos, 2) Planejamento e design, 3) Desenvolvimento e implementação, 4) Testes e revisões, 5) Lançamento e manutenção contínua."
        },
        {
            question: "Vocês também oferecem serviços de manutenção para o meu site?",
            response: "Sim, oferecemos pacotes de manutenção para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente. Nossos serviços incluem atualizações regulares, backups, correções de bugs e suporte técnico."
        },
        {
            question: "Como posso aumentar o tráfego para o meu site?",
            response: "Existem várias estratégias para aumentar o tráfego do seu site, incluindo otimização para motores de busca (SEO), criação de conteúdo relevante e de qualidade, campanhas pagas no Google Ads e nas redes sociais, e campanhas de e-mail marketing."
        },
        {
            question: "Vocês oferecem serviços de criação de lojas virtuais?",
            response: "Sim, desenvolvemos lojas virtuais nas plataformas como Vtex, Tray e NuvemShop. Ajudamos você a configurar uma loja online com funcionalidades avançadas, como processamento de pagamentos, gerenciamento de inventário e integração com plataformas de envio."
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="container-faq-all">
            <div className="bullet-about">
                <p>
                    <FontAwesomeIcon icon={faHandshake} width={25} /> FAQs
                </p>
            </div>
            <h1>TIRE SUAS DÚVIDAS</h1>
            <p className="faq-text-description">Perguntas frequentes</p>
            <ul className="faq-container">
                {data.map((item, index) => (
                    <li key={index} className="faq-item">
                        <div className="faq-item-header" onClick={() => toggleFAQ(index)}>
                            <h3>{item.question}</h3>
                            <FontAwesomeIcon
                                icon={activeIndex === index ? faChevronUp : faChevronDown}
                                className="icon-toggle"
                                color="#69df16"
                            />
                        </div>
                        {activeIndex === index && (
                            <div className="faq-item-text">
                                <p>{item.response}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Faq;
