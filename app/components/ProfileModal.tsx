import React from 'react';
import { User, Shield, MapPin, Mail, Phone, LogOut, X, Award } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#141e19]/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-[#1c3524]/15 space-y-5">
        <div className="flex items-center justify-between pb-4 border-b border-[#1c3524]/10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#1c3524] text-white flex items-center justify-center font-bold text-xs">
              CF
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1c3524]">Dr. Carlos Ferraz</h3>
              <p className="text-xs text-[#404a3b]">Titular Black Diamond</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="w-8 h-8 rounded-full bg-[#f1fcf3] flex items-center justify-center text-[#404a3b] hover:bg-[#e5f1e8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <div className="bg-[#f1fcf3] p-3.5 rounded-xl border border-[#5cb846]/20 space-y-2">
            <div className="flex items-center gap-2 text-[#1c3524] font-bold">
              <Award className="w-4 h-4 text-[#c9a86a]" /> Plano Black Diamond Ativo
            </div>
            <p className="text-[#404a3b]">
              Cobertura total para residências de alto padrão em Goiânia e região metropolitana com prioridade máxima.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-3 text-[#404a3b] p-2 bg-[#f4f6f4] rounded-xl">
              <Mail className="w-4 h-4 text-[#1c3524]" />
              <span className="font-medium text-[#1c3524]">carlos.ferraz@alphaville.com.br</span>
            </div>
            <div className="flex items-center gap-3 text-[#404a3b] p-2 bg-[#f4f6f4] rounded-xl">
              <Phone className="w-4 h-4 text-[#1c3524]" />
              <span className="font-medium text-[#1c3524]">(62) 99812-7788</span>
            </div>
            <div className="flex items-center gap-3 text-[#404a3b] p-2 bg-[#f4f6f4] rounded-xl">
              <MapPin className="w-4 h-4 text-[#1c3524]" />
              <span className="font-medium text-[#1c3524]">Alphaville Flamboyant, Residencial Goiás</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#1c3524] hover:bg-[#14291a] text-white font-bold text-xs shadow-md transition-all"
          >
            Salvar e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
