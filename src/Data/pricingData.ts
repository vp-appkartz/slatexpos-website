export interface PricingPlan {
    id: string;
    name: string;
    description: string;
    price: string;
    priceNote: string;
    button: {
        text: string;
        style: string;
    };
    features: string[];
    recommended: boolean;
    strikePrice: string | null;
    custom: boolean;
}

export interface ComparisonFeature {
    category: string;
    name: string;
    isHeader?: boolean;
    [key: string]: string | boolean | undefined;
}

export const initialPricingPlans: PricingPlan[] = [
    {
        id: 'free',
        name: "Free",
        description: "Get started with every core feature included. No hardware purchase required — run SlateX on any Android device you already own.",
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
        id: 'plus',
        name: "Plus",
        description: "Everything in Free, plus priority support, DoorDash Drive, and discounted payment processing. Get software credit up to $1,000 against hardware.",
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
        id: 'premium',
        name: "Enterprise",
        description: "For multi-location operations and restaurants with custom requirements. Tailored pricing, custom feature development, and dedicated support.",
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

export const initialCompareFeatures: ComparisonFeature[] = [
    // Point Of Sales
    { category: "Point Of Sales", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Point Of Sales", name: "Lightning Fast Cloud Based POS", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Offline Support", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Table Layout", free: false, plus: true, premium: true },
    { category: "Point Of Sales", name: "Order Management", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Recall Order", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Customer Display", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Cash Management", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Discounts", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Seat Management", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Split Checks", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Reordering", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Auto Gratuity", free: false, plus: true, premium: true },
    { category: "Point Of Sales", name: "Item Availability", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "Caller ID Integration", free: true, plus: true, premium: true },
    { category: "Point Of Sales", name: "House Accounts", free: false, plus: true, premium: true },
    { category: "Point Of Sales", name: "Uniform Menus across locations", free: true, plus: true, premium: true },

    // Customer Ordering
    { category: "Customer Ordering", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Customer Ordering", name: "Online Ordering Website", free: true, plus: true, premium: true },
    { category: "Customer Ordering", name: "Mobile App Ordering", free: false, plus: "Add On ($20 / Month)", premium: true },
    { category: "Customer Ordering", name: "DoorDash Drive", free: false, plus: true, premium: true },
    { category: "Customer Ordering", name: "Third Party Order Integration", free: "Add On", plus: "Add On", premium: true },
    { category: "Customer Ordering", name: "Third Party Menu Sync", free: true, plus: true, premium: true },
    { category: "Customer Ordering", name: "Self Ordering Kiosk", free: false, plus: "Add On ($10 / Month)", premium: true },
    { category: "Customer Ordering", name: "Separate Catering Option", free: false, plus: true, premium: true },
    { category: "Customer Ordering", name: "Driver App Access", free: false, plus: true, premium: true },

    // Kitchen Display System
    { category: "Kitchen Display System", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Kitchen Display System", name: "slatex pos KDS App", free: true, plus: true, premium: true },
    { category: "Kitchen Display System", name: "Order Status App", free: false, plus: true, premium: true },

    // Loyalty & Campaigns
    { category: "Loyalty & Campaigns", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Loyalty & Campaigns", name: "Loyalty", free: false, plus: "Add On ($30 / Month)", premium: true },
    { category: "Loyalty & Campaigns", name: "Email Marketing", free: false, plus: "Included with Loyalty Add On", premium: true },
    { category: "Loyalty & Campaigns", name: "SMS Marketing", free: false, plus: "Included with Loyalty Add On", premium: true },
    { category: "Loyalty & Campaigns", name: "Easy enrollment through customer display, Website & Mobile App", free: false, plus: true, premium: true },

    // Payment Processing
    { category: "Payment Processing", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Payment Processing", name: "Integrated PCI-Compliant Payments", free: true, plus: true, premium: true },
    { category: "Payment Processing", name: "Surcharge Option", free: true, plus: true, premium: true },
    { category: "Payment Processing", name: "Processing Fees", free: "Transparent IC Plus 50bps + 10¢ / transaction *For card present and not present", plus: "Transparent IC Plus 20bps + 10¢ / transaction *For card present and not present (*Processing over $100k a month, get additional benefit)", premium: "Custom" },
    { category: "Payment Processing", name: "Offline Payments", free: true, plus: true, premium: true },

    // Catering & Events
    { category: "Catering & Events", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Catering & Events", name: "slatex pos Catering & Events Module", free: false, plus: "Add On ($10 / Month)", premium: true },
    { category: "Catering & Events", name: "Share estimates over email", free: false, plus: true, premium: true },
    { category: "Catering & Events", name: "Estimates Approval & Payments", free: false, plus: true, premium: true },
    { category: "Catering & Events", name: "Order Sync with POS", free: false, plus: true, premium: true },

    // Employee Management
    { category: "Employee Management", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Employee Management", name: "Unlimited Employees", free: true, plus: true, premium: true },
    { category: "Employee Management", name: "Security Policies", free: true, plus: true, premium: true },
    { category: "Employee Management", name: "Timecard Function", free: true, plus: true, premium: true },

    // Reporting & Analytics
    { category: "Reporting & Analytics", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Reporting & Analytics", name: "Advanced backoffice reports", free: true, plus: true, premium: true },
    { category: "Reporting & Analytics", name: "Owner's App", free: true, plus: true, premium: true },
    { category: "Reporting & Analytics", name: "Custom Reports", free: false, plus: false, premium: true },

    // Purchase & Expenses
    { category: "Purchase & Expenses", name: "", isHeader: true, free: "", plus: "", premium: "" },
    { category: "Purchase & Expenses", name: "Purchase & Expense Module", free: false, plus: true, premium: true },
    { category: "Purchase & Expenses", name: "Access through POS", free: false, plus: true, premium: true },
    { category: "Purchase & Expenses", name: "Sales vs Expense Report", free: false, plus: true, premium: true }
];
