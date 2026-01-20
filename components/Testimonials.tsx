import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { ScrollReveal } from './ScrollReveal';
import backgroundImage from '../imagem/Background.webp';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="py-24 relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-900/95"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionTitle
            title="O Que Dizem Nossos Clientes"
            subtitle="Confiança e Resultados"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 150}>
              <div className="bg-dark-900/90 backdrop-blur-sm p-8 rounded-lg relative shadow-lg border border-gray-800/50 h-full">
                <Quote size={40} className="absolute top-6 right-6 text-gold-500/20" />

                <div className="flex gap-1 mb-4 text-gold-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t border-gray-800 pt-4">
                  <p className="text-white font-serif text-lg">{testimonial.name}</p>
                  {testimonial.role && (
                    <p className="text-gold-400 text-sm uppercase tracking-wider mt-1">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};