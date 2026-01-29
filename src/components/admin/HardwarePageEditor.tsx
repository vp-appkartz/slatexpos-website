import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
    Save,
    LayoutTemplate,
    RefreshCw,
    Edit2,
    X,
    HelpCircle,
    Zap,
    Box
} from 'lucide-react';

import { useHardwarePage } from '../../contexts/HardwarePageContext';

import HardwareHeroContentEditor from './hero/HardwareHeroContentEditor';
import ScrollContentEditor from './hero/ScrollContentEditor';
import FAQContentEditor from './hero/FAQContentEditor';
import KeyFeaturesContentEditor from './hero/KeyFeaturesContentEditor';
import { saveHardwarePageData, saveDraft, getDraft } from '../../services/firestoreService';
import { AlertTriangle } from 'lucide-react';
import { HardwarePageData } from '../../Data/hardwareData';

const HardwarePageEditor: React.FC = () => {
    const {
        data,
        setHardwareData,
        updateHeroSection,
        updateHeroImage,
        updateProductSection,
        addProductSection,
        removeProductSection,
        updateKeyFeature,
        updateFAQ,
        addFAQ,
        removeFAQ
    } = useHardwarePage();

    const [activeTab, setActiveTab] = useState<'hero' | 'products' | 'features' | 'faq'>('hero');
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [hasDraft, setHasDraft] = useState(false);

    // Check for existing draft on mount
    React.useEffect(() => {
        const checkDraft = async () => {
            const draft = await getDraft('content', 'hardware_page');
            if (draft) {
                setHardwareData(draft.data as HardwarePageData);
                setHasDraft(true);
            }
        };
        checkDraft();
    }, [setHardwareData]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            await saveDraft('content', 'hardware_page', data, 'hardware', 'Hardware Page');
            setHasDraft(true);
            console.log("Saved Draft:", data);
            toast.success('Changes saved as Draft! Go to Settings > Content Approvals to publish.');
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving hardware page draft:", error);
            toast.error('Failed to save draft. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    // --- Handlers Wrappers ---

    // Scroll (Products)
    const handleScrollGlobalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Not used for Hardware page currently, but required by interface if we reuse ScrollContentEditor fully.
        // Or we can just ignore global hero title/subtitle for hardware page if not needed.
    };

    // Key Features
    const handleFeatureUpdate = (index: number, field: string, value: any) => {
        updateKeyFeature(index, field, value);
    };


    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Hardware Page Editor</h1>
                        {hasDraft && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                <AlertTriangle className="w-3 h-3" />
                                Draft Mode
                            </span>
                        )}
                    </div>
                    <p className="text-gray-500 mt-1">Manage content for the Hardware marketing page.</p>
                </div>

                <div className="flex items-center gap-3">
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gray-900/10"
                        >
                            <Edit2 className="w-5 h-5" />
                            <span>Edit Content</span>
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => setIsEditing(false)}
                                disabled={isSaving}
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200"
                            >
                                <X className="w-5 h-5" />
                                <span>Cancel</span>
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSaving}
                                className={`flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-gray font-medium shadow-lg shadow-primary-500/20 transition-all duration-200
                                    ${isSaving ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700 hover:shadow-primary-500/30 hover:-translate-y-0.5'}`}
                            >
                                {isSaving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 bg-gray-100 p-1.5 rounded-xl w-fit">
                {[
                    { id: 'hero', label: 'Hero', icon: LayoutTemplate },
                    { id: 'products', label: 'Products', icon: Box },
                    { id: 'features', label: 'Key Features', icon: Zap },
                    { id: 'faq', label: 'FAQ', icon: HelpCircle },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-white text-gray-900 shadow-sm ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}
                    >
                        <tab.icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 min-h-[500px]">
                {activeTab === 'hero' && (
                    <div className="p-6">
                        <HardwareHeroContentEditor
                            data={data.heroSection}
                            onChange={updateHeroSection}
                            onImageChange={updateHeroImage}
                            isEditing={isEditing}
                        />
                    </div>
                )}

                {activeTab === 'products' && (
                    <div className="p-6">
                        {/* Reusing ScrollContentEditor but adapting data */}
                        <ScrollContentEditor
                            data={{
                                heroTitle: data.featuresIntro?.title || "",
                                heroSubtitle: data.featuresIntro?.subtitle || "",
                                sections: data.productSections.map(p => ({
                                    ...p,
                                    // Ensure all required fields for ScrollContentEditor exist
                                    subtitle: p.subtitle || p.title,
                                    icon: p.icon || 'Monitor',
                                    bgColor: p.bgColor || 'bg-gray-500',
                                    bgGradient: p.bgGradient || 'from-gray-400 to-gray-600',
                                    bulletPoints: p.bulletPoints || [],
                                    imageSrc: p.image
                                }))
                            }}
                            onGlobalChange={handleScrollGlobalChange}
                            onUpdateSection={(id, field, value) => {
                                // Map fields back if necessary, mostly 1:1
                                if (field === 'imageSrc') updateProductSection(id, 'image', value);
                                else updateProductSection(id, field as string, value);
                            }}
                            onAddSection={addProductSection}
                            onRemoveSection={removeProductSection}
                            // These might need implementing in context if we want bullet point support
                            onAddBullet={(sectionId) => {
                                const section = data.productSections.find(s => s.id === sectionId);
                                if (section) {
                                    updateProductSection(sectionId, 'bulletPoints', [...(section.bulletPoints || []), { text: "New Point", highlight: false }]);
                                }
                            }}
                            onUpdateBullet={(sectionId, index, field, value) => {
                                const section = data.productSections.find(s => s.id === sectionId);
                                if (section && section.bulletPoints) {
                                    const newBullets = [...section.bulletPoints];
                                    newBullets[index] = { ...newBullets[index], [field]: value };
                                    updateProductSection(sectionId, 'bulletPoints', newBullets);
                                }
                            }}
                            onRemoveBullet={(sectionId, index) => {
                                const section = data.productSections.find(s => s.id === sectionId);
                                if (section && section.bulletPoints) {
                                    updateProductSection(sectionId, 'bulletPoints', section.bulletPoints.filter((_, i) => i !== index));
                                }
                            }}
                            isEditing={isEditing}
                        />
                    </div>
                )}

                {activeTab === 'features' && (
                    <div className="p-6">
                        <KeyFeaturesContentEditor
                            data={data.keyFeatures}
                            onUpdateFeature={handleFeatureUpdate}
                            isEditing={isEditing}
                        />
                    </div>
                )}

                {activeTab === 'faq' && (
                    <div className="p-6">
                        <FAQContentEditor
                            data={data.faqSection}
                            onUpdateFAQ={updateFAQ}
                            onAddFAQ={addFAQ}
                            onRemoveFAQ={removeFAQ}
                            isEditing={isEditing}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HardwarePageEditor;
