'use client'
import { openWhatsAppChat } from "@/utils/whatsappRedirect";
import "./style.scss"

export const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-text"><h1>O MUNDO É <span>DIGITAL</span> <br />SEJA DIGITAL COM A <span>FLLATECH</span></h1></div>
            <p>As mídias sociais e os sistemas de vendas on-line estão dominando o mercado e a Fllatech <br /> está aqui para fazer sua empresa crescer e vender mais no digital!</p>
            <div className="hero-btn" onClick={() => openWhatsAppChat('Olá, quero conhecer mais sobre a Fllatech')}>Seja Digital</div>
        </div>
    );
}

