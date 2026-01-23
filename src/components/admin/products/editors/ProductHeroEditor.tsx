import React from 'react';
import {
    Image as ImageIcon,
    Type,
    Upload,
    Eye
} from 'lucide-react';

interface HeroSectionData {
    title: string;
    description: string;
    buttonText?: string;
    mainImage: string;
    mainImageAlt?: string;
    deviceImage?: string;
    deviceImageAlt?: string;
    deviceTitle?: string;
    deviceDescription?: string;
}

interface ProductHeroEditorProps {
    data: HeroSectionData;
    onChange: (data: HeroSectionData) => void;
    isEditing: boolean;
}

const ProductHeroEditor: React.FC<ProductHeroEditorProps> = ({ data, onChange, isEditing }) => {

    // Helper to handle text changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    // Helper to handle image uploads (mock)
    const handleImageUpload = (key: keyof HeroSectionData, file: File) => {
        const imageUrl = URL.createObjectURL(file);
        onChange({ ...data, [key]: imageUrl });
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
                            <h3 className="font-semibold text-gray-900 text-sm">Product Images</h3>
                        </div>
                        <div className="p-5 space-y-6">
                            {/* Main Image */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-2">Main Hero Image</label>
                                <div className="relative aspect-[4/3] bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 overflow-hidden group hover:border-primary-300 transition-colors">
                                    <img src={data.mainImage} className="w-full h-full object-contain p-4" alt="Main Product" />
                                    {isEditing && (
                                        <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                                            <div className="bg-white text-gray-900 text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-2">
                                                <Upload className="w-3 h-3" /> Change
                                            </div>
                                            <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && handleImageUpload('mainImage', e.target.files[0])} />
                                        </label>
                                    )}
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

export default ProductHeroEditor;
