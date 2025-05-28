// Importa o tipo Metadata para tipar os metadados da página
import type { Metadata } from "next";

// Importa a fonte Rajdhani do Google Fonts via Next.js
import { Rajdhani } from "next/font/google";

// Importa o CSS global da aplicação
import "./globals.css";
import ResponsiveNav from "../../components/home/navBar/responsiveNav";

// Configura a fonte Rajdhani com diferentes pesos e o subconjunto "latin"
const font = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Define os metadados da aplicação, como título, descrição e ícones
export const metadata: Metadata = {
  title: "Saitema | Gestão Comercial Inteligente",
  description: "Sistema completo para salões, lojas e restaurantes. Controle vendas, estoque e agendamentos com praticidade.",
  keywords: ["gestão comercial", "salão de beleza", "restaurante", "loja", "PDV", "estoque", "Saitema"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


// Componente que define o layout raiz da aplicação (envolve todas as páginas)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav /> {/* Barra de navegação no topo da página */}
        {children}        {/* Conteúdo da página */}
      </body>
    </html>
  );
}

