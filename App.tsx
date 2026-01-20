import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Testimonials } from './components/Testimonials';
import { BlogPreview } from './components/BlogPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import { Construction } from './components/Construction';

// Component for the main single-page application landing
const LandingPage: React.FC = () => (
  <div className="font-sans antialiased text-gray-100 bg-dark-900 min-h-screen selection:bg-gold-500 selection:text-white">
    <Header />
    <main>
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

const App: React.FC = () => {
  // Simple client-side routing based on pathname
  const path = window.location.pathname;

  // 1. Exact match for main Blog Page
  if (path === '/blog' || path === '/blog/') {
    return <BlogList />;
  }

  // 2. Prefix match for specific Blog Posts
  // Updated to use the real BlogPost component
  if (path.startsWith('/blog/')) {
    return <BlogPost />;
  }

  // 3. Default to Landing Page for root (/) or any other undefined route
  return <LandingPage />;
};

export default App;