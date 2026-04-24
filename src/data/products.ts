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
    coverImage: "/images/products/ozel-pastalar/SaveClip.App_590028392_17883084984422821_3767056307367947246_n.jpg",
    color: "#D32F2F",
    accentColor: "rgba(211,47,47,0.08)",
    emoji: "🍓",
    delay: 0,
    speed: 7,
    tilt: -3,
    images: [
      { src: "/images/products/ozel-pastalar/490050663_17853985410422821_7303165139907897190_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_490452031_17854248852422821_8548534260366819801_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_490743457_17854099698422821_4187354030451924821_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_491528301_17855872080422821_6046623210164363384_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_523262680_17867706279422821_2674668591482809091_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_523449272_17867706222422821_6495510505961476825_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_553366270_17875191720422821_2377806817688649539_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_554190583_17875191321422821_874873915527780982_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_556106145_17875556520422821_1642320621460907840_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_572138948_17878665126422821_5065998991620406529_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_582588984_17880999507422821_3819213066559741059_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_590028392_17883084984422821_3767056307367947246_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_602948970_17884836735422821_3361864811543741959_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_606996469_17885535705422821_5054970939280122249_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_622315515_17890050882422821_8181122592771459229_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_626798724_17890455741422821_6012669632241394517_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_633370552_17891955177422821_3816781503488015459_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_671272198_17901886233422821_2757262807411359893_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/SaveClip.App_671720531_17901772122422821_5351181935955865123_n.jpg", alt: "İçerik" },
      { src: "/images/products/ozel-pastalar/_Pastasever__AtakumPastane___KuleMevlana.jpg", alt: "İçerik" },
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
