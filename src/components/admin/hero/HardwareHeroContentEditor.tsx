import React from 'react';
import { Type, ImageIcon, Upload, Eye } from 'lucide-react';
import { HardwareHeroSectionData } from '../../../Data/hardwareData';

interface HardwareHeroContentEditorProps {
    data: HardwareHeroSectionData;
    onChange: (field: string, value: any) => void;
    onImageChange: (field: string, value: string) => void;
    isEditing: boolean;
}

const HardwareHeroContentEditor: React.FC<HardwareHeroContentEditorProps> = ({
    data,
    onChange,
    onImageChange,
    isEditing
}) => {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-1 gap-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>
            <div className="lg:col-span-2 space-y-8">
                {/* Text Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Type className="w-5 h-5" /></div>
                        <h2 className="text-lg font-semibold text-gray-900">Hero Text Content</h2>
                    </div>
                    <div className="p-6 grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</label>
                                <input
                                    value={data.title}
                                    onChange={(e) => onChange('title', e.target.value)}
                                    className="input-field"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Button Text</label>
                                <input
                                    value={data.buttonText || ''}
                                    onChange={(e) => onChange('buttonText', e.target.value)}
                                    className="input-field"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => onChange('description', e.target.value)}
                                    className="input-field"
                                    rows={3}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Visuals */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><ImageIcon className="w-5 h-5" /></div>
                        <h2 className="text-lg font-semibold text-gray-900">Visuals</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Background Image */}
                        {/* Main Image */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">Main Image</label>
                            <div className="relative aspect-square bg-gray-50 rounded-xl border-dashed border-2 border-gray-200 overflow-hidden group">
                                <img src={data.mainImage} className="w-full h-full object-contain p-2" alt="Main Hero" />
                                {isEditing && (
                                    <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <Upload className="text-white w-6 h-6" />
                                        <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && onImageChange('mainImage', URL.createObjectURL(e.target.files[0]))} />
                                    </label>
                                )}
                            </div>
                        </div>
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

export default HardwareHeroContentEditor;
