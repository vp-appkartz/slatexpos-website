import { Check } from 'lucide-react';

export interface BlackSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  trustIndicators?: string[];
  className?: string;
}

const defaultProps: Required<Omit<BlackSectionProps, 'onButtonClick' | 'className'>> = {
  title: "Free for 90 Days",
  description:
    "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut",
  buttonText: "Signup Now",
  imageSrc: "/pos-lady.png",
  imageAlt: "Woman working with laptop in restaurant",
  trustIndicators: [
    "200+ Loyal Partner",
    "Reliable Hardware",
    "No Hidden Charges",
    "24/7 Customer"
  ]
};

const BlackSection: React.FC<BlackSectionProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
  buttonText = defaultProps.buttonText,
  onButtonClick,
  imageSrc = defaultProps.imageSrc,
  imageAlt = defaultProps.imageAlt,
  trustIndicators = defaultProps.trustIndicators,
  className = ""
}) => {
  return (
    <section className={`bg-black py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              {description}
            </p>
            {buttonText && (
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                onClick={onButtonClick}
              >
                {buttonText}
              </button>
            )}
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        {trustIndicators && trustIndicators.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center text-white">
                <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-lg font-medium">{indicator}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlackSection;