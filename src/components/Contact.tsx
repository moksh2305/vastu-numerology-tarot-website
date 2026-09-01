"use client";
import React, { useState } from 'react';
import { Phone, Smartphone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-5 bg-gradient-to-br from-[#f0f9f4] to-[#e6f4ed]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-[0.7rem] tracking-[0.3em] uppercase text-[#1a7a43] font-medium mb-3">
            Reach Out
          </span>
          <h2 className="text-[#082d18] font-serif text-3xl md:text-5xl font-normal mb-4">
            Get In Touch
          </h2>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] mx-auto my-5"></div>
          <p className="text-[#3a6e52] max-w-[550px] mx-auto text-[0.95rem] font-light leading-relaxed">
            Start your holistic transformation today. Free 5-minute consultation to discuss your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_380px] gap-10 items-start">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#041a0e] to-[#082d18] rounded-xl p-10 text-white border border-[#C9A84C]/30 shadow-lg h-full"
          >
            <h3 className="text-[#E8C96D] font-serif text-[1.6rem] font-semibold mb-7">Quick Contact</h3>
            
            <a href="tel:+919820626460" className="flex items-start gap-3.5 py-3.5 border-b border-white/10 no-underline transition-all hover:pl-1.5 group">
              <div className="w-9 h-9 shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-lg flex items-center justify-center text-[#E8C96D] transition-colors group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-white/50 text-[0.7rem] tracking-[0.1em] uppercase mb-0.5 font-normal">Primary</h4>
                <p className="text-white text-[0.9rem] m-0 leading-[1.4] font-normal">+91 98206 26460</p>
                <span className="text-[#E8C96D] text-[0.75rem]">Tap to call →</span>
              </div>
            </a>
            
            <a href="tel:+919137238688" className="flex items-start gap-3.5 py-3.5 border-b border-white/10 no-underline transition-all hover:pl-1.5 group">
              <div className="w-9 h-9 shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-lg flex items-center justify-center text-[#E8C96D] transition-colors group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]">
                <Smartphone size={18} />
              </div>
              <div>
                <h4 className="text-white/50 text-[0.7rem] tracking-[0.1em] uppercase mb-0.5 font-normal">Secondary</h4>
                <p className="text-white text-[0.9rem] m-0 leading-[1.4] font-normal">+91 91372 38688</p>
                <span className="text-[#E8C96D] text-[0.75rem]">Tap to call →</span>
              </div>
            </a>

            <a href="mailto:bhumi231284@gmail.com" className="flex items-start gap-3.5 py-3.5 border-b border-white/10 no-underline transition-all hover:pl-1.5 group">
              <div className="w-9 h-9 shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-lg flex items-center justify-center text-[#E8C96D] transition-colors group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-white/50 text-[0.7rem] tracking-[0.1em] uppercase mb-0.5 font-normal">Email 1</h4>
                <p className="text-white text-[0.9rem] m-0 leading-[1.4] font-normal">bhumi231284@gmail.com</p>
                <span className="text-[#E8C96D] text-[0.75rem]">Tap to email →</span>
              </div>
            </a>
            
            <a href="mailto:bhumidtls@gmail.com" className="flex items-start gap-3.5 py-3.5 border-b border-white/10 no-underline transition-all hover:pl-1.5 group">
              <div className="w-9 h-9 shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-lg flex items-center justify-center text-[#E8C96D] transition-colors group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-white/50 text-[0.7rem] tracking-[0.1em] uppercase mb-0.5 font-normal">Email 2</h4>
                <p className="text-white text-[0.9rem] m-0 leading-[1.4] font-normal">bhumidtls@gmail.com</p>
                <span className="text-[#E8C96D] text-[0.75rem]">Tap to email →</span>
              </div>
            </a>

            <a href="https://instagram.com/bhumi_divinetouch_logical_soln" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3.5 py-3.5 border-b border-white/10 no-underline transition-all hover:pl-1.5 group">
              <div className="w-9 h-9 shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-lg flex items-center justify-center text-[#E8C96D] transition-colors group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div>
                <h4 className="text-white/50 text-[0.7rem] tracking-[0.1em] uppercase mb-0.5 font-normal">Instagram</h4>
                <p className="text-white text-[0.9rem] m-0 leading-[1.4] font-normal">@bhumi_divinetouch_logical_soln</p>
                <span className="text-[#E8C96D] text-[0.75rem]">View profile →</span>
              </div>
            </a>

            <a href="https://www.facebook.com/share/14ShALofaSP/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3.5 py-3.5 no-underline transition-all hover:pl-1.5 group border-none">
              <div className="w-9 h-9 shrink-0 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-lg flex items-center justify-center text-[#E8C96D] transition-colors group-hover:bg-[#C9A84C]/20 group-hover:border-[#C9A84C]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div>
                <h4 className="text-white/50 text-[0.7rem] tracking-[0.1em] uppercase mb-0.5 font-normal">Facebook</h4>
                <p className="text-white text-[0.9rem] m-0 leading-[1.4] font-normal">Bhumi Divine Touch</p>
                <span className="text-[#E8C96D] text-[0.75rem]">View page →</span>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-10 border border-[#C9A84C]/20 shadow-[0_4px_20px_rgba(26,18,8,0.07)] h-full"
          >
            <h3 className="text-[#0a2618] font-serif text-[1.6rem] font-semibold mb-2">Book Free Consultation</h3>
            <p className="text-[#3a6e52] text-[0.85rem] mb-7 font-light">We'll call you back within 24 hours</p>
            
            {success && (
              <div className="bg-[#d4edda] text-[#155724] py-3 px-4 rounded-lg text-[0.85rem] mb-4">
                ✅ Thank you! Your consultation request has been sent successfully.
              </div>
            )}
            
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  required 
                  className="w-full py-3.5 px-4 border border-[#C9A84C]/25 rounded-lg font-light text-[0.9rem] text-[#0d3320] bg-[#f0f9f4] outline-none transition-all focus:border-[#C9A84C] focus:ring-3 focus:ring-[#C9A84C]/10"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                  className="w-full py-3.5 px-4 border border-[#C9A84C]/25 rounded-lg font-light text-[0.9rem] text-[#0d3320] bg-[#f0f9f4] outline-none transition-all focus:border-[#C9A84C] focus:ring-3 focus:ring-[#C9A84C]/10"
                />
              </div>
              <div className="mb-4">
                <select 
                  className="w-full py-3.5 px-4 border border-[#C9A84C]/25 rounded-lg font-light text-[0.9rem] text-[#0d3320] bg-[#f0f9f4] outline-none transition-all focus:border-[#C9A84C] focus:ring-3 focus:ring-[#C9A84C]/10"
                >
                  <option value="">I'm interested in...</option>
                  <option>Home & Industrial Vastu</option>
                  <option>Vastu Consultation</option>
                  <option>Tarot Reading</option>
                  <option>Numerology Consultation</option>
                  <option>Graphology</option>
                  <option>Vastu Coaching Course</option>
                  <option>Numerology Course</option>
                  <option>Tarot Reading Course</option>
                  <option>Geopathic Stress Analysis</option>
                  <option>Aura Scanning</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full mt-2 bg-gradient-to-br from-[#041a0e] to-[#082d18] text-[#E8C96D] border border-[#9A7A2E] p-4 text-[0.85rem] tracking-[0.1em] uppercase font-medium rounded-lg transition-all hover:from-[#082d18] hover:to-[#0a3d20] hover:shadow-[0_4px_20px_rgba(8,45,24,0.4)]"
              >
                Request Call Back
              </button>
            </form>
          </motion.div>

          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(26,18,8,0.2)] border-[3px] border-[#C9A84C] relative h-[450px] lg:h-full min-h-[450px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[rgba(26,18,8,0.4)] z-10 pointer-events-none"></div>
            <img 
              src="https://bhumishah.netlify.app/bhumishahtest.jpg" 
              alt="Bhumi Shah" 
              className="w-full h-full object-cover block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
