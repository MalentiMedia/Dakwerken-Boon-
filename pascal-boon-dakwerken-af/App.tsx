
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import { BUSINESS_DETAILS } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <SEO />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diensten" element={<Services />} />
            <Route path="/realisaties" element={<Projects />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/over-ons" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        {/* Persistent Mobile Call Button */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 pointer-events-none">
          <a 
            href={`tel:${BUSINESS_DETAILS.mobileRaw}`} 
            className="pointer-events-auto flex items-center justify-center space-x-3 bg-orange-600 text-white py-4 rounded-xl shadow-2xl shadow-orange-600/40 border-2 border-white font-black text-lg"
          >
            <Phone fill="currentColor" size={24} />
            <span>NU BELLEN</span>
          </a>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
