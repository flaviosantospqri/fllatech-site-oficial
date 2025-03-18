import "./style.scss"
interface HeroProps {

}

export const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="hero-container">
            <div className="hero-text"><h1>O MUNDO É <span>DIGITAL</span> <br />SEJA DIGITAL COM A <span>FLLATECH</span></h1></div>
            <p>O mundo é a cada novo dia mais tecnológico, seja ele por meio de redes sociais, novas tecnologias ou novas ferramentas. A Fllatech, cuida de tudo isso para você.</p>
            <div className="hero-btn">Seja Digital</div>
        </div>
    );
}

