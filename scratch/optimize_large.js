const sharp = require('sharp');
const fs = require('fs');

async function optimize() {
    const input = 'public/images/DSCF3496.JPG';
    const output = 'public/images/DSCF3496.webp';
    
    const statsBefore = fs.statSync(input);
    
    await sharp(input)
        .resize(2000) // Even at 2000px width (huge), it will be small
        .webp({ quality: 85, effort: 6 })
        .toFile(output);
        
    const statsAfter = fs.statSync(output);
    
    console.log(`Original JPG: ${(statsBefore.size / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Optimized WebP: ${(statsAfter.size / 1024).toFixed(2)} KB`);
}

optimize().catch(console.error);
