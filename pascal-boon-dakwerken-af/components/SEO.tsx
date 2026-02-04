
import React from 'react';
import { BUSINESS_DETAILS } from '../constants';

const SEO: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": BUSINESS_DETAILS.name,
    "image": "https://picsum.photos/seed/daklogo/400/400",
    "telephone": BUSINESS_DETAILS.phone,
    "url": window.location.origin,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ajuinenstraat 17",
      "addressLocality": "Aalst",
      "postalCode": "9300",
      "addressRegion": "Oost-Vlaanderen",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.9383,
      "longitude": 4.0392
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_DETAILS.rating.toString(),
      "reviewCount": BUSINESS_DETAILS.reviewCount.toString()
    },
    "areaServed": BUSINESS_DETAILS.regions.map(r => ({
      "@type": "City",
      "name": r
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SEO;
