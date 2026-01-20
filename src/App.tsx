import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import BlogList from './components/pages/BlogList';
import BlogDetails from './components/pages/BlogDetails';
import NotFound from './components/pages/NotFound';

// Admin imports
import { AuthProvider } from './contexts/AuthContext';
import AdminLogin from './components/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import AdminBlogList from './components/admin/BlogList';
import BlogForm from './components/admin/BlogForm';
import ProtectedRoute from './components/admin/ProtectedRoute';
import SEO from './components/Common/SEO';

// Component to handle route-aware rendering
const AppContent = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  // Hide header/footer if path starts with /admin
  const isPublic = !path.startsWith('/admin');

  return (
    <div className="">
      {isPublic && <Header />}

      <Routes>
        <Route path="/" element={
          <>
            <SEO
              title="SlateX POS - Restaurant POS System"
              description="SlateX POS is the best all-in-one POS system for restaurants and retail. Manage orders, payments, and inventory with ease."
              keywords="POS system, restaurant POS, retail POS, SlateX"
            />
            <Hero />
            <ScrollSection />
            <Hardware />
            <FreeTrial
              title='Why Choose SlateX POS?'
              description='Switch to SlateX POS for a flexible, all‑in‑one solution: tweak menus and taxes on the fly, and leverage built‑in tools like gift cards, loyalty programs, and seamless payment processing. SlateX adapts as you grow, so you can focus on delighting customers and boosting profits.'
            />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products/:slug" element={<DynamicProductPage />} />
        <Route path="/categories/:slug" element={<DynamicCategoryPage />} />
        <Route path="/hardware" element={<HardwarePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/blogs" element={
          <ProtectedRoute>
            <AdminLayout>
              <AdminBlogList />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/blogs/new" element={
          <ProtectedRoute>
            <AdminLayout>
              <BlogForm />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/blogs/:id/edit" element={
          <ProtectedRoute>
            <AdminLayout>
              <BlogForm />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/settings" element={
          <ProtectedRoute>
            <AdminLayout>
              <div className="p-8 text-center text-gray-600">Settings page coming soon...</div>
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* 404 Page - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {isPublic && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;