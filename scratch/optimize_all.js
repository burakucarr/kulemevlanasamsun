const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetImages = [
    { src: 'public/images/DSCF3496.JPG', dest: 'public/images/DSCF3496.webp', width: 2000 },
    { src: 'public/images/hero-vertical.JPG', dest: 'public/images/hero-vertical.webp', width: 1200 },
    { src: 'public/images/hero-bg.JPG', dest: 'public/images/hero-bg.webp', width: 1920 },
    { src: 'public/images/hero-interior.JPG', dest: 'public/images/hero-interior.webp', width: 1920 },
    { src: 'public/images/products/pastalar.JPG', dest: 'public/images/products/pastalar.webp', width: 1200 },
    { src: 'public/images/products/ekler.JPG', dest: 'public/images/products/ekler.webp', width: 1200 },
    { src: 'public/images/products/baklava.JPG', dest: 'public/images/products/baklava.webp', width: 1200 },
    { src: 'public/images/products/firin.JPG', dest: 'public/images/products/firin.webp', width: 1200 },
    { src: 'public/images/products/kurabiye.JPG', dest: 'public/images/products/kurabiye.webp', width: 1200 },
];

async function runOptimization() {
    console.log('--- Resim Optimizasyonu Başlatıldı ---');
    for (const img of targetImages) {
        if (fs.existsSync(img.src)) {
            const statsBefore = fs.statSync(img.src);
            await sharp(img.src)
                .rotate()
                .resize(img.width, null, { withoutEnlargement: true })
                .webp({ quality: 82, effort: 6 })
                .toFile(img.dest);
            const statsAfter = fs.statSync(img.dest);
            console.log(`${path.basename(img.src)}: ${(statsBefore.size / (1024*1024)).toFixed(2)}MB -> ${path.basename(img.dest)}: ${(statsAfter.size / 1024).toFixed(2)}KB`);
        }
    }
    console.log('--- İşlem Tamamlandı ---');
}

runOptimization().catch(console.error);
