import React, { useState } from 'react';
import { Lock, User, KeyRound, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { SectionTitle } from './SectionTitle';

interface AdminLoginProps {
    onLogin: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulação de login para demonstração
        setTimeout(() => {
            if (email === 'admin@drcaiocravero.adv.br' && password === 'admin') {
                onLogin();
            } else {
                setError('Credenciais inválidas. Tente novamente.');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dark-800/50 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="bg-dark-800 p-8 rounded-xl border border-gray-800 shadow-2xl w-full max-w-md relative z-10 animate-fade-in-up">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-500/20">
                        <Lock className="text-gold-500" size={32} />
                    </div>
                    <h2 className="text-2xl font-serif text-white mb-2">Área Restrita</h2>
                    <p className="text-gray-400 text-sm">Acesso exclusivo para administradores</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gold-500 font-bold uppercase tracking-wider block">Email</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                type="email"
                                required
                                className="w-full bg-dark-900 border border-gray-700 rounded p-3 pl-10 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-gold-500 font-bold uppercase tracking-wider block">Senha</label>
                        <div className="relative">
                            <KeyRound className="absolute left-3 top-3 text-gray-500" size={18} />
                            <input
                                type="password"
                                required
                                className="w-full bg-dark-900 border border-gray-700 rounded p-3 pl-10 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-900/20 border border-red-500/30 rounded text-red-200 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        fullWidth
                        className="mt-4"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="animate-spin" size={18} /> Entrando...
                            </span>
                        ) : "Acessar Painel"}
                    </Button>
                </form>

                <div className="mt-8 text-center border-t border-gray-800 pt-4">
                    <a href="/" className="text-gray-500 hover:text-white text-sm transition-colors">
                        ← Voltar para o site
                    </a>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-600">Credenciais de Teste: admin@drcaiocravero.adv.br / admin</p>
                </div>
            </div>
        </div>
    );
};
