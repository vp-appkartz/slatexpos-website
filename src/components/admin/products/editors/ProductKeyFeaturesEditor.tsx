import React from 'react';
import { List, Plus, Trash2, Upload } from 'lucide-react';
import { FeatureItem } from '../../../../Data/productData';

interface KeyFeaturesSectionData {
    heading?: string;
    subheading?: string;
    features: FeatureItem[];
    maxW?: string;
}

interface ProductKeyFeaturesEditorProps {
    data: KeyFeaturesSectionData;
    onChange: (data: KeyFeaturesSectionData) => void;
    isEditing: boolean;
}

const ProductKeyFeaturesEditor: React.FC<ProductKeyFeaturesEditorProps> = ({ data, onChange, isEditing }) => {

    const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    const handleFeatureChange = (index: number, field: keyof FeatureItem, value: string) => {
        const newFeatures = [...data.features];
        newFeatures[index] = { ...newFeatures[index], [field]: value };
        onChange({ ...data, features: newFeatures });
    };

    const addFeature = () => {
        onChange({
            ...data,
            features: [...data.features, { title: 'New Feature', description: 'Description', image: '' }]
        });
    };

    const removeFeature = (index: number) => {
        onChange({
            ...data,
            features: data.features.filter((_, i) => i !== index)
        });
    };

    const handleImageUpload = (index: number, file: File) => {
        const imageUrl = URL.createObjectURL(file);
        handleFeatureChange(index, 'image', imageUrl);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                    <List className="w-4 h-4 text-primary-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">Key Features Header</h3>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Heading</label>
                        <input
                            name="heading"
                            value={data.heading || ''}
                            onChange={handleHeaderChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 outline-none text-sm font-bold disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Subheading</label>
                        <input
                            name="subheading"
                            value={data.subheading || ''}
                            onChange={handleHeaderChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 outline-none text-sm disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.features.map((feature, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-md transition-all relative">
                        {/* Image Preview */}
                        {/* <div className="aspect-video bg-gray-50 relative overflow-hidden group-image">
                            {feature.image ? (
                                <img src={feature.image} className="w-full h-full object-cover" alt={feature.title} />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 text-xs">No Image</div>
                            )}
                            {isEditing && (
                                <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                                    <Upload className="text-white w-5 h-5" />
                                    <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && handleImageUpload(idx, e.target.files[0])} />
                                </label>
                            )}
                        </div> */}

                        <div className="p-4 space-y-3">
                            <input
                                value={feature.title}
                                onChange={(e) => handleFeatureChange(idx, 'title', e.target.value)}
                                disabled={!isEditing}
                                className="w-full font-semibold text-gray-900 border-none p-0 focus:ring-0 text-sm placeholder-gray-400 disabled:bg-transparent"
                                placeholder="Feature Title"
                            />
                            <textarea
                                value={feature.description}
                                onChange={(e) => handleFeatureChange(idx, 'description', e.target.value)}
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
    );
};

export default ProductKeyFeaturesEditor;
