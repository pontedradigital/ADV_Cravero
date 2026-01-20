import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Testimonials } from './components/Testimonials';
import { BlogPreview } from './components/BlogPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';

// Component imports for Lazy Loading specific routes
const BlogList = lazy(() => import('./components/BlogList').then(module => ({ default: module.BlogList })));
const BlogPost = lazy(() => import('./components/BlogPost').then(module => ({ default: module.BlogPost })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfUse = lazy(() => import('./components/TermsOfUse').then(module => ({ default: module.TermsOfUse })));
const AdminPage = lazy(() => import('./components/AdminPage').then(module => ({ default: module.AdminPage })));
// Construction is not used in routing currently

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

  const renderContent = () => {
    // 1. Exact match for main Blog Page
    if (path === '/blog' || path === '/blog/') {
      return <BlogList />;
    }

    // 2. Prefix match for specific Blog Posts
    if (path.startsWith('/blog/')) {
      return <BlogPost />;
    }

    // 3. Privacy Policy
    if (path === '/politica-de-privacidade') {
      return <PrivacyPolicy />;
    }

    // 4. Terms of Use
    if (path === '/termos-de-uso') {
      return <TermsOfUse />;
    }

    // 5. Admin Panel
    if (path === '/painel-admin') {
      return <AdminPage />;
    }

    // 6. Default to Landing Page
    return <LandingPage />;
  };

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      {renderContent()}
      <CookieConsent />
    </Suspense>
  );
};

export default App;