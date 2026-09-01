import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VastuTips from "@/components/VastuTips";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--color-cream)] text-[var(--color-text-main)] overflow-hidden font-sans">
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VastuTips />
      <Courses />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
