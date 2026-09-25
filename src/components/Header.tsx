import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCategory, ProductSubCategory } from '../types';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  Wrench, 
  Shield, 
  Cpu, 
  Laptop, 
  Printer, 
  Camera, 
  Fingerprint, 
  HardDrive, 
  Network, 
  ArrowRight,
  Settings,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    siteSettings, 
    currentPage, 
    setCurrentPage, 
    openQuoteModal, 
    setIsSearchModalOpen, 
    navigateToProductCategory,
    setSelectedProductId
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);

  const productCategories: { name: ProductCategory; icon: React.ElementType; subcategories: ProductSubCategory[] }[] = [
    {
      name: 'Desktop',
      icon: Cpu,
      subcategories: ['Office Desktop', 'Business Desktop', 'Custom PC', 'Gaming/Performance PC']
    },
    {
      name: 'Laptop',
      icon: Laptop,
      subcategories: ['Business Laptop', 'Student Laptop', 'Professional Laptop', 'Performance Laptop']
    },
    {
      name: 'Printer',
      icon: Printer,
      subcategories: ['Laser Printer', 'Inkjet Printer', 'Multifunction Printer', 'Color Printer', 'Office Printer']
    },
    {
      name: 'CCTV',
      icon: Camera,
      subcategories: ['IP Camera', 'Dome Camera', 'Bullet Camera', 'PTZ Camera', 'DVR', 'NVR', 'Complete CCTV Package']
    },
    {
      name: 'Access Control',
      icon: Fingerprint,
      subcategories: ['Fingerprint Device', 'Face Recognition', 'RFID', 'Door Access Controller', 'EM Lock', 'Attendance System']
    },
    {
      name: 'Accessories',
      icon: HardDrive,
      subcategories: ['Monitor', 'Keyboard', 'Mouse', 'RAM', 'SSD', 'HDD', 'UPS', 'Cables', 'Adapters']
    },
    {
      name: 'Networking',
      icon: Network,
      subcategories: ['Router', 'Switch', 'Access Point', 'Network Rack', 'Patch Panel', 'LAN Cable', 'Fiber Equipment']
    }
  ];

  const servicesList = [
    { title: 'Computer Repair', type: 'Computer Repair', desc: 'Motherboard, OS & PC hardware fixes' },
    { title: 'Laptop Repair', type: 'Laptop Repair', desc: 'Screen, hinge, battery & chip-level repair' },
    { title: 'Printer Service & Repair', type: 'Printer Repair', desc: 'Cartridge, logic board & roller fixes' },
    { title: 'CCTV Installation', type: 'CCTV Installation', desc: 'IP cameras, NVR, mobile streaming & setup' },
    { title: 'CCTV Maintenance', type: 'CCTV Maintenance', desc: 'AMC, lens cleaning & surveillance audits' },
    { title: 'Access Control Installation', type: 'Access Control Installation', desc: 'Biometric, face recognition & EM locks' },
    { title: 'Networking & IT Support', type: 'Networking & IT Support', desc: 'LAN wiring, server racks & enterprise Wi-Fi' },
    { title: 'Annual Maintenance Contract (AMC)', type: 'Annual Maintenance Contract', desc: 'Preventive IT support for businesses' }
  ];

  const handleNav = (page: any) => {
    setSelectedProductId(null);
    setCurrentPage(page);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleSelectCategory = (cat: ProductCategory, sub?: ProductSubCategory) => {
    navigateToProductCategory(cat, sub);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40 text-slate-800 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#0b1329] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left contact info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a 
              href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium">{siteSettings.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors hidden sm:flex"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Support</span>
            </a>
            <a 
              href={`mailto:${siteSettings.email}`} 
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors hidden lg:flex"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{siteSettings.email}</span>
            </a>
            <div className="hidden xl:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{siteSettings.businessHours}</span>
            </div>
          </div>

          {/* Right Fast Actions & WP Admin link */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20 font-medium">
              <Sparkles className="w-3 h-3 text-orange-400" /> Authorized IT & CCTV Vendor
            </span>
            <button
              onClick={() => handleNav('admin')}
              id="header-admin-link"
              className={`flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                currentPage === 'admin'
                  ? 'bg-blue-600 text-white font-bold shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Settings className="w-3 h-3 text-blue-400" />
              <span>WordPress Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Branding */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl tracking-tighter shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              SA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  SA TRADE
                </span>
                <span className="text-[10px] uppercase font-bold bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 rounded-full">
                  IT SOLUTIONS
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-tight leading-none mt-0.5">
                Sales • Purchase • Repair • CCTV • Access Control
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNav('home')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'home' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'about' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            {/* Products Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('products')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-all ${
                  currentPage === 'products' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 -ml-16 w-[680px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-slate-800">
                  <div className="col-span-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      IT Equipment Categories
                    </span>
                    <button
                      onClick={() => handleNav('products')}
                      className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1"
                    >
                      View All Catalog <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {productCategories.map(cat => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.name} className="space-y-1.5">
                        <button
                          onClick={() => handleSelectCategory(cat.name)}
                          className="w-full text-left flex items-center gap-2 p-1.5 rounded-lg hover:bg-blue-50/70 text-slate-900 font-bold text-xs group transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span>{cat.name}</span>
                        </button>
                        <div className="pl-9 space-y-1">
                          {cat.subcategories.slice(0, 3).map(sub => (
                            <button
                              key={sub}
                              onClick={() => handleSelectCategory(cat.name, sub)}
                              className="block w-full text-left text-[11px] text-slate-500 hover:text-blue-600 truncate transition-colors"
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('services')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-all ${
                  currentPage === 'services' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-slate-800">
                  <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Technical & Repair Services
                    </span>
                    <button
                      onClick={() => handleNav('services')}
                      className="text-xs text-blue-600 hover:text-blue-700 font-bold"
                    >
                      All Services
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-1 pt-1">
                    {servicesList.map(srv => (
                      <button
                        key={srv.title}
                        onClick={() => handleNav('services')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 group transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                          {srv.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {srv.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dedicated Sales & Purchase (Buyback) */}
            <button
              onClick={() => handleNav('sales-purchase')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'sales-purchase' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Sales & Purchase
            </button>

            {/* Dedicated CCTV Solutions */}
            <button
              onClick={() => handleNav('cctv')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'cctv' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              CCTV
            </button>

            {/* Access Control */}
            <button
              onClick={() => handleNav('access-control')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'access-control' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Access Control
            </button>

            {/* Projects */}
            <button
              onClick={() => handleNav('projects')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'projects' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Projects
            </button>

            {/* Blog */}
            <button
              onClick={() => handleNav('blog')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'blog' || currentPage === 'blog-detail' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Blog
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`px-3.5 py-2 rounded-lg transition-all ${
                currentPage === 'contact' ? 'text-blue-600 bg-blue-50 font-bold' : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
              aria-label="Search catalog"
              title="Search IT products, services & guides"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Request a Service Secondary Button */}
            <button
              type="button"
              onClick={() => handleNav('request-service')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold border border-orange-200/80 transition-all shadow-xs"
            >
              <Wrench className="w-3.5 h-3.5 text-orange-600" />
              <span>Book Service</span>
            </button>

            {/* Get a Quote Primary CTA (Softbenz Gradient Pill) */}
            <button
              type="button"
              onClick={() => openQuoteModal()}
              id="header-get-quote-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-xs sm:text-sm font-bold rounded-full shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 max-h-[85vh] overflow-y-auto p-4 space-y-3 shadow-xl text-slate-800">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => handleNav('request-service')}
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200"
            >
              <Wrench className="w-4 h-4 text-orange-600" />
              <span>Book Service</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-600/20"
            >
              <FileText className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              About Us
            </button>

            {/* Mobile Products Accordion */}
            <div>
              <button
                onClick={() => setMobileExpandedGroup(mobileExpandedGroup === 'products' ? null : 'products')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
              >
                <span>Products Catalog</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedGroup === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedGroup === 'products' && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-xl mt-1 border border-slate-100 text-xs">
                  <button
                    onClick={() => handleNav('products')}
                    className="block w-full text-left font-bold text-blue-600 py-1"
                  >
                    → Browse All Products ({'>'} 100+ Models)
                  </button>
                  {productCategories.map(cat => (
                    <button
                      key={cat.name}
                      onClick={() => handleSelectCategory(cat.name)}
                      className="block w-full text-left font-semibold text-slate-700 py-1 hover:text-blue-600"
                    >
                      • {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileExpandedGroup(mobileExpandedGroup === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
              >
                <span>Services & Repairs</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedGroup === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedGroup === 'services' && (
                <div className="pl-4 pr-2 py-2 space-y-1.5 bg-slate-50 rounded-xl mt-1 border border-slate-100 text-xs">
                  <button
                    onClick={() => handleNav('services')}
                    className="block w-full text-left font-bold text-blue-600 py-1"
                  >
                    → View All Repair & AMC Services
                  </button>
                  {servicesList.map(srv => (
                    <button
                      key={srv.title}
                      onClick={() => handleNav('services')}
                      className="block w-full text-left font-medium text-slate-700 py-1 hover:text-blue-600"
                    >
                      • {srv.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('sales-purchase')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Sales & Purchase (Buyback)
            </button>
            <button
              onClick={() => handleNav('cctv')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              CCTV Surveillance
            </button>
            <button
              onClick={() => handleNav('access-control')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Access Control & Biometrics
            </button>
            <button
              onClick={() => handleNav('projects')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Projects & Installations
            </button>
            <button
              onClick={() => handleNav('blog')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Blog & Tech Knowledge
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-50"
            >
              Contact Us
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 flex items-center gap-2 border border-blue-100"
            >
              <Settings className="w-4 h-4 text-blue-600" />
              <span>WordPress Admin Panel</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
