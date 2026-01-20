import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { BLOG_POSTS } from '../constants'; // Import shared data

export const BlogList: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-100 bg-dark-900 min-h-screen selection:bg-gold-500 selection:text-white flex flex-col">
      <Header />
      
      {/* Blog Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-dark-950 z-0"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
                <SectionTitle 
                    title="Blog Jurídico" 
                    subtitle="Informação e Atualidade" 
                    centered={true}
                />
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                    Acompanhe nossos artigos, notícias e análises sobre as principais questões do direito brasileiro.
                </p>
            </ScrollReveal>
         </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-dark-900 flex-grow">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {BLOG_POSTS.map((post, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                    <a 
                        href={`/blog/${post.slug}`} 
                        className="group cursor-pointer block h-full flex flex-col bg-dark-800 rounded-lg overflow-hidden border border-gray-800 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="h-56 bg-dark-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent z-10"></div>
                        <img 
                            src={`https://picsum.photos/600/400?random=${idx + 20}`} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                        />
                        <span className="absolute top-4 right-4 z-20 bg-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                            {post.category}
                        </span>
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-gold-500/80 text-xs mb-4 font-bold tracking-wider uppercase">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>Leitura de 5 min</span>
                            </div>
                            
                            <h3 className="text-2xl font-serif text-white group-hover:text-gold-400 transition-colors mb-4 leading-tight">
                                {post.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                {post.excerpt}
                            </p>
                            
                            <div className="pt-6 border-t border-gray-700/50 mt-auto">
                                <span className="text-sm text-white font-bold group-hover:text-gold-500 transition-colors flex items-center gap-2">
                                    Ler Artigo Completo <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </div>
                        </div>
                    </a>
                    </ScrollReveal>
                ))}
            </div>

            {/* Pagination Placeholder - Visual Only */}
            <div className="mt-20 flex justify-center gap-2">
                 <Button variant="outline" className="!px-4" disabled>&lt;</Button>
                 <Button className="!px-4 bg-gold-500 text-dark-900">1</Button>
                 <Button variant="outline" className="!px-4 text-gray-500 border-gray-700" disabled>2</Button>
                 <Button variant="outline" className="!px-4" disabled>&gt;</Button>
            </div>
         </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};