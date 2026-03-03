import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Public pages
import ComingSoon from './components/pages/ComingSoon';
import ScrollToTop from './components/Common/ScrollToTop';

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
                {/* ── Coming Soon — shown at the root ── */}
                <Route path="/" element={<ComingSoon />} />

                {/* ── All public routes redirect to Coming Soon ── */}
                <Route path="/industries" element={<Navigate to="/" replace />} />
                <Route path="/pricing" element={<Navigate to="/" replace />} />
                <Route path="/products/:slug" element={<Navigate to="/" replace />} />
                <Route path="/categories/:slug" element={<Navigate to="/" replace />} />
                <Route path="/hardware" element={<Navigate to="/" replace />} />
                <Route path="/blog" element={<Navigate to="/" replace />} />
                <Route path="/blog/:slug" element={<Navigate to="/" replace />} />

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

                {/* ── Any unknown URL → Coming Soon ── */}
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