import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  Filter
} from 'lucide-react';
import { getAllBlogs, deleteBlog } from '../../services/blogService';
import { BlogPost } from '../../types/blog';

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; blog: BlogPost | null }>({
    isOpen: false,
    blog: null,
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, searchTerm, statusFilter]);

  const fetchBlogs = async () => {
    try {
      const blogData = await getAllBlogs();
      setBlogs(blogData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterBlogs = () => {
    let filtered = blogs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog =>
        statusFilter === 'published' ? blog.published : !blog.published
      );
    }

    setFilteredBlogs(filtered);
  };

  const handleDelete = async (blog: BlogPost) => {
    setDeleteModal({ isOpen: true, blog });
  };

  const confirmDelete = async () => {
    if (!deleteModal.blog) return;

    try {
      await deleteBlog(deleteModal.blog.id);
      setBlogs(blogs.filter(blog => blog.id !== deleteModal.blog!.id));
      setDeleteModal({ isOpen: false, blog: null });
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const getStatusBadge = (published: boolean) => (
    <span className={`
      inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full
      ${published 
        ? 'bg-green-100 text-green-800' 
        : 'bg-yellow-100 text-yellow-800'
      }
    `}>
      {published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
      {published ? 'Published' : 'Draft'}
    </span>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-300"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-1">Manage all your blog content</p>
          </div>
          <button
            onClick={() => navigate('/admin/blogs/new')}
            className="inline-flex items-center justify-center gap-2 bg-primary-300 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 lg:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 text-sm lg:text-base"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | 'published' | 'draft')}
              className="pl-10 pr-8 py-2.5 lg:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 appearance-none bg-white text-sm lg:text-base min-w-[140px]"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {filteredBlogs.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex items-start space-x-3 lg:space-x-4 flex-1">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg object-cover flex-shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/blog.png';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 line-clamp-1 mb-1">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-500">
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md font-medium whitespace-nowrap">
                          {blog.category}
                        </span>
                        <span className="whitespace-nowrap">{new Date(blog.createdAt).toLocaleDateString()}</span>
                        <span className="whitespace-nowrap">by {blog.author}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-3 lg:flex-col lg:items-end lg:space-y-2">
                    {getStatusBadge(blog.published)}
                    
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => navigate(`/admin/blogs/${blog.id}/edit`)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleDelete(blog)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria' 
                : 'Get started by creating your first blog post'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && (
              <button
                onClick={() => navigate('/admin/blogs/new')}
                className="inline-flex items-center gap-2 bg-primary-300 hover:bg-primary-400 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Plus className="w-4 h-4" />
                Create First Post
              </button>
            )}
          </div>
        )}
      </div>

      {/* Delete Modal */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Blog Post</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{deleteModal.blog?.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteModal({ isOpen: false, blog: null })}
                className="px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogList;
