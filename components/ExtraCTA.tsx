import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';

export const ExtraCTA: React.FC = () => {
    return (
        <section className="py-12 bg-dark-800 border-t border-dark-700">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-dark-900 to-dark-800 border border-gold-500/20 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden group hover:border-gold-500/40 transition-all duration-300">

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-gold-500/10 transition-all duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h3 className="text-2xl md:text-3xl font-serif text-gray-100 mb-8">
                            Seu caso não se encaixa nas áreas acima?
                        </h3>

                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group">
                            <Button
                                variant="primary"
                                className="px-10 py-4 text-base shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                            >
                                Fale com um especialista agora
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
