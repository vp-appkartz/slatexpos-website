import React, { useRef, useEffect, useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Form state
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    botField: '', // Hidden honeypot field for spam bots
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  // Reset form and success state when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        botField: '',
      });
      setShowSuccess(false);
      setError(null);
      setSubmitting(false);
    }
  }, [isOpen]);

  // Disable background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // Honeypot check: If a bot filled out the hidden field, silently reject but pretend it succeeded
    if (form.botField) {
      console.log('Bot detected. Silently discarding submission.');
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
      }, 2200);
      setSubmitting(false);
      return;
    }

    // Basic validation
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.company.trim()
    ) {
      setError('All fields (first_name, last_name, email, phone, company) are required.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://devapi.slatexpos.com/web/sendDemoInquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send inquiry. Please try again.');
      }

      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
      }, 2200);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-lg mx-4 sm:mx-0 bg-[#f7efe7] rounded-2xl shadow-xl p-8 sm:p-10 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-20'} border border-gray-200`}
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 text-2xl text-gray-700 hover:text-black focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {!showSuccess ? (
          <>
            <h2 className="text-center text-2xl sm:text-2xl font-semibold mb-6 text-black" style={{ fontFamily: 'Gilroy, sans-serif' }}>
              Schedule your 15-minute demo now
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Honeypot field - Hidden from real users, visible to spam bots */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="botField"
                  value={form.botField}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Full name*"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company name*"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300"
                value={form.company}
                onChange={handleChange}
                required
                autoComplete="organization"
              />
              <textarea
                name="message"
                placeholder="Your message.."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300 min-h-[100px] resize-none"
                value={form.message}
                onChange={handleChange}
              />
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                className={`w-full bg-primary-300 hover:bg-green-700 text-white font-semibold rounded-lg py-3 text-lg transition-all duration-200 mt-2 shadow-md ${submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Schedule my demo'}
              </button>
            </form>
            <p className="text-center text-gray-500 text-xs mt-6">
              We’ll tailor your demo to your immediate needs and answer all your questions. Get ready to see how it works!
            </p>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default DemoModal;