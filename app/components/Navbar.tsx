'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Headphones, Menu, X, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#1c3524] text-[#e8f4eb] py-2 px-4 sm:px-6 lg:px-12 border-b border-[#c9a86a]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs font-medium tracking-wide">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-2 text-[#b1ceb5]">
              <Headphones className="w-4 h-4 text-[#ffdea4]" />
              <span>Atendimento Prioritário em Condomínios Fechados</span>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 mx-auto md:mx-0">
            <a href="https://api.whatsapp.com/send/?phone=62981678149&text=Ol%C3%A1%2C+gostaria+de+saber+sobre+o+servi%C3%A7o+de+voc%C3%AAs+e+um+or%C3%A7amento+se+poss%C3%ADvel%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-1.5 font-semibold text-[#ffdea4]">
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              <span>(62) 98167-8149 (WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 sm:h-24 bg-[#037848] backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(28,53,36,0.15)] border-b border-[#025633]">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="relative w-36 sm:w-48 h-12 sm:h-14 flex items-center">
              <Image
                src="/assets/aistudio/Gemini_Generated_Image_1987gs1987gs1987-Photoroom_aabb7a61.png"
                alt="Goiás Assistência Residencial Logo"
                fill
                className="object-contain object-left brightness-0 invert"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-2 font-medium text-sm">
            <a href="#" className="px-4 py-2 rounded-xl bg-white/20 text-white font-bold shadow-2xs">Início</a>
            <a href="#novos-servicos" className="px-4 py-2 rounded-xl text-[#f4f4f4] hover:text-white hover:bg-white/10 transition-all">Serviços Premium</a>
            <a href="#padrao" className="px-4 py-2 rounded-xl text-[#f4f4f4] hover:text-white hover:bg-white/10 transition-all">Como Funciona</a>
            <a href="#solucoes" className="px-4 py-2 rounded-xl text-[#f4f4f4] hover:text-white hover:bg-white/10 transition-all">Soluções</a>
            <a href="#solicitar-vip" className="px-4 py-2 rounded-xl text-[#f4f4f4] hover:text-white hover:bg-white/10 transition-all">Planos &amp; Cobertura</a>
            <a href="#depoimentos" className="px-4 py-2 rounded-xl text-white hover:bg-white/10 transition-all">Depoimentos</a>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#solicitar-vip"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-[#037848] font-bold text-xs sm:text-sm hover:bg-[#e8f4eb] shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Solicitar VIP
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="xl:hidden p-2 sm:p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#037848] border-b border-[#025633] shadow-2xl p-5 sm:p-6 flex flex-col gap-2.5 font-semibold text-sm text-white animate-in fade-in slide-in-from-top duration-200">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 rounded-xl bg-white/20 font-bold">Início</a>
            <a href="#novos-servicos" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 rounded-xl hover:bg-white/10 text-[#f4f4f4]">Serviços Premium</a>
            <a href="#padrao" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 rounded-xl hover:bg-white/10 text-[#f4f4f4]">Como Funciona</a>
            <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 rounded-xl hover:bg-white/10 text-[#f4f4f4]">Soluções</a>
            <a href="#solicitar-vip" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 rounded-xl hover:bg-white/10 text-[#f4f4f4]">Planos &amp; Cobertura</a>
            <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-4 rounded-xl hover:bg-white/10 text-white">Depoimentos</a>
            <a
              href="#solicitar-vip"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 text-center rounded-xl bg-white text-[#037848] font-bold shadow-md"
            >
              Solicitar Atendimento VIP
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
