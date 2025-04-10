import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Marketing Digital e Desenvolvimento de Software em Juiz de Fora | Fllatech Soluções",
  description: "Especialistas em Marketing Digital, Sites, Lojas Virtuais e Sistemas Sob Medida. Transformamos ideias em tecnologia que gera resultado.",
  other: {
    keywords: "Fllatech, Fllatech Soluções, Marketing Digital em Juiz de Fora, Marketing, Gestão de Redes Sociais em Juiz de Fora, Gestão de Instagram, O que é Gestão de Midia Social, O que é Social Midia, Artes Gráficas, Artes Digitais, Designer Bom, Desenvolvimento de Software, Sites, Lojas Virtuais, Sistemas Sob Medida, Juiz de Fora",
  },
  icons: {
    icon: "https://fllatech.com/assets/favicon.ico",
    shortcut: "https://fllatech.com/assets/img/favicon-32x32.png",
    apple: "https://fllatech.com/assets/img/apple-touch-icon.png",
  },
  openGraph: {
    title: "Marketing Digital e Desenvolvimento de Software em Juiz de Fora | Fllatech Soluções",
    description: "Especialistas em Marketing Digital, Sites, Lojas Virtuais e Sistemas Sob Medida. Transformamos ideias em tecnologia que gera resultado.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="OKPFXz9XoaOw3aT6TSq5OfM-enkHalfEcNUAY1Sx-DY" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

      </body>

    </html>
  );
}
