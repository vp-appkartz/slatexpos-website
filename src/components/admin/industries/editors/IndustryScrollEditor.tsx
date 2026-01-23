import React, { useState } from 'react';
import { Layers, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollSectionData } from '../../../../Data/categoryData';

interface IndustryScrollEditorProps {
    data: ScrollSectionData;
    onChange: (data: ScrollSectionData) => void;
    isEditing: boolean;
}

const IndustryScrollEditor: React.FC<IndustryScrollEditorProps> = ({ data, onChange, isEditing }) => {
    // Safety check
    const safeData = data || { heroTitle: '', heroSubtitle: '', sections: [] };

    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...safeData, [name]: value });
    };

    const handleSectionChange = (id: string, field: string, value: any) => {
        const newSections = (safeData.sections || []).map(s =>
            s.id === id ? { ...s, [field]: value } : s
        );
        onChange({ ...safeData, sections: newSections });
    };

    const addSection = () => {
        const sections = safeData.sections || [];
        const newId = (Math.max(...sections.map(s => parseInt(s.id) || 0), 0) + 1).toString();
        const newSection = {
            id: newId,
            icon: 'Utensils',
            title: 'New Feature Section',
            subtitle: 'Subtitle',
            description: 'Description...',
            bgColor: 'bg-gray-500',
            bgGradient: 'from-gray-400 to-gray-600',
            buttonText: 'Learn More',
            bulletPoints: [],
            imageSrc: ''
        };
        onChange({ ...safeData, sections: [...sections, newSection] });
        setExpandedSection(newId);
    };

    const removeSection = (id: string) => {
        if (window.confirm('Are you sure you want to delete this section?')) {
            onChange({ ...safeData, sections: (safeData.sections || []).filter(s => s.id !== id) });
        }
    };

    // Bullet Points Management
    const addBullet = (sectionId: string) => {
        const section = (safeData.sections || []).find(s => s.id === sectionId);
        if (!section) return;

        const newBullets = [...(section.bulletPoints || []), { text: 'New Point', highlight: false }];
        handleSectionChange(sectionId, 'bulletPoints', newBullets);
    };

    const updateBullet = (sectionId: string, index: number, field: 'text' | 'highlight', value: any) => {
        const section = (safeData.sections || []).find(s => s.id === sectionId);
        if (!section || !section.bulletPoints) return;

        const newBullets = [...section.bulletPoints];
        newBullets[index] = { ...newBullets[index], [field]: value };
        handleSectionChange(sectionId, 'bulletPoints', newBullets);
    };

    const removeBullet = (sectionId: string, index: number) => {
        const section = (safeData.sections || []).find(s => s.id === sectionId);
        if (!section || !section.bulletPoints) return;

        const newBullets = section.bulletPoints.filter((_, i) => i !== index);
        handleSectionChange(sectionId, 'bulletPoints', newBullets);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header Configuration */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary-600" />
                    <h3 className="font-semibold text-gray-900 text-sm">Scroll Section Header</h3>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Section Title</label>
                        <input
                            name="heroTitle"
                            value={safeData.heroTitle || ''}
                            onChange={handleHeaderChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm font-bold disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
                        <input
                            name="heroSubtitle"
                            value={safeData.heroSubtitle || ''}
                            onChange={handleHeaderChange}
                            disabled={!isEditing}
                            className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-sm disabled:bg-gray-50 disabled:text-gray-500"
                        />
                    </div>
                </div>
            </div>

            {/* List of Sections */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Scroll Items</h3>
                    {/* {isEditing && (
                        <button
                            onClick={addSection}
                            className="text-sm bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                        >
                            <Plus className="w-4 h-4" /> Add Scroll Item
                        </button>
                    )} */}
                </div>

                {(safeData.sections || []).map((section, index) => (
                    <div key={section.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all shadow-sm hover:shadow-md">
                        {/* Section Header / Summary */}
                        <div
                            onClick={() => toggleSection(section.id)}
                            className="flex items-center justify-between p-4 bg-gray-50/30 cursor-pointer hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold ${section.bgColor || 'bg-gray-400'}`}>
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{section.title}</h4>
                                    <p className="text-xs text-gray-500">{section.subtitle}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* {isEditing && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeSection(section.id);
                                        }}
                                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )} */}
                                {expandedSection === section.id ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                            </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedSection === section.id && (
                            <div className="p-5 border-t border-gray-100 space-y-6 bg-white animate-in slide-in-from-top-2 duration-200">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
                                                <input value={section.title} onChange={(e) => handleSectionChange(section.id, 'title', e.target.value)} disabled={!isEditing} className="input-field disabled:bg-gray-50" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
                                                <input value={section.subtitle} onChange={(e) => handleSectionChange(section.id, 'subtitle', e.target.value)} disabled={!isEditing} className="input-field disabled:bg-gray-50" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
                                            <textarea value={section.description} onChange={(e) => handleSectionChange(section.id, 'description', e.target.value)} disabled={!isEditing} className="input-field resize-none disabled:bg-gray-50" rows={3} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Button Text</label>
                                                <input value={section.buttonText} onChange={(e) => handleSectionChange(section.id, 'buttonText', e.target.value)} disabled={!isEditing} className="input-field disabled:bg-gray-50" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 mb-2">Detailed Features (Bullet Points)</label>
                                            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                                                {(section.bulletPoints || []).map((bp, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={bp.highlight}
                                                            onChange={(e) => updateBullet(section.id, i, 'highlight', e.target.checked)}
                                                            disabled={!isEditing}
                                                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 disabled:opacity-50"
                                                            title="Highlight"
                                                        />
                                                        <input
                                                            value={bp.text}
                                                            onChange={(e) => updateBullet(section.id, i, 'text', e.target.value)}
                                                            disabled={!isEditing}
                                                            className="input-field py-1 disabled:bg-gray-50"
                                                        />
                                                        {isEditing && (
                                                            <button onClick={() => removeBullet(section.id, i)} className="text-gray-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                                                        )}
                                                    </div>
                                                ))}
                                                {isEditing && (
                                                    <button onClick={() => addBullet(section.id)} className="text-xs text-primary-600 font-medium hover:underline flex items-center gap-1 mt-1">
                                                        <Plus className="w-3 h-3" /> Add Point
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style>{`
                .input-field {
                    width: 100%;
                    padding: 0.5rem 0.75rem;
                    border-radius: 0.5rem;
                    border: 1px solid #e5e7eb;
                    outline: none;
                    transition: all 0.2s;
                    font-size: 0.875rem;
                }
                .input-field:focus {
                    border-color: #f97316;
                    box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1);
                }
                .input-field:disabled {
                    background-color: #f9fafb;
                    color: #9ca3af;
                }
            `}</style>
        </div>
    );
};

export default IndustryScrollEditor;
