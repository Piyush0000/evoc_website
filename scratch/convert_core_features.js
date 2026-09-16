const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = 'd:\\evoc_website\\public\\images\\core-features';

const files = [
  'website_builder.jpg',
  'ads_tracker.jpg',
  'no_rto_cost_logistics.jpg',
  'ai_calling_agent.jpg',
  'one_click_checkout.jpg',
  'whatsapp_flows.jpg'
];

async function convert() {
  for (const file of files) {
    const src = path.join(dir, file);
    const dest = path.join(dir, file.replace('.jpg', '.webp'));
    console.log(`Converting ${file} to ${path.basename(dest)}...`);
    await sharp(src)
      .webp({ quality: 85 })
      .toFile(dest);
    const meta = await sharp(dest).metadata();
    console.log(`Done: ${path.basename(dest)} (${meta.width}x${meta.height})`);
  }
}

convert().catch(console.error);
