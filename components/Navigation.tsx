"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof window === "undefined") return;

    // Only apply hide logic on Home page where the sequence exists
    if (pathname !== "/") {
        setIsVisible(true);
        return;
    }

    // Logic: Hide during RevealSequence (approx 100vh to 600vh)
    const heroHeight = window.innerHeight;
    const sequenceEnd = heroHeight * 6; // Hero (1) + Sequence (5)
    
    const isInSequence = latest > heroHeight - 100 && latest < sequenceEnd - 100;
    
    if (isOpen) {
        setIsVisible(true);
    } else {
        setIsVisible(!isInSequence);
    }
  });

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-50 text-white mix-blend-difference hover:opacity-70 transition-opacity"
        aria-label="Open Menu"
      >
        <svg
          width="60"
          height="20"
          viewBox="0 0 60 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="2" fill="currentColor" />
          <rect y="18" width="60" height="2" fill="currentColor" />
        </svg>
      </motion.button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-[60] flex flex-col justify-between p-8 md:p-16 text-white"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
                <div className="font-mono text-sm text-neutral-500">
                    [NAVIGATION_SYSTEM]
                </div>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="hover:opacity-70 transition-opacity"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="white" strokeWidth="2" />
                        <path d="M6 6L18 18" stroke="white" strokeWidth="2" />
                    </svg>
                </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-4">
                <MenuLink href="/" index="01" label="HOME" onClick={() => setIsOpen(false)} />
                <MenuLink href="/#about" index="02" label="ABOUT" onClick={() => setIsOpen(false)} />
                <MenuLink href="/#work" index="03" label="SELECTED WORKS" onClick={() => setIsOpen(false)} />
                <MenuLink href="/#contact" index="04" label="CONTACT" onClick={() => setIsOpen(false)} />
            </nav>

            {/* Footer */}
            <div className="flex justify-between items-end font-mono text-xs text-neutral-500">
                <div>
                    BASED IN INDONESIA<br/>
                    AVAILABLE FOR GLOBAL WORK
                </div>
                <div>
                    &copy; 2026
                </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuLink({ href, index, label, onClick }: { href: string; index: string; label: string; onClick: () => void }) {
    return (
        <Link 
            href={href} 
            onClick={onClick}
            className="group flex items-baseline gap-4 text-4xl md:text-7xl font-bold tracking-tighter hover:text-neutral-400 transition-colors"
        >
            <span className="text-xs md:text-sm font-mono text-neutral-600 group-hover:text-white transition-colors">
                /{index}
            </span>
            <span>{label}</span>
        </Link>
    )
}
