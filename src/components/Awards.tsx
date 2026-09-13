"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Awards() {
  return (
    <section className="relative py-24 bg-[#f0f9f4] overflow-hidden text-[#082d18]">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c9a84c] opacity-5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-16 lg:gap-24 relative z-10">
        
        {/* Top Row: Title (Left) & Award 1 (Right) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Top Left - Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#c9a84c] font-medium tracking-[0.3em] uppercase text-xs">
                RECOGNITION
              </span>
              <div className="h-[1px] flex-1 bg-[#c9a84c]/30"></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-serif text-[#082d18] mb-8 leading-[1.1]">
              Recognitions <br/>
              <span className="text-[#c9a84c] italic">&</span> Awards
            </h2>
            
            <p className="text-[#082d18]/80 text-lg leading-relaxed max-w-md mb-12">
              Every recognition is a reminder that purpose-driven work creates a ripple beyond ourselves. Grateful for the opportunities to serve, learn and make a meaningful impact.
            </p>

            <p className="hidden lg:block text-[#082d18]/70 italic font-serif text-lg leading-relaxed border-l-2 border-[#c9a84c] pl-6 max-w-md">
              "Recognition is not the destination, but the motivation to do more."
            </p>
          </motion.div>

          {/* Top Right - Award 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[55%] relative"
          >
            <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-[#c9a84c]/10">
              <img 
                src="/award1.jpeg" 
                alt="Bright Business Awards" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Overlapping Text Box 1 (Overlaps the bottom left) */}
            <div className="absolute -bottom-8 left-4 lg:-bottom-12 lg:-left-16 bg-white/95 backdrop-blur-md p-6 lg:p-8 shadow-xl rounded-2xl border border-[#c9a84c]/20 w-[90%] lg:w-[450px] z-20 group">
              <div className="flex items-end gap-6 mb-4">
                <span className="text-4xl font-serif text-[#c9a84c] leading-none">01</span>
                <div className="flex-1 h-[1px] bg-[#c9a84c]/30 mb-2"></div>
              </div>
              <h3 className="text-2xl font-serif text-[#082d18] mb-3 group-hover:text-[#c9a84c] transition-colors">
                Bright Business Awards
              </h3>
              <p className="text-[#082d18]/70 text-sm leading-relaxed">
                Recognised for our contribution towards community development and impactful initiatives.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Row: Award 2 & Award 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 pt-12 lg:pt-8">
          
          {/* Award 2 (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-stretch relative"
          >
            {/* Image (Higher Z-Index, on the left) */}
            <div className="w-[50%] lg:w-[45%] relative z-20 rounded-xl overflow-hidden shadow-2xl border-2 border-[#c9a84c]/40 bg-white">
              <img 
                src="/award2.jpeg" 
                alt="Featured in Hindustan Times" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Text Box (Lower Z-Index, tucked under the image, on the right) */}
            <div className="w-[60%] lg:w-[55%] relative z-10 -ml-8 lg:-ml-12 my-6 lg:my-10 bg-[#fdf8f5] p-6 lg:p-8 pl-12 lg:pl-16 shadow-lg rounded-r-2xl rounded-l-md border border-[#c9a84c]/20 border-l-0 group flex flex-col justify-center">
              <div className="flex items-end gap-4 mb-4">
                <span className="text-3xl font-serif text-[#c9a84c] leading-none">02</span>
                <div className="flex-1 h-[1px] bg-[#c9a84c]/30 mb-1.5"></div>
              </div>
              <h3 className="text-xl font-serif text-[#082d18] mb-3 group-hover:text-[#c9a84c] transition-colors">
                Featured in <br/>Hindustan Times
              </h3>
              <p className="text-[#082d18]/70 text-xs lg:text-sm leading-relaxed">
                A proud moment of recognition for creating awareness about Vastu and holistic living.
              </p>
              
              {/* Decorative Lotus */}
              <div className="mt-6 opacity-30 group-hover:opacity-60 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 19 16 19 10.5C19 8.5 17.5 7 15.5 7C14.5 7 13.5 7.5 12.8 8.4C12.1 7.5 11.1 7 10.1 7C8.1 7 6.6 8.5 6.6 10.5C6.6 16 13.6 22 13.6 22H12Z" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C12 15 15.5 10 15.5 7.5C15.5 6 14.5 5 13.3 5C12.5 5 12.1 5.4 12 6C11.9 5.4 11.5 5 10.7 5C9.5 5 8.5 6 8.5 7.5C8.5 10 12 15 12 15Z" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Award 3 (Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row items-stretch relative"
          >
            {/* Image (Higher Z-Index, on the left) */}
            <div className="w-[55%] lg:w-[60%] relative z-20 rounded-xl overflow-hidden shadow-2xl border border-[#c9a84c]/20 bg-white">
              <img 
                src="/award3.jpeg" 
                alt="Bright Business Conclave" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Text Box (Lower Z-Index, tucked under the image, on the right) */}
            <div className="w-[55%] lg:w-[50%] relative z-10 -ml-10 lg:-ml-12 my-6 lg:my-10 bg-[#fdf8f5] p-6 lg:p-8 pl-14 lg:pl-16 shadow-lg rounded-r-2xl rounded-l-md border border-[#c9a84c]/20 border-l-0 group flex flex-col justify-center">
              <div className="flex items-end gap-4 mb-4">
                <span className="text-3xl font-serif text-[#c9a84c] leading-none">03</span>
                <div className="flex-1 h-[1px] bg-[#c9a84c]/30 mb-1.5"></div>
              </div>
              <h3 className="text-xl font-serif text-[#082d18] mb-3 group-hover:text-[#c9a84c] transition-colors">
                Bright Business Conclave
              </h3>
              <p className="text-[#082d18]/70 text-xs lg:text-sm leading-relaxed">
                Honoured for leadership and contribution in social impact and community welfare.
              </p>
            </div>
          </motion.div>

        </div>
        
        <div className="lg:hidden mt-4">
          <p className="text-[#082d18]/70 italic font-serif text-base leading-relaxed border-l-2 border-[#c9a84c] pl-4">
            "Recognition is not the destination, but the motivation to do more."
          </p>
        </div>

      </div>
    </section>
  );
}
