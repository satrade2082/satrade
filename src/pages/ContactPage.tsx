import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2,
  Navigation,
  Edit3,
  X,
  Save,
  Check,
  Settings
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { siteSettings, updateSiteSettings, addEnquiry, showToast, setCurrentPage } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Hardware Sales Enquiry');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Admin Quick Edit Contact Info State
  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    phone: siteSettings.phone,
    mobile: siteSettings.mobile,
    whatsapp: siteSettings.whatsapp,
    email: siteSettings.email,
    address: siteSettings.address,
    businessHours: siteSettings.businessHours
  });

  const handleOpenEdit = () => {
    setEditForm({
      phone: siteSettings.phone,
      mobile: siteSettings.mobile,
      whatsapp: siteSettings.whatsapp,
      email: siteSettings.email,
      address: siteSettings.address,
      businessHours: siteSettings.businessHours
    });
    setIsEditContactModalOpen(true);
  };

  const handleSaveContactInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings({
      phone: editForm.phone,
      mobile: editForm.mobile,
      whatsapp: editForm.whatsapp,
      email: editForm.email,
      address: editForm.address,
      businessHours: editForm.businessHours
    });
    showToast('Contact Info Updated', 'New phone numbers and contact details saved successfully.', 'success');
    setIsEditContactModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone || !email || !message) {
      showToast('Required Fields Missing', 'Please fill out all mandatory fields (*).', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      addEnquiry({
        type: 'General Contact',
        customerName,
        organization,
        phone,
        email,
        message: `Subject: ${subject}\n\nMessage: ${message}`
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Message Sent', 'Thank you. We have received your message and will respond promptly.');
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
              Direct Communication Channel
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Contact SA Trade Support & Sales
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Have questions about hardware availability, CCTV site planning, biometric attendance setups, or device repairs? Our team is available 6 days a week.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Contact Information & Office Details vs. Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">
                  Corporate Office & Service Center
                </h2>
                <button
                  type="button"
                  onClick={handleOpenEdit}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 text-xs font-bold transition-all shadow-xs"
                  title="Edit phone numbers and details"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Info</span>
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase tracking-wider mb-0.5">Location Address</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">{siteSettings.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase tracking-wider mb-0.5">Sales & Emergency Support</strong>
                    <p className="text-xs text-slate-600">
                      Primary: <a href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-slate-900 hover:text-blue-600 transition-colors">{siteSettings.phone}</a>
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mobile / Escalations: <a href={`tel:${siteSettings.mobile.replace(/[^0-9+]/g, '')}`} className="font-bold text-slate-900 hover:text-blue-600 transition-colors">{siteSettings.mobile}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase tracking-wider mb-0.5">Email Communications</strong>
                    <p className="text-xs text-slate-600">
                      <a href={`mailto:${siteSettings.email}`} className="text-blue-600 font-semibold hover:underline">{siteSettings.email}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase tracking-wider mb-0.5">Working Hours</strong>
                    <p className="text-xs text-slate-600">{siteSettings.businessHours}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Sunday: Closed (On-call emergency AMC support active)</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Simulation Container */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-blue-600" />
                  Visit Our Service Center
                </span>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Open Now</span>
              </div>
              
              <div className="h-44 rounded-2xl bg-slate-100 relative overflow-hidden flex flex-col items-center justify-center text-center p-4 border border-slate-200">
                <MapPin className="w-8 h-8 text-rose-500 animate-bounce mb-1" />
                <div className="text-slate-900 font-bold text-xs">{siteSettings.companyName} Tech Hub</div>
                <div className="text-[11px] text-slate-500 max-w-xs truncate">{siteSettings.address}</div>
                <div className="mt-2 text-[10px] text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Easy parking & test lab facility available
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Send Us an Enquiry</h2>
              <p className="text-xs text-slate-500 mb-6">Fill out your query and our team will get in touch shortly.</p>

              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Delivered!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{customerName}</strong>. Your enquiry has been routed to our sales & technical support desk. We will call you back on <strong>{phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full mt-2 shadow-md transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Chandra"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Star Enterprises"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          placeholder="e.g. 9851097327"
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
                          placeholder="e.g. ramesh@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full text-xs pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Enquiry Type
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white outline-none font-medium"
                    >
                      <option value="Hardware Sales Enquiry">Desktop / Laptop Hardware Sales Enquiry</option>
                      <option value="CCTV Security Site Survey">CCTV Camera Installation & Survey</option>
                      <option value="Access Control & Biometrics">Biometric Access Control & Attendance</option>
                      <option value="Printer Sales & Repair">Printer Purchase / Cartridge & Repair</option>
                      <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC) for Office</option>
                      <option value="Hardware Buyback / Selling Old Gear">Selling Old Used Computers / IT Lots</option>
                      <option value="General Support">Other Technical Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message / Specific Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please provide details of what products or services you require, quantities, or technical issues..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                    />
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>We respect your privacy. No spam.</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white text-xs font-bold rounded-full shadow-md shadow-blue-600/20 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Edit Contact Info Modal for Admin */}
        {isEditContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Edit3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Edit Contact Numbers & Information</h3>
                    <p className="text-[11px] text-slate-500">Updates live across the Contact Page, Header, Footer & WhatsApp</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditContactModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSaveContactInfo} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Primary Contact Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                        required
                        placeholder="e.g. 9851097327 or +977 9851097327"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Mobile / Escalation Phone *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={editForm.mobile}
                        onChange={(e) => setEditForm({ ...editForm, mobile: e.target.value })}
                        required
                        placeholder="e.g. 9851097327"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      WhatsApp Number (for Direct Chat) *
                    </label>
                    <div className="relative">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={editForm.whatsapp}
                        onChange={(e) => setEditForm({ ...editForm, whatsapp: e.target.value })}
                        required
                        placeholder="e.g. 9851097327"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Official Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        required
                        placeholder="e.g. sales@satrade.com"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Office / Service Center Address
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={editForm.address}
                      onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
                      required
                      placeholder="e.g. Plot No. 42, Ground Floor, Tech Center..."
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Business Working Hours
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={editForm.businessHours}
                      onChange={(e) => setEditForm({ ...editForm, businessHours: e.target.value })}
                      required
                      placeholder="e.g. Monday – Saturday: 9:30 AM – 7:30 PM (Sunday Closed)"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white font-medium"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditContactModalOpen(false);
                      setCurrentPage('admin');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>Open Full Admin Center</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsEditContactModalOpen(false)}
                      className="px-4 py-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-md shadow-blue-600/20 transition-all active:scale-95"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
