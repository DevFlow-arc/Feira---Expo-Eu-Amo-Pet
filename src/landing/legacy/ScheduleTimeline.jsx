import React, { useState } from 'react';
import { Clock, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ScheduleTimeline() {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleDays = [
    {
      dayNumber: 1,
      title: "Dia 1: Abertura & Conexão B2B",
      subtitle: "Sexta-feira • 10h às 21h",
      events: [
        { time: "10:00", title: "Abertura Oficial dos Portões e Recepção", loc: "Pórtico Principal", desc: "Início do credenciamento dos visitantes e ativação dos estandes." },
        { time: "12:00 às 17:00", title: "Plantão Veterinário Oficial no CAEX", loc: "Central do Expositor", desc: "Conferência de atestados vacinais e liberação de entrada dos pets com RT." },
        { time: "14:00", title: "Cerimônia Institucional com Autoridades da Prefeitura", loc: "Auditório Central", desc: "Abertura com secretários de Turismo, Desenvolvimento e Defesa Animal." },
        { time: "16:00", title: "Seminário VET 360: Inovação e Gestão no Mercado Pet", loc: "Palco de Palestras", desc: "Painel exclusivo para médicos veterinários e proprietários de pet shops." },
        { time: "19:00", title: "Desfile de Boas-Vindas Pet", loc: "Passarela Principal", desc: "Apresentação inaugural de raças e abertura dos estandes gastronômicos." }
      ]
    },
    {
      dayNumber: 2,
      title: "Dia 2: Família, Saúde & Concursos",
      subtitle: "Sábado • 10h às 21h",
      events: [
        { time: "10:30", title: "Início do Mutirão do Castramóvel e Vacinação", loc: "Área Municipal CCZ", desc: "Atendimento veterinário e orientações gratuitas com a equipe da Prefeitura." },
        { time: "11:00", title: "Abertura da Grande Feira de Adoção Responsável", loc: "Espaço Adote um Amor", desc: "Apresentação de cães e gatos resgatados prontos para ganhar um lar." },
        { time: "14:00", title: "Demonstrações e Competição de Agility Canino", loc: "Arena Externa", desc: "Circuito de velocidade e obstáculos com adestradores profissionais." },
        { time: "16:30", title: "Concurso da Melhor Fantasia Pet", loc: "Passarela de Desfiles", desc: "Premiação oficial com troféus e kits oferecidos pelas marcas patrocinadoras." },
        { time: "19:00", title: "Sessão Especial: Cuidados com Aves e Animais Exóticos", loc: "Espaço Exóticos", desc: "Palestra com biólogos e interação monitorada para crianças e adultos." }
      ]
    },
    {
      dayNumber: 3,
      title: "Dia 3: Adoção & Premiações",
      subtitle: "Domingo • 10h às 20h",
      events: [
        { time: "10:00", title: "Encontro dos Tutores e Caminhada Pet Friendly", loc: "Pátio da Fundação", desc: "Concentração matinal e distribuição de brindes dos expositores." },
        { time: "13:00", title: "Workshop de Adestramento Positivo e Comportamento", loc: "Arena de Lazer", desc: "Dicas práticas para convivência harmoniosa em casa e em passeios." },
        { time: "15:00", title: "Celebrando a Vida: Homenagem às Famílias Adotantes", loc: "Palco Central", desc: "Apresentação dos animais adotados durante o fim de semana com o CCZ." },
        { time: "17:30", title: "Premiação dos Melhores Estandes & Destaques da Feira", loc: "Auditório Central", desc: "Reconhecimento oficial dos expositores e entrega dos certificados." },
        { time: "20:00", title: "Encerramento Oficial e Agradecimentos", loc: "Pórtico Principal", desc: "Celebração do sucesso da edição e anúncio da próxima data." }
      ]
    }
  ];

  return (
    <section id="cronograma" className="py-20 bg-white border-b border-pet-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-pet-forest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Estrutura Inspirada no Modelo REA Lavelo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Cronograma Oficial dos 3 Dias de Evento
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Planejamento detalhado com atrações simultâneas para expositores, veterinários e visitantes.
          </p>

          {/* Day Selector Buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {scheduleDays.map((d) => (
              <button
                key={d.dayNumber}
                onClick={() => setActiveDay(d.dayNumber)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  activeDay === d.dayNumber
                    ? 'bg-pet-slate text-white shadow-md'
                    : 'bg-pet-sand text-slate-600 hover:bg-slate-200 border border-pet-border'
                }`}
              >
                Dia 0{d.dayNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Timeline */}
        {scheduleDays
          .filter((d) => d.dayNumber === activeDay)
          .map((day) => (
            <div key={day.dayNumber} className="max-w-4xl mx-auto">
              
              <div className="mb-8 p-4 rounded-2xl bg-pet-sand border border-pet-border flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {day.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {day.subtitle}
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-white border border-slate-200 text-pet-slate">
                  Parque da Fundação Rural de Campos
                </span>
              </div>

              {/* Timeline Item Stack */}
              <div className="space-y-4">
                {day.events.map((ev, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-pet-terracotta/40 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 card-hover"
                  >
                    <div className="flex items-center gap-3.5 shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-pet-terracotta flex items-center justify-center font-bold text-xs">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-pet-terracotta font-mono">
                          {ev.time}
                        </span>
                        <div className="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {ev.loc}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 sm:px-4">
                      <h4 className="text-sm font-bold text-slate-800">
                        {ev.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>

                    <div className="self-end sm:self-center">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Confirmado
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

      </div>
    </section>
  );
}
