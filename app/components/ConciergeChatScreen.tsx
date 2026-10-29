import React, { useState } from 'react';
import { Send, Sparkles, Shield, Phone, Paperclip, CheckCheck, User } from 'lucide-react';

export default function ConciergeChatScreen() {
  const [messages, setMessages] = useState([
    {
      sender: 'concierge',
      text: 'Olá, Dr. Carlos. Aqui é o Matheus, seu Concierge Executivo na Goiás Residencial. Como posso auxiliá-lo com a Residência Ferraz (Alphaville Flamboyant) hoje?',
      time: '14:10',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickPrompts = [
    'Agendar vistoria preventiva semestral',
    'Solicitar chaveiro 24h urgente',
    'Autorizar acesso de prestadores amanhã',
    'Dúvidas sobre apólice de cobertura VIP',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const newMsg = { sender: 'user', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputMessage('');

    // Simulate concierge response
    setTimeout(() => {
      let reply = 'Compreendido perfeitamente, Dr. Carlos. Acabo de registrar sua solicitação em nossa central prioritária em Goiânia. Retornarei em instantes com a confirmação.';
      if (text.toLowerCase().includes('vistoria')) {
        reply = 'Perfeito. Agendei nossa equipe técnica sênior para a próxima quinta-feira às 10:00. O relatório será enviado diretamente ao seu e-mail.';
      } else if (text.toLowerCase().includes('chaveiro')) {
        reply = 'Acionei o plantão de chaveiros para Alphaville. O profissional chegará em até 15 minutos com identificação oficial Goiás Concierge.';
      } else if (text.toLowerCase().includes('prestadores')) {
        reply = 'Acesso liberado na portaria principal de Alphaville Flamboyant para os prestadores informados.';
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'concierge',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="pb-28 pt-2 px-4 max-w-md mx-auto flex flex-col h-[calc(100vh-80px)]">
      {/* Concierge Header Profile */}
      <div className="bg-[#1c3524] text-white p-4 rounded-2xl shadow-md mb-4 flex items-center justify-between border border-[#c9a86a]/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-[#c9a86a] text-[#261900] flex items-center justify-center font-bold text-sm shadow-inner">
              MC
            </div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#5cb846] border-2 border-[#1c3524] rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-white">Matheus Carvalho</h3>
              <span className="text-[9px] font-bold bg-[#c9a86a] text-[#261900] px-1.5 py-0.2 rounded">VIP</span>
            </div>
            <p className="text-[11px] text-[#b1ceb5]">Gerente de Conta Exclusivo Goiás</p>
          </div>
        </div>
        <a
          href="tel:62999999999"
          aria-label="Ligar para o Concierge"
          className="w-10 h-10 rounded-full bg-[#5cb846] text-white flex items-center justify-center shadow-md hover:bg-[#4ea23b] transition-colors"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                m.sender === 'user'
                  ? 'bg-[#1c3524] text-white rounded-br-none'
                  : 'bg-white text-[#141e19] border border-[#1c3524]/10 rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
            <span className="text-[10px] text-[#404a3b] mt-1 px-1">{m.time}</span>
          </div>
        ))}
      </div>

      {/* Quick Prompt Chips */}
      <div className="py-2 flex gap-2 overflow-x-auto scrollbar-none">
        {quickPrompts.map((qp, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qp)}
            className="px-3 py-1.5 rounded-full bg-white border border-[#1c3524]/15 text-[11px] font-medium text-[#1c3524] whitespace-nowrap hover:bg-[#f1fcf3] transition-colors shadow-2xs"
          >
            {qp}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2 pt-2"
      >
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Digite sua solicitação ao concierge..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border border-[#1c3524]/15 text-xs text-[#1c3524] placeholder-[#404a3b]/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5cb846]/30"
          />
          <button type="button" aria-label="Anexar arquivo" className="absolute right-3 top-3 text-[#404a3b] hover:text-[#1c3524]">
            <Paperclip className="w-4 h-4" />
          </button>
        </div>
        <button
          type="submit"
          disabled={!inputMessage.trim()}
          className="w-11 h-11 rounded-xl bg-[#5cb846] hover:bg-[#4ea23b] disabled:opacity-50 text-white flex items-center justify-center shadow-md transition-all shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
