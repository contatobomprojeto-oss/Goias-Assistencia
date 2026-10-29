import React, { useState } from 'react';
import { AlertTriangle, PhoneCall, ShieldAlert, CheckCircle2, X } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDispatchSuccess: (emergencyType: string) => void;
}

export default function EmergencyModal({ isOpen, onClose, onDispatchSuccess }: EmergencyModalProps) {
  const [selectedIssue, setSelectedIssue] = useState('Vazamento Grave de Água');
  const [isDispatched, setIsDispatched] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const emergencies = [
    { id: 'water', title: 'Vazamento Grave de Água / Inundação', desc: 'Registro principal ou encanamento estourado' },
    { id: 'electric', title: 'Curto-Circuito / Falta de Energia Total', desc: 'Risco de fogo ou painel elétrico sobrecarregado' },
    { id: 'security', title: 'Alarme de Segurança / Intrusão', desc: 'Acionamento de perímetro ou portão travado' },
    { id: 'lock', title: 'Trancamento / Chaveiro de Urgência', desc: 'Porta blindada ou portão social bloqueado' },
  ];

  const handleDispatch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsDispatched(true);
      onDispatchSuccess(selectedIssue);
    }, 1500);
  };

  const handleResetAndClose = () => {
    setIsDispatched(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141e19]/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-[#1c3524]/10 animate-in fade-in slide-in-from-bottom duration-300">
        <div className="flex items-center justify-between pb-4 border-b border-[#1c3524]/10">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#ba1a1a]/15 text-[#ba1a1a] flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1c3524]">SOS Emergência 24h</h3>
              <p className="text-xs text-[#404a3b]">Prioridade máxima Goiás Concierge</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-[#f1fcf3] flex items-center justify-center text-[#404a3b] hover:bg-[#e5f1e8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isDispatched ? (
          <div className="py-5 space-y-4">
            <div className="bg-[#ba1a1a]/5 border border-[#ba1a1a]/20 p-3.5 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#ba1a1a] shrink-0 mt-0.5" />
              <div className="text-xs text-[#141e19]">
                <strong className="font-bold text-[#ba1a1a] block mb-0.5">Resposta em até 20 minutos</strong>
                Sua residência em Alphaville Flamboyant possui cobertura prioritária ativa. Um técnico plantonista será despachado imediatamente.
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1c3524] uppercase tracking-wider block">
                Selecione a Natureza da Emergência:
              </label>
              {emergencies.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIssue(item.title)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                    selectedIssue === item.title
                      ? 'border-[#ba1a1a] bg-[#ba1a1a]/5 ring-2 ring-[#ba1a1a]/20'
                      : 'border-[#bfcab6]/50 bg-white hover:bg-[#f1fcf3]'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-[#1c3524] block">{item.title}</span>
                    <span className="text-[11px] text-[#404a3b]">{item.desc}</span>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedIssue === item.title ? 'border-[#ba1a1a] bg-[#ba1a1a]' : 'border-[#bfcab6]'}`}>
                    {selectedIssue === item.title && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={handleDispatch}
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#ba1a1a] hover:bg-[#93000a] text-white font-bold text-sm shadow-lg shadow-[#ba1a1a]/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <PhoneCall className="w-4 h-4" />
                    Acionar Plantão de Urgência Imediato
                  </>
                )}
              </button>
              <a
                href="tel:0800620000"
                className="w-full py-2.5 rounded-xl border border-[#1c3524]/20 text-[#1c3524] font-semibold text-xs text-center hover:bg-[#f1fcf3] transition-colors"
              >
                Ligar Direto para Central 0800 Goiás VIP
              </a>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#5cb846]/15 text-[#5cb846] rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-[#1c3524]">Plantão Acionado com Sucesso!</h4>
              <p className="text-xs text-[#404a3b] mt-1 max-w-xs mx-auto">
                Sua solicitação de emergência para <strong className="text-[#1c3524]">{selectedIssue}</strong> foi recebida pela Central Goiânia.
              </p>
            </div>
            <div className="bg-[#f1fcf3] p-4 rounded-2xl border border-[#5cb846]/30 text-left space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-[#404a3b]">Técnico Designado:</span>
                <span className="font-bold text-[#1c3524]">Marcos Vinícius (Plantão A)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#404a3b]">Previsão de Chegada:</span>
                <span className="font-bold text-[#5cb846]">14 minutos (GPS Ativo)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#404a3b]">Protocolo:</span>
                <span className="font-bold text-[#1c3524]">#GO-2026-9812</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-[#1c3524] text-white font-bold text-sm hover:bg-[#14291a] transition-all"
            >
              Acompanhar Atendimento em Tempo Real
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
