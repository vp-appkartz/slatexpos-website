// DynamicProductPage.tsx - Main dynamic product page component

import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import HeroSection from '../Common/HeroSection';
import NumberSpeaks from '../Common/StatData';
import KeyFeatures from '../Common/KeyFeature';
import BlackCardSection from '../Common/BlackCard';
import Hardware from '../Common/Hardware';
import BlackSection from '../Common/BlackSection';
import Testimonial from '../Common/Testimonials';
import Contact from '../Common/CTA';
import { getProductData as getStaticProductData, ProductPageData } from '../../Data/productData';
import { subscribeToProductData, subscribeToHeroPageData } from '../../services/firestoreService';
import FAQSection from '../Common/Faq';

import ScrollSection from '../Home/ScrollSection';
import SEO from '../Common/SEO';
import { Zap, Monitor, CreditCard, BarChart3, Users, Utensils, Clock, Coffee, ChefHat, Globe, TrendingUp, LayoutDashboard, Heart } from 'lucide-react';

// Icon mapping helper for product scroll section
const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Zap': <Zap className="w-4 h-4" />,
    'Monitor': <Monitor className="w-4 h-4" />,
    'CreditCard': <CreditCard className="w-4 h-4" />,
    'BarChart3': <BarChart3 className="w-4 h-4" />,
    'Users': <Users className="w-4 h-4" />,
    'Utensils': <Utensils className="w-4 h-4" />,
    'Clock': <Clock className="w-4 h-4" />,
    'Coffee': <Coffee className="w-4 h-4" />,
    'ChefHat': <ChefHat className="w-4 h-4" />,
    'Globe': <Globe className="w-4 h-4" />,
    'TrendingUp': <TrendingUp className="w-4 h-4" />,
    'LayoutDashboard': <LayoutDashboard className="w-4 h-4" />,
    'Heart': <Heart className="w-4 h-4" />,
  };
  return iconMap[iconName] || <Utensils className="w-4 h-4" />;
};

const DynamicProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [productData, setProductData] = React.useState<ProductPageData | null>(() => {
    return slug ? getStaticProductData(slug) : null;
  });

  /* Shared Data State */
  const [sharedData, setSharedData] = React.useState<any>(null);

  useEffect(() => {
    // Subscribe to Hero/Global data for shared sections
    // Ensure subscribeToHeroPageData is imported
    const unsubscribeHero = subscribeToHeroPageData((docData) => {
      if (docData) {
        setSharedData(docData);
      }
    });
    return () => unsubscribeHero();
  }, []);

  useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    el.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    if (!slug) return;

    // Load static data first
    const staticData = getStaticProductData(slug);
    setProductData(staticData);

    // Subscribe to Firebase updates
    const unsubscribe = subscribeToProductData(slug, (liveData) => {
      if (liveData) {
        setProductData(prev => {
          const baseData = staticData || prev || {} as ProductPageData;
          return {
            ...baseData,
            ...liveData,
            meta: {
              ...baseData.meta,
              ...liveData.meta
            },
            heroSection: {
              ...baseData.heroSection,
              ...liveData.heroSection
            },
            scrollSection: {
              ...baseData.scrollSection,
              ...liveData.scrollSection
            },
            keyFeatures: {
              ...baseData.keyFeatures,
              ...liveData.keyFeatures
            },
            blackCardSection: {
              ...baseData.blackCardSection,
              ...liveData.blackCardSection
            },
            faqSection: {
              ...baseData.faqSection,
              ...liveData.faqSection
            }
          } as ProductPageData;
        });
      }
    });

    return () => unsubscribe();
  }, [slug]);

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Transform product scroll section data to ScrollSection component format
  const transformScrollSectionData = () => {
    if (!productData.scrollSection) return undefined;

    return {
      heroTitle: productData.scrollSection.heroTitle,
      heroSubtitle: productData.scrollSection.heroSubtitle,
      sections: (productData.scrollSection.sections || []).filter(Boolean).map(section => ({
        ...section,
        icon: getIcon(section.icon || '')
      }))
    };
  };

  const scrollSectionData = transformScrollSectionData();



  return (
    <>
      <SEO
        title={productData.meta?.title || productData.heroSection?.title || ''}
        description={productData.meta?.description || productData.heroSection?.description || ''}
        keywords={productData.meta?.keywords}
      />
      <HeroSection
        title={productData.heroSection?.title || ''}
        description={productData.heroSection?.description || ''}
        buttonText={productData.heroSection?.buttonText || ''}
        mainImage={productData.heroSection?.mainImage || ''}
        mainImageAlt={productData.heroSection?.mainImageAlt || ''}
        deviceImage={productData.heroSection?.deviceImage}
        deviceImageAlt={productData.heroSection?.deviceImageAlt}
        deviceTitle={productData.heroSection?.deviceTitle}
        deviceDescription={productData.heroSection?.deviceDescription}
        backgroundText={productData.heroSection?.backgroundText || ''}
        backgroundImage={productData.heroSection?.backgroundImage}
      />

      {productData.numberSpeaks && (
        <NumberSpeaks
          title={productData.numberSpeaks.title}
          subtitle={productData.numberSpeaks.subtitle}
          stats={productData.numberSpeaks.stats}
        />
      )}

      {/* Conditionally render ScrollSection only if product has scroll section data */}
      {scrollSectionData && (
        <ScrollSection
          heroTitle={scrollSectionData.heroTitle}
          heroSubtitle={scrollSectionData.heroSubtitle}
          sections={scrollSectionData.sections}
          onButtonClick={(sectionId) => {
            // Add your custom button click logic here if needed
            console.log(`Button clicked for section: ${sectionId}`);
          }}
        />
      )}

      <KeyFeatures
        heading={productData?.keyFeatures?.heading}
        subheading={productData?.keyFeatures?.subheading}
        features={productData?.keyFeatures?.features}
        maxW={productData?.keyFeatures?.maxW}
      />
      {productData.blackCardSection && (
        <BlackCardSection
          heading={productData.blackCardSection.heading}
          subheading={productData.blackCardSection.subheading}
          items={productData.blackCardSection.items}
        />
      )}

      <Hardware
        title={sharedData?.hardware?.title}
        subtitle={sharedData?.hardware?.subtitle}
      />

      <BlackSection
        title={sharedData?.blackSection?.title}
        description={sharedData?.blackSection?.description}
        buttonText={sharedData?.blackSection?.buttonText}
        imageSrc={sharedData?.blackSection?.imageSrc}
        trustIndicators={sharedData?.blackSection?.trustIndicators}
      />

      <Testimonial
        title={sharedData?.testimonials?.title}
        subtitle={sharedData?.testimonials?.subtitle}
        items={sharedData?.testimonials?.items}
      />

      {productData.faqSection && (
        <FAQSection
          faqs={productData.faqSection.faqs?.slice(0, 5)}
        />
      )}
      <Contact
        title={sharedData?.cta?.title}
        description={sharedData?.cta?.description}
        image={sharedData?.cta?.image}
      />
    </>
  );
};

export default DynamicProductPage;