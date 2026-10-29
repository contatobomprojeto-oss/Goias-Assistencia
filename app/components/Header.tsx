import React from 'react';
import Image from 'next/image';
import { Bell, ShieldCheck, User } from 'lucide-react';

interface HeaderProps {
  onOpenNotifications: () => void;
  onOpenProfile: () => void;
}

export default function Header({ onOpenNotifications, onOpenProfile }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#1c3524]/10 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#1c3524] flex items-center justify-center p-1 shadow-sm">
            <Image
              src="/assets/aistudio/Gemini_Generated_Image_1987gs1987gs1987-Photoroom_aabb7a61.png"
              alt="Goiás Residencial Logo"
              width={36}
              height={36}
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold tracking-wider text-[#5cb846] uppercase">Goiás Residencial</span>
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#c9a86a]/20 text-[#755a24]">VIP</span>
            </div>
            <h1 className="text-sm font-bold text-[#1c3524] leading-tight">Concierge & Assistência</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenNotifications}
            aria-label="Notificações"
            className="w-10 h-10 rounded-full bg-[#f1fcf3] border border-[#1c3524]/10 flex items-center justify-center text-[#1c3524] hover:bg-[#e5f1e8] transition-colors relative"
          >
            <Bell className="w-5 h-5 text-[#1c3524]" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#5cb846] ring-2 ring-white"></span>
          </button>
          <button
            onClick={onOpenProfile}
            aria-label="Perfil do Cliente"
            className="w-10 h-10 rounded-full bg-[#1c3524] text-white flex items-center justify-center font-bold text-xs shadow-md hover:bg-[#14291a] transition-colors"
          >
            CF
          </button>
        </div>
      </div>
    </header>
  );
}
