import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';
import { BLOG_POSTS } from '../constants';

export const BlogPreview: React.FC = () => {
  // Use the first 3 posts from the shared constant to ensure data consistency
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-dark-900 border-y border-gray-800">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div className="text-center md:text-left w-full md:w-auto">
               <span className="block text-gold-500 text-sm font-bold tracking-[0.2em] uppercase mb-3">Atualizações</span>
               <h2 className="font-serif text-3xl md:text-4xl text-white">Artigos e Notícias Jurídicas</h2>
             </div>
             <div className="hidden md:block">
               <a href="/blog">
                 <Button variant="outline">Ver Todos os Artigos</Button>
               </a>
             </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
           {posts.map((post, idx) => (
             <ScrollReveal key={idx} delay={idx * 150}>
               <a 
                 href={`/blog/${post.slug}`} 
                 className="group cursor-pointer block h-full"
               >
                 <div className="h-48 bg-dark-800 mb-4 rounded overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   <img 
                      src={`https://picsum.photos/400/300?random=${idx + 10}`} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" 
                   />
                   <span className="absolute bottom-4 left-4 bg-gold-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {post.category}
                   </span>
                 </div>
                 <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                   <span>{post.date}</span>
                   <span>•</span>
                   <span>Dr. Caio Cravero</span>
                 </div>
                 <h3 className="text-xl font-serif text-white group-hover:text-gold-400 transition-colors">
                   {post.title}
                 </h3>
                 <p className="text-gold-500 text-sm mt-2 font-bold group-hover:translate-x-1 transition-transform inline-block">Ler Artigo &rarr;</p>
               </a>
             </ScrollReveal>
           ))}
        </div>

        <ScrollReveal className="mt-8 text-center md:hidden">
            <a href="/blog">
              <Button variant="outline">Ver Todos os Artigos</Button>
            </a>
        </ScrollReveal>
      </div>
    </section>
  );
};