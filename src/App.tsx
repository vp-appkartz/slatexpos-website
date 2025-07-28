import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Hero from './components/Home/Hero';
import Contact from './components/Common/CTA';
import Footer from './components/Common/Footer';
import ScrollSection from './components/Home/ScrollSection';
import FreeTrial from './components/Common/BlackSection';
import Testimonials from './components/Common/Testimonials';
import Hardware from './components/Common/Hardware';
import Industries from './components/pages/Ind';
import Pricing from './components/pages/Pricing';
import DynamicProductPage from './components/pages/Products';
import DynamicCategoryPage from './components/pages/Category';
import ScrollToTop from './components/Common/ScrollToTop';
import HardwarePage from './components/pages/Hardware';

function App() {
  return (
    <Router>
      {/* ScrollToTop must be inside Router but outside Routes */}
      <ScrollToTop />
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ScrollSection />
              <Hardware />
              <FreeTrial
                title='Why Choose SlateX POS?'
                description='Switch to SlateX POS for a flexible, all‑in‑one solution: tweak menus and taxes on the fly, and leverage built‑in tools like gift cards, loyalty programs, and seamless payment processing. SlateX adapts as you grow, so you can focus on delighting customers and boosting profits.'
              />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products/:slug" element={<DynamicProductPage />} />
          <Route path="/categories/:slug" element={<DynamicCategoryPage />} />
          <Route path ="/hardware" element= {<HardwarePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
