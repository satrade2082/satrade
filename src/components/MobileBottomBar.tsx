import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MessageCircle, FileText, Wrench } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { siteSettings, openQuoteModal, setCurrentPage, currentPage } = useApp();

  if (currentPage === 'admin') return null;

  const phoneClean = siteSettings.phone.replace(/[^0-9+]/g, '');
  const waClean = siteSettings.whatsapp.replace(/[^0-9]/g, '');

  return (
    <div id="mobile-bottom-bar" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/80 text-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] safe-area-pb">
      <div className="grid grid-cols-4 gap-1 p-1.5 px-2">
        {/* Call */}
        <a
          href={`tel:${phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-50 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-1" />
          <span className="text-[10px] font-semibold tracking-tight">Call Us</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${waClean}?text=${encodeURIComponent('Hello SA Trade, I would like to inquire about IT hardware and services.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-slate-50 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-500 mb-1" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Request Service */}
        <button
          type="button"
          onClick={() => setCurrentPage('request-service')}
          className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all text-center active:scale-95 ${
            currentPage === 'request-service'
              ? 'text-orange-600 bg-orange-50 font-bold border border-orange-200'
              : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
          }`}
        >
          <Wrench className="w-4 h-4 text-orange-500 mb-1" />
          <span className="text-[10px] font-semibold tracking-tight">Service</span>
        </button>

        {/* Get Quote */}
        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white active:scale-95 transition-all text-center shadow-md shadow-blue-600/20 font-bold"
        >
          <FileText className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold tracking-tight">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
