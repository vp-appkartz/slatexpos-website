import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  Timestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import { BlogPost, CreateBlogPost } from '../types/blog';

const COLLECTION_NAME = 'blogs';

// Create a slug from title
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Get all blog posts
export const getAllBlogs = async (): Promise<BlogPost[]> => {
  try {
    const blogQuery = query(
      collection(db, COLLECTION_NAME),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(blogQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Get published blog posts only
export const getPublishedBlogs = async (): Promise<BlogPost[]> => {
  try {
    const blogQuery = query(
      collection(db, COLLECTION_NAME),
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(blogQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching published blogs:', error);
    throw error;
  }
};

// Get blog by ID
export const getBlogById = async (id: string): Promise<BlogPost | null> => {
  try {
    const blogDoc = await getDoc(doc(db, COLLECTION_NAME, id));
    
    if (blogDoc.exists()) {
      return {
        id: blogDoc.id,
        ...blogDoc.data(),
        createdAt: blogDoc.data().createdAt?.toDate() || new Date(),
        updatedAt: blogDoc.data().updatedAt?.toDate() || new Date(),
      } as BlogPost;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

// Get blog by slug
export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const blogQuery = query(
      collection(db, COLLECTION_NAME),
      where('slug', '==', slug),
      limit(1)
    );
    const querySnapshot = await getDocs(blogQuery);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      } as BlogPost;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};

// Create new blog post
export const createBlog = async (blogData: CreateBlogPost): Promise<string> => {
  try {
    const slug = createSlug(blogData.title);
    const now = Timestamp.now();
    
    const newBlog = {
      ...blogData,
      slug,
      createdAt: now,
      updatedAt: now,
    };
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), newBlog);
    return docRef.id;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update blog post
export const updateBlog = async (id: string, blogData: Partial<CreateBlogPost>): Promise<void> => {
  try {
    const updateData = {
      ...blogData,
      updatedAt: Timestamp.now(),
    };
    
    // Update slug if title changed
    if (blogData.title) {
      updateData.slug = createSlug(blogData.title);
    }
    
    await updateDoc(doc(db, COLLECTION_NAME, id), updateData);
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete blog post
export const deleteBlog = async (id: string): Promise<void> => {
  try {
    // Get the blog to find the image URL
    const blog = await getBlogById(id);
    
    // Delete the image from storage if it exists
    if (blog?.imageUrl && blog.imageUrl.includes('firebase')) {
      try {
        const imageRef = ref(storage, blog.imageUrl);
        await deleteObject(imageRef);
      } catch (imageError) {
        console.warn('Error deleting image:', imageError);
      }
    }
    
    // Delete the blog document
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

// Upload image to Firebase Storage
export const uploadBlogImage = async (file: File): Promise<string> => {
  try {
    const timestamp = Date.now();
    const fileName = `blog-images/${timestamp}-${file.name}`;
    const imageRef = ref(storage, fileName);
    
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Get blogs by category
export const getBlogsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const blogQuery = query(
      collection(db, COLLECTION_NAME),
      where('category', '==', category),
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(blogQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    throw error;
  }
};


