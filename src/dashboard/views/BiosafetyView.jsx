import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, FileCheck, AlertTriangle, Stethoscope, Bird, Dog, Download, Clock } from 'lucide-react';

export default function BiosafetyView() {
  const { data, updateBiosafetyChecklist } = useApp();
  const { biosafetyChecklist } = data;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#161e47] bg-[#cbe33d] px-3.5 py-1 rounded-full shadow-xs">
            Regulamentação CRMV & Defesa Agropecuária
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-[#202f6b] mt-2 tracking-tight">
            Sanidade Animal, GTA & Biosseguridade
          </h2>
          <p className="text-xs text-stone-500 font-medium mt-1">
            Controle sanitário estrito baseado nos modelos do IMA, MAPA e manuais técnicos de grandes feiras agropecuárias do país.
          </p>
        </div>
      </div>

      {/* RT Profile Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e5dfd3] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#cbe33d]/20 text-[#202f6b] flex items-center justify-center font-bold border border-[#cbe33d]/40 shadow-xs">
            <Stethoscope className="w-6 h-6 text-[#202f6b]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-[#202f6b]">
                Dr. Roberto Mendonça
              </h3>
              <span className="text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full bg-[#202f6b]/10 text-[#202f6b]">
                CRMV-RJ 14.892
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              Médico Veterinário Responsável Técnico (RT Oficial do Evento)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs bg-[#f8f5ee] px-4 py-2 rounded-2xl border border-stone-200 text-stone-700 font-bold">
          <Clock className="w-4 h-4 text-[#ffc600]" />
          <span>Plantão CAEX: <strong>12h00 às 17h00</strong> para triagem sanitária</span>
        </div>
      </div>

      {/* Vaccination & Health Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <div className="p-6 rounded-3xl bg-white border border-[#e5dfd3] shadow-sm space-y-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f9418c]" />
          <div className="flex items-center gap-2 text-xs font-black text-[#202f6b] uppercase tracking-wider">
            <Dog className="w-4 h-4 text-[#f9418c]" />
            Cães e Gatos
          </div>
          <ul className="text-xs text-stone-600 space-y-2 leading-relaxed font-medium">
            <li>• <strong>Vacinas Obrigatórias:</strong> Antirrábica e Polivalente com validade de 1 ano.</li>
            <li>• <strong>Reforço:</strong> Aplicado com no mínimo 20 dias de antecedência.</li>
            <li>• <strong>Atestado de Saúde:</strong> Expedido por veterinário no máx. 15 dias antes.</li>
            <li>• <strong>Filhotes:</strong> Permitidos somente com o ciclo completo (3 polivalentes + antirrábica).</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#e5dfd3] shadow-sm space-y-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#38bdf8]" />
          <div className="flex items-center gap-2 text-xs font-black text-[#202f6b] uppercase tracking-wider">
            <Bird className="w-4 h-4 text-[#38bdf8]" />
            Aves & Criatórios
          </div>
          <ul className="text-xs text-stone-600 space-y-2 leading-relaxed font-medium">
            <li>• <strong>GTA Obrigatória:</strong> Guia de Trânsito Animal emitida por profissional habilitado.</li>
            <li>• <strong>Biosseguridade:</strong> Telas anti-fuga com malha não superior a 1 polegada (2,54cm).</li>
            <li>• <strong>Quarentena:</strong> Isolamento de novas aves por 14 dias antes do transporte.</li>
            <li>• <strong>Controle Sanitário:</strong> Desinfecção de gaiolas e recipientes herméticos de ração.</li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#e5dfd3] shadow-sm space-y-3 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ffc600]" />
          <div className="flex items-center gap-2 text-xs font-black text-[#202f6b] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#ffc600]" />
            Furões & Pequenos Exóticos
          </div>
          <ul className="text-xs text-stone-600 space-y-2 leading-relaxed font-medium">
            <li>• <strong>Furões (Ferrets):</strong> Vacina de Cinomose estritamente obrigatória.</li>
            <li>• <strong>Coelhos & Porquinhos:</strong> Atestado de sanidade e ausência de ectoparasitas.</li>
            <li>• <strong>Exóticos (Répteis):</strong> Autorização de transporte e documentação de origem legal.</li>
            <li>• <strong>Acompanhamento:</strong> Nenhum animal pode permanecer desacompanhado no estande.</li>
          </ul>
        </div>

      </div>

      {/* Checklist Action Items */}
      <div className="bg-white rounded-3xl border border-[#e5dfd3] shadow-sm p-6 sm:p-7 space-y-4">
        <h3 className="text-base font-black text-[#202f6b]">
          Checklist de Biosseguridade e Sanidade Animal
        </h3>

        <div className="space-y-3">
          {biosafetyChecklist.map((item) => (
            <div key={item.id} className="p-4 sm:p-5 rounded-2xl bg-[#f8f5ee] border border-stone-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <h4 className="font-bold text-[#202f6b]">{item.title}</h4>
                <p className="text-stone-600 font-medium mt-0.5">{item.description}</p>
                {item.notes && <p className="text-stone-400 italic mt-0.5">{item.notes}</p>}
              </div>

              <button
                onClick={() => updateBiosafetyChecklist(item.id, {
                  status: item.status === 'concluido' ? 'em_andamento' : 'concluido'
                })}
                className={`px-3.5 py-1.5 rounded-xl font-bold shrink-0 transition-all ${
                  item.status === 'concluido'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                {item.status === 'concluido' ? 'Concluído' : 'Pendente / Em Andamento'}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
