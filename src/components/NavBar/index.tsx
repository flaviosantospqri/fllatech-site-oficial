'use client';
import Link from 'next/link';
import './style.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        Flla<span className='target-color'>tech</span>
                    </Link>
                </div>

                <div className="desktop-menu">
                    <Link href="#about" className="menu-item">Sobre Nós</Link>
                    <Link href="#service" className="menu-item">Nosso Serviços</Link>
                    <Link href="#portfolio" className="menu-item">Criação</Link>
                    <Link href="#faq" className="menu-item">Duvidas Frequentes</Link>
                    <Link href="#process" className="menu-item">Nosso Processo</Link>
                    <Link href="#footer" className="menu-item">Contatos</Link>
                </div>


                <div className="mobile-menu">
                    <Link href="#about" className="mobile-menu-item">Sobre Nós</Link>
                    <Link href="#service" className="mobile-menu-item">Nosso Serviços</Link>
                    <Link href="#portfolio" className="mobile-menu-item">Criação</Link>
                    <Link href="#faq" className="mobile-menu-item">Duvidas Frequentes</Link>
                    <Link href="#process" className="mobile-menu-item">Nosso Processo</Link>
                    <Link href="#footer" className="mobile-menu-item">Contatos</Link>
                    <button className="cta-mobile">CTA</button>
                </div>


                <div className="mobile-menu-button">
                    <button>
                        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>


                <div className="cta-button">
                    <button>Contato</button>
                </div>
            </div>
        </nav>
    );
}
