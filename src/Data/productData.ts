export interface StatItem {
  value: string;
  description: string;
  bgColor?: string;
}

export interface FeatureItem {
  image: string;
  title: string;
  description: string;
}

export interface BlackCardItem {
  image: string;
  title: string;
  description: string;
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

export interface ProductPageData {
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
    stats: StatItem[];
  };
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
    }[];
    stats?: {
      value: string;
      description: string;
    }[];
    ctaText: string;
    imageSrc: string;
    imageAlt?: string;
  };
  keyFeatures: {
    heading?: string;
    subheading?: string;
    features: FeatureItem[];
    maxW?: string;
  };
  blackCardSection?: {
    heading?: string;
    subheading?: string;
    items: BlackCardItem[];
  };
  faqSection: {
    faqs: FAQItem[];
  };
  meta?: Meta;
  updatedAt?: any;
}

export const restaurantPOSData: ProductPageData = {
  slug: "restaurant-pos-system",
  meta: {
    title: "Restaurant POS System",
    description: "Manage, Operate orders, payments, and operations with ease, in an all-in-one, intuitive POS system.",
    keywords: "restaurant pos, pos system, restaurant management",
  },
  heroSection: {
    title: "Restaurants POS System",
    description: "Manage, Operate orders, payments, and operations with ease, in an all-in-one, intuitive POS system.",
    buttonText: "Let's Connect",
    mainImage: "/rps-hero.png",
    mainImageAlt: "Restaurant POS System in action",
    //   deviceImage: "/cafe-device.png",
    //   deviceImageAlt: "POS Device",
    //   deviceTitle: "Restaurants POS System",
    //   deviceDescription: "Complete restaurant management solution",
    //   backgroundText: "POS",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results that drive restaurant success",
    stats: [
      {
        value: "20%",
        description: "Increase in serve the order fastway",
        bgColor: "bg-purple-100"
      },
      {
        value: "150+",
        description: "Restaurant are join with us",
        bgColor: "bg-cyan-100"
      },
      {
        value: "2x",
        description: "Increased in ROI generated",
        bgColor: "bg-orange-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "Restaurant POS System Features",
    heroSubtitle: "Comprehensive solutions for streamlined restaurant management",
    sections: [
      {
        id: '1',
        icon: 'ShieldCheck',
        title: 'Reliable & Simplified Restaurant POS System',
        subtitle: 'Reliable & Simplified Restaurant POS System',
        description: 'Experience seamless operations and unparalleled reliability with our restaurant POS system. Simplify your restaurant workflow and empower your staff with intuitive restaurant POS software features designed for efficiency and ease of use.',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/rps/rps-about-1.png',
        imageAlt: 'Reliable POS System',
        bulletPoints: [
          { text: 'Customer Display', highlight: true },
          { text: 'Works Offline', highlight: true },
          { text: 'Easy & Smooth Operations', highlight: true },
          { text: 'Third Party Order Integration', highlight: true },
          { text: 'Accessible from Anywhere', highlight: true },
          { text: 'Reliable Support', highlight: true },
          { text: 'Employee Management', highlight: true },
          { text: 'Accurate Reports', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'ClipboardList',
        title: 'Centralized Restaurant Menu Management',
        subtitle: 'Centralized Restaurant Menu Management',
        description: 'Simplify operations and keep your offerings up to date with a user-friendly SlateX Restaurant POS system. You can easily create or modify your restaurant menu anytime, anywhere across single or multiple locations, streamlining menu and inventory management.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/rps/rps-about-2.png',
        imageAlt: 'Centralized Menu Management',
        bulletPoints: [
          { text: 'Cloud-Centric', highlight: true },
          { text: 'Multi-location Menu Update', highlight: true },
          { text: 'Single Menu - works everywhere', highlight: true },
          { text: 'Item Mapping', highlight: true },
          { text: 'Effortless Stock Control', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'Sliders',
        title: 'Manage Complex Modifiers',
        subtitle: 'Manage Complex Modifiers',
        description: 'Simplify operations and speed up service with easy to manage intricate modifiers of SlateX restaurant POS that enables seamless ordering. These modifiers are easy to map, reducing order time by at least 50% than other leading Restaurant POS Systems and streamlining the entire process.',
        bgColor: 'bg-pink-500',
        bgGradient: 'from-pink-400 to-pink-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/rps/rps-about-3.png',
        imageAlt: 'Complex Modifier Management',
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
        icon: 'Lock',
        title: 'Enhanced Security Features',
        subtitle: 'Enhanced Security Features',
        description: 'With the advanced security features of SlateX restaurant POS, you maintain full control over your restaurant operations. SlateX restaurant management software allows you to effectively manage orders and oversee employees while regulating access and enhancing security measures, ensuring your data and operations are always protected.',
        bgColor: 'bg-teal-500',
        bgGradient: 'from-teal-400 to-teal-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/rps/rps-about-4.png',
        imageAlt: 'POS Security Features',
        bulletPoints: [
          { text: 'Secured Login and Access', highlight: true },
          { text: 'Security Policies', highlight: true },
          { text: 'Manager Functions', highlight: true },
          { text: 'Menu & Discount', highlight: true }
        ]
      }
    ]
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/products/rps/kb-rps-1.png",
        title: "Simplified Pizza Matrix",
        description: "Make it easy to customize pizza orders with an easy-to-use pizza matrix. With this in mind is some matrices menu items modification able to come directly under half pizza menu build pricing."
      },
      {
        image: "/products/rps/kb-rps-2.png",
        title: "Driver Cashup",
        description: "Ensure order delivery and account collection from drivers. Achieve detailed information on open, close orders, and also total cash with the cashup details."
      },
      {
        image: "/products/rps/kb-rps-3.png",
        title: "QR ID Integration",
        description: "Improve service speed and serve customers better by instantly deploying order information for quick order placement. Enable your customers with enhanced, streamlined convenience."
      },
      {
        image: "/products/rps/kb-rps-4.png",
        title: "Check / Item Splitting",
        description: "Split guest expenses and easily divide the total bill. Make it easy to split a few clicks. Say goodbye to the complexities of handwriting separate checks or manually calculating individual portions."
      },
      {
        image: "/products/rps/kb-rps-5.png",
        title: "Tip Pooling",
        description: "Distribute tips among your team fairly, ensuring clear tip requirements, ensuring fair and efficient allocation, while boosting team morale and satisfaction."
      },
      {
        image: "/products/rps/kb-rps-6.png",
        title: "Label Print",
        description: "Print labels and stick some logo labelling for takeaway orders and modifications. By selecting packaging items, you can improve brand recognition and maintain customer satisfaction."
      }
    ]
  },
  blackCardSection: {
    heading: "What We Offers",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/icons/Reporting App.svg",
        title: "Data Driven Decision-Making",
        description: "Discover your best-selling items, track sales patterns and customer preferences, and uncover actionable insights with advanced analytics and reporting."
      },
      {
        image: "/icons/Reporting App.svg",
        title: "50+ Detail Reports",
        description: "Get access to 50+ important questions with the power of dashboard and visualized analytics. Our restaurant POS system for your growth journey."
      },
      {
        image: "/icons/Loyalty & Promotions.svg",
        title: "Customer Loyalty",
        description: "Build long-term relationships effortlessly with the varied features of the loyalty program to capture, retain and return customer."
      },
      {
        image: "/icons/Restuarant POS System.svg",
        title: "Inventory Control",
        description: "Prevent overselling and spoil with smart inventory till software, ensuring optimal stock levels and maintaining cost profitability and productivity."
      }
    ]
  },
  faqSection: {
    faqs: [
      { question: "Does SlateX POS work if my internet goes down?", answer: "Yes. SlateX has full offline functionality — orders, payments, and kitchen tickets continue without interruption. Everything syncs automatically the moment your connection is restored. You never lose a sale." },
      { question: "Do I need to buy new hardware to use SlateX?", answer: "No. SlateX runs on any Android tablet or device you already own. No proprietary hardware purchase required. Our startup kit is also available if you need a complete setup from scratch." },
      { question: "Can SlateX manage multiple restaurant locations?", answer: "Yes. SlateX centralises menus, reporting, and settings across all your locations. Update an item across every store in seconds and view unified sales reports from one dashboard." },
      { question: "How quickly can I get SlateX running in my restaurant?", answer: "Most restaurants are up and running within 1–2 weeks including hardware setup, menu programming, and staff training. Our onboarding team handles everything so your team hits the ground running." },
      { question: "Does SlateX integrate with third-party delivery platforms?", answer: "Yes. SlateX integrates with UberEats, DoorDash, SkipTheDishes, Grubhub, and more — all orders land on one screen, no extra tablet needed." },
    ]
  }
};

export const kitchenDisplayData: ProductPageData = {
  slug: "kitchen-display",
  heroSection: {
    title: "Kitchen Display System",
    description: "Optimize kitchen efficiency with real-time digital order tracking and management.",
    buttonText: "LET'S CONTACT",
    mainImage: "/kd-hero.png",
    mainImageAlt: "Kitchen Display System in action",
    //   deviceImage: "/kitchen-display-device.png",
    //   deviceImageAlt: "Kitchen Display Device",
    //   deviceTitle: "Kitchen Display",
    //   deviceDescription: "Real-time order management",
    //   backgroundText: "KDS",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Proven results that drive kitchen efficiency",
    stats: [
      {
        value: "20%",
        description: "Increase in same line order processing",
        bgColor: "bg-purple-100"
      },
      {
        value: "150+",
        description: "Restaurants joined with us",
        bgColor: "bg-cyan-100"
      },
      {
        value: "2x",
        description: "Increased in efficiency generated",
        bgColor: "bg-orange-100"
      }
    ]
  },
  scrollSection: {
    heroTitle: "Restaurant POS System Features",
    heroSubtitle: "Comprehensive solutions for streamlined restaurant management",
    sections: [
      {
        id: '1',
        icon: 'LayoutGrid',
        title: 'Optimal Order Handing',
        subtitle: 'Optimal Order Handing',
        description: 'Maximize kitchen efficiency with the kitchen display system of SlateX restaurant POS. Prioritize and organize orders effortlessly using color-coded tickets. Reduce your times, boost accuracy, and elevate customer satisfaction.',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/kd/kd-about-1.png',
        imageAlt: 'Kitchen Display System for Order Handling',
        bulletPoints: [
          { text: 'Restaurant Grade Hardware Fully Integrated', highlight: true },
          { text: 'Color Coded Status', highlight: true },
          { text: 'Multiple Columns Arrangement', highlight: true },
          { text: 'Advanced Item Routing', highlight: true },
          { text: 'Order Countdown Timers', highlight: true },
          { text: 'Item Delay Report', highlight: true },
          { text: 'Recall Served Tickets', highlight: true },
          { text: 'Order Status Integration', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'Monitor',
        title: 'Intuitive Kitchen Display System',
        subtitle: 'Intuitive Kitchen Display System',
        description: 'SlateX restaurant POS system with kitchen display helps to bridge the gap between front and back of house. Group items by order, send orders to the correct prep stations, and instantly alert kitchen staff. Ensure accurate, timely food delivery and boost customer satisfaction.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/kd/kd-about-2.png',
        imageAlt: 'Intuitive Kitchen Display System',
        bulletPoints: [
          { text: 'All Tickets on One Screen', highlight: true },
          { text: 'Color Coded Orders', highlight: true },
          { text: 'All-in-One Integrated', highlight: true },
          { text: 'Countdown Timer', highlight: true }
        ]
      }

    ]
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/products/kd/kd-fe-1.png",
        title: "Item Delay Analysis Report",
        description: "Get real-time insights into delayed orders, identifying bottlenecks and optimizing kitchen workflows for improved efficiency."
      },
      {
        image: "/products/kd/kd-fe-2.png",
        title: "Advanced Item/Order Routing",
        description: "Direct specific food orders to appropriate kitchen stations based on preparation type (fried, grilled, baked)."
      },
      {
        image: "/products/kd/kd-fe-3.png",
        title: "Digital Ordering Integration",
        description: "Display order status on digital signage to improve service efficiency and communication between kitchen and front-of-house."
      },
      {
        image: "/products/kd/kd-fe-4.png",
        title: "Never Lose A Ticket",
        description: "Eco-friendly digital order tickets that enhance team communication and ensure order accuracy."
      },
      {
        image: "/products/kd/kd-fe-5.png",
        title: "Display Orders by Prep Time",
        description: "Optimize operations by displaying ticket times according to item preparation and collection times."
      },
      {
        image: "/products/kd/kd-fe-6.png",
        title: "Recall Tickets",
        description: "Easily recall served or bumped tickets with quick corrections that don't disrupt workflow."
      }
    ]
  },
  faqSection: {
    faqs: [
      { question: "Does the kitchen display work if the internet goes down?", answer: "Yes. SlateX KDS continues to display and update orders offline. Once connectivity is restored, everything syncs automatically — no missed tickets, no kitchen confusion." },
      { question: "Can I set up multiple KDS stations for different kitchen sections?", answer: "Yes. You can configure multiple KDS screens as prep or expo stations. Each screen only shows the items relevant to that station — grill sees grill, fryer sees fryer." },
      { question: "What screen sizes are available for the kitchen display?", answer: "SlateX KDS works on Android screens of any size. We offer purpose-built display options in 10″, 15.6″, and 21.5″ to suit counter space and kitchen visibility needs." },
      { question: "What analytics does the KDS provide?", answer: "SlateX KDS tracks average ticket times, bump times, and our Item Delay Analysis report — pinpointing exactly which items are slowing down your kitchen so you can fix bottlenecks before they hurt service." },
      { question: "Can the KDS be used wirelessly?", answer: "Yes, the KDS works wirelessly over your restaurant Wi-Fi. For high-volume kitchens we recommend a wired ethernet connection for maximum reliability during peak service." },
    ]
  }

};

export const paymentProcessingData: ProductPageData = {
  slug: "payment-processing",
  heroSection: {
    title: "Payment Processing",
    description: "Accept all major payment types securely with fast and reliable payment solutions.",
    buttonText: "Let's Connect",
    mainImage: "/payment-hero.png",
    mainImageAlt: "Payment Processing System",
    //   deviceImage: "/payment-device.png",
    //   deviceImageAlt: "Payment Processing Device",
    //   deviceTitle: "Payment Processing",
    //   deviceDescription: "Secure and fast transactions",
    backgroundText: "PAYMENT",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Helping Restaurants Save",
    subtitle: "Transparent and efficient payment solutions",
    stats: [
      {
        value: "100%",
        description: "No Hidden Fees",
        bgColor: "bg-green-100"
      },
      {
        value: "100%",
        description: "Hassle Free",
        bgColor: "bg-blue-100"
      },
      {
        value: "100%",
        description: "Secure",
        bgColor: "bg-red-100"
      }
    ]
  },
  industrySection: {
    title: "Integrated Management",
    subtitle: "Comprehensive payment solutions for your business",
    features: [
      {
        heading: "Secure Payments to Drive Your Business Forward",
        description: "Our payment processing system ensures fast, secure transactions with diverse payment options to enhance your revenue stream."
      }
    ],
    stats: [
    ],
    ctaText: "Let's Connect",
    imageSrc: "/payment-fe.png",
    imageAlt: "Payment processing features"
  },
  scrollSection: {
    heroTitle: "Secure Payments to Drive Your Business Forward",
    heroSubtitle: "Fast, reliable, and transparent payment processing for your business",
    sections: [
      {
        id: '1',
        icon: 'CreditCard',
        title: 'Secure Payment',
        subtitle: 'Secure Payment to Drive Your Business Forward',
        description: 'Centralized and transparent rates. Fast and secure transactions. Robust payment encryption. Diverse payment options.',
        stat: '',
        statDescription: '',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/payment/payment-about-1.png',
        imageAlt: 'Secure Payment',
        bulletPoints: [
          { text: 'Centralized and transparent rates', highlight: true },
          { text: 'Fast and Secure Transactions', highlight: true },
          { text: 'Robust Payment Encryption', highlight: true },
          { text: 'Diverse Payment Options', highlight: true }
        ]
      }
    ]
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/products/kd/kd-fe-1.png",
        title: "Item Delay Analysis Report",
        description: "Get real-time insights into delayed orders, identifying bottlenecks and optimizing kitchen workflows for improved efficiency."
      },
      {
        image: "/products/kd/kd-fe-2.png",
        title: "Advanced Item/Order Routing",
        description: "Direct specific food orders to appropriate kitchen stations based on preparation type (fried, grilled, baked)."
      },
      {
        image: "/products/kd/kd-fe-3.png",
        title: "Digital Ordering Integration",
        description: "Display order status on digital signage to improve service efficiency and communication between kitchen and front-of-house."
      },
      {
        image: "/products/kd/kd-fe-4.png",
        title: "Never Lose A Ticket",
        description: "Eco-friendly digital order tickets that enhance team communication and ensure order accuracy."
      },
      {
        image: "/products/kd/kd-fe-5.png",
        title: "Display Orders by Prep Time",
        description: "Optimize operations by displaying ticket times according to item preparation and collection times."
      },
      {
        image: "/products/kd/kd-fe-6.png",
        title: "Recall Tickets",
        description: "Easily recall served or bumped tickets with quick corrections that don't disrupt workflow."
      }
    ]
  },
  faqSection: {
    faqs: [
      {
        question: "How can I learn more about your pricing?",
        answer: "Reach out at info@slatexpos.com to learn more about our pricing. We offer customized rates and can discuss them further according to your needs."
      },
      {
        question: "How do you protect customers' payment information?",
        answer: "Your customers’ payment information is our top priority. SlateX payment processing employs advanced security measures to protect their data that include end-to-end encryption, PCI compliance, tokenization and fraud prevention."
      },
      {
        question: "Are there any additional fees for payment processing?",
        answer: "The payment processing rates vary based on the volume and average ticket size. We assure you of the best and lowest rates. For more details reach out at info@slatexpos.com"
      },
      {
        question: "Can your POS system handle split checks or multiple payment methods for a single transaction?",
        answer: "Yes, our POS system allows for split checks and the use of multiple payment methods within a single transaction. This feature is ideal for customers who want to use different cards or payment types to cover their bill."
      },
      {
        question: "Can I generate reports on payment transactions through your POS system?",
        answer: "Yes, our POS system includes robust reporting features that allow you to generate detailed reports on payment transactions. You can track sales, refunds, and payment methods used, which helps with financial analysis and reconciliation."
      }
    ]
  }

};

export const reportingAppData: ProductPageData = {
  slug: "reporting-app",
  heroSection: {
    title: "Reporting App",
    description:
      "Gain powerful insights into sales and performance with easy-to-understand reports.",
    buttonText: "Let's Connect",
    mainImage: "/report-hero.png",
    mainImageAlt: "Reporting Dashboard",
    //   deviceImage: "/images/reporting-device.png",
    //   deviceImageAlt: "Reporting App Device View",
    //   deviceTitle: "Reporting App",
    deviceDescription: "Analyze, Act, and Grow with Smart Reports",
    backgroundText: "Report",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Number Speaks",
    subtitle: "Real impact from real-time reporting",
    stats: [
      {
        value: "20%",
        description: "Increase to serve the order fastway",
        bgColor: "bg-purple-100"
      },
      {
        value: "150+",
        description: "Restaurants are join with us",
        bgColor: "bg-cyan-100"
      },
      {
        value: "2x",
        description: "Increased in ROI generated",
        bgColor: "bg-orange-100"
      }
    ]
  },
  industrySection: {
    title: "Features",
    subtitle: "Extensive and accurate SlateX POS Reporting App",
    features: [
      {
        heading: "Detailed Reports to Drive Decisions",
        description:
          "Gain detailed and accurate insights into sales, orders, labor costs, and more with the SlateX POS Reporting App. It gives restaurants the flexibility to stay in control, monitor performance remotely, and make informed decisions that drive business growth."
      }
    ],
    stats: [],
    ctaText: "Let's Connect",
    imageSrc: "/report-fe.png",
    imageAlt: "POS Reporting Feature"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/products/report/report-fe-1.png",
        title: "Get Immediate Insights",
        description:
          "Get a clear overview of business metrics like sales summary, location-wise and day-wise orders, labor cost, and more—anytime you need it."
      },
      {
        image: "/products/report/report-fe-2.png",
        title: "Quickly Toggle Between Locations",
        description:
          "Switch between business locations with real-time comparison of performance. Unified dashboard and custom filters help track trends location-wise."
      },
      {
        image: "/products/report/report-fe-3.png",
        title: "Payment Summary",
        description:
          "Get breakdowns of all payments received via cash, card, or online. Visualize payment trends to make smarter financial decisions."
      },
      {
        image: "/products/report/report-fe-4.png",
        title: "Hourly Report",
        description:
          "Analyze order flow by hour to detect peak periods. Use insights to optimize staffing, improve fulfillment speed, and enhance customer experience."
      },
      {
        image: "/products/report/report-fe-5.png",
        title: "Product Mix",
        description:
          "Understand which items sell best and when. Use that data to run targeted promotions, optimize your menu, and improve inventory planning."
      },
      {
        image: "/products/report/report-fe-6.png",
        title: "Customized Filters",
        description:
          "Generate specific reports using filters for payment types, time ranges, order types, and more. Identify trends and opportunities fast."
      }
    ]
  },
  faqSection: {
    faqs: [
      {
        question: "How does the reporting app work?",
        answer: "The Reporting App in SlateXPOS Restaurant POS is a tool that provides detailed analytics and insights about your restaurant’s performance. It helps track sales, location-wise performance, labor cost, customer preferences, and more, enabling you to make data-driven decisions."
      },
      {
        question: "What types of insights do I get from the reporting app?",
        answer: "The SlateXPOS Reporting App provides a comprehensive view of your restaurant’s sales, with the ability to filter data by date and location. You can access real-time insights into key metrics such as net sales, orders, discounts, refunds, preferred payment methods, bestsellers, and more. This powerful tool allows restaurant owners to stay in control of their business, even when they are not on-site. By utilizing detailed data and analytics, owners can make informed decisions that drive growth and success for their restaurant."
      },
      {
        question: "Can I customize the reports?",
        answer: "Yes, the reporting app of SlateXPOS allows you to fully customize reports based on various filters, such as date and time, location, order type, and order mode. This flexibility ensures that restaurant owners can access the specific data they need, enabling them to gain deeper insights into their business operations and make more informed decisions."
      },
      {
        question: "Is the data in the Reporting App real-time?",
        answer: "Yes, the SlateXPOS Reporting App provides real-time data, ensuring that you have up-to-date information at your fingertips to make quick and informed decisions."
      },
      {
        question: "Is the app suitable for restaurants of all sizes?",
        answer: "Absolutely! Whether you run a single location or a large chain of restaurants, the SlateXPOS Reporting App is designed to help you scale your business and provide the insights you need to optimize operations at any size."
      }
    ]
  }
};


export const webOrderingData: ProductPageData = {
  slug: "web-ordering",
  heroSection: {
    title: "Web Ordering System",
    description: "Empower your business with a robust web-based ordering platform tailored for desktop and tablet users.",
    buttonText: "Let's Connect",
    mainImage: "/web-hero.png",
    mainImageAlt: "Web Ordering System Interface",
    //   deviceImage: "/assets/images/products/web-ordering-device.png",
    //   deviceImageAlt: "Web Ordering Device View",
    deviceTitle: "Web Ordering System",
    deviceDescription: "Browser-based ordering solution",
    backgroundText: "WEB",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Why Go Web?",
    subtitle: "Advantages of web-based ordering",
    stats: [
      {
        value: "100%",
        description: "No installation required",
        bgColor: "bg-green-100"
      },
      {
        value: "24/7",
        description: "Available anywhere with browser",
        bgColor: "bg-blue-100"
      },
      {
        value: "∞",
        description: "Perfect for larger screens",
        bgColor: "bg-purple-100"
      }
    ]
  },
  industrySection: {
    title: "Web Ordering Features",
    subtitle: "Advanced web-based ordering capabilities",
    features: [
      {
        heading: "Browser-Based Excellence",
        description: "No need to install anything — just open the browser and go! Perfect for larger screens with advanced UI possibilities. Ideal for offices, cafes, and retail counters."
      }
    ],
    stats: [
    ],
    ctaText: "Let's Connect",
    imageSrc: "/web-fe.png",
    imageAlt: "Web Ordering System Features"
  },
  keyFeatures: {
    heading: "Key Features",
    subheading: "What sets our Web Ordering System apart?",
    maxW: "250px",
    features: [
      {
        image: "/products/web/web-fe-1.png",
        title: "Coupon Codes",
        description: "Easily create and manage custom coupon codes to offer discounts, boost sales and customer engagement on your online ordering platform. Track and analyze coupon performance to optimize effectiveness. Turn new customers into regulars with this feature."
      },
      {
        image: "/products/web/web-fe-2.png",
        title: "Banners",
        description: "Effortlessly display striking banners to spotlight promotions and announcements on your online ordering platform. Capture customer attention and drive higher engagement and sales with banners."
      },
      {
        image: "/products/web/web-fe-3.png",
        title: "Analytics Integration",
        description: "Gain valuable insights into customer behavior and sales trends with the analytics integration on your online ordering website. Make data-driven decisions to enhance user experience and boost revenue."
      },
      {
        image: "/products/web/web-fe-4.png",
        title: "Easy / Quick Payments",
        description: "Our online ordering solution offers quick and easy, secure payment options, so your customers can complete orders with ease. Accept a variety of payment methods for a seamless and reliable checkout process."
      },
      {
        image: "/products/web/web-fe-5.png",
        title: "Catering / Express Catering Options",
        description: "With the catering and express catering options, let your customers place orders for regular or event catering with convenient scheduling and timely delivery for any occasion with SlateX POS."
      },
      {
        image: "/products/web/web-fe-6.png",
        title: "Outstanding Customer Experience",
        description: "Deliver an outstanding customer experience through optimized ordering and support. Simplified navigation, intuitive design, and responsive support ensure your guests enjoy visiting your website into regular food customers."
      }
    ]
  },
  scrollSection: {
    heroTitle: "Features",
    heroSubtitle: "Optimized for speed, accuracy, and customer satisfaction in web ordering environments",
    sections: [
      {
        id: '1',
        icon: 'Zap',
        title: 'Boost your Profit with commission-free ordering',
        subtitle: 'Zero Commission',
        description: 'Increase your sales and expand your reach with the commission-free online ordering solution of SlateX POS. From easy menu customization to timely order fulfillment, we empower restaurants to serve customers anytime, anywhere.',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/web/web-about-1.png',
        bulletPoints: [
          { text: 'Commission Free', highlight: true },
          { text: 'Future ordering options', highlight: true },
          { text: 'Multi store listing', highlight: true },
          { text: 'Guest Alerts Email/SMS', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'Layers',
        title: 'Branded Online Ordering Experience',
        subtitle: 'Branded Experience',
        description: 'Offer your customers a seamless and professional ordering experience with your own branded website. Customize colors, logos, and layouts to match your restaurant brand identity.',
        bgColor: 'bg-blue-500',
        bgGradient: 'from-blue-400 to-blue-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/web/web-about-2.png',
        bulletPoints: [
          { text: 'Custom Branding', highlight: true },
          { text: 'Professional Design', highlight: true },
          { text: 'Responsive Layout', highlight: true },
          { text: 'Easy Navigation', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'CreditCard',
        title: 'Secure and Easy Payments',
        subtitle: 'Secure Payments',
        description: 'Accept a variety of payment methods including credit cards, Apple Pay, and Google Pay through our secure payment gateway. Ensure a smooth and reliable checkout process for your customers.',
        bgColor: 'bg-green-500',
        bgGradient: 'from-green-400 to-green-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/web/web-about-3.png',
        bulletPoints: [
          { text: 'Secure Gateway', highlight: true },
          { text: 'Mobile Payments', highlight: true },
          { text: 'Fast Checkout', highlight: true },
          { text: 'Transparent Rates', highlight: true }
        ]
      }
    ]
  },
  faqSection: {
    faqs: [
      { question: "Does SlateX charge commission on online orders?", answer: "Zero commission. Every dollar from an online order goes directly to you. Standard card processing fees apply, but there are no platform commissions or per-order charges from SlateX." },
      { question: "Do online orders go to a separate tablet?", answer: "No. Online orders land directly on your existing SlateX POS — same screen, same kitchen tickets, same workflow. No extra device, no manual re-entry." },
      { question: "Can customers schedule orders for a future time?", answer: "Yes. Customers can place orders in advance and choose a pickup or delivery time. Perfect for lunch pre-orders, large group orders, and special event catering." },
      { question: "Is there a contract or lock-in period?", answer: "No long-term contracts. SlateX Online Ordering is an annual subscription with no commitment. You can cancel any time — though most restaurants never do." },
      { question: "How do I receive payments from online orders?", answer: "Payments are processed securely and deposited directly into your bank account through our payment processing partner. No middleman holding your funds." },
    ]
  }

};

export const mobileOrderingData: ProductPageData = {
  slug: "mobile-ordering",
  heroSection: {
    title: "Branded Mobile App",
    description: "Order a custom mobile app for convenient ordering, seamless and direct engagement.",
    buttonText: "Let's Connect",
    mainImage: "/mobile-hero.png",
    mainImageAlt: "Branded Mobile App Interface",
    //   deviceImage: "/assets/images/products/mobile-app-device.png",
    //   deviceImageAlt: "Mobile App Device View",
    deviceTitle: "Mobile App",
    deviceDescription: "Branded ordering solution",
    backgroundText: "MOBILE",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Reach a wider audience with the branded online ordering app of SlateX POS",
    subtitle: "Enhance customer loyalty, streamline management, and boost total revenue with online food ordering platform. With advanced customization and powerful features, you'll be able to outreach massive audience right through a mobile app.",
    stats: [
      {
        value: "2x",
        description: "Higher customer engagement",
        bgColor: "bg-purple-100"
      },
      {
        value: "85%",
        description: "Users prefer app over web",
        bgColor: "bg-cyan-100"
      },
      {
        value: "3x",
        description: "More repeat orders via app",
        bgColor: "bg-orange-100"
      }
    ]
  },
  industrySection: {
    title: "Features",
    subtitle: "Comprehensive mobile app solutions",
    features: [
      {
        heading: "Branded Online Ordering Experience",
        description: "Enhance customer loyalty with your branded mobile app. Streamline order management and boost revenue with advanced customization options and powerful features that help you reach a massive audience."
      }
    ],
    stats: [
    ],
    ctaText: "Let's Connect",
    imageSrc: "/mobile-fe.png",
    imageAlt: "Branded Mobile App Features"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/products/mobile/mobile-fe-1.png",
        title: "Real-Time Order Updates",
        description: "Keep customers informed with instant notifications about their order status. Real-time updates on order preparation, cooking progress, and delivery status enhance the customer experience and reduce inquiry calls."
      },
      {
        image: "/products/mobile/mobile-fe-2.png",
        title: "Advanced Customization Options",
        description: "Tailor the app to match your brand identity with custom colors, logos, and layouts. Advanced customization options allow you to create a unique branded experience that reinforces your restaurant's personality."
      },
      {
        image: "/products/mobile/mobile-fe-3.png",
        title: "Delivery Tracking",
        description: "Provide customers with live delivery tracking through GPS integration. Real-time location updates, estimated delivery times, and driver contact information create transparency and improve satisfaction."
      },
      {
        image: "/products/mobile/mobile-fe-4.png",
        title: "Integrated Loyalty Programs",
        description: "Build customer relationships and encourage repeat business with built-in loyalty programs. Points, rewards, special offers, and tier-based benefits keep customers coming back while increasing average order value."
      },
      {
        image: "/products/mobile/mobile-fe-5.png",
        title: "Remote Menu Updates",
        description: "Manage your menu remotely with instant updates across all customer apps. Add new items, modify prices, update availability, and showcase daily specials without requiring app updates from customers."
      },
      {
        image: "/products/mobile/mobile-fe-6.png",
        title: "Order Scheduling",
        description: "Allow customers the flexibility to schedule orders for future delivery or pickup. Advanced scheduling options help customers plan ahead while helping you manage kitchen workflow and capacity during peak hours."
      }
    ]
  },
  scrollSection: {
    heroTitle: "Features",
    heroSubtitle: "Empower your guests with a branded mobile app for seamless ordering and engagement",
    sections: [
      {
        id: '1',
        icon: 'Smartphone',
        title: 'Branded Mobile App for Direct Engagement',
        subtitle: 'Branded App',
        description: 'Enhance your brand presence with a custom mobile app tailored to your restaurant. Provide customers with a convenient and direct way to order, view menus, and engage with your business.',
        bgColor: 'bg-purple-500',
        bgGradient: 'from-purple-400 to-purple-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/mobile/mobile-about-1.png',
        bulletPoints: [
          { text: 'Custom Branding', highlight: true },
          { text: 'iOS & Android Support', highlight: true },
          { text: 'Direct Ordering', highlight: true },
          { text: 'User Profile Management', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'Bell',
        title: 'Push Notifications and Real-time Updates',
        subtitle: 'Instance Notifications',
        description: 'Keep your customers informed and engaged with push notifications. Send real-time updates on order status, promotions, and special events directly to their mobile devices.',
        bgColor: 'bg-blue-500',
        bgGradient: 'from-blue-400 to-blue-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/mobile/mobile-about-2.png',
        bulletPoints: [
          { text: 'Order Status Updates', highlight: true },
          { text: 'Promotional Alerts', highlight: true },
          { text: 'Personalized Messages', highlight: true },
          { text: 'Increased Engagement', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'CheckCircle',
        title: 'Flexible Order Scheduling',
        subtitle: 'Order Scheduling',
        description: 'Allow customers to schedule orders for future delivery or pickup. Advanced scheduling options help you manage kitchen workflow and capacity effectively during peak hours.',
        bgColor: 'bg-green-500',
        bgGradient: 'from-green-400 to-green-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/mobile/mobile-about-3.png',
        bulletPoints: [
          { text: 'Future Ordering', highlight: true },
          { text: 'Workflow Management', highlight: true },
          { text: 'Pickup/Delivery Options', highlight: true },
          { text: 'Improved Efficiency', highlight: true }
        ]
      }
    ]
  },
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/icons/Restuarant POS System.svg",
        title: "Restaurant POS System",
        description: "Integrated with the POS, track order progress and streamline the cooking operations and keep track of the item on the menu. Also have real report of the menu sales."
      },
      {
        image: "/icons/Kitchen Display System.svg",
        title: "Kitchen Display System",
        description: "Receive custom order entries on kitchen display within unified kitchen operations in the kitchen. View all order details and food on the order display screen and serve hot food on time."
      },
      {
        image: "/icons/Loyalty & Promotions.svg",
        title: "Loyalty & Promotions",
        description: "Integrated with the POS, track online business and streamline the customer loyalty business and keep track of the loyal customer. Also have real report of the loyalty rewards."
      },
      {
        image: "/icons/Restuarant POS System.svg",
        title: "Analytics & Reporting",
        description: "Comprehensive analytics dashboard with real-time insights into customer behavior, order patterns, revenue trends, and app performance metrics to drive business growth."
      }
    ]
  },
  faqSection: {
    faqs: [
      { question: "Will the app have my restaurant’s branding?", answer: "Yes. Your app is fully white-labelled with your logo, colours, and brand identity. Customers see your brand from the App Store listing all the way through checkout — not SlateX." },
      { question: "Is the loyalty program built into the app?", answer: "Yes. Customers earn and redeem loyalty points directly through the app on every order. You control the point structure, reward thresholds, and redemption rules from your dashboard." },
      { question: "Can customers schedule orders for a later time?", answer: "Yes. Customers can select a future pickup or delivery time during checkout — great for pre-ordering, lunch rushes, and large group orders." },
      { question: "How do I manage app promotions and discounts?", answer: "From your admin panel you can create, schedule, and target promotions — percentage discounts, fixed savings, free items on qualifying orders, and time-based offers like happy hour deals." },
      { question: "How are refunds and cancellations handled?", answer: "All refunds and cancellations are managed directly through your SlateX POS. The customer is notified automatically, and the transaction is updated in real time — no manual follow-up needed." },
    ]
  }
};

export const loyaltyPromotionData: ProductPageData = {
  slug: "loyalty-promotion",
  heroSection: {
    title: "Loyalty & Promotion",
    description: "Drive repeat business with tailored loyalty programs and automated promotions.",
    buttonText: "Let's Connect",
    mainImage: "/loyalty-hero.png",
    mainImageAlt: "Loyalty & Promotion Interface",
    //   deviceImage: "/assets/images/products/loyalty-device.png",
    //   deviceImageAlt: "Loyalty Program Device View",
    deviceTitle: "Loyalty & Promotion",
    deviceDescription: "Customer retention solution",
    backgroundText: "Loyalty",
    backgroundImage: "/bg.png"
  },
  numberSpeaks: {
    title: "Helping Restaurants Increase",
    subtitle: "Lorem ipsum dolor sit amet, consectetur",
    stats: [
      {
        value: "100%",
        description: "Customer Loyalty",
        bgColor: "bg-purple-100"
      },
      {
        value: "100%",
        description: "Personalized Rewards",
        bgColor: "bg-cyan-100"
      },
      {
        value: "100%",
        description: "Targeted Campaigns",
        bgColor: "bg-orange-100"
      },
      {
        value: "100%",
        description: "Order Analytics",
        bgColor: "bg-green-100"
      }
    ]
  },
  industrySection: {
    title: "Features",
    subtitle: "Lorem ipsum dolor sit amet, consectetur",
    features: [
      {
        heading: "Boost Your Sales with Repeat Customers",
        description: "Keep your customers coming back for more. Our loyalty program rewards your loyal customers, drives sales and helps you understand your customers better."
      }
    ],

    ctaText: "Let's Connect",
    imageSrc: "/loyalty-fe.png",
    imageAlt: "Repeat Customers"
  },
  keyFeatures: {
    heading: "Key Benefits",
    subheading: "Our Standout Features",
    features: [
      {
        image: "/products/promotion/promotion-fe-1.png",
        title: "One Loyalty works Everywhere",
        description: "Our loyalty program is fully integrated with the POS, kiosk, online ordering, and mobile app. Customers can earn and redeem points across all channels, making it easy to use and benefit from them."
      },
      {
        image: "/products/promotion/promotion-fe-2.png",
        title: "Easy Points / Rewards",
        description: "Make it simple for customers by offering easy points and rewards. Luck of birthday or anniversary Element. customers can easily understand and collect loyalty points bringing long-term customer retention from one month."
      },
      {
        image: "/products/promotion/promotion-fe-3.png",
        title: "White Label App / Custom Portal",
        description: "Provide a seamless experience to customers through a branded loyalty app. Include customer account management and other targeted rewards."
      },
      {
        image: "/products/promotion/promotion-fe-4.png",
        title: "Special Day Rewards",
        description: "Let your customers celebrate their special days by offering special points and enjoy special offers on birthdays and anniversaries to make them happy."
      },
      {
        image: "/products/promotion/promotion-fe-5.png",
        title: "Extensive Analytics",
        description: "Unleash the power of data. Gain deep insights into customer behavior to optimize your menus, pricing, and promotional campaigns, with detailed analytics."
      },
      {
        image: "/products/promotion/promotion-fe-6.png",
        title: "Segmented Campaigns",
        description: "Create highly effective loyalty campaigns based on customer preferences, spending habits, days visited and menu preferences. Increase order reach and with rewards and give them a quality experience."
      }
    ]
  },
  scrollSection: {
    heroTitle: "Features",
    heroSubtitle: "Build customer loyalty and drive repeat business with powerful reward programs",
    sections: [
      {
        id: '1',
        icon: 'Gift',
        title: 'One Loyalty works Everywhere',
        subtitle: 'Unified Loyalty',
        description: 'Our loyalty program is fully integrated across all platforms: POS, kiosk, online ordering, and mobile app. Customers can earn and redeem points seamlessly wherever they order.',
        bgColor: 'bg-orange-500',
        bgGradient: 'from-orange-400 to-orange-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/promotion/promotion-about-1.png',
        bulletPoints: [
          { text: 'Cross-platform Sync', highlight: true },
          { text: 'Real-time Balancing', highlight: true },
          { text: 'Easy Redemption', highlight: true },
          { text: 'Unified Experience', highlight: true }
        ]
      },
      {
        id: '2',
        icon: 'BarChart',
        title: 'Extensive Analytics & Reporting',
        subtitle: 'Smart Insights',
        description: 'Gain deep insights into customer behavior to optimize your menus, pricing, and promotional campaigns. Track loyalty engagement and ROI with detailed reporting tools.',
        bgColor: 'bg-blue-500',
        bgGradient: 'from-blue-400 to-blue-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/promotion/promotion-about-2.png',
        bulletPoints: [
          { text: 'Customer Spending Habits', highlight: true },
          { text: 'Campaign Performance', highlight: true },
          { text: 'ROI Tracking', highlight: true },
          { text: 'Data-driven Decisions', highlight: true }
        ]
      },
      {
        id: '3',
        icon: 'Target',
        title: 'Targeted Segmented Campaigns',
        subtitle: 'Precision Marketing',
        description: 'Create highly effective loyalty campaigns based on customer preferences, spending habits, and visit frequency. Increase your reach with rewards tailored to individual guest tastes.',
        bgColor: 'bg-red-500',
        bgGradient: 'from-red-400 to-red-600',
        buttonText: "Let's Connect",
        imageSrc: '/products/promotion/promotion-about-3.png',
        bulletPoints: [
          { text: 'Behavior-based Targeting', highlight: true },
          { text: 'Custom Offers', highlight: true },
          { text: 'Automated Marketing', highlight: true },
          { text: 'Improved Reach', highlight: true }
        ]
      }
    ]
  },
  faqSection: {
    faqs: [
      { question: "How do customers sign up for the loyalty program?", answer: "Sign-up is frictionless — customers link their phone number in-store, online, or via QR code. We also offer auto-enrollment so every customer is opted in automatically at checkout." },
      { question: "Does loyalty work across multiple locations?", answer: "Yes. Points earned at any of your locations are pooled into one account. Customers can redeem rewards at whichever location they visit — no confusion, no limitations." },
      { question: "Can customers earn and redeem points on online orders?", answer: "Yes. The loyalty program integrates fully with SlateX Online Ordering and the branded mobile app. Points work the same whether a customer orders in-store or online." },
      { question: "Is the loyalty program built into the POS or a separate system?", answer: "It’s fully built into SlateX POS. No third-party integration, no separate app for staff. Points are tracked and redeemed right at the point of sale in one tap." },
      { question: "Can I run BOGOs, combo deals, and happy hour promotions?", answer: "Yes. SlateX includes a full promotions engine — buy-one-get-one, combo pricing, scheduled happy hour discounts, and gift cards. All automated, all running without staff needing to remember anything." },
    ]
  }
};



// ── Gift Card ──────────────────────────────────────────────────────────────────
export const giftCardData: ProductPageData = {
  slug: "gift-card",
  meta: {
    title: "Digital & Physical Gift Cards | SlateX POS",
    description: "Boost revenue and drive new customers with branded digital and physical gift cards fully integrated into your SlateX POS.",
    keywords: "restaurant gift cards, digital gift cards, POS gift card, SlateX gift card",
  },
  heroSection: {
    title: "Gift Cards That Drive Revenue",
    description: "Launch branded digital and physical gift cards in minutes. Customers can buy, redeem, and balance-check across every channel — with zero extra hardware.",
    buttonText: "Let's Connect",
    mainImage: "/loyalty-hero.png",
    mainImageAlt: "SlateX Gift Card Management",
    backgroundText: "GiftCard",
    backgroundImage: "/bg.png",
  },
  numberSpeaks: {
    title: "Gift Cards That Pay Off",
    subtitle: "Real numbers from restaurants using SlateX gift cards",
    stats: [
      { value: "30%", description: "Avg. gift card overspend vs. card value", bgColor: "bg-orange-100" },
      { value: "2×", description: "New customer acquisition vs. walk-ins", bgColor: "bg-purple-100" },
      { value: "0%", description: "Commission on every gift card sale", bgColor: "bg-green-100" },
      { value: "100%", description: "Integrated with POS, web & mobile app", bgColor: "bg-cyan-100" },
    ],
  },
  keyFeatures: {
    heading: "Everything Your Gift Card Program Needs",
    subheading: "One platform. Zero complexity.",
    features: [
      {
        image: "/products/promotion/promotion-fe-1.png",
        title: "Instant Digital Delivery",
        description: "Customers purchase gift cards online or in-store and receive them instantly via email or SMS — no physical card required.",
      },
      {
        image: "/products/promotion/promotion-fe-2.png",
        title: "Physical Cards Support",
        description: "Print and sell branded physical gift cards. Activate at the POS, track balances in real time, and reload without any extra hardware.",
      },
      {
        image: "/products/promotion/promotion-fe-3.png",
        title: "Multi-Channel Redemption",
        description: "Redeem gift cards at the POS terminal, through your website, or on the branded mobile app. Balance syncs instantly across all channels.",
      },
      {
        image: "/products/promotion/promotion-fe-4.png",
        title: "Custom Branding",
        description: "Add your logo and brand colours to digital and physical cards. Give customers a premium experience that feels native to your restaurant.",
      },
      {
        image: "/products/promotion/promotion-fe-5.png",
        title: "Balance Management",
        description: "Customers can check their remaining balance online, in the app, or at the counter. Staff can reload or void cards with a single tap.",
      },
      {
        image: "/products/promotion/promotion-fe-6.png",
        title: "Sales & Liability Reporting",
        description: "Track outstanding gift card liability, redemption rates, and revenue in your SlateX dashboard. Full audit trail, zero guesswork.",
      },
    ],
  },
  faqSection: {
    faqs: [
      {
        question: "Do I need extra hardware to accept gift cards?",
        answer: "No. Gift cards are fully built into SlateX POS. Digital cards are redeemed by entering a code or scanning a QR; physical cards use the same card reader you already have for payments.",
      },
      {
        question: "Can customers buy gift cards online?",
        answer: "Yes. Your branded online ordering site and mobile app include a gift card purchase flow. Customers get their card delivered instantly by email or SMS.",
      },
      {
        question: "Is there a fee per gift card transaction?",
        answer: "No commission or per-transaction fee. Gift card functionality is included in your SlateX subscription — selling and redeeming cards costs you nothing extra.",
      },
      {
        question: "What happens to unredeemed gift card balances?",
        answer: "Your dashboard tracks outstanding gift card liability in real time. You can set expiry policies to comply with local regulations, and all balances are auditable at any time.",
      },
      {
        question: "Can gift cards be used alongside loyalty points?",
        answer: "Yes. A customer can pay with a gift card and still earn loyalty points on the same order. Both systems run natively inside SlateX POS with no manual steps.",
      },
    ],
  },
};

// Centralized product data registry
export const productRegistry: Record<string, ProductPageData> = {
  "restaurant-pos-system": restaurantPOSData,
  "kitchen-display": kitchenDisplayData,
  "payment-processing": paymentProcessingData,
  "reporting-app": reportingAppData,
  "web-ordering": webOrderingData,
  "mobile-ordering": mobileOrderingData,
  "loyalty-promotion": loyaltyPromotionData,
  "gift-card": giftCardData,
  // Add more products here as you create them
};

// Helper function to get product data by slug
export const getProductData = (slug: string): ProductPageData | null => {
  return productRegistry[slug] || null;
};