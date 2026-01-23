import React, { useState, useEffect } from 'react';
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
import { getProductData, ProductPageData } from '../../../Data/productData';

import ProductStatsEditor from './editors/ProductStatsEditor';
import ProductScrollEditor from './editors/ProductScrollEditor';
import ProductKeyFeaturesEditor from './editors/ProductKeyFeaturesEditor';
import ProductBlackCardEditor from './editors/ProductBlackCardEditor';
import ProductFAQEditor from './editors/ProductFAQEditor';
import ProductHeroEditor from './editors/ProductHeroEditor';

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

    useEffect(() => {
        if (slug) {
            const data = getProductData(slug);
            if (data) {
                setProductData(data);
            } else {
                navigate('/admin/dashboard');
            }
        }
    }, [slug, navigate]);

    if (!productData) {
        return <div className="p-8 text-center">Loading...</div>;
    }

    const handleSave = () => {
        setIsSaving(true);
        // Simulate save
        setTimeout(() => {
            setIsSaving(false);
            setIsEditing(false);
            alert('Changes saved successfully! (Note: This is a static site, changes are local)');
        }, 1000);
    };

    const handleBack = () => {
        navigate('/admin/dashboard');
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const cancelEdit = () => {
        if (window.confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
            setIsEditing(false);
            // Re-fetch data to reset changes
            if (slug) {
                const data = getProductData(slug);
                if (data) setProductData(data);
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
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                            Edit {productData.heroSection.title}
                        </h1>
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
                        data={productData.scrollSection || DEFAULT_SCROLL_SECTION}
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
