export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  acf?: Record<string, any>;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  title: {
    rendered: string;
  };
}

export interface WordPressOption {
  site_title: string;
  site_description: string;
  site_logo?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta_primary: string;
  cta_secondary: string;
  badge_text: string;
  features: string[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface CTAContent {
  title: string;
  description: string;
  cta_primary: string;
  cta_secondary: string;
  features: string[];
}

export interface SiteSettings {
  hero: HeroContent;
  features: Feature[];
  cta: CTAContent;
  stats: {
    users: string;
    teams: string;
    uptime: string;
    countries: string;
  };
}