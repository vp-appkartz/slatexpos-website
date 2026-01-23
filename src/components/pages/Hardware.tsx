import React from "react";
import HeroSection from "../Common/HeroSection";
import KeyFeatures from "../Common/KeyFeature";
import Hardware from "../Common/Hardware";
import BlackSection from "../Common/BlackSection";
import Testimonial from "../Common/Testimonials";
import Contact from "../Common/CTA";
import FAQSection from "../Common/Faq";
import { useHardwarePage } from "../../contexts/HardwarePageContext";
import ScrollSection from "../Home/ScrollSection";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import SEO from "../Common/SEO";

const HardwarePage: React.FC = () => {
  const { data } = useHardwarePage();

  const transformedSections = data.productSections.map((product, index) => {
    // Assign icons based on product type
    let icon;
    if (product.title.includes('Station')) {
      icon = <Monitor className="w-4 h-4" />;
    } else if (product.title.includes('Tab')) {
      icon = <Tablet className="w-4 h-4" />;
    } else if (product.title.includes('Go')) {
      icon = <Smartphone className="w-4 h-4" />;
    } else {
      icon = <Monitor className="w-4 h-4" />;
    }

    return {
      id: product.id || (index + 1).toString(),
      icon: icon,
      title: product.title,
      subtitle: product.subtitle || product.title,
      description: product.description,
      stat: '',
      statDescription: '',
      bgColor: product.bgColor || 'bg-gray-500',
      bgGradient: product.bgGradient || 'from-gray-400 to-gray-600',
      buttonText: product.buttonText,
      imageSrc: product.image,
      imageAlt: product.imageAlt || product.title,
      bulletPoints: product.bulletPoints || []
    };
  });
  return (
    <>
      <SEO
        title="POS Hardware Systems | SlateX"
        description="Explore our range of durable and sleek POS hardware including terminals, tablets, and handhelds."
        keywords="POS hardware, payment terminals, card readers, POS tablets"
      />
      <HeroSection
        title={data.heroSection.title}
        description={data.heroSection.description}
        buttonText={data.heroSection.buttonText}
        mainImage={data.heroSection.mainImage}
        mainImageAlt={data.heroSection.mainImageAlt}
        deviceImage={data.heroSection.deviceImage || ''}
        deviceImageAlt={data.heroSection.deviceImageAlt}
        deviceTitle={data.heroSection.deviceTitle}
        deviceDescription={data.heroSection.deviceDescription}
        backgroundText={data.heroSection.backgroundText}
        backgroundImage={data.heroSection.backgroundImage}
      />

      <ScrollSection
        heroTitle={data.featuresIntro?.title}
        heroSubtitle={data.featuresIntro?.subtitle}
        sections={transformedSections}
        onButtonClick={(sectionId) => {
          console.log(`Hardware section ${sectionId} button clicked`);
          // Add your click handler logic here
        }}
      />

      <KeyFeatures
        heading={data.keyFeatures.heading}
        subheading={data.keyFeatures.subheading}
        features={data.keyFeatures.features}
      />

      <Hardware
        title={data.hardwareShowcase?.title}
        subtitle={data.hardwareShowcase?.subtitle}
        items={data.hardwareShowcase?.items}
      />

      <BlackSection
        title={
          data.blackSection.title
        }
        description={data.blackSection.description}
        trustIndicators={data.blackSection.trustIndicators}
        buttonText={data.blackSection.buttonText}
        imageSrc={data.blackSection.imageSrc}
      />

      <Testimonial
        items={data.testimonials?.items}
        title={data.testimonials?.title}
        subtitle={data.testimonials?.subtitle}
      />
      <Contact />
      <FAQSection faqs={data.faqSection.faqs} />
    </>
  );
};

export default HardwarePage;
