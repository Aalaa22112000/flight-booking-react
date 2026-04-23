import React from 'react';
import { PlaneTakeoff } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto px-4 md:px-10 py-8 bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
               <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                 <PlaneTakeoff size={18} />
               </div>
               <span className="font-bold text-lg">أرابي فلاي <span className="text-indigo-400 font-light">ArabiFly</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-white/50">
              بوابتك الموثوقة لاستكشاف العالم عبر أفضل شركات الطيران في الشرق الأوسط وشمال أفريقيا.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">روابط سريعة</h3>
            <ul className="space-y-3 text-sm flex flex-col text-white/60">
              <a href="#" className="hover:text-white transition-colors w-fit">من نحن</a>
              <a href="#" className="hover:text-white transition-colors w-fit">شركائنا</a>
              <a href="#" className="hover:text-white transition-colors w-fit">اتصل بنا</a>
              <a href="#" className="hover:text-white transition-colors w-fit">الأسئلة الشائعة</a>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">أشهر الوجهات</h3>
             <ul className="space-y-3 text-sm flex flex-col text-white/60">
              <a href="#" className="hover:text-white transition-colors w-fit">الرياض إلى دبي</a>
              <a href="#" className="hover:text-white transition-colors w-fit">القاهرة إلى جدة</a>
              <a href="#" className="hover:text-white transition-colors w-fit">الدوحة إلى لندن</a>
              <a href="#" className="hover:text-white transition-colors w-fit">الكويت إلى اسطنبول</a>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">النشرة البريدية</h3>
            <p className="text-sm text-white/50 mb-4">احصل على أحدث عروض السفر مباشرة في بريدك.</p>
            <div className="flex items-center flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full bg-slate-900/50 border border-white/10 text-white px-4 py-2 text-sm rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder-white/30" 
              />
              <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-indigo-500/20">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-medium">
          <div className="flex gap-4 sm:gap-6 mb-4 md:mb-0">
            <span>حقوق النشر © {new Date().getFullYear()} أرابي فلاي</span>
            <span className="cursor-pointer hover:text-white transition-colors">سياسة الخصوصية</span>
            <span className="cursor-pointer hover:text-white transition-colors">عقد الاستخدام</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            <span>جميع الأنظمة تعمل بكفاءة | تحديث الأسعار فوري</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
