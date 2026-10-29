import React, { useState } from 'react';
import { Wrench, Droplet, Zap, Wind, Lock, Sparkles, Search, CheckCircle2, Calendar, Clock, ArrowRight, ShieldCheck, X } from 'lucide-react';

interface ServicesScreenProps {
  initialCategory?: string;
  onNewRequestCreated: (reqTitle: string) => void;
}

export default function ServicesScreen({ initialCategory = '', onNewRequestCreated }: ServicesScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(initialCategory || 'Todos');
  const [bookingService, setBookingService] = useState<any | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [date, setDate] = useState('2026-10-30');
  const [timeSlot, setTimeSlot] = useState('09:00 - 11:00');
  const [urgency, setUrgency] = useState('Normal (Até 24h)');
  const [notes, setNotes] = useState('');

  const servicesList = [
    { id: 1, title: 'Reparo Hidráulico Preventivo & Corretivo', category: 'Hidráulica', icon: Droplet, desc: 'Vazamentos em tubulações, registros, caixas d\'água e bombas pressurizadoras.', price: 'Incluso no Plano VIP', duration: '1h - 2h' },
    { id: 2, title: 'Revisão do Quadro Elétrico e Disjuntores', category: 'Elétrica', icon: Zap, desc: 'Verificação de térmicas, tomadas de alta potência e aterramento inteligente.', price: 'Incluso no Plano VIP', duration: '1h - 1h30' },
    { id: 3, title: 'Higienização e Manutenção de Ar-Condicionado', category: 'Climatização', icon: Wind, desc: 'Limpeza de filtros, esterilização UV e aferição de gás em sistemas Inverter / VRF.', price: 'Incluso no Plano VIP', duration: '1h30 por unidade' },
    { id: 4, title: 'Verificação de CFTV, Alarmes e Automatizadores', category: 'Segurança', icon: Lock, desc: 'Ajuste de câmeras perimetrais, portões eletrônicos e centrais de biometria.', price: 'Incluso no Plano VIP', duration: '1h' },
    { id: 5, title: 'Limpeza Pós-Obra ou Fina de Alto Padrão', category: 'Limpeza', icon: Sparkles, desc: 'Equipe especializada com produtos importados para mármores, vidros e madeiras.', price: 'Sob Consulta / Cotas', duration: '4h - 8h' },
    { id: 6, title: 'Manutenção de Fechaduras Digitais e Interfones', category: 'Geral', icon: Wrench, desc: 'Reprogramação de senhas, troca de pilhas de alta performance e lubrificação.', price: 'Incluso no Plano VIP', duration: '45 min' },
  ];

  const filters = ['Todos', 'Hidráulica', 'Elétrica', 'Climatização', 'Segurança', 'Limpeza', 'Geral'];

  const filteredServices = servicesList.filter((s) => {
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'Todos' || s.category.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    onNewRequestCreated(bookingService.title);
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingService(null);
    }, 2000);
  };

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#1c3524]">Catálogo de Serviços</h2>
        <p className="text-xs text-[#404a3b]">Especialistas homologados com garantia Goiás Concierge</p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#404a3b]" />
        <input
          type="text"
          placeholder="Buscar serviço (ex: ar-condicionado, vazamento...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#1c3524]/10 text-xs text-[#1c3524] placeholder-[#404a3b]/60 focus:outline-none focus:ring-2 focus:ring-[#5cb846]/30 shadow-sm"
        />
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedFilter === f
                ? 'bg-[#1c3524] text-white shadow-sm'
                : 'bg-white border border-[#1c3524]/10 text-[#404a3b] hover:bg-[#f1fcf3]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-3">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white p-4 rounded-2xl border border-[#1c3524]/10 shadow-[0_4px_20px_-2px_rgba(28,53,36,0.04)] space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#5cb846]/12 text-[#5cb846] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#5cb846] uppercase tracking-wider">{service.category}</span>
                    <h3 className="text-sm font-bold text-[#1c3524] leading-snug">{service.title}</h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#404a3b] leading-relaxed">{service.desc}</p>

              <div className="flex items-center justify-between pt-2 border-t border-[#1c3524]/5 text-xs">
                <div>
                  <span className="text-[#404a3b] block text-[10px]">Custo / Cobertura</span>
                  <span className="font-bold text-[#1c3524]">{service.price}</span>
                </div>
                <button
                  onClick={() => setBookingService(service)}
                  className="px-4 py-2 rounded-xl bg-[#5cb846] hover:bg-[#4ea23b] text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
                >
                  Solicitar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Booking Modal */}
      {bookingService && (
        <div className="fixed inset-0 z-50 bg-[#141e19]/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-[#1c3524]/10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#1c3524]/10">
              <h3 className="font-serif text-lg font-bold text-[#1c3524]">Agendar Serviço VIP</h3>
              <button
                onClick={() => setBookingService(null)}
                className="w-8 h-8 rounded-full bg-[#f1fcf3] flex items-center justify-center text-[#404a3b] hover:bg-[#e5f1e8]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!bookingSuccess ? (
              <form onSubmit={handleConfirmBooking} className="py-4 space-y-4">
                <div className="bg-[#f1fcf3] p-3 rounded-xl border border-[#5cb846]/20">
                  <span className="text-[10px] font-bold text-[#5cb846] uppercase block">Serviço Selecionado</span>
                  <h4 className="text-sm font-bold text-[#1c3524]">{bookingService.title}</h4>
                  <p className="text-xs text-[#404a3b] mt-0.5">Duração estimada: {bookingService.duration}</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c3524] block">Data Desejada:</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-[#404a3b]" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f4f6f4] border border-[#1c3524]/10 text-xs text-[#1c3524] font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c3524] block">Horário de Preferência:</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f4f6f4] border border-[#1c3524]/10 text-xs text-[#1c3524] font-medium"
                  >
                    <option>08:00 - 10:00 (Manhã)</option>
                    <option>10:00 - 12:00 (Manhã)</option>
                    <option>14:00 - 16:00 (Tarde)</option>
                    <option>16:00 - 18:00 (Tarde)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c3524] block">Nível de Urgência:</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f4f6f4] border border-[#1c3524]/10 text-xs text-[#1c3524] font-medium"
                  >
                    <option>Normal (Agendamento padrão)</option>
                    <option>Urgente (Atendimento em até 4h)</option>
                    <option>Emergência (Imediato - Plantão)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#1c3524] block">Observações para o Técnico:</label>
                  <textarea
                    rows={3}
                    placeholder="Descreva detalhes adicionais (ex: portão social lateral, chave com caseiro)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#f4f6f4] border border-[#1c3524]/10 text-xs text-[#1c3524] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#5cb846] hover:bg-[#4ea23b] text-white font-bold text-sm shadow-lg shadow-[#5cb846]/25 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" /> Confirmar Solicitação VIP
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#5cb846]/15 text-[#5cb846] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#1c3524]">Serviço Agendado com Sucesso!</h4>
                  <p className="text-xs text-[#404a3b] mt-1">
                    Um técnico homologado foi atribuído ao seu chamado. Você pode acompanhar o andamento na aba Chamados.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
