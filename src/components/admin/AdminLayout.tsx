import React from 'react';
import { Menu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      {/* Main content */}
      <div className={`
        transition-all duration-300 ease-in-out min-h-screen bg-gray-50
        ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'}
      `}>
        {/* Top bar for mobile and tablet */}
        <div className="bg-white shadow-sm border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            <img src="/logo.png" alt="SlateX POS" className="h-8 w-auto" />

            {/* Mobile user avatar */}
            <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div >
  );
};

export default AdminLayout;