import React from 'react';
import { HelpCircle, Plus, Trash2 } from 'lucide-react';
import { FAQItem } from '../../../../Data/productData';

interface FAQSectionData {
    faqs: FAQItem[];
}

interface ProductFAQEditorProps {
    data: FAQSectionData;
    onChange: (data: FAQSectionData) => void;
    isEditing: boolean;
}

const ProductFAQEditor: React.FC<ProductFAQEditorProps> = ({ data, onChange, isEditing }) => {

    const handleFAQChange = (index: number, field: keyof FAQItem, value: string) => {
        const newFAQs = [...data.faqs];
        newFAQs[index] = { ...newFAQs[index], [field]: value };
        onChange({ ...data, faqs: newFAQs });
    };

    const addFAQ = () => {
        onChange({
            ...data,
            faqs: [...data.faqs, { question: 'New Question', answer: 'Enter answer here...' }]
        });
    };

    const removeFAQ = (index: number) => {
        onChange({
            ...data,
            faqs: data.faqs.filter((_, i) => i !== index)
        });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-900">
                    <HelpCircle className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Frequently Asked Questions</h3>
                </div>
                {isEditing && (
                    <button onClick={addFAQ} className="px-4 py-2 bg-primary-600 text-gray rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Add Question
                    </button>
                )}
            </div>

            <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm group hover:border-primary-200 transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-xs font-bold mt-1">
                                {idx + 1}
                            </span>
                            <div className="flex-1 space-y-3">
                                <input
                                    value={faq.question}
                                    onChange={(e) => handleFAQChange(idx, 'question', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full font-semibold text-gray-900 border-none p-0 focus:ring-0 text-base placeholder-gray-400 bg-transparent disabled:bg-transparent"
                                    placeholder="Type question here..."
                                />
                                <div className="h-px bg-gray-100 w-full" />
                                <textarea
                                    value={faq.answer}
                                    onChange={(e) => handleFAQChange(idx, 'answer', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full text-gray-600 border-none p-0 focus:ring-0 text-sm resize-none placeholder-gray-400 bg-transparent disabled:text-gray-500"
                                    rows={3}
                                    placeholder="Type answer here..."
                                />
                            </div>
                            {isEditing && (
                                <button
                                    onClick={() => removeFAQ(idx)}
                                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {data.faqs.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-gray-400">
                        No FAQs added yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductFAQEditor;
