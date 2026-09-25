/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { QuoteModal } from './components/QuoteModal';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { ToastContainer } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { RequestServicePage } from './pages/RequestServicePage';
import { SalesPurchasePage } from './pages/SalesPurchasePage';
import { CCTVPage } from './pages/CCTVPage';
import { AccessControlPage } from './pages/AccessControlPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

const MainLayout: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'services':
        return <ServicesPage />;
      case 'request-service':
        return <RequestServicePage />;
      case 'sales-purchase':
        return <SalesPurchasePage />;
      case 'cctv':
        return <CCTVPage />;
      case 'access-control':
        return <AccessControlPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage />;
      case 'blog-detail':
        return <BlogDetailPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Softbenz Ambient Light Gradient Meshes */}
      <div className="fixed top-[-150px] left-[-100px] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] right-[-50px] w-[500px] h-[500px] bg-gradient-to-tl from-orange-400/10 via-amber-400/10 to-transparent rounded-full blur-[130px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/10 via-blue-400/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Top Main Navigation Header with Mega-Menu */}
      <Header />

      {/* Main Content View */}
      <main className="flex-1 relative z-10">
        {renderCurrentPage()}
      </main>

      {/* Corporate Technical Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (Call, WhatsApp, Service, Quote) */}
      <MobileBottomBar />

      {/* Global Interactive Modals */}
      <QuoteModal />
      <QuickViewModal />
      <SearchModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
