import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Wrench, 
  Send, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  Building2, 
  MapPin, 
  Calendar, 
  UploadCloud, 
  ShieldCheck, 
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

export const RequestServicePage: React.FC = () => {
  const { addEnquiry, showToast, siteSettings, setCurrentPage } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Desktop Repair');
  const [equipmentType, setEquipmentType] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [location, setLocation] = useState('On-Site (At Client Location)');
  const [isUrgent, setIsUrgent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const serviceTypes = [
    'Desktop Repair',
    'Laptop Repair',
    'Printer Repair',
    'CCTV Service',
    'CCTV Installation',
    'Access Control Service',
    'Networking',
    'Other'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      showToast('Image Attached', `Attached ${e.target.files[0].name} for diagnosis.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !email || !problemDescription) {
      showToast('Missing Fields', 'Please complete all required fields (*).', 'error');
      return;
    }

    setIsSubmitting(true);

    const ref = 'SRV-' + Date.now().toString().slice(-6);
    setReferenceId(ref);

    setTimeout(() => {
      addEnquiry({
        type: 'Service Request',
        customerName,
        organization,
        phone,
        email,
        serviceType,
        equipmentType: equipmentType || serviceType,
        brand,
        model,
        problemDescription: `${isUrgent ? '[URGENT] ' : ''}${problemDescription}${fileName ? ` (Attached image: ${fileName})` : ''}`,
        preferredDate,
        location,
        message: `Service booked for ${serviceType} (${brand} ${model}). Location: ${location}. Preferred Date: ${preferredDate || 'Earliest available'}.`
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Service Request Booked', 'Thank you. Your service request has been received. Our team will contact you shortly.');
    }, 600);
  };

  const handleReset = () => {
    setCustomerName('');
    setOrganization('');
    setPhone('');
    setEmail('');
    setProblemDescription('');
    setEquipmentType('');
    setBrand('');
    setModel('');
    setPreferredDate('');
    setFileName(null);
    setIsUrgent(false);
    setIsSubmitted(false);
  };

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-1">
              Technical Dispatch & Lab Diagnostics
            </span>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Request a Technical Service / Repair
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm mt-2 leading-relaxed">
              Book a certified computer engineer, printer technician, or CCTV specialist for on-site diagnostic inspection or carry-in lab servicing.
            </p>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-12 px-4 space-y-5">
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center animate-bounce shadow-md">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Service Request Confirmed!
              </h2>
              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{customerName}</strong>. Your service request has been received. Our team will contact you shortly on <strong>{phone}</strong> to confirm your slot and assign a technical engineer.
              </p>

              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-500">Service Ticket ID:</span>
                  <span className="font-mono font-bold text-blue-600">{referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Service Category:</span>
                  <span className="font-bold text-slate-900">{serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Equipment:</span>
                  <span>{brand} {model || equipmentType || 'Hardware'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Location:</span>
                  <span>{location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Emergency Desk:</span>
                  <span className="font-bold text-slate-900">{siteSettings.phone}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition-all"
                >
                  Submit Another Request
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage('home')}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md transition-all"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Section 1: Customer Info */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  1. Customer & Contact Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Customer Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Verma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization / School / Office (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex High School / Personal"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
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
                        placeholder="e.g. anand@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section 2: Service & Equipment Details */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  2. Service Type & Hardware Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Type *
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white outline-none font-medium"
                    >
                      {serviceTypes.map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Equipment Brand
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dell, HP, Canon, Hikvision"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Model / Serial Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ThinkPad E14 / MF244dw"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Problem Description / Symptoms *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe what is happening (e.g. PC not powering on, blue screen error, paper jam in duplex roller, CCTV camera video flickering, biometric door lock not engaging)..."
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    required
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                  />
                </div>
              </div>

              {/* Form Section 3: Logistics & Preference */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  3. Service Location & Preferred Schedule
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Service Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white outline-none font-medium"
                      >
                        <option value="On-Site (At Client Location / Office)">On-Site (At Client Location / Office)</option>
                        <option value="Carry-in Lab Drop-off (SA Trade Center)">Carry-in Lab Drop-off (SA Trade Center)</option>
                        <option value="Doorstep Pickup & Return Required">Doorstep Pickup & Return Required</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date for Service
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Upload Image & Urgent Toggle */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Attach Error Photo / Invoice (Optional)
                    </label>
                    <label className="flex items-center gap-2 px-3.5 py-2.5 border border-dashed border-slate-300 hover:border-blue-500 rounded-xl cursor-pointer bg-slate-50 hover:bg-white transition-colors text-xs text-slate-600">
                      <UploadCloud className="w-4 h-4 text-blue-600" />
                      <span className="truncate">{fileName || 'Choose image or screenshot'}</span>
                      <input type="file" accept="image/*,.pdf" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-xl border border-orange-200">
                    <input
                      type="checkbox"
                      id="urgent-toggle"
                      checked={isUrgent}
                      onChange={(e) => setIsUrgent(e.target.checked)}
                      className="w-4 h-4 text-orange-600 rounded accent-orange-600"
                    />
                    <label htmlFor="urgent-toggle" className="text-xs text-orange-800 font-semibold cursor-pointer">
                      Urgent Emergency Request (Same-day priority dispatch)
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent estimate before starting repair. Diagnostic report provided.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-service-request-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white font-bold text-sm rounded-full shadow-md shadow-blue-600/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Ticket...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Service Request</span>
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
