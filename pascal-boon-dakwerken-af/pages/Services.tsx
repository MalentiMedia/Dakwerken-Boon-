
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BUSINESS_DETAILS } from '../constants';
import { Phone, CheckCircle, HelpCircle } from 'lucide-react';

const Services: React.FC = () => {
  const faqs = [
    { q: "Hoe snel kunnen jullie langskomen?", a: "Voor dringende herstellingen proberen we binnen de 24 uur ter plaatse te zijn in regio Aalst." },
    { q: "Doen jullie gratis offertes?", a: "Ja, al onze offertes zijn volledig vrijblijvend en gratis." },
    { q: "In welke regio werken jullie?", a: "Wij werken voornamelijk in Aalst en omstreken (Erembodegem, Lede, Denderleeuw, etc.)." },
    { q: "Wat kost een dakherstelling?", a: "De prijs hangt af van de omvang. Na een inspectie bezorgen we u direct een transparante prijsopgave." },
    { q: "Werken jullie met garantie?", a: "Uiteraard. Wij staan achter ons vakmanschap en bieden garantie op al onze renovaties en herstellingen." }
  ];

  const serviceImages = [
    "https://i.imgur.com/Vgr4oK0.jpeg$0", // herstellingen
    "https://i.imgur.com/tLjuXyB.jpeg$0", // karweien
    "https://i.imgur.com/4j50dWY.jpeg$0", // platte daken
    "https://i.imgur.com/KorWtGZ.jpeg$0", // hellende daken
    "https://i.imgur.com/9Dtya0I.jpeg$0", // goten
    "https://i.imgur.com/xGWc4CS.jpeg$0", // ontmossing
    "https://i.imgur.com/spw6ikx.jpeg$0", // velux
  ];

  // Gepersonaliseerde labels per dienst voor meer overtuigingskracht
  const serviceBadges: Record<string, string> = {
    'herstellingen': 'Directe hulp bij lekken binnen de 24 uur!',
    'karweien': 'Vakwerk voor elk detail',
    'platte-daken': 'Naadloos waterdicht',
    'hellende-daken': 'Meesterschap tot in de Nok',
    'goten': 'Zorgeloze afwatering',
    'ontmossing': 'Uw dak als nieuw',
    'velux': 'Maximale lichtinval'
  };

  return (
    <div className="pt-24 pb-16">
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Onze Diensten</h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl">
            Kwalitatieve dakoplossingen voor elke behoefte. Ontdek waar wij in gespecialiseerd zijn.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-20 md:gap-32">
            {SERVICES.map((s, idx) => (
              <div key={s.id} id={s.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 md:gap-16 lg:gap-24`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative bg-slate-200 rounded-[2rem] md:rounded-[3rem] aspect-video sm:aspect-[16/9] lg:aspect-video overflow-hidden shadow-2xl border border-slate-100">
                    <img 
                      src={serviceImages[idx] || serviceImages[0]} 
                      alt={s.title} 
                      className="img-responsive-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 text-[#00458b] bg-blue-50 px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mx-auto lg:mx-0">
                    <span>{serviceBadges[s.id] || 'Vakmanschap Aalst'}</span>
                  </div>
                  <h2 className="text-3xl md:text-55px font-black text-slate-900 leading-tight tracking-tight">{s.title}</h2>
                  <p className="text-slate-600 text-base md:text-xl leading-relaxed">
                    {s.description} Wij garanderen een waterdicht resultaat voor uw woning in Aalst. Onze experts gebruiken enkel gecertificeerde materialen.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {['Vakkundige afwerking', 'Duurzame materialen', '40+ jaar ervaring', 'Gratis inspectie'].map(item => (
                      <li key={item} className="flex items-center space-x-3 text-slate-700">
                        <CheckCircle size={20} className="text-orange-500 flex-shrink-0" />
                        <span className="font-bold text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="bg-[#00458b] text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-[#00356b] transition-all shadow-xl shadow-blue-900/20">
                      <Phone size={22} />
                      <span>Bel Pascal Boon</span>
                    </a>
                    <Link to="/contact" className="border-2 border-slate-200 text-slate-700 px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-lg hover:bg-slate-50 transition-colors text-center">
                      Gratis offerte
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Veelgestelde vragen</h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                Heeft u een vraag over uw dak? Hier vindt u de antwoorden op de meest gestelde vragen van onze klanten.
              </p>
              <div className="mt-10 bg-white/5 border border-white/10 p-8 rounded-3xl inline-block lg:block">
                <HelpCircle className="text-orange-500 mb-4 mx-auto lg:mx-0" size={48} />
                <p className="font-black text-xl text-white">Staat uw vraag er niet bij?</p>
                <Link to="/contact" className="text-orange-400 hover:text-orange-300 font-black text-lg mt-2 inline-block border-b-2 border-orange-400/30">Stuur ons een bericht &rarr;</Link>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-800/40 border border-slate-800 p-8 md:p-10 rounded-3xl hover:border-slate-700 transition-colors">
                  <h4 className="text-xl md:text-2xl font-black mb-4 flex items-start tracking-tight">
                    <span className="text-orange-500 mr-4 font-black">Q.</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed md:ml-10">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
