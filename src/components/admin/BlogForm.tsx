import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Save,
  Eye,
  Upload,
  X,
  ArrowLeft,
  Image as ImageIcon
} from 'lucide-react';
import {
  createBlog,
  updateBlog,
  getBlogById,
  uploadBlogImage
} from '../../services/blogService';
import { CreateBlogPost } from '../../types/blog';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState<CreateBlogPost>({
    title: '',
    excerpt: '',
    content: '',
    category: 'QSR',
    author: 'Admin',
    imageUrl: '',
    featured: false,
    published: false,
    tags: [],
  });

  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [tagInput, setTagInput] = useState('');

  const categories = [
    'QSR',
    'Pizzeria',
    'Cafe n Bakery',
    'Web Ordering',
    'Casual Dining',
    'Online Ordering',
    'Technology',
    'Customer Experience'
  ];

  useEffect(() => {
    if (isEdit && id) {
      fetchBlog();
    }
  }, [id, isEdit]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const blog = await getBlogById(id!);
      if (blog) {
        setFormData({
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
          category: blog.category,
          author: blog.author,
          imageUrl: blog.imageUrl,
          featured: blog.featured,
          published: blog.published,
          tags: blog.tags,
        });
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setErrors(prev => ({ ...prev, image: 'Please select a valid image file' }));
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, image: 'Image size must be less than 5MB' }));
      return;
    }

    try {
      setImageUploading(true);
      const imageUrl = await uploadBlogImage(file);
      setFormData(prev => ({ ...prev, imageUrl }));
      setErrors(prev => ({ ...prev, image: '' }));
    } catch (error) {
      console.error('Error uploading image:', error);
      setErrors(prev => ({ ...prev, image: 'Failed to upload image' }));
    } finally {
      setImageUploading(false);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove),
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }
    // if (!formData.imageUrl) {
    //   newErrors.image = 'Image is required';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (publish: boolean = false) => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const blogData = { ...formData, published: publish };

      if (isEdit) {
        await updateBlog(id!, blogData);
      } else {
        await createBlog(blogData);
      }

      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error saving blog:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEdit) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-300"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:gap-4">
            <button
              onClick={() => navigate('/admin/blogs')}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              title="Back to blog list"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
              <p className="text-gray-600 text-sm lg:text-base">
                {isEdit ? 'Update your blog post' : 'Write and publish a new blog post'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => handleSubmit(false)}
              disabled={loading}
              className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50 font-medium text-sm lg:text-base"
            >
              <Save className="w-4 h-4" />
              Save Draft
            </button>
            <button
              onClick={() => handleSubmit(true)}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-primary-300 hover:bg-primary-400 text-white font-semibold px-4 lg:px-6 py-2 rounded-lg transition-colors duration-200 disabled:opacity-50 text-sm lg:text-base whitespace-nowrap"
            >
              <Eye className="w-4 h-4" />
              {formData.published ? 'Update & Publish' : 'Publish'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>

            <div className="space-y-4">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 ${errors.title ? 'border-red-300' : 'border-gray-200'
                    }`}
                  placeholder="Enter blog title..."
                />
                {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 resize-none ${errors.excerpt ? 'border-red-300' : 'border-gray-200'
                    }`}
                  placeholder="Write a brief excerpt..."
                />
                {errors.excerpt && <p className="text-red-600 text-sm mt-1">{errors.excerpt}</p>}
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={20}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 resize-y min-h-[400px] ${errors.content ? 'border-red-300' : 'border-gray-200'
                    }`}
                  placeholder="Write your blog content here... You can use line breaks to separate paragraphs."
                />
                {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
                <p className="text-xs text-gray-500 mt-1">Tip: Use double line breaks to create new paragraphs</p>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Featured Image</h2>

            {formData.imageUrl ? (
              <div className="relative group">
                <img
                  src={formData.imageUrl}
                  alt="Featured"
                  className="w-full h-48 object-cover rounded-lg border border-gray-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                    title="Remove image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  Featured Image
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 hover:border-gray-400 rounded-lg p-8 text-center transition-colors duration-200">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Featured Image</h3>
                <p className="text-gray-600 mb-4">PNG, JPG, GIF up to 5MB</p>
                <label
                  htmlFor="image-upload"
                  className="inline-flex items-center gap-2 bg-primary-300 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-lg cursor-pointer transition-colors duration-200 disabled:opacity-50"
                >
                  <Upload className="w-4 h-4" />
                  {imageUploading ? 'Uploading...' : 'Choose Image'}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={imageUploading}
                  />
                </label>
                {imageUploading && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-300 h-2 rounded-full animate-pulse w-1/3"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {errors.image && <p className="text-red-600 text-sm mt-2">{errors.image}</p>}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Settings */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Settings</h2>

            <div className="space-y-3">
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Author */}
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  id="author"
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 text-sm"
                  placeholder="Author name"
                />
              </div>

              {/* Featured */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-300 border-gray-300 rounded focus:ring-primary-300"
                />
                <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                  Mark as featured post
                </label>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Tags</h2>

            <div className="space-y-3">
              <div className="flex gap-2">
                <label htmlFor="tag-input" className="sr-only">Add tag</label>
                <input
                  id="tag-input"
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 text-sm"
                  placeholder="Add tag..."
                />
                <button
                  onClick={addTag}
                  type="button"
                  className="px-4 py-2 bg-primary-300 hover:bg-primary-400 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="text-primary-500 hover:text-primary-700"
                      type="button"
                      aria-label={`Remove ${tag} tag`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
