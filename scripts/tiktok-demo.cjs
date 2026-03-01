const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const FFMPEG = 'C:\\Users\\huzine\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.0.1-full_build\\bin\\ffmpeg.exe';
const outDir = 'C:\\Users\\huzine\\.openclaw\\workspace\\tiktok-demo';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const slides = [
  { text: 'Seche 10 Semaines\\nTikTok Content Publishing\\nAPI Demo', bg: '0x0F2C59', dur: 3 },
  { text: 'Step 1: OAuth Authentication\\n\\nUser logs into TikTok\\nand authorizes our app\\nScope: video.publish', bg: '0x1a1a2e', dur: 4 },
  { text: 'Step 2: Video Generation\\n\\nOur system generates\\neducational nutrition videos\\nfrom 30 blog-based scripts', bg: '0x16213e', dur: 4 },
  { text: 'Step 3: Auto-Publish\\n\\nVideos are uploaded via\\nPOST /v2/video/publish\\nwith caption and hashtags', bg: '0x0f3460', dur: 4 },
  { text: 'Content Examples\\n\\n1. Deficit calorique apres 40 ans\\n2. 5 erreurs de seche\\n3. Prediabete: les chiffres chocs\\n4. Menu seche 1800 kcal', bg: '0x00B894', dur: 5 },
  { text: 'Live Results\\n\\n4 videos published\\n1030+ views in first day\\nAccount: @seche10semaines', bg: '0x059669', dur: 4 },
  { text: 'Thank you!\\n\\nseche10semaines.fr\\ncontact@seche10semaines.fr', bg: '0x0F2C59', dur: 3 },
];

const slideFiles = [];
for (let i = 0; i < slides.length; i++) {
  const s = slides[i];
  const outFile = path.join(outDir, `slide_${i}.mp4`);
  const cmd = `"${FFMPEG}" -y -f lavfi -i color=c=${s.bg}:s=1280x720:d=${s.dur} -vf "drawtext=text='${s.text}':fontcolor=white:fontsize=30:x=(w-text_w)/2:y=(h-text_h)/2:line_spacing=10:font=Arial" -c:v libx264 -pix_fmt yuv420p -preset ultrafast "${outFile}"`;
  try {
    execSync(cmd, { stdio: 'pipe', timeout: 30000 });
    slideFiles.push(outFile);
    console.log(`Slide ${i} OK`);
  } catch (e) {
    console.error(`Slide ${i} FAILED:`, e.stderr?.toString().substring(0, 200));
  }
}

// Concat file
const concatFile = path.join(outDir, 'concat.txt');
fs.writeFileSync(concatFile, slideFiles.map(f => `file '${f.replace(/\\/g, '/')}'`).join('\n'));

// Final video
const final = path.join(outDir, 'tiktok-api-demo.mp4');
try {
  execSync(`"${FFMPEG}" -y -f concat -safe 0 -i "${concatFile}" -c copy "${final}"`, { stdio: 'pipe', timeout: 30000 });
  console.log(`\nDone: ${final}`);
} catch (e) {
  console.error('Concat FAILED:', e.stderr?.toString().substring(0, 300));
}
