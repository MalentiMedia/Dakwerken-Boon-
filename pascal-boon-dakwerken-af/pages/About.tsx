
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_DETAILS } from '../constants';
import { ShieldCheck, User, MapPin, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Introductie Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-3/5 sm:w-1/2 lg:w-1/4 mx-auto lg:mx-0"> {/* Verkleind op mobiel, gecentreerd */}
              <div className="relative">
                {/* Decoratieve elementen */}
                <div className="absolute -top-6 -left-6 w-32 md:w-48 h-32 md:h-48 bg-blue-50 rounded-full -z-10 blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 md:w-48 h-32 md:h-48 bg-orange-50 rounded-full -z-10 blur-3xl"></div>
                
                {/* Hoofdafbeelding - Pascal Boon Dakwerken */}
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img 
                    src="https://i.imgur.com/xxXrhvr.jpeg" 
                    alt="Pascal Boon Dakwerken Aalst" 
                    className="img-responsive-cover object-[75%_center] hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                
                {/* Ervaring Badge - Nu ook zichtbaar op mobiel */}
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-2 bg-[#00458b] text-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl transform rotate-3 z-10">
                  <p className="text-xl md:text-2xl font-black leading-none mb-0.5">40+</p>
                  <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-blue-300">Jaar Ervaring</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-3/4 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest mx-auto lg:mx-0">
                <MapPin size={14} />
                <span>Dakwerken met passie</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
                Eerlijkheid & <span className="text-orange-500">Vakmanschap.</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                Met meer dan 40 jaar ervaring in de daksector is Pascal Boon een vertrouwde naam in Aalst en omstreken. Wat begon als een passie voor de bouw, groeide uit tot een gespecialiseerd bedrijf dat bekend staat om zijn stiptheid en oog voor detail.
              </p>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                Bij ons geen gladde praatjes of verborgen kosten. Pascal is zelf uw aanspreekpunt, van de eerste inspectie tot de uiteindelijke oplevering. Wij geloven in de kracht van lokale service: we zijn altijd dichtbij als u ons nodig heeft.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Persoonlijke aanpak",
                  "Gecertificeerde materialen",
                  "Stipte planning",
                  "Proper opgeleverde werven"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-slate-700 font-bold">
                    <CheckCircle className="text-orange-500" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link to="/contact" className="inline-block bg-[#00458b] text-white px-10 md:px-14 py-4 md:py-5 rounded-2xl font-black text-xl hover:bg-orange-500 transition-all shadow-xl shadow-blue-900/20">
                  Contacteer Pascal &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarden Sectie */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Onze Belofte</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">Waarom klanten voor ons kiezen</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { 
                icon: <ShieldCheck className="w-12 h-12 text-[#00458b]" />, 
                title: "100% Betrouwbaar", 
                text: "Wij doen what we beloven. Een afspraak is een afspraak, en een offerte is bij ons definitief." 
              },
              { 
                icon: <Award className="w-12 h-12 text-orange-500" />, 
                title: "Topkwaliteit", 
                text: "We werken enkel met A-merken en materialen die specifiek gekozen zijn voor hun duurzaamheid." 
              },
              { 
                icon: <User className="w-12 h-12 text-[#00458b]" />, 
                title: "Direct Contact", 
                text: "Geen tussenpersonen of callcenters. U spreekt direct met de vakman die het werk uitvoert." 
              }
            ].map((value, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] group hover:bg-white transition-all duration-500 cursor-default">
                <div className="mb-8 p-4 bg-white/5 rounded-2xl inline-block group-hover:bg-slate-50 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-slate-950 tracking-tight mb-4 transition-colors">{value.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-600 text-lg leading-relaxed transition-colors">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regio Sectie */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Actief in heel regio <span className="text-orange-500">Groot Aalst</span></h2>
               <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
                 Vanuit onze basis in de Ajuinenstraat bedienen we een brede regio rondom Aalst. Of u nu in een rijwoning in het centrum woont of een open bebouwing heeft in de randgemeenten, wij staan voor u klaar.
               </p>
               <div className="flex flex-wrap gap-3">
                 {BUSINESS_DETAILS.regions.map(region => (
                   <span key={region} className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-slate-700 font-bold text-sm shadow-sm">
                     {region}
                   </span>
                 ))}
               </div>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                 <img 
                  src="https://i.imgur.com/pjFwWic.jpeg$0" 
                  alt="Dakwerke Pascal boon" 
                  className="img-responsive-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
