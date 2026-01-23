import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PricingPlan, ComparisonFeature, initialPricingPlans, initialCompareFeatures } from '../Data/pricingData';

interface PricingContextType {
    plans: PricingPlan[];
    compareFeatures: ComparisonFeature[];
    updatePlan: (id: string, updates: Partial<PricingPlan>) => void;
    updateFeature: (index: number, updates: Partial<ComparisonFeature>) => void;
    addFeature: (feature: ComparisonFeature) => void;
    removeFeature: (index: number) => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const PricingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [plans, setPlans] = useState<PricingPlan[]>(initialPricingPlans);
    const [compareFeatures, setCompareFeatures] = useState<ComparisonFeature[]>(initialCompareFeatures);

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
        <PricingContext.Provider value={{ plans, compareFeatures, updatePlan, updateFeature, addFeature, removeFeature }}>
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
