import React from 'react';
import { useApp } from '../context/AppContext';
import { ProductCategory } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  FileText, 
  Wrench,
  Globe,
  Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { siteSettings, setCurrentPage, navigateToProductCategory, openQuoteModal } = useApp();

  const currentYear = new Date().getFullYear();

  const handleNav = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryNav = (cat: ProductCategory) => {
    navigateToProductCategory(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0f1d] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Callout Strip */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 rounded-3xl p-8 mb-16 border border-blue-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-2">
              <span>Corporate & Retail IT Procurement</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Upgrade or Secure Your Organization's IT Infrastructure?
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-2xl">
              Get official GST quotes, customized CCTV site surveys, and dedicated AMC technical maintenance contracts tailored for your budget.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-full shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Get an Instant Quote</span>
            </button>
            <button
              onClick={() => handleNav('request-service')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-full border border-white/15 backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-orange-400" />
              <span>Request Service</span>
            </button>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20">
                SA
              </div>
              <div>
                <h4 className="text-lg font-black text-white tracking-tight">SA TRADE</h4>
                <p className="text-xs text-blue-400 font-semibold">IT Hardware & Security Solutions</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted partner for desktop PCs, commercial laptops, laser & ink-tank printers, high-definition CCTV, biometric access control, networking hardware, and proactive Annual Maintenance Contracts (AMC).
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Genuine Brand Warranties & GST Billing</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400 shrink-0" />
                <span>12+ Years Industry Technical Experience</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-blue-500 pl-2.5">
              IT Hardware Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => handleCategoryNav('Desktop')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Desktop Computers (Office, Custom & CAD)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryNav('Laptop')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Laptops (Business, Student & Pro)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryNav('Printer')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Printers (Laser, InkTank & Multifunction)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryNav('CCTV')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  CCTV (IP Cameras, NVR & Turnkey Kits)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryNav('Access Control')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Access Control (Face, Fingerprint & EM Locks)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryNav('Accessories')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Accessories (SSD, RAM, UPS, Monitors)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryNav('Networking')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Networking (Routers, Switches, Wi-Fi 6)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-blue-500 pl-2.5">
              Technical Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Computer & Laptop Chip-Level Repair
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Printer Cartridge & Hardware Repair
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('cctv')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  CCTV Planning, Installation & Audits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('access-control')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Biometric Attendance & Door Lock Setup
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Office Structured LAN Cabling & Wi-Fi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  Annual Maintenance Contract (AMC)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('sales-purchase')} 
                  className="hover:text-orange-400 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-orange-400" />
                  Sell Used Devices / Old Hardware Buyback
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-blue-500 pl-2.5">
              Contact SA Trade
            </h4>
            <div className="text-xs text-slate-400 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{siteSettings.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {siteSettings.phone} / {siteSettings.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Direct WhatsApp Support
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${siteSettings.email}`} className="hover:text-white transition-colors">
                  {siteSettings.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{siteSettings.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteSettings.companyName}. All Rights Reserved. Complete IT Hardware & Security Solutions.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('about')} className="hover:text-slate-300">About Us</button>
            <button onClick={() => handleNav('projects')} className="hover:text-slate-300">Installations</button>
            <button onClick={() => handleNav('blog')} className="hover:text-slate-300">Knowledge Base</button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300">Contact Support</button>
            <button onClick={() => handleNav('admin')} className="hover:text-blue-400 font-semibold">WP Admin</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
