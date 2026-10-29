import React, { useState } from 'react';
import { Clock, CheckCircle2, MapPin, Phone, MessageSquare, Shield, User, ArrowUpRight, Star } from 'lucide-react';

interface TrackingScreenProps {
  onOpenChat: () => void;
}

export default function TrackingScreen({ onOpenChat }: TrackingScreenProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

  const activeCalls = [
    {
      id: 'GO-9812',
      title: 'Manutenção de Climatização Split',
      category: 'Climatização',
      status: 'Técnico a Caminho',
      eta: '12 minutos',
      technician: {
        name: 'Carlos Mendes',
        rating: 4.95,
        role: 'Especialista Sênior VRF & Inverter',
        phone: '(62) 99821-4432',
        photo: 'CM',
      },
      address: 'Alphaville Flamboyant, Residencial Goiás, Casa 42',
      timeline: [
        { time: '14:30', title: 'Chamado Registrado via App', desc: 'Solicitação recebida e validada pelo Concierge', done: true },
        { time: '14:32', title: 'Técnico Homologado Atribuído', desc: 'Carlos Mendes escalado por proximidade', done: true },
        { time: '14:40', title: 'Saída da Base Goiânia', desc: 'Deslocamento via Rodovia GO-020 com GPS monitorado', done: true },
        { time: '14:52', title: 'Previsão de Chegada na Residência', desc: 'Aproximando-se da portaria principal', done: false, current: true },
        { time: '15:05', title: 'Início e Conclusão do Serviço', desc: 'Aferição e garantia Goiás Residencial', done: false },
      ],
    },
  ];

  const pastCalls = [
    {
      id: 'GO-8491',
      title: 'Verificação Preventiva do Quadro Elétrico',
      category: 'Elétrica',
      date: '15 Out 2026',
      status: 'Concluído com Sucesso',
      technician: 'Roberto Siqueira',
      rating: 5.0,
    },
    {
      id: 'GO-7920',
      title: 'Reparo em Válvula Pressurizadora',
      category: 'Hidráulica',
      date: '02 Out 2026',
      status: 'Concluído com Sucesso',
      technician: 'Marcos Vinícius',
      rating: 4.9,
    },
  ];

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#1c3524]">Acompanhamento</h2>
          <p className="text-xs text-[#404a3b]">Histórico e tempo real de chamados residenciais</p>
        </div>
        <div className="flex bg-[#e5f1e8] p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'active' ? 'bg-[#1c3524] text-white shadow-sm' : 'text-[#404a3b]'
            }`}
          >
            Ativos (1)
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'history' ? 'bg-[#1c3524] text-white shadow-sm' : 'text-[#404a3b]'
            }`}
          >
            Histórico
          </button>
        </div>
      </div>

      {activeTab === 'active' ? (
        <div className="space-y-4">
          {activeCalls.map((call) => (
            <div key={call.id} className="bg-white rounded-2xl p-5 border border-[#1c3524]/10 shadow-[0_4px_20px_-2px_rgba(28,53,36,0.06)] space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1c3524]/10">
                <div>
                  <span className="text-[10px] font-bold text-[#5cb846] uppercase tracking-wider">{call.category} • {call.id}</span>
                  <h3 className="text-sm font-bold text-[#1c3524]">{call.title}</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#5cb846]/15 text-[#074400] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5cb846] animate-ping" />
                  {call.status}
                </span>
              </div>

              {/* ETA & Map preview simulator */}
              <div className="bg-[#f1fcf3] rounded-xl p-3.5 border border-[#5cb846]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#5cb846] text-white flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#404a3b] block font-semibold uppercase">Tempo Estimado (ETA)</span>
                    <span className="text-base font-bold text-[#1c3524]">{call.eta}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#404a3b] block">Distância</span>
                  <span className="text-xs font-bold text-[#5cb846]">3.2 km da residência</span>
                </div>
              </div>

              {/* Technician Info */}
              <div className="bg-[#f4f6f4] p-3.5 rounded-xl border border-[#1c3524]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1c3524] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {call.technician.photo}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-[#1c3524]">{call.technician.name}</h4>
                      <span className="flex items-center text-[10px] font-bold bg-[#c9a86a]/20 text-[#755a24] px-1.5 py-0.2 rounded">
                        <Star className="w-2.5 h-2.5 fill-current mr-0.5" /> {call.technician.rating}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#404a3b]">{call.technician.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${call.technician.phone}`}
                    aria-label="Ligar para o técnico"
                    className="w-9 h-9 rounded-full bg-[#5cb846] text-white flex items-center justify-center shadow-md hover:bg-[#4ea23b] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <button
                    onClick={onOpenChat}
                    aria-label="Abrir chat"
                    className="w-9 h-9 rounded-full bg-[#1c3524] text-white flex items-center justify-center shadow-md hover:bg-[#14291a] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#1c3524] uppercase tracking-wider">Linha do Tempo Operacional</h4>
                <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#bfcab6]/50">
                  {call.timeline.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div
                        className={`absolute -left-5 top-0.5 w-3 h-3 rounded-full border-2 bg-white ${
                          step.done
                            ? 'border-[#5cb846] bg-[#5cb846]'
                            : step.current
                            ? 'border-[#5cb846] bg-white ring-4 ring-[#5cb846]/20'
                            : 'border-[#bfcab6]'
                        }`}
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1c3524]">{step.title}</span>
                        <span className="text-[10px] text-[#404a3b] font-semibold">{step.time}</span>
                      </div>
                      <p className="text-[11px] text-[#404a3b]">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {pastCalls.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-[#1c3524]/10 shadow-sm flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold bg-[#1c3524]/10 text-[#1c3524] px-2 py-0.5 rounded-full">{item.category}</span>
                  <span className="text-[10px] text-[#404a3b]">{item.date}</span>
                </div>
                <h3 className="text-xs font-bold text-[#1c3524]">{item.title}</h3>
                <p className="text-[11px] text-[#404a3b] mt-0.5">Técnico: {item.technician} • Nota: {item.rating} ★</p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#5cb846]/10 text-[#074400]">
                Concluído
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
