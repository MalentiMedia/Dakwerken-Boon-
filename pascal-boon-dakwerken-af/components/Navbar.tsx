
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, Search, ArrowRight, Home, Construction, History } from 'lucide-react';
import { BUSINESS_DETAILS, SERVICES, PROJECTS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sluit menu's bij navigatie
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Focus input wanneer zoek-overlay opent
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const isHome = location.pathname === '/';
  const shouldShowLightMode = scrolled || !isHome;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Realisaties', href: '/realisaties' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  // Zoeklogica
  const filteredServices = SERVICES.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasResults = searchQuery.length > 1 && (filteredServices.length > 0 || filteredProjects.length > 0);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${shouldShowLightMode ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col z-50">
            <span className={`text-xl md:text-2xl font-black tracking-tighter ${shouldShowLightMode ? 'text-[#00458b]' : 'text-white'}`}>
              PASCAL <span className="text-orange-500">BOON</span>
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-[0.4em] ${shouldShowLightMode ? 'text-slate-500' : 'text-white/60'}`}>
              Alles voor uw dak
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-orange-500 relative group ${shouldShowLightMode ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-orange-500 transition-all ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Action Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`${shouldShowLightMode ? 'text-slate-700' : 'text-white'} hover:text-orange-500 transition-colors cursor-pointer p-2`}
              aria-label="Zoeken"
            >
              <Search size={20} />
            </button>
            <div className={`h-8 w-px ${shouldShowLightMode ? 'bg-slate-200' : 'bg-white/20'}`}></div>
            <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className={`text-xs font-black uppercase tracking-widest flex items-center space-x-2 ${shouldShowLightMode ? 'text-[#00458b]' : 'text-white'}`}>
              <Phone size={14} className="text-orange-500" />
              <span>{BUSINESS_DETAILS.mobile}</span>
            </a>
          </div>

          {/* Mobile Toggle & Search */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`${shouldShowLightMode ? 'text-slate-900' : 'text-white'} p-2`}
            >
              <Search size={24} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 z-50">
              {isOpen ? (
                <X size={28} className="text-slate-900" />
              ) : (
                <Menu size={28} className={shouldShowLightMode ? 'text-slate-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 animate-fade-in">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-3xl font-black text-slate-900 hover:text-orange-500 transition-colors">
                {link.name}
              </Link>
            ))}
            <div className="pt-10 flex flex-col items-center space-y-4">
              <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="bg-[#00458b] text-white px-8 py-4 rounded-full font-black text-lg">
                Bel {BUSINESS_DETAILS.mobile}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex flex-col animate-fade-in">
          <div className="p-6 flex justify-end">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="p-4 bg-white/10 hover:bg-orange-500 text-white rounded-full transition-all"
            >
              <X size={32} />
            </button>
          </div>
          
          <div className="container mx-auto px-6 max-w-4xl flex flex-col flex-grow">
            <div className="relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-500" size={32} />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Waarmee kunnen we u helpen?"
                className="w-full bg-white/5 border-b-4 border-white/20 text-white text-3xl md:text-5xl font-black py-8 pl-20 pr-8 focus:outline-none focus:border-orange-500 transition-all placeholder:text-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex-grow overflow-y-auto pb-20 custom-scrollbar">
              {!searchQuery && (
                <div className="text-white/40 space-y-8">
                  <p className="text-sm font-bold uppercase tracking-widest">Populaire zoekopdrachten</p>
                  <div className="flex flex-wrap gap-4">
                    {['Daklek', 'Dakgoten', 'Ontmossing', 'Renovatie', 'EPDM'].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-white font-bold transition-all border border-white/10"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchQuery && !hasResults && searchQuery.length > 1 && (
                <div className="text-center py-20">
                  <p className="text-white/40 text-2xl font-medium">Geen resultaten gevonden voor "{searchQuery}"</p>
                </div>
              )}

              {hasResults && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Services Results */}
                  {filteredServices.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] flex items-center">
                        <Construction size={16} className="mr-2" />
                        Diensten
                      </h4>
                      <div className="space-y-4">
                        {filteredServices.map(service => (
                          <Link 
                            key={service.id}
                            to={`/diensten#${service.id}`}
                            className="group block p-6 bg-white/5 hover:bg-white rounded-2xl transition-all border border-white/10"
                          >
                            <h5 className="text-white group-hover:text-slate-900 font-black text-xl mb-1">{service.title}</h5>
                            <p className="text-white/40 group-hover:text-slate-500 text-sm line-clamp-2">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Results */}
                  {filteredProjects.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] flex items-center">
                        <History size={16} className="mr-2" />
                        Realisaties
                      </h4>
                      <div className="space-y-4">
                        {filteredProjects.map(project => (
                          <Link 
                            key={project.id}
                            to="/realisaties"
                            className="group block p-6 bg-white/5 hover:bg-white rounded-2xl transition-all border border-white/10"
                          >
                            <div className="flex justify-between items-start mb-2">
                               <h5 className="text-white group-hover:text-slate-900 font-black text-xl">{project.title}</h5>
                               <span className="text-xs font-bold text-white/20 group-hover:text-slate-400">{project.location}</span>
                            </div>
                            <p className="text-white/40 group-hover:text-slate-500 text-sm line-clamp-2">{project.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
