"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Map, 
  Star, 
  Hash, 
  PenTool, 
  BookOpen, 
  ArrowRight,
  Triangle,
  Lightbulb,
  Layers,
  Sparkles,
  Flower2
} from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      icon: <Home size={32} />,
      title: "Home & Industrial Vastu",
      desc: "Complete Vastu analysis for residential and commercial spaces, without any structural changes.",
      features: [
        "Homes, Bungalows, Villas",
        "Apartments & Residential Complexes",
        "Offices & Commercial Spaces",
        "Factories & Industrial Units"
      ]
    },
    {
      icon: <Map size={32} />,
      title: "Vastu Consultation",
      desc: "360° analysis, Color analysis, 16 directions, 5 elements, and 9 planets assessment.",
      features: [
        "Offsite Visit",
        "Online via Maps & Layouts",
        "Geopathic Stress Analysis",
        "Astro Vastu",
        "Numero Vastu"
      ]
    },
    {
      icon: <Star size={32} />,
      title: "Tarot Reading",
      desc: "Guidance tool to give you answers and clarity to any questions regarding your past, present or future.",
      features: [
        "Specific Answers to All Questions",
        "Relationship Guidance",
        "Health Guidance",
        "Investment Guidance",
        "Career Counselling"
      ]
    },
    {
      icon: <Hash size={32} />,
      title: "Numerology Consultation",
      desc: "Decoding your date of birth and name number to reveal your life purpose, strengths and challenges.",
      features: [
        "Destiny & Life Path Number",
        "Name Correction",
        "Relationship Compatibility",
        "Lucky Numbers & Days",
        "Business & Career Guidance"
      ]
    },
    {
      icon: <PenTool size={32} />,
      title: "Graphology",
      desc: "Scientific study of handwriting to understand personality and behavioural traits.",
      features: [
        "Visiting Card Design",
        "Logo Design",
        "Handwriting Analysis",
        "Signature Analysis"
      ]
    },
    {
      icon: <BookOpen size={32} />,
      title: "Courses",
      desc: "Small Batches. Personal Attention. Focused learning. Real Knowledge.",
      features: [
        "Vastu Coaching",
        "Numerology Coaching",
        "Tarot Reading Class"
      ]
    }
  ];

  const whyChooseUs = [
    { icon: <Star size={24} />, title: "Tarot Reader", desc: "Expert tarot reading for life guidance" },
    { icon: <Home size={24} />, title: "Vastu Consultant", desc: "Certified Vastu expertise" },
    { icon: <Hash size={24} />, title: "Numerologist", desc: "Numerology-based solutions" },
    { icon: <PenTool size={24} />, title: "Handwriting Analyst", desc: "Graphology and drawing analysis" },
    { icon: <Sparkles size={24} />, title: "Card & Logo Design", desc: "Professional design analysis" },
    { icon: <Triangle size={24} />, title: "Pyramid Solutions", desc: "Effective solutions through pyramids" },
    { icon: <Star size={24} />, title: "10+ Years Experience", desc: "A decade of Vastu expertise and trust" },
    { icon: <Lightbulb size={24} />, title: "Simple Upays", desc: "Practical, easy and effective remedies" },
    { icon: <Layers size={24} />, title: "Multi-Disciplinary", desc: "Integrated solutions approach" },
    { icon: <Flower2 size={24} />, title: "Holistic Approach", desc: "Mind, space and energy in perfect harmony" }
  ];

  const leftItems = whyChooseUs.slice(0, 5);
  const rightItems = whyChooseUs.slice(5, 10);
  const yPositions = [60, 180, 300, 420, 540];

  return (
    <section id="services" className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#f0f9f4] text-[#082d18]">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c9a84c] font-bold tracking-widest uppercase text-sm mb-3 block">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#082d18] mb-6">
            Consultancy Services
          </h2>
          <div className="w-24 h-1 bg-[#c9a84c] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#082d18]/70 font-medium">
            Blending ancient wisdom with practical, personalized solutions to create real transformation - with 10+ years of experience.
          </p>
        </motion.div>
      </div>

      {/* Services Grid (Flip Cards) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group relative h-[350px] w-full [perspective:1000px]"
          >
            <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-3xl">
              
              {/* Card Front */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#f0f9f4] flex items-center justify-center text-[#c9a84c] mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#082d18]">
                  {service.title}
                </h3>
                <p className="text-[#082d18]/70 text-sm">
                  {service.desc}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-2 text-[#c9a84c] font-medium text-sm">
                  Hover to explore <ArrowRight size={16} />
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#082d18] to-[#041a0e] text-white rounded-3xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold mb-6 text-[#ebd58b] border-b border-white/10 pb-4">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#082d18] mb-4">
            Why Choose Bhumi Shah?
          </h2>
          <p className="text-[#082d18]/70 font-medium">
            Multi-disciplinary expertise for comprehensive life solutions
          </p>
        </motion.div>

        {/* Mobile Grid Layout (hidden on lg) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden"
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex items-center gap-5 transition-shadow hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#082d18] to-[#041a0e] flex items-center justify-center text-[#ebd58b] flex-shrink-0 shadow-md">
                {item.icon}
              </div>
              <div>
                <h4 className="text-[#082d18] font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-[#082d18]/60 text-xs font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop Horizontal Tree Layout (hidden on < lg) */}
        <div className="hidden lg:block relative w-[1000px] h-[600px] mx-auto mt-20 mb-8">
          
          {/* SVG Background Lines & Circles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600">
            {/* Left Lines */}
            {yPositions.map((y, i) => {
              const dx = -140; // 360 - 500
              const dy = y - 300;
              const len = Math.sqrt(dx*dx + dy*dy);
              const cx = 500 + (dx/len) * 110;
              const cy = 300 + (dy/len) * 110;
              return (
                <g key={`l-line-${i}`}>
                  <polyline points={`320,${y} 360,${y} 500,300`} fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.4" />
                  <circle cx="320" cy={y} r="3" fill="#c9a84c" />
                  <circle cx="360" cy={y} r="3" fill="#c9a84c" />
                  <circle cx={cx} cy={cy} r="4" fill="#c9a84c" />
                </g>
              )
            })}
            
            {/* Right Lines */}
            {yPositions.map((y, i) => {
              const dx = 140; // 640 - 500
              const dy = y - 300;
              const len = Math.sqrt(dx*dx + dy*dy);
              const cx = 500 + (dx/len) * 110;
              const cy = 300 + (dy/len) * 110;
              return (
                <g key={`r-line-${i}`}>
                  <polyline points={`680,${y} 640,${y} 500,300`} fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.4" />
                  <circle cx="680" cy={y} r="3" fill="#c9a84c" />
                  <circle cx="640" cy={y} r="3" fill="#c9a84c" />
                  <circle cx={cx} cy={cy} r="4" fill="#c9a84c" />
                </g>
              )
            })}
          </svg>

          {/* Central Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute z-20 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#051109] to-[#12281a] shadow-[0_0_40px_rgba(201,168,76,0.3)] flex flex-col items-center justify-center border-4 border-[#12281a] ring-2 ring-[#c9a84c]/50 left-1/2 top-1/2 -ml-[110px] -mt-[110px]"
          >
            <div className="relative text-[#c9a84c] flex items-center justify-center drop-shadow-[0_0_15px_rgba(201,168,76,0.5)] w-full h-[70px]">
              <span className="absolute text-7xl font-serif right-1/2 translate-x-2 -translate-y-2 opacity-90">B</span>
              <span className="absolute text-8xl font-serif left-1/2 -translate-x-3 z-10 text-[#e8c96d]">S</span>
            </div>
          </motion.div>

          {/* Left Cards */}
          {leftItems.map((item, i) => (
            <motion.div 
              key={`left-${i}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="absolute flex items-center justify-end drop-shadow-[0_5px_15px_rgba(201,168,76,0.15)] group"
              style={{ left: 0, top: yPositions[i], transform: 'translateY(-50%)', width: '320px', height: '90px' }}
            >
              <div 
                className="absolute -left-3 top-[-8px] z-10 w-[45px] h-[60px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex justify-center pt-3 text-[#c9a84c] font-serif font-bold text-lg drop-shadow-md border-b-2 border-r border-[#c9a84c]/30 group-hover:-translate-y-1 transition-transform"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
              >
                0{i + 1}
              </div>

              <div 
                className="relative w-full h-full bg-gradient-to-r from-white to-[#fdfdfd] flex items-center p-4 pl-14 pr-8 gap-4 border-l border-t border-[#c9a84c]/10"
                style={{ clipPath: 'polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%)' }}
              >
                <div className="text-[#c9a84c]">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#082d18] font-serif font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-[#082d18]/60 text-[0.65rem] font-medium leading-tight">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Right Cards */}
          {rightItems.map((item, i) => (
            <motion.div 
              key={`right-${i}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="absolute flex items-center drop-shadow-[0_5px_15px_rgba(201,168,76,0.15)] group"
              style={{ left: '680px', top: yPositions[i], transform: 'translateY(-50%)', width: '320px', height: '90px' }}
            >
              <div 
                className="absolute -right-3 top-[-8px] z-10 w-[45px] h-[60px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex justify-center pt-3 text-[#c9a84c] font-serif font-bold text-lg drop-shadow-md border-b-2 border-l border-[#c9a84c]/30 group-hover:-translate-y-1 transition-transform"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
              >
                {i + 6 < 10 ? `0${i + 6}` : '10'}
              </div>

              <div 
                className="relative w-full h-full bg-gradient-to-l from-white to-[#fdfdfd] flex items-center p-4 pr-14 pl-10 gap-4 border-r border-t border-[#c9a84c]/10"
                style={{ clipPath: 'polygon(7% 0, 100% 0, 100% 100%, 7% 100%, 0 50%)' }}
              >
                <div className="text-[#c9a84c] ml-2">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#082d18] font-serif font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-[#082d18]/60 text-[0.65rem] font-medium leading-tight">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Block (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:flex max-w-[700px] mx-auto mt-28 mb-16 p-6 border border-[#c9a84c]/30 bg-[#fdf8f5] items-center gap-6 rounded-lg relative drop-shadow-sm"
        >
          <div className="text-6xl font-serif text-[#c9a84c] leading-none pt-4">“</div>
          <div className="flex-1">
            <p className="text-[#082d18]/80 font-medium text-sm">
              Blending ancient wisdom with modern understanding to create meaningful transformations.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Wave transition to next section (Tips) */}
      <div className="absolute bottom-0 left-0 w-full leading-none transform translate-y-[1px]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[80px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C300,80 600,0 900,60 C1100,100 1300,20 1440,40 L1440,80 L0,80 Z" fill="#041a0e" />
          <path d="M0,0 C300,80 600,0 900,60 C1100,100 1300,20 1440,40" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="1.5" />
        </svg>
      </div>

    </section>
  );
};

export default Services;
