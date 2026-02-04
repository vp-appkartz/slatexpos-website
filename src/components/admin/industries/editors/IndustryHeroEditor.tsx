import React from 'react';
import { Type, Image as ImageIcon, Eye } from 'lucide-react';
import ImageUpload from '../../../Common/ImageUpload';
import { HeroSectionData } from '../../../../Data/categoryData';

interface IndustryHeroEditorProps {
    data: HeroSectionData;
    onChange: (data: HeroSectionData) => void;
    isEditing: boolean;
    industryId: string;
}

const IndustryHeroEditor: React.FC<IndustryHeroEditorProps> = ({ data, onChange, isEditing, industryId }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    // Helper to handle image uploads
    const handleImageUpload = (key: keyof HeroSectionData, url: string) => {
        onChange({ ...data, [key]: url });
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Text Content */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                            <Type className="w-4 h-4 text-primary-600" />
                            <h3 className="font-semibold text-gray-900 text-sm">Text Content</h3>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm font-bold disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    name="description"
                                    value={data.description}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    rows={4}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm resize-none disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Button Text</label>
                                <input
                                    name="buttonText"
                                    value={data.buttonText || ''}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                            <ImageIcon className="w-4 h-4 text-primary-600" />
                            <h3 className="font-semibold text-gray-900 text-sm">Hero Images</h3>
                        </div>
                        <div className="p-5 space-y-6">
                            {/* Main Image */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-2">Main Hero Image</label>
                                <div className="h-64">
                                    <ImageUpload
                                        value={data.mainImage}
                                        onChange={(url) => handleImageUpload('mainImage', url)}
                                        disabled={!isEditing}
                                        folder={`industries/${industryId}/hero`}
                                        fileName="main-image"
                                        className="h-full w-full"
                                    />
                                </div>
                                <input
                                    placeholder="Alt Text"
                                    name="mainImageAlt"
                                    value={data.mainImageAlt || ''}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="mt-2 w-full px-3 py-2 rounded-lg border border-gray-200 text-xs disabled:bg-gray-50 disabled:text-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Preview Hint */}
            <div className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-xl border border-primary-100 flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-primary-500"><Eye className="w-5 h-5" /></div>
                <div>
                    <p className="text-sm font-semibold text-gray-900">Real-time Preview</p>
                    <p className="text-xs text-gray-600">Changes made here are reflected immediately on the page preview (if visible) or upon saving.</p>
                </div>
            </div>
        </div>
    );
};

export default IndustryHeroEditor;
