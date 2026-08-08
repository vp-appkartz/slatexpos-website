import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

const DEFAULT_SEO = {
  siteName: 'SlateX POS',
  defaultTitle: 'Cloud Android Restaurant POS System Canada | SlateX POS',
  defaultDescription:
    "SlateX is Canada's premier Android restaurant POS system featuring zero mandatory hardware lock-in, wholesale payment processing rates, unbreakable offline reliability, built-in enterprise features, and zero-commission online ordering.",
  canonicalBase: 'https://slatexpos.com',
  defaultOgImage: 'https://slatexpos.com/images/og-main.jpg',
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}) => {
  const pageTitle = title ? `${title} | SlateX POS` : DEFAULT_SEO.defaultTitle;
  const pageDescription = description || DEFAULT_SEO.defaultDescription;
  const pageUrl = `${DEFAULT_SEO.canonicalBase}${path}`;
  const ogImage = image || DEFAULT_SEO.defaultOgImage;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
