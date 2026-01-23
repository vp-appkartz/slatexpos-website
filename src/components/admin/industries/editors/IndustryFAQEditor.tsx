import React from 'react';
import { HelpCircle, Plus, Trash2 } from 'lucide-react';
import { FAQSectionData } from '../../../../Data/categoryData';

interface IndustryFAQEditorProps {
    data: FAQSectionData;
    onChange: (data: FAQSectionData) => void;
    isEditing: boolean;
}

const IndustryFAQEditor: React.FC<IndustryFAQEditorProps> = ({ data, onChange, isEditing }) => {
    // Safety check with defaults
    const defaultFaqs = [
        {
            question: "What is a restaurant POS system?",
            answer: "A restaurant POS system is a digital tool that combines hardware and software to streamline operations and enhance customer experiences. It handles tasks ranging from taking orders and processing payments to managing inventory, tracking sales, and generating sales and analytics reports. By automating these processes, POS systems boost efficiency, reduce errors, and provide valuable insights for informed decision-making. The Restaurant POS hardware typically comprises of Point of Sale terminals, customer-facing displays, kitchen display systems, receipt printers, kitchen printers, cash drawers, and payment processors. The software component features like order management, inventory control, payment processing, customer relationship management, loyalty and promotional tools. Ultimately, a restaurant POS system is designed to optimize every aspect of a restaurant's operations, from the kitchen to the cashier."
        },
        {
            question: "How to choose the best restaurant POS system?",
            answer: "Choosing the best restaurant POS system depends on your specific needs, budget, and business size. Consider factors like ease of use, scalability, integration capabilities, customer support, and pricing structure."
        },
        {
            question: "What hardware is required to use SlateX POS? Does SlateX POS offer hardware?",
            answer: "SlateX POS requires standard POS hardware including terminals, printers, cash drawers, and payment processors. Yes, SlateX POS offers comprehensive hardware solutions tailored to restaurant needs."
        },
        {
            question: "Does SlateX Restaurant POS help manage multiple locations easily?",
            answer: "Yes, SlateX Restaurant POS is designed to efficiently manage multiple locations from a centralized dashboard, providing unified reporting and streamlined operations across all your restaurant locations."
        },
        {
            question: "Does SlateX restaurant POS work offline if the internet goes down?",
            answer: "Yes, SlateX POS has robust offline functionality that ensures your restaurant can continue operations even when internet connectivity is interrupted, with automatic data synchronization when connection is restored."
        },
        {
            question: "What makes SlateX POS different?",
            answer: "SlateX POS stands out with its intuitive interface, comprehensive feature set, reliable offline capabilities, excellent customer support, and competitive pricing designed specifically for restaurant operations."
        },
        {
            question: "How fast can I implement SlateX POS in my restaurant?",
            answer: "SlateX POS can typically be implemented within 1-2 weeks, including hardware setup, staff training, and data migration. Our implementation team ensures a smooth transition with minimal disruption to your operations."
        },
        {
            question: "Does SlateX POS offer 3rd Party online order integration?",
            answer: "Yes, SlateX POS integrates seamlessly with major third-party delivery platforms and online ordering systems, centralizing all orders in one system for efficient management."
        },
        {
            question: "What support do you offer?",
            answer: "We offer comprehensive 24/7 customer support including phone, email, and live chat assistance, along with training resources, documentation, and dedicated account management for enterprise clients."
        },
        {
            question: "For which countries is SlateX POS service available?",
            answer: "SlateX POS is currently available in multiple countries across North America, Europe, and Asia-Pacific regions. Contact us to confirm availability in your specific location."
        },
        {
            question: "What are your pricing plans?",
            answer: "We offer flexible pricing plans starting from basic packages for small restaurants to enterprise solutions for large chains. Contact our sales team for detailed pricing information tailored to your specific needs."
        }
    ];

    const safeData = (data && data.faqs && data.faqs.length > 0) ? data : { faqs: defaultFaqs };

    // Initialize/Save defaults if data is missing or empty
    React.useEffect(() => {
        if (!data || !data.faqs || data.faqs.length === 0) {
            // Only update if we are editing or just strictly to ensure data presence?
            // User wants "show by default", implies seeing it.
            // If we don't call onChange, it's just visual.
            // Let's call onChange to persist it so it saves correctly.
            // But be careful of infinite loops if onChange triggers re-render with new object but same effective content.
            // We use JSON.stringify check or similar if needed, but here we only do it if valid data is completely missing.
            // However, onChange prop might change on every render.
            // Let's just rely on visual defaults for now, unless user clicks "Edit/Save".
            // Actually, best DX is to auto-populate.
            // To avoid infinite loop, check if data matches defaultFaqs.
            // Simply: We are just rendering `safeData`. `safeData` already contains defaults visually.
            // We don't strictly NEED to call onChange immediately unless we want "Save" to include it without user interaction.
            // Let's keep it visual-only until edit.
        }
    }, []);

    const handleFAQChange = (index: number, field: keyof typeof safeData.faqs[0], value: string) => {
        const newFaqs = [...(safeData.faqs || [])];
        newFaqs[index] = { ...newFaqs[index], [field]: value };
        onChange({ ...safeData, faqs: newFaqs });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary-900">
                    <HelpCircle className="w-5 h-5" />
                    <h3 className="font-semibold text-lg">Frequently Asked Questions</h3>
                </div>
                {isEditing && (
                    <button
                        onClick={() => {
                            const newFaqs = [...(safeData.faqs || []), { question: 'New Question', answer: 'Enter answer here...' }];
                            onChange({ ...safeData, faqs: newFaqs });
                        }}
                        className="px-4 py-2 bg-primary-600 text-gray rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" /> Add Question
                    </button>
                )}
            </div>

            <div className="space-y-4">
                {safeData.faqs?.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm group hover:border-primary-200 transition-colors">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center text-xs font-bold mt-1">
                                {index + 1}
                            </span>
                            <div className="flex-1 space-y-3">
                                <input
                                    value={faq.question}
                                    onChange={(e) => handleFAQChange(index, 'question', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full font-semibold text-gray-900 border-none p-0 focus:ring-0 text-base placeholder-gray-400 bg-transparent disabled:bg-transparent"
                                    placeholder="Type question here..."
                                />
                                <div className="h-px bg-gray-100 w-full" />
                                <textarea
                                    value={faq.answer}
                                    onChange={(e) => handleFAQChange(index, 'answer', e.target.value)}
                                    disabled={!isEditing}
                                    className="w-full text-gray-600 border-none p-0 focus:ring-0 text-sm resize-none placeholder-gray-400 bg-transparent disabled:text-gray-500"
                                    rows={3}
                                    placeholder="Type answer here..."
                                />
                            </div>
                            {isEditing && (
                                <button
                                    onClick={() => {
                                        const newFaqs = safeData.faqs.filter((_, i) => i !== index);
                                        onChange({ ...safeData, faqs: newFaqs });
                                    }}
                                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default IndustryFAQEditor;
