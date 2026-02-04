import React from 'react';
import { CreditCard, Plus, Trash2 } from 'lucide-react';
import ImageUpload from '../../../common/ImageUpload';
import { BlackCardSectionData } from '../../../../Data/categoryData';

interface IndustryBlackCardEditorProps {
    data: BlackCardSectionData;
    onChange: (data: BlackCardSectionData) => void;
    isEditing: boolean;
    industryId: string;
}

const IndustryBlackCardEditor: React.FC<IndustryBlackCardEditorProps> = ({ data, onChange, isEditing, industryId }) => {
    // Safety check
    const safeData = data || { heading: '', subheading: '', items: [] };

    const handleItemChange = (index: number, field: keyof typeof safeData.items[0], value: string) => {
        const newItems = [...(safeData.items || [])];
        newItems[index] = { ...newItems[index], [field]: value };
        onChange({ ...safeData, items: newItems });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header Info */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">Tech Stack (Black Card) Header</h3>
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

            {/* List Items */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Tech Stack Items</h3>
                    {/* {isEditing && (
                        <button
                            onClick={() => {
                                const newItems = [...(safeData.items || []), { image: '', title: 'New Item', description: '' }];
                                onChange({ ...safeData, items: newItems });
                            }}
                            className="text-sm bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                        >
                            <Plus className="w-4 h-4" /> Add Item
                        </button>
                    )} */}
                </div>

                <div className="space-y-3">
                    {safeData.items?.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4 items-start group hover:shadow-sm transition-all relative">
                            {/* {isEditing && (
                                <button
                                    onClick={() => {
                                        const newItems = safeData.items.filter((_, i) => i !== index);
                                        onChange({ ...safeData, items: newItems });
                                    }}
                                    className="absolute top-2 right-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all z-10"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )} */}

                            {/* Content */}
                            <div className="w-16 h-16 flex-shrink-0">
                                <ImageUpload
                                    value={item.image}
                                    onChange={(url) => handleItemChange(index, 'image', url)}
                                    disabled={!isEditing}
                                    folder={`industries/${industryId}/black-card/${index}`}
                                    fileName={`feature-${index}`}
                                    className="h-full w-full rounded-lg"
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <input
                                    value={item.title}
                                    onChange={(e) => handleItemChange(index, 'title', e.target.value)}
                                    disabled={!isEditing}
                                    className="block w-full text-sm font-semibold text-gray-900 bg-transparent focus:outline-none border-b border-transparent focus:border-primary-300 placeholder-gray-400 disabled:text-gray-900"
                                    placeholder="Item Title"
                                />
                                <textarea
                                    value={item.description}
                                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                                    disabled={!isEditing}
                                    rows={2}
                                    className="block w-full text-sm text-gray-600 bg-transparent focus:outline-none resize-none placeholder-gray-400 disabled:text-gray-600"
                                    placeholder="Item description"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustryBlackCardEditor;
