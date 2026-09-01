"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Zap, GraduationCap, Clock, FileText, MessageCircle, Hash, Sprout, Laptop, Target, Star, Layers, Sparkles } from "lucide-react";

type CourseTab = "vastu" | "numerology" | "tarot";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<CourseTab>("vastu");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <div className="w-full" style={{ background: "#082d18" }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-20 w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 L1440,80 L1440,40 C1200,0 960,70 720,30 C480,0 240,60 0,20 Z"
            fill="var(--color-ivory)"
          />
          <path
            d="M0,20 C240,60 480,0 720,30 C960,70 1200,0 1440,40"
            fill="none"
            stroke="rgba(201,168,76,0.18)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <section id="courses" className="bg-ivory py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-2 block">
              Learn & Grow
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-4">Courses</h2>
            <div className="w-12 h-1 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              Small batches, personal attention, focused learning. Real knowledge from an experienced practitioner.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap rounded-lg overflow-hidden mb-12 border border-gold/25 w-fit mx-auto"
          >
            <button
              onClick={() => setActiveTab("vastu")}
              className={`px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-200 border-r border-gold/20 last:border-r-0 ${
                activeTab === "vastu"
                  ? "bg-gradient-to-br from-dark to-dark2 text-gold-light"
                  : "bg-white text-text-light hover:bg-gradient-to-br hover:from-dark hover:to-dark2 hover:text-gold-light"
              }`}
            >
              Vastu Coaching
            </button>
            <button
              onClick={() => setActiveTab("numerology")}
              className={`px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-200 border-r border-gold/20 last:border-r-0 ${
                activeTab === "numerology"
                  ? "bg-gradient-to-br from-dark to-dark2 text-gold-light"
                  : "bg-white text-text-light hover:bg-gradient-to-br hover:from-dark hover:to-dark2 hover:text-gold-light"
              }`}
            >
              Numerology
            </button>
            <button
              onClick={() => setActiveTab("tarot")}
              className={`px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-200 border-r border-gold/20 last:border-r-0 ${
                activeTab === "tarot"
                  ? "bg-gradient-to-br from-dark to-dark2 text-gold-light"
                  : "bg-white text-text-light hover:bg-gradient-to-br hover:from-dark hover:to-dark2 hover:text-gold-light"
              }`}
            >
              Tarot Reading
            </button>
          </motion.div>

          {/* Vastu Course */}
          {activeTab === "vastu" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              key="vastu"
            >
              <div className="bg-gradient-to-br from-emerald-deep to-emerald-dark rounded-2xl p-8 md:p-16 text-center text-white mb-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)"
                  }}
                ></div>
                <h2 className="text-3xl md:text-4xl font-serif text-gold-light mb-4 relative">Online Vastu Coaching Program</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-8 relative text-lg">
                  Learn the ancient science of Vastu through structured learning, practical remedies and personal mentorship.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-gold to-gold-light text-dark font-medium px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all relative"
                >
                  Enroll Now
                </a>
              </div>

              <h3 className="text-dark font-serif text-2xl mb-5">Program Highlights</h3>
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Users className="text-gold" size={20} /> Small Batch</h3>
                  <p className="text-text-light text-sm">Only 3–4 students per batch for focused learning and personal attention.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Zap className="text-gold" size={20} /> Practical Learning</h3>
                  <p className="text-text-light text-sm">Real-life application of Vastu concepts with case studies.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><GraduationCap className="text-gold" size={20} /> Certification</h3>
                  <p className="text-text-light text-sm">Certificate of completion provided after course completion.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Clock className="text-gold" size={20} /> 20+ Hours</h3>
                  <p className="text-text-light text-sm">Structured online coaching with comprehensive material.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><FileText className="text-gold" size={20} /> Study Material</h3>
                  <p className="text-text-light text-sm">Complete course notes for continued self-learning.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><MessageCircle className="text-gold" size={20} /> Live Interaction</h3>
                  <p className="text-text-light text-sm">Direct interaction with the mentor during sessions.</p>
                </motion.div>
              </motion.div>

              <h3 className="text-dark font-serif text-2xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "16 Vastu Directions",
                  "32 Entrance Analysis",
                  "Five Elements (Panch Tatva)",
                  "Colours in Vastu",
                  "Simple Vastu Remedies",
                  "Vastu Dosh Treatment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 px-4 bg-white border border-gold/15 rounded-lg text-sm text-text-main">
                    <Sparkles size={14} className="text-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Numerology Course */}
          {activeTab === "numerology" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              key="numerology"
            >
              <div className="bg-gradient-to-br from-emerald-deep to-emerald-dark rounded-2xl p-8 md:p-16 text-center text-white mb-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)"
                  }}
                ></div>
                <h2 className="text-3xl md:text-4xl font-serif text-gold-light mb-4 relative">Premium Online Numerology Coaching</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-8 relative text-lg">
                  Gain a clear, practical, and deeper understanding of the science of numbers and their influence on different aspects of your life.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-gold to-gold-light text-dark font-medium px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all relative"
                >
                  Enroll Now
                </a>
              </div>

              <h3 className="text-dark font-serif text-2xl mb-5">Program Highlights</h3>
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Users className="text-gold" size={20} /> Small Batch</h3>
                  <p className="text-text-light text-sm">Intentionally limited to 3–4 participants for personal attention.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Hash className="text-gold" size={20} /> Deep Understanding</h3>
                  <p className="text-text-light text-sm">Learn to decode the science of numbers for profound life insights.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Sprout className="text-gold" size={20} /> Versatile Growth</h3>
                  <p className="text-text-light text-sm">Ideal for personal growth or starting your professional practice.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Clock className="text-gold" size={20} /> 15+ Hours</h3>
                  <p className="text-text-light text-sm">In-depth live online interactive sessions.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><FileText className="text-gold" size={20} /> Study Material</h3>
                  <p className="text-text-light text-sm">Complete notes and reference material provided.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Laptop className="text-gold" size={20} /> Live Online</h3>
                  <p className="text-text-light text-sm">Real-time guidance from the mentor.</p>
                </motion.div>
              </motion.div>

              <h3 className="text-dark font-serif text-2xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "All Numbers & Their Meanings",
                  "Numbers & Elements Connection",
                  "Personal Year Numbers",
                  "Name Numbers & Influence",
                  "Destiny Numbers",
                  "Maturity Numbers",
                  "Identification of Lucky Numbers",
                  "Practical Daily Application"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 px-4 bg-white border border-gold/15 rounded-lg text-sm text-text-main">
                    <Sparkles size={14} className="text-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tarot Course */}
          {activeTab === "tarot" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              key="tarot"
            >
              <div className="bg-gradient-to-br from-emerald-deep to-emerald-dark rounded-2xl p-8 md:p-16 text-center text-white mb-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)"
                  }}
                ></div>
                <h2 className="text-3xl md:text-4xl font-serif text-gold-light mb-4 relative">Online Tarot Reading Course</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-8 relative text-lg">
                  Learn tarot reading in a simple and practical way. Master card energies, combine cards, and give accurate tarot readings with confidence.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-gold to-gold-light text-dark font-medium px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all relative"
                >
                  Enroll Now
                </a>
              </div>

              <h3 className="text-dark font-serif text-2xl mb-5">Program Highlights</h3>
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Target className="text-gold" size={20} /> Highly Personalised</h3>
                  <p className="text-text-light text-sm">Strictly limited to 2–4 students per class for personal attention.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Star className="text-gold" size={20} /> Simplistic Approach</h3>
                  <p className="text-text-light text-sm">Designed for anyone to grasp concepts easily - mystical to practical.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Layers className="text-gold" size={20} /> Read with Confidence</h3>
                  <p className="text-text-light text-sm">Learn the art of combining cards for highly accurate readings.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Clock className="text-gold" size={20} /> 20+ Hours</h3>
                  <p className="text-text-light text-sm">Detailed, comprehensive learning and practice.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><FileText className="text-gold" size={20} /> Study Material</h3>
                  <p className="text-text-light text-sm">Complete course notes for future reference.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white border border-gold/20 rounded-xl p-7 shadow-[0_2px_16px_rgba(26,18,8,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,18,8,0.12)] hover:border-gold/40 transition-all duration-300">
                  <h3 className="text-dark flex items-center gap-2 mb-2 font-serif text-xl"><Laptop className="text-gold" size={20} /> Live Online</h3>
                  <p className="text-text-light text-sm">Interactive classes directly with the mentor.</p>
                </motion.div>
              </motion.div>

              <h3 className="text-dark font-serif text-2xl mb-4">What You Will Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "All 78 Tarot Cards Explained",
                  "Major Arcana Meanings",
                  "Minor Arcana Meanings",
                  "Practical & Real-Life Interpretations",
                  "Understanding Card Energies",
                  "Combining Cards for Readings"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 px-4 bg-white border border-gold/15 rounded-lg text-sm text-text-main">
                    <Sparkles size={14} className="text-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-gold to-gold-light text-dark font-medium px-12 py-4 rounded-full hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all text-sm"
            >
              Book Your Seat →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
