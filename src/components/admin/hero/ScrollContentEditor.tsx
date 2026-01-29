import React, { useState } from 'react';
import {
    Type,
    Plus,
    Trash2,
    ChevronDown,
    ChevronRight,
    List,
    Upload,
    Zap,
    X,
    Utensils,
    Clock,
    Check,
    Coffee,
    ChefHat
} from 'lucide-react';

interface Section {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    bgColor: string;
    bgGradient: string;
    buttonText: string;
    bulletPoints: { text: string; highlight: boolean }[];
    imageSrc: string;
}

interface ScrollData {
    heroTitle: string;
    heroSubtitle: string;
    sections: Section[];
}

interface ScrollContentEditorProps {
    data: ScrollData;
    onGlobalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onUpdateSection: (id: string, field: keyof Section, value: any) => void;
    onAddSection: () => void;
    onRemoveSection: (id: string) => void;
    onAddBullet: (sectionId: string) => void;
    onUpdateBullet: (sectionId: string, index: number, field: 'text' | 'highlight', value: any) => void;
    onRemoveBullet: (sectionId: string, index: number) => void;
    isEditing: boolean;
}

// --- Icon Mapping ---
const iconMap = {
    Utensils: <Utensils className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />,
    Check: <Check className="w-5 h-5" />,
    Coffee: <Coffee className="w-5 h-5" />,
    ChefHat: <ChefHat className="w-5 h-5" />
};

const ScrollContentEditor: React.FC<ScrollContentEditorProps> = ({
    data,
    onGlobalChange,
    onUpdateSection,
    onAddSection,
    onRemoveSection,
    onAddBullet,
    onUpdateBullet,
    onRemoveBullet,
    isEditing
}) => {
    const [expandedSection, setExpandedSection] = useState<string | null>('1');

    return (
        <div className={`space-y-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>
            {/* Global Settings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Type className="w-5 h-5" /></div>
                    <h2 className="text-lg font-semibold text-gray-900">Scroll Header</h2>
                </div>
                <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="label">Main Title</label>
                        <input name="heroTitle" value={data.heroTitle} onChange={onGlobalChange} disabled={!isEditing} className="input-field" />
                    </div>
                    <div>
                        <label className="label">Subtitle</label>
                        <input name="heroSubtitle" value={data.heroSubtitle} onChange={onGlobalChange} disabled={!isEditing} className="input-field" />
                    </div>
                </div>
            </div>

            {/* Sections List */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Scroll Sections</h2>
                    {isEditing && (
                        <button onClick={onAddSection} className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-gray rounded-lg hover:bg-primary-700 transition-colors shadow-sm text-sm font-medium">
                            <Plus className="w-4 h-4" />
                            Add Section
                        </button>
                    )}
                </div>

                {data.sections.map((section) => (
                    <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Accordion Header */}
                        <div
                            className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${expandedSection === section.id ? 'bg-primary-50 text-primary-600' : 'bg-gray-100 text-gray-500'}`}>
                                    {iconMap[section.icon as keyof typeof iconMap] || <List className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{section.subtitle}</h3>
                                    <p className="text-xs text-gray-500">ID: {section.id}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* {isEditing && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); onRemoveSection(section.id); }}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )} */}
                                {expandedSection === section.id ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                            </div>
                        </div>

                        {/* Accordion Content */}
                        {expandedSection === section.id && (
                            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/30 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Left Col: Details */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="label">Subtitle (Header)</label>
                                            <input value={section.subtitle} onChange={(e) => onUpdateSection(section.id, 'subtitle', e.target.value)} disabled={!isEditing} className="input-field" />
                                        </div>
                                        <div>
                                            <label className="label">Description</label>
                                            <textarea value={section.description} onChange={(e) => onUpdateSection(section.id, 'description', e.target.value)} disabled={!isEditing} className="input-field h-24 resize-none" />
                                        </div>
                                        {/* <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="label">Icon</label>
                                                <select value={section.icon} onChange={(e) => onUpdateSection(section.id, 'icon', e.target.value)} disabled={!isEditing} className="input-field">
                                                    {Object.keys(iconMap).map(icon => <option key={icon} value={icon}>{icon}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="label">Button Text</label>
                                                <input value={section.buttonText} onChange={(e) => onUpdateSection(section.id, 'buttonText', e.target.value)} disabled={!isEditing} className="input-field" />
                                            </div>
                                        </div> */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="label">Feature Bullets</label>
                                                {isEditing && <button onClick={() => onAddBullet(section.id)} className="text-xs text-primary-600 font-medium hover:underline">+ Add</button>}
                                            </div>
                                            <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                                {section.bulletPoints.map((bullet, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${bullet.highlight ? 'bg-primary-500' : 'bg-gray-300'}`} />
                                                        <input
                                                            value={bullet.text}
                                                            onChange={(e) => onUpdateBullet(section.id, idx, 'text', e.target.value)}
                                                            disabled={!isEditing}
                                                            className="flex-1 text-sm bg-transparent border-b border-gray-200 focus:border-primary-500 outline-none pb-1"
                                                        />
                                                        {isEditing && (
                                                            <button onClick={() => onUpdateBullet(section.id, idx, 'highlight', !bullet.highlight)} className={`p-1 rounded hover:bg-gray-100 ${bullet.highlight ? 'text-primary-500' : 'text-gray-400'}`} title="Toggle Highlight"><Zap className="w-3 h-3" /></button>
                                                        )}
                                                        {isEditing && (
                                                            <button onClick={() => onRemoveBullet(section.id, idx)} className="text-gray-400 hover:text-red-500"><X className="w-3 h-3" /></button>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Col: Image & Bullets */}
                                    <div className="space-y-6">
                                        <div>
                                            <label className="label mb-2">Section Image</label>
                                            <div className="relative aspect-video bg-white rounded-xl border border-gray-200 overflow-hidden group">
                                                {section.imageSrc ? (
                                                    <img src={section.imageSrc} className="w-full h-full object-cover" alt="Section" />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-gray-400 text-xs">No Image</div>
                                                )}
                                                {isEditing && (
                                                    <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                                        <Upload className="text-white w-6 h-6" />
                                                        <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && onUpdateSection(section.id, 'imageSrc', URL.createObjectURL(e.target.files[0]))} />
                                                    </label>
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
                    padding: 0.625rem 1rem;
                    border-radius: 0.5rem;
                    border: 1px solid #e5e7eb;
                    outline: none;
                    transition: all 0.2s;
                    font-size: 0.875rem;
                }
                .input-field:focus {
                    border-color: #f97316;
                    box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1);
                }
                .input-field:disabled {
                    background-color: #f3f4f6;
                    color: #9ca3af;
                }
                .label {
                    display: block;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #374151;
                    margin-bottom: 0.25rem;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};

export default ScrollContentEditor;
