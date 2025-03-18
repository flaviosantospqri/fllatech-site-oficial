import Image from 'next/image';
import React from 'react';
import './style.scss';
import servicesImg from '../../assets/svg/services.svg';


export const Service: React.FC = () => {

    return (
        <div>
            <div className="service-container" id='service'>
                <div className='bullet-service'>
                    <p><Image src={servicesImg} width={25} height={25} alt='service us icon' />Nossos Serviços</p>
                </div>
                <div className='service-text'>
                    <h1>Nossos Serviços</h1>
                    <p>A Fllatech tem como missão levar aos
                        empreendedores inovação e soluções em tecnologia.
                        Se você deseja se destacar digitalmente, a Fllatech te ajuda!
                    </p>
                    <p>
                        Nós estaremos juntos em cada processo, em prol do mesmo
                        objetivo, alcançar as suas metas.
                    </p>
                </div>
            </div>
        </div>
    );

}

