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
import { categoryRegistry, CategoryPageData } from '../../../Data/categoryData';

// Import Sub-Editors
import IndustryHeroEditor from './editors/IndustryHeroEditor';
import IndustryStatsEditor from './editors/IndustryStatsEditor';
import IndustryScrollEditor from './editors/IndustryScrollEditor';
import IndustryKeyFeaturesEditor from './editors/IndustryKeyFeaturesEditor';
import IndustryBlackCardEditor from './editors/IndustryBlackCardEditor';
import IndustryFAQEditor from './editors/IndustryFAQEditor';

const IndustryEditor: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('hero');
    const [formData, setFormData] = useState<CategoryPageData | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (slug && categoryRegistry[slug]) {
            setFormData(JSON.parse(JSON.stringify(categoryRegistry[slug])));
        } else if (slug) {
            navigate('/admin');
        }
    }, [slug, navigate]);

    if (!formData) return <div className="p-8 text-center animate-pulse">Loading editor...</div>;

    const handleSave = () => {
        setIsSaving(true);
        console.log('Saving data:', formData);
        // Simulate save delay
        setTimeout(() => {
            setIsSaving(false);
            setIsEditing(false);
            alert('Changes saved (simulated)! Check console for JSON.');
        }, 800);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const cancelEdit = () => {
        if (window.confirm('Are you sure you want to cancel? Unsaved changes will be lost.')) {
            setIsEditing(false);
            // Reset data
            if (slug && categoryRegistry[slug]) {
                setFormData(JSON.parse(JSON.stringify(categoryRegistry[slug])));
            }
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/admin')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-500" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                            Edit {formData.heroSection.title}
                        </h1>
                        <p className="text-gray-500 mt-1">Manage content for {slug} industry page</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href={`/industry/${slug}`}
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
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit overflow-x-auto max-w-full no-scrollbar">
                <TabButton active={activeTab === 'hero'} onClick={() => setActiveTab('hero')} icon={LayoutTemplate} label="Hero" />
                <TabButton active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} icon={BarChart} label="Stats" />
                <TabButton active={activeTab === 'scroll'} onClick={() => setActiveTab('scroll')} icon={Layers} label="Scroll Features" />
                <TabButton active={activeTab === 'features'} onClick={() => setActiveTab('features')} icon={List} label="Key Features" />
                <TabButton active={activeTab === 'blackcard'} onClick={() => setActiveTab('blackcard')} icon={CreditCard} label="Tech Stack" />
                <TabButton active={activeTab === 'faq'} onClick={() => setActiveTab('faq')} icon={HelpCircle} label="FAQ" />
            </div>

            {/* Content Area */}
            <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[500px] transition-opacity duration-300 ${!isEditing ? 'opacity-90 pointer-events-none grayscale-[0.02]' : 'opacity-100'}`}>
                {activeTab === 'hero' && (
                    <IndustryHeroEditor
                        data={formData.heroSection}
                        onChange={(newData) => setFormData({ ...formData, heroSection: newData })}
                        isEditing={isEditing}
                    />
                )}
                {activeTab === 'stats' && (
                    <IndustryStatsEditor
                        data={formData.numberSpeaks}
                        onChange={(newData) => setFormData({ ...formData, numberSpeaks: newData })}
                        isEditing={isEditing}
                    />
                )}
                {activeTab === 'scroll' && formData.scrollSection && (
                    <IndustryScrollEditor
                        data={formData.scrollSection}
                        onChange={(newData) => setFormData({ ...formData, scrollSection: newData })}
                        isEditing={isEditing}
                    />
                )}
                {activeTab === 'features' && formData.keyFeatures && (
                    <IndustryKeyFeaturesEditor
                        data={formData.keyFeatures}
                        onChange={(newData) => setFormData({ ...formData, keyFeatures: newData })}
                        isEditing={isEditing}
                    />
                )}
                {activeTab === 'blackcard' && formData.blackCardSection && (
                    <IndustryBlackCardEditor
                        data={formData.blackCardSection}
                        onChange={(newData) => setFormData({ ...formData, blackCardSection: newData })}
                        isEditing={isEditing}
                    />
                )}
                {activeTab === 'faq' && (
                    <IndustryFAQEditor
                        data={formData.faqSection || { faqs: [] }}
                        onChange={(newData) => setFormData({ ...formData, faqSection: newData })}
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
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap outline-none
            ${active
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
    >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
    </button>
);

export default IndustryEditor;
