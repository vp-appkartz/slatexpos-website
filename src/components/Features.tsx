import React from 'react';
import { MessageSquare, Users, Zap, Shield, Globe, Smartphone } from 'lucide-react';
import { useSiteSettings } from '../hooks/useWordPress';

const Features: React.FC = () => {
  const { settings, loading } = useSiteSettings();

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      MessageSquare,
      Users,
      Zap,
      Shield,
      Globe,
      Smartphone
    };
    return icons[iconName] || MessageSquare;
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-12 bg-gray-300 rounded w-96 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-8 animate-pulse">
                <div className="w-12 h-12 bg-gray-300 rounded-lg mb-6"></div>
                <div className="h-6 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const features = settings?.features || [];
  const stats = settings?.stats;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600">
              Optimize Your Restaurant
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how SlatexPOS empowers your restaurant with essential tools for efficient management, enhanced customer experience, and increased profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <div
                key={feature.id}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-600  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        {/* {stats && (
          <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-gray-600">{stats.users}</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-gray-600">{stats.teams}</div>
                <div className="text-gray-600">Teams</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-green-600">{stats.uptime}</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-orange-600">{stats.countries}</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Features;