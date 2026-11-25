import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Ticket, CheckCircle2, Heart, Sparkles, Send, Download, ArrowRight } from 'lucide-react';

export default function RsvpSection() {
  const { data, showToast, triggerCelebration } = useApp();
  const { generalInfo } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: 'Cachorro',
    ticketType: 'Gratuito',
    interestedInAdoption: false
  });

  const [registeredTicket, setRegisteredTicket] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    const ticketCode = 'PET-' + Math.floor(100000 + Math.random() * 900000);
    const newTicket = {
      ...formData,
      code: ticketCode,
      dateRegistered: new Date().toLocaleDateString('pt-BR')
    };

    setRegisteredTicket(newTicket);
    triggerCelebration();
    showToast(`Inscrição confirmada com sucesso! Código: ${ticketCode}`);
  };

  return (
    <section id="ingressos" className="py-20 md:py-28 bg-white border-b border-pet-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-pet-terracotta bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Acesso & Inscrições • REA Lavelo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Garanta Sua Entrada na Feira Eu Amo Pet
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            A entrada para a feira é <strong>100% gratuita</strong> mediante pré-cadastro. Traga sua família e seus companheiros de quatro patas!
          </p>
        </div>

        {/* Form Container or Confirmation Card */}
        {!registeredTicket ? (
          <div className="bg-pet-sand rounded-3xl p-8 sm:p-10 border border-pet-border shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Type of Ticket Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Escolha seu tipo de entrada:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setFormData({ ...formData, ticketType: 'Gratuito' })}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                      formData.ticketType === 'Gratuito'
                        ? 'bg-white border-pet-terracotta shadow-md ring-2 ring-pet-terracotta/20'
                        : 'bg-white/60 border-slate-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Entrada Geral Gratuita</span>
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">R$ 0,00</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Acesso aos 3 dias de feira, estandes, praça de alimentação e espaço de adoção.
                    </p>
                  </div>

                  <div
                    onClick={() => setFormData({ ...formData, ticketType: 'VIP' })}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                      formData.ticketType === 'VIP'
                        ? 'bg-white border-pet-terracotta shadow-md ring-2 ring-pet-terracotta/20'
                        : 'bg-white/60 border-slate-200 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">Passe VIP Experiência</span>
                      <span className="text-xs font-extrabold text-pet-terracotta bg-orange-50 px-2 py-0.5 rounded">
                        R$ {generalInfo.vipTicketPrice.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Acesso antecipado, kit pet exclusivo e lugar reservado na passarela de desfiles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Carlos Silva"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pet-terracotta/20 focus:border-pet-terracotta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(22) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pet-terracotta/20 focus:border-pet-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  E-mail para envio do ingresso *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pet-terracotta/20 focus:border-pet-terracotta"
                />
              </div>

              {/* Pet Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Vai levar seu pet? Qual o nome dele?
                  </label>
                  <input
                    type="text"
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    placeholder="Ex: Thor, Mel, Belinha"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pet-terracotta/20 focus:border-pet-terracotta"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Espécie / Categoria
                  </label>
                  <select
                    value={formData.petType}
                    onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pet-terracotta/20 focus:border-pet-terracotta"
                  >
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                    <option value="Outro">Outro Pet</option>
                    <option value="Nenhum">Vou sem pet (apenas passear)</option>
                  </select>
                </div>
              </div>

              {/* Checkbox Adoção */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="adocao-check"
                  checked={formData.interestedInAdoption}
                  onChange={(e) => setFormData({ ...formData, interestedInAdoption: e.target.checked })}
                  className="w-4 h-4 text-pet-terracotta rounded border-slate-300 focus:ring-pet-terracotta"
                />
                <label htmlFor="adocao-check" className="text-xs text-slate-700 cursor-pointer">
                  Tenho interesse em adotar um pet durante a feira (espaço CCZ / ONGs)
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-pet-terracotta hover:bg-[#d44e3b] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar Minha Inscrição Gratuita</span>
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Lembramos que para a entrada de animais é obrigatória a apresentação de carteira de vacinação antirrábica e polivalente em dia.
              </p>

            </form>
          </div>
        ) : (
          /* Confirmation Ticket Card */
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden animate-scale-up">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Ticket className="w-64 h-64 text-white" />
            </div>

            <div className="flex items-center gap-3 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Inscrição Garantida com Sucesso!
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Voucher Digital: {registeredTicket.code}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block">Titular do Ingresso:</span>
                <span className="font-semibold text-white text-sm">{registeredTicket.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block">E-mail:</span>
                <span className="font-semibold text-white text-sm">{registeredTicket.email}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Tipo de Ingresso:</span>
                <span className="font-semibold text-amber-300 text-sm">{registeredTicket.ticketType}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Pet Acompanhante:</span>
                <span className="font-semibold text-white text-sm">
                  {registeredTicket.petName ? `${registeredTicket.petName} (${registeredTicket.petType})` : 'Sem pet'}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Apresente este código ou tire um print para entrada na portaria da Fundação Rural.
              </div>
              <button
                onClick={() => setRegisteredTicket(null)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
              >
                Fazer Outra Inscrição
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
