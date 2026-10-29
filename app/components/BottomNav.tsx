import React from 'react';
import { Home, Wrench, Clock, Shield, MessageSquare } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeRequestsCount?: number;
}

export default function BottomNav({ activeTab, setActiveTab, activeRequestsCount = 1 }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'services', label: 'Serviços', icon: Wrench },
    { id: 'tracking', label: 'Chamados', icon: Clock, badge: activeRequestsCount },
    { id: 'property', label: 'Residência', icon: Shield },
    { id: 'chat', label: 'Concierge', icon: MessageSquare },
  ];

  return (
    <nav aria-label="Navegação Principal" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#1c3524]/10 pb-safe shadow-[0_-4px_20px_rgba(28,53,36,0.06)]">
      <div className="max-w-md mx-auto px-2 py-2 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative ${
                isActive
                  ? 'text-[#5cb846] font-bold scale-105'
                  : 'text-[#404a3b] hover:text-[#1c3524] font-medium'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-[#5cb846]/12 text-[#5cb846]' : 'text-current'}`}>
                <Icon className="w-5 h-5" />
                {tab.badge && tab.badge > 0 && (
                  <span className="absolute -top-1 right-2 bg-[#ba1a1a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
