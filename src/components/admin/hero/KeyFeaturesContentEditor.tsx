import React from 'react';
import { Type, ImageIcon, Upload } from 'lucide-react';
import ImageUpload from '../../Common/ImageUpload';
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
                                {/* Image Upload */}
                                <div className="h-40 rounded-lg overflow-hidden border border-gray-200 bg-white">
                                    <ImageUpload
                                        value={feature.image}
                                        onChange={(url) => onUpdateFeature(index, 'image', url)}
                                        disabled={!isEditing}
                                        folder="hardware/features"
                                        fileName={`feature-${index}`}
                                        className="h-full w-full"
                                    />
                                </div>
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
