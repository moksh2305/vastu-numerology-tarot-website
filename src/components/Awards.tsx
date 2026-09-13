"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Awards() {
  return (
    <section className="relative py-24 bg-[#f0f9f4] overflow-hidden text-[#082d18]">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c9a84c] opacity-5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Column (Title + Award 2) */}
        <div className="lg:col-span-5 flex flex-col gap-16 lg:gap-24">
          
          {/* Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
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
            
            <p className="text-[#082d18]/80 text-lg leading-relaxed max-w-md">
              Every recognition is a reminder that purpose-driven work creates a ripple beyond ourselves. Grateful for the opportunities to serve, learn and make a meaningful impact.
            </p>

            <div className="hidden lg:block mt-12">
              <p className="text-[#082d18]/70 italic font-serif text-lg leading-relaxed border-l-2 border-[#c9a84c] pl-6">
                "Recognition is not the destination, but the motivation to do more."
              </p>
            </div>
          </motion.div>

          {/* Award 2 - Hindustan Times */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[400px] md:h-[500px] flex items-center lg:ml-8"
          >
            <div className="w-[60%] lg:w-[65%] h-full rounded-2xl overflow-hidden shadow-xl border border-[#c9a84c]/10">
              <img 
                src="/award2.jpeg" 
                alt="Featured in Hindustan Times" 
                className="w-full h-full object-cover object-left md:object-center"
              />
            </div>
            
            <div className="absolute right-0 w-[55%] bg-[#fdf8f5] p-6 lg:p-8 shadow-2xl rounded-2xl border border-[#c9a84c]/20 z-20 group translate-x-4 lg:translate-x-12">
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
            </div>
          </motion.div>

        </div>

        {/* Right Column (Award 1 + Award 3) */}
        <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-24 lg:pt-8">
          
          {/* Top Row - Award 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#c9a84c]/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#082d18]/20 to-transparent z-10"></div>
              <img 
                src="/award1.jpeg" 
                alt="Bright Business Awards" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Overlapping Text Box 1 */}
            <div className="relative lg:absolute lg:-bottom-10 lg:left-8 -mt-10 mx-6 lg:mx-0 bg-white/95 backdrop-blur-md p-6 lg:p-8 shadow-xl rounded-2xl border border-[#c9a84c]/20 lg:w-[450px] z-20 group">
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

          {/* Bottom Row - Award 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full h-[350px] md:h-[450px] flex items-center mt-4 lg:mt-8"
          >
            <div className="w-[65%] h-full rounded-2xl overflow-hidden shadow-xl border border-[#c9a84c]/10">
              <img 
                src="/award3.jpeg" 
                alt="Bright Business Conclave" 
                className="w-full h-full object-cover object-left md:object-center"
              />
            </div>
            
            <div className="absolute right-0 w-[50%] bg-white p-6 lg:p-8 shadow-2xl rounded-2xl border border-[#c9a84c]/20 z-20 group">
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
