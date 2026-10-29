'use client';

import React, { useState } from 'react';
import { Lock, Send, CheckCircle } from 'lucide-react';

export default function BookingSection() {
  const [service, setService] = useState('');
  const [region, setRegion] = useState('');
  const [timeSlot, setTimeSlot] = useState('urgente');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de solicitar um atendimento VIP.%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Serviço:* ${encodeURIComponent(service)}%0A*Região:* ${encodeURIComponent(region)}%0A*Horário:* ${encodeURIComponent(timeSlot)}%0A%0AAguardo retorno da central!`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=556281678149&text=${text}&type=phone_number&app_absent=0`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#28332d] text-[#e8f4eb]" id="solicitar-vip">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 sm:gap-10">
        <div className="text-center flex flex-col gap-2.5 sm:gap-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ffdea4]">Agendamento Exclusivo</span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Solicitar Atendimento VIP em 3 Passos
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#d1ddd4] max-w-xl mx-auto leading-relaxed">
            Defina sua necessidade. O nosso Concierge Técnico retornará em até 15 minutos com o perfil do profissional credenciado.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 text-[#141e19] shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {/* Step 1 */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs font-bold text-[#141e19] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#5cb846] text-[#074400] flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>Tipo de Serviço</span>
                  </label>
                  <select
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-12 px-3.5 sm:px-4 rounded-xl bg-[#ebf7ee] text-[#141e19] text-xs font-medium outline-none focus:ring-2 focus:ring-[#106e00]"
                  >
                    <option value="">Selecione o serviço...</option>
                    <option value="Higienização de Ar-Condicionado">Higienização de Ar-Condicionado</option>
                    <option value="Manutenção de Geladeiras">Manutenção de Geladeiras</option>
                    <option value="Ajuste de Móveis Planejados">Ajuste de Móveis Planejados</option>
                    <option value="Manutenção / Troca de Chuveiro Elétrico">Manutenção / Troca de Chuveiro Elétrico</option>
                    <option value="Reparos de Torneiras e Pias">Reparos de Torneiras e Pias</option>
                    <option value="Manutenção de Máquina de Lavar">Manutenção de Máquina de Lavar</option>
                    <option value="Pequenas Pinturas e Retoques">Pequenas Pinturas e Retoques</option>
                    <option value="Consultoria Técnica Geral">Consultoria Técnica Geral</option>
                  </select>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs font-bold text-[#141e19] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#5cb846] text-[#074400] flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>Região ou Condomínio</span>
                  </label>
                  <select
                    required
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full h-12 px-3.5 sm:px-4 rounded-xl bg-[#ebf7ee] text-[#141e19] text-xs font-medium outline-none focus:ring-2 focus:ring-[#106e00]"
                  >
                    <option value="">Selecione a sua localização...</option>
                    <option value="Alphaville Flamboyant">Alphaville Flamboyant (Araguaia/Cruzeiro/Ipês/Goiás)</option>
                    <option value="Aldeia do Vale">Aldeia do Vale</option>
                    <option value="Jardins (Parigi, Verona, Munique, Valência)">Jardins (Parigi, Verona, Munique, Valência)</option>
                    <option value="Setor Marista / Bueno / Sul">Setor Marista / Bueno / Sul</option>
                    <option value="Portal do Sol / Granville">Portal do Sol / Granville</option>
                    <option value="Outro Bairro Nobre de Goiânia">Outro Bairro Nobre de Goiânia</option>
                  </select>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs font-bold text-[#141e19] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#5cb846] text-[#074400] flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>Horário Preferencial</span>
                  </label>
                  <select
                    required
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-12 px-3.5 sm:px-4 rounded-xl bg-[#ebf7ee] text-[#141e19] text-xs font-medium outline-none focus:ring-2 focus:ring-[#106e00]"
                  >
                    <option value="Imediato (Emergência 24h)">Imediato (Emergência 24h)</option>
                    <option value="Ainda Hoje - Período da Manhã">Ainda Hoje - Período da Manhã</option>
                    <option value="Ainda Hoje - Período da Tarde">Ainda Hoje - Período da Tarde</option>
                    <option value="Amanhã - Primeiro Horário">Amanhã - Primeiro Horário</option>
                    <option value="Agendar Data Específica com Concierge">Agendar Data Específica com Concierge</option>
                  </select>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-1">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#141e19]">Nome Completo do Titular</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 px-3.5 sm:px-4 rounded-xl bg-[#ebf7ee] text-[#141e19] text-xs font-medium outline-none focus:ring-2 focus:ring-[#106e00]"
                    placeholder="Ex: Dr. Roberto Sampaio"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#141e19]">WhatsApp para Contato</label>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 px-3.5 sm:px-4 rounded-xl bg-[#ebf7ee] text-[#141e19] text-xs font-medium outline-none focus:ring-2 focus:ring-[#106e00]"
                    placeholder="(62) 99999-0000"
                    type="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e5f1e8]">
                <div className="flex items-center gap-2 text-[#404a3b] text-xs">
                  <Lock className="w-4 h-4 text-[#106e00] shrink-0" />
                  <span>Seus dados são estritamente confidenciais (LGPD).</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#5cb846] text-white font-bold text-xs sm:text-sm hover:bg-[#106e00] shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Transmitir Chamado ao Concierge</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 sm:py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-[#5cb846]/15 text-[#106e00] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141e19]">Chamado VIP Transmitido com Sucesso!</h3>
              <p className="text-xs sm:text-sm text-[#404a3b] max-w-md mx-auto leading-relaxed">
                Você foi redirecionado para o WhatsApp oficial de atendimento ((62) 8167-8149). Nossa central em Goiânia aguarda seu contato!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-3 rounded-xl bg-[#1c3524] text-white font-bold text-xs hover:bg-[#14291a] transition-all"
              >
                Novo Agendamento
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
