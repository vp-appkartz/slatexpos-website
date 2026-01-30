import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HardwarePageContent, SolutionItem, subscribeToHeroPageData } from '../../services/firestoreService';

const aosCardAnimations = [
  "zoom-in-up",
  "fade-up",
  "flip-left"
];

const aosButtonAnimations = [
  "fade-right",
  "fade-up",
  "fade-left"
];

interface HardwareProps {
  title?: string;
  subtitle?: string;
  items?: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

const Hardware: React.FC<HardwareProps> = (props) => {
  const [pageData, setPageData] = React.useState<HardwarePageContent | null>(null);
  console.log("Page Data: ", pageData);
  useEffect(() => {
    // Subscribe to Firestore updates
    const unsubscribe = subscribeToHeroPageData((data) => {
      if (data && data.hardware) {
        setPageData({
          hardware: {
            title: "Hardware",
            items: data.hardware.items,
          },
          solutions: data.hardware.solutions,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false, // Animation will trigger every time on scroll into view
      offset: 60,
      easing: "ease-in-out",
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  const defaultHardwareItems = [
    {
      id: 1,
      title: "SlateX Station",
      description:
        "Dual Side display terminal streamlines high‑volume ordering and promotes upsells right at the counter. Built for restaurants, cafés, and quick‑serve chains, it offers rock‑solid performance when every second counts.",
      image: "/slatex-terminal.png",
    },
    {
      id: 2,
      title: "SlateX Tab",
      description:
        "Lightweight 11″ Android tablet delivers full POS capabilities wherever your guests choose to sit. Ideal for food trucks, pop‑ups, and casual dining, it lets servers take orders and accept payments instantly at the table.",
      image: "/slatex-tablet.png",
    },
    {
      id: 3,
      title: "SlateX Go",
      description:
        "A fully powered handheld terminal that lets you take orders and process payments from anywhere—tableside, curbside, or on delivery. It delivers secure, encrypted transactions, tip prompts, and digital receipts in a rugged, all‑day battery design",
      image: "/slatex-go.png",
    },
  ];

  const defaultSolutionButtons = [
    { id: 1, title: "Products", row: 1 },
    { id: 2, title: "Casual Dining", row: 1 },
    { id: 3, title: "Cafe n Bakery", row: 1 },
    { id: 4, title: "Hotel", row: 2 },
    { id: 5, title: "Pizzeria", row: 2 },
    { id: 6, title: "Bar n Lounge", row: 2 },
  ];

  // Hardware Section Data
  const hardwareItems = props.items || pageData?.hardware?.items || defaultHardwareItems;
  console.log("Hardware Items: ", hardwareItems);
  const hardwareTitle = props.title || pageData?.hardware?.title || "Hardware";
  // Check for description first (per user request and common firebase pattern), then subtitle
  const hardwareSubtitle = props.subtitle || pageData?.hardware?.description || pageData?.hardware?.subtitle || "Powerful Tools. Seamless Experience.";

  // Solutions Section Data
  // Handle case where solutions is just an array (from screenshot) or an object (schema)
  const solutionData = pageData?.solutions as any;
  const solutionItems: SolutionItem[] = Array.isArray(solutionData)
    ? solutionData
    : solutionData?.items || defaultSolutionButtons;

  const solutionsTitle = (Array.isArray(solutionData) ? null : solutionData?.title) || "Solutions";
  const solutionsSubtitle = (Array.isArray(solutionData) ? null : solutionData?.subtitle) || "One POS. Many Possibilities.";
  const solutionsBg = (Array.isArray(solutionData) ? null : solutionData?.backgroundImage) || "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop";

  const firstRow = solutionItems.filter((btn) => btn.row === 1);
  const secondRow = solutionItems.filter((btn) => btn.row === 2);

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hardware Section */}
        <div>
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="100">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              {hardwareTitle}
            </h2>
            <p className="text-gray-800 font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
              {hardwareSubtitle}
            </p>
          </div>

          {/* Hardware Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12 px-2 md:px-0">
            {hardwareItems.map((item, idx) => {
              const aosType = aosCardAnimations[idx % aosCardAnimations.length];
              const aosDelay = 200 + idx * 120;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm pt-16 pb-8 px-8 text-center relative overflow-visible mt-12"
                  data-aos={aosType}
                  data-aos-delay={aosDelay}
                >
                  {/* Device Image - OUTSIDE the card, floating above */}
                  <div
                    className="absolute left-1/2 -top-20 -translate-x-1/2 z-10 w-64 md:w-[280px] h-[200px] md:h-[230px]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain w-full h-full drop-shadow-xl"
                      style={{
                        background: "transparent",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-left text-gray-800 mb-4 mt-[80px] md:mt-[100px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg font-medium text-left leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="relative py-10 md:py-20 px-3 md:px-8 rounded-[2rem] md:rounded-3xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${solutionsBg})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 md:bg-opacity-60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-2 md:px-0">
            {/* Header */}
            <div className="mb-6 md:mb-12" data-aos="fade-down" data-aos-delay="100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-4">
                {solutionsTitle}
              </h2>
              <p className="text-white text-opacity-90 text-sm sm:text-base md:text-lg lg:text-xl">
                {solutionsSubtitle}
              </p>
            </div>

            {/* Solution Buttons */}
            <div className="space-y-3 md:space-y-6">
              {/* Mobile: All buttons in vertical stack */}
              <div className="md:hidden flex flex-col gap-3">
                {solutionItems.map((solution, idx) => {
                  const aosDelay = 200 + idx * 80;
                  return (
                    <button
                      key={solution.id}
                      className="group bg-white bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-25 text-white px-5 py-3.5 rounded-xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 flex items-center justify-between backdrop-blur-md w-full shadow-lg hover:shadow-xl"
                      data-aos="fade-up"
                      data-aos-delay={aosDelay}
                    >
                      <span className="text-[15px] font-medium text-left">{solution.title}</span>
                      <ChevronRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
                    </button>
                  );
                })}
              </div>

              {/* Desktop: Two rows layout */}
              <div className="hidden md:block space-y-6">
                {/* First Row */}
                <div className="flex flex-wrap justify-center gap-6">
                  {firstRow.map((solution, idx) => {
                    const aosType = aosButtonAnimations[idx % aosButtonAnimations.length];
                    const aosDelay = 200 + idx * 100;
                    return (
                      <button
                        key={solution.id}
                        className="group bg-gray-300 bg-opacity-40 hover:bg-opacity-60 text-white px-8 py-4 rounded-lg border border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300 flex items-center gap-3 min-w-[160px] justify-center backdrop-blur-sm"
                        data-aos={aosType}
                        data-aos-delay={aosDelay}
                      >
                        <span className="text-lg font-medium">{solution.title}</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    );
                  })}
                </div>

                {/* Second Row */}
                <div className="flex flex-wrap justify-center gap-6">
                  {secondRow.map((solution, idx) => {
                    const aosType = aosButtonAnimations[(idx + 1) % aosButtonAnimations.length];
                    const aosDelay = 200 + (idx + firstRow.length) * 100;
                    return (
                      <button
                        key={solution.id}
                        className="group bg-gray-300 bg-opacity-40 hover:bg-opacity-60 text-white px-8 py-4 rounded-lg border border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300 flex items-center gap-3 min-w-[160px] justify-center backdrop-blur-sm"
                        data-aos={aosType}
                        data-aos-delay={aosDelay}
                      >
                        <span className="text-lg font-medium">{solution.title}</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;