import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div id="toast-container" className="fixed bottom-20 md:bottom-8 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          id={`toast-item-${toast.id}`}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-xl border bg-white transition-all duration-300 animate-in slide-in-from-right ${
            toast.type === 'success'
              ? 'text-slate-800 border-emerald-200 shadow-emerald-500/10'
              : toast.type === 'error'
              ? 'text-slate-800 border-rose-200 shadow-rose-500/10'
              : 'text-slate-800 border-blue-200 shadow-blue-500/10'
          }`}
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-600" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-blue-600" />}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm leading-tight text-slate-900">{toast.title}</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
