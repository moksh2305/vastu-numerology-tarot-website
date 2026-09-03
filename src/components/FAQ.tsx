"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical Vastu consultation take?",
    answer: "Depending on the size and complexity of the property, a consultation can take anywhere from 30 minutes to 1–2 hours."
  },
  {
    question: "Is Tarot reading accurate?",
    answer: "Tarot provides guidance based on current energies and situations. While many people find it highly insightful, it should be viewed as a tool for clarity - not absolute prediction."
  },
  {
    question: "How does numerology work?",
    answer: "Numerology uses your birth date and name to calculate key numbers such as your Life Path Number and Destiny Number. These numbers are then interpreted to provide guidance about your life's purpose, strengths, and challenges."
  },
  {
    question: "Do I need to make structural changes to my home or office?",
    answer: "Not at all. Most Vastu corrections can be implemented without structural changes - through remedies like color therapy, elemental adjustments, furniture rearrangement, and specific Vastu products. We focus on non-invasive solutions."
  },
  {
    question: "Can Tarot predict the future?",
    answer: "Tarot reveals possible outcomes based on present circumstances. Since free will plays a role, the future is not fixed - it can change based on your choices and actions."
  },
  {
    question: "Can numerology help with career or business decisions?",
    answer: "Yes. Numerology can offer insights into your strengths, suitable career paths, and favorable timing for business decisions - helping you move forward with greater confidence and clarity."
  },
  {
    question: "Is Vastu only for homes?",
    answer: "No. Vastu is applicable to homes, offices, shops, factories, commercial spaces, clinics, hospitals, schools, and even plots of land. Anywhere people live or work can benefit from Vastu principles."
  },
  {
    question: "Do you offer online Tarot readings?",
    answer: "Yes. Readings are available via video call, phone, or chat - making it easy to connect from anywhere in the world."
  },
  {
    question: "What is name correction in numerology?",
    answer: "Name correction involves modifying the spelling of your name to align with favorable numbers, which is believed to improve luck, success, and overall harmony in life."
  },
  {
    question: "How soon can I see results after Vastu implementation?",
    answer: "Results vary for each individual. Some people notice changes quickly, while others may take more time. The complete transformation usually becomes evident within 3–6 months as the new energy patterns settle. Consistency in following recommendations is key."
  },
  {
    question: "How long does a Tarot session last?",
    answer: "Sessions typically range from 15 minutes to 1–2 hours, depending on the type of reading you choose and the depth of questions you bring."
  },
  {
    question: "What details do I need for a numerology reading?",
    answer: "Typically just two things: your full name as per birth records, and your date of birth. These are used to calculate your core numbers and provide personalised guidance."
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
