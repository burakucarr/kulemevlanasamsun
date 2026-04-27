const sharp = require('sharp');
const fs = require('fs');

async function optimize() {
    const input = 'public/images/hero-vertical.webp';
    const output = 'public/images/hero-vertical-optimized.webp';
    
    const statsBefore = fs.statSync(input);
    
    await sharp(input)
        .resize(1200) // Resize to a reasonable width for mobile/tablet
        .webp({ quality: 80, effort: 6 }) // Good quality but much better compression
        .toFile(output);
        
    const statsAfter = fs.statSync(output);
    
    console.log(`Original: ${(statsBefore.size / 1024).toFixed(2)} KB`);
    console.log(`Optimized: ${(statsAfter.size / 1024).toFixed(2)} KB`);
}

optimize().catch(console.error);
