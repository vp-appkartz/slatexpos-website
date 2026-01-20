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
        image: "/products/rps/wwo-rps-1.png",
        title: "Data Driven Decision-Making",
        description: "Discover your best-selling items, track sales patterns and customer preferences, and uncover actionable insights with advanced analytics and reporting."
      },
      {
        image: "/products/rps/wwo-rps-2.png",
        title: "50+ Detail Reports",
        description: "Get access to 50+ important questions with the power of dashboard and visualized analytics. Our restaurant POS system for your growth journey."
      },
      {
        image: "/products/rps/wwo-rps-3.png",
        title: "Customer Loyalty",
        description: "Build long-term relationships effortlessly with the varied features of the loyalty program to capture, retain and return customer."
      },
      {
        image: "/products/rps/wwo-rps-4.png",
        title: "Inventory Control",
        description: "Prevent overselling and spoil with smart inventory till software, ensuring optimal stock levels and maintaining cost profitability and productivity."
      }
    ]
  },
  faqSection: {
    faqs: [
      {
        question: "What is a restaurant POS system?",
        answer: "A restaurant POS system is a digital tool that combines hardware and software to streamline operations and enhance customer experience. It handles tasks ranging from taking orders and processing payments to managing inventory, tracking sales, and generating sales and analytics reports. By automating these processes, POS systems boost efficiency, reduce errors, and provide valuable insights for informed decision-making. The Restaurant POS hardware typically comprises of Point of Sale terminals, customer facing displays, kitchen display system, receipt printers, kitchen printers, cash drawers, and payment processors."
      },
      {
        question: "How to choose the best restaurant POS system?",
        answer: "Make sure that the new restaurant POS system that you select has a user-friendly interface, robust reporting and analytics tool, sound inventory management features, order management, reliable payment processing, effortless employee management. Most importantly the POS solution should help you in building loyal relationships with your customers. Additionally, the cost, the hardware compatibility, customer support, scalability and security of the system are also an important factor while choosing the right POS solution for your restaurant."
      },
      {
        question: "What hardware is required to use SlateX POS? Does SlateX POS offer hardware?",
        answer: "SlateX Restaurant POS is a Cloud Based POS system that works with Android POS Terminals and Android tablets. It is integrated with EPSON receipt printer. We provide several restaurant POS hardware options per your requirement. Our startup kit includes 15.6″ Android POS terminal with 10″ customer display, a cash drawer, a credit card terminal and two printers – a receipt printer and a kitchen printer."
      },
      {
        question: "Does SlateX Restaurant POS help manage multiple locations easily?",
        answer: "Yes, SlateX is designed for single and multilocation restaurants both. Its centralized control panel simplifies operations, making it ideal for franchise management. By integrating powerful sales and marketing tools, SlateX restaurant software streamlines order processing, reduces operational complexity, and drives overall business growth."
      },
      {
        question: "Does SlateX restaurant POS work offline if the internet goes down?",
        answer: "Yes, SlateX POS works offline so don’t worry about connectivity issues. All transactions are stored locally and synced to the cloud when you’re back online."
      },
      {
        question: "What makes SlateX POS different?",
        answer: "SlateX POS is designed and customized as per the feedback and inputs from restaurant owners and people in the industry for quite some time. Our main goal is to reduce complexity, offer quick turnaround and increase sales. The solutions in the system are quick, user-friendly and easy to use compared to other POS solutions out there. You don’t need to uproot your existing setup and there is no complex installation or training needed. The team at SlateX POS is easily available to answer any questions you might have."
      },
      {
        question: "How fast can I implement SlateX POS in my restaurant?",
        answer: "Setting up and installing SlateX POS takes few minutes only, provided that all hardware and network configurations are already completed. You can start accepting cash payments immediately. For credit card, the payment processor might take 2-3 days for approval."
      },
      {
        question: "Does SlateX POS offer 3rd Party online order integration?",
        answer: "Yes, SlateX POS helps you get all the orders in one place. We offer integration with UberEats, DoorDash, Grubhub, SkipTheDishes and many more."
      },
      {
        question: "What support do you offer?",
        answer: "There is no complex installation or support required while using SlateX POS. We have dedicated support available for menu programming, hardware setup and ongoing tech queries. For any more information, you can reach us at support@slatexpos.com"
      },
      {
        question: "For which countries is SlateX POS service available?",
        answer: "SlateX POS is designed considering Global standards. It can easily be implemented at any restaurant globally. For payment processing, we have integrations available across United States, Canada and United Kingdom."
      },
      {
        question: "What are your pricing plans?",
        answer: "SlateX POS has several customized packages available based on your needs. Reach us out at info@slatexpos.com to learn more."
      }
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
      {
        question: "How do I get started with SlateX POS Kitchen Display System?",
        answer: "SlateX POS is fully integrated and works seamlessly with orders from any mode, be it dine-in, takeaway, delivery, or third-party orders. Reach out to us and one of our team members will get in touch to take this further. Upon subscription, we will assist you with the setup to get started."
      },
      {
        question: "What kind of hardware is required to use the kitchen display system of SlateX POS?",
        answer: "The kitchen display with SlateX restaurant POS works with Android hardware. We provide screen sizes of 10″, 15.6″, or 21.5″ for your kitchen display needs."
      },
      {
        question: "Can SlateX restaurant POS kitchen display be used wirelessly?",
        answer: "Yes, SlateX restaurant POS can be used wirelessly, though we recommend you use a wired connection to the router for a smoother experience."
      },
      {
        question: "Do I need an internet connection all the time to use SlateX restaurant POS kitchen display?",
        answer: "You can use our kitchen display system offline as well. Once the internet is back up and running, we restore and sync the backup."
      },
      {
        question: "What reporting and analytics are available to use your kitchen display?",
        answer: "Along with getting details on average number of tickets, detailed order information, and bump times, the most important report we offer is the ‘Item Delay Analysis’ report. This report provides detailed information on delays in item preparation, allowing for the identification and correction of kitchen workflow inefficiencies to improve overall output."
      },
      {
        question: "What if I need multiple KDS restaurant stations?",
        answer: "Yes, you can easily set up multiple KDS stations with SlateX restaurant POS and define each as prep or expo KDS as per your requirements."
      }
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
  faqSection: {
    faqs: [
      {
        question: "How much does Online Ordering cost?",
        answer: "SlateX POS online ordering system comes with different plans that also include your own branded app as well as integration with DoorDash Drive. Reach us at info@slatexpos.com to get a customized quote based on your needs."
      },
      {
        question: "How do I get started with SlateX POS online ordering system?",
        answer: "Once you have subscribed or opted to have our online ordering restaurant system, we set up your account to provide you with the online ordering website and branded mobile app. If you are already using our POS solution, you can use the same menu and map it with the online ordering solution. We also offer a mobile app that you can offer to your customers to place orders directly."
      },
      {
        question: "Can I use SlateX POS if I am using a different POS?",
        answer: "Yes, you can use it. SlateX POS online ordering can be used with other POS solutions easily."
      },
      {
        question: "Is there a contract or a commitment to use SlateX POS online ordering system?",
        answer: "There is no contract or commitment to use the SlateX POS online ordering restaurant system. It is an annual subscription and you are free to cancel it anytime you need."
      },
      {
        question: "Do I need to pay card fees since SlateX POS states it offers zero commission online ordering?",
        answer: "The online ordering restaurant system with SlateX does not charge any commission fees. However, please note that card processing fees will still apply."
      },
      {
        question: "How will I get payments on orders through my website?",
        answer: "We are partnered with Elavon for payment processing, and all payments will be deposited directly into your bank account in accordance with the payment gateway’s policies."
      },
      {
        question: "Do you provide domain service as well?",
        answer: "Yes, we can provide your domain service at additional cost."
      },
      {
        question: "Do I need hosting for online ordering?",
        answer: "No, you do not need hosting if you are going only for the online ordering website."
      },
      {
        question: "Can customers schedule orders in advance?",
        answer: "Yes, with the online ordering of SlateX POS, customers can place orders in advance and schedule a convenient pickup time. This is great for big orders and special events."
      },
      {
        question: "Can you help me design a marketing website?",
        answer: "Our team of skilled developers and designers are well equipped in creating customized websites and apps tailored to meet your specific needs. We provide a fixed cost based on your specific requirements and are available to offer the service whenever you need them. Reach us at info@slatexpos.com to know more or to schedule a quick call."
      }
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
  blackCardSection: {
    heading: "SlateX Restaurant POS Tech Stack",
    subheading: "Comprehensive Backend & Enterprise Reporting",
    items: [
      {
        image: "/products/mobile/mobile-wwo-1.png",
        title: "Restaurant POS System",
        description: "Integrated with the POS, track order progress and streamline the cooking operations and keep track of the item on the menu. Also have real report of the menu sales."
      },
      {
        image: "/products/mobile/mobile-wwo-2.png",
        title: "Kitchen Display System",
        description: "Receive custom order entries on kitchen display within unified kitchen operations in the kitchen. View all order details and food on the order display screen and serve hot food on time."
      },
      {
        image: "/products/mobile/mobile-wwo-3.png",
        title: "Loyalty & Promotions",
        description: "Integrated with the POS, track online business and streamline the customer loyalty business and keep track of the loyal customer. Also have real report of the loyalty rewards."
      },
      {
        image: "/products/mobile/mobile-wwo-1.png",
        title: "Analytics & Reporting",
        description: "Comprehensive analytics dashboard with real-time insights into customer behavior, order patterns, revenue trends, and app performance metrics to drive business growth."
      }
    ]
  },
  faqSection: {
    faqs: [
      {
        question: "Will I get the app in my logo and branding?",
        answer: "Yes, the app will be fully customized with your logo, branding, and color scheme. We provide a white-label solution, so you can make the app look and feel like it’s entirely your own. This ensures your restaurant’s identity is maintained throughout the customer’s experience."
      },
      {
        question: "Is the loyalty program integrated in the app?",
        answer: "Yes, the loyalty program is integrated into the app. Customers can earn points with each order, which can be redeemed for discounts or rewards. You can customize the program to fit your business goals, including point structures, reward types, and thresholds for earning rewards."
      },
      {
        question: "How can we access data on orders of Mobile App?",
        answer: "You can access detailed order data through the SlateXPOS backend. This includes customer orders, transaction details, order status, and more. The dashboard is designed to give you full visibility into sales trends, customer preferences, and order history, allowing you to make data-driven decisions."
      },
      {
        question: "How do I manage promotions or discounts?",
        answer: "Manage promotions and discounts easily with our admin panel. You can create and schedule promotions, such as percentage discounts, fixed-price discounts, or free items with orders over a certain amount. You can also target specific customer groups and adjust the promotion based on factors like time of day or order size."
      },
      {
        question: "Can I set different delivery charges based on distance or location?",
        answer: "Yes, you can set different delivery charges based on distance or location. The app allows you to define custom delivery fees depending on the customer’s proximity to your restaurant, ensuring you can cover delivery costs effectively. You can also set fees for specific zones or neighborhoods, offering flexibility for various delivery scenarios."
      },
      {
        question: "How are refunds and cancellations handled?",
        answer: "Refunds and cancellations are managed through SlateXPOS. If an order needs to be canceled or refunded, you can easily process the request from the POS directly. The system notifies the customers of any changes to their orders, making the process smooth and transparent."
      },
      {
        question: "Is it safe to pay online?",
        answer: "Yes, our payment gateway is secure and uses encryption to protect the financial information of your customers."
      },
      {
        question: "Can the customer save their payment information for future orders?",
        answer: "Yes, they can securely save their payment information for faster checkout."
      },
      {
        question: "How can the customer use a promo code or discount?",
        answer: "During checkout, they’ll see a field to enter the promo code. They can enter the code and tap ‘Apply’."
      },
      {
        question: "Can customers access their order history?",
        answer: "Yes, they can view the order history in the ‘Recent Orders’ section of the app. They can also reorder from this section."
      },
      {
        question: "Can the customers schedule an order for later?",
        answer: "Yes, the app allows them to schedule orders for a specific date and time from the ‘Check Out’ page where they can select ‘Later’ and choose their preferred date and time."
      }
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
  faqSection: {
    faqs: [
      {
        question: "How does the loyalty program work?",
        answer: "Our program is customizable and can work according to customer preferences. The most simple way is where customers earn per dollar spent. An automatic slatex poser is generated through those points once it has reached a minimum threshold."
      },
      {
        question: "How do customers sign up for the loyalty program?",
        answer: "Customers’ phone number is linked to their loyalty account. They can enroll in-store, online, or with a QR code. We also offer an auto enrollment option."
      },
      {
        question: "Can the loyalty program be used across multiple locations?",
        answer: "Yes, the loyalty program can be used across multiple locations easily. All the points and slatex posers work in sync for customers even if they order across multiple locations of the same restaurant."
      },
      {
        question: "Is the loyalty program integrated with your POS system?",
        answer: "Yes, our loyalty program is seamlessly integrated with our POS system for efficient point tracking and redemption."
      },
      {
        question: "Can customers earn and redeem rewards through online orders?",
        answer: "Yes, the SlateX POS loyalty integrates with SlateX POS Online Ordering, so customers can earn and redeem rewards when placing orders at the restaurant or online."
      },
      {
        question: "Are there any additional charges for SMS or email marketing campaigns?",
        answer: "Yes, we have very competitive rates for SMS. For more details reach us at info@slatexpos.com"
      }
    ]
  }
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
  // Add more products here as you create them
};

// Helper function to get product data by slug
export const getProductData = (slug: string): ProductPageData | null => {
  return productRegistry[slug] || null;
};