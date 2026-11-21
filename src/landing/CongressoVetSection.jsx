import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Stethoscope, 
  GraduationCap, 
  Award, 
  Calendar, 
  Clock, 
  MapPin, 
  FileCheck, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';

export default function CongressoVetSection() {
  const { eventInfo, triggerCelebration, showToast } = useApp();
  const [activeTrack, setActiveTrack] = useState('dermato');

  const tracks = [
    {
      id: 'dermato',
      name: 'Dermatologia & Alergologia',
      theme: 'Manejo de Dermatite Atópica, Otites Crônicas e Terapias Biológicas',
      hours: '6 Horas de Imersão',
      lectures: [
        { time: '10:30', title: 'Novas Fronteiras no Diagnóstico de Prurido em Caninos', speaker: 'Dra. Camila Nogueira, CRMV-RJ 14.210', bio: 'Mestre em Clínica Médica com ênfase em Dermatologia pela UENF' },
        { time: '14:00', title: 'Citologia Cutânea Descomplicada para o Clínico Geral', speaker: 'Dr. Leonardo Paes, CRMV-RJ 11.890', bio: 'Especialista pela Sociedade Brasileira de Dermatologia Veterinária' },
        { time: '16:30', title: 'Manejo Terapêutico das Otites Recidivantes em Clima Tropical', speaker: 'Dra. Vanessa Meireles, CRMV-RJ 15.630', bio: 'Docente de Farmacologia e Terapêutica Veterinária' },
      ]
    },
    {
      id: 'cirurgia',
      name: 'Cirurgia & Emergência',
      theme: 'Condutas Críticas em Traumatologia, Choque e Cirurgia de Tecidos Moles',
      hours: '6 Horas de Imersão',
      lectures: [
        { time: '11:00', title: 'Abordagem Inicial do Paciente Politraumatizado: Os Primeiros 15 Minutos', speaker: 'Dr. Marcos Valadão, CRMV-RJ 9.420', bio: 'Cirurgião-chefe do Hospital Veterinário Regional' },
        { time: '14:30', title: 'Controle de Dor e Protocolos Anestésicos em Pacientes Cardiopatas e Nefropatas', speaker: 'Dra. Beatriz Ferraz, CRMV-RJ 16.400', bio: 'Especialista em Anestesiologia e Terapia Intensiva (CRMV)' },
        { time: '17:00', title: 'Complicações em Procedimentos Abdominais: Como Prevenir e Corrigir', speaker: 'Dr. Thiago Bittencourt, CRMV-RJ 12.110', bio: 'Mestre em Cirurgia de Pequenos Animais' },
      ]
    },
    {
      id: 'gestao',
      name: 'Gestão, Finanças & Marketing',
      theme: 'Precificação de Procedimentos, Retenção de Clientes e Posicionamento Ético',
      hours: '5 Horas de Imersão',
      lectures: [
        { time: '10:00', title: 'Como Calcular o Valor Real da Sua Hora Clínica e Procedimentos Cirúrgicos', speaker: 'Maycon Douglas', bio: 'Estrategista de Posicionamento e Diretor da MD Mercado Digital' },
        { time: '13:30', title: 'Experiência do Tutor no Consultório: Da Recepção à Alta Hospitalar', speaker: 'Dra. Juliana Prado, CRMV-RJ 13.500', bio: 'Consultora de Gestão de Clínicas e Hospital Veterinário' },
        { time: '15:30', title: 'Publicidade Veterinária Ética: Resolução CFMV e Atração de Clientes Qualificados', speaker: 'Dr. Roberto Silveira', bio: 'Especialista em Direito e Compliance Médico Veterinário' },
      ]
    },
    {
      id: 'nutricao',
      name: 'Nutrição & Longevidade',
      theme: 'Alimentação Natural, Dietas de Prescrição e Suplementação em Doenças Crônicas',
      hours: '5 Horas de Imersão',
      lectures: [
        { time: '11:00', title: 'Nutrição Coadjuvante na Doença Renal Crônica: O que a Ciência Comprova', speaker: 'Dra. Helena Peçanha, CRMV-RJ 17.820', bio: 'Doutora em Nutrição Animal e Pesquisadora' },
        { time: '15:00', title: 'Prescrição Segura de Alimentação Natural Cozida para Cães Idosos', speaker: 'Dr. Felipe Alvarenga, CRMV-RJ 14.880', bio: 'Clínico com Formação em Nutracêuticos e Fisiologia' },
      ]
    }
  ];

  const currentTrackData = tracks.find(t => t.id === activeTrack) || tracks[0];

  const handleInscricaoCongresso = () => {
    triggerCelebration();
    const phone = "5522997885784";
    const text = encodeURIComponent(
      `Olá! Sou profissional/acadêmico da área veterinária e gostaria de me inscrever no *Congresso VET em Foco 2025* na Feira Eu Amo Pet com emissão de certificado oficial.`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="congresso-vet" className="py-20 md:py-28 bg-[#f5f3ef] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Modeled from congressovetemfoco.com.br) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-700" />
            Atualização Técnico-Científica • VET 360
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 mt-4 tracking-tight">
            Congresso VET em Foco 2025
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            Venha acompanhar a transformação da medicina veterinária com palestrantes de referência regional e nacional. Conteúdo prático, baseado em evidências, pronto para você aplicar no consultório no dia seguinte.
          </p>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">20 Horas</div>
              <div className="text-[11px] text-stone-500">Certificado Oficial</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">12 Palestrantes</div>
              <div className="text-[11px] text-stone-500">Doutores e Especialistas</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">4 Trilhas</div>
              <div className="text-[11px] text-stone-500">Áreas de Especialidade</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-stone-900">Networking</div>
              <div className="text-[11px] text-stone-500">Lounge com Clínicas</div>
            </div>
          </div>
        </div>

        {/* Tab Selector por Trilha Científica */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden mb-12">
          
          <div className="flex flex-wrap border-b border-stone-200 bg-stone-50/80 p-2 gap-2">
            {tracks.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrack(t.id)}
                className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs font-semibold transition-all text-center ${
                  activeTrack === t.id
                    ? 'bg-white text-emerald-800 shadow-xs border border-stone-300 font-bold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                }`}
              >
                <div>{t.name}</div>
                <div className="text-[10px] text-stone-400 font-normal mt-0.5">{t.hours}</div>
              </button>
            ))}
          </div>

          {/* Programação da Trilha Ativa */}
          <div className="p-6 sm:p-8">
            <div className="mb-6 pb-4 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  {currentTrackData.name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Foco: {currentTrackData.theme}
                </p>
              </div>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                Auditório VET 360 • Climatizado
              </span>
            </div>

            <div className="space-y-4">
              {currentTrackData.lectures.map((lec, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl border border-stone-100 bg-stone-50/40 hover:bg-stone-50 hover:border-stone-300 transition-colors"
                >
                  <div className="w-20 shrink-0 pt-0.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-900 text-stone-100 text-xs font-mono font-bold">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {lec.time}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-stone-900">
                      {lec.title}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-800 mt-1">
                      {lec.speaker}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {lec.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-stone-600">
                <span className="font-semibold text-stone-900">Inscrição inclui:</span> Acesso a todas as 4 salas temáticas, kit congressista com caderno de resumos científicos, certificado com código de verificação digital e coffee-break exclusivo.
              </div>
              <button
                type="button"
                onClick={handleInscricaoCongresso}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Garantir Vaga no Congresso VET</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
