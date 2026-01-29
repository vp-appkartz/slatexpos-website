import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
import {
    LayoutTemplate,
    Save,
    ArrowLeft,
    RefreshCw,
    Layers,
    BarChart,
    List,
    CreditCard,
    HelpCircle,
    ExternalLink
} from 'lucide-react';
import { getProductData as getStaticProductData, ProductPageData } from '../../../Data/productData';
import { getProductData, saveProductData, getDraft, saveDraft, ScrollSectionData } from '../../../services/firestoreService';

import ProductStatsEditor from './editors/ProductStatsEditor';
import ProductScrollEditor from './editors/ProductScrollEditor';
import ProductKeyFeaturesEditor from './editors/ProductKeyFeaturesEditor';
import ProductBlackCardEditor from './editors/ProductBlackCardEditor';
import ProductFAQEditor from './editors/ProductFAQEditor';
import ProductHeroEditor from './editors/ProductHeroEditor';
import { AlertTriangle } from 'lucide-react';


const INITIAL_SCROLL_DATA: ScrollSectionData = {
    heroTitle: "What We Do",
    heroSubtitle: "Tailored for Every Table, Terminal, and Territory in Canada",
    sections: [
        {
            id: '1',
            icon: "Utensils",
            title: 'Comprehensive All-In-One POS System',
            subtitle: 'Comprehensive All-In-One POS System',
            description: 'An easy to use and reliable cloud-based Android POS solution designed to empower restaurants in their growth journey.',
            bgColor: 'bg-gray-500',
            bgGradient: 'from-gray-400 to-gray-600',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-1.png',
            bulletPoints: [
                { text: 'Easy Ticket Management', highlight: true },
                { text: 'Pizza Matrix (½ & ¼)', highlight: false },
                { text: 'Control Complex Modifiers', highlight: true },
                { text: 'Binnacle Security', highlight: false },
                { text: 'Accurate & easy insights', highlight: true },
                { text: 'Employee Management', highlight: false },
                { text: 'Tip Reconciliation', highlight: true },
                { text: 'Third Party Order Integration', highlight: false },
                { text: 'Timecard and Payroll', highlight: true },
                { text: 'CRM & Loyalty', highlight: false },
                { text: 'Versatile item and menu management', highlight: true },
                { text: 'Comprehensive Management', highlight: false },
            ]
        },
        {
            id: '2',
            icon: "Clock",
            title: 'Streamline kitchen operations with precision',
            subtitle: 'Streamline kitchen operations with precision',
            description: 'A comprehensive Kitchen Display System streamlining restaurant operations from order management to food preparation. Ensure seamless communication and enhanced efficiency in your kitchen allowing your staff to focus on preparing and serving delicious food.',
            bgColor: 'bg-green-500',
            bgGradient: 'from-green-400 to-green-600',
            buttonText: 'Let\'s Connect',
            imageSrc: '/home-about-2.png',
            bulletPoints: [
                { text: 'Aggregate all orders', highlight: true },
                { text: 'Multiple views', highlight: true },
                { text: 'Color Coded Orders', highlight: true },
                { text: 'Kitchen productivity reports', highlight: true },
                { text: 'Bump & Recall Items', highlight: true },
                { text: 'Prep time countdown timer', highlight: true },
                { text: 'Ticket Status Digital Signage Integration', highlight: true }
            ]
        },
        {
            id: '3',
            icon: "Zap",
            title: 'Boost your profit with zero-commission online ordering!',
            subtitle: 'Boost your profit with zero-commission online ordering!',
            description: "Increase your sales and expand your reach with the commission-free online ordering solution of SlateX POS. From easy menu customization to timely order fulfillment, we empower restaurants to serve customers anytime, anywhere.",
            bgColor: 'bg-primary-300',
            bgGradient: 'from-orange-400 to-red-500',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-3.png',
            bulletPoints: [
                { text: 'Commission Free', highlight: true },
                { text: 'Future ordering options', highlight: true },
                { text: 'Multiple color branding option', highlight: false },
                { text: 'Multi store listing', highlight: true },
                { text: 'Loyalty Program Integration', highlight: false },
                { text: 'Offers/Coupons Management', highlight: false },
                { text: 'Integration with POS/Kitchen', highlight: false },
                { text: 'Guest Alerts Email/SMS', highlight: true },
                { text: 'Third party analytics integration', highlight: false },
                { text: 'Catering/Express Catering options', highlight: false },
            ]
        },
        {
            id: '4',
            icon: "Check",
            title: 'Tailored loyalty program all restaurants desire and customers crave',
            subtitle: 'Tailored loyalty program all restaurants desire and customers crave',
            description: 'Enhance customer retention and encourage repeat visits with personalized incentives and rewards using SlateX POS. Help customers unlock exclusive perks, fostering loyalty and satisfaction with every transaction.',
            bgColor: 'bg-primary-300',
            bgGradient: 'from-orange-400 to-orange-600',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-4.png',
            bulletPoints: [
                { text: 'Easy & Quick implementation', highlight: true },
                { text: 'Detailed customer analytics report', highlight: false },
                { text: 'Point or Reward based', highlight: false },
                { text: 'Menu item reward options', highlight: true },
                { text: 'Inststore/Online/Kiosk integration', highlight: false },
                { text: 'Customer portal', highlight: true },
                { text: 'Integrated marketing campaigns', highlight: false },
                { text: 'Personalized communication', highlight: true },
            ]
        },
        {
            id: '5',
            icon: "Check",
            title: 'Let customers pay effortlessly with Payment Processing of SlateX POS',
            subtitle: 'Let customers pay effortlessly with Payment Processing of SlateX POS',
            description: 'SlateX POS offers fast, secure, and flexible payment options making it easy for both the customers and the restaurants to manage payments and transactions accurately without any errors.',
            bgColor: 'bg-primary-300',
            bgGradient: 'from-orange-400 to-orange-600',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-5.png',
            bulletPoints: [
                { text: 'Customized and transparent rates', highlight: true },
                { text: 'Compliant Surcharge Program', highlight: true },
                { text: 'Fast and Secure Transactions', highlight: true },
                { text: 'Comprehensive Payment Reports', highlight: true },
                { text: 'Diverse Payment Options', highlight: true },
                { text: 'Tip Management', highlight: true },
            ]
        }
    ]
};

const DEFAULT_SCROLL_SECTION = {
    heroTitle: "Features",
    heroSubtitle: "Explore our features",
    sections: Array(5).fill(null).map((_, i) => ({
        id: (i + 1).toString(),
        icon: 'Star',
        title: `Feature ${i + 1}`,
        subtitle: `Feature ${i + 1} Subtitle`,
        description: 'Add a description for this feature here.',
        bgColor: 'bg-gray-500',
        bgGradient: 'from-gray-400 to-gray-600',
        buttonText: "Learn More",
        bulletPoints: [
            { text: 'Benefit 1', highlight: true },
            { text: 'Benefit 2', highlight: true }
        ],
        imageSrc: '',
        imageAlt: 'Feature Image'
    }))
};

const ProductEditor: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('hero');
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [productData, setProductData] = useState<ProductPageData | null>(null);
    const [hasDraft, setHasDraft] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            if (slug) {
                // 1. Check for Draft
                const draft = await getDraft('products', slug);
                if (draft) {
                    setProductData(draft.data as ProductPageData);
                    setHasDraft(true);
                } else {
                    // 2. Try fetching from Live Firestore
                    const dbData = await getProductData(slug);
                    let finalData: ProductPageData | null = null;

                    if (dbData) {
                        finalData = { ...dbData };
                    } else {
                        // 3. Fallback to local static data
                        const staticData = getStaticProductData(slug);
                        if (staticData) {
                            finalData = JSON.parse(JSON.stringify(staticData));
                        }
                    }

                    if (finalData) {
                        // ENSURE scrollSection is initialized from INITIAL_SCROLL_DATA if missing
                        if (!finalData.scrollSection || !finalData.scrollSection.sections) {
                            finalData.scrollSection = JSON.parse(JSON.stringify(INITIAL_SCROLL_DATA));
                        } else {
                            // Even if it exists, ensure it has all required sections from INITIAL_SCROLL_DATA
                            const existingIds = new Set(finalData.scrollSection.sections.map((s: any) => s.id));
                            const missingSections = INITIAL_SCROLL_DATA.sections.filter(s => !existingIds.has(s.id));

                            if (missingSections.length > 0) {
                                finalData.scrollSection.sections = [
                                    ...finalData.scrollSection.sections,
                                    ...JSON.parse(JSON.stringify(missingSections))
                                ].sort((a, b) => (parseInt(a.id) || 0) - (parseInt(b.id) || 0));
                            }
                        }
                        setProductData(finalData);
                    } else {
                        navigate('/admin/dashboard');
                    }
                }
            }
        };
        fetchProduct();
    }, [slug, navigate]);

    if (!productData) {
        return <div className="p-8 text-center">Loading...</div>;
    }

    const handleSave = async () => {
        if (!slug || !productData) return;
        setIsSaving(true);
        try {
            console.log('slug', slug);

            console.log('productData', productData);
            // 1. Save as Draft (Standard procedure)
            await saveDraft('products', slug, productData, 'product', productData.heroSection?.title || slug);

            // 2. ALSO Save directly to Live Firestore (Immediate fix requested by user)
            // This ensures the data is immediately available in the live database without needing approval
            await saveProductData(slug, productData);

            setHasDraft(true);
            setIsEditing(false);
            toast.success('Changes saved successfully!');
        } catch (error) {
            console.error(error);
            toast.error('Failed to save changes.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleBack = () => {
        navigate('/admin/dashboard');
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const cancelEdit = async () => {
        if (window.confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
            setIsEditing(false);
            // Re-fetch data to reset changes
            if (slug) {
                const data = await getProductData(slug);
                if (data) {
                    setProductData(data);
                } else {
                    const staticData = getStaticProductData(slug);
                    if (staticData) {
                        if (!staticData.scrollSection) {
                            setProductData({
                                ...staticData,
                                scrollSection: INITIAL_SCROLL_DATA
                            });
                        } else {
                            setProductData(staticData);
                        }
                    }
                }
            }
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleBack}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-500" />
                    </button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                                Edit {productData.heroSection.title}
                            </h1>
                            {hasDraft && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    <AlertTriangle className="w-3 h-3" />
                                    Draft Mode
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 mt-1">Manage content for {slug}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href={`/products/${slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-white bg-gray-50 border border-gray-200 transition-all duration-200"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span className="hidden sm:inline">View Page</span>
                    </a>

                    {!isEditing ? (
                        <button
                            onClick={toggleEdit}
                            className="flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gray-900/10"
                        >
                            <RefreshCw className="w-5 h-5" />
                            <span>Edit Content</span>
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={cancelEdit}
                                disabled={isSaving}
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200"
                            >
                                <span>Cancel</span>
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className={`flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-gray font-medium shadow-lg transition-all duration-200
                                    ${isSaving
                                        ? 'bg-primary-400 cursor-not-allowed'
                                        : 'bg-primary-600 hover:bg-primary-700 hover:shadow-primary-500/30 hover:-translate-y-0.5'
                                    }`}
                            >
                                {isSaving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit overflow-x-auto max-w-full">
                <TabButton
                    active={activeTab === 'hero'}
                    onClick={() => setActiveTab('hero')}
                    icon={LayoutTemplate}
                    label="Hero Section"
                />
                <TabButton
                    active={activeTab === 'stats'}
                    onClick={() => setActiveTab('stats')}
                    icon={BarChart}
                    label="Number Speaks"
                />
                <TabButton
                    active={activeTab === 'scroll'}
                    onClick={() => setActiveTab('scroll')}
                    icon={Layers}
                    label="Scroll Features"
                />
                <TabButton
                    active={activeTab === 'features'}
                    onClick={() => setActiveTab('features')}
                    icon={List}
                    label="Key Features"
                />
                <TabButton
                    active={activeTab === 'blackcard'}
                    onClick={() => setActiveTab('blackcard')}
                    icon={CreditCard}
                    label="Black Card"
                />
                <TabButton
                    active={activeTab === 'faq'}
                    onClick={() => setActiveTab('faq')}
                    icon={HelpCircle}
                    label="FAQs"
                />
            </div>

            {/* Content Area */}
            <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[500px] transition-opacity duration-300 ${!isEditing ? 'opacity-90 pointer-events-none grayscale-[0.1]' : 'opacity-100'}`}>
                {activeTab === 'hero' && (
                    <ProductHeroEditor
                        data={productData.heroSection}
                        onChange={(newData) => setProductData({ ...productData, heroSection: newData })}
                        isEditing={isEditing}
                    />
                )}

                {activeTab === 'stats' && (
                    <ProductStatsEditor
                        data={productData.numberSpeaks}
                        onChange={(newData) => setProductData({ ...productData, numberSpeaks: newData })}
                        isEditing={isEditing}
                    />
                )}

                {activeTab === 'scroll' && (
                    <ProductScrollEditor
                        data={productData.scrollSection || INITIAL_SCROLL_DATA}
                        onChange={(newData) => setProductData({ ...productData, scrollSection: newData })}
                        isEditing={isEditing}
                    />
                )}

                {activeTab === 'features' && (
                    <ProductKeyFeaturesEditor
                        data={productData.keyFeatures}
                        onChange={(newData) => setProductData({ ...productData, keyFeatures: newData })}
                        isEditing={isEditing}
                    />
                )}

                {activeTab === 'blackcard' && productData.blackCardSection ? (
                    <ProductBlackCardEditor
                        data={productData.blackCardSection}
                        onChange={(newData) => setProductData({ ...productData, blackCardSection: newData })}
                        isEditing={isEditing}
                    />
                ) : activeTab === 'blackcard' && (
                    <div className="text-center py-12 text-gray-500 italic">This product does not have a black card section configured.</div>
                )}

                {activeTab === 'faq' && (
                    <ProductFAQEditor
                        data={productData.faqSection}
                        onChange={(newData) => setProductData({ ...productData, faqSection: newData })}
                        isEditing={isEditing}
                    />
                )}
            </div>
        </div>
    );
};

const TabButton: React.FC<{
    active: boolean;
    onClick: () => void;
    icon: React.ElementType;
    label: string;
}> = ({ active, onClick, icon: Icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap
            ${active
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
    >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
    </button>
);

export default ProductEditor;
