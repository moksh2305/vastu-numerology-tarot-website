"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Awards() {
  const awards = [
    { src: '/award1.jpeg', alt: 'Award 1' },
    { src: '/award2.jpeg', alt: 'Award 2' },
    { src: '/award3.jpeg', alt: 'Award 3' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#082d18] to-[#0a381e] border-y border-[#C9A84C]/30 relative z-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-8">
          <span className="block text-[0.7rem] tracking-[0.3em] uppercase text-[#E8C96D] font-medium">
            Recognitions & Awards
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A84C] to-[#E8C96D] rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-[#C9A84C]/30 shadow-2xl overflow-hidden flex items-center justify-center h-48 md:h-56 w-full">
                <img 
                  src={award.src} 
                  alt={award.alt} 
                  className="max-h-full max-w-full object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
