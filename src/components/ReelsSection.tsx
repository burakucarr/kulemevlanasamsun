"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Instagram icon ─────────────────────────── */
const InstagramIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

/* ─── Reels data ─────────────────────────────── */
const REELS = [
  {
    src: "/videos/reels.mp4",
    caption: "🏬 Kule Mevlana'nın mutfağından taze lezzetler...",
    tag: "#kulemevlana #samsun #pasta",
    label: "Vitrin Turu",
  },
  {
    src: "/videos/reels2.mp4",
    caption: "✨ Günlük taze hamur işleri ve özel pastalarımız...",
    tag: "#tazefirin #samsunlezzet #kulemevlana",
    label: "Fırın Anı",
  },
];

/* ─── Single video player ────────────────────── */
function VideoPlayer({
  reel,
  active,
}: {
  reel: (typeof REELS)[0];
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-play when this slide is active
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      video.currentTime = 0;
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
      setPlaying(false);
      setProgress(0);
    }
  }, [active]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const update = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100);
    };
    video.addEventListener("timeupdate", update);
    return () => video.removeEventListener("timeupdate", update);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setPlaying(true); }
    else { video.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <>
      {/* Video */}
      <video
        ref={videoRef}
        src={reel.src}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.97) saturate(1.08)" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none z-10" />

      {/* Progress bar */}
      <div className="absolute top-8 left-4 right-4 h-0.5 bg-white/20 rounded-full z-20 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #C5A059, #D32F2F)",
          }}
        />
      </div>

      {/* Top header */}
      <div className="absolute top-10 left-0 right-0 flex items-center justify-between px-4 z-20">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-black text-white"
            style={{ borderColor: "#C5A059", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)" }}
          >
            K
          </div>
          <span className="text-white text-[11px] font-bold drop-shadow">kulemevlana</span>
        </div>
        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <div className={`w-1.5 h-1.5 rounded-full ${playing ? "bg-red-400 animate-pulse" : "bg-white/50"}`} />
          <span className="text-white text-[9px] font-black tracking-widest">
            {playing ? "CANLI" : "REELS"}
          </span>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        <p className="text-white text-[11px] font-medium mb-1 leading-snug drop-shadow">
          {reel.caption}
        </p>
        <p className="text-yellow-300 text-[10px] font-medium mb-3">{reel.tag}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/35 transition-colors"
            >
              {playing ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/35 transition-colors"
            >
              {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>
          <a
            href="https://instagram.com/kulemevlana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/25 px-3 py-1.5 rounded-full text-white text-[10px] font-black tracking-wide hover:bg-white/35 transition-colors"
          >
            <InstagramIcon size={11} />
            Takip Et
          </a>
        </div>
      </div>
    </>
  );
}

/* ─── Main section ───────────────────────────── */
export default function ReelsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-20% 0px" });

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, +1 right

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const prev = () => goTo((current - 1 + REELS.length) % REELS.length);
  const next = () => goTo((current + 1) % REELS.length);

  // Pause everything when out of view
  useEffect(() => {
    if (!isInView) {
      // VideoPlayer handles its own pause via `active` prop
    }
  }, [isInView]);

  const variants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0, scale: 0.96 }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FDFDF5 0%, #F5F0E8 50%, #FDFDF5 100%)" }}
    >
      {/* Ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(197,160,89,0.5) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

          {/* ── Left text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.a
              href="https://instagram.com/kulemevlana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border border-black/8 bg-white/70 backdrop-blur-md shadow-sm cursor-pointer"
            >
              <InstagramIcon size={15} className="text-accent" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-primary/70">@kulemevlana</span>
            </motion.a>

            <h2 className="font-playfair font-black text-4xl md:text-6xl xl:text-7xl text-primary mb-4 md:mb-6 leading-tight tracking-tighter">
              Dükkanın{" "}
              <span className="italic font-medium" style={{ color: "#C5A059" }}>
                İçinden
              </span>
            </h2>

            <p className="text-primary/55 text-base md:text-xl max-w-md mx-auto lg:mx-0 font-medium leading-relaxed mb-8 md:mb-10">
              Taze ürünlerimizin hazırlandığı o büyülü anları bir Reels tadında sizinle paylaşıyoruz. Her gün taze, her an aşkla.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 md:gap-8 justify-center lg:justify-start mb-8 md:mb-10">
              {[
                { label: "Yıllık Deneyim", value: "50+" },
                { label: "Günlük Taze Ürün", value: "40+" },
                { label: "Mutlu Müşteri", value: "∞" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-playfair font-black text-2xl md:text-4xl" style={{ color: "#C5A059" }}>{s.value}</p>
                  <p className="text-primary/40 text-[9px] md:text-[10px] font-black tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Reel labels */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {REELS.map((r, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase border transition-all duration-300"
                  style={
                    i === current
                      ? { background: "#C5A059", color: "#fff", borderColor: "#C5A059" }
                      : { background: "transparent", color: "#9a7a4a", borderColor: "#C5A059/40" }
                  }
                >
                  {r.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Right — phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-shrink-0 relative"
          >
            {/* Glow */}
            <div
              className="absolute inset-[-20%] rounded-[50%] blur-[60px] opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(197,160,89,0.6) 0%, transparent 65%)" }}
            />

            {/* Phone shell */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[240px] sm:w-[280px] md:w-[320px]"
            >
              <div
                className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-10px_rgba(59,30,20,0.35),0_0_0_8px_white,0_0_0_10px_rgba(197,160,89,0.35)]"
                style={{ aspectRatio: "9/19.5" }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-28 h-7 bg-black rounded-b-2xl flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/15" />
                  <div className="w-10 h-1.5 rounded-full bg-white/10" />
                </div>

                {/* Animated video switcher */}
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <VideoPlayer reel={REELS[current]} active={isInView} />
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next arrows — inside phone */}
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition"
                >
                  <ChevronRight size={14} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
                  {REELS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? "20px" : "6px",
                        height: "6px",
                        background: i === current ? "#C5A059" : "rgba(255,255,255,0.4)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Side buttons (decorative) */}
              <div className="absolute right-[-4px] top-28 w-1 h-14 bg-white/60 rounded-l-sm" />
              <div className="absolute left-[-4px] top-20 w-1 h-8 bg-white/60 rounded-r-sm" />
              <div className="absolute left-[-4px] top-32 w-1 h-8 bg-white/60 rounded-r-sm" />
            </motion.div>

            {/* Badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-2 md:-right-10"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-white rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-black/5"
              >
                <p className="text-[10px] font-black tracking-widest uppercase text-primary/40">Günlük Taze</p>
                <p className="font-playfair font-black text-xl text-primary">Vitrin</p>
                <div className="flex gap-0.5 mt-1">
                  {["🍓","🍮","🌿","🥐","🍫"].map((e) => (
                    <span key={e} className="text-sm">{e}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-2 md:-left-12"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="bg-white rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-black/5"
              >
                <p className="text-[10px] font-black tracking-widest uppercase text-primary/40 mb-1">Konum</p>
                <p className="font-bold text-sm text-primary">📍 Atakum, Samsun</p>
              </motion.div>
            </motion.div>

            {/* Reel counter badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              className="absolute top-1/2 -right-8 md:-right-16 -translate-y-1/2"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg"
                style={{ background: "linear-gradient(135deg, #C5A059, #A07A30)" }}
              >
                {current + 1}/{REELS.length}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
