import React, { useState } from 'react';
import { usePricing } from '../../../contexts/PricingContext';
import { Save, Plus, Trash2, RefreshCw, Type, CheckSquare, AlignLeft, GripVertical } from 'lucide-react';
import { ComparisonFeature } from '../../../data/pricingData';

const PricingEditor = () => {
    const { plans, compareFeatures, updatePlan, updateFeature, addFeature, removeFeature } = usePricing();
    const [activeTab, setActiveTab] = useState<'plans' | 'comparison'>('plans');

    // Comparison feature local state for new item with dynamic keys
    const [newFeature, setNewFeature] = useState<Partial<ComparisonFeature>>({
        category: 'Point Of Sales',
        name: '',
        isHeader: false
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        // Since state is managed by context and updates locally immediately,
        // this is just a visual confirmation for the user.
        setIsEditing(false);
        alert('Changes saved successfully!');
    };

    const getCellValue = (feature: ComparisonFeature, planId: string): string | boolean => {
        const val = feature[planId];
        if (val === undefined) return false; // Default to unchecked if undefined
        return val as string | boolean;
    };

    return (
        <div className="">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Pricing Editor</h1>
                    <p className="text-gray-500 mt-1">Manage your pricing plans and comparison tables</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gray-900/10 active:scale-95"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>Edit Content</span>
                        </button>
                    ) : (
                        <button
                            onClick={handleSave}
                            className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-primary-600 text-gray font-medium hover:bg-primary-700 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary-500/30 active:scale-95"
                        >
                            <Save className="w-4 h-4" />
                            <span>Save Changes</span>
                        </button>
                    )}

                    <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>

                    <div className="flex bg-gray-100/80 p-1.5 rounded-xl gap-1">
                        <button
                            onClick={() => setActiveTab('plans')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'plans'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                                }`}
                        >
                            Plans
                        </button>
                        <button
                            onClick={() => setActiveTab('comparison')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'comparison'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                                }`}
                        >
                            Comparison Table
                        </button>
                    </div>
                </div>
            </div>

            {/* Plans Tab */}
            {activeTab === 'plans' && (
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div key={plan.id} className={`bg-white rounded-2xl shadow-sm border p-6 transition-all duration-300 ${isEditing ? 'border-primary-200 ring-2 ring-primary-50' : 'border-gray-100 hover:shadow-md'}`}>
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex-1 mr-4">
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Plan Name</label>
                                    <input
                                        type="text"
                                        disabled={!isEditing}
                                        value={plan.name}
                                        onChange={(e) => updatePlan(plan.id, { name: e.target.value })}
                                        className="w-full px-0 py-1 text-xl font-bold text-gray-900 border-b-2 border-transparent focus:border-primary-500 focus:outline-none bg-transparent disabled:opacity-100"
                                        placeholder="Enter plan name"
                                    />
                                </div>
                                {plan.recommended && (
                                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap border border-orange-200">
                                        Recommended
                                    </span>
                                )}
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Price Display</label>
                                    <input
                                        type="text"
                                        disabled={!isEditing}
                                        value={plan.price}
                                        onChange={(e) => updatePlan(plan.id, { price: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all font-medium disabled:bg-gray-50/50 disabled:text-gray-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Description</label>
                                    <textarea
                                        disabled={!isEditing}
                                        value={plan.description}
                                        onChange={(e) => updatePlan(plan.id, { description: e.target.value })}
                                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all disabled:bg-gray-50/50 disabled:text-gray-500 min-h-[80px] resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                                        Features <span className="text-gray-400 font-normal normal-case">(One per line)</span>
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            disabled={!isEditing}
                                            value={plan.features.join('\n')}
                                            onChange={(e) => updatePlan(plan.id, { features: e.target.value.split('\n') })}
                                            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all disabled:bg-gray-50/50 disabled:text-gray-500 min-h-[200px] font-mono text-sm leading-relaxed"
                                        />
                                        <div className="absolute right-3 top-3 pointer-events-none">
                                            <AlignLeft className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Comparison Tab */}
            {activeTab === 'comparison' && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Feature Matrix</h3>
                            <p className="text-sm text-gray-500">Define what features are available in each plan</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-4 w-1/4 font-semibold text-gray-600 uppercase text-xs tracking-wider">Feature Name / Category</th>
                                    {plans.map(plan => (
                                        <th key={plan.id} className="px-6 py-4 text-center font-semibold text-gray-800 border-l border-gray-100 min-w-[140px]">
                                            {plan.name}
                                        </th>
                                    ))}
                                    <th className="px-4 py-4 w-16 text-center border-l border-gray-100"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {compareFeatures.map((feature, idx) => (
                                    <tr
                                        key={idx}
                                        className={`group transition-colors ${feature.isHeader
                                            ? 'bg-gray-50 hover:bg-gray-100'
                                            : 'bg-white hover:bg-blue-50/30'
                                            }`}
                                    >
                                        <td className="px-6 py-3 border-r border-transparent">
                                            {feature.isHeader ? (
                                                <div className="flex items-center">
                                                    <GripVertical className="w-4 h-4 text-gray-300 mr-2 opacity-0 group-hover:opacity-100 cursor-grab" />
                                                    <input
                                                        type="text"
                                                        disabled={!isEditing}
                                                        value={feature.category}
                                                        onChange={(e) => updateFeature(idx, { category: e.target.value })}
                                                        className="bg-transparent font-bold text-gray-800 hover:border-gray-300 focus:border-primary-500 border-b border-transparent focus:outline-none w-full py-1 disabled:cursor-not-allowed"
                                                        placeholder="Category Name"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex items-center pl-6">
                                                    <input
                                                        type="text"
                                                        disabled={!isEditing}
                                                        value={feature.name}
                                                        onChange={(e) => updateFeature(idx, { name: e.target.value })}
                                                        className="bg-transparent text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-300 focus:border-primary-500 focus:outline-none w-full py-1 disabled:cursor-not-allowed transition-colors"
                                                        placeholder="Feature Name"
                                                    />
                                                </div>
                                            )}
                                        </td>

                                        {/* Dynamic Plan Columns */}
                                        {plans.map((plan) => {
                                            const cellValue = getCellValue(feature, plan.id);
                                            const isBool = typeof cellValue === 'boolean';

                                            // Don't render cells for header rows, just span if needed (or keep empty styling)
                                            if (feature.isHeader) {
                                                return <td key={plan.id} className="bg-gray-50 border-gray-100 border-l"></td>;
                                            }

                                            return (
                                                <td key={plan.id} className="px-4 py-3 text-center border-l border-gray-100 group-hover:border-blue-100">
                                                    <div className="flex items-center justify-center gap-2">
                                                        {/* Toggle Type Button (only in edit mode) */}
                                                        {isEditing && (
                                                            <button
                                                                onClick={() => {
                                                                    // Toggle between boolean and empty string
                                                                    const newVal = isBool ? "" : true;
                                                                    updateFeature(idx, { [plan.id]: newVal });
                                                                }}
                                                                className="p-1 text-gray-300 hover:text-primary-600 rounded transition-colors"
                                                                title={isBool ? "Switch to Text" : "Switch to Checkbox"}
                                                            >
                                                                {isBool ? <Type className="w-3 h-3" /> : <CheckSquare className="w-3 h-3" />}
                                                            </button>
                                                        )}

                                                        {isBool ? (
                                                            <input
                                                                type="checkbox"
                                                                disabled={!isEditing}
                                                                checked={cellValue as boolean}
                                                                onChange={(e) => updateFeature(idx, { [plan.id]: e.target.checked })}
                                                                className="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 disabled:opacity-50 cursor-pointer transition-all"
                                                            />
                                                        ) : (
                                                            <input
                                                                type="text"
                                                                disabled={!isEditing}
                                                                value={cellValue as string}
                                                                onChange={(e) => updateFeature(idx, { [plan.id]: e.target.value })}
                                                                className="w-full text-xs text-center border border-gray-200 rounded-md py-1.5 px-2 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none disabled:bg-gray-50 disabled:text-gray-400"
                                                                placeholder="e.g. $10"
                                                            />
                                                        )}
                                                    </div>
                                                </td>
                                            );
                                        })}

                                        <td className="px-4 py-3 text-center border-l border-gray-100">
                                            <button
                                                disabled={!isEditing}
                                                onClick={() => removeFeature(idx)}
                                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-0 disabled:cursor-not-allowed group-hover:opacity-100"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Add New Feature Footer */}
                    {isEditing && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                            <h4 className="font-semibold text-gray-800 mb-4 text-sm uppercase tracking-wide">Add New Entry</h4>
                            <div className="flex flex-col md:flex-row gap-4 items-end bg-white p-4 rounded-xl border border-dotted border-gray-300">
                                <div className="flex-1 w-full relative">
                                    <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Category</label>
                                    <input
                                        type="text"
                                        value={newFeature.category}
                                        onChange={(e) => setNewFeature({ ...newFeature, category: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                                        placeholder="e.g. Point Of Sales"
                                    />
                                </div>
                                <div className="flex-1 w-full">
                                    <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Feature Name</label>
                                    <input
                                        type="text"
                                        value={newFeature.name}
                                        onChange={(e) => setNewFeature({ ...newFeature, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                                        placeholder="e.g. Offline Support"
                                    />
                                </div>
                                <div className="flex items-center h-10 px-2">
                                    <label className="flex items-center cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={newFeature.isHeader}
                                                onChange={(e) => setNewFeature({ ...newFeature, isHeader: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                                        </div>
                                        <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Header Row?</span>
                                    </label>
                                </div>
                                <button
                                    onClick={() => {
                                        // Initialize new feature with defaults for all plans
                                        const featureToAdd = { ...newFeature };
                                        plans.forEach(plan => {
                                            featureToAdd[plan.id] = true; // Default to checked
                                        });

                                        addFeature(featureToAdd as ComparisonFeature);
                                        setNewFeature({
                                            category: newFeature.category, // Keep category for easier repetitive entry
                                            name: '',
                                            isHeader: false
                                        });
                                    }}
                                    className="w-full md:w-auto px-6 py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl text-sm font-medium flex items-center justify-center transition-all hover:shadow-lg shadow-gray-900/10 active:scale-95"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Row
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PricingEditor;
