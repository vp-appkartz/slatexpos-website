import React from 'react';
import {
    Type,
    Image as ImageIcon,
    Check,
    Upload,
    Plus,
    Trash2,
    Eye
} from 'lucide-react';

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
    onAddTrustIndicator: () => void;
    onRemoveTrustIndicator: (index: number) => void;
    onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isEditing: boolean;
}

const BlackSectionContentEditor: React.FC<BlackSectionContentEditorProps> = ({
    data,
    onChange,
    onTrustIndicatorChange,
    onAddTrustIndicator,
    onRemoveTrustIndicator,
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
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => onChange('title', e.target.value)}
                                disabled={!isEditing}
                                className="input-field font-semibold text-lg"
                                placeholder="Enter title"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => onChange('description', e.target.value)}
                                disabled={!isEditing}
                                className="input-field min-h-[100px]"
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
                                className="input-field"
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
                        {/* {isEditing && (
                            <button
                                onClick={onAddTrustIndicator}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Add</span>
                            </button>
                        )} */}
                    </div>
                    <div className="p-6 space-y-3">
                        {data.trustIndicators.map((indicator, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                    <Check className="w-4 h-4" />
                                </div>
                                <input
                                    value={indicator}
                                    onChange={(e) => onTrustIndicatorChange(index, e.target.value)}
                                    disabled={!isEditing}
                                    className="input-field flex-1"
                                    placeholder="Enter trust point"
                                />
                                {/* {isEditing && (
                                    <button
                                        onClick={() => onRemoveTrustIndicator(index)}
                                        className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )} */}
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
                    <div className="p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Side Image</label>
                            <div className="relative aspect-video bg-gray-50 rounded-xl border-dashed border-2 border-gray-200 overflow-hidden group">
                                <img
                                    src={data.imageSrc}
                                    alt={data.imageAlt}
                                    className="w-full h-full object-cover"
                                />
                                {isEditing && (
                                    <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <Upload className="text-white w-8 h-8" />
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={onImageUpload}
                                            accept="image/*"
                                        />
                                    </label>
                                )}
                            </div>
                        </div>
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image Alt Text (SEO)</label>
                            <input
                                type="text"
                                value={data.imageAlt}
                                onChange={(e) => onChange('imageAlt', e.target.value)}
                                disabled={!isEditing}
                                className="input-field"
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

            <style>{`
                .input-field {
                    width: 100%;
                    padding: 0.625rem 1rem;
                    border-radius: 0.5rem;
                    border: 1px solid #e5e7eb;
                    outline: none;
                    transition: all 0.2s;
                    font-size: 0.875rem;
                    color: #111827;
                }
                .input-field:focus {
                    border-color: #f97316;
                    box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1);
                }
                .input-field:disabled {
                    background-color: #f3f4f6;
                    color: #9ca3af;
                }
            `}</style>
        </div>
    );
};

export default BlackSectionContentEditor;
