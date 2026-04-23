export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  subtitle: string;
  coverImage: string;
  color: string;
  accentColor: string;
  emoji: string;
  images: ProductImage[];
  delay: number;
  speed: number;
  tilt: number;
}

export const categories: ProductCategory[] = [
  {
    id: "ozel-pastalar",
    name: "Özel Pastalar",
    subtitle: "Günlük taze, el yapımı butik pastalar",
    coverImage: "/images/products/pastalar.webp",
    color: "#D32F2F",
    accentColor: "rgba(211,47,47,0.08)",
    emoji: "🍓",
    delay: 0,
    speed: 7,
    tilt: -3,
    images: [
      { src: "/images/products/pastalar.webp", alt: "Özel butik pastalar" },
    ],
  },
  {
    id: "ekler-tatlilar",
    name: "Ekler & Tatlılar",
    subtitle: "Profiterol, ekler ve taze dilim tatlılar",
    coverImage: "/images/products/ekler.webp",
    color: "#C5A059",
    accentColor: "rgba(197,160,89,0.08)",
    emoji: "🍮",
    delay: 0.8,
    speed: 8,
    tilt: 2,
    images: [
      { src: "/images/products/ekler.webp", alt: "Taze ekler ve tatlı çeşitleri" },
    ],
  },
  {
    id: "geleneksel-baklava",
    name: "Geleneksel Baklava",
    subtitle: "Antep fıstıklı ve midye baklava",
    coverImage: "/images/products/baklava.webp",
    color: "#799351",
    accentColor: "rgba(121,147,81,0.08)",
    emoji: "🌿",
    delay: 0.4,
    speed: 9,
    tilt: -1,
    images: [
      { src: "/images/products/baklava.webp", alt: "Geleneksel Antep baklavası" },
    ],
  },
  {
    id: "firin-kahvalti",
    name: "Fırın & Kahvaltı",
    subtitle: "Taze kruvasan ve fırın ürünleri",
    coverImage: "/images/products/firin.webp",
    color: "#A0522D",
    accentColor: "rgba(160,82,45,0.08)",
    emoji: "🥐",
    delay: 1.2,
    speed: 7.5,
    tilt: 3,
    images: [
      { src: "/images/products/firin.webp", alt: "Fırından taze çıtır kruvasanlar" },
    ],
  },
  {
    id: "butik-kurabiyeler",
    name: "Butik & Çikolata",
    subtitle: "El yapımı kurabiyeler ve özel çikolatalar",
    coverImage: "/images/products/kurabiye.webp",
    color: "#5D4037",
    accentColor: "rgba(93,64,55,0.08)",
    emoji: "🍫",
    delay: 2,
    speed: 8.5,
    tilt: -2,
    images: [
      { src: "/images/products/kurabiye.webp", alt: "Butik el yapımı kurabiyeler" },
    ],
  },
];
