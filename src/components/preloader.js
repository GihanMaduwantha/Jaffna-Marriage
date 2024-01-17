// Preloader.js

import React, { useEffect } from 'react';

const Preloader = ({ images, onImagesLoaded, children }) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    // Call the callback when images are loaded
    onImagesLoaded && onImagesLoaded();
  }, [images, onImagesLoaded]);

  return <>{children}</>;
};

export default Preloader;
