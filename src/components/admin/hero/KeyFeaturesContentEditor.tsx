import React from 'react';
import { Type, ImageIcon, Upload } from 'lucide-react';
import { HardwareFeatureItem } from '../../../Data/hardwareData';

export interface KeyFeaturesData {
    heading: string;
    subheading: string;
    features: HardwareFeatureItem[];
}

interface KeyFeaturesContentEditorProps {
    data: KeyFeaturesData;
    onUpdateFeature: (index: number, field: string, value: any) => void;
    isEditing: boolean;
}

const KeyFeaturesContentEditor: React.FC<KeyFeaturesContentEditorProps> = ({
    data,
    onUpdateFeature,
    isEditing
}) => {
    return (
        <div className={`space-y-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Type className="w-5 h-5" /></div>
                    <h2 className="text-lg font-semibold text-gray-900">Key Features</h2>
                </div>
                <div className="p-6 grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.features.map((feature, index) => (
                            <div key={index} className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-primary-200 transition-all space-y-4">
                                {/* Image Upload */}
                                {/* <div className="relative aspect-video bg-white rounded-lg border-2 border-dashed border-gray-300 overflow-hidden group/image hover:border-primary-400 transition-colors">
                                    <img src={feature.image} alt={feature.title} className="w-full h-full object-contain p-2" />
                                    {isEditing && (
                                        <label className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer">
                                            <Upload className="w-6 h-6 text-white mb-1" />
                                            <span className="text-xs text-white font-medium">Change Image</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => e.target.files?.[0] && onUpdateFeature(index, 'image', URL.createObjectURL(e.target.files[0]))}
                                            />
                                        </label>
                                    )}
                                </div> */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</label>
                                    <input
                                        value={feature.title}
                                        onChange={(e) => onUpdateFeature(index, 'title', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-primary-500 outline-none"
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</label>
                                    <textarea
                                        value={feature.description}
                                        onChange={(e) => onUpdateFeature(index, 'description', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-primary-500 outline-none resize-none"
                                        rows={4}
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFeaturesContentEditor;
