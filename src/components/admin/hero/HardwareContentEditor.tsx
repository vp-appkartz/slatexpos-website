import React from 'react';
import {
    Monitor,
    Trash2,
    Plus,
    Upload,
    ChevronRight,
    LayoutGrid
} from 'lucide-react';

interface HardwareItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface SolutionItem {
    id: number;
    title: string;
    row: number;
}

export interface HardwareData {
    items: HardwareItem[];
    solutions: SolutionItem[];
}

interface HardwareContentEditorProps {
    data: HardwareData;
    onItemChange: (id: number, field: keyof HardwareItem, value: any) => void;
    onAddItem: () => void;
    onRemoveItem: (id: number) => void;
    onImageUpload: (id: number, file: File) => void;
    // Solutions
    onSolutionChange: (id: number, field: keyof SolutionItem, value: any) => void;
    onAddSolution: () => void;
    onRemoveSolution: (id: number) => void;
    isEditing: boolean;
}

const HardwareContentEditor: React.FC<HardwareContentEditorProps> = ({
    data,
    onItemChange,
    onAddItem,
    onRemoveItem,
    onImageUpload,
    onSolutionChange,
    onAddSolution,
    onRemoveSolution,
    isEditing
}) => {
    return (
        <div className={`space-y-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>

            {/* Hardware Items Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                            <Monitor className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">Hardware Showcase Items</h2>
                    </div>
                    {/* {isEditing && (
                        <button
                            onClick={onAddItem}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600 text-gray text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Add Item</span>
                        </button>
                    )} */}
                </div>

                <div className="p-6 space-y-6">
                    {data.items.map((item) => (
                        <div key={item.id} className="relative group p-6 rounded-xl border border-gray-200 bg-gray-50 hover:border-primary-200 transition-all">
                            {/* {isEditing && (
                                <div className="absolute top-4 right-4 flex items-center gap-2">
                                    <span className="text-xs font-mono text-gray-400">ID: {item.id}</span>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Remove Item"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            )} */}

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                {/* Image Upload */}
                                <div className="md:col-span-3">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Device Image</label>
                                        <div className="relative aspect-square bg-white rounded-lg border-2 border-dashed border-gray-300 overflow-hidden group/image hover:border-primary-400 transition-colors">
                                            {item.image ? (
                                                <img src={item.image} alt={item.title} className="w-full h-full object-contain p-4" />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                                    <Monitor className="w-8 h-8 opacity-50" />
                                                </div>
                                            )}

                                            {isEditing && (
                                                <label className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity cursor-pointer">
                                                    <Upload className="w-6 h-6 text-white mb-1" />
                                                    <span className="text-xs text-white font-medium">Change Image</span>
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={(e) => e.target.files?.[0] && onImageUpload(item.id, e.target.files[0])}
                                                    />
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Fields */}
                                <div className="md:col-span-9 space-y-4">
                                    <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Title</label>
                                        <input
                                            value={item.title}
                                            onChange={(e) => onItemChange(item.id, 'title', e.target.value)}
                                            disabled={!isEditing}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all font-medium text-gray-900"
                                            placeholder="e.g. SlateX Station"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Description</label>
                                        <textarea
                                            value={item.description}
                                            onChange={(e) => onItemChange(item.id, 'description', e.target.value)}
                                            disabled={!isEditing}
                                            rows={3}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all text-gray-600 resize-none"
                                            placeholder="Device description..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {data.items.length === 0 && (
                        <div className="text-center py-10 text-gray-400">
                            <Monitor className="w-10 h-10 mx-auto mb-3 opacity-30" />
                            <p>No hardware items added yet.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Solutions Buttons Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                            <LayoutGrid className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">Solution Buttons</h2>
                    </div>
                    {/* {isEditing && (
                        <button
                            onClick={onAddSolution}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600 text-gray text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Add Solution</span>
                        </button>
                    )} */}
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.solutions.map((solution) => (
                            <div key={solution.id} className="relative group p-4 rounded-xl border border-gray-200 bg-gray-50 flex items-center gap-3">
                                {/* {isEditing && (
                                    <button
                                        onClick={() => onRemoveSolution(solution.id)}
                                        className="absolute -top-2 -right-2 p-1.5 bg-white shadow-sm border border-gray-100 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                )} */}

                                <div className="flex-1 space-y-2">
                                    <input
                                        value={solution.title}
                                        onChange={(e) => onSolutionChange(solution.id, 'title', e.target.value)}
                                        disabled={!isEditing}
                                        className="w-full px-3 py-1.5 rounded bg-white border border-gray-200 text-sm font-medium focus:border-primary-500 outline-none"
                                        placeholder="Solution Title"
                                    />
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400 uppercase">Row:</span>
                                        <select
                                            value={solution.row}
                                            onChange={(e) => onSolutionChange(solution.id, 'row', parseInt(e.target.value))}
                                            disabled={!isEditing}
                                            className="px-2 py-1 rounded bg-white border border-gray-200 text-xs focus:border-primary-500 outline-none"
                                        >
                                            <option value={1}>Row 1</option>
                                            <option value={2}>Row 2</option>
                                        </select>
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

export default HardwareContentEditor;
