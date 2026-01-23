// Hardware Data Types

import { TestimonialsData } from "../components/Common/Testimonials";
import { BlackSectionData } from "../components/admin/hero/BlackSectionContentEditor";

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

export interface HardwareProductItem {
  id: string; // Added ID for easier management
  title: string;
  description: string;
  buttonText: string;
  image: string;
  imageAlt?: string;
  imageLabel?: string;
  alignment?: 'left' | 'right';
  // Props needed for ScrollSection compatibility
  subtitle?: string; // Optional, can default to title
  icon?: string; // Optional icon name
  bgColor?: string;
  bgGradient?: string;
  bulletPoints?: { text: string; highlight: boolean }[];
}

export interface HardwareHeroSectionData {
  title: string;
  description: string;
  buttonText?: string;
  mainImage: string;
  mainImageAlt?: string;
  deviceImage: string;
  deviceImageAlt?: string;
  deviceTitle: string;
  deviceDescription: string;
  backgroundText: string;
  backgroundImage?: string;
}

export interface HardwarePageData {
  heroSection: HardwareHeroSectionData;
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
  // industrySection is currently not used in Hardware.tsx but was in the data file. Keeping it for reference or future use if needed, but defining it optional.
  industrySection?: {
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
    heading: string;
    subheading: string;
    features: HardwareFeatureItem[];
  };
  // Combining "Hardware" component data (showcase & solutions)
  hardwareShowcase: {
    items: {
      id: number;
      title: string;
      description: string;
      image: string;
    }[];
    solutions: {  // Keeping solution buttons adjacent to hardware showcase if that's the design
      id: number;
      title: string;
      row: number;
    }[];
    title?: string;
    subtitle?: string;
  };
  blackSection: BlackSectionData;
  testimonials: TestimonialsData;
  faqSection: {
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
    subtitle: "Tailored for Every Table, Terminal, and Territory"
  },
  productSections: [
    {
      id: "1",
      title: "SlateX Station",
      subtitle: "SlateX Station",
      description: "Dual Side display terminal streamlines high-volume ordering and promotes upsells right at the counter. Built for restaurants, cafes, and quick-serve chains, it offers rock-solid performance when every second counts.",
      buttonText: "Let's Connect",
      image: "/hardware/hardware-station.png",
      imageAlt: "SlateX Station POS Terminal",
      imageLabel: "SlateX Station",
      alignment: "right",
      bgColor: 'bg-gray-500',
      bgGradient: 'from-gray-400 to-gray-600',
      bulletPoints: []
    },
    {
      id: "2",
      title: "SlateX Tab",
      subtitle: "SlateX Tab",
      description: "Lightweight 11\" Android tablet delivers full POS capabilities wherever your guests choose to dine. Ideal for tableside ordering, outdoor seating, or food trucks - bringing the checkout directly to your customers as flexibly as the table.",
      buttonText: "Let's Connect",
      image: "/hardware/hardware-tab.png",
      imageAlt: "SlateX Tab Tablet POS",
      imageLabel: "SlateX Tab",
      alignment: "right",
      bgColor: 'bg-gray-500',
      bgGradient: 'from-gray-400 to-gray-600',
      bulletPoints: []
    },
    {
      id: "3",
      title: "SlateX Go",
      subtitle: "SlateX Go",
      description: "Compact 6.5\" Android device that empowers staff to take orders and process payments from anywhere on premises, outdoors, or on delivery. It delivers secure, full-featured POS capabilities wherever business happens in a rugged, all-day battery design.",
      buttonText: "Let's Connect",
      image: "/hardware/hardware-go.png",
      imageAlt: "SlateX Go Mobile Device",
      imageLabel: "SlateX Go",
      alignment: "left",
      bgColor: 'bg-gray-500',
      bgGradient: 'from-gray-400 to-gray-600',
      bulletPoints: []
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
  hardwareShowcase: {
    title: "Hardware",
    subtitle: "Powerful Tools. Seamless Experience.",
    items: [
      {
        id: 1,
        title: "SlateX Station",
        description:
          "Dual Side display terminal streamlines high‑volume ordering and promotes upsells right at the counter. Built for restaurants, cafés, and quick‑serve chains, it offers rock‑solid performance when every second counts.",
        image: "/slatex-terminal.png",
      },
      {
        id: 2,
        title: "SlateX Tab",
        description:
          "Lightweight 11″ Android tablet delivers full POS capabilities wherever your guests choose to sit. Ideal for food trucks, pop‑ups, and casual dining, it lets servers take orders and accept payments instantly at the table.",
        image: "/slatex-tablet.png",
      },
      {
        id: 3,
        title: "SlateX Go",
        description:
          "A fully powered handheld terminal that lets you take orders and process payments from anywhere—tableside, curbside, or on delivery. It delivers secure, encrypted transactions, tip prompts, and digital receipts in a rugged, all‑day battery design",
        image: "/slatex-go.png",
      },
    ],
    solutions: [
      { id: 1, title: "Products", row: 1 },
      { id: 2, title: "Casual Dining", row: 1 },
      { id: 3, title: "Cafe n Bakery", row: 1 },
      { id: 4, title: "Hotel", row: 2 },
      { id: 5, title: "Pizzeria", row: 2 },
      { id: 6, title: "Bar n Lounge", row: 2 },
    ]
  },
  blackSection: {
    title: "Compact Restaurant POS Hardware", // Simplified for initial data
    description: "The SlateX POS Compact is an all-in-one POS system with a terminal and customer display, designed for efficiency in space-limited environments. Perfect for restaurants, it enables faster order processing and smooth customer interactions, helping to keep lines moving.",
    buttonText: "Signup Now",
    imageSrc: "/pos-lady.png",
    imageAlt: "Woman working with laptop",
    trustIndicators: []
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "Proof in every plate, Hear from our customers",
    items: [] // Can populate if needed, or leave empty if the component handles defaults/empty state gracefully
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