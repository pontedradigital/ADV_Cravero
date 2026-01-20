import React from 'react';
import { Facebook, Instagram, Linkedin, Shield } from 'lucide-react';
import { LAWYER_NAME, NAV_ITEMS } from '../constants';
import { smoothScrollTo } from '../utils/scrollUtils';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        smoothScrollTo(href, 1000);
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  const pontedraWhatsappMsg = "Olá, estava no site do Dr. Caio Cravero e gostaria de um orçamento para entrar no digital";
  const pontedraWhatsappLink = `https://wa.me/5511992124217?text=${encodeURIComponent(pontedraWhatsappMsg)}`;

  return (
    <footer className="bg-dark-950 border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl text-gold-100 mb-4">{LAWYER_NAME}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Comprometidos com a defesa dos seus direitos e a proteção do seu patrimônio com excelência e ética.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-gray-500 hover:text-gold-400 text-sm transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Áreas</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#atuacao" onClick={(e) => handleLinkClick(e, '#atuacao')} className="hover:text-gold-400 cursor-pointer">Direito Civil</a></li>
              <li><a href="#atuacao" onClick={(e) => handleLinkClick(e, '#atuacao')} className="hover:text-gold-400 cursor-pointer">Direito de Família</a></li>
              <li><a href="#atuacao" onClick={(e) => handleLinkClick(e, '#atuacao')} className="hover:text-gold-400 cursor-pointer">Direito Empresarial</a></li>
              <li><a href="#atuacao" onClick={(e) => handleLinkClick(e, '#atuacao')} className="hover:text-gold-400 cursor-pointer">Direito Trabalhista</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
             <h3 className="text-white font-bold uppercase tracking-wider mb-6">Legal</h3>
             <p className="text-gray-500 text-xs leading-relaxed mb-4">
               Este site não substitui o aconselhamento jurídico profissional. Cada caso é único e deve ser analisado individualmente.
             </p>
             <div className="flex items-center gap-2 text-gold-600">
               <Shield size={16} />
               <span className="text-xs font-bold">OAB/SP 000.000</span>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-500 leading-loose">
          <p>
            &copy; {new Date().getFullYear()} {LAWYER_NAME}. Todos os direitos reservados. - Esse site foi desenvolvido por{' '}
            <a 
              href="http://www.pontedra.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline decoration-gray-600 underline-offset-2 transition-colors"
            >
              Pontedra Digital
            </a>
            {' '}- Quer entrar no digital?{' '}
            <a 
              href={pontedraWhatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 font-bold hover:text-green-400 transition-colors"
            >
              solicite um orçamento
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};