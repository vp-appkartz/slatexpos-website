import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hardware = () => {
  const hardwareItems = [
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

  const solutionButtons = [
    { id: 1, title: "Products", row: 1 },
    { id: 2, title: "Casual Dining", row: 1 },
    { id: 3, title: "Cafe n Bakery", row: 1 },
    { id: 4, title: "Hotel", row: 2 },
    { id: 5, title: "Pizzeria", row: 2 },
    { id: 6, title: "Bar n Lounge", row: 2 },
  ];

  const firstRow = solutionButtons.filter((btn) => btn.row === 1);
  const secondRow = solutionButtons.filter((btn) => btn.row === 2);

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hardware Section */}
        <div>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Hardware
            </h2>
            <p className="text-lg text-gray-600">
              Powerful Tools. Seamless Experience.
            </p>
          </div>

          {/* Hardware Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwareItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm pt-16 pb-8 px-8 text-center relative overflow-visible mt-12"
               
              >
                {/* Device Image - OUTSIDE the card, floating above */}
                <div
                  className="absolute left-1/2 -top-20 -translate-x-1/2 z-10"
                  style={{ width: 250, height: 200 }}
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
                <h3 className="text-3xl font-semibold text-left text-gray-800 mb-4 mt-20">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm text-left leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="relative py-20 px-8 rounded-2xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Solutions
              </h2>
              <p className="text-xl text-white">
                One POS. Many Possibilities.
              </p>
            </div>

            {/* Solution Buttons */}
            <div className="space-y-6">
              {/* First Row */}
              <div className="flex flex-wrap justify-center gap-6">
                {firstRow.map((solution) => (
                  <button
                    key={solution.id}
                    className="group bg-gray-300 bg-opacity-40 hover:bg-opacity-60 text-white px-8 py-4 rounded-lg border border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300 flex items-center gap-3 min-w-[160px] justify-center backdrop-blur-sm"
                  >
                    <span className="text-lg font-medium">{solution.title}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap justify-center gap-6">
                {secondRow.map((solution) => (
                  <button
                    key={solution.id}
                    className="group bg-gray-300 bg-opacity-40 hover:bg-opacity-60 text-white px-8 py-4 rounded-lg border border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300 flex items-center gap-3 min-w-[160px] justify-center backdrop-blur-sm"
                  >
                    <span className="text-lg font-medium">{solution.title}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;