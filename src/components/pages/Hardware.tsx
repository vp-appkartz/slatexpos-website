import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import HeroSection from "../Common/HeroSection";
import NumberSpeaks from "../Common/StatData";
import IndustrySection from "../Common/Features";
import KeyFeatures from "../Common/KeyFeature";
import BlackCardSection from "../Common/BlackCard";
import Hardware from "../Common/Hardware";
import BlackSection from "../Common/BlackSection";
import Testimonial from "../Common/Testimonials";
import Contact from "../Common/CTA";
import FAQSection from "../Common/Faq";
import { hardwareData } from "../../Data/hardwareData";
import ScrollSection from "../Home/ScrollSection";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import SEO from "../Common/SEO";

const HardwarePage: React.FC = () => {

  const transformedSections = hardwareData.productSections.map((product, index) => {
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
      id: (index + 1).toString(),
      icon: icon,
      title: product.title,
      subtitle: product.title,
      description: product.description,
      stat: '',
      statDescription: '',
      bgColor: 'bg-gray-500',
      bgGradient: 'from-gray-400 to-gray-600',
      buttonText: product.buttonText,
      imageSrc: product.image,
      imageAlt: product.imageAlt || product.title,
      bulletPoints: [] // Hardware products don't have bullet points
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
        title={hardwareData.heroSection.title}
        description={hardwareData.heroSection.description}
        buttonText={hardwareData.heroSection.buttonText}
        mainImage={hardwareData.heroSection.mainImage}
        mainImageAlt={hardwareData.heroSection.mainImageAlt}
        deviceImageAlt={hardwareData.heroSection.deviceImageAlt}
        deviceTitle={hardwareData.heroSection.deviceTitle}
        deviceDescription={hardwareData.heroSection.deviceDescription}
        backgroundText={hardwareData.heroSection.backgroundText}
        backgroundImage={hardwareData.heroSection.backgroundImage}
      />

      <ScrollSection
        heroTitle={hardwareData.featuresIntro?.title}
        heroSubtitle={hardwareData.featuresIntro?.subtitle}
        sections={transformedSections}
        onButtonClick={(sectionId) => {
          console.log(`Hardware section ${sectionId} button clicked`);
          // Add your click handler logic here
        }}
      />

      <KeyFeatures
        heading={hardwareData.keyFeatures.heading}
        subheading={hardwareData.keyFeatures.subheading}
        features={hardwareData.keyFeatures.features}
      />

      <Hardware />
      <BlackSection
        title={
          <span style={{ lineHeight: 1.3 }}>
            Compact&nbsp;Restaurant<br />POS Hardware
          </span>
        }
        description="The SlateX POS Compact is an all-in-one POS system with a terminal and customer display, designed for efficiency in space-limited environments. Perfect for restaurants, it enables faster order processing and smooth customer interactions, helping to keep lines moving."
        trustIndicators={[]}
      />
      <Testimonial />
      <Contact />
      <FAQSection faqs={hardwareData.faqSection.faqs} />
    </>
  );
};

export default HardwarePage;
