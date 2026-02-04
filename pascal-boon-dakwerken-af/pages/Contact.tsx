
import React from 'react';
import { BUSINESS_DETAILS } from '../constants';
import { Phone, Mail, MapPin, Send, AlertTriangle, Smartphone } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    alert('Bedankt voor uw aanvraag! Wij nemen zo snel mogelijk contact met u op.');
  };

  return (
    <div className="pt-24 pb-16">
      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Contact & Offerte</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Vraag vandaag nog uw vrijblijvende offerte aan of bel ons voor direct advies.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div className="bg-red-50 border border-red-100 p-8 rounded-[2rem] space-y-4">
                <div className="flex items-center space-x-3 text-red-600">
                  <AlertTriangle size={32} />
                  <h3 className="text-xl font-black">Noodgeval?</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Heeft u snelle hulp nodig bij een daklekkage of stormschade? Bel ons meteen voor een snelle interventie.
                </p>
                <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="inline-flex items-center space-x-3 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all w-full justify-center shadow-lg shadow-red-600/20">
                  <Phone size={24} />
                  <span>Bel {BUSINESS_DETAILS.mobile}</span>
                </a>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-black text-slate-900">Bedrijfsgegevens</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Locatie</p>
                      <p className="text-slate-500">{BUSINESS_DETAILS.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">GSM / Telefoon</p>
                      <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="text-slate-500 hover:text-blue-600 transition-colors font-bold">{BUSINESS_DETAILS.mobile}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Vaste lijn</p>
                      <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`} className="text-slate-500 hover:text-blue-600 transition-colors">{BUSINESS_DETAILS.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">E-mail</p>
                      <p className="text-slate-500">{BUSINESS_DETAILS.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white border border-slate-100 shadow-2xl rounded-[3rem] p-8 md:p-12">
                <h3 className="text-3xl font-black text-slate-900 mb-8">Vraag een vrijblijvende offerte aan</h3>
                <form 
                  onSubmit={handleSubmit} 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Naam</label>
                    <input name="name" type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Uw volledige naam" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Telefoon</label>
                    <input name="phone" type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Uw telefoonnummer" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">E-mail</label>
                    <input name="email" type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Uw e-mailadres" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Gemeente</label>
                    <input name="city" type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Waar moeten de werken gebeuren?" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Type werk</label>
                    <select name="service-type" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                      <option>Kies een categorie...</option>
                      <option>Dakherstelling / Lek</option>
                      <option>Dakrenovatie</option>
                      <option>Plat dak (Roofing/EPDM)</option>
                      <option>Hellend dak (Pannen/Leien)</option>
                      <option>Dakgoten (PVC)</option>
                      <option>Dakontmossing</option>
                      <option>Velux dakraam</option>
                      <option>Algemene karweien</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Beschrijving</label>
                    <textarea name="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Geef een korte omschrijving van het probleem of de gewenste werken..."></textarea>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Foto upload (optioneel)</label>
                    <input name="photo" type="file" className="w-full bg-slate-50 border border-dashed border-slate-300 rounded-xl px-4 py-8 focus:outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2 flex items-start space-x-3 pt-2">
                    <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600" />
                    <span className="text-xs text-slate-500">Ik ga akkoord met de verwerking van mijn gegevens volgens de privacyverklaring.</span>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-600/20 flex items-center justify-center space-x-3 hover:bg-blue-700 transition-all transform hover:scale-[1.02]">
                      <span className="flex items-center space-x-3">
                        <Send size={24} />
                        <span>Verzend Offerteaanvraag</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
