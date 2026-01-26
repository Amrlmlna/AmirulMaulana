"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-12 relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Call to Action */}
        <div className="flex flex-col items-center text-center mb-32">
             <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-mono text-neutral-500 mb-8 tracking-widest"
             >
                [INITIATE_PROTOCOL: COLLABORATION]
             </motion.span>
             
             <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none text-white mb-12 mix-blend-difference z-10">
                LET'S <br/>
                WORK <br/>
                TOGETHER
             </h2>
             
             <motion.a 
                href="mailto:contact@amirul.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-mono text-xs md:text-sm px-12 py-4 rounded-full uppercase tracking-wider hover:bg-neutral-200 transition-colors z-20"
             >
                Start Encrypted Channel
             </motion.a>
        </div>

        {/* Footer Data */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
            <div className="flex flex-col gap-4 mb-8 md:mb-0">
                <span className="font-mono text-xs text-neutral-500 uppercase">Social Links</span>
                <div className="flex gap-8 font-mono text-sm text-neutral-300">
                    <a href="#" className="hover:text-white transition-colors">GITHUB</a>
                    <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                    <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                    <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                </div>
            </div>

             <div className="text-right font-mono text-[10px] text-neutral-600 uppercase">
                 <p>LOCATION: JAKARTA, ID</p>
                 <p>LOCAL_TIME: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' })}</p>
                 <p className="mt-4">© 2024 AMIRUL MAULANA. ALL RIGHTS RESERVED.</p>
             </div>
        </div>

        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-neutral-900/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      </div>
    </section>
  );
}
