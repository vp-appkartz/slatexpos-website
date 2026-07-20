import React, { useState, useEffect } from 'react'
import PricingComponent from '../pricing/TopSection'
import ComparePlanComponent from '../pricing/ComparePlan'
import Hardware from '../Common/Hardware'
import FreeTrial from '../Common/BlackSection'
import Contact from '../Common/CTA'
import Testimonials from '../Common/Testimonials';
import SEO from '../Common/SEO';
function Pricing() {

  return (
    <>
      <SEO
        title="Pricing Plans"
        description="Choose the perfect SlateX POS plan for your business. Transparent pricing with no hidden fees."
        keywords="POS pricing, restaurant POS cost, retail POS price"
      />
      <PricingComponent />
      <ComparePlanComponent />
      <Hardware />
      <Testimonials />
      <FreeTrial />
      <Contact />
    </>
  )
}

export default Pricing