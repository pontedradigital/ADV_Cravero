import React from 'react';
import { Facebook, Instagram, Linkedin, Shield } from 'lucide-react';
import { LAWYER_NAME, NAV_ITEMS, OAB_NUMBER } from '../constants';
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

  const dispatchAreaClick = (e: React.MouseEvent, areaId: string) => {
    e.preventDefault();

    // 1. Scroll e navegação
    handleLinkClick(e as any, '#atuacao');

    // 2. Despachar evento para abrir o card específico
    // Pequeno timeout para garantir que o scroll iniciou ou a página mudou
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('toggle-practice-area', { detail: areaId }));
    }, 100);
  };

  return (
    <footer className="bg-dark-950 border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-1 flex flex-col items-center text-center">
            <a href="/" className="block mb-6 w-48 mx-auto">
              <img
                src="/logo.webp"
                alt={LAWYER_NAME}
                className="w-full h-auto object-contain"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Comprometidos com a defesa dos seus direitos e a proteção do seu patrimônio com excelência e ética.
            </p>
            <div className="flex gap-4 justify-center">
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
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="text-gray-500 hover:text-gold-400 text-sm transition-colors cursor-pointer"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos-de-uso"
                  className="text-gray-500 hover:text-gold-400 text-sm transition-colors cursor-pointer"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="/painel-admin"
                  className="text-gray-500 hover:text-gold-400 text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  Painel ADM
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Áreas</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#atuacao" onClick={(e) => dispatchAreaClick(e, 'civil')} className="hover:text-gold-400 cursor-pointer">Direito Civil</a></li>
              <li><a href="#atuacao" onClick={(e) => dispatchAreaClick(e, 'familiar')} className="hover:text-gold-400 cursor-pointer">Direito de Família</a></li>
              <li><a href="#atuacao" onClick={(e) => dispatchAreaClick(e, 'empresarial')} className="hover:text-gold-400 cursor-pointer">Direito Empresarial</a></li>
              <li><a href="#atuacao" onClick={(e) => dispatchAreaClick(e, 'trabalhista')} className="hover:text-gold-400 cursor-pointer">Direito Trabalhista</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Legal</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Este site não substitui o aconselhamento jurídico profissional. Cada caso é único e deve ser analisado individualmente.
            </p>
            <div className="flex items-center gap-2 text-gold-600">
              <Shield size={16} />
              <span className="text-xs font-bold">OAB/SP {OAB_NUMBER}</span>
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