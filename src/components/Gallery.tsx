import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

// Enhanced data structure for artworks
const ARTWORKS = [
    {
        id: 1,
        src: image1, // Eyes
        title: "The Silent Vigil",
        medium: "Oil on Linen",
        year: "2024",
        description: "A study of solitude and the quiet dignity found in moments of waiting. The heavy chiaroscuro emphasizes the subject's isolation while highlighting the resilience in their posture."
    },
    {
        id: 2,
        src: image2, // Fabric/Detail
        title: "Ethereal Descent",
        medium: "Acrylic & Gold Leaf",
        year: "2023",
        description: "Capturing the interplay between the divine and the terrestrial. The clouds are rendered with soft, feathered strokes to contrast with the sharp, deliberate application of gold leaf."
    },
    {
        id: 3,
        src: image3, // Hands Image
        title: "Portrait of fading Memory",
        medium: "Oil on Canvas",
        year: "2025",
        description: "An exploration of how memory degrades over time. The features are intentionally softened, merging with the background darkness, suggesting a presence that is slowly slipping away."
    },
    {
        id: 5,
        src: image4, // Fifth Image (Architecture)
        title: "Stone & Spirit",
        medium: "Mixed Media",
        year: "2023",
        description: "Contrasting the permanence of marble architecture with the ephemeral nature of light. Based on sketches from Florence."
    },
    {
        id: 6,
        src: image5,
        title: "Unbridled",
        medium: "Charcoal Sketch",
        year: "2024",
        description: "A dynamic capture of motion and raw energy. The swift strokes embody the untamable spirit of the subject."
    },
    {
        id: 7,
        src: image6,
        title: "The Dissolution",
        medium: "Graphite on Paper",
        year: "2024",
        description: "A surrealist interpretation of identity losing its form. The vertical strokes suggest a melting away of the persona into the void."
    },
    {
        id: 8,
        src: image7,
        title: "Twilight Conversation",
        medium: "Ink & Wash",
        year: "2023",
        description: "A delicate scene of intimacy set against a textured, washed background. The birds in flight mirror the connection below."
    }
];

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<typeof ARTWORKS[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = 350;
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedArtwork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArtwork]);

  return (
    <section id="gallery" className="py-24 bg-[#12100E] border-t border-white/5 relative">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl md:text-6xl text-[#EAE0D5] mb-2"
                >
                    GALLERY
                </motion.h2>
                <p className="text-white/50 text-sm max-w-md mt-4 font-light">
                    A curation of oil paintings and charcoal sketches from the past three years. Click on any piece to view details.
                </p>
            </div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="relative w-full pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2))]">
        <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide pr-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {ARTWORKS.map((art, i) => (
                <motion.div 
                    key={art.id}
                    className="flex-shrink-0 relative group cursor-pointer"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedArtwork(art)}
                >
                    <div className="w-[280px] md:w-[350px] h-[400px] md:h-[500px] overflow-hidden rounded-t-full border border-white/10 relative">
                        <img 
                            src={art.src} 
                            alt={art.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                        
                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                             <div className="bg-[#EAE0D5]/10 backdrop-blur-sm p-4 rounded-full border border-[#EAE0D5]/30 text-[#EAE0D5]">
                                <Maximize2 size={24} />
                             </div>
                        </div>

                        {/* Frame effect */}
                        <div className="absolute inset-2 border border-white/20 rounded-t-full pointer-events-none" />
                    </div>
                    <div className="mt-4 text-center opacity-60 group-hover:opacity-100 transition-opacity">
                        <h4 className="font-serif text-lg text-[#EAE0D5]">{art.title}</h4>
                        <p className="text-xs uppercase tracking-widest text-[#EAE0D5]/60">{art.medium}</p>
                    </div>
                </motion.div>
            ))}
            {/* Empty spacer for right padding effect */}
            <div className="w-12 flex-shrink-0" />
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-6 flex justify-center items-center gap-8 mt-4">
        <div className="h-[1px] w-24 bg-white/20" />
        <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6 text-[#EAE0D5]" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ChevronRight className="w-6 h-6 text-[#EAE0D5]" />
            </button>
        </div>
        <div className="h-[1px] w-24 bg-white/20" />
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedArtwork && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-[#0A0908]/95 backdrop-blur-md" 
                    onClick={() => setSelectedArtwork(null)}
                />

                {/* Content Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-6xl h-full md:h-[80vh] bg-[#12100E] border border-white/10 shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedArtwork(null)}
                        className="absolute top-4 right-4 z-50 p-2 text-[#EAE0D5] hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-3/5 h-1/2 md:h-full bg-black/20 relative p-6 md:p-12 flex items-center justify-center">
                         <div className="relative w-full h-full shadow-2xl">
                             <img 
                                src={selectedArtwork.src} 
                                alt={selectedArtwork.title} 
                                className="w-full h-full object-contain"
                             />
                         </div>
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-2/5 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-[#12100E] border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xs uppercase tracking-[0.2em] text-[#EAE0D5]/50 mb-2">Artwork</h3>
                                <h2 className="font-serif text-3xl md:text-5xl text-[#EAE0D5] leading-tight">
                                    {selectedArtwork.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-[#EAE0D5]/50 mb-1">Medium</h4>
                                    <p className="text-[#EAE0D5]">{selectedArtwork.medium}</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-[#EAE0D5]/50 mb-1">Year</h4>
                                    <p className="text-[#EAE0D5]">{selectedArtwork.year}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest text-[#EAE0D5]/50 mb-3">Description</h4>
                                <p className="text-[#EAE0D5]/80 leading-relaxed font-light text-sm md:text-base">
                                    {selectedArtwork.description}
                                </p>
                            </div>

                            <button className="w-full border border-[#EAE0D5]/30 hover:bg-[#EAE0D5] hover:text-[#12100E] text-[#EAE0D5] py-3 rounded text-xs uppercase tracking-widest transition-all mt-4">
                                Inquire about this piece
                            </button>
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
