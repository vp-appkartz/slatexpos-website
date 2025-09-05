export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  slug: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface CreateBlogPost {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
  tags: string[];
}


