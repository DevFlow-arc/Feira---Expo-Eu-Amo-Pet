import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, FileCheck, AlertTriangle, Stethoscope, Bird, Dog, Download, Clock } from 'lucide-react';

export default function BiosafetyView() {
  const { data, updateBiosafetyChecklist } = useApp();
  const { biosafetyChecklist } = data;

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Regulamentação CRMV & Defesa Agropecuária
          </span>
          <h2 className="font-display text-2xl font-extrabold text-slate-900 mt-2">
            Sanidade Animal, GTA & Biosseguridade
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Controle sanitário estrito baseado nos modelos do IMA, MAPA e manuais técnicos de feiras agropecuárias.
          </p>
        </div>
      </div>

      {/* RT Profile Box */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base font-bold text-slate-900">
                Dr. Roberto Mendonça
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                CRMV-RJ 14.892
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Médico Veterinário Responsável Técnico (RT Oficial do Evento)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-slate-600">
          <Clock className="w-4 h-4 text-amber-500" />
          <span>Plantão CAEX: <strong>12h00 às 17h00</strong> para triagem</span>
        </div>
      </div>

      {/* Vaccination & Health Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase">
            <Dog className="w-4 h-4 text-pet-terracotta" />
            Cães e Gatos
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>Vacinas Obrigatórias:</strong> Antirrábica e Polivalente com validade de 1 ano.</li>
            <li>• <strong>Reforço:</strong> Aplicado com no mínimo 20 dias de antecedência.</li>
            <li>• <strong>Atestado de Saúde:</strong> Expedido por veterinário no máx. 15 dias antes.</li>
            <li>• <strong>Filhotes:</strong> Permitidos somente com o ciclo completo (3 polivalentes + antirrábica).</li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase">
            <Bird className="w-4 h-4 text-pet-teal" />
            Aves & Criatórios
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>GTA Obrigatória:</strong> Guia de Trânsito Animal emitida por profissional habilitado.</li>
            <li>• <strong>Biosseguridade:</strong> Telas anti-fuga com malha não superior a 1 polegada (2,54cm).</li>
            <li>• <strong>Quarentena:</strong> Isolamento de novas aves por 14 dias antes do transporte.</li>
            <li>• <strong>Controle Sanitário:</strong> Desinfecção de gaiolas e recipientes herméticos de ração.</li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            Furões & Pequenos Exóticos
          </div>
          <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <li>• <strong>Furões (Ferrets):</strong> Vacina de Cinomose estritamente obrigatória.</li>
            <li>• <strong>Coelhos & Porquinhos:</strong> Atestado de sanidade e ausência de ectoparasitas.</li>
            <li>• <strong>Exóticos (Répteis):</strong> Autorização de transporte e documentação de origem legal.</li>
            <li>• <strong>Acompanhamento:</strong> Nenhum animal pode permanecer desacompanhado no estande.</li>
          </ul>
        </div>

      </div>

      {/* Checklist Action Items */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-4">
        <h3 className="font-display text-base font-bold text-slate-900">
          Checklist de Biosseguridade e Sanidade Animal
        </h3>

        <div className="space-y-3">
          {biosafetyChecklist.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-500 mt-0.5">{item.description}</p>
                {item.notes && <p className="text-slate-400 italic mt-0.5">{item.notes}</p>}
              </div>

              <button
                onClick={() => updateBiosafetyChecklist(item.id, {
                  status: item.status === 'concluido' ? 'em_andamento' : 'concluido'
                })}
                className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition-colors ${
                  item.status === 'concluido'
                    ? 'bg-emerald-600 text-white'
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
