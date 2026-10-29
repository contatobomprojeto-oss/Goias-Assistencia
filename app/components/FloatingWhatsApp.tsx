import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=62981678149&text=Ol%C3%A1%2C+gostaria+de+falar+com+o+técnico+responsável+sobre+atendimento+residencial%21&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Técnico no WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <WhatsAppIcon className="w-8 h-8 fill-white" />
      <span className="absolute left-full ml-3 px-3.5 py-1.5 bg-[#1c3524] text-white text-xs font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com o Técnico
      </span>
    </a>
  );
}
