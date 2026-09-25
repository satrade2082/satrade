import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, Package, Wrench, BookOpen, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { 
    isSearchModalOpen, 
    setIsSearchModalOpen, 
    products, 
    services, 
    blogPosts,
    setSelectedProductId,
    setSelectedCategoryFilter,
    setCurrentPage,
    setSelectedBlogSlug,
    openQuoteModal
  } = useApp();

  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { products: [], services: [], blogs: [] };

    const matchedProducts = products.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
    ).slice(0, 6);

    const matchedServices = services.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q) ||
      s.features.some(f => f.toLowerCase().includes(q))
    ).slice(0, 4);

    const matchedBlogs = blogPosts.filter(b => 
      b.title.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.summary.toLowerCase().includes(q) ||
      b.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 3);

    return {
      products: matchedProducts,
      services: matchedServices,
      blogs: matchedBlogs
    };
  }, [query, products, services, blogPosts]);

  if (!isSearchModalOpen) return null;

  const handleClose = () => {
    setQuery('');
    setIsSearchModalOpen(false);
  };

  const totalResults = results.products.length + results.services.length + results.blogs.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="search-modal-card"
        className="bg-white rounded-3xl shadow-2xl border border-slate-150 max-w-2xl w-full overflow-hidden flex flex-col max-h-[80vh] text-slate-800"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 px-5 border-b border-slate-100 bg-slate-50">
          <Search className="w-5 h-5 text-blue-600" />
          <input
            type="text"
            autoFocus
            placeholder="Search products, brands (Dell, HP, Hikvision), models, services, guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-slate-900 placeholder:text-slate-400 text-base outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg hover:bg-slate-300 transition-colors"
            >
              Clear
            </button>
          )}
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="p-5 overflow-y-auto space-y-6">
          {!query ? (
            <div className="py-8 text-center text-slate-500 space-y-3">
              <Search className="w-10 h-10 text-slate-400 mx-auto" />
              <p className="text-sm">Type any keyword: "CCTV", "ThinkPad", "Printer Repair", "SSD", "Access Control"</p>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {['Dell Desktop', 'Laser Printer', 'Hikvision CCTV', 'Biometric', 'Laptop Repair', 'AMC Contract'].map(k => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setQuery(k)}
                    className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors font-medium"
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-slate-500 space-y-2">
              <p className="text-sm font-bold text-slate-900">No matching items found for "{query}"</p>
              <p className="text-xs text-slate-500">Try searching for a broader term or contact our sales desk directly.</p>
              <button
                onClick={() => {
                  handleClose();
                  openQuoteModal();
                }}
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-600 font-bold hover:underline"
              >
                Request custom hardware procurement <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Products Match */}
              {results.products.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-blue-600" />
                      Hardware Products ({results.products.length})
                    </span>
                    <button
                      onClick={() => {
                        handleClose();
                        setCurrentPage('products');
                      }}
                      className="text-xs text-blue-600 hover:underline font-bold"
                    >
                      View All in Catalog
                    </button>
                  </div>
                  <div className="space-y-2">
                    {results.products.map(product => (
                      <div
                        key={product.id}
                        onClick={() => {
                          handleClose();
                          setSelectedCategoryFilter(product.category);
                          setSelectedProductId(product.id);
                          setCurrentPage('products');
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all cursor-pointer group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover bg-slate-50 border border-slate-200"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                            {product.brand} • {product.category}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 truncate">SKU: {product.sku} | Model: {product.model}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-slate-800">
                            {product.isPriceOnRequest || !product.price ? 'Quote Required' : `₹${product.price.toLocaleString('en-IN')}`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Match */}
              {results.services.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2.5">
                    <Wrench className="w-4 h-4 text-emerald-600" />
                    Services & IT Solutions ({results.services.length})
                  </span>
                  <div className="space-y-2">
                    {results.services.map(service => (
                      <div
                        key={service.id}
                        onClick={() => {
                          handleClose();
                          setCurrentPage('services');
                        }}
                        className="p-3 rounded-2xl hover:bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {service.title}
                          </h4>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            {service.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-1">{service.shortDescription}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Posts Match */}
              {results.blogs.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2.5">
                    <BookOpen className="w-4 h-4 text-orange-600" />
                    Guides & Technical Articles ({results.blogs.length})
                  </span>
                  <div className="space-y-2">
                    {results.blogs.map(blog => (
                      <div
                        key={blog.id}
                        onClick={() => {
                          handleClose();
                          setSelectedBlogSlug(blog.slug);
                          setCurrentPage('blog-detail');
                        }}
                        className="p-3 rounded-2xl hover:bg-slate-50 border border-slate-200/80 hover:border-orange-300 transition-all cursor-pointer group"
                      >
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">{blog.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
