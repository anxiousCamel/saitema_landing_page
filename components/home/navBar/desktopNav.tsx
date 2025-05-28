import React from "react";
import Link from "next/link";
import blankaFont from "../../../src/fonts/fonts";
import { NAV_LINKS } from "../../../constant/constant";

const DesktopNav = () => {
  return (
    <nav className="fixed top-0 z-[100] w-full bg-[#003F88] text-white shadow-lg transition-all duration-200 h-[12vh] flex items-center px-4">
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-2 lg:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <h1
            className={`${blankaFont.className} text-xl md:text-2xl font-bold`}
          >
            Saitema
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white text-lg hover:text-[#FDC500] font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botão de Acesso Área do Cliente */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/area-cliente"
            className="bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] font-semibold px-5 py-2.5 rounded shadow-[0_0_10px_rgba(253,197,0,0.5)] transition duration-200"
          >
            Área do Cliente
          </Link>
        </div>

        {/* Mobile menu placeholder*/}
        <div className="lg:hidden">
          {/* Botão/menu hamburger pode ser adicionado aqui */}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
