import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send, ShieldCheck, CheckCircle2, Phone, Mail, Building2, PackageCheck } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, quoteModalProduct, products, addEnquiry, showToast, siteSettings } = useApp();

  const [selectedProdId, setSelectedProdId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [customerName, setCustomerName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (quoteModalProduct) {
      setSelectedProdId(quoteModalProduct.id);
    } else if (products.length > 0) {
      setSelectedProdId(products[0].id);
    }
    setIsSuccess(false);
  }, [quoteModalProduct, isQuoteModalOpen, products]);

  if (!isQuoteModalOpen) return null;

  const currentProduct = products.find(p => p.id === selectedProdId) || quoteModalProduct;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !email) {
      showToast('Required Fields Missing', 'Please provide your name, phone number, and email address.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      addEnquiry({
        type: 'Quote Request',
        customerName,
        organization,
        phone,
        email,
        productName: currentProduct ? `${currentProduct.name} (${currentProduct.model})` : 'General IT Hardware Enquiry',
        productId: currentProduct?.id,
        quantity,
        message: message || `Quotation requested for ${quantity} unit(s) of ${currentProduct?.name || 'equipment'}.`
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      showToast('Quotation Request Sent!', 'Our technical sales team will contact you shortly with the best pricing.');
    }, 600);
  };

  const handleClose = () => {
    setIsSuccess(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="quote-modal-card"
        className="bg-white rounded-3xl shadow-2xl border border-slate-150 max-w-xl w-full overflow-hidden flex flex-col max-h-[90vh] text-slate-800"
      >
        {/* Modal Header */}
        <div className="bg-slate-50 text-slate-900 p-5 px-6 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 font-bold">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Request an Official Quote</h3>
              <p className="text-xs text-slate-500">Fast competitive pricing & bulk procurement discounts</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {isSuccess ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Thank You, {customerName}!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Your quotation request for <strong className="text-slate-900">{currentProduct?.name || 'IT equipment'}</strong> ({quantity} units) has been registered. Our representative will contact you via phone/email with our best official quote and GST invoice options.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                <p><strong>Enquiry Reference:</strong> SAT-QT-{Date.now().toString().slice(-6)}</p>
                <p><strong>Direct Helpline:</strong> {siteSettings.phone} | WhatsApp: {siteSettings.mobile}</p>
                <p><strong>Email:</strong> {siteSettings.email}</p>
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-full transition-all shadow-md shadow-blue-600/20"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Reference Card */}
              {currentProduct && (
                <div className="flex items-center gap-3 p-3.5 bg-blue-50/50 border border-blue-100 rounded-2xl">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-14 h-14 rounded-xl object-cover border border-slate-200 bg-white"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 border border-blue-200 px-2 py-0.5 rounded-full inline-block mb-1">
                      {currentProduct.category} • {currentProduct.brand}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 truncate">{currentProduct.name}</h4>
                    <p className="text-xs text-slate-500 truncate">SKU: {currentProduct.sku} | Model: {currentProduct.model}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-blue-700 block">
                      {currentProduct.isPriceOnRequest || !currentProduct.price ? 'Price on Request' : `₹${currentProduct.price.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                </div>
              )}

              {/* Product Selector if no product or want to change */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Selected Equipment / Product
                </label>
                <select
                  value={selectedProdId}
                  onChange={(e) => setSelectedProdId(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.id} className="bg-white text-slate-800">
                      [{p.category}] {p.brand} - {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Required Quantity *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    required
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Acme Tech Pvt Ltd / School"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (for Quotation PDF/Details) *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="e.g. contact@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-sm pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Message / Specifications requirement */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Requirements or Delivery Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any custom specifications, installation requirement, delivery timeframe, or GST billing requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-sm px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero spam guarantee. Your contact details are strictly used for official quotation delivery.</span>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-quote-btn"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-full shadow-md shadow-blue-600/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
