import React from 'react';
import { CreditCard, Plus, Trash2, Upload } from 'lucide-react';
import ImageUpload from '../../../Common/ImageUpload';
import { BlackCardItem } from '../../../../Data/productData';

interface BlackCardSectionData {
    heading?: string;
    subheading?: string;
    items: BlackCardItem[];
}

interface ProductBlackCardEditorProps {
    data: BlackCardSectionData;
    onChange: (data: BlackCardSectionData) => void;
    isEditing: boolean;
    productId: string;
}

const ProductBlackCardEditor: React.FC<ProductBlackCardEditorProps> = ({ data, onChange, isEditing, productId }) => {
    const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    const handleItemChange = (index: number, field: keyof BlackCardItem, value: string) => {
        const newItems = [...data.items];
        newItems[index] = { ...newItems[index], [field]: value };
        onChange({ ...data, items: newItems });
    };

    const addItem = () => {
        onChange({
            ...data,
            items: [...data.items, { title: 'New Item', description: 'Description', image: '' }]
        });
    };

    const removeItem = (index: number) => {
        onChange({
            ...data,
            items: data.items.filter((_, i) => i !== index)
        });
    };

    const handleImageUpload = (index: number, url: string) => {
        handleItemChange(index, 'image', url);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">Black Section Header</h3>
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

            {/* List Items */}
            <div className="space-y-3">
                {data.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 flex gap-4 items-start group">
                        {/* Image */}
                        {/* Image */}
                        <div className="w-24 h-24 flex-shrink-0">
                            <ImageUpload
                                value={item.image || ''}
                                onChange={(url) => handleImageUpload(idx, url)}
                                disabled={!isEditing}
                                folder={`products/${productId}/black-card/${idx}`}
                                fileName={`item-${idx}`}
                                className="h-full w-full rounded-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                            <input
                                value={item.title}
                                onChange={(e) => handleItemChange(idx, 'title', e.target.value)}
                                disabled={!isEditing}
                                className="block w-full text-sm font-semibold text-gray-900 bg-transparent focus:outline-none border-b border-transparent focus:border-primary-300 placeholder-gray-400 disabled:text-gray-900"
                                placeholder="Item Title"
                            />
                            <textarea
                                value={item.description}
                                onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
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
    );
};

export default ProductBlackCardEditor;
