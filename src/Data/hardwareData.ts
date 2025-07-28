// Hardware Data Types

export interface HardwareStatItem {
    value: string;
    description: string;
    bgColor?: string;
  }
  
  export interface HardwareFeatureItem {
    image: string;
    title: string;
    description: string;
  }
  
  export interface HardwareBlackCardItem {
    image: string;
    title: string;
    description: string;
  }
  
  export interface HardwareProductItem {
    title: string;
    description: string;
    buttonText: string;
    image: string;
    imageAlt?: string;
    imageLabel?: string;
    alignment?: 'left' | 'right';
  }
  
  export interface HardwarePageData {
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
    featuresIntro?: {
      title: string;
      subtitle: string;
    };
    productSections: HardwareProductItem[];
    numberSpeaks: {
      title?: string;
      subtitle?: string;
      stats: HardwareStatItem[];
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
      features: HardwareFeatureItem[];
    };
    blackCardSection?: {
      heading?: string;
      subheading?: string;
      items: HardwareBlackCardItem[];
    };
    faqSection?: {
      faqs: {
        question: string;
        answer: string;
      }[];
    };
  }
  
  // Hardware Data Object
  
  export const hardwareData: HardwarePageData = {
    heroSection: {
      title: "SlateX POS Hardware",
      description: "Discover robust, reliable, and modern hardware solutions designed to power your restaurant's operations. From sleek terminals to kitchen displays, SlateX hardware is built for speed, durability, and seamless integration.",
      buttonText: "Get a Demo",
      mainImage: "/hardware/hardware-hero.png",
      mainImageAlt: "SlateX POS Hardware",
      deviceImage: "/hardware/hero-device.png",
      deviceImageAlt: "POS Terminal Device",
      deviceTitle: "All-in-One POS Terminal",
      deviceDescription: "Modern, touch-enabled, and built for busy restaurants.",
      backgroundText: "Hardware",
      backgroundImage: "/bg.png"
    },
    featuresIntro: {
      title: "Features",
      subtitle: "Lorem ipsum dolor sit amet, consectetur"
    },
    productSections: [
      {
        title: "SlateX Station",
        description: "Dual Side display terminal streamlines high-volume ordering and promotes upsells right at the counter. Built for restaurants, cafes, and quick-serve chains, it offers rock-solid performance when every second counts.",
        buttonText: "Let's Connect",
        image: "/hardware/hardware-station.png",
        imageAlt: "SlateX Station POS Terminal",
        imageLabel: "SlateX Station",
        alignment: "right"
      },
    
      {
        title: "SlateX Tab",
        description: "Lightweight 11\" Android tablet delivers full POS capabilities wherever your guests choose to dine. Ideal for tableside ordering, outdoor seating, or food trucks - bringing the checkout directly to your customers as flexibly as the table.",
        buttonText: "Let's Connect",
        image: "/hardware/hardware-tab.png",
        imageAlt: "SlateX Tab Tablet POS",
        imageLabel: "SlateX Tab",
        alignment: "right"
      },
      {
        title: "SlateX Go",
        description: "Compact 6.5\" Android device that empowers staff to take orders and process payments from anywhere on premises, outdoors, or on delivery. It delivers secure, full-featured POS capabilities wherever business happens in a rugged, all-day battery design.",
        buttonText: "Let's Connect",
        image: "/hardware/hardware-go.png",
        imageAlt: "SlateX Go Mobile Device",
        imageLabel: "SlateX Go",
        alignment: "left"
      }
    ],
    numberSpeaks: {
      title: "Number Speaks",
      subtitle: "Trusted by thousands of restaurants nationwide",
      stats: [
        {
          value: "99.9%",
          description: "Uptime Guarantee",
          bgColor: "bg-green-100"
        },
        {
          value: "24/7",
          description: "Support Availability",
          bgColor: "bg-blue-100"
        },
        {
          value: "5 Years",
          description: "Average Hardware Lifespan",
          bgColor: "bg-yellow-100"
        },
        {
          value: "1000+",
          description: "Installations Completed",
          bgColor: "bg-purple-100"
        }
      ]
    },
    industrySection: {
      title: "Hardware Features",
      subtitle: "Purpose-built for restaurant environments",
      features: [
        {
          heading: "Durable, Restaurant-Grade Devices",
          description: "SlateX hardware is engineered to withstand spills, heat, and the fast pace of restaurant life.",
          bulletPoints: [
            "Spill-resistant touchscreens",
            "Fanless, silent operation",
            "Easy to clean and maintain"
          ]
        }
      ],
      stats: [],
      ctaText: "Request a Quote",
      imageSrc: "/hardware/features-main.png",
      imageAlt: "POS Hardware Features"
    },
    keyFeatures: {
      heading: "Key Hardware Benefits",
      subheading: "Why Choose SlateX Hardware?",
      features: [
        {
          image: "/hardware/hardware-fe-1.png",
          title: "Large Screen",
          description: "Empower your staff to navigate menus, place orders, and take payments faster from a 15.6\" POS, 10\" POS, or 6.5\" handheld display."
        },
        {
          image: "/hardware/hardware-fe-2.png",
          title: "Flexible Mounting",
          description: "Put your POS where it works for you. This sleek station pivots so it can be mounted on a bar top, stand or any sturdy surface."
        },
        {
          image: "/hardware/hardware-fe-3.png",
          title: "Customer-Facing Display",
          description: "Enable guests to follow orders, pay, and tip instantly through a 7\" screen with a built-in card and contactless reader."
        }
      ]
    },
    faqSection: {
      faqs: [
        {
          question: "Is SlateX hardware compatible with my existing setup?",
          answer: "SlateX hardware is designed for seamless integration. Our team will assess your needs and ensure compatibility or provide upgrade recommendations."
        },
        {
          question: "What warranty is included?",
          answer: "All SlateX hardware comes with a standard 1-year warranty, with extended coverage available."
        },
        {
          question: "Can I purchase hardware separately?",
          answer: "Yes, you can purchase hardware as a bundle or individually to fit your restaurant's requirements."
        },
        {
          question: "Do you offer on-site installation?",
          answer: "Yes, we offer professional on-site installation and training to ensure a smooth launch."
        }
      ]
    }
  };