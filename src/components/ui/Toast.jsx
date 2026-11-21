import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-sky-500" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-fade-in">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl rounded-xl p-4 flex items-center gap-3 text-slate-800">
        {icons[toast.type] || icons.success}
        <span className="text-sm font-medium pr-2">{toast.message}</span>
      </div>
    </div>
  );
}
