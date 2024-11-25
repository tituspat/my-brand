// components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "DigiAgency - Jasa Pembuatan Website Professional",
  description = "Jasa pembuatan website professional dengan teknologi modern. Spesialis dalam pengembangan website custom, company profile, e-commerce dan sistem informasi.",
  keywords = "jasa pembuatan website, web development, website custom, company profile, landing page, sistem informasi",
  image = "/og-image.jpg", // Tambahkan OpenGraph image
  url = "https://example.com"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DigiAgency",
            "url": "${url}",
            "description": "${description}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${url}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>

      {/* Local Business Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DigiAgency",
            "image": "${image}",
            "description": "${description}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Teknik Kimia",
              "addressLocality": "Surabaya",
              "addressRegion": "Jawa Timur",
              "postalCode": "60111",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-7.2754438",
              "longitude": "112.7891267"
            },
            "url": "${url}",
            "telephone": "+62895414874614",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;