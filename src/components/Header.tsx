import React, { useState } from 'react';
import { PlaneTakeoff, User, Menu, Lock } from 'lucide-react';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10 bg-white/5 backdrop-blur-md">
        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <PlaneTakeoff size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white hidden sm:block">
            أرابي فلاي <span className="text-indigo-400 font-light">ArabiFly</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="text-white border-b-2 border-indigo-500 pb-1">الرئيسية</a>
          <a href="#offers" className="text-white/60 hover:text-white transition-colors">العروض</a>
          <a href="#airlines" className="text-white/60 hover:text-white transition-colors">شركات الطيران</a>
          <a href="#support" className="text-white/60 hover:text-white transition-colors">المساعدة</a>
        </nav>

        {/* Auth & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowLoginModal(true)}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-colors cursor-pointer z-10 relative"
          >
            <User size={16} />
            تسجيل الدخول
          </button>
          <button 
            onClick={() => {
              document.getElementById('search-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold bg-indigo-500 hover:bg-indigo-400 text-white transition-colors shadow-lg shadow-indigo-500/20 cursor-pointer z-10 relative"
          >
            ابدأ حجزك
          </button>
          <button className="md:hidden text-white/70 hover:text-white cursor-pointer z-10 relative">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Login Warning Modal */}
      {showLoginModal && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setShowLoginModal(false)}
        >
          <div 
            className="bg-slate-900 border border-indigo-500/30 p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center space-y-4" 
            onClick={e => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <Lock size={32} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">صفحة غير متوفرة</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              بوابة تسجيل الدخول غير متوفرة في هذه النسخة التجريبية الحالية للمشروع.
            </p>
            <button 
              onClick={() => setShowLoginModal(false)}
              className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all border border-white/10"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
