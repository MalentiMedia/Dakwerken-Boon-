
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
      <div className="text-center space-y-8 px-6">
        <h1 className="text-9xl font-black text-slate-200">404</h1>
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-slate-900">Pagina niet gevonden</h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            Het lijkt erop dat de pagina die u zoekt niet (meer) bestaat.
          </p>
        </div>
        <Link to="/" className="inline-flex items-center space-x-3 bg-[#00458b] text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-orange-500 transition-all shadow-xl shadow-blue-900/20">
          <Home size={22} />
          <span>Terug naar Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
