import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Marketing Digital e Desenvolvimento de Software em Juiz de Fora | Fllatech Soluções",
  description:
    "Especialistas em Marketing Digital, Sites, Lojas Virtuais e Sistemas Sob Medida. Transformamos ideias em tecnologia que gera resultado.",
  other: {
    keywords: "Marketing Digital para empresas, marketing digital, Consultoria em Marketing Digital, Especialista em SEO e tráfego orgânico, Criação de sites profissionais e lojas virtuais, Gestão estratégica de redes sociais, Como melhorar o posicionamento do site no Google, Agência de marketing digital no Brasil, Dicas para aumentar conversões em sites e e-commerce, Desenvolvimento de software personalizado para empresas, SEO e marketing digital no Brasil, Agência de SEO para empresas de qualquer estado, Consultoria em tráfego orgânico para marcas brasileiras, Estratégias digitais para empresas em crescimento, Especialista em sites otimizados para o Google, Contratar especialista em SEO e tráfego orgânico, Empresa de marketing digital com foco em resultados, Consultoria de redes sociais para marcas, Automação de marketing digital para empresas, Desenvolvimento de soluções tecnológicas sob medida",
  },
  icons: {
    icon: "https://fllatech.com/assets/favicon.ico",
    shortcut: "https://fllatech.com/assets/img/favicon-32x32.png",
    apple: "https://fllatech.com/assets/img/apple-touch-icon.png",
  },
  openGraph: {
    title:
      "Marketing Digital e Desenvolvimento de Software em Juiz de Fora | Fllatech Soluções",
    description:
      "Especialistas em Marketing Digital, Sites, Lojas Virtuais e Sistemas Sob Medida. Transformamos ideias em tecnologia que gera resultado.",
    url: "https://fllatech.com",
    siteName: "Fllatech Soluções Em Tecnologia",
    images: [
      {
        url: "https://fllatech.com/assets/img/fllatechog.png",
        width: 1200,
        height: 630,
        alt: "Fllatech Soluções - Marketing & Desenvolvimento de Software",
        type: "image/png",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17041125644"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17041125644');
            `,
          }}
        />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="OKPFXz9XoaOw3aT6TSq5OfM-enkHalfEcNUAY1Sx-DY"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
