import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  ArrowRight, 
  ChevronRight, 
  X,
  FileText
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { blogPosts, setSelectedBlogSlug, setCurrentPage } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hardware Guide', 'Security & Surveillance', 'Printer Maintenance', 'Access Control', 'IT Maintenance'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const match = 
          post.title.toLowerCase().includes(q) ||
          post.summary.toLowerCase().includes(q) ||
          post.tags.some(t => t.toLowerCase().includes(q));
        if (!match) return false;
      }
      return true;
    });
  }, [blogPosts, selectedCategory, searchTerm]);

  const handleReadPost = (slug: string) => {
    setSelectedBlogSlug(slug);
    setCurrentPage('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block">
              Technical Knowledge Base & Insights
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Hardware Guides & Security Insights
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Practical technical articles, procurement guides, CCTV storage calculators, and maintenance tips written by SA Trade hardware engineers.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search articles & tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-10 pr-8 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm">No articles found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
              className="mt-3 text-xs font-bold text-blue-600 hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleReadPost(post.slug)}
                className="bg-white hover:bg-slate-50 rounded-3xl border border-slate-200/80 hover:border-blue-300 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-600" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-blue-600" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 mt-4">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
