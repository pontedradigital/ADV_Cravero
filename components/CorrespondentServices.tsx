import React from 'react';
import {
    Briefcase,
    MapPin,
    FileCheck,
    Gavel,
    Copy,
    Clock,
    ArrowRight
} from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';

const services = [
    {
        icon: Gavel,
        title: "Audiências",
        description: "Realização de audiências de conciliação e instrução com prepostos preparados e advogados experientes."
    },
    {
        icon: FileCheck,
        title: "Protocolos e Despachos",
        description: "Protocolo de petições e despachos presenciais com juízes e serventias para agilizar processos travados."
    },
    {
        icon: Copy,
        title: "Cópias e Digitalização",
        description: "Extração de cópias integrais ou parciais de processos físicos e digitalização em alta resolução."
    },
    {
        icon: MapPin,
        title: "Diligências em SP e ABC",
        description: "Atuação rápida e presencial em todos os fóruns da Capital, Santo André, São Bernardo, São Caetano e Diadema."
    }
];

export const CorrespondentServices: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-dark-900" id="correspondencia">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] -translate-x-1/2"></div>
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
                            <Briefcase className="w-4 h-4 text-gold-500" />
                            <span className="text-gold-500 text-sm font-medium tracking-wide">PARA ADVOGADOS E ESCRITÓRIOS</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-100 mb-6 leading-tight">
                            Correspondência Jurídica em <span className="text-gold-500">São Paulo e Grande ABC</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Sabemos que a distância pode ser um obstáculo para a celeridade processual.
                            Oferecemos suporte jurídico logístico de alta performance para escritórios de outros estados
                            que necessitam de "olhos e braços" nos fóruns da capital paulista e região do ABC.
                            Atuamos como uma extensão do seu escritório, com o mesmo rigor técnico e compromisso que você dedica aos seus clientes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2">
                                    Solicitar Diligência Agora
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </a>


                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-xl bg-dark-800 border border-dark-700 hover:border-gold-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-lg bg-dark-900 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/10 transition-colors duration-300">
                                    <service.icon className="w-6 h-6 text-gold-500" />
                                </div>
                                <h3 className="text-xl font-serif text-gray-100 mb-2 group-hover:text-gold-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
