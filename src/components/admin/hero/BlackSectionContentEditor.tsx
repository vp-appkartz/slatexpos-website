import React from 'react';
import {
    Type,
    Image as ImageIcon,
    Check,
    Eye
} from 'lucide-react';
import ImageUpload from '../../common/ImageUpload';

export interface BlackSectionData {
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
    trustIndicators: string[];
}

interface BlackSectionContentEditorProps {
    data: BlackSectionData;
    onChange: (field: keyof BlackSectionData, value: any) => void;
    onTrustIndicatorChange: (index: number, value: string) => void;
    onImageUpload: (url: string) => void;
    isEditing: boolean;
}

const BlackSectionContentEditor: React.FC<BlackSectionContentEditorProps> = ({
    data,
    onChange,
    onTrustIndicatorChange,
    onImageUpload,
    isEditing
}) => {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>
            <div className="space-y-8">
                {/* Text Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                            <Type className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">Text & Content</h2>
                    </div>
                    <div className="p-4 sm:p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => onChange('title', e.target.value)}
                                disabled={!isEditing}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50 disabled:text-gray-500 font-semibold text-lg"
                                placeholder="Enter title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => onChange('description', e.target.value)}
                                disabled={!isEditing}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50 disabled:text-gray-500 min-h-[120px] resize-y"
                                placeholder="Enter description"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                            <input
                                type="text"
                                value={data.buttonText}
                                onChange={(e) => onChange('buttonText', e.target.value)}
                                disabled={!isEditing}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50 disabled:text-gray-500"
                                placeholder="Button Text"
                            />
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                <Check className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-semibold text-gray-900">Trust Indicators</h2>
                        </div>
                    </div>
                    <div className="p-4 sm:p-6 space-y-3">
                        {data.trustIndicators.map((indicator, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                    <Check className="w-4 h-4" />
                                </div>
                                <input
                                    value={indicator}
                                    onChange={(e) => onTrustIndicatorChange(index, e.target.value)}
                                    disabled={!isEditing}
                                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50 disabled:text-gray-500"
                                    placeholder="Enter trust point"
                                />
                                <button
                                    onClick={() => { /* Note: Remove handler logic needs to be passed down if we want individual remove buttons here, but currently it's managed via parent or text clearing. For now, assuming just input editing. */ }}
                                    className="mt-2 text-red-500 hover:text-red-700 text-sm hidden" // Hidden for now as remove logic wasn't explicitly requested here, just styling.
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                {/* Visuals */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                            <ImageIcon className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">Visuals</h2>
                    </div>
                    <div className="p-4 sm:p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Side Image</label>
                            <div className="h-64">
                                <ImageUpload
                                    value={data.imageSrc}
                                    onChange={onImageUpload}
                                    disabled={!isEditing}
                                    folder="black-section"
                                    fileName="black-section-image"
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image Alt Text (SEO)</label>
                            <input
                                type="text"
                                value={data.imageAlt}
                                onChange={(e) => onChange('imageAlt', e.target.value)}
                                disabled={!isEditing}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none text-gray-900 placeholder-gray-400 disabled:bg-gray-50 disabled:text-gray-500"
                                placeholder="Image description"
                            />
                        </div> */}
                    </div>
                </div>

                {/* Preview Hint */}
                <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary-500"><Eye className="w-6 h-6" /></div>
                        <div><h3 className="font-semibold text-gray-900 mb-1">Live Preview</h3><p className="text-sm text-gray-600">Changes reflect immediately.</p></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlackSectionContentEditor;
