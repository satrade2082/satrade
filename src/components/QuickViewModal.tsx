import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ShieldCheck, CheckCircle2, MessageCircle, FileText, Cpu, PackageCheck } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { isQuickViewOpen, closeQuickView, quickViewProduct, openQuoteModal, siteSettings } = useApp();

  if (!isQuickViewOpen || !quickViewProduct) return null;

  const handleRequestQuote = () => {
    closeQuickView();
    openQuoteModal(quickViewProduct);
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello SA Trade, I am interested in inquiring about the *${quickViewProduct.name}* (Model: ${quickViewProduct.model}, SKU: ${quickViewProduct.sku}). Please share availability and best price quote.`
    );
    window.open(`https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="quick-view-card"
        className="bg-white rounded-3xl shadow-2xl border border-slate-150 max-w-3xl w-full overflow-hidden flex flex-col max-h-[92vh] text-slate-800"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 border border-blue-200 px-2.5 py-1 rounded-full">
              {quickViewProduct.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {quickViewProduct.subcategory}
            </span>
          </div>
          <button
            onClick={closeQuickView}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image & Badges */}
          <div className="flex flex-col">
            <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-4/3 flex items-center justify-center">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                  {quickViewProduct.brand}
                </span>
                {quickViewProduct.featured && (
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-orange-500 text-white shadow-sm">
                    Featured Choice
                  </span>
                )}
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="mt-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">Availability:</span>
                <span className={`font-semibold inline-flex items-center gap-1 ${
                  quickViewProduct.availability === 'In Stock' ? 'text-emerald-600' : 'text-orange-600'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {quickViewProduct.availability}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">Product SKU:</span>
                <span className="font-mono text-slate-500">{quickViewProduct.sku}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600">Warranty:</span>
                <span className="text-slate-900 font-semibold">{quickViewProduct.warranty}</span>
              </div>
              {quickViewProduct.bestFor && (
                <div className="pt-1 border-t border-slate-200">
                  <span className="font-semibold text-slate-600 block mb-0.5">Recommended Application:</span>
                  <span className="text-blue-600 font-semibold">{quickViewProduct.bestFor}</span>
                </div>
              )}
            </div>
          </div>

          {/* Details & Specs */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900 leading-snug">{quickViewProduct.name}</h2>
              <p className="text-xs text-slate-500 font-medium mt-1">Model: {quickViewProduct.model}</p>
              
              <div className="mt-3 text-2xl font-extrabold text-slate-900">
                {quickViewProduct.isPriceOnRequest || !quickViewProduct.price ? (
                  <span className="text-blue-600 text-lg font-bold">Request Official Quote</span>
                ) : (
                  <span>
                    ₹{quickViewProduct.price.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-500 ml-1.5">+ GST & Warranty Included</span>
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {quickViewProduct.shortDescription}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  Technical Specifications
                </h4>
                <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 text-xs">
                  {Object.entries(quickViewProduct.specifications).map(([key, val]) => (
                    <div key={key} className="grid grid-cols-3 p-2.5 px-3 bg-white hover:bg-slate-50 transition-colors">
                      <span className="font-semibold text-slate-700 col-span-1">{key}</span>
                      <span className="text-slate-500 col-span-2">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-150 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleRequestQuote}
                id="quick-view-quote-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-full shadow-md shadow-blue-600/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                Request a Quote
              </button>
              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                id="quick-view-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-full shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
