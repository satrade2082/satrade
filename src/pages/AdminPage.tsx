import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Product, ProductCategory, ProductSubCategory, Enquiry, BlogPost } from '../types';
import { 
  LayoutDashboard, 
  Package, 
  Inbox, 
  Wrench, 
  FileText, 
  Settings, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  Clock, 
  Star, 
  Search, 
  X, 
  Save, 
  RefreshCw, 
  Phone, 
  Mail, 
  Building, 
  MapPin, 
  Check, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    enquiries, 
    updateEnquiryStatus, 
    deleteEnquiry, 
    services, 
    blogPosts, 
    addBlogPost, 
    deleteBlogPost, 
    siteSettings, 
    updateSiteSettings, 
    showToast,
    setCurrentPage 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'enquiries' | 'blog' | 'settings'>('overview');

  // Product Filter & Search
  const [productSearch, setProductSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Enquiry Filter & Search
  const [enquirySearch, setEnquirySearch] = useState('');
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState<string>('All');

  // Blog Modal State
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [blogForm, setBlogForm] = useState<Partial<BlogPost>>({
    title: '',
    category: 'Hardware Guide',
    summary: '',
    content: '',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    tags: ['Hardware', 'ITSupport'],
    readTime: '4 min read'
  });

  // Settings State Form
  const [settingsForm, setSettingsForm] = useState(siteSettings);

  // Product Form State
  const [prodForm, setProdForm] = useState<Partial<Product>>({
    name: '',
    category: 'Desktop',
    subcategory: 'Business Desktop',
    brand: 'Dell',
    model: '',
    sku: '',
    shortDescription: '',
    fullDescription: '',
    price: 35000,
    isPriceOnRequest: false,
    warranty: '3 Years Onsite Warranty',
    availability: 'In Stock',
    featured: false,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80',
    specifications: { 'Processor': 'Intel Core i5', 'RAM': '16GB DDR4', 'Storage': '512GB NVMe SSD' }
  });

  // Open Product Create
  const handleOpenNewProduct = () => {
    setEditingProduct(null);
    setProdForm({
      name: '',
      category: 'Desktop',
      subcategory: 'Business Desktop',
      brand: 'Dell',
      model: '',
      sku: 'SKU-' + Math.floor(1000 + Math.random() * 9000),
      shortDescription: '',
      fullDescription: '',
      price: 35000,
      isPriceOnRequest: false,
      warranty: '3 Years Onsite Warranty',
      availability: 'In Stock',
      featured: false,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80',
      specifications: { 'Processor': 'Intel Core i5', 'RAM': '16GB DDR4', 'Storage': '512GB NVMe SSD' }
    });
    setIsProductModalOpen(true);
  };

  // Open Product Edit
  const handleOpenEditProduct = (p: Product) => {
    setEditingProduct(p);
    setProdForm({ ...p });
    setIsProductModalOpen(true);
  };

  // Save Product
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodForm.name || !prodForm.brand) {
      showToast('Validation Error', 'Product Name and Brand are required.', 'error');
      return;
    }

    if (editingProduct) {
      updateProduct(editingProduct.id, prodForm);
      showToast('Product Updated', `Saved changes for ${prodForm.name}.`);
    } else {
      const newProd: Product = {
        id: 'prod-' + Date.now(),
        name: prodForm.name || 'New Hardware',
        category: (prodForm.category as ProductCategory) || 'Desktop',
        subcategory: (prodForm.subcategory as ProductSubCategory) || 'Business Desktop',
        brand: prodForm.brand || 'Custom',
        model: prodForm.model || 'Standard',
        sku: prodForm.sku || 'SKU-' + Date.now().toString().slice(-4),
        shortDescription: prodForm.shortDescription || '',
        price: prodForm.price || null,
        isPriceOnRequest: prodForm.isPriceOnRequest || false,
        warranty: prodForm.warranty || '1 Year Warranty',
        availability: (prodForm.availability as any) || 'In Stock',
        featured: prodForm.featured || false,
        image: prodForm.image || 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
        specifications: prodForm.specifications || {},
        createdAt: new Date().toISOString().split('T')[0]
      };
      addProduct(newProd);
      showToast('Product Created', `Added ${newProd.name} to catalog.`);
    }

    setIsProductModalOpen(false);
  };

  // Save Blog Post
  const handleSaveBlogPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.summary) {
      showToast('Validation Error', 'Title and summary are required.', 'error');
      return;
    }

    const newPost: BlogPost = {
      id: 'blog-' + Date.now(),
      title: blogForm.title || 'New Guide',
      slug: (blogForm.title || 'guide').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: blogForm.category || 'Hardware Guide',
      summary: blogForm.summary || '',
      content: blogForm.content || blogForm.summary || '',
      image: blogForm.image || 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
      tags: blogForm.tags || ['Hardware'],
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: blogForm.readTime || '3 min read',
      author: 'SA Trade Engineer'
    };

    addBlogPost(newPost);
    showToast('Article Created', `Published "${newPost.title}".`);
    setIsBlogModalOpen(false);
  };

  // Save Settings Form
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(settingsForm);
    showToast('Settings Saved', 'Site configuration and contact info updated successfully.');
  };

  // Filtered Products
  const filteredAdminProducts = products.filter(p => {
    if (!productSearch) return true;
    const q = productSearch.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.model.toLowerCase().includes(q);
  });

  // Filtered Enquiries
  const filteredAdminEnquiries = enquiries.filter(enq => {
    if (enquiryStatusFilter !== 'All' && enq.status !== enquiryStatusFilter) return false;
    if (!enquirySearch) return true;
    const q = enquirySearch.toLowerCase();
    return enq.customerName.toLowerCase().includes(q) || enq.phone.toLowerCase().includes(q) || enq.type.toLowerCase().includes(q) || (enq.organization && enq.organization.toLowerCase().includes(q));
  });

  return (
    <div className="w-full text-slate-800 min-h-screen py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* WP Admin Header Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white text-base shadow-lg shadow-blue-500/30">
              WP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg text-white">SA Trade Admin Control Center</h1>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  v3.4 Live CMS
                </span>
              </div>
              <p className="text-xs text-slate-200">Manage hardware products, service enquiries, quotes, and site preferences.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage('home')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full border border-white/20 transition-all flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-300" />
              <span>View Live Website</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto bg-white p-2 rounded-2xl border border-slate-200/80 shadow-sm scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'overview' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'products' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Products ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('enquiries')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all relative ${
              activeTab === 'enquiries' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Enquiries & Leads ({enquiries.length})</span>
            {enquiries.filter(e => e.status === 'New').length > 0 && (
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'blog' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Knowledge Base ({blogPosts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'settings' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Site & Contact Settings</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span>Total Products</span>
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Package className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">{products.length}</div>
                <div className="text-[11px] text-slate-500">Across 7 Hardware Categories</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span>Received Enquiries</span>
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Inbox className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">{enquiries.length}</div>
                <div className="text-[11px] text-emerald-600 font-semibold">
                  {enquiries.filter(e => e.status === 'New').length} pending action
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span>Service Modules</span>
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Wrench className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">{services.length}</div>
                <div className="text-[11px] text-slate-500">Repairs, CCTV & AMC</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span>Published Guides</span>
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-black text-slate-900">{blogPosts.length}</div>
                <div className="text-[11px] text-slate-500">SEO & Knowledge Articles</div>
              </div>
            </div>

            {/* Recent Enquiries Preview */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900">Recent Customer Quotations & Tickets</h3>
                <button
                  onClick={() => setActiveTab('enquiries')}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  View All Enquiries ({enquiries.length})
                </button>
              </div>

              {enquiries.length === 0 ? (
                <p className="text-xs text-slate-400 py-4 text-center">No enquiries received yet. Submit a test quote from the website!</p>
              ) : (
                <div className="divide-y divide-slate-100">
                  {enquiries.slice(0, 5).map((enq) => (
                    <div key={enq.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            enq.type === 'Quotation' ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                            enq.type === 'Service Request' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                            enq.type === 'Buyback / Purchase' ? 'bg-purple-50 text-purple-600 border border-purple-200' :
                            'bg-slate-100 text-slate-700'
                          }`}>
                            {enq.type}
                          </span>
                          <strong className="text-slate-900">{enq.customerName}</strong>
                          {enq.organization && <span className="text-slate-500">({enq.organization})</span>}
                        </div>
                        <p className="text-slate-600 mt-1 line-clamp-1">{enq.message}</p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-slate-400 text-[11px]">{new Date(enq.createdAt).toLocaleDateString()}</span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          enq.status === 'New' ? 'bg-rose-50 text-rose-600 border border-rose-200' :
                          enq.status === 'In Review' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                          'bg-emerald-50 text-emerald-600 border border-emerald-200'
                        }`}>
                          {enq.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS MANAGER */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-lg text-slate-900">Hardware Catalog Management</h3>
                <span className="text-xs bg-slate-100 text-slate-700 border border-slate-200 font-bold px-2.5 py-0.5 rounded-full">
                  {filteredAdminProducts.length} Items
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="text-xs pl-8 pr-3 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none w-48 focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <button
                  onClick={handleOpenNewProduct}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                    <th className="p-3">Product</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Brand & Model</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Stock</th>
                    <th className="p-3">Featured</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredAdminProducts.map((prod) => (
                    <tr key={prod.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200" />
                          <div>
                            <div className="font-bold text-slate-900">{prod.name}</div>
                            <div className="text-[11px] text-slate-500 font-mono">SKU: {prod.sku}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="font-semibold text-slate-800">{prod.category}</span>
                        <div className="text-[10px] text-slate-500">{prod.subcategory}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-semibold text-slate-900">{prod.brand}</div>
                        <div className="text-[10px] text-slate-500">{prod.model}</div>
                      </td>
                      <td className="p-3 font-bold text-slate-900">
                        {prod.isPriceOnRequest || !prod.price ? 'On Request' : `₹${prod.price.toLocaleString('en-IN')}`}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          prod.availability === 'In Stock' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-amber-50 text-amber-600 border border-amber-200'
                        }`}>
                          {prod.availability}
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => updateProduct(prod.id, { featured: !prod.featured })}
                          className={`p-1 rounded ${prod.featured ? 'text-amber-500' : 'text-slate-300 hover:text-slate-400'}`}
                          title="Toggle Featured"
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </button>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditProduct(prod)}
                            className="p-1.5 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors"
                            title="Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Delete ${prod.name}?`)) {
                                deleteProduct(prod.id);
                                showToast('Deleted', `Removed ${prod.name}.`);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ENQUIRIES & LEADS */}
        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Enquiry Tickets & Lead Management</h3>
                <p className="text-xs text-slate-500">Live incoming quotation forms, service requests, and hardware buyback enquiries.</p>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={enquiryStatusFilter}
                  onChange={(e) => setEnquiryStatusFilter(e.target.value)}
                  className="text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New Only</option>
                  <option value="In Review">In Review</option>
                  <option value="Quoted">Quoted</option>
                  <option value="Closed">Closed</option>
                </select>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search by customer/phone..."
                    value={enquirySearch}
                    onChange={(e) => setEnquirySearch(e.target.value)}
                    className="text-xs pl-8 pr-3 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none w-48 focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Enquiries Grid / List */}
            {filteredAdminEnquiries.length === 0 ? (
              <p className="text-xs text-slate-400 py-8 text-center">No enquiries matching filter.</p>
            ) : (
              <div className="space-y-3">
                {filteredAdminEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      enq.status === 'New' ? 'border-blue-200 bg-blue-50/40' : 'border-slate-200/80 bg-white'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 text-xs">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          enq.type === 'Quotation' ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                          enq.type === 'Service Request' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                          enq.type === 'Buyback / Purchase' ? 'bg-purple-50 text-purple-600 border border-purple-200' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {enq.type}
                        </span>
                        <strong className="text-slate-900 text-sm">{enq.customerName}</strong>
                        {enq.organization && <span className="text-slate-500 font-medium">({enq.organization})</span>}
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-[11px]">{new Date(enq.createdAt).toLocaleString()}</span>
                        <select
                          value={enq.status}
                          onChange={(e: any) => {
                            updateEnquiryStatus(enq.id, e.target.value);
                            showToast('Status Updated', `Ticket marked as ${e.target.value}.`);
                          }}
                          className="text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 outline-none"
                        >
                          <option value="New">Status: New</option>
                          <option value="In Review">Status: In Review</option>
                          <option value="Quoted">Status: Quoted</option>
                          <option value="Closed">Status: Closed</option>
                        </select>
                        <button
                          onClick={() => {
                            if (confirm('Delete enquiry?')) {
                              deleteEnquiry(enq.id);
                              showToast('Deleted', 'Enquiry ticket deleted.');
                            }
                          }}
                          className="text-slate-400 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Contact</span>
                        <div className="font-bold text-slate-900">{enq.phone}</div>
                        <div className="text-slate-500">{enq.email}</div>
                      </div>

                      <div className="md:col-span-2">
                        <span className="text-slate-400 block text-[10px]">Requirements & Details</span>
                        <p className="text-slate-700 leading-relaxed whitespace-pre-line">{enq.message}</p>
                        {enq.productName && (
                          <div className="mt-1 font-semibold text-blue-600">Target Product: {enq.productName} (Qty: {enq.itemQuantity || 1})</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: BLOG ARTICLES */}
        {activeTab === 'blog' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-slate-900">Knowledge Base Articles</h3>
              <button
                onClick={() => setIsBlogModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Article</span>
              </button>
            </div>

            <div className="space-y-3">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <img src={post.image} alt={post.title} className="w-12 h-12 rounded-xl object-cover border border-slate-200" />
                    <div>
                      <span className="text-[10px] text-blue-600 font-bold bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">{post.category}</span>
                      <h4 className="font-bold text-slate-900 text-sm mt-1">{post.title}</h4>
                      <p className="text-slate-500 text-[11px]">{post.date} • {post.readTime}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (confirm(`Delete post "${post.title}"?`)) {
                        deleteBlogPost(post.id);
                        showToast('Article Deleted', 'Removed article from blog.');
                      }
                    }}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-white transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SITE & CONTACT SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-bold text-lg text-slate-900">Website Configuration & Contact Information</h3>
              <p className="text-xs text-slate-500">Live values update immediately across the header, footer, contact page, and hero metrics.</p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={settingsForm.companyName}
                    onChange={(e) => setSettingsForm({ ...settingsForm, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Primary Phone</label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Mobile / Emergency Phone</label>
                  <input
                    type="text"
                    value={settingsForm.mobile}
                    onChange={(e) => setSettingsForm({ ...settingsForm, mobile: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Primary Email</label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Business Hours</label>
                  <input
                    type="text"
                    value={settingsForm.businessHours}
                    onChange={(e) => setSettingsForm({ ...settingsForm, businessHours: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">Office Address</label>
                  <input
                    type="text"
                    value={settingsForm.address}
                    onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Stats Counters */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Stats Counters (Hero & About Page)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <label className="block font-medium text-slate-600 mb-1">Products Supplied</label>
                    <input
                      type="text"
                      value={settingsForm.stats.productsSupplied}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        stats: { ...settingsForm.stats, productsSupplied: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-600 mb-1">Services Repaired</label>
                    <input
                      type="text"
                      value={settingsForm.stats.servicesCompleted}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        stats: { ...settingsForm.stats, servicesCompleted: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-600 mb-1">CCTV Cameras</label>
                    <input
                      type="text"
                      value={settingsForm.stats.cctvInstallations}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        stats: { ...settingsForm.stats, cctvInstallations: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-600 mb-1">Experience Years</label>
                    <input
                      type="text"
                      value={settingsForm.stats.experienceYears}
                      onChange={(e) => setSettingsForm({
                        ...settingsForm,
                        stats: { ...settingsForm.stats, experienceYears: e.target.value }
                      })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-full shadow-md flex items-center gap-2 transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Configuration</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Product Add/Edit Modal */}
        {isProductModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5 relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-lg text-slate-900">
                  {editingProduct ? 'Edit Product Item' : 'Add New Hardware Product'}
                </h3>
                <button onClick={() => setIsProductModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Product Title *</label>
                    <input
                      type="text"
                      value={prodForm.name}
                      onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                      required
                      placeholder="e.g. Dell OptiPlex 7010 Tower PC"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Brand *</label>
                    <input
                      type="text"
                      value={prodForm.brand}
                      onChange={(e) => setProdForm({ ...prodForm, brand: e.target.value })}
                      required
                      placeholder="e.g. Dell, HP, Canon, Hikvision"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Category</label>
                    <select
                      value={prodForm.category}
                      onChange={(e: any) => setProdForm({ ...prodForm, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-500 focus:bg-white"
                    >
                      <option value="Desktop">Desktop</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Printer">Printer</option>
                      <option value="CCTV">CCTV</option>
                      <option value="Access Control">Access Control</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Networking">Networking</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Subcategory</label>
                    <input
                      type="text"
                      value={prodForm.subcategory}
                      onChange={(e: any) => setProdForm({ ...prodForm, subcategory: e.target.value })}
                      placeholder="e.g. Business Desktop PCs"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Model / SKU</label>
                    <input
                      type="text"
                      value={prodForm.model}
                      onChange={(e) => setProdForm({ ...prodForm, model: e.target.value })}
                      placeholder="e.g. OptiPlex 7010"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Price (₹ INR)</label>
                    <input
                      type="number"
                      value={prodForm.price || ''}
                      onChange={(e) => setProdForm({ ...prodForm, price: parseInt(e.target.value) || null })}
                      placeholder="e.g. 45000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Availability</label>
                    <select
                      value={prodForm.availability}
                      onChange={(e: any) => setProdForm({ ...prodForm, availability: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-500 focus:bg-white"
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Available on Order">Available on Order</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Warranty</label>
                    <input
                      type="text"
                      value={prodForm.warranty}
                      onChange={(e) => setProdForm({ ...prodForm, warranty: e.target.value })}
                      placeholder="e.g. 3 Years Onsite Warranty"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Image URL</label>
                  <input
                    type="text"
                    value={prodForm.image}
                    onChange={(e) => setProdForm({ ...prodForm, image: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    value={prodForm.shortDescription}
                    onChange={(e) => setProdForm({ ...prodForm, shortDescription: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 outline-none resize-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured-toggle"
                    checked={prodForm.featured}
                    onChange={(e) => setProdForm({ ...prodForm, featured: e.target.checked })}
                    className="rounded border-slate-300 text-blue-600 focus:ring-0"
                  />
                  <label htmlFor="featured-toggle" className="font-semibold text-slate-700">
                    Feature on Homepage (Featured In-Demand Hardware)
                  </label>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsProductModalOpen(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-bold shadow-md transition-all"
                  >
                    Save Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Blog Add Modal */}
        {isBlogModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5 relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-lg text-slate-900">
                  Publish New Knowledge Base Guide
                </h3>
                <button onClick={() => setIsBlogModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveBlogPost} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Article Title *</label>
                  <input
                    type="text"
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    required
                    placeholder="e.g. Complete Guide to Office Network Setup"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Category</label>
                    <select
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none"
                    >
                      <option value="Hardware Guide">Hardware Guide</option>
                      <option value="Security & Surveillance">Security & Surveillance</option>
                      <option value="Printer Maintenance">Printer Maintenance</option>
                      <option value="Access Control">Access Control</option>
                      <option value="IT Maintenance">IT Maintenance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Read Time</label>
                    <input
                      type="text"
                      value={blogForm.readTime}
                      onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                      placeholder="e.g. 5 min read"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Cover Image URL</label>
                  <input
                    type="text"
                    value={blogForm.image}
                    onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Summary *</label>
                  <textarea
                    rows={2}
                    value={blogForm.summary}
                    onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })}
                    required
                    placeholder="Brief summary of the article..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Article Content</label>
                  <textarea
                    rows={4}
                    value={blogForm.content}
                    onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                    placeholder="Write detailed guide content and tips..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsBlogModalOpen(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-bold shadow-md transition-all"
                  >
                    Publish Guide
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
