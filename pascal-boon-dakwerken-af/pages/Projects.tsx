
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, BUSINESS_DETAILS } from '../constants';
import { Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, currentIndex, onIndexChange }) => {
  const next = () => onIndexChange((currentIndex + 1) % images.length);
  const prev = () => onIndexChange((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="relative group overflow-hidden bg-slate-100 aspect-[3/4]">
      <img 
        src={images[currentIndex]} 
        alt="Project detail" 
        className="img-responsive-cover transition-all duration-500 group-hover:scale-105"
      />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500 hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-6 bg-orange-500' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
      
      <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center space-x-2">
        <span>{currentIndex + 1} / {images.length}</span>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <div className="relative">
        <ProjectGallery 
          images={project.images} 
          currentIndex={activeIndex} 
          onIndexChange={setActiveIndex} 
        />
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-slate-900/85 backdrop-blur-md text-white px-4 py-2 rounded-xl flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest">
            <MapPin size={14} className="text-orange-500" />
            <span>{project.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#00458b] transition-colors">{project.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        {/* Vertical Thumbnail Row */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.images.map((img, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`w-12 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 transform hover:scale-110 ${
                i === activeIndex 
                ? 'border-orange-500 shadow-md scale-105' 
                : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400'
              }`}
            >
              <img src={img} className="img-responsive-cover" alt={`Thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full tracking-widest">Kwaliteitsgarantie</span>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Onze Realisaties</h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl mb-10">
            Bekijk onze voltooide projecten in staand formaat voor een nog beter overzicht van het resultaat.
          </p>
          <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="inline-flex items-center space-x-3 bg-[#00458b] text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-[#00356b] transition-all shadow-xl shadow-blue-900/20">
             <Phone size={24} />
             <span>Vraag Pascal om advies</span>
          </a>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-24 md:mt-32 bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Ziet uw dak er <br />niet meer zo uit?</h3>
              <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed">
                Of het nu gaat om een dringende herstelling of een volledige vernieuwing, wij staan voor u klaar.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
                 <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="bg-orange-500 text-white px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-orange-500/20 scale-100 hover:scale-105">
                    Bel Pascal Direct
                 </a>
                 <Link to="/contact" className="bg-white text-slate-900 px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-orange-500 hover:text-white transition-all scale-100 hover:scale-105">
                    Vrijblijvende Offerte
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
