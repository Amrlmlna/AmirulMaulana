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
        <div className="flex flex-col gap-24 border-t border-white/10 pt-12">
            <div className="flex flex-col gap-8 mb-8 md:mb-0 w-full">
                <span className="font-mono text-xs text-neutral-500 uppercase mb-8 block">[COMMUNICATION_CHANNELS]</span>
                <div className="flex flex-col gap-2">
                    {[
                        { name: "GITHUB", url: "https://github.com/Amrlmlna", status: "ONLINE", id: "01" },
                        { name: "LINKEDIN", url: "https://www.linkedin.com/in/amirul-maulana", status: "CONNECT", id: "02" },
                        { name: "INSTAGRAM", url: "https://www.instagram.com/lnaaa_m/", status: "DM_OPEN", id: "03" },
                        { name: "EMAIL", url: "mailto:amirulmumba@gmail.com", status: "ENCRYPTED", id: "04" }
                    ].map((social) => (
                        <a 
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative border-t border-white/20 py-8 md:py-12 flex justify-between items-baseline hover:bg-white hover:text-black transition-all duration-300 px-4 md:px-8"
                        >
                            <span className="font-mono text-xs md:text-sm text-neutral-500 group-hover:text-neutral-600 transition-colors">/{social.id}</span>
                            
                            <span className="text-4xl md:text-8xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-300">
                                {social.name}
                            </span>

                            <div className="hidden md:flex items-center gap-4 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>[{social.status}]</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-45">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

             <div className="text-right font-mono text-[10px] text-neutral-600 uppercase">
                 <p>LOCATION: Palu, Sulawesi Tengah</p>
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
