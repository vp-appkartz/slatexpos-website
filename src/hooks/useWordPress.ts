import { useState, useEffect } from 'react';
import { wordpressService } from '../services/wordpress';
import { WordPressPost, WordPressPage, SiteSettings } from '../types/wordpress';

export const useWordPressPosts = (params?: { per_page?: number; page?: number }) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getPosts(params);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [params?.per_page, params?.page]);

  return { posts, loading, error };
};

export const useWordPressPage = (slug: string) => {
  const [page, setPage] = useState<WordPressPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getPageBySlug(slug);
        setPage(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch page');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPage();
    }
  }, [slug]);

  return { page, loading, error };
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getSiteSettings();
        setSettings(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch site settings');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
};

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getMenuItems();
        setMenuItems(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch menu');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return { menuItems, loading, error };
};

export const useFooterContent = () => {
  const [footerContent, setFooterContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getFooterContent();
        setFooterContent(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch footer content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, []);

  return { footerContent, loading, error };
};