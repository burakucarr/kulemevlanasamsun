const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Burak\\OneDrive\\Desktop\\resimkule';
const destDir = 'public/images/products';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const imagesToCopy = {
    'DSCF3505.JPG': 'pastalar.webp',
    'DSCF3551.JPG': 'ekler.webp',
    'DSCF3571.JPG': 'baklava.webp',
    'DSCF3532.JPG': 'firin.webp',
    'DSCF3618.JPG': 'kurabiye.webp',
    'DSCF3496.JPG': '../../DSCF3496.webp' // Special case for background
};

async function processImages() {
    for (const [srcName, destName] of Object.entries(imagesToCopy)) {
        const srcPath = path.join(srcDir, srcName);
        const destPath = path.join(destDir, destName);
        
        console.log(`Processing ${srcName}...`);
        
        const pipeline = sharp(srcPath);
        
        if (srcName === 'DSCF3496.JPG') {
            pipeline.rotate(-90); // Manual rotate for background
        } else {
            pipeline.rotate(); // Auto-rotate for others
        }
        
        await pipeline
            .resize(srcName === 'DSCF3496.JPG' ? 2560 : 1200, null, { withoutEnlargement: true })
            .webp({ quality: 90 })
            .toFile(destPath);
            
        console.log(`Saved ${destPath}`);
    }
}

processImages().catch(console.error);
