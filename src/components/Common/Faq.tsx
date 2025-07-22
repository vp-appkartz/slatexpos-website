import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQSection = ({
  title = "FAQs",
  subtitle = "Powerful Tools. Seamless Experience.",
  faqs = [
    {
      question: "What is a restaurant POS system?",
      answer: "A restaurant POS system is a digital tool that combines hardware and software to streamline operations and enhance customer experiences. It handles tasks ranging from taking orders and processing payments to managing inventory, tracking sales, and generating sales and analytics reports. By automating these processes, POS systems boost efficiency, reduce errors, and provide valuable insights for informed decision-making. The Restaurant POS hardware typically comprises of Point of Sale terminals, customer-facing displays, kitchen display systems, receipt printers, kitchen printers, cash drawers, and payment processors. The software component features like order management, inventory control, payment processing, customer relationship management, loyalty and promotional tools. Ultimately, a restaurant POS system is designed to optimize every aspect of a restaurant's operations, from the kitchen to the cashier."
    },
    {
      question: "How to choose the best restaurant POS system?",
      answer: "Choosing the best restaurant POS system depends on your specific needs, budget, and business size. Consider factors like ease of use, scalability, integration capabilities, customer support, and pricing structure."
    },
    {
      question: "What hardware is required to use SlateX POS? Does SlateX POS offer hardware?",
      answer: "SlateX POS requires standard POS hardware including terminals, printers, cash drawers, and payment processors. Yes, SlateX POS offers comprehensive hardware solutions tailored to restaurant needs."
    },
    {
      question: "Does SlateX Restaurant POS help manage multiple locations easily?",
      answer: "Yes, SlateX Restaurant POS is designed to efficiently manage multiple locations from a centralized dashboard, providing unified reporting and streamlined operations across all your restaurant locations."
    },
    {
      question: "Does SlateX restaurant POS work offline if the internet goes down?",
      answer: "Yes, SlateX POS has robust offline functionality that ensures your restaurant can continue operations even when internet connectivity is interrupted, with automatic data synchronization when connection is restored."
    },
    {
      question: "What makes SlateX POS different?",
      answer: "SlateX POS stands out with its intuitive interface, comprehensive feature set, reliable offline capabilities, excellent customer support, and competitive pricing designed specifically for restaurant operations."
    },
    {
      question: "How fast can I implement SlateX POS in my restaurant?",
      answer: "SlateX POS can typically be implemented within 1-2 weeks, including hardware setup, staff training, and data migration. Our implementation team ensures a smooth transition with minimal disruption to your operations."
    },
    {
      question: "Does SlateX POS offer 3rd Party online order integration?",
      answer: "Yes, SlateX POS integrates seamlessly with major third-party delivery platforms and online ordering systems, centralizing all orders in one system for efficient management."
    },
    {
      question: "What support do you offer?",
      answer: "We offer comprehensive 24/7 customer support including phone, email, and live chat assistance, along with training resources, documentation, and dedicated account management for enterprise clients."
    },
    {
      question: "For which countries is SlateX POS service available?",
      answer: "SlateX POS is currently available in multiple countries across North America, Europe, and Asia-Pacific regions. Contact us to confirm availability in your specific location."
    },
    {
      question: "What are your pricing plans?",
      answer: "We offer flexible pricing plans starting from basic packages for small restaurants to enterprise solutions for large chains. Contact our sales team for detailed pricing information tailored to your specific needs."
    }
  ]
}) => {
  const [expandedIndex, setExpandedIndex] = useState(0); // First item expanded by default

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out-cubic',
      once: false,
      mirror: false,
      offset: 40,
    });
  }, []);

  // Ensure AOS refreshes on expand/collapse for animation
  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 200);
  }, [expandedIndex]);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-100">
      <div className="w-full max-w-7xl mx-auto bg-gray-100 rounded-lg p-8">
        {/* Header */}
        <div className="text-center mb-8" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 60}
              data-aos-anchor-placement="top-bottom"
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={expandedIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-gray-900 font-medium text-base pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {expandedIndex === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                style={{
                  maxHeight: expandedIndex === index ? 500 : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                  transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)',
                  overflow: 'hidden',
                  willChange: 'max-height, opacity',
                  background: 'transparent',
                }}
                data-aos={expandedIndex === index ? "zoom-in" : undefined}
                data-aos-duration="600"
              >
                {expandedIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;