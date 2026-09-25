import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  Users, 
  Headphones, 
  CheckCircle2, 
  FileText, 
  Phone, 
  ArrowRight,
  Sparkles,
  Zap,
  Tag,
  RefreshCw,
  Layers
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { siteSettings, setCurrentPage, openQuoteModal } = useApp();

  const coreValues = [
    { title: 'Integrity & Transparency', desc: 'Upfront GST billing, genuine OEM warranties, and zero hidden diagnostic or repair charges.' },
    { title: 'Technical Craftsmanship', desc: 'Certified chip-level hardware repair engineers, network architects, and surveillance technicians.' },
    { title: 'Rapid Turnaround', desc: 'Same-day emergency diagnostic dispatch and dedicated on-site AMC support response times.' },
    { title: 'Customer-Centric Care', desc: 'Personalized hardware consultation helping clients buy the right specs without overpaying.' }
  ];

  const businessDomains = [
    'Desktop Computer Sales & Chip-Level Service',
    'Laptop Sales, Screen & Motherboard Repair',
    'Printer Sales, Purchase, Cartridge & Repair',
    'CCTV Camera Sales, IP Deployment & AMC',
    'Biometric & Facial Access Control Systems',
    'Computer Peripherals, SSDs, RAM & Accessories',
    'Structured LAN Cabling & Enterprise Networking',
    'Old IT Equipment Purchase & Exchange Buyback',
    'Annual Maintenance Contracts (AMC) for Corporate'
  ];

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block">
              About SA Trade
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Your Dependable Partner in IT Hardware & Electronic Security
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Serving corporate offices, educational institutions, retail businesses, and individual tech enthusiasts with genuine computing hardware, professional repair, CCTV surveillance, and turnkey maintenance services.
            </p>
          </div>
        </div>

        {/* Company Overview & Story */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Delivering Excellence in IT Infrastructure Since 2012
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>SA Trade</strong> is an established IT sales, procurement, and technical engineering firm. Over the past decade, we have grown from a local computer hardware hub into a full-scale corporate technology partner managing IT supplies, structured networking, biometric access, and high-definition surveillance for over 1,500+ institutional clients.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need a single executive laptop, a 50-workstation computer lab setup for a school, a 32-camera 4K ColorVu CCTV system for a factory, or a dependable Annual Maintenance Contract (AMC), our team ensures high quality, prompt delivery, and long-term peace of mind.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-center space-y-2">
                <div className="text-3xl font-black text-blue-600">{siteSettings.stats.productsSupplied}</div>
                <div className="text-xs text-slate-500">Hardware Units Supplied</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-slate-900 text-center space-y-2">
                <div className="text-3xl font-black text-blue-700">{siteSettings.stats.servicesCompleted}</div>
                <div className="text-xs text-blue-600">Repairs & Services</div>
              </div>
              <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 text-slate-900 text-center space-y-2">
                <div className="text-3xl font-black text-orange-600">{siteSettings.stats.cctvInstallations}</div>
                <div className="text-xs text-orange-700/80">CCTV & Biometric Points</div>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-slate-900 text-center space-y-2">
                <div className="text-3xl font-black text-emerald-600">{siteSettings.stats.experienceYears}</div>
                <div className="text-xs text-emerald-700/80">Years of Technical Trust</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To empower organizations and individuals with authentic, cost-effective IT hardware, cutting-edge surveillance systems, and dependable rapid-response maintenance, enabling seamless business continuity and data security.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the most trusted, customer-preferred IT hardware sales and security service enterprise across the region, recognized for technical craftsmanship, honest valuation in hardware buyback, and proactive client support.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              Ethical Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Core Operating Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h4 className="font-bold text-sm text-slate-900">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Business Domains */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1 block">
              Scope of Capabilities
            </span>
            <h3 className="text-2xl font-bold text-white">
              End-to-End IT & Physical Security Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {businessDomains.map((dom, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{dom}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-300">Ready to consult with an SA Trade technical specialist?</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md transition-all"
              >
                Get Quotation
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('contact')}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full border border-white/20 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
