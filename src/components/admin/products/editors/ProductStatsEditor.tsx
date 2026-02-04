import React from 'react';
import { BarChart } from 'lucide-react';
import { StatItem } from '../../../../Data/productData';

interface StatsSectionData {
    title?: string;
    subtitle?: string;
    stats: StatItem[];
}

interface ProductStatsEditorProps {
    data: StatsSectionData;
    onChange: (data: StatsSectionData) => void;
    isEditing: boolean;
    productId: string;
}

const ProductStatsEditor: React.FC<ProductStatsEditorProps> = ({ data, onChange, isEditing, productId }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...data, [name]: value });
    };

    const handleStatChange = (index: number, field: keyof StatItem, value: string) => {
        const newStats = [...data.stats];
        newStats[index] = { ...newStats[index], [field]: value };
        onChange({ ...data, stats: newStats });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-primary-600" />
                        <h3 className="font-semibold text-gray-900 text-sm">Number Speaks Content</h3>
                    </div>
                </div>
                <div className="p-5 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Section Title</label>
                            <input
                                name="title"
                                value={data.title || ''}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm font-bold disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
                            <input
                                name="subtitle"
                                value={data.subtitle || ''}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">Statistics Cards</h3>
                </div>
                <div className="p-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {data.stats.map((stat, idx) => (
                            <div key={idx} className="relative p-4 rounded-xl border border-gray-100 bg-gray-50/50 group hover:bg-white hover:shadow-md transition-all">
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Value</label>
                                        <input
                                            value={stat.value}
                                            onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                                            disabled={!isEditing}
                                            className="w-full bg-transparent border-b border-gray-200 focus:border-primary-500 outline-none p-1 text-lg font-bold text-gray-900 disabled:border-transparent disabled:text-gray-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Description</label>
                                        <textarea
                                            value={stat.description}
                                            onChange={(e) => handleStatChange(idx, 'description', e.target.value)}
                                            disabled={!isEditing}
                                            rows={2}
                                            className="w-full bg-transparent border-b border-gray-200 focus:border-primary-500 outline-none p-1 text-sm text-gray-600 resize-none disabled:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStatsEditor;
