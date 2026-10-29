import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStrip from './components/QuickStrip';
import ServicesSection from './components/ServicesSection';
import PillarsSection from './components/PillarsSection';
import SolutionsSection from './components/SolutionsSection';
import BookingSection from './components/BookingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f1fcf3] text-[#141e19] font-sans antialiased selection:bg-[#5cb846]/30 selection:text-[#1c3524]">
      <Navbar />
      <main className="w-full pt-28 bg-[#f1fcf3]">
        <Hero />
        <QuickStrip />
        <ServicesSection />
        <PillarsSection />
        <SolutionsSection />
        <BookingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
