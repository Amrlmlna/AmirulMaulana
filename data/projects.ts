export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  stack: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "vanguard",
    title: "VANGUARD",
    category: "Fintech Platform",
    stack: "React, Node.js, WebGL",
    year: "2024",
    description: "A high-performance trading dashboard built for the next generation of investors. It combines real-time data visualization with a cinematic, highly interactive user interface.",
    challenge: "Render millions of data points in real-time without compromising the 60fps frame rate on low-end devices.",
    solution: "Custom WebGL instancing pipeline and a dedicated WebSocket layer for delta-compressed data transmission.",
    images: ["/placeholder/vanguard-1.jpg", "/placeholder/vanguard-2.jpg"],
  },
  {
    id: "02",
    slug: "nocturne",
    title: "NOCTURNE",
    category: "Fashion E-commerce",
    stack: "Next.js, Shopify, GLSL",
    year: "2024",
    description: "An immersive e-commerce experience for an avant-garde fashion brand. The site treats every product as a digital sculpture.",
    challenge: "Integrate 3D product previews seamlessly into a headless Shopify checkout flow.",
    solution: "Next.js App Router for dynamic caching and a custom R3F viewer with GLSL noise transitions.",
    images: ["/placeholder/nocturne-1.jpg", "/placeholder/nocturne-2.jpg"],
  },
  {
    id: "03",
    slug: "aether",
    title: "AETHER",
    category: "AI Dashboard",
    stack: "Vue 3, Three.js, Python",
    year: "2023",
    description: "Visualizing neural network training processes in a 3D environment. Making the black box of AI transparent.",
    challenge: "Visualize complex high-dimensional tensors in an intuitive 3D space.",
    solution: "Dimensionality reduction algorithms running client-side via WebAssembly, rendered in Three.js.",
    images: ["/placeholder/aether-1.jpg"],
  },
  {
    id: "04",
    slug: "echoes",
    title: "ECHOES",
    category: "Interactive Archive",
    stack: "SvelteKit, D3.js",
    year: "2023",
    description: "A digital museum archiving lost audio fragments from the early internet.",
    challenge: "Create a spatial audio navigation system using only the DOM.",
    solution: "Web Audio API analysis node coupled with D3.js force-directed graphs.",
    images: ["/placeholder/echoes-1.jpg"],
  },
];
