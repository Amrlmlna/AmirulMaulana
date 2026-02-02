"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectView({ project, nextProject }: { project: Project, nextProject: Project }) {
  return (
    <main className="bg-black min-h-screen text-white pt-24 md:pt-32">
      {/* Navigation Back */}
      <div className="fixed top-6 left-4 md:top-8 md:left-8 z-50 mix-blend-difference">
          <Link href="/" className="font-mono text-xs md:text-sm tracking-widest hover:line-through opacity-70 hover:opacity-100 transition-opacity">
             ← BACK
          </Link>
      </div>

      {/* Hero */}
      <section className="px-4 md:px-12 mb-32">
         <div className="max-w-7xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="font-outfit text-neutral-500 mb-8 flex justify-between text-xs md:text-base"
             >
                <span>PROJECT_ID: {project.id}</span>
                <span>{project.year}</span>
             </motion.div>
             
             <motion.h1 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="text-5xl md:text-9xl font-bold tracking-tighter leading-none mb-8 md:mb-12 break-words"
             >
                {project.title}
             </motion.h1>
             
             {/* Tech Badge */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="flex flex-wrap gap-4 font-mono text-xs mb-12"
             >
                {project.stack.split(', ').map(tag => (
                   <span key={tag} className="border border-white/20 px-3 py-1 rounded-full">{tag}</span>
                ))}
            </motion.div>

            {/* Action Buttons */}
            {(project.githubUrl || project.downloadUrl) && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap gap-4 mb-24"
                >
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 border border-white/20 px-6 py-3 hover:bg-white hover:text-black hover:border-white transition-all">
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                             <span className="font-mono text-xs tracking-widest">GITHUB_REPO</span>
                        </a>
                    )}
                    {project.downloadUrl && (
                        <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white text-black border border-white px-6 py-3 hover:bg-neutral-200 transition-all">
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                             <span className="font-mono text-xs tracking-widest">DOWNLOAD_APP</span>
                        </a>
                    )}
                </motion.div>
            )}

            {/* Main Visual Placeholder */}
            {/* Main Visual */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
               className="w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/10 relative"
            >
                {project.images && project.images.length > 0 ? (
                    <div className="relative w-full h-full">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={project.images[0]} 
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center animate-pulse">
                        <span className="font-mono text-neutral-600">VISUAL_ASSET_LOADING</span>
                    </div>
                )}
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
                    <h2 className="text-4xl md:text-8xl font-bold tracking-tighter group-hover:scale-105 transition-transform duration-500 inline-block">
                        {nextProject.title}
                    </h2>
                 </div>
              </div>
          </Link>
      </section>

    </main>
  );
}
