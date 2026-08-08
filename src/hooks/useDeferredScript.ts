import { useEffect } from 'react';

export function useDeferredScript(src: string, delayMs = 3000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [src, delayMs]);
}
