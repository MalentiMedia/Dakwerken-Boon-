
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_DETAILS } from '../constants';
import { MapPin, Phone, Smartphone, Mail, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-400">PASCAL BOON</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">Dakwerken</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Uw betrouwbare partner voor alle dakwerken in Aalst en omstreken. Kwaliteit, snelheid en een eerlijke prijs staan bij ons centraal.
            </p>
            <div className="flex items-center space-x-2 text-yellow-400">
              <span className="font-bold">5.0</span>
              <div className="flex">{"★★★★★".split("").map((s,i) => <span key={i}>{s}</span>)}</div>
              <span className="text-slate-400 text-xs">(3 Google reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Diensten</h4>
            <ul className="space-y-2">
              {['Dakherstellingen', 'Karweien & klusjes', 'Platte daken', 'Hellende daken', 'Dakontmossing'].map(item => (
                <li key={item}>
                  <Link to="/diensten" className="text-slate-400 hover:text-blue-400 text-sm flex items-center transition-colors">
                    <CheckCircle2 size={14} className="mr-2 text-blue-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contacteer ons</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                <span>{BUSINESS_DETAILS.location}</span>
              </div>
              
              {/* Vaste Telefoon */}
              <a href={`tel:${BUSINESS_DETAILS.phoneRaw}`} className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors text-sm group">
                <div className="bg-blue-500/10 p-1.5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="text-blue-500 flex-shrink-0" size={16} />
                </div>
                <span>{BUSINESS_DETAILS.phone} <span className="text-[10px] text-slate-500 uppercase font-bold ml-1">(Vaste telefoon)</span></span>
              </a>

              {/* Gsm / Telefoon */}
              <a href={`tel:${BUSINESS_DETAILS.mobileRaw}`} className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors text-sm group">
                <div className="bg-blue-500/10 p-1.5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Smartphone className="text-blue-500 flex-shrink-0" size={16} />
                </div>
                <span>{BUSINESS_DETAILS.mobile} <span className="text-[10px] text-slate-500 uppercase font-bold ml-1">(Telefoon)</span></span>
              </a>

              <div className="flex items-center space-x-3 text-slate-400 text-sm group">
                <div className="bg-blue-500/10 p-1.5 rounded-lg">
                  <Mail className="text-blue-500 flex-shrink-0" size={16} />
                </div>
                <span>{BUSINESS_DETAILS.email}</span>
              </div>
            </div>
          </div>

          {/* Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Werkregio</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Wij zijn actief in heel Oost-Vlaanderen met focus op de regio Aalst, waaronder:
            </p>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_DETAILS.regions.map(r => (
                <span key={r} className="bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded-md uppercase font-semibold">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-6 md:space-y-0 text-center md:text-left">
          <div className="flex flex-col space-y-1">
            <p>&copy; {new Date().getFullYear()} Pascal Boon Dakwerken. Alle rechten voorbehouden.</p>
            <p className="text-slate-600">Website gebouwd door <span className="text-slate-400 hover:text-blue-400 transition-colors">Malenti</span></p>
          </div>
          <div className="flex flex-col md:items-end space-y-2">
            <div className="space-x-4">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacybeleid</Link>
              <span className="text-slate-400">BTW BE0719164334</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
