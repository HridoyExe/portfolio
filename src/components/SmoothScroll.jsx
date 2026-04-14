import React from 'react';
import { ReactLenis } from 'lenis/react';

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
