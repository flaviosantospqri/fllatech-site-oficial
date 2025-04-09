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
                        <p>A Fllatech tem como missão levar aos
                            empreendedores inovação e soluções em tecnologia.
                            Se você deseja se destacar digitalmente, a Fllatech te ajuda!
                        </p>
                    </Reveal>
                    <p>
                        Nós estaremos juntos em cada processo, em prol do mesmo
                        objetivo, alcançar as suas metas.
                    </p>
                </div>
            </div>
        </div>
    );

}

