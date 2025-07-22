import React from 'react'
import PricingComponent from '../pricing/TopSection'
import ComparePlanComponent from '../pricing/ComparePlan'
import Hardware from '../Common/Hardware'
import FreeTrial from '../Common/BlackSection'
import Contact from '../Common/CTA'
import Testimonials from '../Common/Testimonials';

function Pricing() {
  return (
    <>
    <PricingComponent />
    <ComparePlanComponent />
    <Hardware />
    <Testimonials />
    <Contact />
    </>
  )
}

export default Pricing