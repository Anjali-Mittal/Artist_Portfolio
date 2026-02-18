import artist from '../assets/artist.png';
import React from 'react';
import { motion } from 'motion/react';

const PORTRAIT_IMG = artist;

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#12100E] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="font-serif text-6xl md:text-8xl text-[#EAE0D5] leading-[0.9]">
                    About <br />
                    <span className="italic font-light ml-12">The</span> 
                    <br />
                    <span className="pl-2 border-l-4 border-[#EAE0D5] ml-0 md:ml-24 pl-6">Artist</span>
                </h2>

                <div className="mt-12 ml-0 md:ml-32 max-w-sm">
                    <p className="text-[#EAE0D5]/70 text-sm leading-relaxed mb-6 font-light">
                        I am a painter fascinated by the interplay of light and shadow, inspired by the masters of the Renaissance 
                        but driven by contemporary narratives. My work attempts to capture fleeting moments of silence and 
                        introspection in a chaotic world.
                    </p>
                    
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#EAE0D5]/50 border-t border-white/10 pt-4">
                        <span>Est.</span>
                        <span className="w-full h-[1px] bg-white/10"></span>
                        <span>2024</span>
                    </div>
                </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
             >
                <div className="w-[300px] md:w-[400px] h-[400px] md:h-[550px] rounded-t-[150px] overflow-hidden border border-white/10">
                    <img 
                        src={PORTRAIT_IMG} 
                        alt="Classic Portrait" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                {/* Decorative circle/lines */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-white/5 rounded-t-[150px] -z-10" />
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
