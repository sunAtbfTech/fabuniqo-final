import React, { useState } from 'react';
import { Plus, ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';

const FabuniqoEcomSuite = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      
      {/* SECTION 1: THE SHOP THE LOOK HOTSPOT (Interactive) */}
      <section className="py-20 px-6 md:px-12 border-b border-zinc-100">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Image with Hotspots */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-sm bg-zinc-200 aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" 
                  alt="Full Look" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                
                {/* Hotspot 1: Jacket */}
                <button 
                  onMouseEnter={() => setActiveHotspot('jacket')}
                  onMouseLeave={() => setActiveHotspot(null)}
                  className="absolute top-[30%] left-[45%] w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white animate-pulse hover:scale-125 transition-all"
                >
                  <Plus size={16} />
                </button>

                {/* Hotspot 2: Bag */}
                <button 
                  onMouseEnter={() => setActiveHotspot('bag')}
                  onMouseLeave={() => setActiveHotspot(null)}
                  className="absolute bottom-[25%] right-[35%] w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white animate-pulse hover:scale-125 transition-all"
                >
                  <Plus size={16} />
                </button>

                {/* Hotspot Content Popover */}
                {activeHotspot && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-2xl rounded-sm w-48 animate-in fade-in zoom-in duration-300 pointer-events-none">
                    <p className="text-[10px] font-bold text-[rgb(209,167,67)] uppercase tracking-widest">Available Now</p>
                    <h4 className="text-xs font-bold uppercase mt-1">{activeHotspot === 'jacket' ? 'Wool Overcoat' : 'Leather Tote'}</h4>
                    <p className="text-sm text-zinc-500 mt-1">{activeHotspot === 'jacket' ? '$890.00' : '$1,200.00'}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Content for Hotspot Section */}
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-[10px] tracking-[0.5em] font-bold text-zinc-400 uppercase">01 // Shop The Look</span>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
                Curated <br /> <span className="italic font-serif">Ensembles</span>
              </h2>
              <p className="text-zinc-500 max-w-md leading-relaxed">
                Our stylists have curated the perfect combination of texture and silhouette. Click the markers to discover each individual piece.
              </p>
              <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group">
                Purchase Full Look <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: CRAFTSMANSHIP & CATEGORIES (The Horizontal Row) */}
      <section className="py-20 px-6 md:px-12 bg-[#0e0e0e] text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Heritage & Craftsmanship (Left) */}
            <div className="space-y-10">
              <span className="text-[10px] tracking-[0.5em] font-bold text-[rgb(209,167,67)] uppercase">02 // The Craft</span>
              <div className="aspect-video overflow-hidden bg-zinc-800">
                <img 
                   src="https://images.unsplash.com/photo-1558271821-65afca99171b?q=80&w=800&auto=format&fit=crop" 
                   className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000"
                   alt="Craft"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif italic font-light uppercase tracking-wide text-white">Ethically Sourced, <br /> Artistically Created</h3>
                <p className="text-zinc-400 text-sm max-w-sm leading-loose uppercase tracking-tighter">
                  Every thread is hand-selected from sustainable mills in Northern Italy, ensuring a lifetime of wear and luxury.
                </p>
              </div>
            </div>

            {/* Dynamic Category Slider (Right) */}
            <div className="space-y-10">
                <span className="text-[10px] tracking-[0.5em] font-bold text-zinc-500 uppercase">03 // Pathfinder</span>
                <div className="flex flex-col gap-4">
                    {['Womenswear', 'Menswear', 'Accessories', 'The Archive'].map((cat, i) => (
                        <div key={i} className="group flex justify-between items-center py-6 border-b border-white/10 cursor-pointer hover:px-4 transition-all duration-500">
                            <div className="flex items-center gap-6">
                                <span className="text-[rgb(209,167,67)] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                                <h4 className="text-2xl md:text-4xl font-light tracking-tighter group-hover:italic transition-all">{cat}</h4>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[rgb(209,167,67)] group-hover:border-[rgb(209,167,67)] group-hover:text-black transition-all">
                                <ArrowRight size={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4, 5, 6: TRUST & CONVERSION ROW */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
           
           {/* Cross Sell */}
           <div className="p-8 border border-zinc-100 rounded-sm hover:shadow-xl transition-shadow group">
              <span className="text-[9px] font-bold text-zinc-300 tracking-[0.3em] uppercase">Complete Wardrobe</span>
              <div className="mt-6 aspect-square bg-zinc-100 mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400" className="group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-sm uppercase">Velvet Essential Trousers</h4>
              <p className="text-zinc-500 text-xs mt-1">Perfect pairing for your blazer.</p>
              <button className="mt-4 text-[10px] font-bold border-b border-black pb-1 uppercase">Shop Pairing</button>
           </div>

           {/* As Seen On (Trust) */}
           <div className="p-8 bg-zinc-50 rounded-sm">
              <span className="text-[9px] font-bold text-zinc-300 tracking-[0.3em] uppercase">As Seen On</span>
              <div className="grid grid-cols-2 gap-2 mt-6">
                {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-zinc-200 overflow-hidden grayscale hover:grayscale-0 transition-all cursor-crosshair">
                        <img src={`https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&h=200&auto=format&fit=crop&sig=${i}`} />
                    </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] text-zinc-400 uppercase text-center tracking-widest italic">Join the #FABUNIQO Collective</p>
           </div>

           {/* VIP Membership */}
           <div className="p-8 bg-zinc-900 text-white rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-[rgb(209,167,67)] text-[9px] font-bold tracking-[0.4em] uppercase">The Inner Circle</span>
                <h3 className="text-3xl font-light mt-4 tracking-tighter">Priority Access <br /> to Limited Drops.</h3>
              </div>
              <div className="mt-8">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xs tracking-widest outline-none focus:border-[rgb(209,167,67)] transition-colors"
                />
                <button className="mt-6 w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[rgb(209,167,67)] transition-colors">
                    Join the Club
                </button>
              </div>
           </div>

        </div>
      </section>

    </div>
  );
};

export default FabuniqoEcomSuite;