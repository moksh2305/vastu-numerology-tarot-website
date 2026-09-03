"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

import heroImg from '../assets/hero.jpg';

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 2.5, ease: "easeOut", delay: 0.2 });
    return controls.stop;
  }, [motionValue, value]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    'https://bhumishah.netlify.app/vastubg1.jpeg',
    'https://bhumishah.netlify.app/vastubg2.jpeg',
    'https://bhumishah.netlify.app/compass2.jpeg',
  ];

  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (particlesRef.current) {
      const container = particlesRef.current;
      container.innerHTML = '';
      for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = 8 + Math.random() * 14 + 's';
        p.style.animationDelay = Math.random() * 12 + 's';
        p.style.width = p.style.height = 1 + Math.random() * 2.5 + 'px';
        p.style.background =
          Math.random() > 0.7
            ? '#cc1f1f'
            : Math.random() > 0.5
            ? '#1a7a43'
            : '#C9A84C';
        container.appendChild(p);
      }
    }
  }, []);

  const MagneticButton = ({ children, className, href }: { children: React.ReactNode, className: string, href: string }) => {
    const btnRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.35;
        btnRef.current.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
      }
    };

    const handleMouseLeave = () => {
      if (btnRef.current) {
        btnRef.current.style.transform = '';
      }
    };

    return (
      <a
        href={href}
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={{ transition: 'transform 0.2s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s' }}
      >
        {children}
      </a>
    );
  };

  return (
    <section id="home" className="relative w-full overflow-hidden min-h-screen pt-24 md:pt-[100px] flex items-center">
      <style>{`
        .hero-bg {
          position: absolute; inset: 0;
          background: 
            radial-gradient(ellipse at 70% 30%, rgba(26,122,67,0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(13,92,48,0.2) 0%, transparent 45%),
            linear-gradient(160deg, #041a0e 0%, #082d18 35%, #0a3d20 60%, #051f10 100%);
        }
        .hero-bg-slide {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0; transition: opacity 1.2s ease;
        }
        .hero-bg-slide.active { opacity: 0.18; }
        .hero-grid {
          position: absolute; inset: 0;
          pointer-events: none; z-index: 1;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: perspective(600px) rotateX(25deg) scale(1.5);
          transform-origin: center bottom;
          -webkit-mask-image: linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.6) 60%, transparent 100%);
          mask-image: linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.6) 60%, transparent 100%);
        }
        .morph-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(60px);
          animation: morphOrb 8s ease-in-out infinite alternate;
        }
        .orb-1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(26,122,67,0.35) 0%, transparent 70%);
          top: -100px; right: -100px;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%);
          bottom: -50px; left: 10%;
          animation-delay: -3s;
        }
        .orb-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(204,31,31,0.12) 0%, transparent 70%);
          top: 40%; left: 50%;
          animation-delay: -5s;
        }
        @keyframes morphOrb {
          0% { transform: scale(1) translate(0,0); border-radius: 50%; }
          33% { transform: scale(1.15) translate(20px,-15px); border-radius: 40% 60% 55% 45%; }
          66% { transform: scale(0.9) translate(-10px,20px); border-radius: 60% 40% 45% 55%; }
          100% { transform: scale(1.05) translate(10px,5px); border-radius: 50%; }
        }
        .hero-particles {
          position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatParticle linear infinite;
        }
        @keyframes floatParticle {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-20px) translateX(30px); opacity: 0; }
        }
        .hero-img-frame {
          position: absolute; inset: 0;
          border: 2px solid #C9A84C;
          border-radius: 8px;
          transform: translate(-12px, 12px);
          transition: transform 0.5s ease-out;
        }
        .hero-img-container:hover .hero-img-frame { transform: translate(-16px, 16px); }
      `}</style>

      {/* Background Slides */}
      <div className="hero-bg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide}')` }}
          ></div>
        ))}
      </div>

      <div className="hero-grid"></div>
      <div className="morph-orb orb-1"></div>
      <div className="morph-orb orb-2"></div>
      <div className="morph-orb orb-3"></div>

      <div className="hero-particles" ref={particlesRef}></div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center py-10 md:py-0">
        
        <motion.div 
          className="text-white text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-[#cc1f1f] font-light mb-4 text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1]"
            style={{ textShadow: '0 0 60px rgba(204,31,31,0.35)', fontFamily: "'Cormorant Garamond', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            itemProp="name"
          >
            Bhumi Shah
          </motion.h1>
          
          <motion.div 
            className="h-[1px] mb-6 md:mb-10 max-w-[320px] mx-auto md:mx-0"
            style={{ background: 'linear-gradient(90deg, #cc1f1f 0%, rgba(201,168,76,0.4) 60%, transparent 100%)' }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="font-sans text-[1rem] font-light text-white/70 tracking-wide mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Divine Touch & Logical Solutions · Transforming Spaces, Enhancing Lives
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton href="#contact" className="px-8 py-3.5 rounded font-sans text-[0.8rem] font-medium tracking-[0.12em] uppercase text-[#0a2618] inline-block border-none bg-gradient-to-br from-[#C9A84C] to-[#E8C96D] shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.5)]">
              Get Consultation
            </MagneticButton>
            <MagneticButton href="#services" className="px-8 py-3.5 rounded font-sans text-[0.8rem] font-medium tracking-[0.12em] uppercase text-white inline-block border border-white/30 bg-transparent hover:border-[#C9A84C] hover:text-[#E8C96D]">
              Explore Services
            </MagneticButton>
          </motion.div>
          
          <motion.div 
            className="flex gap-8 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="font-serif text-[2rem] font-bold text-[#E8C96D] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}><AnimatedNumber value={10} suffix="+" /></div>
              <div className="text-[0.7rem] tracking-widest text-white/50 uppercase mt-1">Years</div>
            </div>
            <div className="w-[1px] bg-white/15"></div>
            <div className="text-center">
              <div className="font-serif text-[2rem] font-bold text-[#E8C96D] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}><AnimatedNumber value={1000} suffix="+" /></div>
              <div className="text-[0.7rem] tracking-widest text-white/50 uppercase mt-1">Clients</div>
            </div>
            <div className="w-[1px] bg-white/15"></div>
            <div className="text-center">
              <div className="font-serif text-[2rem] font-bold text-[#E8C96D] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CS</div>
              <div className="text-[0.7rem] tracking-widest text-white/50 uppercase mt-1">Qualification</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center gap-6 order-first md:order-last mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="hero-img-container relative w-[170px] h-[210px] md:w-[320px] md:h-[400px]">
            <div className="hero-img-frame"></div>
            <img src={heroImg.src} alt="Bhumi Shah" className="absolute inset-0 w-full h-full object-cover rounded-lg z-10 shadow-lg" />
          </div>
          
          <div className="hidden md:flex flex-wrap gap-2 justify-center">
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#E8C96D] px-4 py-1.5 rounded-full text-[0.75rem] font-medium tracking-wide transition-all duration-200 hover:bg-[#C9A84C]/20">Vastu Expert</span>
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#E8C96D] px-4 py-1.5 rounded-full text-[0.75rem] font-medium tracking-wide transition-all duration-200 hover:bg-[#C9A84C]/20">Tarot Reader</span>
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#E8C96D] px-4 py-1.5 rounded-full text-[0.75rem] font-medium tracking-wide transition-all duration-200 hover:bg-[#C9A84C]/20">Numerologist</span>
            <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#E8C96D] px-4 py-1.5 rounded-full text-[0.75rem] font-medium tracking-wide transition-all duration-200 hover:bg-[#C9A84C]/20">Graphologist</span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
