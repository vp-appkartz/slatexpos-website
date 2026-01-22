import React, { useState } from 'react';
import { Type, AlertCircle, Image as ImageIcon } from 'lucide-react';
import Contact from '../../Common/CTA';

export interface CTAData {
    title: string;
    description: string;
    // We can add backgroundImage later if needed, but keeping it simple for now as per request
}

interface CTAContentEditorProps {
    data: CTAData;
    onChange: (field: keyof CTAData, value: string) => void;
    isEditing: boolean;
}

const CTAContentEditor: React.FC<CTAContentEditorProps> = ({
    data,
    onChange,
    isEditing
}) => {
    // We need to pass the data to the Contact component props
    // But since Contact currently doesn't accept props, we will modify it next.
    // For now, we'll assume it does or we'll wrap it/mock it until refactor.
    // Actually, I am creating this file first, so I will pass the props assuming they exist.

    return (
        <div className="space-y-8">
            {/* Editor Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Type className="w-5 h-5 text-primary-600" />
                        <h3 className="font-semibold text-gray-900">Contact Section Content</h3>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 gap-6">

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Main Heading
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) => onChange('title', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                                placeholder="Enter section title"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) => onChange('description', e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                                placeholder="Enter section description"
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-blue-50 text-blue-700 rounded-lg text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p>
                            The form fields are standard and cannot be modified here. Only the title and description text can be updated.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTAContentEditor;
