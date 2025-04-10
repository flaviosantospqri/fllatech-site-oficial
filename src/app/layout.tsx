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
  title: "Fllatech Soluções",
  description: "Fllatech Soluções - Marketing & Desenvolvimento de Software",
  icons: {
    icon: "/assets/img/logosemfundo.png",
    shortcut: "/assets/img/logosemfundo.png",
    apple: "/assets/img/apple-touch-icon.png",
  },
  openGraph: {
    title: "Fllatech Soluções",
    description: "Fllatech Soluções - Marketing & Desenvolvimento de Software",
    url: "https://fllatech.com",
    siteName: "Fllatech Soluções Em Tecnologia",
    images: [
      {
        url: "/assets/img/logosemfundo.png",
        width: 1200,
        height: 630,
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

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

      </body>

    </html>
  );
}
