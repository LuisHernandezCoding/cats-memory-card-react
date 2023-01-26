import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

const ParallaxScrolling = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    });
    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  return (
    <div data-relative-input="true" id="scene">
      <div className="anchor a-1">
        <div data-depth="0.6" className="ship1" />
      </div>
      <div data-depth="0.6" className="stars1" />
      <div data-depth="0.3" className="stars2" />
      <div data-depth="0.1" className="stars3" />
    </div>
  );
};

export default ParallaxScrolling;
