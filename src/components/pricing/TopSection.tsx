import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    description: "Launch and scale your business with minimal initial investment.",
    price: "$0",
    priceNote: "per location/monthly",
    button: { text: "Get Started", style: "bg-orange-400 hover:bg-orange-500" },
    features: [
      "POS Software",
      "Online Ordering",
      "Payment Processing",
      "Regular Upgrades",
      "Implementation & Technical Support",
      "Owner’s reporting app"
    ],
    recommended: false,
    strikePrice: null,
    custom: false,
  },
  {
    name: "Plus",
    description: "Get software credit up to $1000* against hardware purchases.",
    price: "$99",
    priceNote: "per location/monthly",
    button: { text: "Schedule Call", style: "bg-orange-400 hover:bg-orange-500" },
    features: [
      "POS Software",
      "Online Ordering",
      "Discounted Payment Processing",
      "Regular Upgrades",
      "Priority Implementation & Technical Support",
      "Owner’s Reporting App",
      "Doordash Drive"
    ],
    recommended: true,
    strikePrice: null,
    custom: false,
  },
  {
    name: "Enterprise",
    description: "Create a setup that fits your restaurant. Choose the features that work best for you.",
    price: "Custom",
    priceNote: "Tailored Pricing Plan",
    button: { text: "Contact us", style: "bg-orange-400 hover:bg-orange-500" },
    features: [
      "POS Software",
      "Online Ordering",
      "Discounted Payment Processing",
      "Regular Upgrades",
      "Priority Implementation & Technical Support",
      "Owner’s Reporting App",
      "Main Drag admin",
      "Custom Feature Development"
    ],
    recommended: false,
    strikePrice: null,
    custom: true,
  }
];

const PricingComponent = () => {
  return (
    <div
      className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 min-h-screen mt-16 sm:mt-20 lg:mt-[140px]"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="text-center mb-8 sm:mb-12 pt-4 sm:pt-0">
        <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
          <span className="text-gray-700 font-semibold">Flexible Pricing</span> for Every Restaurant Size
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Whether you're just starting or scaling, we have a plan for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.recommended ? "border-2 border-orange-400 bg-gradient-to-br from-purple-100 to-pink-100" : ""}`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                  <span className="mr-1">★</span>
                  Recommended
                </span>
              </div>
            )}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h2>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              <div className="flex items-baseline mb-2">
                <span className={`text-5xl font-semibold text-gray-900`}>{plan.price}</span>
                {plan.strikePrice && (
                  <span className="text-xl text-gray-400 ml-2 line-through">{plan.strikePrice}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-6">{plan.priceNote}</p>
              <button
                className={`w-full ${plan.button.style} text-white font-semibold py-3 px-6 rounded-lg transition-colors`}
              >
                {plan.button.text}
              </button>
            </div>
            <div className="space-y-4">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 bg-orange-400">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;