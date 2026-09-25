import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  RefreshCw, 
  Send, 
  CheckCircle2, 
  Building2, 
  Phone, 
  Mail, 
  DollarSign, 
  UploadCloud, 
  ShieldCheck, 
  Check, 
  Package, 
  ArrowRight,
  TrendingUp,
  FileText
} from 'lucide-react';

export const SalesPurchasePage: React.FC = () => {
  const { addEnquiry, showToast, siteSettings, openQuoteModal } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [equipmentType, setEquipmentType] = useState('Used Laptops');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState<'Brand New' | 'Excellent' | 'Good' | 'Fair' | 'Faulty / For Parts'>('Good');
  const [quantity, setQuantity] = useState<number>(1);
  const [expectedPrice, setExpectedPrice] = useState('');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const equipmentCategories = [
    'Used Laptops',
    'Used Desktops / Towers',
    'Old Laser Printers / Multifunction',
    'Networking Switches & Routers',
    'Server Racks & UPS Systems',
    'Monitors & Displays',
    'Bulk Corporate Lot / Lab Hardware',
    'Other IT Hardware'
  ];

  const targetClients = [
    { title: 'Individuals & Professionals', desc: 'Home workstations, gaming rigs, study laptops, and everyday accessories.' },
    { title: 'Corporate Offices & IT Firms', desc: 'Enterprise fleet procurement, high-spec laptops, managed switches, and AMC.' },
    { title: 'Schools, Colleges & Labs', desc: 'Bulk computer lab deployments, interactive displays, and robust server racks.' },
    { title: 'Clinics & Commercial Showrooms', desc: 'Billing counters, receipt printers, CCTV security, and biometric door systems.' }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      showToast('Photo Uploaded', `Attached ${e.target.files[0].name} for buyback valuation.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !email) {
      showToast('Missing Info', 'Please enter your name, phone and email.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      addEnquiry({
        type: 'Buyback / Purchase',
        customerName,
        organization,
        phone,
        email,
        equipmentType,
        brand,
        model,
        condition,
        itemQuantity: quantity,
        expectedPrice,
        message: description || `Sell/Buyback enquiry for ${quantity} unit(s) of ${equipmentType} (${brand} ${model}). Condition: ${condition}. Expected price: ${expectedPrice || 'Best market offer'}.`
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Buyback Enquiry Submitted', 'Our valuation desk will review your details and contact you with our purchase offer.');
    }, 600);
  };

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block">
              Supply & Buyback Exchange Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              IT Equipment Sales & Hardware Buyback
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              We supply brand new, reliable IT infrastructure to organizations while offering instant fair market cash valuations for used computers, laptops, printers, and old office hardware lots.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Sales Procurement vs. Buyback Exchange */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Corporate & Retail Sales Supply (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">1. IT Equipment Sales</h2>
                  <p className="text-xs text-slate-500">New hardware supply with manufacturer warranties</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                SA Trade is an authorized sales partner and distributor for leading brands including Dell, HP, Lenovo, Canon, Epson, Hikvision, and TP-Link. We supply customized hardware packages for:
              </p>

              <div className="space-y-3">
                {targetClients.map((tc, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                    <h4 className="font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      {tc.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{tc.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Corporate Procurement Quote</span>
                </button>
              </div>
            </div>

            {/* Why Sell to SA Trade */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-6 text-white space-y-4 shadow-md">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-white" />
                Why Sell Old Hardware to Us?
              </h3>
              <ul className="space-y-2.5 text-xs text-orange-50">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Immediate on-site testing & instant bank transfer/cash payout</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Certified DOD data wiping & hard drive destruction certificates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Doorstep pickup service for bulk corporate lots & lab setups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Exchange bonuses when upgrading to brand new IT equipment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Sell Your Device / Buyback Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center font-bold">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">2. Sell Your Device / Buyback Form</h2>
                  <p className="text-xs text-slate-500">Get a competitive valuation for single or bulk used equipment</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Received!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{customerName}</strong>. Our hardware valuation specialist will analyze the specs for your <strong>{equipmentType}</strong> and reach out on <strong>{phone}</strong> within 2–4 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full mt-2 transition-colors"
                  >
                    Submit Another Device
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Suresh Patel"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / Company (If Selling Office Lot)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nexus Finserve / Individual"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          placeholder="e.g. suresh@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hardware Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Equipment Type *
                      </label>
                      <select
                        value={equipmentType}
                        onChange={(e) => setEquipmentType(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white outline-none font-medium"
                      >
                        {equipmentCategories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Brand
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dell, HP, Lenovo"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Model / Generation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Latitude 5490 i5 8th Gen"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Condition, Quantity, Expected Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Working Condition *
                      </label>
                      <select
                        value={condition}
                        onChange={(e: any) => setCondition(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white outline-none font-medium"
                      >
                        <option value="Brand New">Brand New (Sealed/Unused)</option>
                        <option value="Excellent">Excellent (Minor cosmetic marks)</option>
                        <option value="Good">Good (Working fine, normal wear)</option>
                        <option value="Fair">Fair (Working with battery/screen wear)</option>
                        <option value="Faulty / For Parts">Faulty / For Scrap & Parts</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Quantity of Units *
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="1000"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expected Price (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹15,000 / piece or negotiable"
                        value={expectedPrice}
                        onChange={(e) => setExpectedPrice(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Specifications & Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify RAM, storage size, working status of adapters, battery condition, or bulk lot details..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                    />
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Upload Device Photos (Optional)
                    </label>
                    <label className="flex items-center gap-2 px-3.5 py-2.5 border border-dashed border-slate-300 hover:border-orange-500 rounded-xl cursor-pointer bg-slate-50 hover:bg-white transition-colors text-xs text-slate-600">
                      <UploadCloud className="w-4 h-4 text-orange-500" />
                      <span className="truncate">{fileName || 'Click to attach photos for faster valuation'}</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Free doorstep pickup for corporate lots</span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold rounded-full shadow-md shadow-orange-500/20 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Buyback Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
