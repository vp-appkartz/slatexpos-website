// DynamicProductPage.tsx - Main dynamic product page component

import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import HeroSection from '../Common/HeroSection';
import NumberSpeaks from '../Common/StatData';
import IndustrySection from '../Common/Features';
import KeyFeatures from '../Common/KeyFeature';
import BlackCardSection from '../Common/BlackCard';
import Hardware from '../Common/Hardware';
import BlackSection from '../Common/BlackSection';
import Testimonial from '../Common/Testimonials';
import Contact from '../Common/CTA';
import { getProductData } from '../../Data/productData';
import FAQSection from '../Common/Faq';


const DynamicProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    el.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);
  
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const productData = getProductData(slug);

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={productData.heroSection.title}
        description={productData.heroSection.description}
        buttonText={productData.heroSection.buttonText}
        mainImage={productData.heroSection.mainImage}
        mainImageAlt={productData.heroSection.mainImageAlt}
        deviceImage={productData.heroSection.deviceImage}
        deviceImageAlt={productData.heroSection.deviceImageAlt}
        deviceTitle={productData.heroSection.deviceTitle}
        deviceDescription={productData.heroSection.deviceDescription}
        backgroundText={productData.heroSection.backgroundText}
        backgroundImage={productData.heroSection.backgroundImage}
      />
      
      <NumberSpeaks
        title={productData.numberSpeaks.title}
        subtitle={productData.numberSpeaks.subtitle}
        stats={productData.numberSpeaks.stats}
      />
      
      <IndustrySection
        title={productData.industrySection.title}
        subtitle={productData.industrySection.subtitle}
        features={productData.industrySection.features}
        stats={productData.industrySection.stats}
        ctaText={productData.industrySection.ctaText}
        imageSrc={productData.industrySection.imageSrc}
        imageAlt={productData.industrySection.imageAlt}
      />
      
      <KeyFeatures
        heading={productData.keyFeatures.heading}
        subheading={productData.keyFeatures.subheading}
        features={productData.keyFeatures.features}
      />
      {productData.blackCardSection && (
        <BlackCardSection
          heading={productData.blackCardSection.heading}
          subheading={productData.blackCardSection.subheading}
          items={productData.blackCardSection.items}
        />


      )}
     
      
      <Hardware />
      <BlackSection />
      <Testimonial />
      <Contact />
      <FAQSection
      faqs={productData.faqSection.faqs} />
    </>
  );
};

export default DynamicProductPage;