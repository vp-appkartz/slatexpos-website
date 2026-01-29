import React, { useState, useEffect } from 'react'
import PricingComponent from '../pricing/TopSection'
import ComparePlanComponent from '../pricing/ComparePlan'
import Hardware from '../Common/Hardware'
import FreeTrial from '../Common/BlackSection'
import Contact from '../Common/CTA'
import Testimonials from '../Common/Testimonials';
import SEO from '../Common/SEO';
import { subscribeToHeroPageData } from '../../services/firestoreService';

function Pricing() {
  const [sharedData, setSharedData] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = subscribeToHeroPageData((docData) => {
      if (docData) {
        setSharedData(docData);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Choose the perfect SlateX POS plan for your business. Transparent pricing with no hidden fees."
        keywords="POS pricing, restaurant POS cost, retail POS price"
      />
      <PricingComponent />
      <ComparePlanComponent />
      <Hardware
        title={sharedData?.hardware?.title}
        subtitle={sharedData?.hardware?.subtitle}
        items={sharedData?.hardware?.items}
      />
      <Testimonials
        title={sharedData?.testimonials?.title}
        subtitle={sharedData?.testimonials?.subtitle}
        items={sharedData?.testimonials?.items}
      />
      <Contact
        title={sharedData?.cta?.title}
        description={sharedData?.cta?.description}
        image={sharedData?.cta?.image}
      />
    </>
  )
}

export default Pricing