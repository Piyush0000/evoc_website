const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadsDir = 'C:\\Users\\ARHAM\\.gemini\\antigravity-ide\\brain\\a1d60860-5237-4062-8dcc-c0c2b797678e\\.user_uploaded';
const destDir = 'd:\\evoc_website\\public\\images\\problem-solution';

async function processImages() {
  const problemSrc = path.join(uploadsDir, 'media_1789539912044.jpg');
  const solutionSrc = path.join(uploadsDir, 'media_1789539912061.jpg');

  console.log('Converting Problem image...');
  await sharp(problemSrc)
    .webp({ quality: 85 })
    .toFile(path.join(destDir, 'problem-infographic.webp'));
  console.log('Problem image converted successfully.');

  console.log('Converting Solution image...');
  await sharp(solutionSrc)
    .webp({ quality: 85 })
    .toFile(path.join(destDir, 'solution-infographic.webp'));
  console.log('Solution image converted successfully.');

  const probMeta = await sharp(path.join(destDir, 'problem-infographic.webp')).metadata();
  const solMeta = await sharp(path.join(destDir, 'solution-infographic.webp')).metadata();

  console.log('Problem Infographic dimensions:', probMeta.width, 'x', probMeta.height);
  console.log('Solution Infographic dimensions:', solMeta.width, 'x', solMeta.height);
}

processImages().catch(console.error);
