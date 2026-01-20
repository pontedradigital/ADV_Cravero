import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { X, Cookie } from 'lucide-react';

export const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            // Show banner after a small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
            <div className="max-w-6xl mx-auto bg-dark-900/95 backdrop-blur-md border border-gold-500/30 rounded-xl shadow-2xl p-6 md:flex items-center justify-between gap-6">

                {/* Content */}
                <div className="flex items-start gap-4 mb-6 md:mb-0">
                    <div className="p-3 bg-gold-500/10 rounded-full hidden sm:block">
                        <Cookie className="text-gold-500" size={24} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">Este site utiliza cookies</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                            Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site.
                            Ao continuar, você concorda com nossa{' '}
                            <a href="/politica-de-privacidade" className="text-gold-400 hover:text-gold-300 underline decoration-gold-500/50 underline-offset-2 transition-colors">
                                Política de Privacidade
                            </a>.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                    <Button
                        variant="outline"
                        onClick={handleDecline}
                        className="text-sm !py-2 !px-6 border-gray-700 hover:border-gray-500 text-gray-300"
                    >
                        Rejeitar
                    </Button>
                    <Button
                        onClick={handleAccept}
                        className="text-sm !py-2 !px-8 bg-gold-600 hover:bg-gold-500 text-white border-none shadow-lg shadow-gold-900/20"
                    >
                        Aceitar Todos
                    </Button>
                </div>

                {/* Close Button (Optional, usually acts as Decline or just close) */}
                <button
                    onClick={handleDecline}
                    className="absolute top-2 right-2 p-2 text-gray-500 hover:text-white transition-colors md:hidden"
                    aria-label="Fechar"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};
