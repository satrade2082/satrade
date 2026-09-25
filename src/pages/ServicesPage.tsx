import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Wrench, 
  Laptop, 
  Printer, 
  Camera, 
  Fingerprint, 
  Network, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { services, setCurrentPage, openQuoteModal, siteSettings } = useApp();

  const iconMap: Record<string, React.ElementType> = {
    Laptop: Laptop,
    Printer: Printer,
    Camera: Camera,
    Fingerprint: Fingerprint,
    Network: Network,
    ShieldCheck: ShieldCheck
  };

  const workflowSteps = [
    { step: '01', title: 'Service Request / Call', desc: 'Submit an online request or call our hotline with your hardware issue.' },
    { step: '02', title: 'Expert Diagnosis', desc: 'Our certified engineers conduct quick chip-level diagnostic troubleshooting.' },
    { step: '03', title: 'Transparent Quote', desc: 'We provide an upfront cost estimate for genuine parts and labor.' },
    { step: '04', title: 'Repair & QA Testing', desc: 'Precision repair, stress testing, and quality assurance inspection.' },
    { step: '05', title: 'Delivery & Warranty', desc: 'Safe delivery or on-site handover backed with SA Trade service warranty.' }
  ];

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block">
              Professional IT Technical Support & Maintenance
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Hardware Repair, Installation & AMC Support
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Certified technical services for corporate offices, schools, colleges, and residential customers. From motherboard chip-level repair and printer servicing to high-definition CCTV setups and annual maintenance contracts.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setCurrentPage('request-service')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-full shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <Wrench className="w-4 h-4 text-white" />
                <span>Book a Service Request</span>
              </button>
              <a
                href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>Emergency Help: {siteSettings.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const Icon = iconMap[srv.iconName] || Wrench;
            return (
              <div
                key={srv.id}
                id={`service-item-${srv.id}`}
                className="bg-white hover:bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full">
                      {srv.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {srv.fullDescription}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Included Service Scope:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-slate-500">Turnaround SLA</div>
                    <div className="text-xs font-bold text-slate-900">{srv.turnaroundTime}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openQuoteModal()}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition-colors"
                    >
                      AMC Quote
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentPage('request-service')}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md shadow-blue-600/20 transition-colors flex items-center gap-1.5"
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Book Diagnostic</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5-Step Repair & Service Workflow */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              Transparent Service Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              How Our Service Process Works
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Zero hidden charges, strict data privacy guarantees, and genuine OEM spare parts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {workflowSteps.map((wf, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center relative flex flex-col justify-between">
                <div>
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center mx-auto mb-3 shadow-sm">
                    {wf.step}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">{wf.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AMC Callout Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-300 px-2.5 py-1 rounded-lg border border-orange-400/30 inline-block">
              For Corporate & Institutional Clients
            </span>
            <h3 className="text-2xl font-bold text-white">
              Annual Maintenance Contracts (AMC) for Offices & Schools
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              Get unlimited breakdown visits, routine monthly preventive health checkups, antivirus definition management, and guaranteed priority SLAs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="px-6 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-sm rounded-full shadow-lg shadow-blue-500/30 shrink-0 transition-all"
          >
            Request Custom AMC Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
