import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import SEO from "../Common/SEO";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4 py-16">
      <SEO
        title="Page Not Found | SlateX POS"
        description="The page you are looking for does not exist."
      />
      <div className="max-w-3xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8 mt-20" >
          <h1 className="text-[150px] sm:text-[200px] md:text-[250px] font-bold text-primary-300 leading-none opacity-20">
            404
          </h1>
          <div className="-mt-16 sm:-mt-24 md:-mt-32">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off the menu. Let's get you back on track!
            </p>
          </div>
        </div>

        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary-300 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/')}
            className="group relative bg-primary-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-orange-600 shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="group relative bg-white text-primary-300 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-300 transition-all duration-300 hover:bg-primary-300 hover:text-white shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Suggestions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Maybe you were looking for:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate('/products/restaurant-pos-system')}
              className="px-4 py-2 bg-gray-100 hover:bg-primary-300 hover:text-white text-gray-700 rounded-full transition-all duration-200 text-sm font-medium"
            >
              Products
            </button>
            <button
              onClick={() => navigate('/hardware')}
              className="px-4 py-2 bg-gray-100 hover:bg-primary-300 hover:text-white text-gray-700 rounded-full transition-all duration-200 text-sm font-medium"
            >
              Hardware
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="px-4 py-2 bg-gray-100 hover:bg-primary-300 hover:text-white text-gray-700 rounded-full transition-all duration-200 text-sm font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => navigate('/industries')}
              className="px-4 py-2 bg-gray-100 hover:bg-primary-300 hover:text-white text-gray-700 rounded-full transition-all duration-200 text-sm font-medium"
            >
              Industries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

