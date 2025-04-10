import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='container-footer' id='footer'>
            <div className='main-container'>
                <div className='footer-content'>
                    <div className='footer-list'>
                        <h1>FLLATECH SOLUÇÕES EM TECNOLOGIA</h1>
                        <ul className='footer-menu'>
                            <li><a href="#about">Sobre Nós</a></li>
                            <li><a href="#service">Nossos Serviços</a></li>
                            <li><a href="#portfolio">Criação</a></li>
                            <li><a href="#process">Duvidas Frequentes</a></li>
                            <li><a href="#process">Nosso Processo</a></li>
                            <li><a href="#footer">Contato</a></li>
                        </ul>
                    </div>
                    <div className='footer-links'>
                        <div className="contact-phone">
                            <span>Fale com a gente</span>
                            <a href="tel:+5511999999999">tel: +55 32 9 8473-8948</a>
                        </div>
                        <div className="social-links">
                            <span>Siga a Fllatech</span>
                            <div className="links">
                                <span>
                                    <a href="https://www.instagram.com/fllatechsolucoes/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </span>

                                <span>
                                    <a href="https://www.linkedin.com/company/fllatechsolucoes/" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.facebook.com/fllatech" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </span>
                                <span>
                                    <a href="https://api.whatsapp.com/send?phone=5532984738948" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </span>
                            </div>

                        </div>

                    </div>


                </div>
                <div className='footer-bottom'>
                    <div className='footer-fouders-info'>
                        <div className='founders'>
                            <div>
                                <p>Fundadores</p>
                            </div>
                            <div className='founders-names'>
                                <Link href='/profile/laura'>Laura Barbosa</Link>
                                <Link href='/profile/flavio'>Flávio Santos</Link>
                            </div>
                        </div>
                        <div className='privacy'>
                            <div>
                                <p>Termos de Privacidade</p>
                            </div>
                            <div className='privacy-links'>
                                <a href='/politica-de-privacidade'>Política de Privacidade</a>
                            </div>
                        </div>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Copyright <strong>Fllatech</strong></p>
                </div >
            </div>
        </div>
    );
}

export default Footer;
