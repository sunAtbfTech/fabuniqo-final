// import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import { Tag, Clock, Zap, MoveRight } from 'lucide-react';

// // OPTIMIZED VERSION - KEEPING ORIGINAL EFFECT INTACT
// const DealsBanner = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 23,
//     minutes: 59,
//     seconds: 59
//   });

//   // --- ORIGINAL FABUNIQO SCROLL LOGIC (OPTIMIZED) ---
//   const [progress, setProgress] = useState(0);
//   const [activeColor, setActiveColor] = useState('rgb(209, 167, 67)');
//   const bannerTrackRef = useRef(null);
  
//   // Use refs to store values that don't need re-renders
//   const rafId = useRef(null);
//   const lastProgress = useRef(0);

//   useEffect(() => {
//     const calculateProgress = () => {
//       if (!bannerTrackRef.current) return;
      
//       const rect = bannerTrackRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
      
//       // ORIGINAL CALCULATION - MUST KEEP THIS EXACTLY
//       const start = rect.top - windowHeight;
//       const total = windowHeight + rect.height;
//       const current = windowHeight - rect.top;
//       const rawProgress = current / total;
//       const clamped = Math.max(0, Math.min(1, rawProgress));
      
//       return clamped;
//     };

//     const updateProgress = () => {
//       const newProgress = calculateProgress();
      
//       // Only update if significant change (0.5% threshold)
//       if (Math.abs(lastProgress.current - newProgress) > 0.005) {
//         lastProgress.current = newProgress;
//         setProgress(newProgress);

//         // ORIGINAL COLOR SHIFT LOGIC
//         const distanceFromCenter = Math.abs(0.5 - newProgress);
//         if (distanceFromCenter < 0.15) {
//           setActiveColor('rgb(163, 126, 42)');
//         } else {
//           setActiveColor('rgb(209, 167, 67)');
//         }
//       }
      
//       rafId.current = requestAnimationFrame(updateProgress);
//     };

//     // Throttle initial start
//     const startUpdates = () => {
//       if (!rafId.current) {
//         updateProgress();
//       }
//     };

//     // Use passive event listener for scroll
//     window.addEventListener('scroll', startUpdates, { passive: true });
//     window.addEventListener('resize', startUpdates, { passive: true });
    
//     // Initial calculation
//     startUpdates();

//     // Cleanup
//     return () => {
//       window.removeEventListener('scroll', startUpdates);
//       window.removeEventListener('resize', startUpdates);
//       if (rafId.current) {
//         cancelAnimationFrame(rafId.current);
//       }
//     };
//   }, []);

//   // Timer effect - optimized with requestAnimationFrame
//   useEffect(() => {
//     let timerId;
//     let lastTime = Date.now();
    
//     const updateTimer = () => {
//       const now = Date.now();
//       if (now - lastTime >= 1000) {
//         setTimeLeft(prev => {
//           if (prev.seconds > 0) {
//             return { ...prev, seconds: prev.seconds - 1 };
//           } else if (prev.minutes > 0) {
//             return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//           } else if (prev.hours > 0) {
//             return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
//           }
//           return prev;
//         });
//         lastTime = now;
//       }
//       timerId = requestAnimationFrame(updateTimer);
//     };
    
//     timerId = requestAnimationFrame(updateTimer);
    
//     return () => {
//       if (timerId) {
//         cancelAnimationFrame(timerId);
//       }
//     };
//   }, []);

//   // Memoize deal items to prevent re-renders
//   const dealItems = useMemo(() => [
//     { name: 'Architectural Coats', discount: '30% OFF', price: '$1,200' },
//     { name: 'Raw Silk Shirts', discount: '25% OFF', price: '$450' },
//     { name: 'Atelier Accessories', discount: '50% OFF', price: '$180' },
//   ], []);

//   // Calculate opacity based on progress (original formula)
//   const opacity = useMemo(() => {
//     return 0.08 + (0.05 * (1 - Math.abs(0.5 - progress) * 2));
//   }, [progress]);

//   return (
//     <section 
//       ref={bannerTrackRef}
//       className="relative py-24 bg-gradient-to-r from-[rgb(247,224,193)] via-white to-[rgb(247,224,193)] overflow-hidden"
//       // Prevent cumulative layout shift
//       style={{ contain: 'content' }}
//     >
//       {/* THE MASTER TYPOGRAPHY LAYER - ORIGINAL EFFECT */}
//       <div 
//         className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none z-0"
//         style={{ 
//           // ORIGINAL TRANSFORM CALCULATION
//           transform: `translateX(${110 - (progress * 220)}%)`,
//           // SMOOTH TRANSITION - but only when not scrolling fast
//           transition: rafId.current ? 'transform 0.1s linear' : 'none',
//           // ORIGINAL COLOR AND OPACITY
//           color: activeColor,
//           opacity: opacity,
//           // GPU ACCELERATION
//           willChange: 'transform, opacity',
//           // Force GPU layer
//           backfaceVisibility: 'hidden',
//           perspective: '1000px'
//         }}
//       >
//         <h2 className="text-[28vw] font-black tracking-tighter leading-none select-none uppercase">
//           FABUNIQO
//         </h2>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <div className="bg-white/20 backdrop-blur-sm rounded-[40px] shadow-[0_50px_100px_-20px_rgba(209,167,67,0.15)] overflow-hidden border border-white/60">
//           <div className="grid md:grid-cols-2">
            
//             {/* Left: Timer Section */}
//             <div className="p-10 md:p-16 bg-gradient-to-br from-[rgb(209,167,67)]/10 via-transparent to-transparent">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-3 bg-[rgb(209,167,67)] rounded-2xl shadow-xl shadow-[rgb(209,167,67)]/20">
//                   <Zap className="w-7 h-7 text-white" />
//                 </div>
//                 <div>
//                   <span className="font-main text-xs font-bold text-[rgb(209,167,67)] uppercase tracking-[0.4em]">
//                     Instant Access
//                   </span>
//                   <h3 className="font-main text-4xl font-bold text-gray-900 mt-1">
//                     Flash Archive
//                   </h3>
//                 </div>
//               </div>

//               {/* Timer UI */}
//               <div className="mb-10">
//                 <div className="flex items-center gap-2 mb-6">
//                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
//                   <span className="font-main text-xs font-semibold text-gray-500 uppercase tracking-widest">
//                     Offer Expiring
//                   </span>
//                 </div>
//                 <div className="flex gap-4">
//                   {Object.entries(timeLeft).map(([unit, value]) => (
//                     <div key={unit} className="text-center group">
//                       <div className="w-20 h-20 bg-gray-900 rounded-2xl flex flex-col items-center justify-center shadow-2xl group-hover:bg-[rgb(209,167,67)] transition-colors duration-500">
//                         <span className="font-main text-3xl font-bold text-white">
//                           {value.toString().padStart(2, '0')}
//                         </span>
//                       </div>
//                       <span className="font-poppins text-[10px] text-gray-400 mt-3 block uppercase tracking-tighter font-bold">
//                         {unit}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <button 
//                 className="group relative px-10 py-5 bg-gray-900 text-white rounded-full overflow-hidden hover:bg-[rgb(209,167,67)] transition-all duration-500"
//                 // Prevent layout shift
//                 style={{ transform: 'translateZ(0)' }}
//               >
//                 <span className="relative z-10 font-main font-bold text-xs uppercase tracking-widest flex items-center gap-3">
//                   <Tag className="w-4 h-4 text-[rgb(209,167,67)] group-hover:text-white transition-colors" />
//                   Explore The Collection
//                 </span>
//                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
//               </button>
//             </div>

//             {/* Right: Deal Items List */}
//             <div className="p-10 md:p-16 bg-white/30">
//               <div className="flex justify-between items-center mb-10">
//                 <h4 className="font-main text-sm font-bold text-gray-400 uppercase tracking-[0.3em]">
//                   Curated Selections
//                 </h4>
//                 <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
//                   Live
//                 </div>
//               </div>
              
//               <div className="space-y-5">
//                 {dealItems.map((deal, index) => (
//                   <div 
//                     key={index} 
//                     className="flex items-center justify-between p-6 bg-white/80 border border-gray-100 rounded-[24px] hover:border-[rgb(209,167,67)]/50 hover:shadow-2xl hover:shadow-[rgb(209,167,67)]/10 transition-all duration-500 group cursor-pointer"
//                     style={{ transform: 'translateZ(0)' }}
//                   >
//                     <div className="space-y-1">
//                       <h5 className="font-main font-semibold text-gray-900 group-hover:text-[rgb(209,167,67)] transition-colors">
//                         {deal.name}
//                       </h5>
//                       <div className="flex items-center gap-3">
//                         <span className="font-main text-[11px] font-black text-[rgb(209,167,67)] uppercase tracking-tighter">
//                           {deal.discount}
//                         </span>
//                         <div className="w-1 h-1 rounded-full bg-gray-200"></div>
//                         <span className="font-main  text-sm text-gray-500">
//                           Starting at {deal.price}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="w-12 h-12 bg-gray-50 group-hover:bg-[rgb(209,167,67)] rounded-xl flex items-center justify-center transition-all duration-500">
//                       <MoveRight size={20} className="text-gray-300 group-hover:text-white transition-colors" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* PERFORMANCE HINTS - Only on supporting browsers */}
//       <style jsx>{`
//         @media (prefers-reduced-motion: no-preference) {
//           .optimized-scroll {
//             scroll-behavior: smooth;
//           }
//         }
        
//         /* Prevent paint storms */
//         .will-change {
//           will-change: transform, opacity;
//         }
        
//         /* Force GPU layers where needed */
//         .gpu-layer {
//           transform: translate3d(0, 0, 0);
//           backface-visibility: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// // Export with memoization
// export default React.memo(DealsBanner);










import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Tag, Zap, MoveRight } from 'lucide-react';

const DealsBanner = () => {

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [progress, setProgress] = useState(0);
  const [activeColor, setActiveColor] = useState('rgb(209, 167, 67)');
  const bannerTrackRef = useRef(null);

  const rafId = useRef(null);
  const lastProgress = useRef(0);

  useEffect(() => {

    const calculateProgress = () => {
      if (!bannerTrackRef.current) return;

      const rect = bannerTrackRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.top - windowHeight;
      const total = windowHeight + rect.height;
      const current = windowHeight - rect.top;

      const rawProgress = current / total;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      return clamped;
    };

    const updateProgress = () => {

      const newProgress = calculateProgress();

      if (Math.abs(lastProgress.current - newProgress) > 0.005) {

        lastProgress.current = newProgress;
        setProgress(newProgress);

        const distanceFromCenter = Math.abs(0.5 - newProgress);

        if (distanceFromCenter < 0.15) {
          setActiveColor('rgb(163, 126, 42)');
        } else {
          setActiveColor('rgb(209, 167, 67)');
        }

      }

      rafId.current = requestAnimationFrame(updateProgress);
    };

    const startUpdates = () => {
      if (!rafId.current) {
        updateProgress();
      }
    };

    window.addEventListener('scroll', startUpdates, { passive: true });
    window.addEventListener('resize', startUpdates, { passive: true });

    startUpdates();

    return () => {
      window.removeEventListener('scroll', startUpdates);
      window.removeEventListener('resize', startUpdates);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };

  }, []);

  useEffect(() => {

    let timerId;
    let lastTime = Date.now();

    const updateTimer = () => {

      const now = Date.now();

      if (now - lastTime >= 1000) {

        setTimeLeft(prev => {

          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          }

          if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          }

          if (prev.hours > 0) {
            return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          }

          return prev;

        });

        lastTime = now;

      }

      timerId = requestAnimationFrame(updateTimer);

    };

    timerId = requestAnimationFrame(updateTimer);

    return () => {
      if (timerId) cancelAnimationFrame(timerId);
    };

  }, []);

  const dealItems = useMemo(() => [

    {
      name: 'Everyday Minimal Jewellery',
      discount: '20% OFF',
      price: '₹999'
    },

    {
      name: 'Office Elegance Collection',
      discount: '25% OFF',
      price: '₹1,499'
    },

    {
      name: 'Festival & Wedding Jewellery',
      discount: '30% OFF',
      price: '₹2,999'
    },

    {
      name: 'Party & Night Out Sparkle',
      discount: '35% OFF',
      price: '₹1,799'
    }

  ], []);

  const opacity = useMemo(() => {
    return 0.08 + (0.05 * (1 - Math.abs(0.5 - progress) * 2));
  }, [progress]);

  return (

    <section

      ref={bannerTrackRef}
      className="relative py-22 bg-gradient-to-r from-[rgb(247,224,193)] via-white to-[rgb(247,224,193)] overflow-hidden"
      style={{ contain: 'content'}}
    >

      {/* BIG BACKGROUND TYPOGRAPHY */}

      <div
        className="absolute inset-0 flex items-center whitespace-nowrap pointer-events-none z-0"
        style={{
          transform: `translateX(${110 - (progress * 220)}%)`,
          transition: rafId.current ? 'transform 0.1s linear' : 'none',
          color: activeColor,
          opacity: opacity,
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >

        {/* <h2 className="text-[12vw] font-black tracking-tighter leading-none select-none uppercase">
          Fabuniqo
        </h2> */}

      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <div className="bg-white/20 backdrop-blur-sm rounded-[40px] shadow-[0_50px_100px_-20px_rgba(209,167,67,0.15)] overflow-hidden border border-white/60">

          <div className="grid md:grid-cols-2">

            {/* LEFT */}

            <div className="p-10 md:p-16 bg-gradient-to-br from-[rgb(209,167,67)]/10 via-transparent to-transparent">

              <div className="flex items-center gap-4 mb-8">

                <div className="p-3 bg-[rgb(209,167,67)] rounded-2xl shadow-xl shadow-[rgb(209,167,67)]/20">
                  <Zap className="w-7 h-7 text-white" />
                </div>

                <div>

                  <span className="font-lato font-main text-m font-bold text-[rgb(209,167,67)] uppercase tracking-[0.4em]">
                    Limited Time
                  </span>

                  <h3 className="font-main text-4xl font-bold text-[#D36F6F] mt-1">
                    Jewellery Fest
                  </h3>

                </div>

              </div>

              {/* TIMER */}

              <div className="mb-10">

                <div className="flex items-center gap-2 mb-6">

                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>

                  <span className="font-main text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Limited Time Offer
                  </span>

                </div>

                <div className="flex gap-4">

                  {Object.entries(timeLeft).map(([unit, value]) => (

                    <div key={unit} className="text-center group">

                      <div className="w-20 h-20 bg-gray-900 rounded-2xl flex flex-col items-center justify-center shadow-2xl group-hover:bg-[rgb(209,167,67)] transition-colors duration-500">

                        <span className="font-main text-3xl font-bold text-white">
                          {value.toString().padStart(2, '0')}
                        </span>

                      </div>

                      <span className="font-poppins text-[10px] text-gray-400 mt-3 block uppercase tracking-tighter font-bold">
                        {unit}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* CTA BUTTON */}

              <button className="group relative px-10 py-5 bg-gray-900 text-[#D36F6F] rounded-full overflow-hidden hover:bg-[rgb(209,167,67)] transition-all duration-500">

                <span className="relative z-10 font-main font-bold text-xs uppercase tracking-widest flex items-center gap-3">

                  <Tag className="w-4 h-4 text-[rgb(209,167,67)] group-hover:text-white transition-colors" />

                  Explore Fine Jewellery

                </span>

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              </button>

            </div>

            {/* RIGHT */}

            <div className="p-10 md:p-16 bg-white/30">

              <div className="flex justify-between items-center mb-10">

                <h4 className="font-main text-sm font-bold text-gray-400 uppercase tracking-[0.3em]">
                  Jewellery For Every Moment
                </h4>

                <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Live
                </div>

              </div>

              <div className="space-y-5">

                {dealItems.map((deal, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between p-6 bg-white/80 border border-gray-100 rounded-[24px] hover:border-[rgb(209,167,67)]/50 hover:shadow-2xl hover:shadow-[rgb(209,167,67)]/10 transition-all duration-500 group cursor-pointer"
                  >

                    <div className="space-y-1">

                      <h5 className="font-outfit font-main font-semibold  group-hover:text-[rgb(209,167,67)] transition-colors text-[#D36F6F]">
                        {deal.name}
                      </h5>

                      <div className="flex items-center gap-3">

                        <span className="font-main text-[11px] font-black text-[rgb(209,167,67)] uppercase tracking-tighter">
                          {deal.discount}
                        </span>

                        <div className="w-1 h-1 rounded-full bg-gray-200"></div>

                        <span className="font-main text-sm text-gray-500">
                          Starting at {deal.price}
                        </span>

                      </div>

                    </div>

                    <div className="w-12 h-12 bg-gray-50 group-hover:bg-[rgb(209,167,67)] rounded-xl flex items-center justify-center transition-all duration-500">

                      <MoveRight size={20} className="text-gray-300 group-hover:text-white transition-colors" />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default React.memo(DealsBanner);










