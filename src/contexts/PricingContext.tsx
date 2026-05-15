import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PricingPlan, ComparisonFeature, initialPricingPlans, initialCompareFeatures } from '../Data/pricingData';

interface PricingPageContent {
    plans: PricingPlan[];
    compareFeatures: ComparisonFeature[];
    heroSection?: {
        title: string;
        subtitle: string;
    };
    compareSection?: {
        title: string;
        subtitle: string;
    };
}

interface PricingContextType {
    plans: PricingPlan[];
    compareFeatures: ComparisonFeature[];
    heroSection: { title: string; subtitle: string };
    compareSection: { title: string; subtitle: string };
    isLoading: boolean;
    updatePlan: (id: string, updates: Partial<PricingPlan>) => void;
    updateFeature: (index: number, updates: Partial<ComparisonFeature>) => void;
    addFeature: (feature: ComparisonFeature) => void;
    removeFeature: (index: number) => void;
}

const defaultHeroSection = {
    title: "Flexible Pricing for Every Restaurant Size",
    subtitle: "Whether you're just starting or scaling, we have a plan for you."
};

const defaultCompareSection = {
    title: "Plans",
    subtitle: "Choose the perfect plan for your restaurant"
};

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const PricingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [plans, setPlans] = useState<PricingPlan[]>(initialPricingPlans);
    const [compareFeatures, setCompareFeatures] = useState<ComparisonFeature[]>(initialCompareFeatures);
    const [heroSection, setHeroSection] = useState(defaultHeroSection);
    const [compareSection, setCompareSection] = useState(defaultCompareSection);
    const isLoading = false;

    const updatePlan = (id: string, updates: Partial<PricingPlan>) => {
        setPlans(prev => prev.map(plan =>
            plan.id === id ? { ...plan, ...updates } : plan
        ));
    };

    const updateFeature = (index: number, updates: Partial<ComparisonFeature>) => {
        setCompareFeatures(prev => prev.map((item, i) =>
            i === index ? { ...item, ...updates } : item
        ));
    };

    const addFeature = (feature: ComparisonFeature) => {
        setCompareFeatures(prev => [...prev, feature]);
    };

    const removeFeature = (index: number) => {
        setCompareFeatures(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <PricingContext.Provider value={{
            plans,
            compareFeatures,
            heroSection,
            compareSection,
            isLoading,
            updatePlan,
            updateFeature,
            addFeature,
            removeFeature
        }}>
            {children}
        </PricingContext.Provider>
    );
};

export const usePricing = () => {
    const context = useContext(PricingContext);
    if (context === undefined) {
        throw new Error('usePricing must be used within a PricingProvider');
    }
    return context;
};
