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
import BlogList from './components/pages/BlogList';
import BlogDetails from './components/pages/BlogDetails';

// Admin imports
import { AuthProvider } from './contexts/AuthContext';
import AdminLogin from './components/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import AdminBlogList from './components/admin/BlogList';
import BlogForm from './components/admin/BlogForm';
import ProtectedRoute from './components/admin/ProtectedRoute';
// Removed FirebaseTest and FirebaseDebug for production

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* ScrollToTop must be inside Router but outside Routes */}
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <div className="overflow-x-hidden">
              <Header />
              <Hero />
              <ScrollSection />
              <Hardware />
              <FreeTrial
                title='Why Choose SlateX POS?'
                description='Switch to SlateX POS for a flexible, all‑in‑one solution: tweak menus and taxes on the fly, and leverage built‑in tools like gift cards, loyalty programs, and seamless payment processing. SlateX adapts as you grow, so you can focus on delighting customers and boosting profits.'
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

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          {/* Test/debug routes removed for production */}
          
          {/* Protected Admin Routes with Layout */}
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;