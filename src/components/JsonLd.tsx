import React from 'react';

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Kule Mevlana Samsun",
    "image": "https://kulemevlanasamsun.vercel.app/images/hero-vertical.webp",
    "@id": "https://kulemevlanasamsun.vercel.app",
    "url": "https://kulemevlanasamsun.vercel.app",
    "telephone": "+905309351955",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alaçam Caddesi, No: 218A",
      "addressLocality": "Atakum",
      "addressRegion": "Samsun",
      "postalCode": "55200",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.328,
      "longitude": 36.265
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "23:00"
    },
    "sameAs": [
      "https://instagram.com/kulemevlana",
      "https://www.facebook.com/kulemevlana"
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
