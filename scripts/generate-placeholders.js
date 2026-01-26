const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../public/sequence');
const FRAME_COUNT = 150;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

for (let i = 1; i <= FRAME_COUNT; i++) {
  const frameNum = i.toString().padStart(4, '0');
  const fileName = `frame-${frameNum}.svg`; // Using SVG for placeholder
  
  // High contrast placeholder
  const svgContent = `
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#111" />
  <text x="50%" y="50%" font-family="monospace" font-size="100" fill="#333" text-anchor="middle" dominant-baseline="middle">
    ${frameNum}
  </text>
  <circle cx="50%" cy="50%" r="${(i / FRAME_COUNT) * 400}" stroke="#333" stroke-width="2" fill="none" />
</svg>
  `.trim();

  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), svgContent);
}

console.log(`Generated ${FRAME_COUNT} frames in ${OUTPUT_DIR}`);
