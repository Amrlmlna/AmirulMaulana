"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function WorkSection() {
  return (
    <section className="min-h-screen bg-neutral-950 py-20 md:py-32 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-white/20 pb-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SELECTED WORKS</h2>
          <span className="font-mono text-sm text-neutral-500">[ARCHIVE.01]</span>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <Link key={index} href={`/work/${project.slug}`} className="block">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative border-b border-white/10 py-12 transition-colors hover:bg-white/5"
                >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:pl-4 transition-all duration-300">
                    {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-8 md:gap-16 font-mono text-xs md:text-sm text-neutral-500">
                    <span className="w-32">{project.category}</span>
                    <span className="w-48 hidden md:block">{project.stack}</span>
                    <span>{project.year}</span>
                    </div>
                </div>
                
                {/* Hover Reveal */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-2xl">↗</span>
                </div>
                </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
