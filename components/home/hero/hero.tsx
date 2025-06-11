import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-blue-950 w-full h-screen flex items-center justify-center px-6">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-12 gap-x-16 items-center">

        {/* Texto */}
        <div className="text-white">
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-4">
            Tecnologia sem complicação.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Automação<br />
            <span className="text-yellow-400">personalizada</span> para o seu negócio.
          </h1>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-300">
            Um sistema comercial que se molda ao seu negócio. Escolha os módulos, o visual e comece a vender do seu jeito com o Saitema.
          </p>

          {/* Botão */}
          <a
            href="#saiba-mais"
            className="mt-8 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-bold transition-all bg-white rounded hover:bg-white group text-lg text-blue-950 relative"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#FFD500] absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 ease-out duration-500 transition-all group-hover:translate-x-0 group-hover:ml-0 group-hover:mb-32 z-0" />
            <span className="relative z-10">Saiba mais</span>
          </a>
        </div>

        {/* Imagem */}
        <div className="mx-auto hidden xl:block max-w-[500px]">
          <Image
            src="/images/Operating_system-amico.png"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>

  );
};

export default Hero;
