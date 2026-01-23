import React from 'react';
import { BarChart3, Plus, Trash2 } from 'lucide-react';
import { NumberSpeaksData } from '../../../../Data/categoryData';

interface IndustryStatsEditorProps {
    data: NumberSpeaksData;
    onChange: (data: NumberSpeaksData) => void;
    isEditing: boolean;
}

const IndustryStatsEditor: React.FC<IndustryStatsEditorProps> = ({ data, onChange, isEditing }) => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Info */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">Section Header</h3>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Section Title</label>
                        <input
                            value={data.title || ''}
                            onChange={(e) => onChange({ ...data, title: e.target.value })}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm font-bold disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
                        <input
                            value={data.subtitle || ''}
                            onChange={(e) => onChange({ ...data, subtitle: e.target.value })}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Items */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Stats Items</h3>
                    {/* {isEditing && (
                        <button
                            onClick={() => {
                                const newStats = [...data.stats, { value: '0', description: 'New Stat' }];
                                onChange({ ...data, stats: newStats });
                            }}
                            className="text-sm bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                        >
                            <Plus className="w-4 h-4" /> Add Stat
                        </button>
                    )} */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative group hover:border-primary-200 transition-all">
                            {/* {isEditing && (
                                <button
                                    onClick={() => {
                                        const newStats = data.stats.filter((_, i) => i !== index);
                                        onChange({ ...data, stats: newStats });
                                    }}
                                    className="absolute top-2 right-2 text-red-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded"
                                >
                                    <Trash2 className="w-3 h-3" />
                                </button>
                            )} */}
                            <div className="space-y-4 pr-6">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Value</label>
                                    <input
                                        value={stat.value}
                                        onChange={(e) => {
                                            const newStats = [...data.stats];
                                            newStats[index] = { ...stat, value: e.target.value };
                                            onChange({ ...data, stats: newStats });
                                        }}
                                        disabled={!isEditing}
                                        className="w-full px-3 py-1.5 text-lg font-bold border-b border-gray-200 focus:border-primary-500 outline-none transition-all bg-transparent disabled:text-gray-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                                    <input
                                        value={stat.description}
                                        onChange={(e) => {
                                            const newStats = [...data.stats];
                                            newStats[index] = { ...stat, description: e.target.value };
                                            onChange({ ...data, stats: newStats });
                                        }}
                                        disabled={!isEditing}
                                        className="w-full px-3 py-1.5 text-sm border-b border-gray-200 focus:border-primary-500 outline-none transition-all bg-transparent disabled:text-gray-500"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustryStatsEditor;
