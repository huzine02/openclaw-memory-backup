const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const FFMPEG = 'C:\\Users\\huzine\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.0.1-full_build\\bin\\ffmpeg.exe';
const outDir = 'C:\\Users\\huzine\\.openclaw\\workspace\\tiktok-demo';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const slides = [
  { lines: ['Seche 10 Semaines', 'TikTok Content Publishing', 'API Demo'], bg: '0x0F2C59', dur: 3 },
  { lines: ['Step 1 - OAuth Authentication', '', 'User logs into TikTok', 'and authorizes our app', 'Scope - video.publish'], bg: '0x1a1a2e', dur: 4 },
  { lines: ['Step 2 - Video Generation', '', 'Our system generates', 'educational nutrition videos', 'from 30 blog-based scripts'], bg: '0x16213e', dur: 4 },
  { lines: ['Step 3 - Auto Publish', '', 'Videos are uploaded via', 'POST /v2/video/publish', 'with caption and hashtags'], bg: '0x0f3460', dur: 4 },
  { lines: ['Content Examples', '', '1. Deficit calorique apres 40 ans', '2. 5 erreurs de seche', '3. Prediabete les chiffres chocs', '4. Menu seche 1800 kcal'], bg: '0x00B894', dur: 5 },
  { lines: ['Live Results', '', '4 videos published', '1030+ views in first day', 'Account - seche10semaines'], bg: '0x059669', dur: 4 },
  { lines: ['Thank you!', '', 'seche10semaines.fr', 'contact@seche10semaines.fr'], bg: '0x0F2C59', dur: 3 },
];

const slideFiles = [];
for (let i = 0; i < slides.length; i++) {
  const s = slides[i];
  const outFile = path.join(outDir, `slide_${i}.mp4`);
  
  // Build drawtext filters for each line
  const totalHeight = s.lines.length * 42;
  const startY = Math.floor((720 - totalHeight) / 2);
  const filters = s.lines.map((line, j) => {
    if (line === '') return null;
    const escaped = line.replace(/:/g, '\\:').replace(/'/g, '');
    const y = startY + j * 42;
    return `drawtext=text='${escaped}':fontcolor=white:fontsize=30:x=(w-text_w)/2:y=${y}`;
  }).filter(Boolean).join(',');
  
  const cmd = `"${FFMPEG}" -y -f lavfi -i color=c=${s.bg}:s=1280x720:d=${s.dur} -vf "${filters}" -c:v libx264 -pix_fmt yuv420p -preset ultrafast "${outFile}"`;
  try {
    execSync(cmd, { stdio: 'pipe', timeout: 30000 });
    slideFiles.push(outFile);
    console.log(`Slide ${i} OK`);
  } catch (e) {
    console.error(`Slide ${i} FAILED:`, e.stderr?.toString().substring(0, 300));
  }
}

// Concat
const concatFile = path.join(outDir, 'concat.txt');
fs.writeFileSync(concatFile, slideFiles.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));

const final = path.join(outDir, 'tiktok-api-demo.mp4');
try {
  execSync(`"${FFMPEG}" -y -f concat -safe 0 -i "${concatFile}" -c copy "${final}"`, { stdio: 'pipe', timeout: 30000 });
  console.log(`\nDone: ${final}`);
  // Get file size
  const stats = fs.statSync(final);
  console.log(`Size: ${(stats.size / 1024 / 1024).toFixed(1)} MB`);
} catch (e) {
  console.error('Concat FAILED:', e.stderr?.toString().substring(0, 300));
}
