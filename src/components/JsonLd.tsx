import React from 'react';

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Kule Mevlana Samsun",
    "description": "Samsun Atakum'da kişiye özel butik pasta tasarımı, taze fırın ürünleri, ekler ve artisan lezzetler sunan premium pastane.",
    "image": "https://kulemevlanasamsun.vercel.app/images/hero-vertical.webp",
    "@id": "https://kulemevlanasamsun.vercel.app",
    "url": "https://kulemevlanasamsun.vercel.app",
    "telephone": "+905309351955",
    "servesCuisine": "Turkish, Bakery, Pastries",
    "priceRange": "₺₺",
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
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "07:00",
      "closes": "23:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    },
    "subOrganization": [
      {
        "@type": "Bakery",
        "name": "Kule Mevlana Balaç Şubesi",
        "address": "Beypınar Mah. Elbistan Bulv. No: 24/A, Atakum / Samsun"
      },
      {
        "@type": "Bakery",
        "name": "Kule Mevlana Türkiş Şubesi",
        "address": "Mevlana Mah. 742. Sk. No: 2, Atakum / Samsun"
      },
      {
        "@type": "Bakery",
        "name": "Kule Mevlana Ömürevleri Şubesi",
        "address": "Cumhuriyet Mah. İsmet İnönü Bulv. No: 306, Atakum / Samsun"
      }
    ],
    "hasMenu": "https://kulemevlanasamsun.vercel.app/#menu",
    "sameAs": [
      "https://instagram.com/kulemevlana",
      "https://www.facebook.com/kulemevlana"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
