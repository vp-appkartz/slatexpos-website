import React from 'react';
import {
    Image as ImageIcon,
    Type,
    LayoutTemplate,
    Upload,
    Eye,
    Trash2,
    Plus,
    Users
} from 'lucide-react';

interface HeroData {
    heading: string;
    highlightedText: string;
    suffixText: string;
    buttonText: string;
    backgroundImage: string;
    centerImage: string;
    images: { [key: string]: string };
    logos: { src: string; alt: string }[];
}

interface HeroContentEditorProps {
    data: HeroData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onImageChange: (key: string, value: string) => void;
    onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveLogo: (index: number) => void;
    onUpdateLogoAlt: (index: number, alt: string) => void;
    isEditing: boolean;
}

const HeroContentEditor: React.FC<HeroContentEditorProps> = ({
    data,
    onChange,
    onImageChange,
    onLogoUpload,
    onRemoveLogo,
    onUpdateLogoAlt,
    isEditing
}) => {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-1 gap-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>
            <div className="lg:col-span-2 space-y-8">
                {/* Text Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Type className="w-5 h-5" /></div>
                        <h2 className="text-lg font-semibold text-gray-900">Text Content</h2>
                    </div>
                    <div className="p-6 grid gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-3 mb-2">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                                    <span>Preview:</span>
                                    <span className="font-semibold text-gray-900">{data.heading}</span>
                                    <span className="font-bold text-gray-900">{data.highlightedText}</span>
                                    <span className="font-medium text-gray-900">{data.suffixText}</span>
                                </div>
                            </div>
                            <input placeholder="Prefix" name="heading" value={data.heading} onChange={onChange} className="input-field" disabled={!isEditing} />
                            <input placeholder="Highlight" name="highlightedText" value={data.highlightedText} onChange={onChange} className="input-field font-bold" disabled={!isEditing} />
                            <input placeholder="Suffix" name="suffixText" value={data.suffixText} onChange={onChange} className="input-field" disabled={!isEditing} />
                            <div className="md:col-span-3">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">CTA Button</label>
                                <input name="buttonText" value={data.buttonText} onChange={onChange} className="input-field" disabled={!isEditing} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Visuals */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><ImageIcon className="w-5 h-5" /></div>
                        <h2 className="text-lg font-semibold text-gray-900">Main Visuals</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Background */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">Background</label>
                            <div className="relative aspect-video bg-gray-50 rounded-xl border-dashed border-2 border-gray-200 overflow-hidden group">
                                <img src={data.backgroundImage} className="w-full h-full object-cover" alt="Background" />
                                {isEditing && (
                                    <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <Upload className="text-white w-6 h-6" />
                                        <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && onImageChange('backgroundImage', URL.createObjectURL(e.target.files[0]))} />
                                    </label>
                                )}
                            </div>
                        </div>
                        {/* Center Image */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">Center Hero</label>
                            <div className="relative aspect-[4/3] bg-gray-50 rounded-xl border-dashed border-2 border-gray-200 overflow-hidden group">
                                <img src={data.centerImage} className="w-full h-full object-contain p-2" alt="Center Hero" />
                                {isEditing && (
                                    <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                        <Upload className="text-white w-6 h-6" />
                                        <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && onImageChange('centerImage', URL.createObjectURL(e.target.files[0]))} />
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logos */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><Users className="w-5 h-5" /></div>
                            <h2 className="text-lg font-semibold text-gray-900">Client Logos</h2>
                        </div>
                        {isEditing && (
                            <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600 text-gray text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm cursor-pointer">
                                <Plus className="w-4 h-4" />
                                <span>Add Logo</span>
                                <input type="file" className="hidden" onChange={onLogoUpload} />
                            </label>
                        )}
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {data.logos.map((logo, idx) => (
                                <div key={idx} className="relative group p-3 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col gap-2">
                                    <div className="h-12 flex items-center justify-center bg-white rounded-lg border border-gray-200"><img src={logo.src} className="max-h-8 max-w-full" alt={logo.alt} /></div>
                                    <input value={logo.alt} onChange={(e) => onUpdateLogoAlt(idx, e.target.value)} disabled={!isEditing} className="text-center text-xs bg-transparent border-b border-transparent focus:border-primary-500 outline-none" placeholder="Alt Text" />
                                    {isEditing && <button onClick={() => onRemoveLogo(idx)} className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100"><Trash2 className="w-4 h-4" /></button>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                {/* Floating Elements */}
                {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><LayoutTemplate className="w-5 h-5" /></div>
                        <h2 className="text-lg font-semibold text-gray-900">Floating Elements</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {Object.entries(data.images).map(([key, url]) => (
                            <div key={key} className="flex items-center gap-4 group">
                                <div className="w-14 h-14 bg-gray-50 rounded-lg relative overflow-hidden border border-gray-200">
                                    <img src={url} className="w-full h-full object-contain p-1" alt={key} />
                                    {isEditing && (
                                        <label className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 cursor-pointer">
                                            <Upload className="text-white w-4 h-4" />
                                            <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && onImageChange(`images.${key}`, URL.createObjectURL(e.target.files[0]))} />
                                        </label>
                                    )}
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase">{key.replace(/([A-Z])/g, ' $1')}</p>
                                    <p className="text-xs text-gray-400 truncate w-32">{url}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Preview Hint */}
                <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary-500"><Eye className="w-6 h-6" /></div>
                        <div><h3 className="font-semibold text-gray-900 mb-1">Live Preview</h3><p className="text-sm text-gray-600">Changes reflect immediately.</p></div>
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

export default HeroContentEditor;
