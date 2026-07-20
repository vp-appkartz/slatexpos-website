import { Check, X, Info } from 'lucide-react';
import { ComparisonFeature, initialPricingPlans as plans, initialCompareFeatures as compareFeatures } from '../../Data/pricingData';

const ComparePlanComponent = () => {
    const compareSection = {
        title: "Compare Plans",
        subtitle: "See all the features included in each plan to find the perfect fit for your business."
    };

    const renderFeatureValue = (feature: ComparisonFeature, planId: string) => {
        // @ts-ignore - Dynamic access based on plan ID
        const value = feature[planId];

        if (typeof value === 'boolean') {
            return value ? (
                <div className="w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                </div>
            ) : (
                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-gray-400" />
                </div>
            );
        }

        if (typeof value === 'string') {
            return (
                <span className="text-xs text-center text-gray-600 leading-tight">
                    {value}
                </span>
            );
        }

        return null;
    };

    return (
        <div className="w-full bg-gray-50 min-h-screen mt-16 sm:mt-20 lg:mt-[140px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-8 lg:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-2 lg:mb-4">
                        {compareSection.title}
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl">
                        {compareSection.subtitle}
                    </p>
                </div>

                {/* Mobile/Tablet View - Stacked Cards */}
                <div className="block lg:hidden space-y-6">
                    {plans.map((plan) => (
                        <div key={plan.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* Plan Header */}
                            <div className="bg-orange-50 p-4 sm:p-6 text-center border-b border-gray-200">
                                <h3 className="font-semibold text-gray-900 text-xl sm:text-2xl mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm">
                                    Get Started
                                </button>
                            </div>

                            {/* Features */}
                            <div className="divide-y divide-gray-100">
                                {compareFeatures.map((feature, index) => {
                                    if (feature.isHeader) {
                                        return (
                                            <div key={index} className="bg-gray-50 px-4 sm:px-6 py-3">
                                                <span className="text-base sm:text-lg font-semibold text-gray-900">
                                                    {feature.category}
                                                </span>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={index} className="px-4 sm:px-6 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
                                            <span className="text-sm sm:text-base text-gray-700 flex-1 pr-4">
                                                {feature.name}
                                            </span>
                                            <div className="flex items-center justify-center min-w-0 flex-shrink-0">
                                                {renderFeatureValue(feature, plan.id)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View - Table Layout */}
                <div className="hidden lg:block bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 bg-white border-b border-gray-200">
                        <div className="p-6 font-semibold text-gray-900 text-lg flex items-center">
                            Features
                        </div>
                        {plans.map((plan) => (
                            <div key={plan.id} className="flex flex-col items-center p-6 h-full">
                                <h3 className="font-semibold text-gray-900 text-lg sm:text-xl mb-2">{plan.name}</h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4 text-center min-h-[40px] flex items-center">
                                    {plan.description}
                                </p>
                                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm mt-auto">
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Feature Rows */}
                    {compareFeatures.map((feature, index) => {
                        if (feature.isHeader) {
                            return (
                                <div key={index} className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                                    <div className="p-4 flex items-center col-span-4">
                                        <span className="text-xl font-semibold text-gray-900">
                                            {feature.category}
                                        </span>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className="grid grid-cols-4 border-b border-gray-100 bg-white hover:bg-gray-50 transition-colors">
                                <div className="p-4 flex items-center">
                                    <span className="text-base text-gray-700">
                                        {feature.name}
                                    </span>
                                </div>

                                {plans.map((plan) => (
                                    <div key={plan.id} className="p-4 flex items-center justify-center">
                                        {renderFeatureValue(feature, plan.id)}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

                {/* Tablet Alternative - Horizontal Scroll Table */}
                <div className="hidden md:block lg:hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <div className="min-w-[800px]">
                                {/* Header Row */}
                                <div className="grid grid-cols-4 bg-white border-b border-gray-200">
                                    <div className="p-4 sm:p-6 font-semibold text-gray-900 text-base sm:text-lg flex items-center">
                                        Features
                                    </div>
                                    {plans.map((plan) => (
                                        <div key={plan.id} className="flex flex-col items-center p-4 sm:p-6 h-full">
                                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">{plan.name}</h3>
                                            <p className="text-xs sm:text-sm text-gray-600 mb-4 text-center min-h-[40px] flex items-center">
                                                {plan.description}
                                            </p>
                                            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors text-xs sm:text-sm mt-auto">
                                                Get Started
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Feature Rows */}
                                {compareFeatures.map((feature, index) => {
                                    if (feature.isHeader) {
                                        return (
                                            <div key={index} className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                                                <div className="p-3 sm:p-4 flex items-center col-span-4">
                                                    <span className="text-base sm:text-lg font-semibold text-gray-900">
                                                        {feature.category}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={index} className="grid grid-cols-4 border-b border-gray-100 bg-white hover:bg-gray-50 transition-colors">
                                            <div className="p-3 sm:p-4 flex items-center">
                                                <span className="text-xs sm:text-sm text-gray-700">
                                                    {feature.name}
                                                </span>
                                            </div>

                                            {plans.map((plan) => (
                                                <div key={plan.id} className="p-3 sm:p-4 flex items-center justify-center">
                                                    {renderFeatureValue(feature, plan.id)}
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 text-center">
                            <p className="text-xs text-gray-500">← Scroll horizontally to view all plans →</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparePlanComponent;
