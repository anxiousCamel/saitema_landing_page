"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import blankaFont from "../../../src/fonts/fonts";
import { NAV_LINKS } from "../../../constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};


const Nav = ({ openNav }: Props) => {

  const [navBg, setNavBg] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);   

  return (
    <nav className={`transition-all ${navBg ? "bg-blue-900 shadow-md" : "bg-[#003F88]"} fixed top-0 z-[100] w-full text-white shadow-lg transition-all duration-200 h-[12vh] flex items-center px-4 ${navBg ? "bg-opacity-90" : "bg-opacity-100"}`}>
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
        <div className="flex items-center space-x-4">
          <Link
            href="/area-cliente"
            className="bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] font-semibold px-5 py-2.5 rounded shadow-[0_0_10px_rgba(253,197,0,0.5)] transition duration-200"
          >
            Área do Cliente
          </Link>
        </div>

        {/* Burguer Menu*/}
        <HiBars3BottomRight onClick={openNav} className="text-white w-8 h-8 cursor-pointer lg:hidden" />
      </div>
    </nav>
  );
};

export default Nav;
