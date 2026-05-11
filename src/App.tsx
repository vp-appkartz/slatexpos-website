import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Public pages
import ComingSoon from './components/pages/ComingSoon';
import ScrollToTop from './components/Common/ScrollToTop';

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
import HardwarePage from './components/pages/Hardware';
import BlogList from './components/pages/BlogList';
import BlogDetails from './components/pages/BlogDetails';

// Admin imports
import { AuthProvider } from './contexts/AuthContext';
import { HardwarePageProvider } from './contexts/HardwarePageContext';
import { PricingProvider } from './contexts/PricingContext';
import AdminLogin from './components/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import AdminBlogList from './components/admin/BlogList';
import HeroEditor from './components/admin/HeroEditor';
import HardwarePageEditor from './components/admin/HardwarePageEditor';
import BlogForm from './components/admin/BlogForm';
import ProductEditor from './components/admin/products/ProductEditor';
import IndustryEditor from './components/admin/industries/IndustryEditor';
import PricingEditor from './components/admin/pricing/PricingEditor';
import FooterEditor from './components/admin/footer/FooterEditor';
import HeaderEditor from './components/admin/header/HeaderEditor';
import ContentApprovals from './components/admin/settings/ContentApprovals';
import ProtectedRoute from './components/admin/ProtectedRoute';

// ── Route-aware shell ────────────────────────────────────────────────────────
const AppContent = () => {

    return (
        <div>
            <Routes>
                {/* ── Public Routes ── */}
                <Route path="/" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <Hero />
                        <ScrollSection />
                        <Hardware />
                        <FreeTrial
                            title='Why Choose SlateX POS?'
                            description='Switch to SlateX POS for a flexible, all-in-one solution: tweak menus and taxes on the fly, and leverage built-in tools like gift cards, loyalty programs, and seamless payment processing. SlateX adapts as you grow, so you can focus on delighting customers and boosting profits.'
                        />
                        <Testimonials />
                        <Contact />
                        <Footer />
                    </div>
                } />

                <Route path="/industries" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <Industries />
                        <Footer />
                    </div>
                } />

                <Route path="/pricing" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <Pricing />
                        <Footer />
                    </div>
                } />

                <Route path="/products/:slug" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <DynamicProductPage />
                        <Footer />
                    </div>
                } />

                <Route path="/categories/:slug" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <DynamicCategoryPage />
                        <Footer />
                    </div>
                } />

                <Route path="/hardware" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <HardwarePage />
                        <Footer />
                    </div>
                } />

                <Route path="/blog" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <BlogList />
                        <Footer />
                    </div>
                } />

                <Route path="/blog/:slug" element={
                    <div className="overflow-x-hidden">
                        <Header />
                        <BlogDetails />
                        <Footer />
                    </div>
                } />

                <Route path="/coming-soon" element={<ComingSoon />} />

                {/* ── Admin routes — always accessible ── */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={
                    <ProtectedRoute>
                        <AdminLayout><Dashboard /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/hero" element={
                    <ProtectedRoute>
                        <AdminLayout><HeroEditor /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/footer" element={
                    <ProtectedRoute>
                        <AdminLayout><FooterEditor /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/header" element={
                    <ProtectedRoute>
                        <AdminLayout><HeaderEditor /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/hardware" element={
                    <ProtectedRoute>
                        <AdminLayout><HardwarePageEditor /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/blogs" element={
                    <ProtectedRoute>
                        <AdminLayout><AdminBlogList /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/blogs/new" element={
                    <ProtectedRoute>
                        <AdminLayout><BlogForm /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/blogs/:id/edit" element={
                    <ProtectedRoute>
                        <AdminLayout><BlogForm /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/products/:slug" element={
                    <ProtectedRoute>
                        <AdminLayout><ProductEditor /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/categories/:slug" element={
                    <ProtectedRoute>
                        <AdminLayout><IndustryEditor /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/pricing" element={
                    <ProtectedRoute>
                        <AdminLayout><PricingEditor /></AdminLayout>
                    </ProtectedRoute>
                } />
                <Route path="/admin/settings" element={
                    <ProtectedRoute>
                        <AdminLayout><ContentApprovals /></AdminLayout>
                    </ProtectedRoute>
                } />

                {/* ── Any unknown URL → Not Found / Replace with / for now ── */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
};

// ── Root app ─────────────────────────────────────────────────────────────────
function App() {
    return (
        <AuthProvider>
            <Toaster position="top-center" />
            <HardwarePageProvider>
                <PricingProvider>
                    <Router>
                        <ScrollToTop />
                        <AppContent />
                    </Router>
                </PricingProvider>
            </HardwarePageProvider>
        </AuthProvider>
    );
}

export default App;