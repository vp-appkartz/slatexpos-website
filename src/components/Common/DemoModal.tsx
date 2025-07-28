import React, { useRef, useEffect } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
        <h2 className="text-center text-2xl sm:text-2xl font-semibold mb-6 text-black" style={{ fontFamily: 'Gilroy, sans-serif' }}>
          Schedule your 15-minute demo now
        </h2>
        <form className="space-y-4">
          <div className="flex space-x-3">
            <input type="text" placeholder="Full name*" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300" />
            <input type="text" placeholder="Last name*" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300" />
          </div>
          <div className="flex space-x-3">
            <input type="email" placeholder="Your email*" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300" />
            <input type="tel" placeholder="Phone number*" className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300" />
          </div>
          <input type="text" placeholder="Company name*" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300" />
          <textarea placeholder="Your message.." className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary-300 min-h-[100px] resize-none" />
          <button type="submit" className="w-full bg-primary-300 hover:bg-green-700 text-white font-semibold rounded-lg py-3 text-lg transition-all duration-200 mt-2 shadow-md">
            Schedule my demo
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs mt-6">
          We’ll tailor your demo to your immediate needs and answer all your questions. Get ready to see how it works!
        </p>
      </div>
    </div>
  );
};

export default DemoModal; 