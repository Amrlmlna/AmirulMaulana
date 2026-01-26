"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const stack = [
    { category: "FRONTEND_CORE", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { category: "GRAPHICS_ENGINE", items: ["WebGL", "Three.js", "R3F", "GLSL Shaders"] },
    { category: "BACKEND_OPS", items: ["Node.js", "PostgreSQL", "Supabase", "Git Workflow"] },
    { category: "CREATIVE_SUITE", items: ["Figma", "Blender", "Motion Design", "UX Systems"] },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
         {/* Diagnostics Header */}
         <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-4">
            <h2 className="font-mono text-sm text-neutral-500 tracking-widest">[SYSTEM_DIAGNOSTICS]</h2>
            <div className="flex gap-4 font-mono text-[10px] text-neutral-600">
                <span>MEM_USAGE: NORMAL</span>
                <span>CPU: OPTIMIZED</span>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stack.map((group, i) => (
                <div key={i} className="space-y-6">
                    <h3 className="font-mono text-xs text-neutral-400 border-l border-white/20 pl-3">
                        {group.category}
                    </h3>
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid gap-3"
                    >
                        {group.items.map((tech, j) => (
                            <motion.div 
                                key={j}
                                variants={itemAnim}
                                className="group relative border border-white/10 bg-neutral-900/50 p-4 hover:bg-white hover:border-white transition-all duration-300 cursor-default"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-sm text-neutral-300 group-hover:text-black transition-colors">
                                        {tech}
                                    </span>
                                    {/* Status Dot */}
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)] group-hover:bg-black transition-colors"></span>
                                </div>
                                
                                {/* Corner Decor */}
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 group-hover:border-black/30 transition-colors"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 group-hover:border-black/30 transition-colors"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            ))}
         </div>
         
         {/* Footer Bar */}
         <div className="mt-16 flex justify-between font-mono text-[10px] text-neutral-700 uppercase tracking-widest border-t border-white/5 pt-4">
             <span>ALL MODULES OPERATIONAL</span>
             <span>LAST UPDATE: 2024</span>
         </div>
      </div>
    </section>
  );
}
