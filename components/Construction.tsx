import React from 'react';
import { Hammer, ArrowLeft } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { Button } from './Button';

export const Construction: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-100 bg-dark-900 min-h-screen selection:bg-gold-500 selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center relative py-32 px-6">
         {/* Background Decoration */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[100px] z-0"></div>

         <div className="relative z-10 text-center max-w-2xl mx-auto border border-gray-800 bg-dark-800/50 backdrop-blur-sm p-12 rounded-2xl shadow-2xl">
            <div className="w-20 h-20 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold-500/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <Hammer className="text-gold-500 animate-pulse" size={32} />
            </div>
            
            <h1 className="font-serif text-3xl md:text-5xl text-white mb-6">
              Conteúdo em <span className="text-gold-500">Construção</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Estamos elaborando este artigo com o rigor técnico e a excelência que você merece. Em breve, estará disponível com informações valiosas sobre seus direitos.
            </p>

            <div className="flex justify-center gap-4">
               <a href="/">
                 <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft size={18} /> Voltar para Home
                 </Button>
               </a>
            </div>
         </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};