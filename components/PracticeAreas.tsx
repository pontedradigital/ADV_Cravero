import React, { useState } from 'react';
import { PRACTICE_AREAS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { Share2, ArrowLeft, CheckCircle2, AlertCircle, HelpCircle, X, Link as LinkIcon, Facebook, Instagram } from 'lucide-react';
import { smoothScrollTo } from '../utils/scrollUtils';

// Icon for Messenger (Lucide doesn't have a specific Messenger brand icon, using MessageCircle as proxy or SVG)
const MessengerIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// WhatsApp Icon
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  areaTitle: string;
  areaDescription: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, areaTitle, areaDescription }) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  if (!isOpen) return null;

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const message = `Olá! Conheça a atuação do Dr. Caio Cravero em *${areaTitle}*.\n\n${areaDescription}\n\nAcesse: ${pageUrl}`;
  const encodedMessage = encodeURIComponent(message);
  const encodedUrl = encodeURIComponent(pageUrl);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${message}`);
    setCopyStatus('copied');
    setTimeout(() => setCopyStatus('idle'), 2000);
  };

  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodedMessage}`, '_blank');
  };

  const handleMessenger = () => {
    // Using Facebook's Send Dialog (Generic App ID used for web dialogs or sharer fallback)
    // Since deep linking to Messenger specifically on web is tricky, we use the FB Send Dialog
    // or fallback to the standard sharer if mobile deep link fails.

    // Attempting mobile deep link first logic is complex in React without checking UA.
    // We will provide the most reliable web link.
    const fbSendUrl = `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=291474419148529&redirect_uri=${encodedUrl}`;
    window.open(fbSendUrl, '_blank');
  };

  const handleInstagram = () => {
    // Instagram does not support "Share to Direct" via URL.
    // UX Pattern: Copy link -> Open Instagram
    navigator.clipboard.writeText(`${message}`);
    setCopyStatus('copied');
    // Open Instagram in a new tab
    setTimeout(() => {
      window.open('https://www.instagram.com/', '_blank');
      setCopyStatus('idle');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-dark-900 border border-gold-500/30 rounded-2xl p-6 w-full max-w-md relative z-10 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="font-serif text-2xl text-white mb-2">Compartilhar</h3>
        <p className="text-gray-400 text-sm mb-6">
          Indique a especialidade <span className="text-gold-500 font-bold">{areaTitle}</span> para um amigo ou familiar.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-4 w-full p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-all group"
          >
            <div className="bg-[#25D366] p-2 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
              <WhatsAppIcon size={20} />
            </div>
            <div className="text-left">
              <span className="block text-white font-bold text-sm">WhatsApp</span>
              <span className="block text-gray-400 text-xs">Enviar para contato</span>
            </div>
          </button>

          {/* Messenger */}
          <button
            onClick={handleMessenger}
            className="flex items-center gap-4 w-full p-4 rounded-xl bg-[#0084FF]/10 hover:bg-[#0084FF]/20 border border-[#0084FF]/20 transition-all group"
          >
            <div className="bg-[#0084FF] p-2 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
              <MessengerIcon size={20} />
            </div>
            <div className="text-left">
              <span className="block text-white font-bold text-sm">Messenger</span>
              <span className="block text-gray-400 text-xs">Enviar pelo Facebook</span>
            </div>
          </button>

          {/* Instagram */}
          <button
            onClick={handleInstagram}
            className="flex items-center gap-4 w-full p-4 rounded-xl bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/20 transition-all group"
          >
            <div className="bg-gradient-to-tr from-[#F58529] via-[#E1306C] to-[#833AB4] p-2 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform">
              <Instagram size={20} />
            </div>
            <div className="text-left">
              <span className="block text-white font-bold text-sm">Instagram</span>
              <span className="block text-gray-400 text-xs">Copiar e abrir App</span>
            </div>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-4 w-full p-4 rounded-xl bg-dark-800 hover:bg-dark-700 border border-gray-700 transition-all group mt-2"
          >
            <div className="bg-dark-600 p-2 rounded-full text-gray-300 group-hover:text-white transition-colors">
              {copyStatus === 'copied' ? <CheckCircle2 size={20} className="text-green-500" /> : <LinkIcon size={20} />}
            </div>
            <div className="text-left">
              <span className="block text-white font-bold text-sm">
                {copyStatus === 'copied' ? 'Link Copiado!' : 'Copiar Link'}
              </span>
              <span className="block text-gray-400 text-xs">Colar em outra rede</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const PracticeAreas: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Listen for external toggle events (e.g. from Footer)
  React.useEffect(() => {
    const handleToggleEvent = (event: CustomEvent<string>) => {
      const areaId = event.detail;
      if (areaId) {
        // Force expand even if already expanded (to update view if switching directly)
        handleExpand(areaId);
      }
    };

    window.addEventListener('toggle-practice-area' as any, handleToggleEvent as EventListener);
    return () => {
      window.removeEventListener('toggle-practice-area' as any, handleToggleEvent as EventListener);
    };
  }, []);

  // Share Modal State
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareData, setShareData] = useState({ title: '', description: '' });

  const handleOpenShare = (e: React.MouseEvent, title: string, description: string) => {
    e.preventDefault();
    e.stopPropagation();
    setShareData({ title, description });
    setShareModalOpen(true);
  };

  const handleExpand = (id: string) => {
    // 1. Inicia a animação de saída (Grid encolhendo)
    setIsTransitioning(true);

    // 2. Aguarda o tempo da animação "lenta" (800ms)
    setTimeout(() => {
      setExpandedId(id);
      setIsTransitioning(false); // Reseta para permitir a animação de entrada do novo componente

      // Pequeno scroll para garantir o foco visual
      setTimeout(() => {
        smoothScrollTo('#atuacao', 800);
      }, 50);
    }, 800); // Sincronizado com o CSS duration
  };

  const handleBack = () => {
    // 1. Inicia animação de saída do detalhe
    setIsTransitioning(true);

    // 2. Aguarda e volta para o Grid
    setTimeout(() => {
      setExpandedId(null);
      setIsTransitioning(false);
    }, 800);
  };

  const selectedArea = PRACTICE_AREAS.find(area => area.id === expandedId);

  return (
    <section id="atuacao" className="py-24 bg-dark-900 relative overflow-hidden min-h-[800px]">

      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        areaTitle={shareData.title}
        areaDescription={shareData.description}
      />

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      {/* 
         Definição das Animações CSS Customizadas 
         shrink-out: Diminui e some (Fade Out com Scale Down)
         grow-in: Aumenta e aparece (Fade In com Scale Up)
      */}
      <style>{`
        /* Animação: Cards somem diminuindo */
        @keyframes shrink-out {
          0% { opacity: 1; transform: scale(1); filter: blur(0px); }
          100% { opacity: 0; transform: scale(0.85); filter: blur(4px); }
        }

        /* Animação: Detalhe expande preenchendo */
        @keyframes grow-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Animação inversa: Grid volta crescendo suavemente */
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-shrink-out {
          animation: shrink-out 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          pointer-events: none; /* Impede cliques durante a saída */
        }

        .animate-grow-in {
          animation: grow-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-restore {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionTitle
            title={expandedId ? "Detalhes da Atuação" : "Áreas de Atuação"}
            subtitle="Expertise Jurídica"
          />
        </ScrollReveal>

        {/* --- GRID VIEW (Lista de Cards) --- */}
        {!expandedId && (
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isTransitioning ? 'animate-shrink-out' : 'animate-restore'
              }`}
          >
            {PRACTICE_AREAS.map((area, index) => (
              <div key={area.id} className="h-full">
                <div
                  className="group relative bg-dark-800 p-8 rounded border border-gray-800 hover:border-gold-500/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] flex flex-col items-start h-full"
                >
                  {/* Share Icon */}
                  <button
                    onClick={(e) => handleOpenShare(e, area.title, area.description)}
                    className="absolute top-4 right-4 p-2 z-20 rounded-full text-gray-600 hover:text-gold-400 hover:bg-dark-700/50 transition-colors"
                    aria-label="Compartilhar"
                  >
                    <Share2 size={18} />
                  </button>

                  <div className="bg-dark-700 p-4 rounded-full mb-6 group-hover:bg-gold-500 transition-colors duration-300 shadow-[0_0_0_0_rgba(212,175,55,0)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <area.icon size={28} className="text-gold-500 group-hover:text-dark-900 transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">{area.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{area.description}</p>

                  <div className="w-full pt-4 border-t border-gray-800 group-hover:border-gold-500/30">
                    <button
                      onClick={() => handleExpand(area.id)}
                      className="text-xs text-gold-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                    >
                      Saiba Mais <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- EXPANDED VIEW (Card Detalhado) --- */}
        {expandedId && selectedArea && (
          <div
            className={`${isTransitioning ? 'animate-shrink-out' : 'animate-grow-in'
              }`}
          >
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="outline" onClick={handleBack} className="flex items-center gap-2 !py-2 !px-4 border-gray-700 text-gray-400 hover:text-gold-500 hover:border-gold-500">
                <ArrowLeft size={16} /> Voltar para Áreas
              </Button>
            </div>

            <div className="bg-dark-800 border border-gold-500/30 rounded-2xl p-8 md:p-12 shadow-[0_0_60px_rgba(0,0,0,0.5)] relative overflow-hidden min-h-[500px]">

              {/* Share Button in Expanded View */}
              <button
                onClick={(e) => handleOpenShare(e, selectedArea.title, selectedArea.description)}
                className="absolute top-6 right-6 p-2 z-20 rounded-full text-gray-500 hover:text-gold-400 hover:bg-dark-700/50 transition-colors flex items-center gap-2"
                aria-label="Compartilhar"
              >
                <span className="text-xs uppercase font-bold tracking-wider hidden sm:block">Compartilhar</span>
                <Share2 size={20} />
              </button>

              {/* Decorative Background inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="grid lg:grid-cols-12 gap-12 relative z-10">

                {/* Left Column: Icon & Title */}
                <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-gray-700 pb-8 lg:pb-0 lg:pr-8">
                  <div className="w-24 h-24 bg-dark-900 rounded-full flex items-center justify-center border border-gold-500/20 mb-6 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                    <selectedArea.icon size={48} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">{selectedArea.title}</h3>
                  <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-8">Especialidade Jurídica</p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, Dr. Caio Cravero. Estava analisando o site e gostaria de falar com um especialista sobre *${selectedArea.title}*.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button fullWidth className="shadow-lg shadow-gold-900/20">Falar com Especialista</Button>
                  </a>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-8 space-y-8">

                  {/* Description */}
                  <div>
                    <h4 className="flex items-center gap-2 text-white font-bold text-lg mb-3">
                      <HelpCircle className="text-gold-500" size={20} /> O que é e como atuamos?
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg font-light">
                      {selectedArea.fullDescription}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Purpose */}
                    <div className="bg-dark-900/50 p-6 rounded-lg border border-gray-800">
                      <h4 className="flex items-center gap-2 text-white font-bold text-base mb-3">
                        <CheckCircle2 className="text-green-500" size={18} /> Para que serve?
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {selectedArea.purpose}
                      </p>
                    </div>

                    {/* When to Hire */}
                    <div className="bg-dark-900/50 p-6 rounded-lg border border-gray-800">
                      <h4 className="flex items-center gap-2 text-white font-bold text-base mb-3">
                        <AlertCircle className="text-gold-500" size={18} /> Quando contratar?
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {selectedArea.whenToHire}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global CTA if not expanded */}

      </div>
    </section>
  );
};