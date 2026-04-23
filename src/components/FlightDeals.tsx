import React, { useState } from 'react';
import { Plane, CheckCircle2 } from 'lucide-react';
import { FlightDeal } from '../types';

interface FlightDealsProps {
  deals: FlightDeal[];
}

const FlightDeals: React.FC<FlightDealsProps> = ({ deals }) => {
  const [selectedDeal, setSelectedDeal] = useState<FlightDeal | null>(null);

  return (
    <section id="offers" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">أفضل العروض والوجهات</h2>
        <p className="text-white/50 text-lg">استكشف العالم بأسعار تنافسية مع نخبة طيران الوطن العربي</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div 
            key={deal.id} 
            onClick={() => setSelectedDeal(deal)}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer shadow-lg shadow-black/20 backdrop-blur-md"
          >
            <div className="p-6">
              {/* Airline Info */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-indigo-300 bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {deal.airline.name}
                </span>
                <span className="text-xs font-semibold text-white/40 flex items-center gap-1 bg-black/20 px-2 py-1 rounded-md">
                  {deal.isDirect ? 'رحلة مباشرة' : 'رحلة ترانزيت'}
                </span>
              </div>

              {/* Route */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-center w-1/3">
                  <p className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">{deal.from}</p>
                </div>
                
                <div className="flex-1 flex flex-col items-center px-2 relative">
                  <div className="w-full border-t-2 border-dashed border-white/20 absolute top-1/2 -translate-y-1/2"></div>
                  <div className="bg-slate-900 border border-white/10 p-1.5 rounded-full relative z-10 shadow-md">
                    <Plane className="text-indigo-400 w-5 h-5 rotate-180 transform -scale-x-100" />
                  </div>
                </div>

                <div className="text-center w-1/3">
                  <p className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">{deal.to}</p>
                </div>
              </div>

              {/* Price and Action */}
              <div className="pt-4 border-t border-white/10 flex items-end justify-between relative z-10">
                <div>
                  <p className="text-xs font-medium text-white/40 mb-1">ابتداءً من</p>
                  <p className="text-2xl font-black text-indigo-400">
                    {deal.price} <span className="text-sm font-medium text-indigo-300">{deal.currency}</span>
                  </p>
                </div>
                <button 
                  className="bg-white/10 border border-white/20 group-hover:bg-indigo-500/40 group-hover:border-indigo-400 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm pointer-events-none"
                >
                  احجز الآن
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedDeal && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm opacity-100 transition-opacity"
          onClick={() => setSelectedDeal(null)}
        >
          <div 
            className="bg-slate-900 border border-indigo-500/30 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center space-y-4 transform scale-100 transition-all font-sans" 
            onClick={e => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">طلب الحجز مسجل!</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              لقد قمت باختيار الرحلة المتجهة إلى <span className="text-indigo-300 font-bold">{selectedDeal.to}</span> على متن <span className="text-indigo-300 font-bold">{selectedDeal.airline.name}</span>.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-6 mb-6">
              <p className="text-xs text-amber-200/80 leading-relaxed font-semibold">تنويه: هذا الموقع هو مشروع تجريبي (Prototype) لعرض المهارات، ولا يتم فيه أي حجز حقيقي.</p>
            </div>
            <button 
              onClick={() => setSelectedDeal(null)}
              className="mt-6 w-full py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25"
            >
              إغلاق النافذة
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FlightDeals;
