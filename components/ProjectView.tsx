"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectView({ project, nextProject }: { project: Project, nextProject: Project }) {
  return (
    <main className="bg-black min-h-screen text-white pt-24 md:pt-32">
      {/* Navigation Back */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference">
          <Link href="/" className="font-mono text-sm tracking-widest hover:line-through opacity-70 hover:opacity-100 transition-opacity">
             ← BACK_TO_BASE
          </Link>
      </div>

      {/* Hero */}
      <section className="px-4 md:px-12 mb-32">
         <div className="max-w-7xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="font-mono text-neutral-500 mb-8 flex justify-between"
             >
                <span>PROJECT_ID: {project.id}</span>
                <span>{project.year}</span>
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-12"
             >
                {project.title}
             </motion.h1>
             
             {/* Tech Badge */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="flex flex-wrap gap-4 font-mono text-xs mb-24"
             >
                {project.stack.split(', ').map(tag => (
                   <span key={tag} className="border border-white/20 px-3 py-1 rounded-full">{tag}</span>
                ))}
            </motion.div>

            {/* Main Visual Placeholder */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
               className="w-full aspect-video bg-neutral-900 rounded-lg animate-pulse flex items-center justify-center border border-white/10"
            >
                <span className="font-mono text-neutral-600">VISUAL_ASSET_LOADING</span>
            </motion.div>
         </div>
      </section>

      {/* Content Grid */}
      <section className="px-4 md:px-12 mb-48">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <h3 className="font-mono text-neutral-500 mb-8">[BRIEF]</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-200">
                    {project.description}
                </p>
             </motion.div>
             <div className="space-y-16">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                 >
                    <h3 className="font-mono text-neutral-500 mb-4">[THE_CHALLENGE]</h3>
                    <p className="text-neutral-400 leading-relaxed">
                        {project.challenge}
                    </p>
                 </motion.div>
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                 >
                    <h3 className="font-mono text-neutral-500 mb-4">[THE_SOLUTION]</h3>
                    <p className="text-neutral-400 leading-relaxed">
                        {project.solution}
                    </p>
                 </motion.div>
             </div>
          </div>
      </section>

      {/* Next Project */}
      <section className="border-t border-white/10">
          <Link href={`/work/${nextProject.slug}`} className="block group">
              <div className="px-4 md:px-12 py-32 md:py-48 hover:bg-neutral-950 transition-colors">
                 <div className="max-w-7xl mx-auto text-center">
                    <span className="font-mono text-neutral-500 block mb-8">NEXT_OPERATION</span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter group-hover:scale-105 transition-transform duration-500 inline-block">
                        {nextProject.title}
                    </h2>
                 </div>
              </div>
          </Link>
      </section>

    </main>
  );
}
