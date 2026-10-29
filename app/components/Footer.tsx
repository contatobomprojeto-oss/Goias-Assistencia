import React from 'react';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c3524] text-[#e8f4eb] pt-16 pb-12 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#28332d]">
        <div className="flex flex-col gap-4">
          <div className="relative w-40 h-12">
            <Image
              src="/assets/aistudio/Gemini_Generated_Image_1987gs1987gs1987-Photoroom_aabb7a61.png"
              alt="Goiás Assistência Residencial Logo"
              fill
              className="object-contain object-left"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-[#b1ceb5] leading-relaxed">
            Excelência técnica, discrição e pontualidade britânica para condomínios fechados e residências de alto padrão em Goiânia e região.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm text-white">Condomínios Atendidos</h4>
          <ul className="text-xs text-[#b1ceb5] space-y-2">
            <li>Alphaville Flamboyant (Todos)</li>
            <li>Condomínio Horizontal Aldeia do Vale</li>
            <li>Jardins (Parigi, Verona, Munique, Valência)</li>
            <li>Portal do Sol &amp; Granville</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm text-white">Serviços Frequentes</h4>
          <ul className="text-xs text-[#b1ceb5] space-y-2">
            <li>Manutenção de Ar-Condicionado VRF</li>
            <li>Pressurização &amp; Redes Hidráulicas</li>
            <li>Quadros Elétricos &amp; Automação</li>
            <li>Ajuste de Mobiliário Planejado</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm text-white">Central Goiânia</h4>
          <ul className="text-xs text-[#b1ceb5] space-y-2">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#7edc65] shrink-0" /> Setor Marista, Goiânia - GO</li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366] shrink-0" />
              <a href="https://api.whatsapp.com/send/?phone=556281678149&text=Ol%C3%A1%2C+gostaria+de+saber+sobre+o+servi%C3%A7o+de+voc%C3%AAs+e+um+or%C3%A7amento+se+poss%C3%ADvel%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-bold">
                (62) 8167-8149 (WhatsApp / Ligações)
              </a>
            </li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#7edc65] shrink-0" /> contato@goiasresidenciais.com.br</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#b1ceb5] gap-4">
        <p>&copy; 2026 Goiás Assistência Residencial VIP. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Compliance LGPD</a>
        </div>
      </div>
    </footer>
  );
}
