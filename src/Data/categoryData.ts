export interface CategoryStatItem {
  value: string;
  description: string;
  bgColor?: string;
}

export interface CategoryFeatureItem {
  image: string;
  title: string;
  description: string;
}

export interface CategoryBlackCardItem {
  image: string;
  title: string;
  description: string;
}

export interface CategoryPageData {
  slug: string;
  heroSection: {
    title: string;
    description: string;
    buttonText?: string;
    mainImage: string;
    mainImageAlt?: string;
    deviceImage?: string;
    deviceImageAlt?: string;
    deviceTitle?: string;
    deviceDescription?: string;
    backgroundText?: string;
    backgroundImage?: string;
  };
  numberSpeaks: {
    title?: string;
    subtitle?: string;
    stats: CategoryStatItem[];
  };
  // Add this new field
  scrollSection?: {
    heroTitle?: string;
    heroSubtitle?: string;
    sections: {
      id: string;
      icon: string; // Icon name as string
      title: string;
      subtitle: string;
      description: string;
      stat?: string;
      statDescription?: string;
      bgColor: string;
      bgGradient: string;
      buttonText: string;
      bulletPoints?: { text: string; highlight?: boolean }[];
      imageSrc?: string;
      imageAlt?: string;
    }[];
  };
  industrySection?: {
    title: string;
    subtitle: string;
    features: {
      heading: string;
      description: string;
      bulletPoints?: string[];
    }[];
    stats?: {
      value: string;
      description: string;
    }[];
    ctaText: string;
    imageSrc: string;
    imageAlt?: string;
  };
  keyFeatures?: {
    heading?: string;
    subheading?: string;
    features: CategoryFeatureItem[];
  };
  blackCardSection?: {
    heading?: string;
    subheading?: string;
    items: CategoryBlackCardItem[];
  };
  faqSection?: {
    faqs: FAQItem[];
  };
  meta?: Meta;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Meta {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export interface HardwareItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  image: string;
  text: string;
  logo: string;
  logoSubtext: string;
}

export interface CTAData {
  title: string;
  description: string;
  image?: string;
}

export interface PromoSectionData {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  trustIndicators: string[];
}

export interface HeroSectionData {
  title: string;
  description: string;
  buttonText?: string;
  mainImage: string;
  mainImageAlt?: string;
  deviceImage?: string;
  deviceImageAlt?: string;
  deviceTitle?: string;
  deviceDescription?: string;
  backgroundText?: string;
  backgroundImage?: string;
}

export interface NumberSpeaksData {
  title?: string;
  subtitle?: string;
  stats: CategoryStatItem[];
}

export interface ScrollSectionData {
  heroTitle?: string;
  heroSubtitle?: string;
  sections: {
    id: string;
    icon: string; // Icon name as string
    title: string;
    subtitle: string;
    description: string;
    stat?: string;
    statDescription?: string;
    bgColor: string;
    bgGradient: string;
    buttonText: string;
    bulletPoints?: { text: string; highlight?: boolean }[];
    imageSrc?: string;
    imageAlt?: string;
  }[];
}

export interface KeyFeaturesData {
  heading?: string;
  subheading?: string;
  features: CategoryFeatureItem[];
}

export interface BlackCardSectionData {
  heading?: string;
  subheading?: string;
  items: CategoryBlackCardItem[];
}

export interface HardwareSectionData {
  title?: string;
  subtitle?: string;
  items: HardwareItem[];
}

export interface TestimonialSectionData {
  title?: string;
  subtitle?: string;
  items: TestimonialItem[];
}

export interface CTASectionData {
  title: string;
  description: string;
  image?: string;
}

export interface FAQSectionData {
  faqs: FAQItem[];
}

export interface CategoryPageData {
  slug: string;
  heroSection: HeroSectionData;
  numberSpeaks: NumberSpeaksData;
  scrollSection?: ScrollSectionData;
  industrySection?: {
    title: string;
    subtitle: string;
    features: {
      heading: string;
      description: string;
      bulletPoints?: string[];
    }[];
    stats?: {
      value: string;
      description: string;
    }[];
    ctaText: string;
    imageSrc: string;
    imageAlt?: string;
  };
  keyFeatures?: KeyFeaturesData;
  blackCardSection?: BlackCardSectionData;
  hardwareSection?: HardwareSectionData;
  promoSection?: PromoSectionData;
  testimonialSection?: TestimonialSectionData;
  ctaSection?: CTASectionData;
  faqSection?: FAQSectionData;
  meta?: Meta;
  updatedAt?: any;
}


export const quickServiceRestaurantData: CategoryPageData = {
  slug: "quick-service-restaurants-qsr",
  meta: {
    title: "Quick Service Restaurant POS",
    description: "Streamline operations with fast, efficient POS solutions designed specifically for quick-service establishments.",
    keywords: "QSR POS, fast food pos, quick service restaurant",
  },
  heroSection: {
    title: "Quick-Service Restaurants (QSR)",
    description: "In a QSR, every second counts. SlateX delivers fast order entry, real-time kitchen communication, and full offline capability so your line never stops moving — even when your internet doesn't cooperate.",
    buttonText: "Let's Connect",
    mainImage: "/qsr-hero.png",
    mainImageAlt: "Quick-Service Restaurant POS System",
    backgroundText: "QSR",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results for quick-service operations",
    stats: [
      {
        value: "35-40%",
        description: "Average time saved per order",
        bgColor: "bg-purple-100"
      },
      {
        value: "15-20%",
        description: "Increase in Upselling",
        bgColor: "bg-cyan-100"
      },
      {
        value: "10-15%",
        description: "Increase in average ticket size",
        bgColor: "bg-yellow-100"
      },
      {
        value: "25-35%",
        description: "Customer retention rate",
        bgColor: "bg-green-100"
      }
    ]
  },
  // Add ScrollSection content for QSR
  scrollSection: {
    heroTitle: "Features",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in quick-service environments",
    sections: [
      {
        id: '1',
        icon: 'Zap',
        title: 'Reliable & Simplified Restaurant POS System',
        subtitle: 'Reliable & Simplified',
        description:
          'Experience seamless operations and unparalleled reliability with our restaurant POS system. Offer your staff intuitive workflows, lightning-fast order entry, and multi-location management with robust features designed for efficiency.',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/qsr/qsr-about-1.png',
        imageAlt: 'Reliable & Simplified POS',
        bulletPoints: [
          { text: 'Customer Display', highlight: true },
          { text: 'Accessible from Anywhere', highlight: true },
          { text: 'Works Offline', highlight: true },
          { text: 'Reliable Support', highlight: true },
          { text: 'Quick Payments', highlight: true },
          { text: 'Easy & Smooth Operations', highlight: true },
          { text: 'Employee Management', highlight: true },
          { text: 'Third Party Order Integration', highlight: true },
          { text: 'Accurate Reports', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'Monitor',
        title: 'Centralized Restaurant Menu Management',
        subtitle: 'Centralized Menu',
        description:
          'Simplify operations and keep your offerings up to date with a user-friendly SlateX Restaurant POS system. Easily create or modify your restaurant menu across single or multiple locations, streamlining menu and inventory management.',
        bgColor: 'bg-gray-900',
        bgGradient: 'from-gray-800 to-gray-900',
        buttonText: "Let's Connect",
        imageSrc: '/category/qsr/qsr-about-2.png',
        imageAlt: 'Centralized Menu Management',
        bulletPoints: [
          { text: 'Cloud-Centric', highlight: true },
          { text: 'Multi-location Menu Update', highlight: true },
          { text: 'Single Menu – works everywhere', highlight: true },
          { text: 'Item Mapping', highlight: true },
          { text: 'Effortless Stock Control', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'Settings',
        title: 'Manage Complex Modifiers',
        subtitle: 'Advanced Modifier Tools',
        description:
          'Simplify operations and speed up service with easy-to-manage intricate modifiers of SlateX POS. These features reduce order time by over 50% vs. competitors by streamlining selection and reducing errors.',
        bgColor: 'bg-blue-500',
        bgGradient: 'from-blue-400 to-blue-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/qsr/qsr-about-3.png',
        imageAlt: 'Manage Modifiers',
        bulletPoints: [
          { text: 'Streamlined Modifier Selection', highlight: true },
          { text: 'Modifier Dependencies', highlight: true },
          { text: 'Eliminate Time and Errors', highlight: true },
          { text: 'Quick Order Turnaround', highlight: true },
          { text: 'Upselling Opportunities', highlight: true }
        ]
      },
      {
        id: '4',
        icon: 'ShieldCheck',
        title: 'Enhanced Security Features',
        subtitle: 'Security & Access Control',
        description:
          'Take full control of restaurant operations with advanced security from SlateX POS. Secure logins, access policies, and managerial tools ensure your data and team are protected at every step.',
        bgColor: 'bg-red-500',
        bgGradient: 'from-red-400 to-red-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/qsr/qsr-about-4.png',
        imageAlt: 'Security Features',
        bulletPoints: [
          { text: 'Secured Login and Access', highlight: true },
          { text: 'Security Policies', highlight: true },
          { text: 'Manager Functions', highlight: true },
          { text: 'Menu & Discount', highlight: true }
        ]
      }
    ]
  },

  industrySection: {
    title: "Features",
    subtitle: "Comprehensive quick-service solutions",
    features: [
      {
        heading: "POS crafted for speed and accuracy",
        description: "Our POS system is specifically designed for quick-service restaurants, focusing on rapid order processing and accuracy.",
        bulletPoints: [
          "Save time across with customer displays",
          "Supports fast order changes through manual cashier",
          "Integrated with kitchen display for seamless operations"
        ]
      }
    ],
    stats: [],
    ctaText: "Let's Connect",
    imageSrc: "/category/qsr/qsr-about.png",
    imageAlt: "Speed & Accuracy"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/qsr/qsr-fe-1.png",
        title: "Customizable Loyalty",
        description: "Offer rewards programs with custom reward tiers, points systems, and promotional campaigns to suit your business needs. Drive repeat customers and offers. Seamlessly track and manage loyalty points within SlateX POS."
      },
      {
        image: "/category/qsr/qsr-fe-2.png",
        title: "Gift Cards",
        description: "Quickly generate gift cards in various denominations based on Special offers or promotions your restaurant is running. Easy to setup and distribute gift cards for both dine-in and takeout orders."
      },
      {
        image: "/category/qsr/qsr-fe-3.png",
        title: "Zero Commission Online Ordering",
        description: "Save 100% on third-party commission fees and branded online ordering platform that helps you reach more customers online. Integration with delivery flies or pickup with all the order history as a single location of SlateX POS."
      },
      {
        image: "/category/qsr/qsr-fe-4.png",
        title: "Delivery Integration",
        description: "Receive orders from all the third-party ordering platforms like GrubHub, DoorDash, Uber Eats. Ship third-party platforms real-time. Use an advanced smart integration to process orders from third party delivery and pickup apps. Live delivery updates are sent to POS directly."
      },
      {
        image: "/category/qsr/qsr-fe-5.png",
        title: "Smooth Payment Processing",
        description: "Let your customers decide their preferred way to make quick payments through credit, debit and mobile register. Offer multiple payment options right from credit cards to contactless payment. Also, you can increase your profits with the lowest credit card rates & compliant credit card surcharge on top of it using SlateX POS."
      },
      {
        image: "/category/qsr/qsr-fe-6.png",
        title: "Advanced Reporting",
        description: "Uncover hidden profit potential with SlateX advanced insights with the reporting dashboard that comes built-in SlateX. Analyze detailed sales and performance analytics for improved decision making, boosting and inventory management, boosting your restaurant's overall efficiency."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/qsr/qsr-wwo-1.png",
        title: "Restaurant POS System",
        description: "Streamlined order management, payment processing, inventory management, and reporting. Discover the easy-to-use, all-in-one SlateX restaurant POS system."
      },
      {
        image: "/category/qsr/qsr-wwo-2.png",
        title: "Kitchen Display System",
        description: "Boost speed, accuracy, and communication in the kitchen with our digital display system that shows real-time orders to staff for seamless tracking."
      },
      {
        image: "/category/qsr/qsr-wwo-3.png",
        title: "Loyalty & Promotion",
        description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, using automated loyalty reward points to customers for effortless use and increased customer retention."
      }
    ]
  }
};

export const casualDiningData: CategoryPageData = {
  slug: "casual-dining",
  heroSection: {
    title: "Casual Fine Dine",
    description: "Casual fine dining runs at a different pace — but still demands accuracy, great service, and tight operations. SlateX gives your team the speed of a QSR system with the flexibility of a full-service platform.",
    buttonText: "Let's Connect",
    mainImage: "/Casual_Header.png",
    mainImageAlt: "Casual Dining Restaurant POS System",
    deviceImage: "",
    deviceImageAlt: "",
    deviceTitle: "Casual Dining",
    deviceDescription: "Complete table service solution",
    backgroundText: "Dining",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results for casual dining establishments",
    stats: [
      {
        value: "25-30%",
        description: "Increase in average profitability",
        bgColor: "bg-purple-100"
      },
      {
        value: "20-25%",
        description: "Increase in quick table turnover",
        bgColor: "bg-cyan-100"
      },
      {
        value: "22-25%",
        description: "Increase in repeat business",
        bgColor: "bg-yellow-100"
      },
      {
        value: "18-20%",
        description: "Reduction in average wait times",
        bgColor: "bg-green-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "QSR Solutions at Every Step",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in quick-service environments",
    sections: [
      {
        id: '1',
        icon: 'Smile',
        title: 'Improve your Customer Service',
        subtitle: 'Better Experience',
        description:
          'Deliver top-tier service with features like order status updates, QR payments, and split check options. Drive satisfaction and faster service with modern POS tools.',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/cd/cd-about-1.png', // Replace with actual path
        imageAlt: 'Customer Service Experience',
        bulletPoints: [
          { text: 'Split Checks', highlight: true },
          { text: 'Order Status Notifications', highlight: true },
          { text: 'Upsell and Cross-sell', highlight: true },
          { text: 'QR payments for quicker checkout', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'Users',
        title: 'Efficient Employee Management',
        subtitle: 'Staff Management',
        description:
          'Streamline employee workflows with performance tracking, payroll tools, and policy control. Boost productivity and simplify team operations effortlessly.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/cd/cd-about-2.png', // Replace with actual path
        imageAlt: 'Employee Management',
        bulletPoints: [
          { text: 'Run Payroll Reports', highlight: true },
          { text: 'Employee Cashout', highlight: true },
          { text: 'Employee Policies', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'Workflow',
        title: 'Simplified Operations and Workflows',
        subtitle: 'Streamlined Flow',
        description:
          'Increase sales and speed up service with centralized control and efficient order processing. Manage multiple locations with a single streamlined solution.',
        bgColor: 'bg-pink-500',
        bgGradient: 'from-pink-400 to-pink-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/cd/cd-about-3.png', // Replace with actual path
        imageAlt: 'Simplified Operations',
        bulletPoints: [
          { text: 'Faster order taking and processing', highlight: true },
          { text: 'Increase sales in more ways', highlight: true },
          { text: 'Centralized management of multiple locations', highlight: true }
        ]
      }
    ]
  },


  industrySection: {
    title: "Features",
    subtitle: "Comprehensive casual dining solutions",
    features: [
      {
        heading: "Simplified Operations and workflows",
        description: "Streamline your casual dining operations with our comprehensive POS system designed for table service excellence.",
        bulletPoints: [
          "Faster order taking and processing",
          "Improved table to table work",
          "Centralized management of multiple locations"
        ]
      }
    ],
    stats: [],
    ctaText: "Let's Connect",
    imageSrc: "/category/cd/cd-about.png",
    imageAlt: "Simplified Workflows"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/cd/cd-fe-1.png",
        title: "Real-time reporting on business performance",
        description: "Learn about your best sellers and customer preferences through detailed sales reports. Scale with to your menu according to dine more customers and get insights on your customers and ordering patterns to successfully promiscuous and build your restaurant business."
      },
      {
        image: "/category/cd/cd-fe-2.png",
        title: "Multiple Payment Options",
        description: "With SlateX casual dining POS system, your customers pay different ways as per their convenience. All payment options including cash, credit cards, Apple Pay and Google Pay, and other contactless payments. Also provide your customers with the option of compliant surcharge programs that the restaurant can turn losses to profit."
      },
      {
        image: "/category/cd/cd-fe-3.png",
        title: "Order Status Notifications",
        description: "SlateX casual dining POS system helps your customers stay informed about their orders with real-time instant notifications sent directly to phone via SMS or email. For a more interactive dining experience, customers can also check their live order status, ensuring they know exactly when their food is ready to serve."
      },
      {
        image: "/category/cd/cd-fe-4.png",
        title: "Tips Management",
        description: "SlateX restaurant POS makes tip management a breeze for you and your staff. It lets you automate tip tracking, tip-share distributions, manage staff payroll, and ensure fair compensation for your team. This feature helps optimize tip management calculations and help to accurately track your server and staff tips with SlateX casual dining POS system."
      },
      {
        image: "/category/cd/cd-fe-5.png",
        title: "Accurate payroll reports",
        description: "SlateX restaurant POS software generates detailed payroll reports that automatically track employee hours, tips, and employee earnings. With accurate data on your fingertips, you can streamline payroll management, optimize your staffing, and ensure compliance with labor laws through the SlateX casual dining POS system."
      },
      {
        image: "/category/cd/cd-fe-6.png",
        title: "Table Management",
        description: "SlateX casual dining POS system offers effective table management that optimizes seating arrangements and customer reservations, and split checks, ensuring a smooth service flow. The table management feature helps you streamline your table management and maximize your efficiency as well as improve customer satisfaction with SlateX."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/cd/cd-wwo-1.png",
        title: "Restaurant POS System",
        description: "Streamlined order management, payment processing, inventory management, and reporting. Discover the easy-to-use, all-in-one SlateX restaurant POS system."
      },
      {
        image: "/category/cd/cd-wwo-2.png",
        title: "Kitchen Display System",
        description: "Boost speed, accuracy, and communication in the kitchen with our digital display system that shows real-time orders to staff for seamless tracking."
      },
      {
        image: "/category/cd/cd-wwo-3.png",
        title: "Loyalty & Promotion",
        description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, using automated loyalty reward points to customers for effortless use and increased customer retention."
      }
    ]
  },

};

// Additional categories can be added here (Fine Dining, Fast Casual, etc.)
export const fineDiningData: CategoryPageData = {
  slug: "fine-dining",
  heroSection: {
    title: "Fine Dining",
    description: "Your guests expect precision. Your POS should deliver it. SlateX gives fine dining restaurants the tools to manage complex floor plans, multi-course orders, and table-side service — with the reliability your guests never have to think about.",
    buttonText: "Let's Connect",
    mainImage: "/Fullservices_Header.png",
    mainImageAlt: "Fine Dining Restaurant POS System",
    deviceImage: "",
    deviceImageAlt: "Fine Dining POS Device",
    deviceTitle: "Fine Dining",
    deviceDescription: "Premium hospitality solution",
    backgroundText: "Fine",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Excellence in fine dining operations",
    stats: [
      {
        value: "40-45%",
        description: "Increase in service efficiency",
        bgColor: "bg-purple-100"
      },
      {
        value: "30-35%",
        description: "Improvement in guest satisfaction",
        bgColor: "bg-cyan-100"
      },
      {
        value: "25-30%",
        description: "Increase in average check size",
        bgColor: "bg-yellow-100"
      },
      {
        value: "95%+",
        description: "Order accuracy rate",
        bgColor: "bg-green-100"
      }
    ]
  },
  industrySection: {
    title: "Features",
    subtitle: "Premium fine dining solutions",
    features: [
      {
        heading: "Sophisticated Service Management",
        description: "Our POS system is crafted to meet the exacting standards of fine dining establishments, ensuring flawless service delivery.",
        bulletPoints: [
          "Advanced course timing and sequencing",
          "Wine pairing and inventory management",
          "Detailed guest preference tracking"
        ]
      }
    ],
    stats: [],
    ctaText: "Let's Connect",
    imageSrc: "/fine-dining-features.png",
    imageAlt: "Premium Service"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/fsr/fsr-fe-1.png",
        title: "Wine & Beverage Management",
        description: "Comprehensive wine list management with detailed inventory tracking, pairing suggestions, and sommelier tools. Track vintage years, manage wine cellar inventory, and provide detailed wine information to enhance guest experience."
      },
      {
        image: "/category/fsr/fsr-fe-2.png",
        title: "Guest Profile Management",
        description: "Maintain detailed guest profiles including dining preferences, allergies, special occasions, and visit history. Personalize service and create memorable dining experiences with comprehensive customer relationship management."
      },
      {
        image: "/category/fsr/fsr-fe-3.png",
        title: "Course Timing & Service Flow",
        description: "Advanced kitchen timing system ensures perfect course sequencing and service flow. Coordinate multiple courses, special preparations, and dietary requirements with precision timing for exceptional dining experiences."
      },
      {
        image: "/category/fsr/fsr-fe-4.png",
        title: "Premium Reservation Management",
        description: "Sophisticated reservation system with table optimization, guest preferences, and special event management. Handle complex booking scenarios, private dining events, and VIP guest requirements seamlessly."
      },
      {
        image: "/category/fsr/fsr-fe-5.png",
        title: "Detailed Analytics & Insights",
        description: "In-depth reporting on guest preferences, menu performance, wine sales, and service metrics. Gain insights into dining trends, optimize menu pricing, and enhance overall restaurant performance with comprehensive analytics."
      },
      {
        image: "/category/fsr/fsr-fe-6.png",
        title: "Staff Performance Tracking",
        description: "Monitor service quality, track staff performance, and manage gratuities with detailed reporting. Ensure consistent service excellence and optimize staff scheduling for peak dining experiences."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/fsr/fsr-wwo-1.png",
        title: "Restaurant POS System",
        description: "Premium POS solution designed for fine dining with advanced features for complex menu management, service coordination, and guest experience enhancement."
      },
      {
        image: "/category/fsr/fsr-wwo-2.png",
        title: "Kitchen Display System",
        description: "Sophisticated kitchen management with course timing, special preparation tracking, and seamless communication between front-of-house and kitchen staff."
      },
      {
        image: "/category/fsr/fsr-wwo-3.png",
        title: "Guest Management System",
        description: "Comprehensive guest relationship management with detailed profiles, preference tracking, and personalized service capabilities for memorable dining experiences."
      }
    ]
  },

};

export const fastCasualData: CategoryPageData = {
  slug: "fast-casual-restaurant",
  heroSection: {
    title: "Fast Casual",
    description: "Transform your fast-casual dining experience with intelligent POS solutions that balance speed with quality service. Designed for modern restaurants that prioritize fresh ingredients, customization, and efficient operations without compromising on customer satisfaction.",
    buttonText: "Let's Connect",
    mainImage: "/fc-hero.png",
    mainImageAlt: "Fast Casual Restaurant POS System",
    deviceImage: "/fast-casual-device.png",
    deviceImageAlt: "Fast Casual POS Device",
    deviceTitle: "Fast Casual",
    deviceDescription: "Modern dining solution",
    backgroundText: "Casual",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Measurable impact on fast-casual operations",
    stats: [
      {
        value: "25-30%",
        description: "Increased Efficiency",
        bgColor: "bg-purple-100"
      },
      {
        value: "20-22%",
        description: "Enhanced Customer Satisfaction",
        bgColor: "bg-cyan-100"
      },
      {
        value: "18-20%",
        description: "Improved Inventory Management",
        bgColor: "bg-yellow-100"
      },
      {
        value: "22-25%",
        description: "Boost in sales and profitability",
        bgColor: "bg-green-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "QSR Solutions at Every Step",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in quick-service environments",
    sections: [
      {
        id: '1',
        icon: 'Workflow',
        title: 'Efficient Order Processing',
        subtitle: 'Order Processing',
        description: '',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/fc/fc-about-1.png',
        imageAlt: 'Order Processing System',
        bulletPoints: [
          { text: 'Mode to Order Customizations', highlight: true },
          { text: 'Personalized Ingredient Selection', highlight: true },
          { text: 'All tickets at one place', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'ClipboardList',
        title: 'Complex Menu Management',
        subtitle: 'Menu Management',
        description: 'Experience the ease of managing complex menus with SlateX Restaurant POS, a powerful tool for fast casual restaurants.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/fc/fc-about-2.png',
        imageAlt: 'Menu Management System',
        bulletPoints: [
          { text: 'Tiered Item Pricing', highlight: true },
          { text: 'Track Customer Preferences', highlight: true },
          { text: 'Real time Inventory Tracking', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'Smile',
        title: 'Exceptional Customer Experience',
        subtitle: 'Customer Experience',
        description: '',
        bgColor: 'bg-pink-500',
        bgGradient: 'from-pink-400 to-pink-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/fc/fc-about-3.png',
        imageAlt: 'Customer Experience',
        bulletPoints: [
          { text: 'Order Accuracy', highlight: true },
          { text: 'Online Ordering with branded app', highlight: true },
          { text: 'Personalized Loyalty', highlight: true }
        ]
      }
    ]
  },
  industrySection: {
    title: "Features",
    subtitle: "Comprehensive fast-casual solutions",
    features: [
      {
        heading: "Efficient Order Processing",
        description: "Streamline your fast-casual operations with our advanced POS system designed for optimal order management and customer experience.",
        bulletPoints: [
          "Made to Order Customizations",
          "Personalized Ingredient Selection",
          "All tickets at one place"
        ]
      }
    ],
    stats: [],
    ctaText: "Let's Connect",
    imageSrc: "/category/fc/fc-about.png",
    imageAlt: "Order Processing"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/fc/fc-fe-1.png",
        title: "Multi-column modifiers",
        description: "This feature allows staff and customers to easily select multiple item options like toppings, sides, or add-ons from neatly organized columns. Whether it's customizing a burger or building a salad, multi-column modifiers simplify complex orders, ensuring accuracy and speeding up the ordering process."
      },
      {
        image: "/category/fc/fc-fe-2.png",
        title: "In-Depth Analytics",
        description: "Our comprehensive reports offer valuable insights to fast-casual restaurants. These reports include detailed ingredient usage tracking to optimize inventory management, category-specific sales analysis to identify top-performing items and in-depth employee performance metrics to work on productivity."
      },
      {
        image: "/category/fc/fc-fe-3.png",
        title: "Ingredient Tracking",
        description: "SlateX restaurant POS allows you to assign the required ingredients to menu items, enabling real-time tracking within inventory management. As customers place orders, ingredient levels are automatically updated, helping you monitor stock, reduce waste, and streamline reordering processes."
      },
      {
        image: "/category/fc/fc-fe-4.png",
        title: "Organized Kitchen Display",
        description: "Even the most complex orders are easily sent to kitchen display systems in an organized, easy to read format. Multi-column modifiers ensure clear communication of orders to kitchen, reducing errors and speeding up kitchen preparation with precision timing."
      },
      {
        image: "/category/fc/fc-fe-5.png",
        title: "Hassle free Online Ordering",
        description: "Our intuitive online ordering system for fast casual restaurants puts the customers in control. With a few simple clicks, they can effortlessly customize their meals to their exact preferences, ensuring a truly personalized and convenient ordering experience."
      },
      {
        image: "/category/fc/fc-fe-6.png",
        title: "On Demand Driver Integration",
        description: "Our integration with DoorDash Drive gives restaurants the ability to manage all the deliveries easily without any hassles. Orders are automatically synced, ensuring accurate and timely delivery with real time tracking. Customers can schedule future orders and restaurants can set up fees to be charged to the customers for the deliveries."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/fc/fc-wwo-1.png",
        title: "Restaurant POS System",
        description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
      },
      {
        image: "/category/fc/fc-wwo-2.png",
        title: "Kitchen Display System",
        description: "Boost speed, accuracy, and communication in the kitchen with our display system, showing real-time orders to staff for seamless tracking."
      },
      {
        image: "/category/fc/fc-wwo-3.png",
        title: "Loyalty & Promotion",
        description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to customers for effortless use and rewards."
      }
    ]
  },

};

export const foodTrucksData: CategoryPageData = {
  slug: "food-trucks",
  heroSection: {
    title: "Food Trucks",
    description: "Mobile food service solutions designed for on-the-go operations. Streamline your food truck business with compact, efficient POS systems that work anywhere your business takes you.",
    buttonText: "Let's Connect",
    mainImage: "/ft-hero.png",
    mainImageAlt: "Food Truck POS System",
    deviceImage: "/food-trucks-device.png",
    deviceImageAlt: "Food Truck POS Device",
    deviceTitle: "Food Trucks",
    deviceDescription: "Mobile operations solution",
    backgroundText: "Truck",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results for mobile food operations",
    stats: [
      {
        value: "25-30%",
        description: "Average Transaction Value",
        bgColor: "bg-purple-100"
      },
      {
        value: "20-22%",
        description: "Better Order Processing Time",
        bgColor: "bg-cyan-100"
      },
      {
        value: "18-20%",
        description: "Increase in Sales Volume",
        bgColor: "bg-yellow-100"
      },
      {
        value: "22-25%",
        description: "Repeat Customer Rate",
        bgColor: "bg-green-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "QSR Solutions at Every Step",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in quick-service environments",
    sections: [
      {
        id: '1',
        icon: 'Globe',
        title: 'Optimize Your Operations from anywhere',
        subtitle: 'Operate from Anywhere',
        description: '',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/ft/ft-about-1.png',
        imageAlt: 'Remote Operations Management',
        bulletPoints: [
          { text: 'Offline Availability', highlight: true },
          { text: 'Fast Order Processing', highlight: true },
          { text: 'Monitor Operations Remotely', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'TrendingUp',
        title: 'Wide Your Reach and Grow Revenue',
        subtitle: 'Revenue Growth',
        description: 'SlateX food truck POS helps streamline operations, expand customer base, and increase revenue.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/ft/ft-about-2.png',
        imageAlt: 'Revenue Expansion Tools',
        bulletPoints: [
          { text: 'Customer Centric Online Ordering', highlight: true },
          { text: 'Offer contactless payment options', highlight: true },
          { text: 'Leverage customer data for targeted marketing', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'LayoutDashboard',
        title: 'Simplify Management',
        subtitle: 'Simplify Management',
        description: '',
        bgColor: 'bg-pink-500',
        bgGradient: 'from-pink-400 to-pink-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/ft/ft-about-3.png',
        imageAlt: 'Management Dashboard',
        bulletPoints: [
          { text: 'Controlled dashboard for easy oversight', highlight: true },
          { text: 'Enhanced Customer Experience', highlight: true },
          { text: 'Scalability to accommodate growth', highlight: true }
        ]
      }
    ]
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/ft/ft-fe-1.png",
        title: "Unified Ticket View",
        description: "Say goodbye to scattered orders. Our POS for food trucks brings all order tickets onto a single, organized screen, providing a clear and comprehensive view. This makes it easier for your team to manage and execute accurate fulfillment, streamlining your entire operation."
      },
      {
        image: "/category/ft/ft-fe-2.png",
        title: "Offline Mode",
        description: "Ensure a seamless customer experience and minimize downtime with our robust offline mode. It automatically syncs data when you're back online, ensuring your transactions remain uninterrupted."
      },
      {
        image: "/category/ft/ft-fe-3.png",
        title: "Integrated Online Ordering",
        description: "Drive growth and reach new customers with your own online ordering platform. Customers can place orders directly from your website or mobile app. This integration offers unparalleled convenience for customers, and provides valuable data to help you optimize your menu and marketing strategies."
      },
      {
        image: "/category/ft/ft-fe-4.png",
        title: "On Demand Delivery Management",
        description: "Streamline your delivery operations with our seamless integration with popular delivery platforms. Orders are automatically synced, ensuring accurate and timely deliveries. Customers can schedule future orders, and you can set up delivery fees to be charged directly to them."
      },
      {
        image: "/category/ft/ft-fe-5.png",
        title: "QR Payments",
        description: "Customers can simply scan a QR code displayed on your POS terminal with their smartphone, eliminating the need for cards. This payment method reduces wait times, minimizes the risk of fraud, and offers a contactless, convenient way for your customers to pay."
      },
      {
        image: "/category/ft/ft-fe-6.png",
        title: "Credit Surcharge Program",
        description: "Protect your profit margins by implementing a credit card surcharge program. This allows you to offset credit card payment processors onto your customers, ensuring fair pricing and transparency while still offering transparent explaining this policy, you can enhance customer trust and ultimately boost profits."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/ft/ft-wwo-1.png",
        title: "Restaurant POS System",
        description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
      },
      {
        image: "/category/ft/ft-wwo-2.png",
        title: "Kitchen Display System",
        description: "Boost speed, accuracy, and communication in the kitchen with our display system, showing real-time orders to staff for seamless tracking."
      },
      {
        image: "/category/ft/ft-wwo-3.png",
        title: "Loyalty & Promotion",
        description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to payments for effortless use and rewards."
      }
    ]
  },

};

export const fullServicesRestaurantData: CategoryPageData = {
  slug: "full-services-restaurant",
  heroSection: {
    title: "Full Services Restaurant",
    description: "Comprehensive restaurant management solutions designed for full-service establishments. Enhance operational efficiency, improve customer experience, and streamline every aspect of your restaurant operations.",
    buttonText: "Let's Connect",
    mainImage: "/fsr-hero.png",
    mainImageAlt: "Full Services Restaurant POS System",
    deviceTitle: "Full Services",
    deviceDescription: "Complete restaurant solution",
    backgroundText: "Full",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results for full-service operations",
    stats: [
      {
        value: "22-25%",
        description: "Improved Table Turnover Rate",
        bgColor: "bg-purple-100"
      },
      {
        value: "15-18%",
        description: "Increased Average Check Value",
        bgColor: "bg-cyan-100"
      },
      {
        value: "25-30%",
        description: "Better Customer Satisfaction",
        bgColor: "bg-yellow-100"
      },
      {
        value: "20-22%",
        description: "Reduced Employee Turnover Rate",
        bgColor: "bg-green-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "QSR Solutions at Every Step",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in quick-service environments",
    sections: [
      {
        id: '1',
        icon: 'Smile',
        title: 'Ensure flawless service',
        subtitle: 'Flawless Service',
        description: '',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/fsr/fsr-about-1.png',
        imageAlt: 'Customer Service Experience',
        bulletPoints: [
          { text: 'Simplified Table Management', highlight: true },
          { text: 'Organized Order Processing', highlight: true },
          { text: 'Flawless Kitchen Communication', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'Users',
        title: 'Customer Relationship Management',
        subtitle: 'Customer Relationship Management',
        description: 'The super-efficient and data-driven tools of SlateX restaurant POS are designed to empower you build lasting customer relationships.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/fsr/fsr-about-2.png',
        imageAlt: 'Employee Management',
        bulletPoints: [
          { text: 'Centralized Gift Cards', highlight: true },
          { text: 'Contactless Payments', highlight: true },
          { text: 'Own your Customer data', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'Workflow',
        title: 'Master Your Menu',
        subtitle: 'Improve Services',
        description: '',
        bgColor: 'bg-pink-500',
        bgGradient: 'from-pink-400 to-pink-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/fsr/fsr-about-3.png',
        imageAlt: 'Simplified Operations',
        bulletPoints: [
          { text: 'Item wise stock tracking', highlight: true },
          { text: 'Analyze menu performance', highlight: true },
          { text: 'Manage complex orders', highlight: true }
        ]
      }
    ]
  },
  industrySection: {
    title: "Features",
    subtitle: "Comprehensive full-service solutions",
    features: [
      {
        heading: "Ensure flawless service",
        description: "Our comprehensive POS system ensures seamless operations and exceptional service delivery for full-service restaurants.",
        bulletPoints: [
          "Workflow Table Management",
          "Organized Order Processing",
          "Seamless Live Communication"
        ]
      }
    ],
    stats: [],
    ctaText: "Let's Connect",
    imageSrc: "/category/fsr/fsr-about.png",
    imageAlt: "Flawless Service"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/fsr/fsr-fe-1.png",
        title: "Real-time Inventory Tracking",
        description: "By using real time integrated inventory management track of ingredients and menu items to keep can access accurate stock levels and prevent stockouts. By automatically updating inventory levels as sales occur, restaurant can optimize purchasing, reduce food costs, and improve overall profitability."
      },
      {
        image: "/category/fsr/fsr-fe-2.png",
        title: "Reporting and analytics",
        description: "The power of data dashboard of SlateX helps like no one else. Our comprehensive reports offer valuable insights into restaurant sales, performance, customer behavior, and operational trends, and make data-driven decisions for continued growth and success."
      },
      {
        image: "/category/fsr/fsr-fe-3.png",
        title: "Customer Loyalty Management",
        description: "With access to secure and relevant customer data such as contact information and dining preferences, full service restaurants can create personalized marketing campaigns and loyalty programs to keep diners coming back for more and drive up business in top performing locations."
      },
      {
        image: "/category/fsr/fsr-fe-4.png",
        title: "Centralized Menu Management",
        description: "Full service restaurants can maintain a single, centralized database for all menu items, enabling them to efficiently update menus across multiple locations. For brief adjustments such as seasonal specials, the system is viewed across all locations, eliminating the need for manual updates at each location."
      },
      {
        image: "/category/fsr/fsr-fe-5.png",
        title: "Third Party Integrations",
        description: "Boost your revenue potential with third party online ordering solutions like Grubhub, Uber Eats, Doordash and other popular food platforms to automate systems with real customer reach. Via API directly, the system seamlessly integrates and delivers easily, on time without any hassle of managing third party apps individually."
      },
      {
        image: "/category/fsr/fsr-fe-6.png",
        title: "Catering / Express Catering Option",
        description: "The catering and express catering option offers the ability to accept large orders or customizable menu options at once. Express catering is a subset of our catering manage events, and to quick pre-fabricated product ideal for quick catering with heavy customer satisfaction."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/fsr/fsr-wwo-1.png",
        title: "Restaurant POS System",
        description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
      },
      {
        image: "/category/fsr/fsr-wwo-2.png",
        title: "Kitchen Display System",
        description: "Boost speed, accuracy, and communication in the kitchen with our display system, showing real-time orders to staff for seamless tracking."
      },
      {
        image: "/category/fsr/fsr-wwo-3.png",
        title: "Loyalty & Promotion",
        description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to payments for effortless use and rewards."
      }
    ]
  },

};

export const pizzeriaData: CategoryPageData = {
  slug: "pizzeria",
  heroSection: {
    title: "Pizza Store",
    description: "Pizzas are the ultimate modifier challenge — size, crust, sauce, toppings, halves, extras. SlateX's multi-level modifier system was built exactly for this. Your customers get exactly what they ordered. Every time.",
    buttonText: "Let's Connect",
    mainImage: "/category/pizza/pizza-hero.png",
    mainImageAlt: "Pizzeria POS System",
    deviceImage: "/pizzeria-device.png",
    deviceImageAlt: "Pizzeria POS Device",
    deviceTitle: "Pizzeria",
    deviceDescription: "Specialized pizza solution",
    backgroundText: "Pizza",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results for pizzeria operations",
    stats: [
      {
        value: "18-20%",
        description: "Increase in average order size",
        bgColor: "bg-purple-100"
      },
      {
        value: "20-25%",
        description: "Reduction in order errors",
        bgColor: "bg-cyan-100"
      },
      {
        value: "15-20%",
        description: "Save on food waste",
        bgColor: "bg-yellow-100"
      },
      {
        value: "35-40%",
        description: "Improve customer repeat ratio",
        bgColor: "bg-green-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "QSR Solutions at Every Step",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in quick-service environments",
    sections: [
      {
        id: '1',
        icon: 'Zap',
        title: 'Provide fast, error-free order fulfillment',
        subtitle: 'Fulfill Your Order',
        description: '',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/pizza/pizza-about-1.png',
        imageAlt: 'Fast Order Fulfillment',
        bulletPoints: [
          { text: '% and % pizza matrix', highlight: true },
          { text: 'Effortless customization', highlight: true },
          { text: 'Real-time delivery management', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'UserCircle',
        title: 'Personalize the Customer Experience',
        subtitle: 'Personalize Experience',
        description: 'Deliver personalized experiences to your pizza customers by tailoring menus, recommendations, and loyalty based on their preferences.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/pizza/pizza-about-2.png',
        imageAlt: 'Personalized Customer Experience',
        bulletPoints: [
          { text: 'Customer-centric online ordering', highlight: true },
          { text: 'Customer Analytics', highlight: true },
          { text: 'Itemized Discount', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'CreditCard',
        title: 'Increase your ticket size with effortless payments',
        subtitle: 'Effortless Payments',
        description: '',
        bgColor: 'bg-pink-500',
        bgGradient: 'from-pink-400 to-pink-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/pizza/pizza-about-3.png',
        imageAlt: 'Payment Processing Solutions',
        bulletPoints: [
          { text: 'QR Payments', highlight: true },
          { text: 'Coupons & Discounts', highlight: true },
          { text: 'Multiple Payment Options', highlight: true },
          { text: 'Integrated Loyalty Programs', highlight: true }
        ]
      }
    ]
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/pizza/pizza-fe-1.png",
        title: "½ and ½ pizza matrix",
        description: "Allow customers to customize their pizzas with unique half-and-half combinations, providing a personalized dining experience. This feature caters to picky eaters and those who can't decide on just one topping combination."
      },
      {
        image: "/category/pizza/pizza-fe-2.png",
        title: "Multi-column Modifiers",
        description: "Allow your staff to handle complex pizza orders with multiple toppings, sizes, and crust types effortlessly with multi-column modifiers in SlateX. Reduce errors and deliver the right orders every time."
      },
      {
        image: "/category/pizza/pizza-fe-3.png",
        title: "Recipe Management",
        description: "Maintain a digital repository of all your pizza recipes, track ingredient and measurements item wise. Track the cost and stock levels of each ingredient used in your recipes to optimize pricing and manage inventory."
      },
      {
        image: "/category/pizza/pizza-fe-4.png",
        title: "Single Menu for all platforms",
        description: "Making manual updates to the menu at multiple ordering platforms can be a time-consuming process. The master menu feature of SlateX POS helps you manage your menus for all online platforms quickly and easily. Update your menu once, and the changes will be instantly reflected everywhere."
      },
      {
        image: "/category/pizza/pizza-fe-5.png",
        title: "Split billing by seat",
        description: "This feature allows customers to easily pay for their individual orders without the hassle and saves valuable time from manual calculations. Just click on split by seat for the order and each customer gets their payable amount and have a convenient payment experience."
      },
      {
        image: "/category/pizza/pizza-fe-6.png",
        title: "Itemized Discounts",
        description: "With this feature, your pizzeria can promote specific menu items like combo deals or new pizza varieties to get more orders on them. This discount can also be used for the customers enrolled in the loyalty program to encourage repeat business."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/pizza/pizza-wwo-1.png",
        title: "Restaurant POS System",
        description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
      },
      {
        image: "/category/pizza/pizza-wwo-2.png",
        title: "Kitchen Display System",
        description: "Boost speed, accuracy, and communication in the kitchen with our display system that shows real-time orders to staff for seamless tracking."
      },
      {
        image: "/category/pizza/pizza-wwo-3.png",
        title: "Loyalty & Promotion",
        description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to customers for effortless use and rewards."
      }
    ]
  }
};

export const cafeBakeryData: CategoryPageData = {
  slug: "caf-and-bakery",
  heroSection: {
    title: "Café & Bakery",
    description: "Cafés aren't just coffee — you're managing modifiers for every drink, tracking pastry inventory, handling walk-up orders, and building a loyal local customer base. SlateX handles the complexity quietly, so your team can focus on the experience.",
    buttonText: "Let's Connect",
    mainImage: "/category/cafe/cafe-hero.png",
    mainImageAlt: "Café & Bakery POS System",
    deviceImage: "/cafe-bakery-device.png",
    deviceImageAlt: "Café & Bakery POS Device",
    deviceTitle: "Cafés & Bakeries",
    deviceDescription: "Artisanal service solution",
    backgroundText: "Café",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results for café and bakery operations",
    stats: [
      {
        value: "20-25%",
        description: "Improved peak hour performance",
        bgColor: "bg-purple-100"
      },
      {
        value: "30-35%",
        description: "Better customer retention",
        bgColor: "bg-cyan-100"
      },
      {
        value: "25-28%",
        description: "Increase in sales growth",
        bgColor: "bg-yellow-100"
      },
      {
        value: "25-30%",
        description: "Improve customer repeat ratio",
        bgColor: "bg-green-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "QSR Solutions at Every Step",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in quick-service environments",
    sections: [
      {
        id: '1',
        icon: 'Zap',
        title: 'Efficient Counter Service',
        subtitle: 'Efficient Service',
        description: '',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/cafe/cafe-about-1.png',
        imageAlt: 'Bakery Counter Service',
        bulletPoints: [
          { text: 'Quick Order Entry', highlight: true },
          { text: 'Customer Order Display Screens', highlight: true },
          { text: 'Stock Countdown and Control', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'CreditCard',
        title: 'Quick and Secure Payments',
        subtitle: 'Secure Payments',
        description: 'With SlateX bakery POS system, say goodbye to transaction hassles. Our quick and secure payment solutions elevate cafe and bakery operations, leaving customers smiling.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/cafe/cafe-about-2.png',
        imageAlt: 'Secure Payment Processing',
        bulletPoints: [
          { text: 'Split checks', highlight: true },
          { text: 'Offer Customized Gift Cards', highlight: true },
          { text: 'QR Payments', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'Heart',
        title: 'Customer Engagement and Loyalty',
        subtitle: 'Customer Engagement',
        description: '',
        bgColor: 'bg-pink-500',
        bgGradient: 'from-pink-400 to-pink-600',
        buttonText: "Let's Connect",
        imageSrc: '/category/cafe/cafe-about-3.png',
        imageAlt: 'Customer Loyalty Programs',
        bulletPoints: [
          { text: 'Customized Loyalty Program', highlight: true },
          { text: 'Offer Quick Checkouts', highlight: true },
          { text: 'Promotions and Upsells', highlight: true }
        ]
      }
    ]
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/category/cafe/cafe-fe-1.png",
        title: "Track Customer preferences & analytics",
        description: "Gain detailed insights of orders accompanied with coffee or integrated makes order taking a breeze for your staff. Personalize customer journey and experience. With the POS order history and customer reports, you can learn about repeat customers and loyalty program members, so that you can evaluate insights for customer strategies."
      },
      {
        image: "/category/cafe/cafe-fe-2.png",
        title: "Integrated deliveries & third party orders",
        description: "SlateX seamlessly integrates with popular delivery platforms like GrubHub, DoorDash, UberEats, Postmates, and many more, making it easier for your customers to order their favorite cafe or bakery treats from the comfort of their homes. This integration not only expands your customer reach but also streamlines the delivery process, saving time and effort."
      },
      {
        image: "/category/cafe/cafe-fe-3.png",
        title: "Central Kitchen Management",
        description: "SlateX cafe POS system streamlines operations by enabling the efficient coordination and management of products across multiple locations from a central kitchen or store. This centralized approach minimizes food waste, and improves coordination between the kitchen and multiple locations, leading to better inventory control and smoother operations."
      },
      {
        image: "/category/cafe/cafe-fe-4.png",
        title: "Complex Order Customization",
        description: "You can easily modify items by selecting options from multiple columns, such as milk, toppings, syrups, and sizes. For example, Let's say you're ordering a latte with oat milk coffee, the POS will display choices for milk type, sweeteners, and size options, making the ordering process and reducing the chance of error."
      },
      {
        image: "/category/cafe/cafe-fe-5.png",
        title: "Offline Mode",
        description: "Offline mode allows the system to continue processing orders, payments, and inventory updates even when there's no internet connection for several consecutive hours. Once the connection is restored, all transaction data is automatically synced with the cloud. This ensures that cafés and bakeries can keep serving customers regardless of connectivity issues."
      },
      {
        image: "/category/cafe/cafe-fe-6.png",
        title: "Multi-location Support",
        description: "This feature allows business owners to oversee operations across various locations, including centralized menu management, staff scheduling, and inventory tracking. Real-time reporting provides insights for each location while maintaining consistency in branding and product quality making on a broader scale."
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/category/cafe/cafe-wwo-1.png",
        title: "Restaurant POS System",
        description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
      },
      {
        image: "/category/cafe/cafe-wwo-2.png",
        title: "Kitchen Display System",
        description: "Boost speed, accuracy, and communication in the kitchen with our display system, showing real-time orders to staff for seamless tracking."
      },
      {
        image: "/category/cafe/cafe-wwo-3.png",
        title: "Loyalty & Promotion",
        description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to customers for effortless use and rewards."
      }
    ]
  }
};

/* ─── Bars & Pubs ─────────────────────────────────────────────── */
export const barsPubsData: CategoryPageData = {
  slug: "bars-and-pubs",
  meta: {
    title: "Bar & Pub POS System | SlateX POS Canada",
    description: "Run tabs, manage happy hours, and streamline tip distribution with SlateX POS — built for bars, pubs, and nightlife venues across Canada.",
    keywords: "bar POS, pub POS, nightclub POS, tab management, happy hour POS, Canada",
  },
  heroSection: {
    title: "POS Built for Bars & Pubs",
    description: "Open tabs, run happy hours, split bills, and close out the night — all from one fast, reliable system. SlateX keeps pace with your busiest rushes.",
    buttonText: "Book a Free Demo",
    mainImage: "/Bars_header.png",
    mainImageAlt: "Bar & Pub POS System",
    backgroundText: "Bars & Pubs",
  },
  numberSpeaks: {
    title: "Built for the Bar Business",
    subtitle: "Tools that keep service fast and profits clear.",
    stats: [
      { value: "3x", description: "Faster tab management vs traditional POS" },
      { value: "100%", description: "Offline mode — never lose a sale" },
      { value: "0%", description: "Commission on online orders" },
      { value: "24/7", description: "Canadian-based support" },
    ],
  },
  keyFeatures: {
    heading: "Everything a Bar Needs",
    subheading: "From tab management to inventory — built for the pace of nightlife.",
    features: [
      {
        image: "/icons/Restuarant POS System.svg",
        title: "Tab Management",
        description: "Open, manage, and close tabs in seconds. Keep track of every order across multiple bar stations without confusion.",
      },
      {
        image: "/icons/Payment Processing.svg",
        title: "Happy Hour Pricing",
        description: "Schedule automatic price changes for happy hour, late night, or any promotional window — no manual overrides needed.",
      },
      {
        image: "/icons/Loyalty & Promotions.svg",
        title: "Tip Distribution",
        description: "Automatically calculate and distribute tips across your bar staff — transparent, fair, and audit-ready.",
      },
      {
        image: "/icons/Reporting App.svg",
        title: "Sales Reporting",
        description: "See which drinks, servers, and time slots drive the most revenue. Close every night with clarity.",
      },
    ],
  },
  blackCardSection: {
    heading: "Why Bars Choose SlateX",
    subheading: "Purpose-built features for fast-paced nightlife environments.",
    items: [
      {
        image: "/icons/Restuarant POS System.svg",
        title: "Multi-Station Sync",
        description: "Every bartender sees every order in real time. No miscommunication, no duplicate tabs.",
      },
      {
        image: "/icons/Payment Processing.svg",
        title: "Fast Payment Processing",
        description: "Accept all payment types — tap, chip, swipe, and digital wallets — without slowing down the line.",
      },
      {
        image: "/icons/Giftcard.svg",
        title: "Gift Cards & Loyalty",
        description: "Keep regulars coming back with digital gift cards and loyalty rewards built right into your POS.",
      },
    ],
  },
  faqSection: {
    faqs: [
      {
        question: "Can SlateX handle busy Friday night rushes?",
        answer: "Absolutely. SlateX is designed for high-volume environments. Offline mode keeps you running even if internet drops, and multi-device sync means every station stays up to date in real time.",
      },
      {
        question: "How does tab management work?",
        answer: "Open a tab for any guest, add drinks and food from any station, and close it out at the end of the night. You can hold a card on file or process payment at close — your call.",
      },
      {
        question: "Can I set automatic happy hour prices?",
        answer: "Yes. You can schedule time-based price rules for any category or individual item. Set it once and SlateX handles it automatically every day.",
      },
      {
        question: "What hardware do I need for my bar?",
        answer: "SlateX works on any Android device — tablets at the bar, a SlateX Station at the server station, or SlateX Go handhelds for table service. No proprietary hardware required.",
      },
    ],
  },
};

// Centralized category data registry
export const categoryRegistry: Record<string, CategoryPageData> = {
  "quick-service-restaurants-qsr": quickServiceRestaurantData,
  "casual-dining": casualDiningData,
  "fine-dining": fineDiningData,
  "fast-casual-restaurant": fastCasualData,
  "food-trucks": foodTrucksData,
  "full-services-restaurant": fullServicesRestaurantData,
  "pizzeria": pizzeriaData,
  "caf-and-bakery": cafeBakeryData,
  "bars-and-pubs": barsPubsData,
};

// Helper function to get category data by slug
export const getCategoryData = (slug: string): CategoryPageData | null => {
  return categoryRegistry[slug] || null;
};