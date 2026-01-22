import React from 'react';
import {
    Type,
    Image as ImageIcon,
    Plus,
    Trash2,
    Quote,
    User,
    Briefcase,
    MessageSquare
} from 'lucide-react';
import { TestimonialsData, TestimonialItem } from '../../Common/Testimonials';

interface TestimonialsContentEditorProps {
    data: TestimonialsData;
    onChange: (field: keyof TestimonialsData, value: any) => void;
    onItemChange: (id: number, field: keyof TestimonialItem, value: any) => void;
    onAddItem: () => void;
    onRemoveItem: (id: number) => void;
    onImageUpload: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    isEditing: boolean;
}

const TestimonialsContentEditor: React.FC<TestimonialsContentEditorProps> = ({
    data,
    onChange,
    onItemChange,
    onAddItem,
    onRemoveItem,
    onImageUpload,
    isEditing
}) => {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>
            <div className="space-y-8">
                {/* Section Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                            <Type className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">Section Header</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => onChange('title', e.target.value)}
                                disabled={!isEditing}
                                className="input-field font-semibold text-lg"
                                placeholder="e.g., Testimonials"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                            <textarea
                                value={data.subtitle}
                                onChange={(e) => onChange('subtitle', e.target.value)}
                                disabled={!isEditing}
                                className="input-field min-h-[80px]"
                                placeholder="e.g., Proof in every plate..."
                            />
                        </div>
                    </div>
                </div>

                {/* Testimonial Items List (Left Column for easier management) */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Testimonials List</h3>
                        {/* {isEditing && (
                            <button
                                onClick={onAddItem}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Add Testimonial</span>
                            </button>
                        )} */}
                    </div>

                    <div className="space-y-4">
                        {data.items.map((item, index) => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="px-6 py-3 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
                                    <div className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                                            {index + 1}
                                        </span>
                                        <span className="font-medium text-gray-700">{item.name || 'New Testimonial'}</span>
                                    </div>
                                    {/* {isEditing && (
                                        <button
                                            onClick={() => onRemoveItem(item.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )} */}
                                </div>

                                <div className="p-6 grid grid-cols-1 gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1">
                                                <User className="w-3 h-3" /> Name
                                            </label>
                                            <input
                                                value={item.name}
                                                onChange={(e) => onItemChange(item.id, 'name', e.target.value)}
                                                disabled={!isEditing}
                                                className="input-field text-sm"
                                                placeholder="Customer Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1">
                                                <Briefcase className="w-3 h-3" /> Position/Restaurant
                                            </label>
                                            <input
                                                value={item.position}
                                                onChange={(e) => onItemChange(item.id, 'position', e.target.value)}
                                                disabled={!isEditing}
                                                className="input-field text-sm"
                                                placeholder="e.g. Owner, Bombay Street"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1">
                                            <MessageSquare className="w-3 h-3" /> Review Text
                                        </label>
                                        <textarea
                                            value={item.text}
                                            onChange={(e) => onItemChange(item.id, 'text', e.target.value)}
                                            disabled={!isEditing}
                                            className="input-field min-h-[100px] text-sm"
                                            placeholder="The testimonial content..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1">
                                                Logo Text
                                            </label>
                                            <input
                                                value={item.logo}
                                                onChange={(e) => onItemChange(item.id, 'logo', e.target.value)}
                                                disabled={!isEditing}
                                                className="input-field text-sm"
                                                placeholder="e.g. Restaurant Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500 mb-1">
                                                Logo Subtext
                                            </label>
                                            <input
                                                value={item.logoSubtext}
                                                onChange={(e) => onItemChange(item.id, 'logoSubtext', e.target.value)}
                                                disabled={!isEditing}
                                                className="input-field text-sm"
                                                placeholder="Optional subtext"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 mb-2">Customer Image</label>
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-16 h-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-gray-400">
                                                        <ImageIcon className="w-6 h-6" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                {isEditing && (
                                                    <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                                        <ImageIcon className="w-4 h-4" />
                                                        Upload Image
                                                        <input
                                                            type="file"
                                                            className="hidden"
                                                            onChange={(e) => onImageUpload(item.id, e)}
                                                            accept="image/*"
                                                        />
                                                    </label>
                                                )}
                                                <input
                                                    type="text"
                                                    value={item.image}
                                                    onChange={(e) => onItemChange(item.id, 'image', e.target.value)}
                                                    className="input-field mt-2 text-xs text-gray-500 font-mono"
                                                    placeholder="Or paste image URL"
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column - Preview or specific settings if needed, for now maybe just sticky help or more settings */}
            <div className="space-y-8">
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 sticky top-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-orange-500">
                            <Quote className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Testimonials Tips</h3>
                            <ul className="text-sm text-gray-600 space-y-2 mt-2 list-disc list-inside">
                                <li>Use high-quality images for better visual impact.</li>
                                <li>Keep testimonials concise (around 30-50 words) for readability.</li>
                                <li>Ensure the restaurant name/logo is clear to build trust.</li>
                                <li>You can reorder text/fields, but the layout is optimized for the current design.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .input-field {
                    width: 100%;
                    padding: 0.625rem 1rem;
                    border-radius: 0.5rem;
                    border: 1px solid #e5e7eb;
                    outline: none;
                    transition: all 0.2s;
                    font-size: 0.875rem;
                    color: #111827;
                }
                .input-field:focus {
                    border-color: #f97316;
                    box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1);
                }
                .input-field:disabled {
                    background-color: #f3f4f6;
                    color: #9ca3af;
                }
            `}</style>
        </div>
    );
};

export default TestimonialsContentEditor;
