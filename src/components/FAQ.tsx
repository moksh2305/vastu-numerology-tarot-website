"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical Vastu consultation take?",
    answer: "Depending on the size and complexity of the property, a consultation can take anywhere from 30 minutes to a 1 or 2 hours."
  },
  {
    question: "Do I need to make structural changes to my home/office?",
    answer: "Not required. Most Vastu corrections can be implemented without structural changes through remedies like color therapy, elemental adjustments, furniture rearrangement, and specific Vastu products. We focus on non-invasive solutions."
  },
  {
    question: "How soon can I see results after Vastu implementation?",
    answer: "Results vary for each individual and situation. Some people notice changes quickly, while others may take time depending on the nature of the issue. However, the complete transformation usually becomes evident within 3-6 months as the new energy patterns settle. Consistency in following recommendations is key."
  },
  {
    question: "Can Vastu help with specific problems like health issues or financial difficulties?",
    answer: "Yes, Vastu addresses various life aspects including health, relationships, career, and finances by balancing the five elements and correcting energy flow. Specific directions and zones in your space correspond to different life areas."
  },
  {
    question: "Do you provide online consultations?",
    answer: "Yes, consultations can be conducted online through video calls, where clients can share layouts, photos, or videos of their space."
  },
  {
    question: "Do you provide customized Vastu solutions?",
    answer: "Yes, every consultation is personalized based on your space, lifestyle, and specific challenges or goals. And we also provide Astro vastu consultation services by checking your horoscope."
  },
  {
    question: "Is Vastu only for homes?",
    answer: "No, Vastu is applicable to homes, offices, shops, factories, commercial spaces, and even plots of land, clinics, shops, hospitals, schools, etc"
  },
  {
    question: "Are your remedies and solutions practical for modern living?",
    answer: "Yes, we specialize in adapting ancient Vastu principles to contemporary lifestyles. All recommendations are practical, aesthetic, and designed to work with modern architecture and furnishings."
  },
  {
    question: "Is Tarot reading accurate?",
    answer: "Tarot provides guidance based on current energies and situations. While many people find it highly insightful, it should be viewed as a tool for clarity—not absolute prediction."
  },
  {
    question: "Can Tarot predict the future?",
    answer: "Tarot reveals possible outcomes based on present circumstances. Since free will plays a role, the future is not fixed and can change based on your choices."
  },
  {
    question: "Do I need to believe in Tarot for it to work?",
    answer: "No belief is required. An open mind helps, but Tarot readings are meant to offer perspective and guidance regardless of your beliefs."
  },
  {
    question: "How does tarot work?",
    answer: "For any question or confusion or curiosity, you can ask questions and you will receive answers. You need to have questions to receive answers."
  },
  {
    question: "Do you offer online Tarot readings?",
    answer: "Yes, readings are available via video call, phone, or chat, making it easy to connect from anywhere."
  },
  {
    question: "How long does a Tarot session last?",
    answer: "Sessions typically range from 15 minutes to 1 hour or 2 hours , depending on the type of reading you choose."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. All readings and personal details are kept strictly private and confidential."
  },
  {
    question: "Can Tarot readings solve my problems?",
    answer: "Tarot does not directly solve problems but offers guidance and clarity, helping you make better decisions and take aligned actions."
  },
  {
    question: "How often should I get a Tarot reading?",
    answer: "It depends on your needs. Many people consult Tarot during major decisions or transitions, while others prefer regular guidance."
  },
  {
    question: "How do I book a reading?",
    answer: "You can book a session through the website booking form, WhatsApp, or email. Payment details will be shared during the booking process."
  },
  {
    question: "How does numerology work?",
    answer: "Numerology uses your birth date and name to calculate key numbers such as your Life Path Number, Destiny Number. These numbers are then interpreted to provide guidance about your life."
  },
  {
    question: "Can numerology predict the future?",
    answer: "Numerology does not predict exact events but offers guidance and insights into possible life trends, opportunities, and challenges. It helps you make informed decisions rather than determining your fate."
  },
  {
    question: "What details do I need for a numerology reading?",
    answer: "Typically, you need: Your full name (as per birth records), Your date of birth"
  },
  {
    question: "Can numerology help in career or business decisions?",
    answer: "Yes, numerology can offer insights into your strengths, suitable career paths, and favorable timing for business decisions."
  },
  {
    question: "What is name correction in numerology?",
    answer: "Name correction involves modifying the spelling of your name to align with favorable numbers, which is believed to improve luck, success, and harmony."
  },
  {
    question: "What is graphotherapy?",
    answer: "Graphotherapy is a technique where specific handwriting strokes and exercises are practiced regularly to bring positive changes in personality and behavior."
  },
  {
    question: "Does changing handwriting really change personality?",
    answer: "Yes, small and consistent changes in handwriting can influence neural pathways in the brain, helping shift habits, thought patterns, and emotional responses over time."
  },
  {
    question: "How long does it take to see results after handwriting change?",
    answer: "Results vary from person to person, but many people begin to notice changes within 21–45 days of consistent practice."
  },
  {
    question: "If I am not sure what sevices to take, what shoudl I do?",
    answer: "You can book a time-slot of 30 mins to 60 mins depending on your query. And then you can decide what you want to book."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-5 bg-gradient-to-br from-[#f0f9f4] to-[#e6f4ed]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-[0.7rem] tracking-[0.3em] uppercase text-[#1a7a43] font-medium mb-3">
            Got Questions?
          </span>
          <h2 className="text-[#082d18] font-serif text-3xl md:text-5xl font-normal mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96D] mx-auto my-5"></div>
          <p className="text-[#3a6e52] max-w-[550px] mx-auto text-[0.95rem] font-light leading-relaxed">
            Everything you need to know about Vastu, Tarot Reading, and Numerology consultations.
          </p>
        </div>
        
        <div className="flex flex-col gap-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-b border-[#C9A84C]/30 pb-5`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left group focus:outline-none"
              >
                <h3 className={`font-serif text-xl font-semibold transition-colors duration-300 ${openIndex === index ? 'text-[#9A7A2E]' : 'text-[#0a2618] group-hover:text-[#9A7A2E]'}`}>
                  {faq.question}
                </h3>
                <span className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-400 ease-in-out text-[#E8C96D] ${openIndex === index ? 'bg-[#C9A84C]/20 rotate-45' : 'bg-[#C9A84C]/10'}`}>
                  <Plus size={18} strokeWidth={2.5} />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-[#0d3320] text-[0.95rem] font-light leading-[1.6] m-0">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
