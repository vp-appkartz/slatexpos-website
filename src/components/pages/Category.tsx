import React from 'react';
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
import { getCategoryData } from '../../Data/categoryData';
import FAQSection from '../Common/Faq';

const DynamicCategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const categoryData = getCategoryData(slug);

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
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
        title={categoryData.heroSection.title}
        description={categoryData.heroSection.description}
        buttonText={categoryData.heroSection.buttonText}
        mainImage={categoryData.heroSection.mainImage}
        mainImageAlt={categoryData.heroSection.mainImageAlt}
        deviceImage={categoryData.heroSection.deviceImage}
        deviceImageAlt={categoryData.heroSection.deviceImageAlt}
        deviceTitle={categoryData.heroSection.deviceTitle}
        deviceDescription={categoryData.heroSection.deviceDescription}
        backgroundText={categoryData.heroSection.backgroundText}
        backgroundImage={categoryData.heroSection.backgroundImage}
      />

      <NumberSpeaks
        title={categoryData.numberSpeaks.title}
        subtitle={categoryData.numberSpeaks.subtitle}
        stats={categoryData.numberSpeaks.stats}
      />
      
      <IndustrySection
        title={categoryData.industrySection.title}
        subtitle={categoryData.industrySection.subtitle}
        features={categoryData.industrySection.features}
        stats={categoryData.industrySection.stats}
        ctaText={categoryData.industrySection.ctaText}
        imageSrc={categoryData.industrySection.imageSrc}
        imageAlt={categoryData.industrySection.imageAlt}
      />
      
      <KeyFeatures
        heading={categoryData.keyFeatures.heading}
        subheading={categoryData.keyFeatures.subheading}
        features={categoryData.keyFeatures.features}
      />
      
      {categoryData.blackCardSection && (
        <BlackCardSection
          heading={categoryData.blackCardSection.heading}
          subheading={categoryData.blackCardSection.subheading}
          items={categoryData.blackCardSection.items}
        />
      )}
     
      <Hardware />
      <BlackSection />
      <Testimonial />
      <Contact />
      <FAQSection />
    </>
  );
};

export default DynamicCategoryPage;