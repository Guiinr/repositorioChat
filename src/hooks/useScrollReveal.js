import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (config) => {
  useEffect(() => {
    ScrollReveal().reveal(config.selector, {
      delay: config.delay || 200,
      distance: config.distance || '20px',
      duration: config.duration || 1000,
      easing: config.easing || 'ease-in-out',
      origin: config.origin || 'bottom',
      reset: config.reset || false,
    });
  }, [config]);
};

export default useScrollReveal;