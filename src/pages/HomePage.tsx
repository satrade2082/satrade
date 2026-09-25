import React from 'react';
import { useApp } from '../context/AppContext';
import { ProductCategory } from '../types';
import { 
  ShieldCheck, 
  Wrench, 
  Users, 
  Tag, 
  Zap, 
  Headphones, 
  Cpu, 
  Laptop, 
  Printer, 
  Camera, 
  Fingerprint, 
  HardDrive, 
  Network, 
  ArrowRight, 
  FileText, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Star,
  Layers,
  Sparkles,
  Award,
  RefreshCw
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    siteSettings, 
    setCurrentPage, 
    openQuoteModal, 
    openQuickView, 
    products, 
    services, 
    projects, 
    brands, 
    blogPosts,
    navigateToProductCategory,
    setSelectedBlogSlug,
    setSelectedProductId
  } = useApp();

  const whyChooseCards = [
    {
      icon: ShieldCheck,
      title: 'Quality Products',
      desc: '100% genuine IT hardware from world-class manufacturers with valid authorized brand warranties.',
      color: 'bg-sky-500/10 text-sky-600 border-sky-200'
    },
    {
      icon: Headphones,
      title: 'Professional Technical Support',
      desc: 'Dedicated technical desk providing fast diagnostic resolution and direct remote/onsite assistance.',
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
    },
    {
      icon: Users,
      title: 'Experienced Technicians',
      desc: 'Certified chip-level hardware repair specialists, CCTV surveillance engineers, and network architects.',
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200'
    },
    {
      icon: Tag,
      title: 'Competitive Pricing',
      desc: 'Direct corporate bulk pricing, transparent spare part tariffs, and honest cost estimates with GST invoices.',
      color: 'bg-amber-500/10 text-amber-600 border-amber-200'
    },
    {
      icon: Zap,
      title: 'Fast Service & Delivery',
      desc: 'Rapid turnaround with same-day emergency repairs, prompt dispatch, and dedicated onsite SLAs.',
      color: 'bg-rose-500/10 text-rose-600 border-rose-200'
    },
    {
      icon: RefreshCw,
      title: 'Reliable After-Sales Support',
      desc: 'Long-term AMC contracts, preventive health checkups, loaner backup devices, and firmware updates.',
      color: 'bg-teal-500/10 text-teal-600 border-teal-200'
    }
  ];

  const productCategoriesList: {
    category: ProductCategory;
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
    badge: string;
  }[] = [
    {
      category: 'Desktop',
      icon: Cpu,
      title: 'Desktop Computers',
      description: 'Business desktops, office computers, custom-built PCs, workstation towers, and high-performance CAD systems.',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80',
      badge: 'Workstations & Mini PCs'
    },
    {
      category: 'Laptop',
      icon: Laptop,
      title: 'Laptops',
      description: 'Business laptops, student laptops, lightweight ultrabooks, professional executive laptops, and performance rigs.',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
      badge: 'Dell • HP • Lenovo • ASUS'
    },
    {
      category: 'Printer',
      icon: Printer,
      title: 'Printers & Scanners',
      description: 'Monochrome laser printers, color ink-tank printers, multifunction all-in-ones, ADF copiers, and office consumables.',
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80',
      badge: 'Canon • Epson • Brother'
    },
    {
      category: 'CCTV',
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'IP cameras, 4K ColorVu night vision, PTZ speed domes, NVRs, DVRs, surveillance hard drives, and turnkey security setups.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
      badge: 'Hikvision & Dahua AI'
    },
    {
      category: 'Access Control',
      icon: Fingerprint,
      title: 'Access Control & Biometrics',
      description: 'Biometric attendance terminals, facial recognition, RFID card readers, heavy-duty electromagnetic (EM) locks, and HR software.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      badge: 'Touchless & Cloud Attendance'
    },
    {
      category: 'Accessories',
      icon: HardDrive,
      title: 'Computer Accessories',
      description: 'Keyboard, mouse, online & offline UPS, FHD/4K monitors, high-speed NVMe SSDs, DDR4/DDR5 RAM, cables, and power supplies.',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
      badge: 'Storage, RAM & Power'
    },
    {
      category: 'Networking',
      icon: Network,
      title: 'Networking Equipment',
      description: 'Gigabit managed switches, enterprise Wi-Fi 6 access points, routers, server racks, patch panels, Cat6 cables, and fiber gears.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
      badge: 'TP-Link & Ubiquiti'
    }
  ];

  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  return (
    <div className="w-full text-slate-800 relative z-10">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50">
        {/* Soft Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>One-Stop IT Hardware & Technical Service Partner</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Complete IT Hardware & Security Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sales, Purchase, Installation, Repair & Maintenance of Computers, Laptops, Printers, CCTV, Access Control and IT Equipment for Offices, Schools, Colleges, Businesses and Individuals.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  id="hero-get-quote-btn"
                  className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Get a Quote</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage('request-service')}
                  id="hero-request-service-btn"
                  className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base rounded-full border border-slate-200 shadow-sm transition-all flex items-center gap-2"
                >
                  <Wrench className="w-5 h-5 text-orange-500" />
                  <span>Request a Service</span>
                </button>

                <a
                  href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-5 py-3.5 bg-blue-50/80 hover:bg-blue-100/80 text-blue-700 font-bold text-sm rounded-full border border-blue-200 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call: {siteSettings.phone}</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="text-xl font-black text-blue-600">{siteSettings.stats.productsSupplied}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Products Supplied</div>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="text-xl font-black text-emerald-600">{siteSettings.stats.servicesCompleted}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Services Repaired</div>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="text-xl font-black text-orange-500">{siteSettings.stats.cctvInstallations}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">CCTV Cameras</div>
                </div>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="text-xl font-black text-slate-900">{siteSettings.stats.experienceYears}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Years Assured</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual / Interactive Card Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs text-slate-500 font-mono ml-2">satrade-hardware-hub</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                    Live Catalog
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Office Desktops & Custom CAD</div>
                        <div className="text-[11px] text-slate-500">Intel Core i3/i5/i7 & RTX Workstations</div>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-600 font-bold">In Stock</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Camera className="w-6 h-6 text-orange-500" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">4K ColorVu IP CCTV Packages</div>
                        <div className="text-[11px] text-slate-500">Night Vision & Mobile App Sync</div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-600 font-bold">Turnkey Setup</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Fingerprint className="w-6 h-6 text-emerald-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Biometric Face & Access Control</div>
                        <div className="text-[11px] text-slate-500">Electromagnetic Locks & Cloud HR</div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-600 font-bold">Multi-Door</span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="w-6 h-6 text-indigo-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Sell Old IT Gear / Buyback</div>
                        <div className="text-[11px] text-slate-500">Used Desktops, Laptops & Printers</div>
                      </div>
                    </div>
                    <span className="text-xs text-orange-600 font-bold">Instant Value</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Need immediate technical assistance?</span>
                  <a
                    href={`https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE SA TRADE */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
              The SA Trade Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Choose SA Trade For Your IT Needs
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              From hardware procurement to mission-critical repair and site security, here is why organizations rely on us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white hover:bg-slate-50/60 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600">
                    <span>Guaranteed SLA</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS CATEGORY SHOWCASE */}
      <section className="py-16 border-b border-slate-200/80 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
                Comprehensive Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our Hardware Product Range
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Explore brand new business and commercial equipment with full warranty support.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              id="view-all-products-btn"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
            >
              <span>View All Products in Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategoriesList.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.category}
                  onClick={() => navigateToProductCategory(cat.category)}
                  className="bg-white hover:bg-slate-50 rounded-3xl border border-slate-200/80 hover:border-blue-300 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col group"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-lg border border-white/10">
                      {cat.badge}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>Explore {cat.category}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Special Promo Card */}
            <div 
              onClick={() => setCurrentPage('sales-purchase')}
              className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-6 text-white flex flex-col justify-between cursor-pointer border border-blue-800 shadow-md group hover:border-blue-500 transition-all"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-400/30 inline-block mb-3">
                  Hardware Exchange & Buyback
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Selling Your Old IT Hardware?
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  We purchase used laptops, desktops, laser printers, and networking racks from offices, schools, and individuals with immediate valuation.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-orange-400 group-hover:underline">
                <span>Submit Buyback Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
                Popular In Demand
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Featured IT Equipment
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Top rated enterprise desktops, laptops, laser printers, IP cameras, and biometric devices.
              </p>
            </div>
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs rounded-full border border-blue-200 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Request Custom Bulk Quotation</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white hover:bg-slate-50 rounded-3xl border border-slate-200/80 hover:border-blue-300 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                        {product.brand}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-blue-600 text-white shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[11px] font-medium text-slate-500 block">
                        Model: {product.model} • SKU: {product.sku}
                      </span>
                      <h3 className="font-bold text-base text-slate-900 mt-1 leading-snug line-clamp-1">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Key Specs Preview */}
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70 text-[11px] space-y-1 text-slate-700">
                      {Object.entries(product.specifications).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="font-semibold text-slate-500">{k}:</span>
                          <span className="truncate max-w-[65%] text-right text-slate-900">{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & Warranty */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <div>
                        <div className="text-xs text-slate-500">Price</div>
                        <div className="text-base font-extrabold text-slate-900">
                          {product.isPriceOnRequest || !product.price ? (
                            <span className="text-blue-600 text-sm font-bold">Request Price</span>
                          ) : (
                            `₹${product.price.toLocaleString('en-IN')}`
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-block">
                          ✓ {product.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openQuickView(product)}
                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors text-center"
                  >
                    Quick Specs
                  </button>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(product)}
                    className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20 transition-colors flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES & TECHNICAL SUPPORT */}
      <section className="py-16 border-b border-slate-200/80 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
                Technical Maintenance & Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our Professional Services
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Expert repairs, certified CCTV setups, biometric access integration, and comprehensive AMC contracts.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
            >
              <span>View All Technical Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white hover:bg-slate-50 rounded-3xl border border-slate-200/80 hover:border-blue-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-200">
                      {srv.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{srv.turnaroundTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.shortDescription}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {srv.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {srv.pricingEstimate}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentPage('request-service')}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md shadow-blue-600/20 transition-colors flex items-center gap-1"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRANDS WE DEAL IN */}
      <section className="py-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
            Authorized Hardware Ecosystem
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-8">
            Brands We Deal In
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {brands.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 hover:bg-blue-50/50 hover:border-blue-300 flex flex-col items-center justify-center transition-all shadow-2xs"
              >
                <span className="text-base font-black text-slate-800 tracking-wider">
                  {b.name}
                </span>
                <span className="text-[10px] text-slate-500 text-center mt-1 truncate w-full">
                  {b.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RECENT INSTALLATIONS & PROJECTS */}
      <section className="py-16 border-b border-slate-200/80 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
                Proven Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Recent Projects & Installations
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Take a look at commercial CCTV deployments, corporate lab setups, and access control installations completed by SA Trade.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('projects')}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                onClick={() => setCurrentPage('projects')}
                className="bg-white hover:bg-slate-50 rounded-3xl border border-slate-200/80 hover:border-blue-300 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col group"
              >
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg border border-white/10">
                    {proj.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 font-semibold block mb-1">
                      {proj.client} • {proj.location}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Completed: {proj.completionDate}</span>
                    <span className="text-blue-600 font-bold flex items-center gap-1">
                      Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BLOG & EDUCATIONAL IT GUIDES */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1 block">
                Technical Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Latest Articles & Tech Guides
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Practical tips on hardware selection, CCTV storage estimation, printer maintenance, and IT security.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('blog')}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  setSelectedBlogSlug(post.slug);
                  setCurrentPage('blog-detail');
                }}
                className="bg-white hover:bg-slate-50 rounded-3xl border border-slate-200/80 hover:border-blue-300 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col group"
              >
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-lg">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block mb-1">
                      {post.date} • {post.readTime}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL PROMPT / CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">
            Dedicated Customer Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Need Expert Advice On Hardware Procurement or CCTV Setup?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our engineers provide free technical consultations, customized configuration quotes, and on-site assessments for offices, schools, and business facilities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-blue-500/30 transition-all"
            >
              Get a Fast Quotation
            </button>
            <a
              href={`https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
