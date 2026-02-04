
import React from 'react';
import { REVIEWS, BUSINESS_DETAILS } from '../constants';
import { Star, Quote, Phone } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex text-yellow-400">
               {"★★★★★".split("").map((s,i) => <Star key={i} size={32} fill="currentColor" />)}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Klanttevredenheid 5.0 / 5</h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Wij zijn trots op onze reputatie als vakman. Lees wat onze klanten uit Aalst en omgeving over ons zeggen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {REVIEWS.map((review) => (
              <div key={review.id} className="relative bg-white border border-slate-100 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute top-6 right-10 text-slate-100">
                  <Quote size={60} />
                </div>
                <div className="flex text-yellow-400 mb-6">
                  {"★★★★★".split("").map((s,i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic text-lg leading-relaxed mb-8 relative z-10">
                  "{review.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-400">Geverifieerde Google review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center px-4">
            <div className="bg-blue-50 border border-blue-100 inline-block px-6 sm:px-10 py-12 rounded-[2rem] max-w-2xl w-full">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">Ook hulp nodig met uw dak?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Word ook een van onze tevreden klanten. Wij zorgen voor een zorgeloze ervaring van offerte tot afwerking.
              </p>
              <a 
                href={`tel:${BUSINESS_DETAILS.mobileRaw}`} 
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-blue-600 text-white px-4 sm:px-10 py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 whitespace-nowrap"
              >
                <Phone size={20} className="flex-shrink-0" />
                <span>Bel Pascal: {BUSINESS_DETAILS.mobile}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
