"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const education = [
  {
    institution: "Universitas Tadulako",
    degree: "S1 Teknik Informatika",
    year: "2023 — Present",
    location: "Palu, Indonesia",
  },
];

const certifications = [
  {
    issuer: "Google Cloud",
    name: "Google UX Design Professional Certificate",
    year: "2023",
    link: "/cert/Google-cert.pdf",
  },
  {
    issuer: "Meta",
    name: "Meta Full Stack Developer Professional Certificate",
    year: "2023",
    link: "/cert/Meta-cert.pdf",
  },
  {
    issuer: "IBM SkillsBuild",
    name: "Artificial Intelligence Fundamentals",
    year: "2023",
    link: "/cert/Completion_Certificate_SkillsBuild1.pdf",
  },
  {
    issuer: "Codecademy",
    name: "Cloud Computing Basics",
    year: "2022",
    link: "/cert/CodeCademy1.pdf",
  },
];

export default function Credentials() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section className="bg-neutral-950 py-20 md:py-32 px-4 md:px-12 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24 pb-8 border-b border-white/10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">CREDENTIALS</h2>
            <span className="font-mono text-sm text-neutral-500">[ARCHIVE.02]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {/* Education */}
            <div>
                <h3 className="font-mono text-neutral-500 mb-12 flex items-center gap-4">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    EDUCATION
                </h3>
                <div className="space-y-12">
                    {education.map((edu, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="flex justify-between items-baseline mb-2">
                                <h4 className="text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors">{edu.institution}</h4>
                                <span className="font-mono text-xs text-neutral-500">{edu.year}</span>
                            </div>
                            <p className="text-neutral-400 mb-1">{edu.degree}</p>
                            <p className="font-mono text-xs text-neutral-600 uppercase">{edu.location}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div>
                <h3 className="font-mono text-neutral-500 mb-12 flex items-center gap-4">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    CERTIFICATES
                </h3>
                <div className="space-y-12">
                    {certifications.map((cert, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group border-b border-white/5 pb-8 last:border-0 relative"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-bold text-white group-hover:text-neutral-300 transition-colors max-w-[70%]">{cert.name}</h4>
                                {cert.link && (
                                    <button 
                                        onClick={() => setSelectedPdf(cert.link)}
                                        className="font-mono text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 hover:bg-white hover:text-black transition-colors"
                                    >
                                        [INSPECT]
                                    </button>
                                )}
                            </div>
                            <div className="flex justify-between font-mono text-xs text-neutral-500">
                                <span>{cert.issuer}</span>
                                <span>{cert.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPdf && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
                onClick={() => setSelectedPdf(null)}
            >
                <motion.div 
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                    className="w-full max-w-5xl h-[80vh] bg-neutral-900 border border-white/20 relative flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b border-white/10">
                        <span className="font-mono text-xs text-neutral-400">DOCUMENT_VIEWER_V1.0</span>
                        <button onClick={() => setSelectedPdf(null)} className="font-mono text-xs hover:text-white text-neutral-500 transition-colors">
                            [CLOSE_X]
                        </button>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-white">
                        <iframe src={selectedPdf} className="w-full h-full" title="Certificate PDF" />
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
