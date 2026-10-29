import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Wrench, Droplet, Wind, Lock, Sparkles, ChevronRight, PhoneCall, Clock, CheckCircle, MapPin, Star } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
  onOpenEmergency: () => void;
  onSelectServiceCategory: (cat: string) => void;
}

export default function HomeScreen({ onNavigate, onOpenEmergency, onSelectServiceCategory }: HomeScreenProps) {
  const categories = [
    { id: 'hidraulica', name: 'Hidráulica VIP', icon: Droplet, count: 'Disponível 24h', color: 'bg-blue-500/10 text-blue-600' },
    { id: 'eletrica', name: 'Elétrica & Redes', icon: Zap, count: 'Disponível 24h', color: 'bg-amber-500/10 text-amber-600' },
    { id: 'climatizacao', name: 'Ar-Condicionado', icon: Wind, count: 'Manutenção', color: 'bg-emerald-500/10 text-emerald-600' },
    { id: 'seguranca', name: 'Segurança & CFTV', icon: Lock, count: 'Plantão', color: 'bg-purple-500/10 text-purple-600' },
    { id: 'limpeza', name: 'Limpeza Fina', icon: Sparkles, count: 'Agendamento', color: 'bg-rose-500/10 text-rose-600' },
    { id: 'geral', name: 'Manutenção Geral', icon: Wrench, count: 'Especialistas', color: 'bg-indigo-500/10 text-indigo-600' },
  ];

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-6">
      {/* Property Hero Card */}
      <div className="relative overflow-hidden rounded-2xl bg-[#1c3524] text-white p-5 shadow-[0_16px_36px_-4px_rgba(28,53,36,0.15)] border border-[#c9a86a]/30">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#5cb846]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-start justify-between relative z-10 mb-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#c9a86a] text-[#261900]">
                <Star className="w-3 h-3 fill-current" /> Plano Black Diamond
              </span>
              <span className="text-xs text-[#b1ceb5]">Alphaville Flamboyant</span>
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-white">Residência Ferraz</h2>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <ShieldCheck className="w-6 h-6 text-[#7edc65]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 relative z-10 text-xs">
          <div>
            <span className="text-[#b1ceb5] block">Assistências Restantes</span>
            <span className="font-bold text-base text-white">10 / 12 anuais</span>
          </div>
          <div>
            <span className="text-[#b1ceb5] block">Gerente de Conta</span>
            <span className="font-bold text-base text-[#ffdea4]">Matheus (VIP)</span>
          </div>
        </div>
      </div>

      {/* Emergency SOS Banner */}
      <div className="bg-gradient-to-r from-[#ba1a1a]/10 via-[#ba1a1a]/5 to-transparent border border-[#ba1a1a]/30 rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#ba1a1a] text-white flex items-center justify-center shadow-md shadow-[#ba1a1a]/35 shrink-0 animate-pulse">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#1c3524]">Precisa de Atendimento Urgente?</h3>
            <p className="text-xs text-[#404a3b]">Vazamentos, curtos ou travamentos com resposta em 20min.</p>
          </div>
        </div>
        <button
          onClick={onOpenEmergency}
          className="px-3.5 py-2.5 bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-bold rounded-xl shadow-md transition-all shrink-0 active:scale-95"
        >
          SOS 24h
        </button>
      </div>

      {/* Active Call Alert Preview */}
      <div 
        onClick={() => onNavigate('tracking')}
        className="bg-white rounded-2xl p-4 border border-[#1c3524]/10 shadow-[0_4px_20px_-2px_rgba(28,53,36,0.04)] cursor-pointer hover:border-[#5cb846]/50 transition-all group"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5cb846] animate-ping" />
            <span className="text-xs font-bold text-[#5cb846] uppercase tracking-wider">Chamado em Andamento</span>
          </div>
          <span className="text-[11px] font-semibold text-[#404a3b] bg-[#f1fcf3] px-2 py-0.5 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#5cb846]" /> ETA: 12 min
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1c3524]/10 flex items-center justify-center font-bold text-[#1c3524] text-xs">
              CM
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1c3524]">Manutenção de Climatização Split</h4>
              <p className="text-xs text-[#404a3b]">Técnico Carlos Mendes a caminho (Alphaville)</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#404a3b] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Categories Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-serif text-lg font-bold text-[#1c3524]">Serviços & Concierge</h3>
          <button 
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-[#5cb846] hover:underline"
          >
            Ver Todos (24)
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectServiceCategory(cat.name);
                  onNavigate('services');
                }}
                className="bg-white p-3.5 rounded-2xl border border-[#1c3524]/8 shadow-[0_2px_8px_rgba(28,53,36,0.02)] hover:shadow-md hover:border-[#5cb846]/40 transition-all flex flex-col items-center text-center group"
              >
                <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#1c3524] leading-tight mb-0.5">{cat.name}</span>
                <span className="text-[10px] text-[#404a3b]">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Concierge Banner */}
      <div className="bg-gradient-to-br from-[#1c3524] to-[#28332d] text-white rounded-2xl p-5 shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <span className="text-[10px] font-bold tracking-widest bg-[#c9a86a] text-[#261900] px-2.5 py-0.5 rounded-full uppercase">
            Assistência Exclusiva Goiás
          </span>
          <h4 className="font-serif text-xl font-bold text-white">Solicite Vistoria Preventiva Anual</h4>
          <p className="text-xs text-[#b1ceb5] leading-relaxed">
            Como membro Black Diamond, você tem direito a uma revisão completa de sistemas elétricos, hidráulicos e estruturais sem custo adicional.
          </p>
          <button
            onClick={() => onNavigate('chat')}
            className="mt-2 px-4 py-2.5 rounded-xl bg-[#5cb846] hover:bg-[#4ea23b] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Falar com Concierge Executivo
          </button>
        </div>
      </div>
    </div>
  );
}
