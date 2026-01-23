import React, { useState } from 'react';

export interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  image: string;
  text: string;
  logo: string;
  logoSubtext: string;
}

export interface TestimonialsData {
  title?: string;
  subtitle?: string;
  items?: TestimonialItem[];
}

interface TestimonialProps extends TestimonialsData { }

const Testimonial: React.FC<TestimonialProps> = ({
  title = "Testimonials",
  subtitle = "Proof in every plate, Hear from our customers",
  items
}) => {
  const defaultTestimonials = [
    {
      id: 1,
      name: "Tushar Mistry",
      position: "Bombay Street Tadka",
      image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "SlateX POS has completely transformed how we manage our restaurant operations. From real-time KOT printing to handling modifiers and multi-device sync, everything just works flawlessly. It’s fast, reliable, and tailor-made for busy Indian kitchens like ours.",
      logo: "Bombay Street Tadka",
      logoSubtext: ""
    },
    {
      id: 2,
      name: "Ankit Patel",
      position: "Flavors Of Gujarat",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "We were looking for a system that understands the complexity of Gujarati menus and fast-paced service – and SlateX POS delivered! It’s easy to train staff on, and the reporting tools give us full control of our day-to-day operations.",
      logo: "Flavors Of Gujarat",
      logoSubtext: ""
    },
    {
      id: 3,
      name: "Gurbir Singh",
      position: "Royal Sweets & Restaurant",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "Managing dine-in, takeout, and sweets counters together used to be stressful. With SlateX POS, we’ve streamlined everything under one roof. The intuitive interface, kitchen display integration, and smooth payment processing make a huge difference.",
      logo: "Royal Sweets & Restaurant",
      logoSubtext: ""
    },
    {
      id: 4,
      name: "Riaz Khan",
      position: "Chutney Restaurant",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "What I love most about SlateX POS is the customization. From invoice design to tax settings, everything is flexible to match how we work. Support is responsive, and the system never lags – even during our busiest hours!",
      logo: "Chutney Restaurant",
      logoSubtext: ""
    }
  ];

  const testimonials = items || defaultTestimonials;

  // By default, first card expanded. On hover, expand hovered card.
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000`}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-2xl font-medium text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Testimonial Cards for Desktop */}
        <div className="hidden md:flex gap-4 h-96 overflow-hidden">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={testimonial.id}
                className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-700 ease-out flex-shrink-0
                  ${isExpanded ? 'w-[500px]' : 'w-64'}
                `}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(0)}
                style={{ minWidth: isExpanded ? 320 : 256, maxWidth: isExpanded ? 500 : 256 }}
              >
                {/* Background Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Content - Always visible on small image */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-opacity duration-500 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
                <div className={`absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-700 flex flex-col justify-center p-8
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
            return (
              <div
                key={`mobile-${testimonial.id}`}
                className="relative rounded-lg overflow-hidden h-64"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Responsive padding for mobile: px-3 for very small, px-4 for normal, px-6 for md */}
                <div className="absolute inset-0 flex flex-col justify-end text-white
                  px-3 py-4
                  sm:px-4 sm:py-6
                  md:px-6 md:py-6
                ">
                  <p className="text-sm leading-relaxed mb-3 sm:mb-4">
                    {testimonial.text}
                  </p>

                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                    {testimonial.position}
                  </p>

                  <div className="border-t border-gray-500 pt-3 sm:pt-4">
                    <div className="text-xs sm:text-sm font-bold tracking-wider">
                      {testimonial.logo}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 tracking-wide">
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