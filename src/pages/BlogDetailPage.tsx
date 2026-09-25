import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  FileText, 
  CheckCircle2, 
  Wrench,
  ChevronRight
} from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { selectedBlogSlug, blogPosts, setCurrentPage, openQuoteModal, showToast } = useApp();

  const post = blogPosts.find(p => p.slug === selectedBlogSlug) || blogPosts[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link Copied', 'Article link copied to clipboard.');
    } else {
      showToast('Article Shared', 'Ready to share article.');
    }
  };

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <p className="text-slate-600">Post not found.</p>
        <button
          onClick={() => setCurrentPage('blog')}
          className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="w-full text-slate-800 min-h-screen py-10 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('blog')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Main Article Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600">
                {post.category}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                {post.date}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">
                  SA
                </div>
                <span>By <strong className="text-slate-800">{post.author}</strong> (SA Trade Engineering Team)</span>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-blue-600 font-bold hover:underline"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Guide</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Body Content */}
          <div className="prose max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
            <p className="font-semibold text-slate-900 text-sm sm:text-base">
              {post.summary}
            </p>
            <div className="whitespace-pre-line leading-relaxed text-slate-700">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400 mr-1" />
            {post.tags.map((t, idx) => (
              <span key={idx} className="text-xs bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">
                #{t}
              </span>
            ))}
          </div>

          {/* Callout Box */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-base text-white">Need On-Site Support or Hardware Procurement?</h3>
              <p className="text-xs text-slate-200 mt-1">Our certified technicians are ready to assist your organization.</p>
            </div>
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs rounded-full shadow-md shrink-0 transition-all"
            >
              Get Free Consultation
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
