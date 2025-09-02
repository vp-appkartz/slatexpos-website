import { Check, X, Info } from 'lucide-react';

const ComparePlanComponent = () => {
  const features = [
    // Point Of Sales
    { category: "Point Of Sales", isHeader: true },
    { name: "Lightning Fast Cloud Based POS", free: true, plus: true, premium: true },
    { name: "Offline Support", free: true, plus: true, premium: true },
    { name: "Table Layout", free: false, plus: true, premium: true },
    { name: "Order Management", free: true, plus: true, premium: true },
    { name: "Recall Order", free: true, plus: true, premium: true },
    { name: "Customer Display", free: true, plus: true, premium: true },
    { name: "Cash Management", free: true, plus: true, premium: true },
    { name: "Discounts", free: true, plus: true, premium: true },
    { name: "Seat Management", free: true, plus: true, premium: true },
    { name: "Split Checks", free: true, plus: true, premium: true },
    { name: "Reordering", free: true, plus: true, premium: true },
    { name: "Auto Gratuity", free: false, plus: true, premium: true },
    { name: "Item Availability", free: true, plus: true, premium: true },
    { name: "Caller ID Integration", free: true, plus: true, premium: true },
    { name: "House Accounts", free: false, plus: true, premium: true },
    { name: "Uniform Menus across locations", free: true, plus: true, premium: true },
    
    // Customer Ordering
    { category: "Customer Ordering", isHeader: true },
    { name: "Online Ordering Website", free: true, plus: true, premium: true },
    { name: "Mobile App Ordering", free: false, plus: "Add On ($20 / Month)", premium: true },
    { name: "DoorDash Drive", free: false, plus: true, premium: true },
    { name: "Third Party Order Integration", free: "Add On", plus: "Add On", premium: true },
    { name: "Third Party Menu Sync", free: true, plus: true, premium: true },
    { name: "Self Ordering Kiosk", free: false, plus: "Add On ($10 / Month)", premium: true },
    { name: "Separate Catering Option", free: false, plus: true, premium: true },
    { name: "Driver App Access", free: false, plus: true, premium: true },
    
    // Kitchen Display System
    { category: "Kitchen Display System", isHeader: true },
    { name: "slatex pos KDS App", free: true, plus: true, premium: true },
    { name: "Order Status App", free: false, plus: true, premium: true },
    
    // Loyalty & Campaigns
    { category: "Loyalty & Campaigns", isHeader: true },
    { name: "Loyalty", free: false, plus: "Add On ($30 / Month)", premium: true },
    { name: "Email Marketing", free: false, plus: "Included with Loyalty Add On", premium: true },
    { name: "SMS Marketing", free: false, plus: "Included with Loyalty Add On", premium: true },
    { name: "Easy enrollment through customer display, Website & Mobile App", free: false, plus: true, premium: true },
    
    // Payment Processing
    { category: "Payment Processing", isHeader: true },
    { name: "Integrated PCI-Compliant Payments", free: true, plus: true, premium: true },
    { name: "Surcharge Option", free: true, plus: true, premium: true },
    { name: "Processing Fees", free: "Transparent IC Plus 50bps + 10¢ / transaction *For card present and not present", plus: "Transparent IC Plus 20bps + 10¢ / transaction *For card present and not present (*Processing over $100k a month, get additional benefit)", premium: "Custom" },
    { name: "Offline Payments", free: true, plus: true, premium: true },
    
    // Catering & Events
    { category: "Catering & Events", isHeader: true },
    { name: "slatex pos Catering & Events Module", free: false, plus: "Add On ($10 / Month)", premium: true },
    { name: "Share estimates over email", free: false, plus: true, premium: true },
    { name: "Estimates Approval & Payments", free: false, plus: true, premium: true },
    { name: "Order Sync with POS", free: false, plus: true, premium: true },
    
    // Employee Management
    { category: "Employee Management", isHeader: true },
    { name: "Unlimited Employees", free: true, plus: true, premium: true },
    { name: "Security Policies", free: true, plus: true, premium: true },
    { name: "Timecard Function", free: true, plus: true, premium: true },
    
    // Reporting & Analytics
    { category: "Reporting & Analytics", isHeader: true },
    { name: "Advanced backoffice reports", free: true, plus: true, premium: true },
    { name: "Owner's App", free: true, plus: true, premium: true },
    { name: "Custom Reports", free: false, plus: false, premium: true },
    
    // Purchase & Expenses
    { category: "Purchase & Expenses", isHeader: true },
    { name: "Purchase & Expense Module", free: false, plus: true, premium: true },
    { name: "Access through POS", free: false, plus: true, premium: true },
    { name: "Sales vs Expense Report", free: false, plus: true, premium: true }
  ];

  const plans = [
    {
      id: 'free',
      name: 'Standard',
      description: 'POS access, menu setup, basic reports'
    },
    {
      id: 'plus',
      name: 'Pro',
      description: 'All Starter features + analytics, support, Interac integration'
    },
    {
      id: 'premium',
      name: 'Enterprise',
      description: 'All Standard features + multi-location, hardware sync, team training'
    }
  ];

  const renderFeatureValue = (feature, plan) => {
    const value = feature[plan];
    
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 lg:mb-4">
            Plans
          </h1>
          <p className="text-base lg:text-lg text-gray-600">
            Choose the perfect plan for your restaurant
          </p>
        </div>

        {/* Mobile/Tablet View - Stacked Cards */}
        <div className="block lg:hidden space-y-6">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Plan Header */}
              <div className="bg-orange-50 p-4 sm:p-6 text-center border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm">
                  Get Started
                </button>
              </div>
              
              {/* Features */}
              <div className="divide-y divide-gray-100">
                {features.map((feature, index) => {
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
                      <span className="text-sm text-gray-700 flex-1 pr-4">
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
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center min-h-[40px] flex items-center">
                  {plan.description}
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm mt-auto">
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          {/* Feature Rows */}
          {features.map((feature, index) => {
            if (feature.isHeader) {
              return (
                <div key={index} className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                  <div className="p-4 flex items-center col-span-4">
                    <span className="text-lg font-semibold text-gray-900">
                      {feature.category}
                    </span>
                  </div>
                </div>
              );
            }
            
            return (
              <div key={index} className="grid grid-cols-4 border-b border-gray-100 bg-white hover:bg-gray-50 transition-colors">
                <div className="p-4 flex items-center">
                  <span className="text-sm text-gray-700">
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
                {features.map((feature, index) => {
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