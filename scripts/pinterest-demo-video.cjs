// Generate a Pinterest API demo video with ffmpeg (text slides + transitions)
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = 'C:/Users/huzine/.openclaw/workspace/pinterest-demo';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const slides = [
  { text: 'Seche 10 Semaines\nPinterest API Integration\nDemo Video', duration: 3, bg: '#0F2C59', fg: 'white' },
  { text: 'Step 1: User Authentication\n\nOur app uses Pinterest OAuth 2.0\nto authenticate users securely.\n\nRedirect URI:\nhttps://seche10semaines.fr/auth/pinterest/callback', duration: 5, bg: '#1a1a2e', fg: 'white' },
  { text: 'Step 2: User Authorizes Access\n\nThe user logs into Pinterest\nand grants permission for:\n- boards:read & boards:write\n- pins:read & pins:write', duration: 5, bg: '#16213e', fg: 'white' },
  { text: 'Step 3: Token Exchange\n\nAfter authorization, we receive\nan auth code and exchange it\nfor an access token via\nPOST /v5/oauth/token', duration: 5, bg: '#0f3460', fg: 'white' },
  { text: 'Main Feature: Auto-Publish Pins\n\nOur nutrition blog has 63+ articles.\nWe automatically create pins\nwith article images, descriptions,\nand links back to our site.', duration: 5, bg: '#00B894', fg: 'white' },
  { text: 'Pin Creation Flow:\n\n1. Select blog article\n2. Generate pin title & description\n3. POST /v5/pins with image URL\n4. Pin appears on user board\n5. Links back to seche10semaines.fr', duration: 6, bg: '#059669', fg: 'white' },
  { text: 'Board Organization:\n\n- Seche et perte de gras\n- Sante metabolique\n- Recettes et plans repas\n\nPins are sorted by category\nautomatically.', duration: 5, bg: '#047857', fg: 'white' },
  { text: 'Thank you!\n\nseche10semaines.fr\nPinterest: @huzinepro\n\nContact: contact@seche10semaines.fr', duration: 4, bg: '#0F2C59', fg: 'white' },
];

// Generate each slide as an image using ffmpeg
const slideFiles = [];
for (let i = 0; i < slides.length; i++) {
  const s = slides[i];
  const outFile = path.join(outDir, `slide_${i}.png`);
  const escaped = s.text.replace(/'/g, "'\\''").replace(/\n/g, '\\n');
  
  const cmd = `ffmpeg -y -f lavfi -i color=c=${s.bg.replace('#', '0x')}:s=1280x720:d=1 -vframes 1 -vf "drawtext=text='${escaped}':fontcolor=${s.fg}:fontsize=32:x=(w-text_w)/2:y=(h-text_h)/2:line_spacing=12" "${outFile}"`;
  
  try {
    execSync(cmd, { stdio: 'pipe' });
    slideFiles.push({ file: outFile, duration: s.duration });
    console.log(`Slide ${i} created`);
  } catch (e) {
    console.error(`Slide ${i} failed:`, e.message);
  }
}

// Create concat file
const concatFile = path.join(outDir, 'concat.txt');
let concatContent = '';
for (const s of slideFiles) {
  concatContent += `file '${s.file.replace(/\\/g, '/')}'\nduration ${s.duration}\n`;
}
// Repeat last for proper ending
if (slideFiles.length > 0) {
  concatContent += `file '${slideFiles[slideFiles.length - 1].file.replace(/\\/g, '/')}'\n`;
}
fs.writeFileSync(concatFile, concatContent);

// Combine into video
const finalVideo = path.join(outDir, 'pinterest-demo.mp4');
try {
  execSync(`ffmpeg -y -f concat -safe 0 -i "${concatFile}" -vf "fps=30" -c:v libx264 -pix_fmt yuv420p -preset fast "${finalVideo}"`, { stdio: 'pipe' });
  console.log(`\nVideo created: ${finalVideo}`);
} catch (e) {
  console.error('Video creation failed:', e.message);
}
