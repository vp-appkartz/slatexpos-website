// Blog post content data structure
export interface BlogSection {
  heading: string;
  content: string[];
}

export interface BlogContent {
  title: string;
  date: string;
  category: string;
  heroImage: string;
  sections: BlogSection[];
}

// Main blog post content
export const blogContent: BlogContent = {
  title: "Boosting Profit Margins: The Strategic Role of POS Systems in Quick Service Restaurants",
  date: "July 4, 2025",
  category: "QSR",
  heroImage: "/blog-hero.png", // Tablet with pizza delivery app
  sections: [
    {
      heading: "Simple guidance to demystify your finances",
      content: [
        "Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge.",
        "Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge."
      ]
    },
    {
      heading: "Simple guidance to demystify your finances",
      content: [
        "Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge.",
        "Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge. Explore our insightful articles packed with industry trends, expert advice, and practical solutions to elevate your knowledge."
      ]
    }
  ]
};

// Table of contents for the blog post
export const tableOfContents = [
  "What's inside?",
  "Why do convenience stores need a profit and loss statement?",
  "Key Trends",
  "Ethical & Governance Considerations",
  "Final Thoughts"
];

// Additional blog posts for future use
export const additionalBlogPosts: BlogContent[] = [
  {
    title: "The Future of Restaurant Technology: AI-Powered POS Systems",
    date: "July 3, 2025",
    category: "Technology",
    heroImage: "/blog-ai-pos.png",
    sections: [
      {
        heading: "Understanding AI in Restaurant Operations",
        content: [
          "Artificial Intelligence is revolutionizing how restaurants operate, from automated ordering systems to predictive analytics for inventory management. This technology is not just a trend but a fundamental shift in how we approach restaurant management.",
          "The integration of AI into POS systems allows for real-time decision making, personalized customer experiences, and operational efficiency that was previously impossible to achieve."
        ]
      }
    ]
  },
  {
    title: "Maximizing Customer Satisfaction Through Digital Ordering",
    date: "July 2, 2025",
    category: "Customer Experience",
    heroImage: "/blog-digital-ordering.png",
    sections: [
      {
        heading: "The Digital Transformation of Food Service",
        content: [
          "Digital ordering platforms have become essential for restaurants looking to meet modern customer expectations. From mobile apps to online ordering systems, the digital landscape is constantly evolving.",
          "Understanding how to leverage these technologies effectively can make the difference between a thriving restaurant and one that struggles to keep up with changing consumer preferences."
        ]
      }
    ]
  }
];

// Blog categories for filtering
export const blogCategories = [
  "QSR",
  "Pizzeria", 
  "Cafe n Bakery",
  "Web Ordering",
  "Casual Dining",
  "Online Ordering",
  "Technology",
  "Customer Experience"
]; 