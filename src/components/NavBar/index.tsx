'use client';
import Link from 'next/link';
import './style.scss';
import logoimg from '../../assets/logo/flatech-white-logo.png';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <Image src={logoimg} alt="Logo Flatech" width="100" />
                    </Link>
                </div>

                <div className="desktop-menu">
                    <Link href="#about" className="menu-item">Sobre Nós</Link>
                    <Link href="#service" className="menu-item">Nosso Serviços</Link>
                    <Link href="/" className="menu-item">Entre em contato</Link>
                </div>


                <div className="mobile-menu">
                    <Link href="/" className="mobile-menu-item">Sobre Nós</Link>
                    <Link href="/" className="mobile-menu-item">Nosso Serviços</Link>
                    <Link href="/" className="mobile-menu-item">Entre em contato</Link>
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
