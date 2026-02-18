import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const HERO_IMAGES = [
    image2, // Eyes
    image3, // Horse
    image4, // Fabric
    image5, // Face
    image6, // Hands
    image7, // Birds
    image1 // Architecture
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#12100E]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
            <motion.img 
                key={currentIndex}
                src={HERO_IMAGES[currentIndex]} 
                alt="Background Slideshow" 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover grayscale" // Black & White filter
            />
        </AnimatePresence>
        
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100E]/30 via-transparent to-[#12100E] z-10" />
        <div className="absolute inset-0 bg-[#12100E]/50 z-10" />
      </div>

      <div className="container mx-auto px-4 z-20 relative h-full flex flex-col justify-center items-center">
        
        {/* Main Composition */}
        <div className="relative w-full max-w-6xl flex flex-col items-center">
            
            {/* Typography */}
            <div className="text-center relative z-20 mt-20 md:mt-0">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-sans text-sm md:text-lg tracking-[0.3em] uppercase mb-4 text-[#EAE0D5]/80"
                >
                    Portfolio
                </motion.h2>
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#EAE0D5] leading-[0.85] tracking-tight text-shadow-lg"
                >
                    <span className="block italic font-light ml-[-0.5em]">Satwik</span>
                    <span className="block font-normal ml-[0.5em]">Dubey</span>
                </motion.h1>
            </div>

            {/* Description Text */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12 max-w-md text-center text-[#EAE0D5]/70 text-sm md:text-base leading-relaxed font-light"
            >
                <p>
                    Exploring the depths of human emotion through classical techniques and modern interpretation.
                    Welcome to my personal collection of works.
                </p>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
