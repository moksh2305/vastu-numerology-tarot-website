"use client";

import { motion } from "framer-motion";
import { Star, MessageSquarePlus } from "lucide-react";

export default function Testimonials() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const testimonials = [
    {
      text: "Bhumi Shah's Vastu consultation transformed our home environment. After her recommendations, we experienced a significant improvement in our family's health and harmony. She truly unlocks spaces without any structural changes.",
      name: "Rajesh Mehta",
      role: "Business Owner, Mumbai",
      avatar: "R"
    },
    {
      text: "The numerology consultation gave me incredible clarity about my life path and career decisions. Bhumi's practical approach to ancient sciences is unlike anything I've experienced. Highly recommend!",
      name: "Priya Sharma",
      role: "IT Professional, Pune",
      avatar: "P"
    },
    {
      text: "I enrolled in the Vastu coaching program and it was life-changing. The small batch approach meant I got personal attention throughout. Now I'm applying these principles professionally in my own practice.",
      name: "Anita Joshi",
      role: "Interior Designer, Ahmedabad",
      avatar: "A"
    },
    {
      text: "The tarot reading gave me such clear guidance during a difficult period. Bhumi has a gift for translating card meanings into practical life advice. Her sessions are grounding and enlightening simultaneously.",
      name: "Sunita Kapoor",
      role: "Teacher, Delhi",
      avatar: "S"
    },
    {
      text: "Got my office Vastu analyzed and the results have been remarkable. Better team harmony, improved sales figures, and a more productive work environment. Bhumi's expertise is genuine and science-based.",
      name: "Vikram Patel",
      role: "Entrepreneur, Surat",
      avatar: "V"
    },
    {
      text: "The graphology analysis of my signature was eye-opening. Bhumi identified personality traits I hadn't consciously recognized. The logo redesign based on her suggestions has positively impacted my brand presence.",
      name: "Meera Shah",
      role: "Startup Founder, Bangalore",
      avatar: "M"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 px-5 overflow-hidden bg-gradient-to-br from-[#041a0e] to-[#082d18] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-gold/70 uppercase tracking-widest text-sm font-semibold mb-2 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gold-light mb-4">Testimonials</h2>
          <div className="w-12 h-1 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Real transformations from real clients across India
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/5 border border-gold/30 rounded-xl p-8 relative transition-all duration-300 hover:bg-gold/10 hover:-translate-y-1 group"
            >
              <div className="absolute top-3 left-6 font-serif text-7xl text-gold/15 group-hover:text-gold/25 transition-colors">
                "
              </div>
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 relative z-10 h-[100px] overflow-y-auto pr-2 custom-scrollbar">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-serif font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-gold-light font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-white/50 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              // Open modal logic if required
              console.log("Open modal");
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-gold/40 text-gold-light rounded-full text-sm font-medium hover:bg-gold/10 transition-colors"
          >
            <MessageSquarePlus size={16} /> Add Your Testimonial
          </button>
        </motion.div>
      </div>

      {/* Internal style for custom scrollbar within cards to keep it tidy */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(201, 168, 76, 0.3); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 168, 76, 0.5); 
        }
      `}} />
    </section>
  );
}
