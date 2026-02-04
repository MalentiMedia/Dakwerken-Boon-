
import React from 'react';
import { Hammer, ShieldCheck, Clock, MapPin, Wrench, Droplets, Home, Layers, Construction, Sun } from 'lucide-react';
import { Service, Project, Review } from './types';

export const BUSINESS_DETAILS = {
  name: "Pascal Boon Dakwerken",
  phone: "053 77 37 45",
  phoneRaw: "053773745",
  mobile: "+32 473 48 87 97",
  mobileRaw: "+32473488797",
  email: "info@dakwerken-boon.be",
  location: "Ajuinenstraat 17, 9300 Aalst",
  rating: 5.0,
  reviewCount: 3,
  regions: ["Aalst", "Erembodegem", "Nieuwerkerken", "Lede", "Denderleeuw", "Wetteren", "Geraardsbergen"]
};

export const SERVICES: Service[] = [
  {
    id: 'herstellingen',
    title: 'Dakherstellingen & lekkages',
    description: 'Snelle noodinterventies bij lekken of stormschade. Wij verhelpen uw probleem direct en vakkundig.',
    icon: <Droplets className="w-6 h-6" />
  },
  {
    id: 'karweien',
    title: 'Karweien & klusjes',
    description: 'Ook voor kleinere dakgerelateerde werken en algemene karweien in de bouw kunt u op ons rekenen.',
    icon: <Hammer className="w-6 h-6" />
  },
  {
    id: 'platte-daken',
    title: 'Platte daken',
    description: 'Specialist in roofing en EPDM voor platte daken. 100% waterdicht en perfecte afwatering gegarandeerd.',
    icon: <Layers className="w-6 h-6" />
  },
  {
    id: 'hellende-daken',
    title: 'Hellende daken',
    description: 'Plaatsing en herstel van pannen of leien op hellende daken. Traditioneel vakmanschap met moderne technieken.',
    icon: <Home className="w-6 h-6" />
  },
  {
    id: 'goten',
    title: 'PVC-dakgoten',
    description: 'Vervanging of herstel van dakgoten. Wij plaatsen onderhoudsvriendelijke en duurzame PVC oplossingen.',
    icon: <Wrench className="w-6 h-6" />
  },
  {
    id: 'ontmossing',
    title: 'Dakontmossing',
    description: 'Verleng de levensduur van uw dak met een grondige reiniging. Uw dak ziet er weer als nieuw uit.',
    icon: <Sun className="w-6 h-6" />
  },
  {
    id: 'velux',
    title: 'Velux dakramen',
    description: 'Professionele plaatsing van dakramen voor meer licht en ventilatie op uw zolderverdieping.',
    icon: <Sun className="w-6 h-6" />
  }
];

/* 
  TIP VOOR AFBEELDINGEN (VERTICALE MODUS):
  - Formaat: 600x800 pixels (3:4 verhouding) werkt het beste.
  - Dit geeft een moderne, staande look aan uw projecten.
*/

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vervangen van kapotte dakpannen tegen lekkage',
    location: 'Aalst',
    description: 'Snelle herstelling van een complex daklek door het vakkundig vervangen van gebarsten pannen en het nakijken van het onderdak.',
    images: [
      /* --- PROJECT 1: Gebruik verticale foto's van +/- 600x800px --- */
      'https://i.imgur.com/K2KlHRH.jpeg$0',
    ]
  },
  {
    id: '2',
    title: 'Vernieuwen van een lichtkoepel',
    location: 'Erembodegem',
    description: 'Vervanging van een verouderde, matte lichtkoepel door een modern, hoogisolerend exemplaar voor meer natuurlijk licht en betere thermische isolatie.',
    images: [
      /* --- PROJECT 2: Gebruik verticale foto's van +/- 600x800px --- */
      'https://i.imgur.com/IX3tFBI.jpeg$0',
      'https://i.imgur.com/87fAGlF.jpeg$0',
      'https://i.imgur.com/TItesJv.jpeg$0'
    ]
  },
  {
    id: '3',
    title: 'Totaalrenovatie Plat Dak',
    location: 'Lede',
    description: 'Volledige vernieuwing van een plat dak. Verwijderen van oude ballast, plaatsen van PIR-isolatie en EPDM-folie.',
    images: [
      /* --- PROJECT 3: Gebruik verticale foto's van +/- 600x800px --- */
      'https://i.imgur.com/4j50dWY.jpeg$0',
      'https://i.imgur.com/mz7xDZ1.jpeg',
      'https://i.imgur.com/dmgvO0m.jpeg'
    ]
  },
  {
    id: '4',
    title: 'Dakontmossing & Coating',
    location: 'Denderleeuw',
    description: 'Grondige reiniging van een vervuild pannen dak, gevolgd door een beschermende coating. Het dak is weer als nieuw.',
    images: [
      /* --- PROJECT 4: Gebruik verticale foto's van +/- 600x800px --- */
      'https://i.imgur.com/uKQCuqr.jpeg$0',
      'https://i.imgur.com/wGmAnBE.jpeg$0',
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Jos Van Dorpe',
    rating: 5,
    text: 'Kon snel komen, probleem snel opgelost en correcte prijs. Een echte aanrader in de regio Aalst.'
  },
  {
    id: '2',
    name: 'Mieke Vanduffel',
    rating: 5,
    text: 'Snel geholpen bij een dringende herstelling na stormschade. Bedankt Pascal voor de goede service!'
  },
  {
    id: '3',
    name: 'Silvio Vanderspeeten',
    rating: 5,
    text: 'Vlotte persoon en goed werk geleverd. De afwerking van onze nieuwe dakgoten is perfect.'
  }
];

export const USPS = [
  { icon: <Clock className="w-5 h-5" />, text: "Binnen 24u contact bij lekken" },
  { icon: <ShieldCheck className="w-5 h-5" />, text: "Gecertificeerd vakmanschap" },
  { icon: <Hammer className="w-5 h-5" />, text: "Transparante prijzen vooraf" },
  { icon: <MapPin className="w-5 h-5" />, text: "Uw buurman-vakman in Aalst" }
];
