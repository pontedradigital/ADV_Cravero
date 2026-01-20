import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="bg-white text-dark-900 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold hidden md:block">
        Fale conosco agora!
      </div>
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 animate-pulse">
        <MessageCircle size={32} fill="white" />
      </div>
    </a>
  );
};