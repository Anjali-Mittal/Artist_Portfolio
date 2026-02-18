import img1 from '../assets/3.png';
import img2 from '../assets/1.png';
import { motion } from 'motion/react';

export default function Info() {
  return (
    <section id="contacts" className="py-32 bg-[#12100E] text-[#EAE0D5] overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent to-white/20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-transparent to-white/20" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Panel: The Hands (Creation) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3 h-[400px] lg:h-[600px] relative hidden lg:block"
          >
             <div className="absolute inset-0 border border-white/5 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={img1} alt="Artist Hands" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-1000" />
             </div>
             <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-white/40">Creation</p>
          </motion.div>

          {/* Center Panel: The Information (Communication) */}
          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-12 py-12 relative z-10">
            
            {/* Quote */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="w-8 h-[1px] bg-[#EAE0D5] mx-auto mb-8 opacity-50"></div>
                <h2 className="font-serif text-3xl md:text-4xl italic leading-tight text-[#EAE0D5]/90 max-w-lg mx-auto">
                    "Art washes away from the soul the dust of everyday life."
                </h2>
                <p className="mt-4 text-xs uppercase tracking-widest text-white/40">— Pablo Picasso</p>
            </motion.div>

            {/* Divider */}
            <div className="w-[1px] h-16 bg-white/10"></div>

            {/* Contact Details Grid */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-lg"
            >
                {/* Email & Phone */}
                <div className="flex flex-col items-center space-y-4 group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-2 group-hover:border-[#EAE0D5]/50 transition-colors">
                        <span className="font-serif italic text-lg">i</span>
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[#EAE0D5]">Inquiries</h3>
                    <div className="text-white/60 text-sm leading-loose">
                        <a href="mailto:hello@artist.com" className="block hover:text-white transition-colors">hello@satwikdubey.art</a>
                        <p>+39 (055) 123-4567</p>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-col items-center space-y-4 group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-2 group-hover:border-[#EAE0D5]/50 transition-colors">
                        <span className="font-serif italic text-lg">f</span>
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[#EAE0D5]">Follow</h3>
                    <div className="text-white/60 text-sm leading-loose flex flex-col gap-1">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
                    </div>
                </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="pt-8"
            >
                <button className="px-8 py-3 border border-[#EAE0D5]/30 hover:bg-[#EAE0D5] hover:text-[#12100E] hover:border-[#EAE0D5] transition-all duration-300 text-sm uppercase tracking-[0.2em]">
                    Commission a Piece
                </button>
            </motion.div>

          </div>

          {/* Right Panel: The Eyes (Perception) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-3 h-[400px] lg:h-[600px] relative hidden lg:block"
          >
             <div className="absolute inset-0 border border-white/5 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={img2
                
                } alt="Artist Vision" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-1000" />
             </div>
             <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-white/40">Perception</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
