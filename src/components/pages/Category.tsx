import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Zap, Monitor, CreditCard, BarChart3, Users, Utensils, Clock, Coffee, ChefHat } from 'lucide-react';
import HeroSection from '../Common/HeroSection';
import NumberSpeaks from '../Common/StatData';
import KeyFeatures from '../Common/KeyFeature';
import BlackCardSection from '../Common/BlackCard';
import Hardware from '../Common/Hardware';
import BlackSection from '../Common/BlackSection';
import Testimonial from '../Common/Testimonials';
import Contact from '../Common/CTA';
import { getCategoryData } from '../../Data/categoryData';
import FAQSection from '../Common/Faq';
import ScrollSection from '../Home/ScrollSection';
import SEO from '../Common/SEO';

// Icon mapping helper
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
  };
  return iconMap[iconName] || <Utensils className="w-4 h-4" />;
};

const DynamicCategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/" replace />;

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

  // Transform category scroll section data to ScrollSection component format
  const transformScrollSectionData = () => {
    if (!categoryData.scrollSection) return undefined;

    return {
      heroTitle: categoryData.scrollSection.heroTitle,
      heroSubtitle: categoryData.scrollSection.heroSubtitle,
      sections: categoryData.scrollSection.sections.map(section => ({
        ...section,
        icon: getIcon(section.icon)
      }))
    };
  };

  const scrollSectionData = transformScrollSectionData();

  return (
    <>
      <SEO
        title={categoryData.meta?.title || categoryData.heroSection.title}
        description={categoryData.meta?.description || categoryData.heroSection.description}
        keywords={categoryData.meta?.keywords}
      />
      <HeroSection
        title={categoryData.heroSection.title}
        description={categoryData.heroSection.description}
        buttonText={categoryData.heroSection.buttonText || "Let's Connect"}
        mainImage={categoryData.heroSection.mainImage}
        mainImageAlt={categoryData.heroSection.mainImageAlt || "Hero Image"}
        deviceImage={categoryData.heroSection.deviceImage || ""}
        deviceImageAlt={categoryData.heroSection.deviceImageAlt || ""}
        deviceTitle={categoryData.heroSection.deviceTitle || ""}
        deviceDescription={categoryData.heroSection.deviceDescription || ""}
        backgroundText={categoryData.heroSection.backgroundText || ""}
        backgroundImage={categoryData.heroSection.backgroundImage || ""}
      />

      <NumberSpeaks
        title={categoryData.numberSpeaks.title}
        subtitle={categoryData.numberSpeaks.subtitle}
        stats={categoryData.numberSpeaks.stats}
      />

      {/* ScrollSection: Always render if present in category data, otherwise don't render default home scroll */}
      {scrollSectionData && (
        <ScrollSection
          heroTitle={scrollSectionData.heroTitle}
          heroSubtitle={scrollSectionData.heroSubtitle}
          sections={scrollSectionData.sections}
        />
      )}

      {categoryData.keyFeatures && (
        <KeyFeatures
          heading={categoryData.keyFeatures.heading}
          subheading={categoryData.keyFeatures.subheading}
          features={categoryData.keyFeatures.features}
        />
      )}

      {categoryData.blackCardSection && (
        <BlackCardSection
          heading={categoryData.blackCardSection.heading}
          subheading={categoryData.blackCardSection.subheading}
          items={categoryData.blackCardSection.items}
        />
      )}

      <Hardware
        title={categoryData.hardwareSection?.title}
        subtitle={categoryData.hardwareSection?.subtitle}
        items={categoryData.hardwareSection?.items}
      />

      <BlackSection
        title={categoryData.promoSection?.title}
        description={categoryData.promoSection?.description}
        buttonText={categoryData.promoSection?.buttonText}
        imageSrc={categoryData.promoSection?.imageSrc}
        imageAlt={categoryData.promoSection?.imageAlt}
        trustIndicators={categoryData.promoSection?.trustIndicators}
      />

      <Testimonial
        title={categoryData.testimonialSection?.title}
        subtitle={categoryData.testimonialSection?.subtitle}
        items={categoryData.testimonialSection?.items}
      />

      <FAQSection faqs={categoryData.faqSection?.faqs} />
      <Contact
        title={categoryData.ctaSection?.title}
        description={categoryData.ctaSection?.description}
        image={categoryData.ctaSection?.image}
      />
    </>
  );
};

export default DynamicCategoryPage;