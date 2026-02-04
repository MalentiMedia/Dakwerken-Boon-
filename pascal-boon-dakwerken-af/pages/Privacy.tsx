
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-20">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Privacyverklaring</h1>
        <div className="prose prose-slate lg:prose-lg leading-relaxed text-slate-600 space-y-6">
          <p>Pascal Boon Dakwerken hecht grote waarde aan uw privacy en de bescherming van uw persoonsgegevens.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 pt-4">1. Verzamelde gegevens</h2>
          <p>Wanneer u gebruik maakt van ons offerteformulier, verzamelen we de volgende gegevens: naam, e-mailadres, telefoonnummer, gemeente en informatie over de gewenste werken.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 pt-4">2. Doel van de verwerking</h2>
          <p>Wij gebruiken deze gegevens uitsluitend om u te kunnen contacteren in het kader van uw aanvraag en voor het opstellen van een correcte offerte. Wij verkopen uw gegevens nooit aan derden.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 pt-4">3. Bewaartermijn</h2>
          <p>Gegevens worden niet langer bewaard dan noodzakelijk voor de uitvoering van onze diensten en het voldoen aan wettelijke verplichtingen.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 pt-4">4. Cookies</h2>
          <p>Onze website maakt enkel gebruik van functionele en analytische cookies om uw gebruikservaring te verbeteren. Deze verzamelen geen identificeerbare informatie.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 pt-4">5. Uw rechten</h2>
          <p>U heeft op elk moment het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact op via onze contactpagina.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
