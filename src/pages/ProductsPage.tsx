import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCategory, ProductSubCategory, Product } from '../types';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  FileText, 
  MessageCircle, 
  Layers, 
  ChevronRight, 
  SlidersHorizontal,
  X,
  Cpu,
  Laptop,
  Printer,
  Camera,
  Fingerprint,
  HardDrive,
  Network
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { 
    products, 
    selectedCategoryFilter, 
    setSelectedCategoryFilter,
    selectedSubCategoryFilter,
    setSelectedSubCategoryFilter,
    openQuoteModal, 
    openQuickView,
    siteSettings 
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');

  const categories: { id: ProductCategory | 'All'; label: string; icon: React.ElementType }[] = [
    { id: 'All', label: 'All Products', icon: Layers },
    { id: 'Desktop', label: 'Desktops', icon: Cpu },
    { id: 'Laptop', label: 'Laptops', icon: Laptop },
    { id: 'Printer', label: 'Printers', icon: Printer },
    { id: 'CCTV', label: 'CCTV Cameras', icon: Camera },
    { id: 'Access Control', label: 'Access Control', icon: Fingerprint },
    { id: 'Accessories', label: 'Accessories', icon: HardDrive },
    { id: 'Networking', label: 'Networking', icon: Network },
  ];

  // Distinct brands from products
  const availableBrands = useMemo(() => {
    const brandSet = new Set<string>();
    products.forEach(p => brandSet.add(p.brand));
    return ['All', ...Array.from(brandSet)];
  }, [products]);

  // Subcategories for active category
  const availableSubcategories = useMemo(() => {
    if (!selectedCategoryFilter || selectedCategoryFilter === 'All') return [];
    const subSet = new Set<string>();
    products
      .filter(p => p.category === selectedCategoryFilter)
      .forEach(p => subSet.add(p.subcategory));
    return Array.from(subSet);
  }, [products, selectedCategoryFilter]);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategoryFilter && selectedCategoryFilter !== 'All' && product.category !== selectedCategoryFilter) {
        return false;
      }
      // Subcategory filter
      if (selectedSubCategoryFilter && product.subcategory !== selectedSubCategoryFilter) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All' && product.brand !== selectedBrand) {
        return false;
      }
      // Availability
      if (availabilityFilter !== 'All' && product.availability !== availabilityFilter) {
        return false;
      }
      // Search
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const match = 
          product.name.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.model.toLowerCase().includes(q) ||
          product.sku.toLowerCase().includes(q) ||
          product.shortDescription.toLowerCase().includes(q) ||
          product.subcategory.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sortBy === 'price-low') {
        const pA = a.price || 999999;
        const pB = b.price || 999999;
        return pA - pB;
      }
      if (sortBy === 'price-high') {
        const pA = a.price || 0;
        const pB = b.price || 0;
        return pB - pA;
      }
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [products, selectedCategoryFilter, selectedSubCategoryFilter, selectedBrand, availabilityFilter, searchTerm, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategoryFilter('All');
    setSelectedSubCategoryFilter(null);
    setSelectedBrand('All');
    setAvailabilityFilter('All');
    setSearchTerm('');
    setSortBy('featured');
  };

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1 block">
              Official Hardware & Security Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              IT Equipment & Hardware Catalog
            </h1>
            <p className="text-slate-200 text-sm mt-2 leading-relaxed">
              Explore business desktops, laptops, laser printers, IP CCTV systems, access control locks, and networking gear with authorized brand warranties and transparent GST quotations.
            </p>
          </div>
        </div>

        {/* Category Horizontal Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = (!selectedCategoryFilter && cat.id === 'All') || selectedCategoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategoryFilter(cat.id === 'All' ? null : (cat.id as ProductCategory));
                  setSelectedSubCategoryFilter(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-xs'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Subcategories (if Category selected) */}
        {availableSubcategories.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-bold text-slate-500 mr-2">Filter Subcategory:</span>
            <button
              onClick={() => setSelectedSubCategoryFilter(null)}
              className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${
                !selectedSubCategoryFilter ? 'bg-blue-100 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All {selectedCategoryFilter}
            </button>
            {availableSubcategories.map(sub => (
              <button
                key={sub}
                onClick={() => setSelectedSubCategoryFilter(sub)}
                className={`px-3 py-1 text-xs rounded-full font-semibold transition-colors ${
                  selectedSubCategoryFilter === sub ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-blue-600 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search name, model, SKU, spec..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <div>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-500 focus:bg-white outline-none font-medium"
            >
              <option value="All">All Brands (Dell, HP, Hikvision, etc.)</option>
              {availableBrands.filter(b => b !== 'All').map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Stock / Availability */}
          <div>
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-500 focus:bg-white outline-none font-medium"
            >
              <option value="All">All Availability</option>
              <option value="In Stock">In Stock Only</option>
              <option value="Available on Order">Available on Order</option>
            </select>
          </div>

          {/* Sorting */}
          <div>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-500 focus:bg-white outline-none font-medium"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Product Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Catalog Results Info Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> products
            {selectedCategoryFilter && selectedCategoryFilter !== 'All' && <span> in <strong className="text-blue-600">{selectedCategoryFilter}</strong></span>}
            {selectedSubCategoryFilter && <span> &gt; <strong className="text-blue-600">{selectedSubCategoryFilter}</strong></span>}
          </div>
          {(selectedCategoryFilter || selectedSubCategoryFilter || selectedBrand !== 'All' || availabilityFilter !== 'All' || searchTerm) && (
            <button
              onClick={clearAllFilters}
              className="text-blue-600 font-bold hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No hardware found matching your criteria</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try adjusting your filters, searching for a different keyword, or reach out to our sales desk directly for custom hardware sourcing.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={clearAllFilters}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition-all"
              >
                Clear Filters
              </button>
              <button
                onClick={() => openQuoteModal()}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md transition-all"
              >
                Request Custom Sourcing
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white hover:bg-slate-50/50 rounded-3xl border border-slate-200/80 hover:border-blue-300 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-white/90 text-slate-800 shadow-xs border border-slate-200">
                        {product.brand}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-lg bg-blue-600 text-white shadow-xs">
                        {product.category}
                      </span>
                    </div>
                    {product.featured && (
                      <div className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-xs">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-3">
                    <div className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-lg inline-block">
                      {product.subcategory}
                    </div>

                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-500 font-mono">
                      Model: {product.model} • SKU: {product.sku}
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Technical Specifications */}
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-[11px] space-y-1 text-slate-700">
                      {Object.entries(product.specifications).slice(0, 3).map(([key, val]) => (
                        <div key={key} className="flex justify-between gap-2">
                          <span className="font-semibold text-slate-500 shrink-0">{key}:</span>
                          <span className="truncate text-right text-slate-800">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Warranty & Availability */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] block">Pricing</span>
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {product.isPriceOnRequest || !product.price ? (
                            <span className="text-blue-600 font-bold text-xs">Request Price</span>
                          ) : (
                            `₹${product.price.toLocaleString('en-IN')}`
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                          product.availability === 'In Stock'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-orange-50 text-orange-700 border border-orange-200'
                        }`}>
                          ✓ {product.availability}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5 truncate max-w-[120px]">
                          {product.warranty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openQuickView(product)}
                    className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition-colors text-center"
                  >
                    Specifications
                  </button>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(product)}
                    className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md shadow-blue-600/20 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
