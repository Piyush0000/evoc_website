const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ARHAM\\.gemini\\antigravity-ide\\brain\\a1d60860-5237-4062-8dcc-c0c2b797678e';
const destDir = 'd:\\evoc_website\\public\\images\\impact';

const files = fs.readdirSync(srcDir);
const jpgFiles = files.filter(f => f.endsWith('.jpg'));

(async () => {
  for (const file of jpgFiles) {
    let baseName = file.replace(/\_\d+\.jpg$/, '');
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, `${baseName}.webp`);
    
    console.log(`Converting ${file} -> ${baseName}.webp`);
    try {
      await sharp(srcPath)
        .webp({ quality: 80 })
        .toFile(destPath);
      console.log(`Success: ${destPath}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
})();
