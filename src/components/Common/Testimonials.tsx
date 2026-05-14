import React, { useEffect, useState } from 'react';
import { subscribeToHeroPageData } from '../../services/firestoreService';

export interface TestimonialItem {
  id: string | number;
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
  title = "Real Restaurants. Real Results.",
  subtitle = "Trusted by restaurants in Edmonton, Vancouver, and Brandon — and growing fast.",
  items
}) => {
  const defaultTestimonials = [
    {
      id: 1,
      name: "Restaurant Owner",
      position: "Edmonton, AB",
      image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "SlateX gave us the flexibility we couldn’t find anywhere else. We already had Android tablets — now they’re our full POS system. The setup was fast and the team actually answered the phone when we needed help.",
      logo: "Edmonton Restaurant",
      logoSubtext: "Alberta"
    },
    {
      id: 2,
      name: "Café Owner",
      position: "Vancouver, BC",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "The offline mode alone was worth the switch. We’ve never lost an order since. Internet goes down, SlateX keeps going — everything syncs the moment we’re back online.",
      logo: "Vancouver Café",
      logoSubtext: "British Columbia"
    },
    {
      id: 3,
      name: "Gurbir Singh",
      position: "Royal Sweets & Restaurant",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "Managing dine-in, takeout, and sweets counters together used to be stressful. With SlateX POS, we’ve streamlined everything under one roof. The weighing scale integration is something no other POS at this price offers.",
      logo: "Royal Sweets & Restaurant",
      logoSubtext: ""
    },
    {
      id: 4,
      name: "Riaz Khan",
      position: "Chutney Restaurant",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      text: "One monthly fee, no hardware invoice, and every feature included. We switched from Toast and saved thousands in the first year. SlateX is the real deal for Canadian restaurants.",
      logo: "Chutney Restaurant",
      logoSubtext: ""
    }
  ];

  const [dataTitle, setDataTitle] = useState(title);
  const [dataSubtitle, setDataSubtitle] = useState(subtitle);
  const [dataItems, setDataItems] = useState(items || defaultTestimonials);

  useEffect(() => {
    const unsubscribe = subscribeToHeroPageData((heroData) => {
      if (heroData && heroData.testimonials) {
        setDataTitle(heroData.testimonials.title || title);
        setDataSubtitle(heroData.testimonials.subtitle || subtitle);
        if (heroData.testimonials.items && heroData.testimonials.items.length > 0) {
          setDataItems(heroData.testimonials.items);
        } else {
          setDataItems(items || defaultTestimonials);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const testimonials = dataItems;

  // By default, first card expanded. On hover, expand hovered card.
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-4">
            {dataTitle}
          </h2>
          <p className="text-gray-600 font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
            {dataSubtitle}
          </p>
        </div>

        {/* Testimonial Cards for Desktop */}
        <div className="hidden xl:flex gap-4 h-96 overflow-hidden">
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
                  <p className="text-white text-base lg:text-lg leading-relaxed mb-8">
                    {testimonial.text}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-1">
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
        <div className="xl:hidden mt-8 space-y-4">
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
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                    {testimonial.text}
                  </p>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4">
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