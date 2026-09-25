import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Fingerprint, 
  ShieldCheck, 
  KeyRound, 
  DoorOpen, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Building2, 
  Phone, 
  ArrowRight,
  Sparkles,
  Users,
  Server
} from 'lucide-react';

export const AccessControlPage: React.FC = () => {
  const { openQuoteModal, setCurrentPage, siteSettings, navigateToProductCategory } = useApp();

  const solutionList = [
    {
      icon: Fingerprint,
      title: 'Biometric Fingerprint Readers',
      desc: 'High-speed optical biometric scanners with 360-degree recognition, spoof detection, and instant door unlocking.',
      badge: 'High Accuracy'
    },
    {
      icon: Users,
      title: 'AI Facial Recognition Terminals',
      desc: 'Touchless temperature-compliant 3D face recognition terminals with mask detection and 0.2 second verification.',
      badge: 'Touchless & Hygienic'
    },
    {
      icon: KeyRound,
      title: 'RFID & Smart Card Systems',
      desc: '13.56 MHz Mifare and 125 kHz proximity card readers for multi-tier employee authentication and visitor badges.',
      badge: 'Rapid Swiping'
    },
    {
      icon: DoorOpen,
      title: 'Electromagnetic (EM) Door Locks',
      desc: '600 lbs / 1200 lbs heavy duty magnetic locks, drop bolts, bracket sets, and emergency push-to-exit buttons for glass and wooden doors.',
      badge: 'Fail-Safe Locks'
    },
    {
      icon: Clock,
      title: 'Time & Attendance HR Software',
      desc: 'Automated shift management, overtime calculation, late-coming logs, multi-branch cloud sync, and payroll export formats.',
      badge: 'Payroll Ready'
    },
    {
      icon: Server,
      title: 'Multi-Door Centralized Controllers',
      desc: 'Networked 2-door, 4-door, and 8-door access controllers with TCP/IP and RS485 communication for enterprise campuses.',
      badge: 'Enterprise Scalable'
    }
  ];

  const doorTypesSupported = [
    'Frameless Toughened Glass Doors (U-Bracket)',
    'Wooden Office Doors (L-Z Brackets)',
    'Aluminium Frame & Sliding Doors',
    'Heavy-Duty Fire Rated Steel Doors',
    'Server Room Biometric Air-Locks',
    'Turnstiles & Speed Gate Barriers'
  ];

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
              Biometrics & Physical Access Security
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Biometric Access Control & Attendance Solutions
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Eliminate unauthorized entry and automate workforce attendance with cutting-edge face recognition terminals, biometric fingerprint readers, electromagnetic locks, and cloud HR attendance software.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Access Control Quote</span>
              </button>
              <button
                type="button"
                onClick={() => navigateToProductCategory('Access Control')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-full border border-white/20 transition-all flex items-center gap-2"
              >
                <Fingerprint className="w-4 h-4 text-emerald-400" />
                <span>View Biometric Products</span>
              </button>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              Security Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Access Control & Biometric Systems
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Engineered for seamless employee entry, restricted zones, and audit-ready attendance reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionList.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div key={idx} className="bg-white hover:bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full">
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{sol.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{sol.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                    <span>Includes Installation & Setup</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Door Types Supported */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Universal Door Compatibility
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Custom Brackets & Hardware For All Door Profiles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you have frameless glass partitions in modern conference rooms or heavy-duty steel doors guarding server rooms, SA Trade installs precision CNC brackets and failsafe power backup uninterrupted battery systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                {doorTypesSupported.map((door, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{door}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Callout */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-7 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                Comprehensive Time & Attendance Management Software
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Our technicians install and configure user-friendly desktop and cloud attendance software on your server, train your HR team, and connect multiple branch biometric devices over static IP/VPN.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md transition-all"
                >
                  Schedule Demo & Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
