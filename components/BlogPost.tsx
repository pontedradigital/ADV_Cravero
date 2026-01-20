import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { BLOG_POSTS, WHATSAPP_LINK } from '../constants';

export const BlogPost: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Extract slug robustly
  const getSlug = () => {
    const parts = window.location.pathname.split('/').filter(p => p); // Remove empty strings
    return parts.length > 1 ? parts[parts.length - 1] : null;
  };

  const slug = getSlug();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  // Scroll to top on mount and handle scroll progress
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-900 text-white flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-serif mb-4">Artigo não encontrado</h1>
          <p className="text-gray-400 mb-8">O conteúdo que você procura não está disponível ou foi movido.</p>
          <a href="/blog"><Button>Voltar ao Blog</Button></a>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="font-sans antialiased text-gray-100 bg-dark-900 min-h-screen selection:bg-gold-500 selection:text-white flex flex-col">
      <Header />

      <main className="flex-grow pt-48 pb-20">

        {/* Progress bar using state instead of experimental CSS */}
        <div
          className="fixed top-0 left-0 h-1 bg-gold-500 z-[60] w-full origin-left transition-transform duration-100 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        ></div>

        <article className="container mx-auto px-6 max-w-4xl">

          {/* Navigation */}
          <div className="mb-8">
            <a href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors text-sm font-bold uppercase tracking-wider">
              <ArrowLeft size={16} /> Voltar para o Blog
            </a>
          </div>

          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-gold-500 font-bold uppercase tracking-widest mb-6">
                <span className="bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-8 text-gray-400 text-sm border-t border-b border-gray-800 py-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center border border-gold-500/20">
                    <User size={18} className="text-gold-500" />
                  </div>
                  <span className="font-medium text-white">{post.author || "Dr. Caio Cravero"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>5 min de leitura</span>
                </div>
                <button onClick={handleShare} className="flex items-center gap-2 hover:text-gold-500 transition-colors">
                  <Share2 size={16} />
                  <span className="hidden sm:inline">Compartilhar</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Featured Image */}
          <ScrollReveal delay={200}>
            <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/50 border border-gray-800 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
              <img
                src={`https://picsum.photos/1200/600?seed=${slug}`}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="prose prose-lg prose-invert mx-auto prose-headings:font-serif prose-headings:text-white prose-p:text-gray-300 prose-a:text-gold-400 hover:prose-a:text-gold-300 prose-strong:text-white prose-li:text-gray-300 prose-blockquote:border-gold-500 prose-blockquote:bg-dark-800/50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg">
            <ScrollReveal delay={300}>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Generic filler content for length if snippet is short */}
              {!post.content.includes("<h3>") && (
                <>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <h3>A Importância da Assessoria Jurídica</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <blockquote>
                    "O direito não socorre aos que dormem." - Brocardo Jurídico
                  </blockquote>
                  <p>É essencial buscar orientação profissional para garantir que seus direitos sejam preservados. Cada caso possui particularidades que apenas uma análise técnica pode identificar.</p>
                </>
              )}
            </ScrollReveal>
          </div>

          {/* Footer CTA */}
          <div className="mt-20 pt-10 border-t border-gray-800">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-gold-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px]"></div>

              <h3 className="font-serif text-3xl text-white mb-4 relative z-10">Precisa de orientação sobre este tema?</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                Nossa equipe de especialistas está pronta para analisar o seu caso com a atenção que ele merece.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block">
                <Button className="shadow-xl shadow-gold-900/20">Falar com Advogado Agora</Button>
              </a>
            </div>
          </div>

        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};