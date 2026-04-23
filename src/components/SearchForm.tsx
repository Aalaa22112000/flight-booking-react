import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Users, Search, ArrowLeftRight, Plane } from 'lucide-react';
import { SearchState, TripType, CabinClass } from '../types';
import { airports } from '../mockData';

const AutocompleteInput = ({ 
  label, 
  value, 
  onChange, 
  placeholder 
}: { 
  label: string; 
  value: string; 
  onChange: (val: string) => void; 
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredAirports = airports.filter(a => 
    a.city.includes(query) || 
    a.country.includes(query) || 
    a.code.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={`flex-1 w-full space-y-2 relative ${isOpen ? 'z-[100]' : 'z-10'}`} ref={wrapperRef}>
      <label className="text-xs font-bold text-indigo-300 mr-2 uppercase">{label}</label>
      <div className="relative border border-white/10 rounded-xl focus-within:ring-2 focus-within:ring-indigo-500/50 bg-slate-900/80 backdrop-blur-md shadow-inner group transition-all">
        <div className="absolute top-1/2 -translate-y-1/2 right-3 text-white/30 z-10 pointer-events-none">
          <MapPin size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            onChange(e.target.value);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full py-3 pr-11 pl-4 outline-none text-white placeholder-white/30 bg-transparent relative z-10 cursor-text"
          required
        />
        
        {isOpen && (
          <div className="absolute top-[calc(100%+8px)] right-0 w-full min-w-[260px] max-h-64 overflow-y-auto bg-slate-900/95 backdrop-blur-2xl border border-indigo-500/30 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] z-[200] p-2 flex flex-col gap-1 mx-auto">
            {filteredAirports.length > 0 ? (
              filteredAirports.map(airport => (
                <div 
                  key={airport.id}
                  onClick={(e) => {
                    e.preventDefault();
                    const val = `${airport.city} (${airport.code})`;
                    setQuery(val);
                    onChange(val);
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-between p-3 hover:bg-indigo-500/20 rounded-lg cursor-pointer transition-all group/item border border-transparent hover:border-indigo-500/30 z-50 pointer-events-auto"
                >
                  <div className="flex items-center gap-3">
                    <Plane size={16} className="text-white/30 group-hover/item:text-indigo-400 rotate-180 transform -scale-x-100 transition-colors" />
                    <div>
                      <p className="text-sm font-bold text-white">{airport.city}</p>
                      <p className="text-xs text-white/50">{airport.country}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded shadow-inner">
                    {airport.code}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-white/50 font-medium">
                لم يتم العثور على نتائج
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const SearchForm = () => {
  const [searchData, setSearchData] = useState<SearchState>({
    from: '',
    to: '',
    departure: '',
    returnDate: '',
    passengers: 1,
    tripType: 'round',
    cabinClass: 'economy'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTripTypeChange = (type: TripType) => {
    setSearchData(prev => ({ ...prev, tripType: type }));
  };

  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if(searchData.from && searchData.to) {
      setShowModal(true);
    } else {
      alert('الرجاء اختيار وجهة المغادرة والوصول');
    }
  };

  return (
    <>
      <div id="search-form" className="bg-white/10 border border-white/20 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-inner w-full max-w-6xl mx-auto -mt-16 sm:-mt-24 relative z-[60]">
        <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
          <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-indigo-300">
            <input 
              type="radio" 
              checked={searchData.tripType === 'round'}
              onChange={() => handleTripTypeChange('round')}
              className="w-4 h-4 text-indigo-500 focus:ring-indigo-500 bg-slate-900/50 border-white/10"
            />
            ذهاب وعودة
          </label>
          <label className="flex items-center gap-2 cursor-pointer font-bold text-sm text-white/50 hover:text-indigo-200 transition-colors">
            <input 
              type="radio" 
              checked={searchData.tripType === 'one-way'}
              onChange={() => handleTripTypeChange('one-way')}
              className="w-4 h-4 text-indigo-500 focus:ring-indigo-500 bg-slate-900/50 border-white/10"
            />
            ذهاب فقط
          </label>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col lg:flex-row flex-wrap gap-6 items-end">
          {/* From */}
          <AutocompleteInput 
            label="من أين؟" 
            value={searchData.from} 
            onChange={(val) => setSearchData(prev => ({ ...prev, from: val }))} 
            placeholder="المدينة أو المطار" 
          />

          {/* Swap Button */}
          <div className="hidden lg:flex items-center justify-center z-10 w-8 -mx-3 mb-2">
            <div 
              onClick={() => {
                setSearchData(prev => ({
                  ...prev,
                  from: prev.to,
                  to: prev.from
                }));
              }}
              className="bg-white/10 border border-white/20 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/20 cursor-pointer transition-colors shadow-sm relative z-20"
            >
              <ArrowLeftRight size={14} />
            </div>
          </div>

          {/* To */}
          <AutocompleteInput 
            label="إلى أين؟" 
            value={searchData.to} 
            onChange={(val) => setSearchData(prev => ({ ...prev, to: val }))} 
            placeholder="المدينة أو المطار" 
          />

          {/* Dates */}
          <div className="w-full lg:w-48 space-y-2 flex-shrink-0">
             <label className="text-xs font-bold text-indigo-300 mr-2 uppercase">المغادرة</label>
             <div className="relative border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/50 bg-slate-900/50 backdrop-blur-sm">
               <input
                type="date"
                name="departure"
                value={searchData.departure}
                onChange={handleInputChange}
                className="w-full py-3 px-4 outline-none text-white placeholder-white/30 bg-transparent [color-scheme:dark]"
                required
              />
            </div>
          </div>

          {searchData.tripType === 'round' && (
             <div className="w-full lg:w-48 space-y-2 flex-shrink-0">
               <label className="text-xs font-bold text-indigo-300 mr-2 uppercase">العودة</label>
               <div className="relative border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/50 bg-slate-900/50 backdrop-blur-sm">
                <input
                  type="date"
                  name="returnDate"
                  value={searchData.returnDate}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 outline-none text-white placeholder-white/30 bg-transparent [color-scheme:dark]"
                  required
                />
              </div>
            </div>
          )}

          {/* Passengers & Class */}
          <div className="w-full lg:w-48 space-y-2 flex-shrink-0">
            <label className="text-xs font-bold text-indigo-300 mr-2 uppercase">المسافرون</label>
            <div className="relative border border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/50 bg-slate-900/50 backdrop-blur-sm flex">
              <select 
                name="passengers" 
                value={searchData.passengers}
                onChange={handleInputChange}
                className="w-1/2 py-3 px-2 outline-none text-white bg-transparent flex-1 appearance-none cursor-pointer text-center border-l border-white/10"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num} className="bg-slate-800 text-white">{num} ركاب</option>
                ))}
              </select>
              
              <select 
                name="cabinClass" 
                value={searchData.cabinClass}
                onChange={handleInputChange}
                className="w-1/2 py-3 px-2 outline-none text-white bg-transparent flex-1 appearance-none cursor-pointer text-center text-sm"
              >
                <option value="economy" className="bg-slate-800 text-white">السياحية</option>
                <option value="business" className="bg-slate-800 text-white">الأعمال</option>
                <option value="first" className="bg-slate-800 text-white">الأولى</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="w-full lg:w-auto flex-shrink-0 z-10">
             <button 
               type="submit" 
               className="w-full lg:w-auto h-[50px] px-8 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer relative"
             >
               <Search size={20} />
               <span>بحث رحلات</span>
             </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-slate-900 border border-indigo-500/30 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center space-y-4" 
            onClick={e => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">البحث قيد المعالجة!</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-2">
              بحث عن رحلات من <span className="text-indigo-300 font-bold">{searchData.from}</span> إلى <span className="text-indigo-300 font-bold">{searchData.to}</span>.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-6 mb-6">
              <p className="text-xs text-amber-200/80 leading-relaxed font-semibold">تنويه: هذا الموقع هو مشروع تجريبي (Prototype) لعرض المهارات، ولا تتصل هذه النسخة بقاعدة بيانات الطيران الحقيقية.</p>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="mt-6 w-full py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25"
            >
              استمرار
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForm;
