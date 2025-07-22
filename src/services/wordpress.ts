import axios from 'axios';
import { WordPressPost, WordPressPage, WordPressMedia, SiteSettings } from '../types/wordpress';

// Replace with your WordPress site URL
const WORDPRESS_API_URL = 'https://your-wordpress-site.com/wp-json/wp/v2';

const api = axios.create({
  baseURL: WORDPRESS_API_URL,
  timeout: 10000,
});

export const wordpressService = {
  // Get all posts
  async getPosts(params?: { per_page?: number; page?: number }): Promise<WordPressPost[]> {
    try {
      const response = await api.get('/posts', {
        params: {
          _embed: true,
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  // Get single post by slug
  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const response = await api.get('/posts', {
        params: {
          slug,
          _embed: true,
        },
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  },

  // Get pages
  async getPages(): Promise<WordPressPage[]> {
    try {
      const response = await api.get('/pages');
      return response.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  },

  // Get page by slug
  async getPageBySlug(slug: string): Promise<WordPressPage | null> {
    try {
      const response = await api.get('/pages', {
        params: { slug },
      });
      return response.data[0] || null;
    } catch (error) {
      console.error('Error fetching page:', error);
      return null;
    }
  },

  // Get media
  async getMedia(id: number): Promise<WordPressMedia | null> {
    try {
      const response = await api.get(`/media/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching media:', error);
      return null;
    }
  },

  // Get site settings (requires custom endpoint or ACF)
  async getSiteSettings(): Promise<SiteSettings | null> {
    try {
      // This assumes you have a custom endpoint or ACF fields
      // You can create a custom REST endpoint in WordPress for this
      const response = await api.get('/site-settings');
      return response.data;
    } catch (error) {
      console.error('Error fetching site settings:', error);
      // Return default fallback content
      return {
        hero: {
          title: "Streamline Your Restaurant",
          subtitle: "Manage with Ease",
          description: "Optimize your restaurant operations with our comprehensive POS system, designed to enhance efficiency and customer satisfaction.",
          cta_primary: "Start Free Trial",
          cta_secondary: "Request Demo",
          badge_text: "Trusted by 1000+ Restaurants Globally",
          features: ["Quick Setup", "24/7 Support"]
        },
        features: [
          {
            id: 1,
            title: "Order Management",
            description: "Efficiently take and process orders, manage tables, and customize menus with ease.",
            icon: "Receipt",
            color: "from-red-500 to-red-600"
          },
          {
            id: 2,
            title: "Staff Management",
            description: "Track employee shifts, manage roles, and optimize labor costs with integrated tools.",
            icon: "Users",
            color: "from-orange-500 to-orange-600"
          },
          {
            id: 3,
            title: "Sales Analytics",
            description: "Gain insights into sales trends, popular items, and peak hours with detailed reports.",
            icon: "BarChart3",
            color: "from-green-500 to-green-600"
          },
          {
            id: 4,
            title: "Inventory Control",
            description: "Monitor stock levels, track ingredients, and reduce waste with automated inventory.",
            icon: "Package",
            color: "from-blue-500 to-blue-600"
          },
          {
            id: 5,
            title: "Customer Loyalty",
            description: "Build customer relationships with loyalty programs, gift cards, and personalized offers.",
            icon: "Heart",
            color: "from-purple-500 to-purple-600"
          },
          {
            id: 6,
            title: "Kitchen Display",
            description: "Streamline kitchen workflow with digital order displays and real-time status updates.",
            icon: "Monitor",
            color: "from-yellow-500 to-yellow-600"
          }
        ],
        cta: {
          title: "Ready to elevate your restaurant's success?",
          description: "Join thousands of restaurants optimizing operations with SlatexPOS. Start your free trial today and see the difference.",
          cta_primary: "Get Started Now",
          cta_secondary: "Book a Demo",
          features: ["Free 14-day trial", "No setup fees", "Dedicated support"]
        },
        stats: {
          users: "5000+",
          teams: "10000+",
          uptime: "99.99%",
          countries: "50+"
        }
      };
    }
  },

  // Get navigation menu
  async getMenuItems(): Promise<any[]> {
    try {
      const response = await api.get('/menus/main-menu');
      return response.data;
    } catch (error) {
      console.error('Error fetching menu:', error);
      return [
        { title: 'Teams', url: '#teams' },
        { title: 'Messages', url: '#messages' },
        { title: 'Settings', url: '#settings' }
      ];
    }
  },

  // Get footer content
  async getFooterContent(): Promise<any> {
    try {
      const response = await api.get('/footer-content');
      return response.data;
    } catch (error) {
      console.error('Error fetching footer content:', error);
      return {
        description: "The modern collaboration platform that brings teams together to get work done.",
        social_links: [
          { platform: 'twitter', url: '#' },
          { platform: 'linkedin', url: '#' },
          { platform: 'github', url: '#' },
          { platform: 'email', url: '#' }
        ],
        links: {
          product: ['Features', 'Pricing', 'Security', 'Enterprise', 'Integrations'],
          company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
          support: ['Help Center', 'Documentation', 'API Reference', 'Status', 'Community']
        }
      };
    }
  }
};