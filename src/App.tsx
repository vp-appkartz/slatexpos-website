import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Public pages
import ComingSoon from "./components/pages/ComingSoon";
import ScrollToTop from "./components/Common/ScrollToTop";

import Header from "./components/Common/Header";
import Hero from "./components/Home/Hero";
import Contact from "./components/Common/CTA";
import Footer from "./components/Common/Footer";
import ScrollSection from "./components/Home/ScrollSection";
import IndustriesGrid from "./components/Home/IndustriesGrid";
import FreeTrial from "./components/Common/BlackSection";
import Testimonials from "./components/Common/Testimonials";
import Hardware from "./components/Common/Hardware";
import FAQSection from "./components/Common/Faq";
import ScrollFab from "./components/Common/ScrollFab";
import Industries from "./components/pages/Ind";
import Pricing from "./components/pages/Pricing";
import DynamicProductPage from "./components/pages/Products";
import DynamicCategoryPage from "./components/pages/Category";
import HardwarePage from "./components/pages/Hardware";
import BlogList from "./components/pages/BlogList";
import BlogDetails from "./components/pages/BlogDetails";
import Privacy from "./components/pages/Privacy";
import Career from "./components/pages/Career";

import { DemoModalProvider } from "./contexts/DemoModalContext";

// ── Route-aware shell ────────────────────────────────────────────────────────
const AppContent = () => {
  return (
    <div>
      <Routes>
        {/* ── Public Routes ── */}
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <Hero />
              <ScrollSection />
              <IndustriesGrid />
              <Hardware />
              <FreeTrial
                title="Your POS Should Work for You. Not the Other Way Around."
                description="Restaurants across Canada are stuck paying for bloated systems that require $3,000 hardware purchases, lock them into iPads, and charge extra for every feature you actually need. SlateX is different. We built a cloud-based Android POS that runs on the devices you already own, stays on when your internet goes down, and includes every feature — from Caller ID to AI-powered promotions — in one straightforward monthly subscription. No hardware invoice. No surprises. No compromises."
              />
              <Testimonials />
              <FAQSection />
              <Contact />
              <Footer />
            </div>
          }
        />

        <Route
          path="/industries"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <Industries />
              <Footer />
            </div>
          }
        />

        <Route
          path="/pricing"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <Pricing />
              <Footer />
            </div>
          }
        />

        <Route
          path="/products/:slug"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <DynamicProductPage />
              <Footer />
            </div>
          }
        />

        <Route
          path="/categories/:slug"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <DynamicCategoryPage />
              <Footer />
            </div>
          }
        />

        <Route
          path="/hardware"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <HardwarePage />
              <Footer />
            </div>
          }
        />

        <Route
          path="/blog"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <BlogList />
              <Footer />
            </div>
          }
        />

        <Route
          path="/blog/:slug"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <BlogDetails />
              <Footer />
            </div>
          }
        />

        <Route
          path="/privacy"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <Privacy />
              <Footer />
            </div>
          }
        />

        <Route
          path="/career"
          element={
            <div className="overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #fff8f3 0%, #f9f9fb 30%, #f3f0ff 62%, #f9f9fb 82%, #fff8f3 100%)' }}>
              <Header />
              <Career />
              <Footer />
            </div>
          }
        />

        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* ── Any unknown URL → Not Found / Replace with / for now ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

// ── Root app ─────────────────────────────────────────────────────────────────
function App() {
  return (
    <DemoModalProvider>
      <Toaster position="top-center" />
      <Router>
        <ScrollToTop />
        <ScrollFab />
        <AppContent />
      </Router>
    </DemoModalProvider>
  );
}

export default App;
