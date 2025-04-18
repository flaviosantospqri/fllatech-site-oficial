import Image from 'next/image';
import React from 'react';
import './style.scss';
import aboutimg from '../../assets/svg/about.svg';
import { Reveal } from '../Reveal';


export const About: React.FC = () => {

    return (
        <div>
            <div className="about-container" id='about'>
                <div className='about-text'>
                    <div className='bullet-about'>
                        <p><Image src={aboutimg} width={25} height={25} alt='about us icon' /> Sobre nós</p>
                    </div>
                    <Reveal variant='fadeIn' delay={0.2}>
                        <h1>Porque nos esolher</h1>
                    </Reveal>
                    <Reveal variant='slideLeft' delay={0.2}>
                        <p>A Fllatech nasceu em 2016, fundada por Flávio Santos sob o nome Insert Desenvolvimentos,
                            com a proposta de levar inovação e soluções tecnológicas ao mercado. Com uma trajetória
                            sólida, evoluímos ao lado de empresas que buscavam diferenciação e performance.
                            <br /> <br />
                        </p>

                        <p>
                            Em 2024, nos reposicionamos como Fllatech Soluções em Tecnologia, ampliando nossa
                            atuação para além do desenvolvimento web e de sistemas. Hoje, operamos como uma agência
                            de marketing digital completa, integrando tecnologia, design, gestão de mídias sociais e tráfego pago.<br /><br />
                            Nossa experiência, combinada à entrega de resultados consistentes, fez da Fllatech uma referência para
                            empresas que entendem a importância de ter ao lado um parceiro estratégico, não apenas um fornecedor.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    );

}

