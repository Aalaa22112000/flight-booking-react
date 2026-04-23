import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import FlightDeals from './components/FlightDeals';
import Footer from './components/Footer';
import { popularDeals, airlines } from './mockData';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-indigo-500/30">
      {/* Background Blurred Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen flex-1 bg-white/5 backdrop-blur-xl border border-white/10 lg:rounded-3xl lg:m-4 shadow-2xl shadow-black/50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-16 pb-32">
          <div className="absolute inset-0 overflow-hidden rounded-t-3xl">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
              alt="طائرة تحلق في السماء" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              وجهتك القادمة في <span className="text-indigo-400 font-light">الوطن العربي</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium mb-8">
              احجز تذكرتك بكل سهولة مع أفضل شركات الطيران الإقليمية والعالمية بأسعار تنافسية.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center">
          <SearchForm />
          
          <div className="w-full mt-12">
            <FlightDeals deals={popularDeals} />
          </div>

          {/* Partners Section */}
          <section id="airlines" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-sm font-bold text-white/40 uppercase tracking-widest mr-2 mb-6 text-center">
              شركاؤنا في النجاح
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-4 px-4 sm:px-12 xl:px-4">
              {airlines.map(airline => (
                <div key={airline.id} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all group backdrop-blur-sm cursor-pointer min-h-[120px]">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">
                    ✈️
                  </div>
                  <span className="text-xs font-bold text-white/70 text-center">{airline.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
