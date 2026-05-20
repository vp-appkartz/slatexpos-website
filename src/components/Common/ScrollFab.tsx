import React, { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ScrollFab: React.FC = () => {
  const [scrollY, setScrollY]       = useState(0);
  const [pageH, setPageH]           = useState(0);
  const [winH, setWinH]             = useState(0);
  const [visible, setVisible]       = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrollY(y);
      setPageH(document.body.scrollHeight);
      setWinH(window.innerHeight);
      setVisible(y > 300);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Near bottom = within 200px of end
  const nearBottom = scrollY + winH >= pageH - 200;

  const scrollToTop    = () => window.scrollTo({ top: 0,      behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: pageH,  behavior: 'smooth' });

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 transition-all duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
    >
      {/* Scroll to top — always show when visible */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        className="w-11 h-11 rounded-full bg-primary-300 hover:bg-orange-600 text-white
          flex items-center justify-center shadow-lg hover:shadow-xl
          hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Scroll to bottom — only show when NOT near bottom */}
      {!nearBottom && (
        <button
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          title="Go to bottom"
          className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-600 hover:text-primary-300
            flex items-center justify-center shadow-md hover:shadow-lg border border-gray-200 hover:border-orange-300
            hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollFab;
