import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Product, 
  ServiceItem, 
  ProjectItem, 
  BlogPost, 
  BrandItem, 
  SiteSettings, 
  Enquiry, 
  ActivePage,
  ProductCategory,
  ProductSubCategory
} from '../types';
import { 
  initialSiteSettings, 
  initialProducts, 
  initialServices, 
  initialProjects, 
  initialBlogPosts, 
  initialBrands, 
  initialEnquiries 
} from '../data/mockData';

interface ToastInfo {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}

interface AppContextType {
  // Navigation & Routing
  currentPage: ActivePage;
  setCurrentPage: (page: ActivePage) => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (cat: string | null) => void;
  selectedSubCategoryFilter: string | null;
  setSelectedSubCategoryFilter: (subCat: string | null) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  selectedBlogSlug: string | null;
  setSelectedBlogSlug: (slug: string | null) => void;

  // Data Collections
  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  services: ServiceItem[];
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;

  projects: ProjectItem[];
  addProject: (project: Omit<ProjectItem, 'id'>) => void;
  updateProject: (id: string, project: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;

  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;

  brands: BrandItem[];
  addBrand: (brand: Omit<BrandItem, 'id'>) => void;
  deleteBrand: (id: string) => void;

  enquiries: Enquiry[];
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  deleteEnquiry: (id: string) => void;

  // Modals & UI States
  isQuoteModalOpen: boolean;
  openQuoteModal: (product?: Product | null) => void;
  closeQuoteModal: () => void;
  quoteModalProduct: Product | null;

  isQuickViewOpen: boolean;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;

  // Feedback Toasts
  toasts: ToastInfo[];
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;

  // Helper actions
  navigateToProductCategory: (category: ProductCategory, subcategory?: ProductSubCategory) => void;
  navigateToServiceType: (serviceType?: string) => void;
  resetAllDataToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [selectedSubCategoryFilter, setSelectedSubCategoryFilter] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);

  // Modals
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  // Persistent States with LocalStorage fallbacks
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem('satrade_settings');
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('satrade_products');
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem('satrade_services');
      return saved ? JSON.parse(saved) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('satrade_projects');
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem('satrade_blog_posts');
      return saved ? JSON.parse(saved) : initialBlogPosts;
    } catch {
      return initialBlogPosts;
    }
  });

  const [brands, setBrands] = useState<BrandItem[]>(() => {
    try {
      const saved = localStorage.getItem('satrade_brands');
      return saved ? JSON.parse(saved) : initialBrands;
    } catch {
      return initialBrands;
    }
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const saved = localStorage.getItem('satrade_enquiries');
      return saved ? JSON.parse(saved) : initialEnquiries;
    } catch {
      return initialEnquiries;
    }
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('satrade_settings', JSON.stringify(siteSettings));
    } catch (e) {
      console.error(e);
    }
  }, [siteSettings]);

  useEffect(() => {
    try {
      localStorage.setItem('satrade_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('satrade_services', JSON.stringify(services));
    } catch (e) {
      console.error(e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem('satrade_projects', JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('satrade_blog_posts', JSON.stringify(blogPosts));
    } catch (e) {
      console.error(e);
    }
  }, [blogPosts]);

  useEffect(() => {
    try {
      localStorage.setItem('satrade_brands', JSON.stringify(brands));
    } catch (e) {
      console.error(e);
    }
  }, [brands]);

  useEffect(() => {
    try {
      localStorage.setItem('satrade_enquiries', JSON.stringify(enquiries));
    } catch (e) {
      console.error(e);
    }
  }, [enquiries]);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProductId, selectedBlogSlug]);

  // Toast Handler
  const showToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Modals
  const openQuoteModal = (product: Product | null = null) => {
    setQuoteModalProduct(product);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteModalProduct(null);
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  // CRUD for Products
  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: 'prod-' + Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => [newProduct, ...prev]);
    showToast('Product Added', `${newProduct.name} has been published to catalog.`);
  };

  const updateProduct = (id: string, updated: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
    showToast('Product Updated', 'Product changes have been saved.');
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    showToast('Product Deleted', 'The product has been removed from catalog.', 'info');
  };

  // CRUD for Services
  const addService = (serviceData: Omit<ServiceItem, 'id'>) => {
    const newService: ServiceItem = {
      ...serviceData,
      id: 'srv-' + Date.now().toString()
    };
    setServices(prev => [...prev, newService]);
    showToast('Service Added', `${newService.title} has been added.`);
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updated } : s));
    showToast('Service Updated', 'Service details updated successfully.');
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
    showToast('Service Deleted', 'Service removed.', 'info');
  };

  // CRUD for Projects
  const addProject = (projectData: Omit<ProjectItem, 'id'>) => {
    const newProj: ProjectItem = {
      ...projectData,
      id: 'proj-' + Date.now().toString()
    };
    setProjects(prev => [newProj, ...prev]);
    showToast('Project Added', `${newProj.title} installation published.`);
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
    showToast('Project Updated', 'Project details saved.');
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    showToast('Project Deleted', 'Project removed from portfolio.', 'info');
  };

  // CRUD for Blog
  const addBlogPost = (postData: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...postData,
      id: 'post-' + Date.now().toString()
    };
    setBlogPosts(prev => [newPost, ...prev]);
    showToast('Article Published', `${newPost.title} is now live.`);
  };

  const updateBlogPost = (id: string, updated: Partial<BlogPost>) => {
    setBlogPosts(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
    showToast('Article Updated', 'Blog article updated successfully.');
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
    showToast('Article Deleted', 'Blog post removed.', 'info');
  };

  // Brands
  const addBrand = (brandData: Omit<BrandItem, 'id'>) => {
    const newBrand: BrandItem = {
      ...brandData,
      id: 'b-' + Date.now().toString()
    };
    setBrands(prev => [...prev, newBrand]);
    showToast('Brand Added', `${newBrand.name} added to authorized brands list.`);
  };

  const deleteBrand = (id: string) => {
    setBrands(prev => prev.filter(b => b.id !== id));
    showToast('Brand Deleted', 'Brand removed.', 'info');
  };

  // Enquiries
  const addEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: 'enq-' + Date.now().toString().slice(-6),
      status: 'New',
      createdAt: new Date().toISOString()
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
    showToast('Status Updated', `Enquiry status changed to ${status}.`);
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
    showToast('Enquiry Removed', 'Record deleted from dashboard.', 'info');
  };

  const updateSiteSettings = (updated: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({
      ...prev,
      ...updated,
      stats: {
        ...prev.stats,
        ...(updated.stats || {})
      },
      socialLinks: {
        ...prev.socialLinks,
        ...(updated.socialLinks || {})
      }
    }));
    showToast('Settings Saved', 'Site & Company profile updated successfully.');
  };

  const navigateToProductCategory = (category: ProductCategory, subcategory?: ProductSubCategory) => {
    setSelectedCategoryFilter(category);
    setSelectedSubCategoryFilter(subcategory || null);
    setSelectedProductId(null);
    setCurrentPage('products');
  };

  const navigateToServiceType = (serviceType?: string) => {
    if (serviceType) {
      setCurrentPage('request-service');
    } else {
      setCurrentPage('services');
    }
  };

  const resetAllDataToDefaults = () => {
    localStorage.removeItem('satrade_settings');
    localStorage.removeItem('satrade_products');
    localStorage.removeItem('satrade_services');
    localStorage.removeItem('satrade_projects');
    localStorage.removeItem('satrade_blog_posts');
    localStorage.removeItem('satrade_brands');
    localStorage.removeItem('satrade_enquiries');

    setSiteSettings(initialSiteSettings);
    setProducts(initialProducts);
    setServices(initialServices);
    setProjects(initialProjects);
    setBlogPosts(initialBlogPosts);
    setBrands(initialBrands);
    setEnquiries(initialEnquiries);
    showToast('Reset Complete', 'Database restored to initial state.');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        selectedSubCategoryFilter,
        setSelectedSubCategoryFilter,
        selectedProductId,
        setSelectedProductId,
        selectedBlogSlug,
        setSelectedBlogSlug,

        siteSettings,
        updateSiteSettings,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        services,
        addService,
        updateService,
        deleteService,
        projects,
        addProject,
        updateProject,
        deleteProject,
        blogPosts,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        brands,
        addBrand,
        deleteBrand,
        enquiries,
        addEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,

        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        quoteModalProduct,

        isQuickViewOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,

        isSearchModalOpen,
        setIsSearchModalOpen,

        toasts,
        showToast,
        removeToast,

        navigateToProductCategory,
        navigateToServiceType,
        resetAllDataToDefaults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
