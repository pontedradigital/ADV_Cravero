import React, { useState } from 'react';
import {
    LayoutDashboard,
    FileText,
    FileOutput,
    LogOut,
    Plus,
    Search,
    Edit,
    Trash2,
    Upload,
    Download
} from 'lucide-react';
import { Button } from './Button';
import { BLOG_POSTS } from '../constants'; // Usando posts fictícios por enquanto

interface AdminDashboardProps {
    onLogout: () => void;
}

type TabType = 'blog' | 'documents';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState<TabType>('blog');

    return (
        <div className="min-h-screen bg-dark-900 flex text-gray-100 font-sans">

            {/* Sidebar */}
            <aside className="w-64 bg-dark-950 border-r border-gray-800 flex flex-col">
                <div className="p-6 border-b border-gray-800">
                    <h2 className="font-serif text-xl text-gold-500">Painel ADM</h2>
                    <p className="text-xs text-gray-500 mt-1">Dr. Caio Cravero</p>
                </div>

                <nav className="flex-grow p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('blog')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'blog' ? 'bg-gold-500/10 text-gold-500 border border-gold-500/20' : 'text-gray-400 hover:bg-dark-800 hover:text-white'}`}
                    >
                        <FileText size={20} />
                        <span>Gerenciar Blog</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('documents')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'documents' ? 'bg-gold-500/10 text-gold-500 border border-gold-500/20' : 'text-gray-400 hover:bg-dark-800 hover:text-white'}`}
                    >
                        <FileOutput size={20} />
                        <span>Gerador de Docs</span>
                    </button>
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-900/10 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Sair</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-8 overflow-y-auto">

                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-serif text-white mb-2">
                            {activeTab === 'blog' ? 'Gerenciamento de Postagens' : 'Gerador de Documentos'}
                        </h1>
                        <p className="text-gray-400">
                            {activeTab === 'blog' ? 'Crie, edite e gerencie o conteúdo do seu blog.' : 'Crie documentos personalizados com a identidade visual do escritório.'}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="/" target="_blank" className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg transition-colors">
                            Ver Site
                        </a>
                        <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-dark-900 font-bold">
                            CC
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                {activeTab === 'blog' ? <BlogManager /> : <DocumentGenerator />}

            </main>
        </div>
    );
};

// Sub-componente: Gerenciador de Blog (Placeholder)
const BlogManager: React.FC = () => {
    return (
        <div className="space-y-6 animate-fade-in-up">
            {/* Action Bar */}
            <div className="flex justify-between items-center bg-dark-800 p-4 rounded-lg border border-gray-800">
                <div className="relative w-96">
                    <Search className="absolute left-3 top-3 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar postagens..."
                        className="w-full bg-dark-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-gold-500"
                    />
                </div>
                <Button className="flex items-center gap-2">
                    <Plus size={18} /> Novo Artigo
                </Button>
            </div>

            {/* Lista de Posts (Mock) */}
            <div className="bg-dark-800 rounded-lg border border-gray-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-dark-950 text-gray-400 text-sm uppercase">
                        <tr>
                            <th className="p-4 font-medium">Título</th>
                            <th className="p-4 font-medium">Categoria</th>
                            <th className="p-4 font-medium">Data</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {BLOG_POSTS.map((post, idx) => (
                            <tr key={idx} className="hover:bg-dark-700/50 transition-colors">
                                <td className="p-4 text-white font-medium">{post.title}</td>
                                <td className="p-4 text-gray-400">
                                    <span className="bg-dark-900 border border-gray-700 px-2 py-1 rounded text-xs">
                                        {post.category}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-400 text-sm">{post.date}</td>
                                <td className="p-4">
                                    <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs border border-green-900/50">
                                        Publicado
                                    </span>
                                </td>
                                <td className="p-4 text-right space-x-2">
                                    <button className="text-gray-400 hover:text-white p-1" title="Editar">
                                        <Edit size={18} />
                                    </button>
                                    <button className="text-gray-400 hover:text-red-400 p-1" title="Excluir">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border border-dashed border-gray-700 rounded-lg bg-dark-900/50 text-center">
                <p className="text-gray-500 italic">Funcionalidade CRUD completa será implementada em breve com integração Supabase.</p>
            </div>
        </div>
    );
};

// Sub-componente: Gerador de Documentos (Placeholder)
const DocumentGenerator: React.FC = () => {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-6">

                {/* Upload Card */}
                <div className="bg-dark-800 p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center text-center space-y-4 hover:border-gold-500/30 transition-colors">
                    <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-2">
                        <Upload className="text-gold-500" size={32} />
                    </div>
                    <h3 className="text-xl text-white font-bold">Carregar Conteúdo</h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                        Cole o texto do seu documento ou carregue um arquivo .txt/.docx para iniciar a formatação.
                    </p>
                    <Button variant="outline" className="mt-4 border-gray-600 text-gray-300">
                        Selecionar Arquivo
                    </Button>
                </div>

                {/* Template Selection */}
                <div className="bg-dark-800 p-8 rounded-lg border border-gray-800 space-y-4">
                    <h3 className="text-lg text-white font-bold mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-gold-500" /> Modelos Disponíveis
                    </h3>

                    <div className="space-y-3">
                        {['Petição Inicial Padrão', 'Contrato de Honorários', 'Procuração Ad Judicia', 'Relatório de Processo'].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-dark-900 rounded border border-gray-700 hover:border-gold-500/50 cursor-pointer transition-colors group">
                                <span className="text-gray-300 group-hover:text-white">{item}</span>
                                <Download size={16} className="text-gray-600 group-hover:text-gold-500" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Preview Section Placeholder */}
            <div className="bg-dark-800 rounded-lg border border-gray-800 p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
                <FileOutput size={64} className="text-gray-700 mb-4" />
                <h3 className="text-2xl font-serif text-gray-500 mb-2">Visualização do Documento</h3>
                <p className="text-gray-600 max-w-md">
                    O documento gerado aparecerá aqui. Ele receberá automaticamente o cabeçalho, rodapé e tipografia oficial do escritório.
                </p>
                <div className="mt-8 px-4 py-2 bg-yellow-900/20 text-yellow-500 border border-yellow-900/50 rounded text-sm">
                    ⚠️ Módulo em desenvolvimento
                </div>
            </div>
        </div>
    );
}

