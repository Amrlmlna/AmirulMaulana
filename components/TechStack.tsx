"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const stack = [
    { category: "FRONTEND_CORE", items: ["React", "Next.js", "TypeScript", "Tailwind"], status: "ACTIVE" },
    { category: "MOBILE & IOT", items: ["Flutter", "Dart", "IoT Integration", "MQTT"], status: "SYNCED" },
    { category: "DESKTOP & SYSTEM", items: ["Electron", "Node.js", "System Arch", "Git"], status: "ONLINE" },
    { category: "CREATIVE_SUITE", items: ["Figma", "UI/UX", "Motion", "Prototyping"], status: "RENDERING" },
  ];

  return (
    <section className="bg-black py-24 md:py-48 px-4 md:px-12 border-t border-white/10 relative z-10 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
         
         {/* Ticker Header */}
         <div className="overflow-hidden border-b border-white/20 pb-8 mb-24">
             <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 whitespace-nowrap font-mono text-xs md:text-sm text-neutral-500"
             >
                {Array(10).fill("SYSTEM_MODULES // OPTIMIZED // RUNNING_OPERATIONS // 100%_CAPACITY //").map((txt, i) => (
                    <span key={i}>{txt}</span>
                ))}
             </motion.div>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stack.map((group, i) => (
                <div key={i} className="flex flex-col gap-4">
                    <div className="flex justify-between items-center font-mono text-[10px] text-neutral-500 border-b border-white/10 pb-2">
                        <span>0{i+1} // {group.category}</span>
                        <span className="text-green-500 animate-pulse">[{group.status}]</span>
                    </div>
                    
                    <div className="grid gap-2">
                        {group.items.map((tech, j) => (
                            <motion.div 
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: (i * 0.1) + (j * 0.05) }}
                                viewport={{ once: true }}
                                className="group relative bg-neutral-900/40 border border-white/5 p-4 hover:bg-neutral-800 hover:border-white/40 transition-all duration-300 overflow-hidden"
                            >
                                <div className="flex justify-between items-center relative z-10">
                                    <span className="text-lg md:text-xl font-bold text-neutral-400 group-hover:text-white transition-colors tracking-tight">
                                        {tech}
                                    </span>
                                    <span className="font-mono text-[9px] text-neutral-700 group-hover:text-white/50 transition-colors">
                                        v.{2024}.{j+1}
                                    </span>
                                </div>

                                {/* Hover Scanline */}
                                <div className="absolute inset-0 bg-white/5 md:translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                                
                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-white transition-colors"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-white transition-colors"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
         </div>
         
      </div>
    </section>
  );
}
