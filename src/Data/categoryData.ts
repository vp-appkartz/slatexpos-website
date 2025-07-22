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
      backgroundText: string;
      backgroundImage?: string;
    };
    numberSpeaks: {
      title?: string;
      subtitle?: string;
      stats: CategoryStatItem[];
    };
    industrySection: {
      title: string;
      subtitle: string;
      features: {
        heading: string;
        description: string;
        bulletPoints?: string[];
      }[];
      stats: {
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
      features: CategoryFeatureItem[];
    };
    blackCardSection?: {
      heading?: string;
      subheading?: string;
      items: CategoryBlackCardItem[];
    };
  }
  
  export const quickServiceRestaurantData: CategoryPageData = {
    slug: "quick-service-restaurants",
    heroSection: {
      title: "Quick-Service Restaurants (QSR)",
      description: "Streamline operations with fast, efficient POS solutions designed specifically for quick-service establishments. Boost speed, accuracy, and customer satisfaction.",
      buttonText: "Let's Connect",
      mainImage: "/qsr-hero.png",
      mainImageAlt: "Quick-Service Restaurant POS System",
      deviceImage: "/qsr-device.png",
      deviceImageAlt: "QSR POS Device",
      deviceTitle: "Quick-Service Restaurants (QSR)",
      deviceDescription: "Fast and efficient operations",
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
      imageSrc: "/qsr-features.png",
      imageAlt: "Speed & Accuracy"
    },
    keyFeatures: {
      heading: "Key Benefits",
      subheading: "Our Standout Features",
      features: [
        {
          image: "/categories/qsr/qsr-feature-1.png",
          title: "Customizable Loyalty",
          description: "Offer rewards programs with custom reward tiers, points systems, and promotional campaigns to suit your business needs. Drive repeat customers and offers. Seamlessly track and manage loyalty points within SlateX POS."
        },
        {
          image: "/categories/qsr/qsr-feature-2.png",
          title: "Gift Cards",
          description: "Quickly generate gift cards in various denominations based on Special offers or promotions your restaurant is running. Easy to setup and distribute gift cards for both dine-in and takeout orders."
        },
        {
          image: "/categories/qsr/qsr-feature-3.png",
          title: "Zero Commission Online Ordering",
          description: "Save 100% on third-party commission fees and branded online ordering platform that helps you reach more customers online. Integration with delivery flies or pickup with all the order history as a single location of SlateX POS."
        },
        {
          image: "/categories/qsr/qsr-feature-4.png",
          title: "Delivery Integration",
          description: "Receive orders from all the third-party ordering platforms like GrubHub, DoorDash, Uber Eats. Ship third-party platforms real-time. Use an advanced smart integration to process orders from third party delivery and pickup apps. Live delivery updates are sent to POS directly."
        },
        {
          image: "/categories/qsr/qsr-feature-5.png",
          title: "Smooth Payment Processing",
          description: "Let your customers decide their preferred way to make quick payments through credit, debit and mobile register. Offer multiple payment options right from credit cards to contactless payment. Also, you can increase your profits with the lowest credit card rates & compliant credit card surcharge on top of it using SlateX POS."
        },
        {
          image: "/categories/qsr/qsr-feature-6.png",
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
          image: "/categories/qsr/qsr-tech-1.png",
          title: "Restaurant POS System",
          description: "Streamlined order management, payment processing, inventory management, and reporting. Discover the easy-to-use, all-in-one SlateX restaurant POS system."
        },
        {
          image: "/categories/qsr/qsr-tech-2.png",
          title: "Kitchen Display System",
          description: "Boost speed, accuracy, and communication in the kitchen with our digital display system that shows real-time orders to staff for seamless tracking."
        },
        {
          image: "/categories/qsr/qsr-tech-3.png",
          title: "Loyalty & Promotion",
          description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, using automated loyalty reward points to customers for effortless use and increased customer retention."
        }
      ]
    }
  };
  
  export const casualDiningData: CategoryPageData = {
    slug: "casual-dining",
    heroSection: {
      title: "Casual Dining",
      description: "Enhance your casual dining experience with comprehensive POS solutions that support table service, complex orders, and exceptional customer experiences.",
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
    }
  };
  
  // Additional categories can be added here (Fine Dining, Fast Casual, etc.)
  export const fineDiningData: CategoryPageData = {
    slug: "fine-dining",
    heroSection: {
      title: "Fine Dining",
      description: "Elevate your fine dining establishment with sophisticated POS solutions that support complex service requirements, wine management, and exceptional guest experiences.",
      buttonText: "Let's Connect",
      mainImage: "/fine-dining-hero.png",
      mainImageAlt: "Fine Dining Restaurant POS System",
      deviceImage: "/fine-dining-device.png",
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
          image: "/categories/fine/fine-feature-1.png",
          title: "Wine & Beverage Management",
          description: "Comprehensive wine list management with detailed inventory tracking, pairing suggestions, and sommelier tools. Track vintage years, manage wine cellar inventory, and provide detailed wine information to enhance guest experience."
        },
        {
          image: "/categories/fine/fine-feature-2.png",
          title: "Guest Profile Management",
          description: "Maintain detailed guest profiles including dining preferences, allergies, special occasions, and visit history. Personalize service and create memorable dining experiences with comprehensive customer relationship management."
        },
        {
          image: "/categories/fine/fine-feature-3.png",
          title: "Course Timing & Service Flow",
          description: "Advanced kitchen timing system ensures perfect course sequencing and service flow. Coordinate multiple courses, special preparations, and dietary requirements with precision timing for exceptional dining experiences."
        },
        {
          image: "/categories/fine/fine-feature-4.png",
          title: "Premium Reservation Management",
          description: "Sophisticated reservation system with table optimization, guest preferences, and special event management. Handle complex booking scenarios, private dining events, and VIP guest requirements seamlessly."
        },
        {
          image: "/categories/fine/fine-feature-5.png",
          title: "Detailed Analytics & Insights",
          description: "In-depth reporting on guest preferences, menu performance, wine sales, and service metrics. Gain insights into dining trends, optimize menu pricing, and enhance overall restaurant performance with comprehensive analytics."
        },
        {
          image: "/categories/fine/fine-feature-6.png",
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
          image: "/categories/fine/fine-tech-1.png",
          title: "Restaurant POS System",
          description: "Premium POS solution designed for fine dining with advanced features for complex menu management, service coordination, and guest experience enhancement."
        },
        {
          image: "/categories/fine/fine-tech-2.png",
          title: "Kitchen Display System",
          description: "Sophisticated kitchen management with course timing, special preparation tracking, and seamless communication between front-of-house and kitchen staff."
        },
        {
          image: "/categories/fine/fine-tech-3.png",
          title: "Guest Management System",
          description: "Comprehensive guest relationship management with detailed profiles, preference tracking, and personalized service capabilities for memorable dining experiences."
        }
      ]
    }
  };

  export const fastCasualData: CategoryPageData = {
    slug: "fast-casual",
    heroSection: {
      title: "Fast Casual",
      description: "Streamline your fast-casual operations with intuitive POS solutions that balance speed with quality service. Perfect for modern dining experiences that demand efficiency without compromising customer satisfaction.",
      buttonText: "Let's Connect",
      mainImage: "/fast-casual-hero.png",
      mainImageAlt: "Fast Casual Restaurant POS System",
      deviceImage: "/fast-casual-device.png",
      deviceImageAlt: "Fast Casual POS Device",
      deviceTitle: "Fast Casual",
      deviceDescription: "Efficient service solution",
      backgroundText: "Casual",
      backgroundImage: "/bg.png"
    },
    numberSpeaks: {
      title: "Number Speaks",
      subtitle: "Proven results for fast-casual operations",
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
      imageSrc: "/fast-casual-features.png",
      imageAlt: "Order Processing"
    },
    keyFeatures: {
      heading: "Key Benefits",
      subheading: "Our Standout Features",
      features: [
        {
          image: "/categories/fast-casual/fast-casual-feature-1.png",
          title: "Multi-column modifiers",
          description: "This feature allows staff and customers to easily select multiple item options like toppings, sides, or add-ons from neatly organized columns. Whether it's customizing a burger or building a salad, multi-column modifiers simplify complex orders, ensuring accuracy and speeding up the ordering process."
        },
        {
          image: "/categories/fast-casual/fast-casual-feature-2.png",
          title: "In-Depth Analytics",
          description: "Our comprehensive reports offer valuable insights to fast-casual restaurants. These reports include detailed ingredient usage tracking to optimize inventory management, category-specific sales analysis to identify top-performing items and in-depth employee performance metrics to work on productivity."
        },
        {
          image: "/categories/fast-casual/fast-casual-feature-3.png",
          title: "Ingredient Tracking",
          description: "SlateX restaurant POS allows you to assign the required ingredients to menu items, enabling real-time tracking within inventory management. As customers place orders, ingredient levels are automatically updated, helping you monitor stock, reduce waste, and streamline reordering."
        },
        {
          image: "/categories/fast-casual/fast-casual-feature-4.png",
          title: "Organized Kitchen Display",
          description: "Even the most complex orders are easily sent to kitchen display systems in an organized, easy to read format. Multi-column modifiers ensure clear communication of orders to kitchen, reducing errors and speeding up kitchen preparation."
        },
        {
          image: "/categories/fast-casual/fast-casual-feature-5.png",
          title: "Hassle free Online Ordering",
          description: "Our intuitive online ordering system for fast casual restaurants puts the customers in control. With a few simple clicks, they can effortlessly customize their meals to their exact preferences, ensuring a truly personalized ordering experience."
        },
        {
          image: "/categories/fast-casual/fast-casual-feature-6.png",
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
          image: "/categories/fast-casual/fast-casual-tech-1.png",
          title: "Restaurant POS System",
          description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
        },
        {
          image: "/categories/fast-casual/fast-casual-tech-2.png",
          title: "Kitchen Display System",
          description: "Boost speed, accuracy, and communication in the kitchen with our display system, showing real-time orders to staff for seamless tracking."
        },
        {
          image: "/categories/fast-casual/fast-casual-tech-3.png",
          title: "Loyalty & Promotion",
          description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to payments for effortless use and rewards."
        }
      ]
    }
  };

  export const foodTrucksData: CategoryPageData = {
    slug: "food-trucks",
    heroSection: {
      title: "Food Trucks",
      description: "Mobile food service solutions designed for on-the-go operations. Streamline your food truck business with compact, efficient POS systems that work anywhere your business takes you.",
      buttonText: "Let's Connect",
      mainImage: "/food-trucks-hero.png",
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
    industrySection: {
      title: "Features",
      subtitle: "Comprehensive mobile food solutions",
      features: [
        {
          heading: "Optimize Your Operations from anywhere",
          description: "Our mobile POS system is designed specifically for food trucks and mobile vendors, ensuring smooth operations wherever you go.",
          bulletPoints: [
            "Offline Availability",
            "Fast Order Processing",
            "Monitor Operations Remotely"
          ]
        }
      ],
      stats: [],
      ctaText: "Let's Connect",
      imageSrc: "/food-trucks-features.png",
      imageAlt: "Operate from Anywhere"
    },
    keyFeatures: {
      heading: "Key Benefits",
      subheading: "Our Standout Features",
      features: [
        {
          image: "/categories/food-trucks/food-trucks-feature-1.png",
          title: "Unified Ticket View",
          description: "Say goodbye to scattered orders. Our POS for food trucks brings all order tickets onto a single, organized screen, providing a clear and comprehensive view. This makes it easier for your team to manage and execute accurate fulfillment, streamlining your entire operation."
        },
        {
          image: "/categories/food-trucks/food-trucks-feature-2.png",
          title: "Offline Mode",
          description: "Ensure a seamless customer experience and minimize downtime with our robust offline mode. It automatically syncs data when you're back online, ensuring your transactions remain uninterrupted."
        },
        {
          image: "/categories/food-trucks/food-trucks-feature-3.png",
          title: "Integrated Online Ordering",
          description: "Drive growth and reach new customers with your own online ordering platform. Customers can place orders directly from your website or mobile app. This integration offers unparalleled convenience for customers, and provides valuable data to help you optimize your menu and marketing strategies."
        },
        {
          image: "/categories/food-trucks/food-trucks-feature-4.png",
          title: "On Demand Delivery Management",
          description: "Streamline your delivery operations with our seamless integration with popular delivery platforms. Orders are automatically synced, ensuring accurate and timely deliveries. Customers can schedule future orders, and you can set up delivery fees to be charged directly to them."
        },
        {
          image: "/categories/food-trucks/food-trucks-feature-5.png",
          title: "QR Payments",
          description: "Customers can simply scan a QR code displayed on your POS terminal with their smartphone, eliminating the need for cards. This payment method reduces wait times, minimizes the risk of fraud, and offers a contactless, convenient way for your customers to pay."
        },
        {
          image: "/categories/food-trucks/food-trucks-feature-6.png",
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
          image: "/categories/food-trucks/food-trucks-tech-1.png",
          title: "Restaurant POS System",
          description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
        },
        {
          image: "/categories/food-trucks/food-trucks-tech-2.png",
          title: "Kitchen Display System",
          description: "Boost speed, accuracy, and communication in the kitchen with our display system, showing real-time orders to staff for seamless tracking."
        },
        {
          image: "/categories/food-trucks/food-trucks-tech-3.png",
          title: "Loyalty & Promotion",
          description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to payments for effortless use and rewards."
        }
      ]
    }
  };

  export const fullServicesRestaurantData: CategoryPageData = {
    slug: "full-services-restaurant",
    heroSection: {
      title: "Full Services Restaurant",
      description: "Comprehensive restaurant management solutions designed for full-service establishments. Enhance operational efficiency, improve customer experience, and streamline every aspect of your restaurant operations.",
      buttonText: "Let's Connect",
      mainImage: "/full-services-hero.png",
      mainImageAlt: "Full Services Restaurant POS System",
      deviceImage: "/full-services-device.png",
      deviceImageAlt: "Full Services Restaurant POS Device",
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
      imageSrc: "/full-services-features.png",
      imageAlt: "Flawless Service"
    },
    keyFeatures: {
      heading: "Key Benefits",
      subheading: "Our Standout Features",
      features: [
        {
          image: "/categories/full-services/full-services-feature-1.png",
          title: "Real-time Inventory Tracking",
          description: "By using real time integrated inventory management track of ingredients and menu items to keep can access accurate stock levels and prevent stockouts. By automatically updating inventory levels as sales occur, restaurant can optimize purchasing, reduce food costs, and improve overall profitability."
        },
        {
          image: "/categories/full-services/full-services-feature-2.png",
          title: "Reporting and analytics",
          description: "The power of data dashboard of SlateX helps like no one else. Our comprehensive reports offer valuable insights into restaurant sales, performance, customer behavior, and operational trends, and make data-driven decisions for continued growth and success."
        },
        {
          image: "/categories/full-services/full-services-feature-3.png",
          title: "Customer Loyalty Management",
          description: "With access to secure and relevant customer data such as contact information and dining preferences, full service restaurants can create personalized marketing campaigns and loyalty programs to keep diners coming back for more and drive up business in top performing locations."
        },
        {
          image: "/categories/full-services/full-services-feature-4.png",
          title: "Centralized Menu Management",
          description: "Full service restaurants can maintain a single, centralized database for all menu items, enabling them to efficiently update menus across multiple locations. For brief adjustments such as seasonal specials, the system is viewed across all locations, eliminating the need for manual updates at each location."
        },
        {
          image: "/categories/full-services/full-services-feature-5.png",
          title: "Third Party Integrations",
          description: "Boost your revenue potential with third party online ordering solutions like Grubhub, Uber Eats, Doordash and other popular food platforms to automate systems with real customer reach. Via API directly, the system seamlessly integrates and delivers easily, on time without any hassle of managing third party apps individually."
        },
        {
          image: "/categories/full-services/full-services-feature-6.png",
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
          image: "/categories/full-services/full-services-tech-1.png",
          title: "Restaurant POS System",
          description: "Streamline order management, payment processing, inventory tracking, reporting, and more with the easy-to-use, all-in-one SlateX restaurant POS system."
        },
        {
          image: "/categories/full-services/full-services-tech-2.png",
          title: "Kitchen Display System",
          description: "Boost speed, accuracy, and communication in the kitchen with our display system, showing real-time orders to staff for seamless tracking."
        },
        {
          image: "/categories/full-services/full-services-tech-3.png",
          title: "Loyalty & Promotion",
          description: "The loyalty program seamlessly integrates with the POS, kiosk, online ordering, and mobile app, automatically linking reward points to payments for effortless use and rewards."
        }
      ]
    }
  };
  
  // Centralized category data registry
  export const categoryRegistry: Record<string, CategoryPageData> = {
    "quick-service-restaurants": quickServiceRestaurantData,
    "casual-dining": casualDiningData,
    "fine-dining": fineDiningData,
    "fast-casual": fastCasualData,
    "food-trucks": foodTrucksData,
    "full-services-restaurant": fullServicesRestaurantData,
    // Add more categories here as you create them
  };
  
  // Helper function to get category data by slug
  export const getCategoryData = (slug: string): CategoryPageData | null => {
    return categoryRegistry[slug] || null;
  };