import React from 'react';
import { HelpCircle, Plus, Trash2 } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQData {
    faqs: FAQItem[];
}

interface FAQContentEditorProps {
    data: FAQData;
    onUpdateFAQ: (index: number, field: 'question' | 'answer', value: string) => void;
    onAddFAQ: () => void;
    onRemoveFAQ: (index: number) => void;
    isEditing: boolean;
}

const FAQContentEditor: React.FC<FAQContentEditorProps> = ({
    data,
    onUpdateFAQ,
    onAddFAQ,
    onRemoveFAQ,
    isEditing
}) => {
    return (
        <div className={`space-y-8 transition-opacity duration-300 ${!isEditing ? 'opacity-80 pointer-events-none' : 'opacity-100'}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600"><HelpCircle className="w-5 h-5" /></div>
                        <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    {isEditing && (
                        <button
                            onClick={onAddFAQ}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600 text-gray text-sm font-medium hover:bg-primary-700 transition-colors shadow-sm"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Add FAQ</span>
                        </button>
                    )}
                </div>
                <div className="p-6 space-y-4">
                    {data.faqs.map((faq, index) => (
                        <div key={index} className="group relative p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-primary-200 transition-all">
                            {isEditing && (
                                <button
                                    onClick={() => onRemoveFAQ(index)}
                                    className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                    title="Remove FAQ"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                            <div className="space-y-3 pr-8">
                                <input
                                    value={faq.question}
                                    onChange={(e) => onUpdateFAQ(index, 'question', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 font-medium text-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none"
                                    placeholder="Question"
                                    disabled={!isEditing}
                                />
                                <textarea
                                    value={faq.answer}
                                    onChange={(e) => onUpdateFAQ(index, 'answer', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-600 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none resize-none"
                                    rows={2}
                                    placeholder="Answer"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    ))}
                    {data.faqs.length === 0 && (
                        <div className="text-center py-8 text-gray-400">
                            <p>No FAQs added yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQContentEditor;
