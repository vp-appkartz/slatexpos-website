import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const aosAnimations = [
  "zoom-in-up",
  "fade-up",
  "flip-left",
  "flip-right"
];

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adam Smith",
      position: "CEO, Published",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,",
      logo: "PUBLISHED",
      logoSubtext: "ON MAIN"
    },
    {
      id: 2,
      name: "Adam Smith",
      position: "CEO, Published",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,",
      logo: "PUBLISHED",
      logoSubtext: "ON MAIN"
    },
    {
      id: 3,
      name: "Adam Smith",
      position: "CEO, Published",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,",
      logo: "PUBLISHED",
      logoSubtext: "ON MAIN"
    },
    {
      id: 4,
      name: "Adam Smith",
      position: "CEO, Published",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,",
      logo: "PUBLISHED",
      logoSubtext: "ON MAIN"
    }
  ];

  // By default, first card expanded. On hover, expand hovered card.
  const [expandedIndex, setExpandedIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true, // Animation will trigger only once on scroll into view
      offset: 60,
      easing: "ease-in-out",
    });
    // Refresh on update for dynamic content
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }, []);

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="100">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Testimonial
          </h2>
          <p className="text-lg text-gray-600">
            Proof in Every Plate, Hear from Our Customers
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="hidden md:flex gap-4 h-96 overflow-hidden">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndex === index;
            const aosType = aosAnimations[index % aosAnimations.length];
            const aosDelay = 200 + index * 120;
            return (
              <div
                key={testimonial.id}
                className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ease-out flex-shrink-0
                  ${isExpanded ? 'w-[500px] z-20' : 'w-64 z-10'}
                `}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(0)}
                style={{ minWidth: isExpanded ? 320 : 256, maxWidth: isExpanded ? 500 : 256 }}
                // Only apply AOS on initial render, not on hover/expand
                data-aos={aosType}
                data-aos-delay={aosDelay}
              >
                {/* Background Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 0.5s', transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }}
                />

                {/* Dark Overlay */}
                <div className={`absolute inset-0 transition-colors duration-500 ${isExpanded ? 'bg-black bg-opacity-80' : 'bg-black bg-opacity-60'}`}></div>

                {/* Content - Always visible, fade out on expand */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-500
                  ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
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
                <div className={`absolute inset-0 flex flex-col justify-center p-8 transition-opacity duration-700
                  ${isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}>
                  <p className="text-white text-base leading-relaxed mb-8">
                    {testimonial.text}
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

        {/* Mobile Version - Stack cards vertically on small screens */}
        <div className="md:hidden mt-8 space-y-4">
          {testimonials.map((testimonial, index) => {
            const aosType = aosAnimations[index % aosAnimations.length];
            const aosDelay = 200 + index * 120;
            return (
              <div
                key={`mobile-${testimonial.id}`}
                className="relative rounded-lg overflow-hidden h-64"
                data-aos={aosType}
                data-aos-delay={aosDelay}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                  <p className="text-sm leading-relaxed mb-4">
                    {testimonial.text}
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