"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

const TIPS_IDS = [
  '1cEWiAe3iBERhVtpznKnvjYxth36jTf9Z',
  '16qb6KSkLg9pXNyAbRbnTXnsFmy3pl6t1',
  '1YJzknhlbnJuxnoAHzgxjWhdfJLU4-SGM',
  '1R8nk4iTRDxVBMqSnCO4VLsD-FFWs0djo',
  '14fSooJRaNnkDVg-RtCUOviKDRR9b6t8b',
  '10E6DMmzq-iygRXPw-6-lyeZi64P1kgLO',
  '1sQoOKFDXRxpyr9fOPd9Gcv9D33H0jTxw',
  '1YPPzfRaHrAffEqUpHLyoeHG1IcDlhg4w',
  '17VcsdMCetj5J-202AJ-djjKzXKdO-ZqM',
  '13CTU_fBxnAhhiqWjeEG1HSZwi8GSJjD3',
  '1XLnshCYPDsoVrzdgSHUuVg6uaKJ42jNq',
  '1UH5etKzH9nL8exVvBY2k-ESfJXSpTsqw',
  '1yHzf5p9IMmfOWWTV4q1vB3G0MezS_2zw',
  '14qSyQBg85KUaQ0Sgt0ZRSbX2VaYcE1fm',
  '1R9Yyjd8oesQgw_dmFPy3e936EJItezLH',
  '1BJ2gZPrLOwXJj3pkk-tDoFK0xAsznbFC',
  '1G0Xw-L3pQZS3rBfi7MofLlByydmOZNDs',
  '1NNNfIH1RvZlhuXBCfJZHXgzMJCzVpQ90',
  '1vmg0UdMS2AXraWUlB1xTkZtLkm78qlw1',
  '1ywP1WJfAyzM-TD54wrPI-He1N3iy7Kv-',
  '1cwjXBuPjI9HMfDl87wkqQ3NrKMgun6Z8',
  '1PD8JyUyn61nlzsNm1baSqrDk8-T0q2V_',
  '1QENz8XaKqncz-a8G831txrJ3dnCryJ0t'
];

export default function VastuTips() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const INTERVAL = 5000;
  
  useEffect(() => {
    // Preload some images to mark as loaded
    const img = new Image();
    img.src = `https://drive.google.com/thumbnail?id=${TIPS_IDS[0]}&sz=w1200`;
    img.onload = () => setImagesLoaded(true);
    img.onerror = () => setImagesLoaded(true); // fall back to showing UI even if error
  }, []);

  useEffect(() => {
    if (!imagesLoaded || paused) return;

    let start = Date.now();
    let rAF: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setCurrent((c) => (c + 1) % TIPS_IDS.length);
        setProgress(0);
        start = Date.now();
      }
      rAF = requestAnimationFrame(tick);
    };

    rAF = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rAF);
  }, [current, paused, imagesLoaded]);

  const handleNext = () => {
    setCurrent((c) => (c + 1) % TIPS_IDS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrent((c) => (c - 1 + TIPS_IDS.length) % TIPS_IDS.length);
    setProgress(0);
  };

  return (
    <section id="tips" className="bg-gradient-to-br from-[var(--color-emerald-deep)] to-[var(--color-emerald-dark)] py-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-gradient-radial from-[rgba(26,122,67,0.12)] to-transparent pointer-events-none rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-[360px] h-[360px] bg-gradient-radial from-[rgba(201,168,76,0.07)] to-transparent pointer-events-none rounded-full blur-3xl"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-medium mb-3 block">
            Expert Wisdom
          </span>
          <h2 className="text-[var(--color-gold-light)] font-serif text-4xl md:text-5xl mb-4">Daily Vastu Tips</h2>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] mx-auto my-5"></div>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            Simple, practical wisdom to harmonise your space and energy - one tip at a time
          </p>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative w-full overflow-hidden rounded-2xl mt-14 shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,168,76,0.15)] aspect-[4/5] md:aspect-[16/9] max-h-[80vh] bg-[#020d07] select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {!imagesLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20 bg-[#020d07]">
              <RefreshCw className="text-[var(--color-gold)] animate-spin w-8 h-8" />
              <p className="text-[var(--color-gold)]/50 text-xs tracking-[0.18em] uppercase m-0">Loading tips...</p>
            </div>
          )}

          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={current}
              src={`https://drive.google.com/thumbnail?id=${TIPS_IDS[current]}&sz=w1200`}
              alt={`Vastu Tip ${current + 1}`}
              className="absolute inset-0 w-full h-full object-contain object-center"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[rgba(4,26,14,0.82)] border border-[rgba(201,168,76,0.4)] text-[var(--color-gold-light)] flex items-center justify-center backdrop-blur-md transition-all hover:bg-[rgba(13,92,48,0.92)] hover:border-[var(--color-gold)] hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[rgba(4,26,14,0.82)] border border-[rgba(201,168,76,0.4)] text-[var(--color-gold-light)] flex items-center justify-center backdrop-blur-md transition-all hover:bg-[rgba(13,92,48,0.92)] hover:border-[var(--color-gold)] hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {TIPS_IDS.map((_, i) => (
            <div
              key={i}
              onClick={() => { setCurrent(i); setProgress(0); }}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${i === current ? 'w-7 bg-[var(--color-gold)] border border-[var(--color-gold)]' : 'w-2 bg-[rgba(201,168,76,0.2)] border border-[rgba(201,168,76,0.3)]'}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="h-[2px] bg-white/5 rounded-sm mt-4 overflow-hidden relative">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold-light)] rounded-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-center mt-3 text-[0.7rem] tracking-[0.18em] text-white/30 uppercase">
          {current + 1} / {TIPS_IDS.length}
        </div>
        <div className="text-center mt-1 text-[0.66rem] text-[var(--color-gold)]/40 tracking-[0.1em] opacity-0 hover:opacity-100 transition-opacity">
          Hover to pause · Click arrows to navigate
        </div>
      </div>
    </section>
  );
}
