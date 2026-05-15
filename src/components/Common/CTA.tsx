import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const aosAnimations = [
  "zoom-in-up",
  "fade-up",
  "flip-left",
  "flip-right",
  "fade-right",
  "fade-left",
];

interface ContactProps {
  title?: string | React.ReactNode;
  description?: string;
  image?: string;
}

const Contact: React.FC<ContactProps> = ({
  title,
  description,
  image
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    restaurant: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: "ease-in-out",
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic validation
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.restaurant.trim()
    ) {
      setError(
        "All fields (First Name, Last Name, Email, Phone, Restaurant Name) are required."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://devapi.slatexpos.com/web/sendDemoInquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            company: formData.restaurant,
            message: formData.interest,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send inquiry. Please try again.");
      }

      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        restaurant: "",
        interest: "",
      });
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayTitle = title || (
    <>
      Ready to Run Your Restaurant
      <br />
      on Your Terms?
    </>
  );

  const displayDescription = description || "Book a free demo. See SlateX in action on your device, with your menu. No commitment. No hardware purchase. Just a real conversation with a real person. We serve restaurants in Edmonton, Vancouver, Brandon, and across all of Canada.";

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url('${image || '/contact-bg.png'}')`,
          }}
        >
          {/* Overlay for better contrast on mobile */}
          <div className="absolute inset-0 bg-black/30 lg:bg-transparent z-0"></div>
          {/* Content Container */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-6 md:p-8 lg:p-12 min-h-[500px]">
            {/* Left Content */}
            <div
              className="text-white space-y-6 flex flex-col justify-center text-center lg:text-left"
              data-aos="fade-right"
              data-aos-delay="120"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
                data-aos="fade-down"
                data-aos-delay="180"
              >
                {displayTitle}
              </h2>

              <p
                className="text-white/90 text-sm md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
                data-aos="fade-up"
                data-aos-delay="260"
              >
                {displayDescription}
              </p>
            </div>

            {/* Right Content - Form with white glassy background */}
            <div className="flex items-center justify-center">
              <div
                className="w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(10px)",
                }}
                data-aos="zoom-in-up"
                data-aos-delay="200"
              >
                {showSuccess ? (
                  <div className="flex flex-col items-center justify-center min-h-[300px]">
                    <div className="mb-4">
                      <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                        <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l3 3 5-5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-green-700 mb-2 text-center">Thank you!</h3>
                    <p className="text-center text-gray-700 mb-2">
                      Your demo request has been received.<br />
                      Our team will reach out to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div data-aos="fade-up" data-aos-delay="250">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 shadow-sm"
                          required
                        />
                      </div>
                      <div data-aos="fade-up" data-aos-delay="250">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 shadow-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div data-aos="fade-up" data-aos-delay="300">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 shadow-sm"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div data-aos="fade-up" data-aos-delay="350">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 shadow-sm"
                        required
                      />
                    </div>

                    {/* Restaurant Name Field */}
                    <div data-aos="fade-up" data-aos-delay="400">
                      <input
                        type="text"
                        name="restaurant"
                        placeholder="Restaurant Name"
                        value={formData.restaurant}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 shadow-sm"
                        required
                      />
                    </div>

                    {/* Interest Field */}
                    <div data-aos="fade-up" data-aos-delay="450">
                      <textarea
                        name="interest"
                        placeholder="Describe your interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-200 resize-none shadow-sm"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2" data-aos="zoom-in" data-aos-delay="500">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-fit bg-primary-300 hover:bg-orange-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                          }`}
                      >
                        {isSubmitting ? "Sending..." : "Get a Demo"}
                      </button>
                    </div>
                    {error && (
                      <div className="text-red-500 text-sm mt-2 text-center">
                        {error}
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
