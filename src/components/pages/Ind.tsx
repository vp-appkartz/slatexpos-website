import FastCasualSection from '../industries/hero'
import SEO from '../Common/SEO'

import ResultsSection from '../Common/BlackCard'
import Testimonial from '../Common/Testimonials'
import Contact from '../Common/CTA'

function Ind() {
  return (
    <>
      <SEO
        title="Industries We Serve | SlateX POS"
        description="Discover how SlateX POS tailors solutions for various industries including QSR, Pizzeria, Cafe, and more."
        keywords="restaurant POS, retail POS, QSR POS, pizzeria POS, cafe POS"
      />
      <FastCasualSection />

      <ResultsSection />
      <Testimonial />
      <Contact />
    </>
  )
}

export default Ind;