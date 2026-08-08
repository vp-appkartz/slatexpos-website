import React, { useEffect } from 'react';
import { useDeferredScript } from '../../hooks/useDeferredScript';

export const Analytics: React.FC = () => {
  // Load GA script after 3 seconds
  useDeferredScript('https://www.googletagmanager.com/gtag/js?id=G-3N7G7QDHDL', 3000);

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        // @ts-ignore
        window.dataLayer.push(arguments);
      }
      // @ts-ignore
      gtag('js', new Date());
      // @ts-ignore
      gtag('config', 'G-3N7G7QDHDL');
    }, 3100); // Execute shortly after script is loaded

    return () => clearTimeout(timer);
  }, []);

  return null;
};
