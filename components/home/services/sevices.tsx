import React from "react";
import ServiceCard from "./serviceCard";

const Services = () => {
    return (
        <div className="pt-16 pb-16">
            <div className="w-[80%] mx-auto">
                {/* Cabeçalho da Seção */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="flex-1">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase">
                            O que fazemos
                        </h1>
                        <h1 className="text-xl sm:text-3xl md:text-4xl mt-1 font-bold">
                            Oferecemos serviços de alta qualidade para todos os setores
                        </h1>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9"
                        >
                            Todos os Serviços
                        </a>
                    </div>
                </div>

                {/* Cartões de Serviço */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch mt-16">
                    <ServiceCard
                        image="/images/Chef-cuate.svg"
                        title="Sistema para Restaurantes"
                    />
                    <ServiceCard
                        image="/images/barbershop waiting clients-cuate.svg"
                        title="Sistema para Barbearias"
                    />
                    <ServiceCard
                        image="/images/Choosing clothes-cuate.svg"
                        title="Sistema para Lojas de Roupas"
                    />
                    <ServiceCard
                        image="/images/Supermarket workers-cuate.svg"
                        title="Sistema para Supermercados"
                    />
                    <ServiceCard
                        image="/images/women in hair salon-cuate.svg"
                        title="Sistema para Salões de Beleza"
                    />
                    <ServiceCard
                        image="/images/flea market-amico.svg"
                        title="Sistema para Vendas em Geral"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
