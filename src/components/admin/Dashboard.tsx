import { useState, useEffect } from 'react';
import { FileText, Eye, Users, TrendingUp, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllBlogs } from '../../services/blogService';
import { BlogPost } from '../../types/blog';

const Dashboard = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

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

  const stats = [
    {
      name: 'Total Posts',
      value: blogs.length,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      name: 'Published',
      value: blogs.filter(blog => blog.published).length,
      icon: Eye,
      color: 'bg-green-500',
    },
    {
      name: 'Drafts',
      value: blogs.filter(blog => !blog.published).length,
      icon: Users,
      color: 'bg-yellow-500',
    },
    {
      name: 'This Month',
      value: blogs.filter(blog => {
        const blogDate = new Date(blog.createdAt);
        const currentDate = new Date();
        return blogDate.getMonth() === currentDate.getMonth() && 
               blogDate.getFullYear() === currentDate.getFullYear();
      }).length,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
  ];

  const recentBlogs = blogs.slice(0, 5);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your blog content and analytics</p>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 font-medium">{stat.name}</p>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} rounded-lg p-2 lg:p-3 flex-shrink-0 ml-3`}>
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Recent Posts</h2>
            <button
              onClick={() => navigate('/admin/blogs')}
              className="text-primary-300 hover:text-primary-400 font-medium text-sm self-start sm:self-auto"
            >
              View all
            </button>
          </div>
        </div>
        
        <div className="p-4 lg:p-6">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-300"></div>
            </div>
          ) : (
            recentBlogs.length > 0 ? (
            <div className="space-y-3 lg:space-y-4">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="flex items-center justify-between p-3 lg:p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center space-x-3 lg:space-x-4 flex-1 min-w-0">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg object-cover flex-shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/blog.png';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 line-clamp-1 text-sm lg:text-base">{blog.title}</h3>
                      <p className="text-xs lg:text-sm text-gray-600 mt-1">{blog.category} • {new Date(blog.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className={`
                      px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap
                      ${blog.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                      }
                    `}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                    <button
                      onClick={() => navigate(`/admin/blogs/${blog.id}/edit`)}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No blog posts yet</p>
                <button
                  onClick={() => navigate('/admin/blogs/new')}
                  className="mt-2 text-primary-300 hover:text-primary-400 font-medium"
                >
                  Create your first post
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
