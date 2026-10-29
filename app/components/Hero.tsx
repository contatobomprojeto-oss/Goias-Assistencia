import React from 'react';
import { ShieldCheck, Hotel, ArrowRight, Home, Award, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f1fcf3] py-12 sm:py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ccead1] text-[#072011] text-[11px] sm:text-xs font-bold tracking-wider w-fit shadow-xs border border-[#106e00]/15">
              <ShieldCheck className="w-4 h-4 text-[#106e00]" />
              <span>EXCELÊNCIA &amp; SEGURANÇA HOMOLOGADA</span>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-[#141e19] leading-[1.12]">
                Tranquilidade, Cuidado e <span className="italic text-[#106e00]">Excelência Técnica</span> para o seu Lar.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#404a3b] leading-relaxed max-w-xl">
                Suporte residencial sob medida em Goiânia com pontualidade impecável, técnicos rigorosamente checados e discrição absoluta para proteger o que é mais valioso para você.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#solicitar-vip"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#5cb846] text-white font-bold text-xs sm:text-sm hover:bg-[#106e00] shadow-[0_8px_25px_rgba(92,184,70,0.4)] hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center gap-2.5 group hover:scale-[1.01]"
              >
                <span>Agendar Especialista Residencial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#dfebe2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e5f1e8] flex items-center justify-center shrink-0 border border-[#106e00]/10">
                  <Home className="w-5 h-5 text-[#106e00]" />
                </div>
                <span className="text-xs font-bold text-[#141e19] leading-tight">Condomínios Fechados VIP</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e5f1e8] flex items-center justify-center shrink-0 border border-[#106e00]/10">
                  <Award className="w-5 h-5 text-[#106e00]" />
                </div>
                <span className="text-xs font-bold text-[#141e19] leading-tight">Rigoroso Background Check</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e5f1e8] flex items-center justify-center shrink-0 border border-[#106e00]/10">
                  <ShieldCheck className="w-5 h-5 text-[#106e00]" />
                </div>
                <span className="text-xs font-bold text-[#141e19] leading-tight">Garantia Técnica Integral</span>
              </div>
            </div>
          </div>

          {/* Visual Hero Media - User Uploaded Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(28,53,36,0.2)] bg-[#e5f1e8] border border-[#1c3524]/10">
              <img
                alt="Moradora recebendo técnico especializado na entrada de residência de luxo"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                src="/assets/aistudio/Gemini_Generated_Image_igjiz0igjiz0igji_b7f8152a.jpg"
                referrerPolicy="no-referrer"
              />
              {/* Glass Floating Card overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex items-center justify-between gap-4 border border-white/50">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#5cb846] text-white flex items-center justify-center shadow-sm shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#141e19]">Ambiente Seguro &amp; Preservado</p>
                    <p className="text-xs text-[#404a3b]">Protocolo estrito de proteção patrimonial</p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col text-right shrink-0">
                  <span className="text-xs text-[#106e00] font-bold tracking-wider">100% HOMOLOGADO</span>
                  <span className="text-xs text-[#404a3b]">Alphaville &amp; Aldeia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
