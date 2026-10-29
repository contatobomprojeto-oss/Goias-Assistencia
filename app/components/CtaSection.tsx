import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function CtaSection() {
  return (
    <section className="w-full py-16 bg-[#e5f1e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-[#28332d] text-[#e8f4eb] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs font-bold text-[#ffdea4] uppercase tracking-wider">Atendimento Direto e Imediato</span>
            <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-white">
              Precisa de um especialista hoje em sua residência?
            </h3>
            <p className="text-sm text-[#d1ddd4]">
              Fale instantaneamente com a nossa Central VIP via WhatsApp ou ligações. Sem filas, com encaminhamento prioritário para a sua região.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a
              href="https://api.whatsapp.com/send/?phone=556281678149&text=Ol%C3%A1%2C+gostaria+de+saber+sobre+o+servi%C3%A7o+de+voc%C3%AAs+e+um+or%C3%A7amento+se+poss%C3%ADvel%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#5cb846] text-white font-bold text-sm hover:bg-[#106e00] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
              <span>Chamar no WhatsApp (62) 8167-8149</span>
            </a>
            <a
              href="tel:556281678149"
              className="w-full sm:w-auto px-6 py-4 rounded-lg bg-[#dfebe2] text-[#141e19] font-bold text-sm hover:bg-[#dae5dd] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#141e19]" />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
