"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#082d18] text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#c9a84c] opacity-5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#c9a84c] opacity-5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className="text-[#c9a84c] font-medium tracking-wider uppercase text-sm mb-2 opacity-80">
              Who I Am
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#ebd58b] mb-6">
              About Bhumi Shah
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-transparent mb-8"></div>
            
            <div className="space-y-4 text-gray-300 font-light leading-relaxed text-lg">
              <p className="text-white font-medium text-xl">
                Transforming Spaces, Enhancing Lives with the Science of Vastu
              </p>
              <p>
                Bhumi N Shah is a Vastu and holistic energy expert practicing under <strong className="text-white font-medium">Bhumi Shah Divine Touch & Logical Solutions</strong>. Her mission is to create awareness that Vastu Shastra is a science, not a superstition.
              </p>
              <p>
                She unlocks the power of Vastu <em className="text-[#ebd58b] not-italic font-medium">without breaking a wall</em> - blending ancient wisdom with practical, personalized solutions that create real transformation in life.
              </p>
              <p>
                With over 10 years of experience, she integrates Vastu with Astro Vastu, 45 Devta Vastu, Aura Scanning, Geopathic Stress Detection, Numerology, Tarot Reading, Graphology and Card & Logo Design Therapy.
              </p>
              <p>
                Academically she is a <strong className="text-white font-medium">Company Secretary (CS)</strong>, blending logic with intuition to create balanced environments that support growth, harmony and prosperity.
              </p>
            </div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="mt-10 flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a38235] flex items-center justify-center text-white shadow-lg">
                <Scale size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-white mb-1">Company Secretary (CS)</h4>
                <p className="text-sm text-gray-400">Academic excellence meets ancient wisdom</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Card / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/20 to-transparent blur-2xl rounded-3xl"></div>
            
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformPerspective: 1000 }}
              className="relative p-8 md:p-10 rounded-3xl bg-[#03150a]/80 backdrop-blur-md border border-[#c9a84c]/30 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#c9a84c]/10 to-transparent pointer-events-none"></div>
              
              <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif text-[#ebd58b] flex items-center gap-3">
                  <Sparkles className="text-[#c9a84c]" size={24} />
                  Areas of Expertise
                </h3>
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#c9a84c] to-[#8a6e27] w-16 h-16 rounded-full shadow-lg shadow-[#c9a84c]/20 border-2 border-[#ebd58b]/30">
                  <span className="text-xl font-bold text-white leading-none">10+</span>
                  <span className="text-[10px] text-white/80 uppercase tracking-widest mt-1">Years</span>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm md:text-base mb-8 relative z-10">
                A multi-disciplinary practitioner offering comprehensive holistic solutions for every aspect of life.
              </p>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {[
                  "Vastu Shastra",
                  "Astro Vastu",
                  "Numerology",
                  "Tarot Reading",
                  "Graphology",
                  "Aura Scanning",
                  "Geopathic Stress",
                  "Card Design"
                ].map((tag, index) => (
                  <motion.span 
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(201, 168, 76, 0.2)" }}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-[#c9a84c]/30 text-[#ebd58b] bg-[#c9a84c]/5 cursor-default transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 w-full leading-none transform translate-y-[1px]">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-[90px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,90 L1440,90 L1440,30 C1200,0 960,80 720,35 C480,-5 240,75 0,20 Z" fill="#f0f9f4" />
          <path d="M0,20 C240,75 480,-5 720,35 C960,80 1200,0 1440,30" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  );
};

export default About;
