import { Product, ServiceItem, ProjectItem, BlogPost, BrandItem, SiteSettings, Enquiry } from '../types';

export const initialSiteSettings: SiteSettings = {
  companyName: 'SA Trade',
  tagline: 'Complete IT Hardware & Security Solutions',
  phone: '9851097327',
  mobile: '9851097327',
  whatsapp: '9851097327',
  email: 'satrade2082@gmail.com',
  address: 'Madhyapur Thimi-9, Bhaktapur',
  businessHours: 'Sunday – Friday: 9:30 AM – 7:30 PM (Saturday Closed)',
  googleMapUrl: 'https://maps.app.goo.gl/Xx4GrSMXpKpWEFzy9',
  stats: {
    productsSupplied: '15,000+',
    servicesCompleted: '8,500+',
    cctvInstallations: '1,200+',
    happyCustomers: '4,800+',
    experienceYears: '12+'
  },
  socialLinks: {
    //facebook: 'https://facebook.com',
    //linkedin: 'https://linkedin.com',
    //twitter: 'https://twitter.com',
    //instagram: 'https://instagram.com'
  }
};

export const initialProducts: Product[] = [
  // Desktop
  {
    id: 'prod-dt-1',
    name: 'Dell OptiPlex 7010 Micro Form Factor',
    brand: 'Dell',
    model: 'OptiPlex 7010 MFF',
    category: 'Desktop',
    subcategory: 'Business Desktop',
    sku: 'SAT-DT-DELL-7010',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Ultra-compact business desktop powered by 13th Gen Intel Core i5 with enterprise security and flexible mounting.',
    price: 52900,
    isPriceOnRequest: false,
    warranty: '3 Years Dell ProSupport Onsite',
    availability: 'In Stock',
    specifications: {
      'Processor': '13th Gen Intel Core i5-13500T (14 Cores, up to 4.6GHz)',
      'RAM': '16GB DDR5 4800MHz (Expandable to 64GB)',
      'Storage': '512GB M.2 NVMe PCIe SSD',
      'Graphics': 'Intel UHD Graphics 770',
      'OS': 'Windows 11 Pro 64-bit pre-activated',
      'Ports': 'USB Type-C 3.2 Gen 2, 4x USB 3.2, DisplayPort 1.4a, HDMI 1.4b, Gigabit LAN'
    },
    featured: true,
    bestFor: 'Offices, Banks, Corporate Workstations',
    createdAt: '2026-01-10'
  },
  {
    id: 'prod-dt-2',
    name: 'HP Pro Tower 280 G9 Office Desktop',
    brand: 'HP',
    model: 'Pro 280 G9 Microtower',
    category: 'Desktop',
    subcategory: 'Office Desktop',
    sku: 'SAT-DT-HP-280G9',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Reliable office tower designed for seamless daily administrative tasks, accounting software, and multi-display setups.',
    price: 43500,
    isPriceOnRequest: false,
    warranty: '3 Years HP Next Business Day Onsite Warranty',
    availability: 'In Stock',
    specifications: {
      'Processor': '12th Gen Intel Core i3-12100 (4 Cores, up to 4.3GHz)',
      'RAM': '8GB DDR4 3200MHz (1x8GB, dual slot)',
      'Storage': '512GB NVMe SSD + 1TB 7200RPM HDD Slot',
      'Form Factor': 'Microtower with 180W Gold PSU',
      'Connectivity': 'Realtek Gigabit Ethernet, Wi-Fi 6 + BT 5.2',
      'Included': 'HP USB Keyboard & Optical Mouse'
    },
    featured: false,
    bestFor: 'Schools, Colleges, Accounting & Small Business',
    createdAt: '2026-01-12'
  },
  {
    id: 'prod-dt-3',
    name: 'Custom RTX 4070 Workstation & CAD PC',
    brand: 'Custom PC',
    model: 'SA Titan Workstation Pro',
    category: 'Desktop',
    subcategory: 'Custom PC',
    sku: 'SAT-DT-CUST-TITAN',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Custom-engineered high performance workstation optimized for AutoCAD, SolidWorks, 3D rendering, video editing & engineering.',
    price: null,
    isPriceOnRequest: true,
    warranty: '2 Years Comprehensive Hardware Warranty (SA Trade Assured)',
    availability: 'Available on Order',
    specifications: {
      'Processor': 'Intel Core i7-14700K (20 Cores, 28 Threads, up to 5.6GHz)',
      'Cooler': 'DeepCool 360mm Liquid ARGB Cooler',
      'Motherboard': 'ASUS Prime Z790-P Wi-Fi',
      'GPU': 'NVIDIA GeForce RTX 4070 12GB GDDR6X',
      'RAM': '32GB (2x16GB) Corsair Vengeance DDR5 6000MHz',
      'Storage': '1TB Samsung 990 Pro Gen4 NVMe + 2TB Seagate Barracuda',
      'Power Supply': 'Corsair RM750e 750W 80+ Gold Fully Modular'
    },
    featured: true,
    bestFor: 'Architecture Studios, CAD Engineers, Video Editors, Animators',
    createdAt: '2026-01-15'
  },

  // Laptop
  {
    id: 'prod-lp-1',
    name: 'Lenovo ThinkPad E14 Gen 5 Business Laptop',
    brand: 'Lenovo',
    model: 'ThinkPad E14 Gen 5',
    category: 'Laptop',
    subcategory: 'Business Laptop',
    sku: 'SAT-LP-LEN-E14G5',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Military-grade rugged durability, legendary ergonomic ThinkPad keyboard, and long battery life designed for executives and field staff.',
    price: 64999,
    isPriceOnRequest: false,
    warranty: '3 Years Lenovo Premier Support & Accidental Damage Protection',
    availability: 'In Stock',
    specifications: {
      'Processor': '13th Gen Intel Core i5-1335U (10 Cores, up to 4.6GHz)',
      'Display': '14.0" WUXGA (1920x1200) IPS Anti-glare 300 nits',
      'RAM': '16GB DDR4 3200MHz',
      'Storage': '512GB M.2 2242 PCIe 4.0x4 NVMe SSD',
      'Security': 'FPR (Fingerprint reader) in Power Button + TPM 2.0',
      'Battery': '57Whr with Rapid Charge support (80% in 1 hr)'
    },
    featured: true,
    bestFor: 'Corporate Teams, Field Executives, Managers',
    createdAt: '2026-01-18'
  },
  {
    id: 'prod-lp-2',
    name: 'ASUS ExpertBook B1 Student & Office Laptop',
    brand: 'ASUS',
    model: 'ExpertBook B1402',
    category: 'Laptop',
    subcategory: 'Student Laptop',
    sku: 'SAT-LP-ASUS-B1',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Affordable, feather-light commercial laptop engineered for everyday office workflows, Zoom meetings, and educational institutions.',
    price: 36500,
    isPriceOnRequest: false,
    warranty: '1 Year ASUS Onsite Brand Warranty',
    availability: 'In Stock',
    specifications: {
      'Processor': 'Intel Core i3-1215U (6 Cores, up to 4.4GHz)',
      'Display': '14.0" FHD (1920x1080) LED Backlit NanoEdge',
      'RAM': '8GB DDR4 onboard (1 slot free)',
      'Storage': '512GB M.2 NVMe PCIe 4.0 SSD',
      'Weight': '1.49 kg (Ultra Portable)',
      'Ports': 'USB-C (Power Delivery & Display), 2x USB-A 3.2, HDMI, RJ45 LAN'
    },
    featured: false,
    bestFor: 'Students, Coaching Centers, Call Centers, Front Desks',
    createdAt: '2026-01-20'
  },

  // Printer
  {
    id: 'prod-pr-1',
    name: 'Canon imageCLASS MF244dw Multifunction Laser Printer',
    brand: 'Canon',
    model: 'imageCLASS MF244dw',
    category: 'Printer',
    subcategory: 'Multifunction Printer',
    sku: 'SAT-PR-CAN-244DW',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'All-in-one Monochrome Laser Printer (Print, Scan, Copy) with auto-duplex printing, 35-sheet ADF, and Wi-Fi networking.',
    price: 26800,
    isPriceOnRequest: false,
    warranty: '1 Year Canon Onsite Warranty',
    availability: 'In Stock',
    specifications: {
      'Print Speed': 'Up to 27 ppm (A4)',
      'Functions': 'Print, Scan, Copy, Auto-Duplex, Auto Document Feeder (ADF)',
      'Connectivity': 'Wi-Fi 802.11 b/g/n, Ethernet 10/100, USB 2.0',
      'Monthly Duty Cycle': 'Up to 15,000 pages',
      'Toner Cartridge': 'Canon 337 (Yield ~2,400 standard pages)',
      'Paper Tray': '250-sheet cassette + 1-sheet multipurpose tray'
    },
    featured: true,
    bestFor: 'Law Firms, Clinics, Billing Counters, Corporate Offices',
    createdAt: '2026-01-22'
  },
  {
    id: 'prod-pr-2',
    name: 'Epson EcoTank L3250 Wi-Fi Color Ink Tank Printer',
    brand: 'Epson',
    model: 'EcoTank L3250',
    category: 'Printer',
    subcategory: 'Color Printer',
    sku: 'SAT-PR-EPS-L3250',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High-yield color ink tank printer with spill-free refill system, mobile smart app printing, and ultra-low cost per print (9 paise black / 24 paise color).',
    price: 14750,
    isPriceOnRequest: false,
    warranty: '1 Year or 30,000 Pages Epson Onsite Warranty',
    availability: 'In Stock',
    specifications: {
      'Print Speed': '33 ppm (Black), 15 ppm (Color)',
      'Resolution': '5760 x 1440 dpi (Photo quality)',
      'Connectivity': 'Wi-Fi, Wi-Fi Direct, USB 2.0',
      'Page Yield': 'Up to 4,500 pages (Black), 7,500 pages (Color) per bottle set',
      'Scanner': 'Flatbed color CIS optical resolution 1200 x 2400 dpi'
    },
    featured: false,
    bestFor: 'Schools, Photo Studios, Home Offices, Travel Agencies',
    createdAt: '2026-01-24'
  },

  // CCTV
  {
    id: 'prod-cctv-1',
    name: 'Hikvision 4MP ColorVu Audio IP Dome Camera',
    brand: 'Hikvision',
    model: 'DS-2CD1147G0-LU',
    category: 'CCTV',
    subcategory: 'IP Camera',
    sku: 'SAT-CCTV-HIK-4MPCV',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Full-time 24/7 vivid color imaging in pitch darkness with F1.0 super aperture, built-in microphone for real-time audio, and vandal-resistant IP67 casing.',
    price: 3850,
    isPriceOnRequest: false,
    warranty: '2 Years Hikvision Authorized Replacement Warranty',
    availability: 'In Stock',
    specifications: {
      'Resolution': '4 Megapixel (2560 × 1440) @ 25fps',
      'Night Vision': 'ColorVu 24/7 Color up to 30 meters White Light',
      'Lens': '2.8mm / 4mm Fixed Lens (Horizontal FOV 96°)',
      'Audio': 'Built-in microphone for synchronized audio monitoring',
      'Protection': 'IP67 Weatherproof & IK08 Vandal Resistant',
      'Compression': 'H.265+ ultra-efficient bandwidth encoding'
    },
    featured: true,
    bestFor: 'Retail Showrooms, Warehouses, Parking Lots, Residential Societies',
    createdAt: '2026-01-28'
  },
  {
    id: 'prod-cctv-2',
    name: 'Dahua 8-Channel 4K AI WizSense Network Video Recorder (NVR)',
    brand: 'Dahua',
    model: 'NVR4108HS-4KS2/I',
    category: 'CCTV',
    subcategory: 'NVR',
    sku: 'SAT-CCTV-DAH-8CHNVR',
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Smart AI NVR supporting 8 IP cameras up to 8MP/4K, perimeter protection, facial detection, human/vehicle target filtering, and cloud remote app.',
    price: 8900,
    isPriceOnRequest: false,
    warranty: '2 Years Dahua Brand Warranty',
    availability: 'In Stock',
    specifications: {
      'Channels': '8-Channel IP Video Inputs',
      'Decoding Capability': '1-ch @ 8MP / 4-ch @ 1080P',
      'Storage': '1x SATA III Port (supports up to 10TB HDD)',
      'Video Output': '1x HDMI (4K 3840x2160), 1x VGA',
      'AI Features': 'Face Detection, SMD Plus (Smart Motion Detection), Tripwire & Intrusion',
      'Mobile App': 'DMSS (iOS & Android) with live notifications'
    },
    featured: false,
    bestFor: 'Office Buildings, Factories, Multi-Story Commercial Complex',
    createdAt: '2026-01-30'
  },
  {
    id: 'prod-cctv-3',
    name: 'Complete 8-Camera 4MP IP Surveillance Security Package',
    brand: 'Hikvision / SA Assured',
    model: 'SA-CCTV-PACK-8CH',
    category: 'CCTV',
    subcategory: 'Complete CCTV Package',
    sku: 'SAT-CCTV-PKG-8',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Turnkey security solution including 8x 4MP IP Cameras, 8CH PoE NVR, 2TB Surveillance Hard Drive, Cat6 cabling, rack, and complete professional installation.',
    price: null,
    isPriceOnRequest: true,
    warranty: '2 Years Onsite Installation & Maintenance Support',
    availability: 'In Stock',
    specifications: {
      'Cameras Included': '4x Dome (Indoor) + 4x Bullet (Outdoor) 4MP Audio IP Cameras',
      'NVR': '8-Port Plug & Play PoE 4K NVR',
      'Storage': '2TB Western Digital Purple Surveillance HDD (30 Days Retention)',
      'Network': 'Cat6 D-Link Solid Copper Cable roll + RJ45 Connectors + 4U Wall Rack',
      'Services': 'Complete Site Survey, Cable Conduit Laying, Mounting, Mobile App Sync'
    },
    featured: true,
    bestFor: 'Complete School, Hospital, Warehouse & Commercial Security',
    createdAt: '2026-02-02'
  },

  // Access Control
  {
    id: 'prod-ac-1',
    name: 'ZKTeco SpeedFace-V5L Visible Light Face & Palm Recognition Device',
    brand: 'ZKTeco',
    model: 'SpeedFace-V5L(TI)',
    category: 'Access Control',
    subcategory: 'Face Recognition',
    sku: 'SAT-AC-ZK-V5L',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Touchless biometric access control and attendance terminal with deep learning facial recognition algorithm (0.3s speed) and thermal detection option.',
    price: 24500,
    isPriceOnRequest: false,
    warranty: '2 Years Brand Warranty & Software Setup Support',
    availability: 'In Stock',
    specifications: {
      'Capacity': '6,000 Faces, 3,000 Palms, 10,000 Fingerprints, 10,000 RFID Cards',
      'Display': '5-inch Touch LCD Screen with Dual Camera anti-spoofing',
      'Communication': 'TCP/IP, Wi-Fi, Wiegand Input/Output, RS485',
      'Access Control Interface': '3rd Party Electric Lock, Door Sensor, Exit Button, Alarm Output',
      'Software': 'ZKBio CVAccess / ZKBioTime cloud attendance integration'
    },
    featured: true,
    bestFor: 'Corporate Offices, Factories, Hospitals, Co-working Spaces',
    createdAt: '2026-02-05'
  },
  {
    id: 'prod-ac-2',
    name: 'Realtime Biometric Fingerprint & RFID Door Access Kit with 600lbs EM Lock',
    brand: 'Realtime',
    model: 'T52 EM Lock Combo Kit',
    category: 'Access Control',
    subcategory: 'Door Access Controller',
    sku: 'SAT-AC-RT-EMKIT',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Complete single-door access control package with optical fingerprint scanner, heavy-duty 280kg/600lbs electromagnetic lock, power supply, and push-to-exit button.',
    price: 11900,
    isPriceOnRequest: false,
    warranty: '1 Year Full Replacement Warranty',
    availability: 'In Stock',
    specifications: {
      'Kit Contents': 'Fingerprint Reader + 600lbs Magnetic Lock + LZ Bracket + Exit Switch + 12V 5A Backup Power Supply',
      'Log Capacity': '100,000 Attendance logs with USB download & Excel report generator',
      'Verification Speed': '< 0.5 seconds',
      'Door Compatibility': 'Glass door, Wooden door, Metal door, Fire exit door'
    },
    featured: false,
    bestFor: 'Server Rooms, Director Cabins, R&D Labs, Financial Counters',
    createdAt: '2026-02-08'
  },

  // Accessories
  {
    id: 'prod-acc-1',
    name: 'Crucial P3 Plus 1TB PCIe 4.0 3D NAND NVMe M.2 SSD',
    brand: 'Crucial',
    model: 'CT1000P3PSSD8',
    category: 'Accessories',
    subcategory: 'SSD',
    sku: 'SAT-ACC-CRU-1TBSSD',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High-speed Gen4 NVMe storage upgrade with sequential read speeds up to 5000 MB/s, revitalizing older laptops and office desktops.',
    price: 6200,
    isPriceOnRequest: false,
    warranty: '5 Years Crucial Manufacturer Warranty',
    availability: 'In Stock',
    specifications: {
      'Capacity': '1000GB (1TB)',
      'Interface': 'PCIe Gen4 x4 NVMe (Backward compatible with Gen3)',
      'Read Speed': 'Up to 5000 MB/s',
      'Write Speed': 'Up to 4200 MB/s',
      'Endurance': '220 TBW',
      'Installation': 'Free on-site OS migration & installation with SA Trade service'
    },
    featured: false,
    bestFor: 'Laptop Speed Boost, Boot Drive, Data Archiving',
    createdAt: '2026-02-10'
  },
  {
    id: 'prod-acc-2',
    name: 'APC Back-UPS 1100VA 230V with Automatic Voltage Regulation (AVR)',
    brand: 'APC by Schneider',
    model: 'BX1100C-IN',
    category: 'Accessories',
    subcategory: 'UPS',
    sku: 'SAT-ACC-APC-1100',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Reliable uninterrupted power backup and surge protection for desktop PCs, Wi-Fi routers, NVRs and point-of-sale systems.',
    price: 6850,
    isPriceOnRequest: false,
    warranty: '2 Years APC India Warranty (including battery)',
    availability: 'In Stock',
    specifications: {
      'Output Power': '660 Watts / 1100VA',
      'Battery Type': 'Maintenance-free sealed Lead-Acid battery',
      'Outlets': '4x India 3-pin battery backed up sockets with surge protection',
      'Backup Duration': '45–60 mins for single PC + Router setup',
      'AVR': 'Automatic voltage regulator protects against voltage spikes and drops'
    },
    featured: true,
    bestFor: 'Office Desktops, CCTV Setup, Cash Counters, Routers',
    createdAt: '2026-02-12'
  },

  // Networking
  {
    id: 'prod-net-1',
    name: 'TP-Link Omada 24-Port Gigabit Managed Switch with 4 SFP Slots',
    brand: 'TP-Link',
    model: 'TL-SG3428',
    category: 'Networking',
    subcategory: 'Switch',
    sku: 'SAT-NET-TPL-SG3428',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'JetStream 24-port Gigabit L2+ managed switch integrating seamlessly into Omada Software Defined Networking (SDN) cloud management.',
    price: 15400,
    isPriceOnRequest: false,
    warranty: '5 Years TP-Link Enterprise Limited Warranty',
    availability: 'In Stock',
    specifications: {
      'Ports': '24x 10/100/1000 Mbps RJ45 Ports + 4x Gigabit SFP Slots',
      'Switching Capacity': '56 Gbps',
      'Management': 'Omada Cloud Controller, Web GUI, CLI, SNMP',
      'Security': 'IP-MAC-Port Binding, ACL, Port Security, DoS Defend, 802.1X',
      'Rackmount': 'Standard 19-inch 1U metal rackmount case'
    },
    featured: true,
    bestFor: 'Corporate LAN, Multi-Floor Offices, CCTV Network Backbones',
    createdAt: '2026-02-15'
  },
  {
    id: 'prod-net-2',
    name: 'Ubiquiti UniFi 6 Long-Range Wi-Fi 6 Access Point (U6-LR)',
    brand: 'Ubiquiti',
    model: 'U6-LR',
    category: 'Networking',
    subcategory: 'Access Point',
    sku: 'SAT-NET-UBNT-U6LR',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Enterprise high-performance ceiling-mounted Wi-Fi 6 access point delivering up to 3.0 Gbps aggregate throughput across 300+ connected clients.',
    price: 18900,
    isPriceOnRequest: false,
    warranty: '1 Year Ubiquiti Brand Warranty',
    availability: 'In Stock',
    specifications: {
      'Wi-Fi Standard': 'Wi-Fi 6 (802.11ax) 4x4 MU-MIMO on 5GHz + 4x4 on 2.4GHz',
      'Throughput': '2.4 Gbps (5GHz) + 600 Mbps (2.4GHz)',
      'Coverage': '185 m² (2,000 ft²) with enhanced antenna pattern',
      'Power': '802.3at PoE+ powered',
      'Management': 'UniFi Network Application for seamless roaming & guest portals'
    },
    featured: true,
    bestFor: 'Colleges, Auditoriums, Hotels, Open Plan Corporate Offices',
    createdAt: '2026-02-18'
  }
];

export const initialServices: ServiceItem[] = [
  {
    id: 'srv-comp-rep',
    title: 'Computer & Laptop Repair',
    category: 'Hardware Repair',
    iconName: 'Laptop',
    serviceType: 'Laptop Repair',
    shortDescription: 'Complete hardware diagnosis, OS installation, motherboard chip-level repair, display replacement, and SSD/RAM performance upgrades.',
    fullDescription: 'SA Trade provides certified doorstep and lab repair for all brands of desktops, laptops, and all-in-one PCs. From blue screen errors and slow boot speeds to broken hinges, liquid damage, battery replacement, and motherboard soldering, our certified technicians ensure transparent diagnostic reports with genuine replacement parts.',
    features: [
      'Chip-level motherboard & IC repair',
      'Broken screen & hinge replacement',
      'OS installation (Windows / Linux) & data recovery',
      'SSD & RAM speed booster upgrades',
      'Cooling fan cleaning & thermal paste re-application',
      'Power supply & charging port fixes'
    ],
    turnaroundTime: '2 to 24 Hours (Same-day diagnostic)',
    pricingEstimate: 'Starting at ₹350 (Diagnostic free upon service approval)',
    popular: true
  },
  {
    id: 'srv-prt-rep',
    title: 'Printer Sales, Purchase & Repair',
    category: 'Printer Maintenance',
    iconName: 'Printer',
    serviceType: 'Printer Repair',
    shortDescription: 'Expert troubleshooting, laser toner cartridge servicing, printhead unclogging, paper jam fixes, logic card repair, and maintenance.',
    fullDescription: 'Keep your business printing without interruption. We service Canon, HP, Epson, and Brother laser and ink-tank printers. We also handle buyback of used office printers, scheduled toner refilling, roller replacement, gear assembly servicing, and LAN network printing setup.',
    features: [
      'Paper feed & pickup roller replacement',
      'Laser scanner unit & fuser assembly repair',
      'Inkjet / Ink Tank printhead recovery & cleaning',
      'Logic card / formatter board troubleshooting',
      'Network & Wi-Fi printer sharing setup',
      'Cartridge refill & genuine drum supply'
    ],
    turnaroundTime: 'Same-day or next-day turnaround',
    pricingEstimate: 'Starting at ₹400',
    popular: true
  },
  {
    id: 'srv-cctv-inst',
    title: 'CCTV Sales, Installation & AMC',
    category: 'Security Systems',
    iconName: 'Camera',
    serviceType: 'CCTV Installation',
    shortDescription: 'Complete CCTV planning, high-definition IP camera installation, DVR/NVR setup, storage optimization, remote phone monitoring & AMC.',
    fullDescription: 'Protect your assets, premises, staff, and inventory with professional surveillance solutions engineered by SA Trade. We perform comprehensive site surveys, design optimal blind-spot coverage, lay structured CAT6/optical cabling, configure motion detection alerts, and configure mobile app streaming on smartphones and monitoring control rooms.',
    features: [
      'Free on-site security assessment & survey',
      'IP / HD Analog cameras with Night Vision & Audio',
      'DVR/NVR configuration & cloud remote monitoring',
      'Conduit & trunking structured cable laying',
      'Smart perimeter tripwire & AI humanoid detection',
      'Quarterly lens cleaning & recording health audits'
    ],
    turnaroundTime: '1-3 Days depending on camera count',
    pricingEstimate: 'Custom quote based on site survey',
    popular: true
  },
  {
    id: 'srv-acc-inst',
    title: 'Access Control & Biometric Attendance',
    category: 'Access Systems',
    iconName: 'Fingerprint',
    serviceType: 'Access Control Installation',
    shortDescription: 'Installation and configuration of fingerprint, RFID, face recognition biometric devices, electromagnetic door locks, and payroll sync software.',
    fullDescription: 'Eliminate unauthorized entry and automate staff attendance tracking. We supply, install, and support standalone and networked biometric terminals with electromagnetic (EM) locks, push-to-exit buttons, emergency break-glass triggers, and centralized attendance management software compatible with HR payroll systems.',
    features: [
      'Facial recognition, Fingerprint & RFID card terminals',
      'Heavy-duty 600lbs / 1200lbs electromagnetic locks',
      'Glass door, wooden door & metal gate bracket fitting',
      'Centralized multi-branch attendance software setup',
      'Shift management, late-in/early-out reports & payroll export',
      'Emergency fire alarm auto-unlock integration'
    ],
    turnaroundTime: '1-2 Days for full installation',
    pricingEstimate: 'Starting from ₹7,500 (Complete single door kit)',
    popular: true
  },
  {
    id: 'srv-net-supp',
    title: 'Networking Equipment & IT Support',
    category: 'Infrastructure',
    iconName: 'Network',
    serviceType: 'Networking & IT Support',
    shortDescription: 'Structured LAN cabling, server rack setup, patch panels, Gigabit switches, enterprise Wi-Fi mesh, firewalls, and office networking.',
    fullDescription: 'A rock-solid IT network is the backbone of every growing enterprise. SA Trade engineers build, optimize, and troubleshoot local area networks (LAN), fiber optic backbones, multi-AP wireless networks with guest captive portals, VPN site-to-site bridges, and structured server rack patching for modern offices and educational campuses.',
    features: [
      'Cat6 / Cat6A structured copper cabling & I/O termination',
      'Server rack dressing, cable managers & patch panel numbering',
      'Managed Switch VLAN segmentation & bandwidth QoS',
      'Multi-SSID seamless enterprise Wi-Fi roaming',
      'Router, firewall & broadband failover redundancy',
      'Network latency, packet drop & bottleneck diagnosis'
    ],
    turnaroundTime: 'Flexible project milestones',
    pricingEstimate: 'Per-node or turnkey project pricing',
    popular: false
  },
  {
    id: 'srv-amc-maint',
    title: 'Annual Maintenance Contract (AMC)',
    category: 'Corporate Support',
    iconName: 'ShieldCheck',
    serviceType: 'Annual Maintenance Contract',
    shortDescription: 'Preventive maintenance, unlimited breakdown calls, priority SLAs, antivirus management, and regular hardware audits for businesses.',
    fullDescription: 'Say goodbye to unexpected downtime and high emergency repair bills. SA Trade’s Comprehensive and Non-Comprehensive Annual Maintenance Contracts (AMC) guarantee periodic preventive checkups, immediate technical emergency dispatch, workstation health tuning, security updates, and guaranteed spare parts backup for offices, colleges, and clinics.',
    features: [
      'Scheduled monthly/quarterly preventive maintenance visits',
      'Guaranteed 2 to 4 hour emergency response SLA',
      'Free loaner equipment during major hardware repairs',
      'Quarterly system cleaning, de-dusting & thermal checks',
      'OS patch updates, antivirus definition maintenance & backup verification',
      'Dedicated account manager & transparent ticketing logs'
    ],
    turnaroundTime: 'Immediate priority support under SLA',
    pricingEstimate: 'Tailored per-workstation / per-device annual plan',
    popular: true
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '32-Camera 4K Surveillance & Control Room',
    client: 'Apex Logistics Hub & Central Warehouse',
    location: 'Industrial Corridor, Sector 18',
    category: 'CCTV',
    description: 'Designed and deployed an end-to-end IP surveillance architecture across a 50,000 sq ft logistics depot, featuring 24/7 ColorVu cameras, perimeter AI tripwires, dual 16-channel NVRs, and a 4-screen live monitoring station.',
    equipmentUsed: ['Hikvision 4MP ColorVu Bullet Cameras (24x)', 'Hikvision 4MP PTZ 25x Zoom Cameras (4x)', 'Hikvision 32CH 4K NVR', 'Western Digital Purple 8TB HDDs (4x)', '24-Port Gigabit PoE Switches (2x)', '55-inch Commercial Display Monitors (4x)'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    completionDate: 'January 2026',
    rating: 5
  },
  {
    id: 'proj-2',
    title: 'Multi-Door Biometric Access & Central Attendance',
    client: 'FinTech Capital Corporate Headquarters',
    location: 'Tech Park, Tower B (3 Floors)',
    category: 'Access Control',
    description: 'Implemented visible-light touchless facial recognition terminals across 14 access points including executive suites, server vault, and employee entry turnstiles, fully synchronized with cloud HR payroll software.',
    equipmentUsed: ['ZKTeco SpeedFace-V5L Terminals (14x)', '600lbs Heavy Duty Magnetic Locks (14x)', 'Backup Power Stations with Fire Interface (4x)', 'ZKBio CVAccess Central Software Server'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    completionDate: 'December 2025',
    rating: 5
  },
  {
    id: 'proj-3',
    title: '60-Seat Modern Computer Lab & Gigabit Network',
    client: 'St. Xavier International College of Engineering',
    location: 'University Campus, Block D',
    category: 'Computer Lab',
    description: 'Supplied and commissioned 60 Dell OptiPlex business desktop systems, Cat6 structured cabling, 9U network rack, and master teacher broadcasting console for the new AI & Data Science computing laboratory.',
    equipmentUsed: ['Dell OptiPlex i5 16GB RAM Desktops (60x)', 'Dell 24" IPS Anti-Glare Monitors (60x)', 'D-Link Cat6 24-Port Patch Panels (3x)', 'TP-Link Omada 24-Port Managed Switches (3x)', 'APC 6kVA Online UPS with Battery Bank'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    completionDate: 'November 2025',
    rating: 5
  },
  {
    id: 'proj-4',
    title: 'High-Density Enterprise Wi-Fi 6 & Structured LAN',
    client: 'Nexus Co-Working & Business Incubator',
    location: 'Commercial Hub, Level 4 & 5',
    category: 'Networking',
    description: 'Upgraded network backbone to support over 400 simultaneous mobile and laptop users with Ubiquiti UniFi 6 Long-Range Access Points, dual ISP load-balancing firewall, and segmented guest VLANs.',
    equipmentUsed: ['Ubiquiti U6-LR Wi-Fi 6 Access Points (12x)', 'Ubiquiti Dream Machine Pro SE Gateway', 'UniFi 48-Port PoE+ Pro Managed Switch', 'Schneider 15U Server Rack with PDU'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    completionDate: 'October 2025',
    rating: 5
  },
  {
    id: 'proj-5',
    title: 'Complete Corporate IT Infrastructure & AMC Setup',
    client: 'Quantum Legal & Advisory Services',
    location: 'Metropolitan Law Chambers',
    category: 'Office IT Setup',
    description: 'Turnkey setup of 25 executive laptops, multifunction network laser printers, unified storage NAS, biometric entry, and ongoing comprehensive Annual Maintenance Contract (AMC).',
    equipmentUsed: ['Lenovo ThinkPad E14 Laptops (25x)', 'Canon imageCLASS MF244dw Network Printers (4x)', 'Synology 4-Bay NAS for centralized legal backups', 'ZKTeco Fingerprint Access Terminal', 'Annual Support AMC Agreement'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    completionDate: 'September 2025',
    rating: 5
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'How to Choose the Right Laptop for Business & Office Use in 2026',
    slug: 'how-to-choose-the-right-business-laptop',
    category: 'Buying Guides',
    author: 'SA Trade Tech Team',
    date: 'February 15, 2026',
    readTime: '6 min read',
    summary: 'A practical, jargon-free guide on evaluating processor tiers, RAM requirements, SSD speeds, keyboard ergonomics, and business warranties for office workstations.',
    content: `When purchasing laptops for business staff or personal corporate workflows, picking consumer models frequently leads to premature wear, inadequate port connectivity, and warranty delays. 

Key Factors to Evaluate:
1. Business-Grade Durability vs. Consumer Grade: Business laptops (like Lenovo ThinkPad, Dell Latitude, HP ProBook) feature reinforced chassis, spill-resistant keyboards, and military-standard drop testing.
2. RAM Capacity: In 2026, 16GB DDR5 is the golden standard. 8GB will throttle under heavy browser tabs, ERP systems, and video conference calls.
3. Storage Technology: Never compromise on storage. Ensure you are getting an M.2 NVMe PCIe Gen4 SSD for instantaneous boot times.
4. Warranty & Onsite SLA: Opt for Next Business Day Onsite ProSupport so your team doesn't lose days waiting at service centers.

Contact SA Trade for customized corporate procurement discounts on leading laptop models.`,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    tags: ['Laptops', 'Corporate IT', 'Hardware Guide', 'Dell', 'Lenovo']
  },
  {
    id: 'post-2',
    title: 'SSD vs HDD: Why Upgrading Storage is the Fastest Way to Revitalize Slow PCs',
    slug: 'ssd-vs-hdd-upgrade-guide',
    category: 'Hardware Maintenance',
    author: 'Senior Hardware Specialist',
    date: 'January 28, 2026',
    readTime: '5 min read',
    summary: 'Discover how switching an old mechanical hard drive to a modern solid-state drive delivers up to 10x faster boot times and eliminates system freezing.',
    content: `Many offices consider discarding 3-4 year old computers because they feel slow and unresponsive. In over 80% of cases, the processor is still completely capable—the bottleneck is the mechanical Hard Disk Drive (HDD).

Why SSDs Transform Performance:
- Boot Speed: An HDD takes 60 to 120 seconds to boot Windows. An NVMe SSD boots in under 12 seconds.
- No Moving Parts: SSDs are immune to mechanical vibration and shock, drastically decreasing data loss risk.
- Application Responsiveness: Heavy software like Tally, Photoshop, AutoCAD, and Microsoft Excel open instantaneously.
- Cost Efficiency: Upgrading to a 512GB or 1TB SSD costs a fraction of buying a new machine.

At SA Trade, we offer same-day SSD cloning and OS migration without losing a single file or setting.`,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    tags: ['SSD', 'HDD', 'PC Repair', 'Performance Upgrade']
  },
  {
    id: 'post-3',
    title: 'IP Camera vs. Analog CCTV: Which Security System Is Right For You?',
    slug: 'ip-camera-vs-analog-cctv-guide',
    category: 'Security Systems',
    author: 'Surveillance Engineer',
    date: 'January 14, 2026',
    readTime: '7 min read',
    summary: 'Compare image clarity, cabling simplicity, AI smart detection, remote access features, and long-term scalability between IP and Analog cameras.',
    content: `Choosing the right CCTV architecture is critical for long-term security. Here is how modern IP systems stack up against HD Analog:

1. Resolution & Optical Clarity:
- HD Analog maxes out around 2MP-5MP with visible signal degradation over long wire runs.
- IP Cameras deliver crystal-clear 4MP, 4K UHD, and 360-degree panoramic coverage with zero signal attenuation.

2. Cabling & Power:
- IP cameras utilize single-cable Power over Ethernet (PoE), carrying video, power, and audio across standard Cat6 cables.
- Analog cameras require separate coaxial cables and dedicated 12V power supply bricks.

3. Smart AI Capabilities:
- IP systems feature built-in smart analytics: Human & Vehicle filtering, face capture, perimeter line-crossing alarms, and license plate recognition.

SA Trade conducts complimentary on-site surveys to design the most cost-effective security layout for your premises.`,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    tags: ['CCTV', 'IP Camera', 'Security', 'Hikvision', 'Dahua']
  },
  {
    id: 'post-4',
    title: 'Essential Printer Maintenance Tips to Prevent Paper Jams & Faded Prints',
    slug: 'essential-printer-maintenance-tips',
    category: 'Printer Maintenance',
    author: 'Printer Service Lead',
    date: 'December 20, 2025',
    readTime: '4 min read',
    summary: 'Simple daily habits and preventive care steps to double the lifespan of your office laser and ink-tank printers.',
    content: `Printer downtime is one of the most frustrating bottlenecks in an office. Following these basic maintenance rules will save you hundreds in emergency repairs:

1. Use Proper Paper Weight (75-80 GSM): Cheap, damp, or dusty paper causes pickup rollers to slip and fusers to jam.
2. Avoid Low-Quality Refill Powders: Substandard toner powder leaks into optical sensors and damages the developer cylinder.
3. Clean Dust from Paper Trays: Airborne dust settles inside the printer and coats the paper pickup rubber rollers.
4. Regular Head Cleaning for Ink Tank Printers: Print at least one color test page each week to prevent dry ink crystallization in the printhead nozzles.

Need printer repair or scheduled cartridge service? SA Trade’s mobile printer engineers are just a call away!`,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    tags: ['Printers', 'Office Tips', 'Maintenance', 'Canon', 'Epson']
  },
  {
    id: 'post-5',
    title: 'How Access Control & Biometric Attendance Systems Streamline Office Security',
    slug: 'how-access-control-systems-work',
    category: 'Access Control',
    author: 'Access Systems Architect',
    date: 'December 05, 2025',
    readTime: '5 min read',
    summary: 'A deep dive into biometric algorithms, electromagnetic locks, time-attendance cloud integrations, and visitor security protocol.',
    content: `Traditional physical keys are easily duplicated, misplaced, or forgotten. Modern access control provides granular security and real-time audit trails for every door.

Core Components of an Access System:
- Authentication Terminal: Facial recognition, fingerprint sensor, or RFID proximity reader.
- Locking Mechanism: 600lbs/1200lbs Fail-Safe Electromagnetic (EM) lock that holds doors shut until authorized.
- Push-to-Exit Sensor: Mechanical or infrared wave-to-open switch for effortless exit from inside.
- Power Supply with Battery Backup: Ensures uninterrupted door security during sudden power failures.
- HR Software Sync: Automatically tallies employee work hours, overtime, and leaves with zero manual data entry.

Talk to our team at SA Trade to install a secure access control system at your facility.`,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Access Control', 'Biometrics', 'ZKTeco', 'Office Security']
  }
];

export const initialBrands: BrandItem[] = [
  { id: 'b-1', name: 'Dell', category: 'Desktops, Laptops & Servers', logo: 'DELL' },
  { id: 'b-2', name: 'HP', category: 'Laptops, Desktops & Printers', logo: 'HP' },
  { id: 'b-3', name: 'Lenovo', category: 'ThinkPad, Desktops & Workstations', logo: 'Lenovo' },
  { id: 'b-4', name: 'ASUS', category: 'Laptops, Motherboards & Mini PCs', logo: 'ASUS' },
  { id: 'b-5', name: 'Acer', category: 'Laptops & Commercial Desktops', logo: 'Acer' },
  { id: 'b-6', name: 'Canon', category: 'Laser & Multifunction Printers', logo: 'Canon' },
  { id: 'b-7', name: 'Epson', category: 'EcoTank Ink Tank Printers', logo: 'Epson' },
  { id: 'b-8', name: 'Brother', category: 'Laser Printers & Scanners', logo: 'Brother' },
  { id: 'b-9', name: 'Hikvision', category: 'IP Cameras, NVR & CCTV Systems', logo: 'Hikvision' },
  { id: 'b-10', name: 'Dahua', category: 'Smart AI Surveillance & Cameras', logo: 'Dahua' },
  { id: 'b-11', name: 'TP-Link', category: 'Managed Switches, Routers & Omada SDN', logo: 'TP-Link' },
  { id: 'b-12', name: 'Ubiquiti', category: 'UniFi Enterprise Wi-Fi & Gateways', logo: 'Ubiquiti' },
  { id: 'b-13', name: 'ZKTeco', category: 'Biometric Access Control & Attendance', logo: 'ZKTeco' },
  { id: 'b-14', name: 'Crucial', category: 'SSDs & High Performance RAM', logo: 'Crucial' }
];

export const initialEnquiries: Enquiry[] = [
  {
    id: 'enq-101',
    type: 'Quote Request',
    customerName: 'Rajesh Sharma',
    organization: 'Apex Legal Advocates',
    phone: '+91 98234 56789',
    email: 'rajesh@apexlegal.in',
    productName: 'Dell OptiPlex 7010 Micro Form Factor',
    productId: 'prod-dt-1',
    quantity: 5,
    message: 'Need a quotation for 5 units with delivery to Sector 4 and 3-year warranty.',
    status: 'New',
    createdAt: '2026-08-25T14:30:00Z'
  },
  {
    id: 'enq-102',
    type: 'Service Request',
    customerName: 'Meera Deshmukh',
    organization: 'Sunshine Public School',
    phone: '+91 98451 23456',
    email: 'principal@sunshineschool.edu',
    serviceType: 'Printer Repair',
    equipmentType: 'Canon MF244dw Laser Printer',
    brand: 'Canon',
    model: 'imageCLASS MF244dw',
    problemDescription: 'Frequent paper jams in tray 1 and squeaking sound during duplex printing.',
    preferredDate: '2026-08-28',
    location: 'School Admin Office, Main Block',
    message: 'Urgent repair required as exam paper printing is scheduled next week.',
    status: 'In Progress',
    createdAt: '2026-08-26T09:15:00Z'
  },
  {
    id: 'enq-103',
    type: 'Buyback / Purchase',
    customerName: 'Vikram Mehta',
    organization: 'Finserve Consulting Ltd',
    phone: '+91 98712 34567',
    email: 'v.mehta@finserve.co.in',
    equipmentType: 'Used Laptops & Desktops',
    brand: 'Dell & HP',
    model: 'Core i5 8th Gen Systems',
    condition: 'Good',
    itemQuantity: 18,
    expectedPrice: '₹1,80,000 for full lot',
    message: 'Office hardware refresh. 18 working Core i5 laptops with chargers ready for immediate pickup.',
    status: 'Quoted',
    createdAt: '2026-08-24T16:45:00Z'
  }
];
