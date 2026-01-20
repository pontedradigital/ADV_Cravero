import React from 'react';
import { VALUES } from '../constants';
import { SectionTitle } from './SectionTitle';
import { ScrollReveal } from './ScrollReveal';
import backgroundImage from '../imagem/Background.webp';

export const About: React.FC = () => {
  return (
    <section 
      id="sobre" 
      className="py-24 relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay to ensure readability and blend with theme */}
      <div className="absolute inset-0 bg-dark-900/95"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
             <ScrollReveal>
               <SectionTitle 
                  title="Compromisso com a Excelência Jurídica" 
                  subtitle="Sobre o Dr. Caio" 
                  centered={false}
               />
               <div className="space-y-6 text-gray-300 leading-relaxed font-light text-lg">
                  <p>
                    A assessoria jurídica do <strong className="text-white font-serif">Dr. Caio Cravero</strong> nasceu da necessidade de oferecer um serviço jurídico que une a tradição do direito com a agilidade exigida pelo mundo moderno.
                  </p>
                  <p>
                    Não somos apenas advogados; somos parceiros estratégicos dos nossos clientes. Entendemos que por trás de cada processo existe uma vida, uma empresa ou um patrimônio que precisa ser protegido com o máximo rigor técnico.
                  </p>
                  <p className="border-l-4 border-gold-500 pl-4 italic text-white/80">
                    "Nossa atuação é pautada na prevenção de riscos e na resolução eficaz de conflitos, sempre buscando o melhor resultado possível para quem confia em nosso trabalho."
                  </p>
               </div>
             </ScrollReveal>
          </div>

          {/* Values Cards */}
          <div className="order-1 lg:order-2 grid gap-6">
            {VALUES.map((item, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div 
                  className="bg-dark-700/80 backdrop-blur-sm p-8 border border-white/5 hover:border-gold-500/50 transition-colors duration-300 rounded-lg group"
                >
                  <h3 className="font-serif text-2xl text-gold-400 mb-2 group-hover:text-gold-300">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};