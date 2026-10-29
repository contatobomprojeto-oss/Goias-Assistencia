import React, { useState } from 'react';
import { Shield, Home, FileText, CheckCircle2, Cpu, Wrench, ChevronRight, Lock, Key } from 'lucide-react';

export default function PropertyScreen() {
  const [activeTab, setActiveTab] = useState<'info' | 'warranties' | 'access'>('info');

  const equipment = [
    { name: 'Inversor Solar Residencial 10kW', brand: 'Fronius', warranty: 'Até Março/2031', status: 'Revisado' },
    { name: 'Sistema de Climatização VRF (8 Zonas)', brand: 'Daikin', warranty: 'Até Novembro/2028', status: 'Em Garantia' },
    { name: 'Central de Alarme & CFTV Perimetral', brand: 'Hikvision', warranty: 'Até Julho/2027', status: 'Ativo' },
    { name: 'Bomba Pressurizadora de Alta Vazão', brand: 'Rotor', warranty: 'Até Outubro/2027', status: 'Revisado' },
  ];

  const accessLogs = [
    { name: 'João Carlos (Jardineiro Homologado)', date: 'Ontem, 08:30 - 12:00', type: 'Entrada Autorizada' },
    { name: 'Equipe Daikin (Manutenção AC)', date: '18 Out, 14:00 - 16:30', type: 'Entrada Autorizada' },
    { name: 'Mariana Lima (Governanta)', date: 'Segunda-feira, 07:00 - 17:00', type: 'Frequente' },
  ];

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto space-y-5">
      <div>
        <h2 className="font-serif text-2xl font-bold text-[#1c3524]">Minha Residência</h2>
        <p className="text-xs text-[#404a3b]">Gestão patrimonial, garantias e controle de acesso VIP</p>
      </div>

      {/* Property Badge */}
      <div className="bg-[#1c3524] text-white p-5 rounded-2xl shadow-lg relative overflow-hidden border border-[#c9a86a]/30 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#c9a86a] tracking-wider uppercase">Alphaville Flamboyant</span>
            <h3 className="font-serif text-xl font-bold">Residência Ferraz</h3>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#5cb846] text-white">
            Diamond VIP
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-xs">
          <div>
            <span className="text-[#b1ceb5] block text-[10px]">Área Construída</span>
            <span className="font-bold">480 m²</span>
          </div>
          <div>
            <span className="text-[#b1ceb5] block text-[10px]">Cotas Anuais</span>
            <span className="font-bold text-[#5cb846]">10 / 12 disp.</span>
          </div>
          <div>
            <span className="text-[#b1ceb5] block text-[10px]">Seguro Cobertura</span>
            <span className="font-bold text-[#ffdea4]">R$ 5 Milhões</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#e5f1e8] p-1 rounded-xl">
        <button
          onClick={() => setActiveTab('info')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'info' ? 'bg-[#1c3524] text-white shadow-sm' : 'text-[#404a3b]'
          }`}
        >
          Equipamentos
        </button>
        <button
          onClick={() => setActiveTab('warranties')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'warranties' ? 'bg-[#1c3524] text-white shadow-sm' : 'text-[#404a3b]'
          }`}
        >
          Garantias
        </button>
        <button
          onClick={() => setActiveTab('access')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'access' ? 'bg-[#1c3524] text-white shadow-sm' : 'text-[#404a3b]'
          }`}
        >
          Acessos
        </button>
      </div>

      {activeTab === 'info' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#1c3524] uppercase tracking-wider">Equipamentos Homologados</h3>
            <span className="text-xs text-[#5cb846] font-semibold">4 Registrados</span>
          </div>
          {equipment.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-[#1c3524]/10 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5cb846]/10 text-[#5cb846] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1c3524]">{item.name}</h4>
                  <p className="text-[11px] text-[#404a3b]">Fabricante: {item.brand} • Garantia: {item.warranty}</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#5cb846]/15 text-[#074400]">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'warranties' && (
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-2xl border border-[#1c3524]/10 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#c9a86a] uppercase">Garantia Estrutural Goiás Concierge</span>
              <span className="text-xs font-bold text-[#5cb846]">Ativa (Vigente)</span>
            </div>
            <h4 className="text-sm font-bold text-[#1c3524]">Apólice #GO-EST-2024-99</h4>
            <p className="text-xs text-[#404a3b] leading-relaxed">
              Cobertura integral para fundações, redes embutidas de esgoto, eletrodutos primários e impermeabilização de lajes.
            </p>
            <div className="pt-2 flex justify-between items-center text-xs text-[#404a3b] border-t border-[#1c3524]/5">
              <span>Validade: 31/12/2030</span>
              <button className="text-[#5cb846] font-bold hover:underline">Baixar PDF</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'access' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#1c3524] uppercase tracking-wider">Histórico de Acesso Prestadores</h3>
            <button className="text-xs font-bold text-[#5cb846]">Autorizar Novo</button>
          </div>
          {accessLogs.map((log, idx) => (
            <div key={idx} className="bg-white p-3.5 rounded-2xl border border-[#1c3524]/10 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1c3524]/10 text-[#1c3524] flex items-center justify-center">
                  <Key className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1c3524]">{log.name}</h4>
                  <p className="text-[10px] text-[#404a3b]">{log.date}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-[#f1fcf3] text-[#5cb846] px-2 py-1 rounded-full">
                {log.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
