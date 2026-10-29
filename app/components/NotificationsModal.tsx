import React from 'react';
import { Bell, CheckCircle2, Clock, Shield, X } from 'lucide-react';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
  if (!isOpen) return null;

  const notifications = [
    { title: 'Técnico a Caminho', desc: 'Carlos Mendes iniciou o deslocamento para sua residência.', time: 'Há 5 min', unread: true },
    { title: 'Vistoria Preventiva Concluída', desc: 'O relatório do sistema solar foi aprovado pelo concierge.', time: 'Ontem', unread: false },
    { title: 'Renovação de Cota Anual', desc: 'Sua assinatura Black Diamond foi renovada automaticamente.', time: '24 Out', unread: false },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#141e19]/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-[#1c3524]/15 space-y-4 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[#1c3524]/10">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#5cb846]" />
            <h3 className="font-serif text-lg font-bold text-[#1c3524]">Notificações VIP</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="w-8 h-8 rounded-full bg-[#f1fcf3] flex items-center justify-center text-[#404a3b] hover:bg-[#e5f1e8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2.5">
          {notifications.map((n, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl border transition-all ${
                n.unread ? 'bg-[#f1fcf3] border-[#5cb846]/30' : 'bg-white border-[#1c3524]/10'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#1c3524]">{n.title}</span>
                <span className="text-[10px] text-[#404a3b]">{n.time}</span>
              </div>
              <p className="text-[11px] text-[#404a3b]">{n.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#1c3524] text-white font-bold text-xs hover:bg-[#14291a] transition-all"
        >
          Marcar Todas como Lidas
        </button>
      </div>
    </div>
  );
}
