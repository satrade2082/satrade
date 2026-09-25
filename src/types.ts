export type ProductCategory = 
  | 'Desktop'
  | 'Laptop'
  | 'Printer'
  | 'CCTV'
  | 'Access Control'
  | 'Accessories'
  | 'Networking';

export type ProductSubCategory = 
  // Desktop
  | 'Office Desktop' | 'Business Desktop' | 'Custom PC' | 'Gaming/Performance PC'
  // Laptop
  | 'Business Laptop' | 'Student Laptop' | 'Professional Laptop' | 'Performance Laptop'
  // Printer
  | 'Laser Printer' | 'Inkjet Printer' | 'Multifunction Printer' | 'Color Printer' | 'Office Printer'
  // CCTV
  | 'IP Camera' | 'Dome Camera' | 'Bullet Camera' | 'PTZ Camera' | 'DVR' | 'NVR' | 'CCTV Hard Drive' | 'Complete CCTV Package'
  // Access Control
  | 'Fingerprint Device' | 'Face Recognition' | 'RFID' | 'Door Access Controller' | 'EM Lock' | 'Exit Button' | 'Attendance System'
  // Accessories
  | 'Monitor' | 'Keyboard' | 'Mouse' | 'RAM' | 'SSD' | 'HDD' | 'UPS' | 'Power Supply' | 'Cables' | 'Adapters'
  // Networking
  | 'Router' | 'Switch' | 'Access Point' | 'Network Rack' | 'Patch Panel' | 'LAN Cable' | 'Fiber Equipment';

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: ProductCategory;
  subcategory: ProductSubCategory;
  sku: string;
  image: string;
  shortDescription: string;
  price: number | null; // null means 'Request Price'
  isPriceOnRequest: boolean;
  warranty: string;
  availability: 'In Stock' | 'Available on Order' | 'Out of Stock';
  specifications: Record<string, string>;
  featured?: boolean;
  bestFor?: string;
  createdAt: string;
}

export type ServiceType = 
  | 'Computer Repair'
  | 'Laptop Repair'
  | 'Printer Repair'
  | 'CCTV Installation'
  | 'CCTV Maintenance'
  | 'Access Control Installation'
  | 'Networking & IT Support'
  | 'Annual Maintenance Contract'
  | 'Other';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  serviceType: ServiceType;
  turnaroundTime: string;
  pricingEstimate: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'CCTV' | 'Access Control' | 'Networking' | 'Computer Lab' | 'Office IT Setup' | 'Printer/IT Infrastructure';
  description: string;
  equipmentUsed: string[];
  image: string;
  completionDate: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  tags: string[];
}

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  logo: string;
  tagline?: string;
}

export type EnquiryType = 'Quote Request' | 'Service Request' | 'Buyback / Purchase' | 'General Contact' | 'Site Survey';

export interface Enquiry {
  id: string;
  type: EnquiryType;
  customerName: string;
  organization?: string;
  phone: string;
  email: string;
  subject?: string;
  message: string;
  status: 'New' | 'In Progress' | 'Quoted' | 'Scheduled' | 'Completed';
  createdAt: string;
  
  // Specific to Quote
  productName?: string;
  productId?: string;
  quantity?: number;
  
  // Specific to Service
  serviceType?: string;
  equipmentType?: string;
  brand?: string;
  model?: string;
  problemDescription?: string;
  preferredDate?: string;
  location?: string;
  
  // Specific to Buyback / Purchase
  condition?: 'Brand New' | 'Excellent' | 'Good' | 'Fair' | 'Faulty / For Parts';
  expectedPrice?: string;
  itemQuantity?: number;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  phone: string;
  mobile: string;
  whatsapp: string;
  email: string;
  address: string;
  businessHours: string;
  googleMapUrl: string;
  stats: {
    productsSupplied: string;
    servicesCompleted: string;
    cctvInstallations: string;
    happyCustomers: string;
    experienceYears: string;
  };
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

export type ActivePage = 
  | 'home'
  | 'about'
  | 'products'
  | 'product-detail'
  | 'services'
  | 'sales-purchase'
  | 'cctv'
  | 'access-control'
  | 'projects'
  | 'blog'
  | 'blog-detail'
  | 'contact'
  | 'request-service'
  | 'admin';
