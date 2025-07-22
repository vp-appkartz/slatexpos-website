import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    interest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/contact-bg.png')"
          }}
        >
          {/* Content Container */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 lg:p-12 min-h-[500px]">
            
            {/* Left Content */}
            <div className="text-white space-y-6 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                Let's schedule<br />
                your free demo
              </h2>
              
              <p className="text-white/90 text-lg leading-relaxed max-w-md">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
              </p>
            </div>

            {/* Right Content - Form with white glassy background */}
            <div className="flex items-center justify-center">
              <div 
                className="w-full max-w-md rounded-2xl p-8 shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 shadow-sm"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 shadow-sm"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 shadow-sm"
                      required
                    />
                  </div>

                  {/* Restaurant Name Field */}
                  <div>
                    <input
                      type="text"
                      name="restaurant"
                      placeholder="Restaurant Name"
                      value={formData.restaurant}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 shadow-sm"
                      required
                    />
                  </div>

                  {/* Interest Field */}
                  <div>
                    <textarea
                      name="interest"
                      placeholder="Describe your interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/80 border-0 rounded-lg text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 resize-none shadow-sm"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-fit bg-orange-500 hover:bg-orange-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Get a Demo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;