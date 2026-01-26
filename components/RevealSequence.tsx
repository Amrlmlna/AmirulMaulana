"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, useSpring } from "framer-motion";

const FRAME_COUNT = 192;

export default function RevealSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          // Pad number with zeros to match 'ezgif-frame-001.jpg'
          const paddedIndex = i.toString().padStart(3, "0");
          img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
          img.onload = () => {
            resolve();
          };
          loadedImages[i - 1] = img;
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Canvas Drawing Logic
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    
    // Resize canvas to window size if needed (handling density)
    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== window.innerWidth * dpr || canvas.height !== window.innerHeight * dpr) {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    }
    
    // "Cover" fit logic
    // We want the image to cover the canvas
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    
    // Calculate aspect ratios
    // Assuming 1920x1080 for standard HD frames, or just use img.width/img.height
    // Check first loaded image dimensions if possible, but 16:9 is safe bet or just use dynamic
    const imgAspect = img.width / img.height;
    const canvasAspect = canvasWidth / canvasHeight;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      // Screen is wider than image (Landscape) -> Fit width, crop height
      // BUT if we just fit width, height might be too small?
      // "Cover" means the image must be AT LEAST the size of the container.
      // If canvasAspect > imgAspect, canvas is "more landscape" than image.
      // We must match canvasWidth. The height will be canvasWidth / imgAspect.
      // Since canvasAspect > imgAspect, (canvasWidth/canvasHeight) > (canvasWidth/renderHeight)
      // canvasHeight < renderHeight. So height is cropped. Correct.
      
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgAspect;
      offsetX = 0;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      // Screen is taller than image (Portrait) -> Fit height, crop width
      renderHeight = canvasHeight;
      renderWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll for "delay stop" effect
  // damping: strength of opposing force (higher = less oscillation, faster stop)
  // stiffness: strength of spring (higher = faster movement)
  // mass: heaviness (higher = slower start/stop)
  const smoothProgress = useTransform(
    useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    }).scrollYProgress,
    (v) => v
  );
  
  // Use a spring on the progress itself
  const springProgress = useSpring(scrollYProgress, {
      damping: 15,
      stiffness: 50,
      mass: 0.5,
      restDelta: 0.0001
  });

  const frameIndex = useTransform(springProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest)));
      requestAnimationFrame(() => drawFrame(idx));
    }
  });

  // Typography Animations
  // Text 1: "DESIGN"
  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.2, 0.3], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.05, 0.3], [50, -50]);

  // Text 2: "DEVELOP"
  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.5, 0.6], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.6], [50, -50]);

  // Text 3: "MAINTAIN"
  const text3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.8, 0.9], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.65, 0.9], [50, -50]);

  // Text 4: "REPEAT"
  const text4Opacity = useTransform(scrollYProgress, [0.9, 0.95, 0.98, 1], [0, 1, 1, 1]);
  
  // HUD Animations (Synced with words)
  const hud1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]); 
  const hud2Opacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const hud3Opacity = useTransform(scrollYProgress, [0.65, 0.9], [0, 1]);

  // Initial draw
  useEffect(() => {
    if (isLoaded) drawFrame(0);
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
         {!isLoaded && (
           <div className="absolute inset-0 flex items-center justify-center text-white/20 uppercase tracking-widest text-sm animate-pulse font-mono">
             [SYS.INIT] Loading Sequence...
           </div>
         )}
         <canvas ref={canvasRef} className="block w-full h-full object-cover" />
         
         <TextOverlay text="DESIGN" opacity={text1Opacity} y={text1Y} />
         <TextOverlay text="DEVELOP" opacity={text2Opacity} y={text2Y} />
         <TextOverlay text="MAINTAIN" opacity={text3Opacity} y={text3Y} />
         <TextOverlay text="REPEAT" opacity={text4Opacity} y={useTransform(scrollYProgress, [0.9, 1], [50, 0])} />

         {/* Technical HUD Layer */}
         <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between mix-blend-difference z-30">
            {/* Top Bar */}
            <div className="flex justify-between items-start font-mono text-xs md:text-sm text-white/70">
              <motion.div style={{ opacity: hud1Opacity }}>
                [ROLE] SOFTWARE DEVELOPER <br/>
                STATUS: AVAILABLE
              </motion.div>
              <div className="text-right">
                PROJECT: PORTFOLIO_V1 <br/>
                BUILD: PRODUCTION
              </div>
            </div>

            {/* Floating Code Snippets */}
             <motion.div style={{ opacity: hud2Opacity }} className="absolute pt-32 right-6 md:right-32 top-1/2 -translate-y-1/2 font-mono text-[8px] md:text-xs text-right text-white/50 block">
                <div className="md:hidden">&gt; 60fps / CANVAS_2D</div>
                <div className="hidden md:block">&gt; git commit -m "feat: high_performance"</div>
                <div className="hidden md:block">&gt; optimizing_render_loop()</div>
                <div className="hidden md:block">&gt; latency: 16.6ms (60fps)</div>
             </motion.div>

             <motion.div style={{ opacity: hud3Opacity }} className="absolute pb-32 left-6 md:left-32 top-1/2 -translate-y-1/2 font-mono text-[8px] md:text-xs text-left text-white/50 block">
                <div className="md:hidden">STACK: NEXT.JS / WEBGL</div>
                <div className="hidden md:block">import {'{'} Experience {'}'} from '@/career'</div>
                <div className="hidden md:block">await user.impression(true)</div>
                <div className="hidden md:block">return "QUALITY";</div>
             </motion.div>

            {/* Bottom Bar */}
            <div className="flex justify-between items-end font-mono text-xs md:text-sm text-white/50">
               <motion.div style={{ opacity: hud1Opacity }}>
                 SYSTEM: ONLINE
               </motion.div>
               <div>
                  V.1.0.0
               </div>
            </div>
         </div>
         
      </div>

       {/* Overlay Typography - Rendered above */}
    </div>
  );
}

// Helper component for text inside the sticky view
function TextOverlay({ opacity, y, text }: { opacity: any, y: any, text: string }) {
    return (
        <motion.h2 
            style={{ opacity, y }}
            className="absolute text-[12vw] font-bold text-white tracking-tighter leading-none select-none"
        >
            {text}
        </motion.h2>
    )
}

// Correction: I need to insert the text inside the sticky container to move with it or stay fixed relative to viewport
// The sticky container stays in viewport for the duration. So absolute centering inside it works.

