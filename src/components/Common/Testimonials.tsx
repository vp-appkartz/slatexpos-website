import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, TechFlow Solutions",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "SlateXpos transformed our trade show presence completely. The booth design was stunning and attracted more visitors than we ever expected. Their attention to detail and professional execution exceeded our expectations.",
      logo: "TECHFLOW",
      logoSubtext: "SOLUTIONS"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, Global Innovations",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "Working with SlateXpos was a game-changer for our business. Their creative approach and seamless execution helped us stand out at the expo. We saw a 300% increase in qualified leads compared to previous events.",
      logo: "GLOBAL",
      logoSubtext: "INNOVATIONS"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Manager, Creative Studios",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "The team at SlateXpos understood our vision perfectly. From concept to execution, every element was crafted with precision. Our brand has never looked better at trade shows.",
      logo: "CREATIVE",
      logoSubtext: "STUDIOS"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Sales Director, NextGen Corp",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "SlateXpos delivered beyond our expectations. Their innovative booth design created an immersive experience that perfectly showcased our products. The ROI was exceptional.",
      logo: "NEXTGEN",
      logoSubtext: "CORP"
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.testimonial-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonial-section bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Testimonials
          </h2>
          <p className="text-2xl font-medium text-gray-600">
            Proof in every plate, Hear from our customers
          </p>
        </div>

        {/* Desktop Testimonial Cards */}
        <div className="hidden md:flex gap-4 h-96">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndex === index;
            const delay = index * 200;
            
            return (
              <div
                key={testimonial.id}
                className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ease-out flex-shrink-0
                  ${isExpanded ? 'w-[500px]' : 'w-64'}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ 
                  transitionDelay: isVisible ? `${delay}ms` : '0ms',
                  minWidth: isExpanded ? '320px' : '256px',
                  maxWidth: isExpanded ? '500px' : '256px'
                }}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(0)}
              >
                {/* Background Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Collapsed Content - Always visible when not expanded */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-300
                  ${isExpanded ? 'opacity-0' : 'opacity-100'}
                `}>
                  <h3 className="text-lg font-semibold mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {testimonial.position}
                  </p>
                  <div className="border-t border-gray-500 pt-4">
                    <div className="text-sm font-bold tracking-wider">
                      {testimonial.logo}
                    </div>
                    <div className="text-xs text-gray-400 tracking-wide">
                      {testimonial.logoSubtext}
                    </div>
                  </div>
                </div>

                {/* Expanded Content - Only visible when expanded */}
                <div className={`absolute inset-0 flex flex-col justify-center p-8 transition-opacity duration-300
                  ${isExpanded ? 'opacity-100' : 'opacity-0'}
                `}>
                  <p className="text-white text-base leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                  <div className="border-t border-gray-600 pt-6">
                    <div className="text-white">
                      <div className="text-lg font-bold tracking-wider">
                        {testimonial.logo}
                      </div>
                      <div className="text-xs text-gray-400 tracking-wide">
                        {testimonial.logoSubtext}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Version */}
        <div className="md:hidden mt-8 space-y-4">
          {testimonials.map((testimonial, index) => {
            const delay = index * 150;
            
            return (
              <div
                key={`mobile-${testimonial.id}`}
                className={`relative rounded-lg overflow-hidden h-64 transition-all duration-1000
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                  <p className="text-sm leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>

                  <h3 className="text-lg font-semibold mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {testimonial.position}
                  </p>

                  <div className="border-t border-gray-500 pt-4">
                    <div className="text-sm font-bold tracking-wider">
                      {testimonial.logo}
                    </div>
                    <div className="text-xs text-gray-400 tracking-wide">
                      {testimonial.logoSubtext}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;