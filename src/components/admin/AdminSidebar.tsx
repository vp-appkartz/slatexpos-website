import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    X,
    Menu,
    ChevronDown,
    ChevronRight,
    Package,
    Layers,
    Monitor,
    DollarSign,
    Command
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { signOutUser } from '../../services/authService';
import { productRegistry } from '../../Data/productData';
import { categoryRegistry } from '../../Data/categoryData';

interface AdminSidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    sidebarCollapsed: boolean;
    setSidebarCollapsed: (collapsed: boolean) => void;
}

// Grouping definition based on user requirements
const PRODUCT_GROUPS = [
    {
        title: 'Restaurant Operations',
        items: [
            'restaurant-pos-system',
            'kitchen-display',
            'payment-processing',
            'reporting-app'
        ]
    },
    {
        title: 'Customer Interaction',
        items: [
            'web-ordering',
            'mobile-ordering'
        ]
    },
    {
        title: 'Marketing Operations',
        items: [
            'loyalty-promotion'
            // 'gift-card' // Not yet in productRegistry
        ]
    }
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({
    sidebarOpen,
    setSidebarOpen,
    sidebarCollapsed,
    setSidebarCollapsed
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();

    // State for expanding/collapsing menu items
    const [productsOpen, setProductsOpen] = useState(true);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
        'Restaurant Operations': true,
        'Customer Interaction': true,
        'Marketing Operations': true
    });

    const handleSignOut = async () => {
        try {
            await signOutUser();
            navigate('/admin');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const isCurrentPath = (path: string) => {
        return location.pathname === path;
    };

    const isActiveGroup = (pathPrefix: string) => {
        return location.pathname.startsWith(pathPrefix);
    };

    const toggleGroup = (groupTitle: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedGroups(prev => ({
            ...prev,
            [groupTitle]: !prev[groupTitle]
        }));
    };

    // Helper to render menu item content based on collapse state
    const renderMenuItem = (icon: React.ComponentType<any>, label: string, isActive: boolean, isDropdown: boolean = false, isOpen: boolean = false) => (
        <>
            <div className={`flex items-center ${sidebarCollapsed ? 'flex-col justify-center gap-1' : 'flex-row gap-3'}`}>
                {React.createElement(icon, {
                    className: `
                    ${sidebarCollapsed ? 'w-6 h-6' : 'w-5 h-5'} 
                    ${isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-500'}
                `
                })}
                <span className={`
                ${sidebarCollapsed ? 'text-[9px] font-medium leading-tight text-center' : 'text-sm font-medium'}
                ${isActive ? 'text-primary-700' : 'text-gray-600'}
            `}>
                    {label}
                </span>
            </div>

            {/* Dropdown arrow - only show if NOT collapsed and is dropdown */}
            {!sidebarCollapsed && isDropdown && (
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
            )}
        </>
    );

    return (
        <>
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <button
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden w-full h-full border-0 p-0 cursor-pointer"
                    onClick={() => setSidebarOpen(false)}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            setSidebarOpen(false);
                        }
                    }}
                    aria-label="Close sidebar"
                />
            )}

            {/* Sidebar */}
            <div className={`
        fixed inset-y-0 left-0 z-50 bg-white shadow-xl transform transition-all duration-300 ease-in-out
        lg:translate-x-0 border-r border-gray-100 flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${sidebarCollapsed ? 'w-20' : 'w-72'}
      `}>
                {/* Sidebar Header */}
                {/* Sidebar Header */}
                <div className={`flex items-center h-20 border-b border-gray-100 bg-white transition-all duration-300 ${sidebarCollapsed ? 'flex-col justify-center py-2' : 'flex-row justify-between px-6'}`}>
                    {!sidebarCollapsed && (
                        <div className="flex items-center gap-3">
                            {/* <div className="w-8 h-8 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/30">
                                <span className="text-white font-bold text-xl">S</span>
                            </div> */}
                            <span className="font-bold text-xl text-gray-800 tracking-tight">SlateX</span>
                        </div>
                    )}
                    {sidebarCollapsed && (
                        <div className="w-8 h-8 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/30 mb-1">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                    )}

                    {/* Mobile close button */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-primary-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Desktop collapse toggle */}
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className={`hidden lg:flex p-1.5 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-primary-600 transition-colors`}
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-6 px-2 scrollbar-thin scrollbar-thumb-gray-200">
                    <ul className="space-y-2">
                        {/* Dashboard */}
                        <li>
                            <button
                                onClick={() => {
                                    navigate('/admin/dashboard');
                                    setSidebarOpen(false);
                                }}
                                className={`
                  w-full flex items-center rounded-xl transition-all duration-200 group relative
                  ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                  ${isCurrentPath('/admin/dashboard')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                `}
                            >
                                {renderMenuItem(LayoutDashboard, 'Dashboard', isCurrentPath('/admin/dashboard'))}
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => {
                                    navigate('/admin/hero');
                                    setSidebarOpen(false);
                                }}
                                className={`
                  w-full flex items-center rounded-xl transition-all duration-200 group relative
                  ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                  ${isCurrentPath('/admin/hero')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                `}
                            >
                                {renderMenuItem(Command, 'Hero Section', isCurrentPath('/admin/hero'))}
                            </button>
                        </li>

                        {/* Products Dropdown */}
                        <li>
                            <button
                                onClick={() => {
                                    if (sidebarCollapsed) {
                                        setSidebarCollapsed(false);
                                        setProductsOpen(true);
                                    } else {
                                        setProductsOpen(!productsOpen);
                                    }
                                }}
                                className={`
                  w-full flex items-center rounded-xl transition-all duration-200 group relative
                  ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                  ${isActiveGroup('/products')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                `}
                            >
                                {renderMenuItem(Package, 'Products', isActiveGroup('/products'), true, productsOpen)}
                            </button>

                            {/* Nested Product Groups */}
                            {(!sidebarCollapsed && productsOpen) && (
                                <div className="mt-1 ml-4 space-y-1 border-l-2 border-gray-100 pl-3">
                                    {PRODUCT_GROUPS.map((group) => (
                                        <div key={group.title} className="mb-2">
                                            <button
                                                onClick={(e) => toggleGroup(group.title, e)}
                                                className={`
                            w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors mb-1
                            ${expandedGroups[group.title]
                                                        ? 'text-primary-700 bg-primary-100/50'
                                                        : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'
                                                    }
                          `}
                                            >
                                                <span>{group.title}</span>
                                                <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${expandedGroups[group.title] ? 'rotate-90' : ''}`} />
                                            </button>

                                            {expandedGroups[group.title] && (
                                                <ul className="space-y-0.5">
                                                    {group.items.map((slug) => {
                                                        const product = productRegistry[slug];
                                                        if (!product) return null;

                                                        return (
                                                            <li key={slug}>
                                                                <button
                                                                    onClick={() => {
                                                                        navigate(`/products/${slug}`);
                                                                        setSidebarOpen(false);
                                                                    }}
                                                                    className={`
                                       w-full flex items-center px-3 py-1.5 text-sm rounded-md transition-colors leading-5
                                       ${isCurrentPath(`/products/${slug}`)
                                                                            ? 'text-primary-600 font-medium bg-primary-50'
                                                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                                        }
                                     `}
                                                                >
                                                                    <span className="truncate">{product.heroSection.title}</span>
                                                                </button>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        {/* Industries Dropdown */}
                        <li>
                            <button
                                onClick={() => {
                                    if (sidebarCollapsed) {
                                        setSidebarCollapsed(false);
                                        setIndustriesOpen(true);
                                    } else {
                                        setIndustriesOpen(!industriesOpen);
                                    }
                                }}
                                className={`
                   w-full flex items-center rounded-xl transition-all duration-200 group relative
                  ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                  ${isActiveGroup('/categories')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                `}
                            >
                                {renderMenuItem(Layers, 'Industries', isActiveGroup('/categories'), true, industriesOpen)}
                            </button>

                            {/* Nested Industries */}
                            {(!sidebarCollapsed && industriesOpen) && (
                                <ul className="mt-1 ml-4 space-y-0.5 border-l-2 border-gray-100 pl-3">
                                    {Object.values(categoryRegistry).map((category) => (
                                        <li key={category.slug}>
                                            <button
                                                onClick={() => {
                                                    navigate(`/categories/${category.slug}`);
                                                    setSidebarOpen(false);
                                                }}
                                                className={`
                          w-full flex items-center px-3 py-1.5 text-sm rounded-md transition-colors leading-5
                          ${isCurrentPath(`/categories/${category.slug}`)
                                                        ? 'text-primary-600 font-medium bg-primary-50'
                                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                    }
                        `}
                                            >
                                                <span className="truncate">{category.heroSection.title}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        {/* Hardware */}
                        <li>
                            <button
                                onClick={() => {
                                    navigate('/hardware');
                                    setSidebarOpen(false);
                                }}
                                className={`
                         w-full flex items-center rounded-xl transition-all duration-200 group relative
                        ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                        ${isCurrentPath('/hardware')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                    `}
                            >
                                {renderMenuItem(Monitor, 'Hardware', isCurrentPath('/hardware'))}
                            </button>
                        </li>

                        {/* Pricing */}
                        <li>
                            <button
                                onClick={() => {
                                    navigate('/pricing');
                                    setSidebarOpen(false);
                                }}
                                className={`
                        w-full flex items-center rounded-xl transition-all duration-200 group relative
                        ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                        ${isCurrentPath('/pricing')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                    `}
                            >
                                {renderMenuItem(DollarSign, 'Pricing', isCurrentPath('/pricing'))}
                            </button>
                        </li>

                        {/* Blog Posts */}
                        <li>
                            <button
                                onClick={() => {
                                    navigate('/admin/blogs');
                                    setSidebarOpen(false);
                                }}
                                className={`
                    w-full flex items-center rounded-xl transition-all duration-200 group relative
                    ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                    ${isCurrentPath('/admin/blogs')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                `}
                            >
                                {renderMenuItem(FileText, 'Blog Posts', isCurrentPath('/admin/blogs'))}
                            </button>
                        </li>

                        {/* Settings */}
                        <li>
                            <button
                                onClick={() => {
                                    navigate('/admin/settings');
                                    setSidebarOpen(false);
                                }}
                                className={`
                    w-full flex items-center rounded-xl transition-all duration-200 group relative
                    ${sidebarCollapsed ? 'justify-center py-3 px-1' : 'justify-between px-4 py-3.5'}
                    ${isCurrentPath('/admin/settings')
                                        ? 'bg-primary-50/50'
                                        : 'hover:bg-gray-50'
                                    }
                `}
                            >
                                {renderMenuItem(Settings, 'Settings', isCurrentPath('/admin/settings'))}
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* User section at bottom */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    {sidebarCollapsed ? (
                        /* Collapsed user section */
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 bg-white border-2 border-white shadow-md rounded-full flex items-center justify-center group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-primary-50"></div>
                                <span className="relative text-primary-700 text-xs font-bold">
                                    {user?.email?.charAt(0).toUpperCase() || 'A'}
                                </span>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors group relative flex flex-col items-center"
                            >
                                <LogOut className="w-4 h-4 mb-0.5" />
                                <span className="text-[9px]">Sign Out</span>
                            </button>
                        </div>
                    ) : (
                        /* Expanded user section */
                        <div className="flex items-center justify-between">
                            <div className="flex items-center min-w-0 gap-3">
                                <div className="w-9 h-9 bg-white border-2 border-white shadow-md rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-primary-50"></div>
                                    <span className="relative text-primary-700 text-sm font-bold">
                                        {user?.email?.charAt(0).toUpperCase() || 'A'}
                                    </span>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate">
                                        Admin
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {user?.email || 'admin@slatex.com'}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                                title="Sign Out"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminSidebar;
