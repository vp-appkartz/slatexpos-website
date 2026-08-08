import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaProps {
  type: 'SoftwareApplication' | 'Organization';
  data?: Record<string, any>;
}

export const SchemaScript: React.FC<SchemaProps> = ({ type, data = {} }) => {
  let schemaData = {};

  if (type === 'SoftwareApplication') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'SlateX POS',
      'operatingSystem': 'Android',
      'applicationCategory': 'BusinessApplication',
      'description':
        'Cloud-based Android POS system for restaurants with wholesale payment processing rates, offline mode, built-in KDS, and direct zero-commission online ordering.',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'CAD',
        'description': 'Zero hardware lock-in cloud solution',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '120',
      },
      ...data,
    };
  } else if (type === 'Organization') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'SlateX POS',
      'url': 'https://slatexpos.com',
      'logo': 'https://slatexpos.com/images/logo.png',
      'sameAs': [
        'https://www.facebook.com/slatexpos',
        'https://www.linkedin.com/company/slatexpos',
      ],
      ...data,
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
