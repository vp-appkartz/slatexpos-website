import React, { createContext, useContext, useState, ReactNode } from 'react';
import { HardwarePageData, hardwareData as initialData } from '../Data/hardwareData';
import { TestimonialsData } from '../components/Common/Testimonials';
import { BlackSectionData } from '../components/admin/hero/BlackSectionContentEditor';

interface HardwarePageContextType {
    data: HardwarePageData;
    setHardwareData: (data: HardwarePageData) => void;
    updateHeroSection: (field: string, value: any) => void;
    updateHeroImage: (field: string, value: string) => void;

    // Scroll Section (Product Sections)
    updateProductSection: (id: string, field: string, value: any) => void;
    addProductSection: () => void;
    removeProductSection: (id: string) => void;

    // Key Features
    updateKeyFeature: (index: number, field: string, value: any) => void;

    // Hardware Showcase
    updateShowcaseItem: (id: number, field: string, value: any) => void;
    addShowcaseItem: () => void;
    removeShowcaseItem: (id: number) => void;
    updateSolution: (id: number, field: string, value: any) => void;
    addSolution: () => void;
    removeSolution: (id: number) => void;

    // Black Section
    updateBlackSection: (field: keyof BlackSectionData, value: any) => void;
    updateTrustIndicator: (index: number, value: string) => void;
    addTrustIndicator: () => void;
    removeTrustIndicator: (index: number) => void;

    // Testimonials
    updateTestimonials: (field: keyof TestimonialsData, value: any) => void;
    updateTestimonialItem: (id: number, field: string, value: any) => void;
    addTestimonialItem: () => void;
    removeTestimonialItem: (id: number) => void;

    // FAQ
    updateFAQ: (index: number, field: 'question' | 'answer', value: string) => void;
    addFAQ: () => void;
    removeFAQ: (index: number) => void;
}

const HardwarePageContext = createContext<HardwarePageContextType | undefined>(undefined);

export const HardwarePageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<HardwarePageData>(initialData);

    // Subscribe to data from Firestore
    React.useEffect(() => {
        let unsubscribe: (() => void) | undefined;
        let isMounted = true;

        const setupSubscription = async () => {
            try {
                const { subscribeToHardwarePageData } = await import('../services/firestoreService');

                if (!isMounted) return;

                unsubscribe = subscribeToHardwarePageData((dbData) => {
                    if (dbData && isMounted) {
                        // Cast dbData to any to bypass potential type mismatch with partial definitions
                        // The actual data in Firestore should match HardwarePageData structure
                        setData(prev => ({ ...prev, ...(dbData as any) }));
                    }
                });
            } catch (error) {
                console.error("Failed to subscribe to hardware page data:", error);
            }
        };

        setupSubscription();

        return () => {
            isMounted = false;
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    // --- Hero Section ---
    const updateHeroSection = (field: string, value: any) => {
        setData(prev => ({
            ...prev,
            heroSection: { ...prev.heroSection, [field]: value }
        }));
    };

    const updateHeroImage = (field: string, value: string) => {
        setData(prev => ({
            ...prev,
            heroSection: { ...prev.heroSection, [field]: value }
        }));
    };

    // --- Product Sections (Scroll) ---
    const updateProductSection = (id: string, field: string, value: any) => {
        setData(prev => ({
            ...prev,
            productSections: prev.productSections.map(s => s.id === id ? { ...s, [field]: value } : s)
        }));
    };

    const addProductSection = () => {
        const newId = (data.productSections.length + 1).toString();
        // Create new item
        setData(prev => ({
            ...prev,
            productSections: [...prev.productSections, {
                id: newId,
                title: "New Product",
                description: "Product Description",
                buttonText: "Learn More",
                image: "",
                bgColor: "bg-gray-500",
                bgGradient: "from-gray-400 to-gray-600",
                bulletPoints: []
            }]
        }));
    };

    const removeProductSection = (id: string) => {
        setData(prev => ({
            ...prev,
            productSections: prev.productSections.filter(s => s.id !== id)
        }));
    };

    // --- Key Features ---
    const updateKeyFeature = (index: number, field: string, value: any) => {
        setData(prev => ({
            ...prev,
            keyFeatures: {
                ...prev.keyFeatures,
                features: prev.keyFeatures.features.map((f, i) => i === index ? { ...f, [field]: value } : f)
            }
        }));
    };

    // --- Hardware Showcase ---
    const updateShowcaseItem = (id: number, field: string, value: any) => {
        setData(prev => ({
            ...prev,
            hardwareShowcase: {
                ...prev.hardwareShowcase,
                items: prev.hardwareShowcase.items.map(item => item.id === id ? { ...item, [field]: value } : item)
            }
        }));
    };

    const addShowcaseItem = () => {
        const newId = Math.max(0, ...data.hardwareShowcase.items.map(i => i.id)) + 1;
        setData(prev => ({
            ...prev,
            hardwareShowcase: {
                ...prev.hardwareShowcase,
                items: [...prev.hardwareShowcase.items, { id: newId, title: "New Item", description: "Description", image: "" }]
            }
        }));
    };

    const removeShowcaseItem = (id: number) => {
        setData(prev => ({
            ...prev,
            hardwareShowcase: {
                ...prev.hardwareShowcase,
                items: prev.hardwareShowcase.items.filter(item => item.id !== id)
            }
        }));
    };

    const updateSolution = (id: number, field: string, value: any) => {
        setData(prev => ({
            ...prev,
            hardwareShowcase: {
                ...prev.hardwareShowcase,
                solutions: prev.hardwareShowcase.solutions.map(s => s.id === id ? { ...s, [field]: value } : s)
            }
        }));
    };

    const addSolution = () => {
        const newId = Math.max(0, ...data.hardwareShowcase.solutions.map(s => s.id)) + 1;
        setData(prev => ({
            ...prev,
            hardwareShowcase: {
                ...prev.hardwareShowcase,
                solutions: [...prev.hardwareShowcase.solutions, { id: newId, title: "New Solution", row: 1 }]
            }
        }));
    };

    const removeSolution = (id: number) => {
        setData(prev => ({
            ...prev,
            hardwareShowcase: {
                ...prev.hardwareShowcase,
                solutions: prev.hardwareShowcase.solutions.filter(s => s.id !== id)
            }
        }));
    };

    // --- Black Section ---
    const updateBlackSection = (field: keyof BlackSectionData, value: any) => {
        setData(prev => ({
            ...prev,
            blackSection: { ...prev.blackSection, [field]: value }
        }));
    };

    const updateTrustIndicator = (index: number, value: string) => {
        setData(prev => ({
            ...prev,
            blackSection: {
                ...prev.blackSection,
                trustIndicators: prev.blackSection.trustIndicators.map((t, i) => i === index ? value : t)
            }
        }));
    };

    const addTrustIndicator = () => {
        setData(prev => ({
            ...prev,
            blackSection: {
                ...prev.blackSection,
                trustIndicators: [...prev.blackSection.trustIndicators, "New Feature"]
            }
        }));
    };

    const removeTrustIndicator = (index: number) => {
        setData(prev => ({
            ...prev,
            blackSection: {
                ...prev.blackSection,
                trustIndicators: prev.blackSection.trustIndicators.filter((_, i) => i !== index)
            }
        }));
    };

    // --- Testimonials ---
    const updateTestimonials = (field: keyof TestimonialsData, value: any) => {
        setData(prev => ({
            ...prev,
            testimonials: { ...prev.testimonials, [field]: value }
        }));
    };

    const updateTestimonialItem = (id: number, field: string, value: any) => {
        setData(prev => ({
            ...prev,
            testimonials: {
                ...prev.testimonials,
                items: (prev.testimonials.items || []).map(t => t.id === id ? { ...t, [field]: value } : t)
            }
        }));
    };

    const addTestimonialItem = () => {
        const currentItems = data.testimonials.items || [];
        const newId = Math.max(0, ...currentItems.map(t => t.id)) + 1;
        setData(prev => ({
            ...prev,
            testimonials: {
                ...prev.testimonials,
                items: [...(prev.testimonials.items || []), {
                    id: newId,
                    name: "New Reviewer",
                    position: "Position",
                    image: "",
                    text: "Review text...",
                    logo: "",
                    logoSubtext: ""
                }]
            }
        }));
    };

    const removeTestimonialItem = (id: number) => {
        setData(prev => ({
            ...prev,
            testimonials: {
                ...prev.testimonials,
                items: (prev.testimonials.items || []).filter(t => t.id !== id)
            }
        }));
    };

    // --- FAQ ---
    const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
        setData(prev => ({
            ...prev,
            faqSection: {
                ...prev.faqSection,
                faqs: prev.faqSection.faqs.map((f, i) => i === index ? { ...f, [field]: value } : f)
            }
        }));
    };

    const addFAQ = () => {
        setData(prev => ({
            ...prev,
            faqSection: {
                ...prev.faqSection,
                faqs: [...prev.faqSection.faqs, { question: "New Question?", answer: "Answer here." }]
            }
        }));
    };

    const removeFAQ = (index: number) => {
        setData(prev => ({
            ...prev,
            faqSection: {
                ...prev.faqSection,
                faqs: prev.faqSection.faqs.filter((_, i) => i !== index)
            }
        }));
    };

    return (
        <HardwarePageContext.Provider value={{
            data,
            setHardwareData: setData,
            updateHeroSection,
            updateHeroImage,
            updateProductSection,
            addProductSection,
            removeProductSection,
            updateKeyFeature,
            updateShowcaseItem,
            addShowcaseItem,
            removeShowcaseItem,
            updateSolution,
            addSolution,
            removeSolution,
            updateBlackSection,
            updateTrustIndicator,
            addTrustIndicator,
            removeTrustIndicator,
            updateTestimonials,
            updateTestimonialItem,
            addTestimonialItem,
            removeTestimonialItem,
            updateFAQ,
            addFAQ,
            removeFAQ
        }}>
            {children}
        </HardwarePageContext.Provider>
    );
};

export const useHardwarePage = () => {
    const context = useContext(HardwarePageContext);
    if (context === undefined) {
        throw new Error('useHardwarePage must be used within a HardwarePageProvider');
    }
    return context;
};
