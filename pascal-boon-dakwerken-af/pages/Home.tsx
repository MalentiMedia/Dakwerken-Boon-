
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star, CheckCircle2, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const heroImageUrl = "https://i.imgur.com/pjFwWic.jpeg$0";

  const customReviews = [
    { name: "Jos Van Dorpe", handle: "jos_vd_aalst", rating: 5.0, text: "De snelheid waarmee Pascal kwam kijken voor ons lek was indrukwekkend. Zeer professioneel afgewerkt.", color: "bg-blue-600" },
    { name: "Mieke Vanduffel", handle: "mieke_v", rating: 5.0, text: "Ons plat dak is volledig vernieuwd met roofing. Geen enkel probleem meer gehad, top vakman!", color: "bg-orange-500" },
    { name: "Silvio Vanderspeeten", handle: "silvio_vds", rating: 5.0, text: "De nieuwe PVC-dakgoten zien er strak uit. Goede communicatie en alles netjes achtergelaten.", color: "bg-emerald-600" },
  ];

  const comparisons = [
    {
      title: "Roofing herstelling bij lekkage",
      before: "https://i.imgur.com/Vgr4oK0.jpeg$0",
      after: "https://i.imgur.com/3rbL3xy.jpeg$0",
      description: "Beschadigde roofing werd zorgvuldig verwijderd en vervangen door nieuw gebrand bitumen. De herstelling is strak afgewerkt en opnieuw volledig waterdicht, waardoor verdere schade aan het dak wordt voorkomen."
    },
    {
      title: "Plat Dak Erembodegem",
      before: "https://i.imgur.com/dmgvO0m.jpeg",
      after: "https://i.imgur.com/4j50dWY.jpeg$0",
      description: "Oude roofing verwijderd en nieuwe EPDM-laag geplaatst met isolatie."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen min-h-[550px] w-full flex items-center overflow-hidden bg-[#00458b]">
        <div className="absolute inset-0 z-0 bg-[#002d5a]">
          <img 
            src={heroImageUrl} 
            alt="Pascal Boon Dakwerken Bestelwagen" 
            className={`img-responsive-cover transition-opacity duration-1000 brightness-[0.45] contrast-[1.05] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1632759162351-175868e4708c?auto=format&fit=crop&q=80&w=2000";
              setImageLoaded(true);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00458b] via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-10 md:pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 px-4 py-2 rounded-full mb-6 md:mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-orange-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Uw dakwerker in Aalst & omstreken</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] mb-6 md:mb-8 tracking-tighter drop-shadow-2xl">
              DAKWERKEN <br />
              MET <span className="text-orange-500">KARAKTER.</span>
            </h1>

            <p className="text-white/90 text-base md:text-2xl max-w-2xl mb-8 md:mb-12 leading-relaxed font-medium drop-shadow-lg">
              Pascal Boon staat garant voor eerlijk vakmanschap. 
              Van een klein lek tot een volledig nieuw dak: <span className="text-white font-black underline decoration-orange-500 decoration-4">wij klaren de klus.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
              <Link to="/contact" className="group flex items-center justify-center space-x-4 bg-orange-500 hover:bg-white hover:text-[#00458b] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl transition-all duration-300 shadow-2xl shadow-orange-500/40">
                <span className="text-base md:text-lg font-black uppercase tracking-widest">Vraag uw offerte</span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="flex items-center justify-center space-x-4 text-white hover:text-orange-400 py-2 md:py-4 font-black transition-colors group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all">
                  <Phone size={24} className="text-orange-500 group-hover:text-white" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] leading-none mb-1">Direct contact</span>
                  <span className="text-lg md:text-2xl tracking-tight">{BUSINESS_DETAILS.mobile}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
           <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center pt-1 md:pt-2">
              <div className="w-1 h-1.5 md:h-2 bg-white rounded-full animate-bounce"></div>
           </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 md:py-12 border-b border-slate-100 shadow-sm relative z-20 -mt-6 md:-mt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-24 rounded-2xl md:rounded-3xl">
        <div className="container mx-auto px-4 md:px-6 text-center lg:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <ShieldCheck className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />, title: "10 Jaar Garantie", desc: "Op alle grote werken" },
              { icon: <Clock className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />, title: "Snelle Service", desc: "Binnen 24u bij lekken" },
              { icon: <MapPin className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />, title: "Regio Aalst", desc: "Uw lokale vakman" },
              { icon: <CheckCircle2 className="text-orange-500 w-8 h-8 md:w-10 md:h-10" />, title: "Gratis Offerte", desc: "Eerlijk & transparant" }
            ].map((usp, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-center lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 md:space-x-5 group cursor-default">
                <div className="flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-6">
                  {usp.icon}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm md:text-base leading-none mb-1 tracking-tight">{usp.title}</h4>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realisaties Section */}
      <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none mb-6 md:mb-8">
              Kwaliteit die <span className="text-orange-500">overtuigt.</span>
            </h3>
            <p className="text-slate-500 text-base md:text-xl leading-relaxed">
              Geen woorden, maar daden. Ontdek hoe wij daken in Aalst en omstreken transformeren.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {comparisons.map((item, idx) => (
              <div key={idx} className="group bg-white p-4 md:p-6 rounded-3xl md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="relative mb-6 md:mb-10 overflow-hidden rounded-2xl md:rounded-[2.5rem]">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] overflow-hidden">
                      <img src={item.before} alt="Voor" className="img-responsive-cover grayscale opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <span className="bg-black/80 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest backdrop-blur-md">Voor</span>
                      </div>
                    </div>
                    <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-xl md:rounded-[2rem] shadow-2xl border-2 md:border-4 border-white">
                      <img src={item.after} alt="Na" className="img-responsive-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-xl">Na</div>
                    </div>
                  </div>
                </div>
                <div className="px-2 md:px-6 pb-2 md:pb-6 text-center lg:text-left">
                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 md:mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-emerald-600 bg-emerald-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full inline-flex">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest">Vakkundig uitgevoerd</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 md:mb-24 gap-8 md:gap-12 text-center lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-6xl font-black text-slate-950 mb-6 tracking-tight">
                Waarom klanten <br className="hidden md:block" />voor <span className="text-orange-500 italic">Pascal Boon</span> kiezen
              </h3>
            </div>
            <div className="bg-[#00458b] text-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-2xl transform lg:rotate-3">
               <div className="flex justify-center lg:justify-start text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" />)}
               </div>
               <p className="text-xl md:text-2xl font-black mb-2 tracking-tight leading-none uppercase">5.0 SCORE OP GOOGLE</p>
               <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-xs">Gebaseerd op recente klantervaringen</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {customReviews.map((review, i) => (
              <div key={i} className="bg-slate-50 p-8 md:p-12 rounded-3xl md:rounded-[3rem] relative group hover:bg-slate-900 transition-all duration-500 border border-slate-100 overflow-hidden">
                <div className="absolute -right-4 -top-4 text-[#00458b]/10 group-hover:text-white/5 transition-colors">
                   <ShieldCheck className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" />
                </div>
                <div className="mb-6 md:mb-8 flex justify-between items-center relative z-10">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${review.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-xl md:text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {review.name.charAt(0)}
                  </div>
                </div>
                <p className="text-slate-800 group-hover:text-white/90 text-base md:text-lg leading-relaxed mb-8 md:mb-10 min-h-[100px] md:min-h-[120px] font-medium italic relative z-10">
                  "{review.text}"
                </p>
                <div className="border-t border-slate-200 group-hover:border-white/10 pt-6 relative z-10">
                  <h4 className="font-black text-slate-900 group-hover:text-white text-lg md:text-xl">{review.name}</h4>
                  <p className="text-[10px] md:text-xs text-orange-500 font-black uppercase tracking-widest mt-1">Geverifieerde Klant</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[#00458b] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[1000px] h-[400px] md:h-[1000px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[150px]"></div>
           <div className="absolute bottom-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-4xl md:text-8xl font-black text-white mb-8 md:mb-10 tracking-tighter leading-[1] md:leading-[0.9]">
              GEEF UW DAK <br />
              DE <span className="text-orange-500 italic underline decoration-white/20">BESTE</span> ZORG.
            </h3>
            <p className="text-white/70 text-lg md:text-3xl mb-12 md:mb-16 font-medium max-w-3xl mx-auto">
              Wacht niet tot een klein lek een grote kost wordt. Pascal Boon staat klaar met advies op maat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
              <Link to="/contact" className="w-full sm:w-auto bg-orange-500 text-white px-10 md:px-16 py-5 md:py-8 rounded-2xl md:rounded-[2.5rem] text-xl md:text-2xl font-black hover:bg-white hover:text-[#00458b] transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/40">
                OFFERTE AANVRAGEN
              </Link>
              <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="text-white font-black text-xl md:text-3xl hover:text-orange-400 transition-colors flex items-center space-x-4 border-b-2 md:border-b-4 border-orange-500 pb-2">
                <Phone className="w-7 h-7 md:w-10 md:h-10 animate-pulse" />
                <span>BEL {BUSINESS_DETAILS.mobile}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
