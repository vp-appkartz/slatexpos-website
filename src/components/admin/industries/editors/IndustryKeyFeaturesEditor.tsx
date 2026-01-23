import React from 'react';
import { List, Plus, Trash2 } from 'lucide-react';
import { KeyFeaturesData } from '../../../../Data/categoryData';

interface IndustryKeyFeaturesEditorProps {
    data: KeyFeaturesData;
    onChange: (data: KeyFeaturesData) => void;
    isEditing: boolean;
}

const IndustryKeyFeaturesEditor: React.FC<IndustryKeyFeaturesEditorProps> = ({ data, onChange, isEditing }) => {
    // Safety check
    const safeData = data || { heading: '', subheading: '', features: [] };

    const handleFeatureChange = (index: number, field: keyof typeof safeData.features[0], value: string) => {
        const newFeatures = [...(safeData.features || [])];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        onChange({ ...safeData, features: newFeatures });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header Info */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                    <List className="w-4 h-4 text-primary-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">Key Features Header</h3>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Heading</label>
                        <input
                            value={safeData.heading || ''}
                            onChange={(e) => onChange({ ...safeData, heading: e.target.value })}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 outline-none text-sm font-bold disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Subheading</label>
                        <input
                            value={safeData.subheading || ''}
                            onChange={(e) => onChange({ ...safeData, subheading: e.target.value })}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 outline-none text-sm disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Features List</h3>
                    {/* {isEditing && (
                        <button
                            onClick={() => {
                                const newFeatures = [...(safeData.features || []), { image: '', title: 'New Feature', description: '' }];
                                onChange({ ...safeData, features: newFeatures });
                            }}
                            className="text-sm bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                        >
                            <Plus className="w-4 h-4" /> Add Feature
                        </button>
                    )} */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {safeData.features?.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-md transition-all relative">
                            {/* {isEditing && (
                                <button
                                    onClick={() => {
                                        const newFeatures = safeData.features.filter((_, i) => i !== index);
                                        onChange({ ...safeData, features: newFeatures });
                                    }}
                                    className="absolute top-2 right-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all z-10"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )} */}

                            <div className="p-4 space-y-3">
                                <input
                                    value={feature.title}
                                    onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full font-semibold text-gray-900 border-none p-0 focus:ring-0 text-sm placeholder-gray-400 disabled:bg-transparent"
                                    placeholder="Feature Title"
                                />
                                <textarea
                                    value={feature.description}
                                    onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                                    disabled={!isEditing}
                                    rows={3}
                                    className="w-full text-sm text-gray-500 border-none p-0 focus:ring-0 resize-none placeholder-gray-400 disabled:bg-transparent"
                                    placeholder="Feature description..."
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustryKeyFeaturesEditor;
