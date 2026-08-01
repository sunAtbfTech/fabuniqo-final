// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const EliteBanner = () => {
//   const fabniquoGold = "rgb(209,167,67)";

//   return (
//     <section className="relative w-full h-[300px] md:h-[350px] bg-[#050505] overflow-visible my-32">
//       {/* Background Text Overlay */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20vw] font-serif text-white/[0.02] leading-none uppercase">
//           Series
//         </span>
//       </div>

//       <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        
//         {/* ASYMMETRIC IMAGE BOX */}
//         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[120%] hidden lg:block">
//           <div className="relative w-full h-full overflow-hidden group shadow-2xl">
//             <img 
//               src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80" 
//               alt="Fabniquo Couture"
//               className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
//           </div>
//           {/* Decorative Gold Frame */}
//           <div 
//             className="absolute -bottom-4 -right-4 w-full h-full border border-[#D1A743]/30 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
//           />
//         </div>

//         {/* CONTENT AREA */}
//         <div className="w-full lg:w-[50%] z-10">
//           <div className="flex items-center gap-4 mb-6 animate-pulse">
//             <span className="w-8 h-[1px]" style={{ backgroundColor: fabniquoGold }}></span>
//             <span className="text-[10px] tracking-[0.6em] uppercase text-gray-500 font-bold">Atelier Collection</span>
//           </div>

//           <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
//             Curated <br /> <span className="italic" style={{ color: fabniquoGold }}>Excellence</span>
//           </h2>

//           <div className="flex items-center gap-12">
//             <button className="group flex items-center gap-3 text-white">
//               <span className="text-xs font-bold tracking-[0.3em] uppercase border-b border-white/20 pb-1 group-hover:border-[#D1A743] transition-all">
//                 Shop The Edit
//               </span>
//               <div 
//                 className="p-3 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500"
//               >
//                 <ArrowRight size={16} />
//               </div>
//             </button>

//             <div className="hidden sm:block text-[10px] tracking-[0.2em] text-gray-600 uppercase italic">
//               *Limited Edition Series 01
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FLOATING BADGE (Breaks the bottom border) */}
//       <div 
//         className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[42%] bg-white px-8 py-4 shadow-xl z-20 border border-gray-100"
//       >
//         <p className="text-[9px] text-black font-black tracking-[0.4em] uppercase whitespace-nowrap">
//           Handcrafted in India
//         </p>
//       </div>

//     </section>
//   );
// };

// export default EliteBanner;




// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const EliteBanner = () => {
//   const fabniquoGold = "rgb(209,167,67)";

//   return (
//     <section className="relative w-full h-[500px] md:h-[350px] lg:h-[300px] bg-[#050505] overflow-visible my-16 md:my-24 lg:my-32">
//       {/* Mobile Background Image - Only on mobile */}
//       <div className="lg:hidden absolute inset-0 overflow-hidden">
//         <img 
//           src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80" 
//           alt="Fabniquo Couture"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
//       </div>

//       {/* Background Text Overlay */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <span className="absolute -left-4 md:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 text-[16vw] md:text-[18vw] lg:text-[20vw] font-serif text-white/[0.02] md:text-white/[0.02] leading-none uppercase">
//           Series
//         </span>
//       </div>

//       <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-center lg:justify-start">
        
//         {/* DESKTOP ASYMMETRIC IMAGE BOX - Unchanged */}
//         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[120%] hidden lg:block">
//           <div className="relative w-full h-full overflow-hidden group shadow-2xl">
//             <img 
//               src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80" 
//               alt="Fabniquo Couture"
//               className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
//           </div>
//           {/* Decorative Gold Frame */}
//           <div 
//             className="absolute -bottom-4 -right-4 w-full h-full border border-[#D1A743]/30 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
//           />
//         </div>

//         {/* CONTENT AREA - Centered on mobile, left on desktop */}
//         <div className="w-full lg:w-[50%] z-10 text-center lg:text-left bg-black/30 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-lg lg:rounded-none">
//           <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-6 animate-pulse">
//             <span className="w-6 md:w-8 h-[1px]" style={{ backgroundColor: fabniquoGold }}></span>
//             <span className="text-xs md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase text-gray-300 md:text-gray-500 font-bold">
//               Atelier Collection
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 leading-[1.1]">
//             Curated <br /> <span className="" style={{ color: "#D1A743" }}>Excellence</span>
//           </h2>

//           <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 lg:gap-12">
//             <button className="group flex items-center gap-2 md:gap-3 text-white">
//               <span className="text-sm md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase border-b border-white/30 md:border-white/20 pb-1 group-hover:border-[#D1A743] transition-all">
//                 Shop The Edit
//               </span>
//               <div 
//                 className="p-2 md:p-3 rounded-full border border-white/20 md:border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500"
//               >
//                 <ArrowRight size={16} />
//               </div>
//             </button>

//             <div className="text-sm md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-gray-300 md:text-gray-600 uppercase italic">
//               *Limited Edition Series 01
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FLOATING BADGE */}
//       <div 
//         className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[42%] bg-white px-6 md:px-8 py-3 md:py-4 shadow-lg md:shadow-xl z-20 border border-gray-100"
//       >
//         <p className="text-xs md:text-[9px] text-black font-black tracking-[0.3em] md:tracking-[0.4em] uppercase whitespace-nowrap">
//           Handcrafted in India 
//         </p>
//       </div>
//     </section>
//   );
// };

// export default EliteBanner;








import React from 'react';
import { ArrowRight } from 'lucide-react';
import vjs231 from "../../../assets/vjs-231-silverWhite (3).png"
import Rss206 from "../../../assets/Rss-206  (2).png";
import Rss202a from "../../../assets/Rss-202 (1).png"
import vjs230a from "../../../assets/vjs-230 (5).png"



const EliteBanner = () => {
  const fabniquoGold = "rgb(209,167,67)";

  return (
    <section className="relative w-full h-[500px] md:h-[350px] lg:h-[300px] bg-[#050505] overflow-visible my-16 md:my-24 lg:my-32">
      
      {/* Mobile Background Image */}
      <div className="lg:hidden absolute inset-0 overflow-hidden">
        <img 
          // src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80" 
          src={vjs231}
          alt="Luxury Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Background Text Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute -left-4 md:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 text-[16vw] md:text-[18vw] lg:text-[20vw] font-serif text-white/[0.02] leading-none uppercase">
          Jewelry
        </span>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-center lg:justify-start">
        
        {/* DESKTOP IMAGE */}
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[120%] hidden lg:block"> */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[35%] h-[120%] hidden lg:block">

          <div className="relative w-full h-full overflow-hidden group shadow-2xl">
            <img 
              // src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80" 
              src={vjs230a}
              alt="Luxury Jewelry"
              className="w-full h-full object-contain grayscale transition-transform duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>

          {/* Decorative Gold Frame */}
          <div 
            className="absolute -bottom-4 -right-4 w-full h-full border border-[#D1A743]/30 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
          />
        </div>

        {/* CONTENT AREA */}
        <div className="w-full lg:w-[50%] z-10 text-center lg:text-left bg-black/30 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-lg lg:rounded-none">
          
          <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-6 animate-pulse">
            <span className="w-6 md:w-8 h-[1px]" style={{ backgroundColor: fabniquoGold }}></span>
            <span className="text-xs md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase text-gray-300 md:text-gray-500 font-bold">
              Signature Jewelry
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 leading-[1.1]">
            Timeless <br /> <span style={{ color: "#D1A743" }}>Elegance</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 lg:gap-12">
            
            <button className="group flex items-center gap-2 md:gap-3 text-white">
              <span className="text-sm md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase border-b border-white/30 md:border-white/20 pb-1 group-hover:border-[#D1A743] transition-all">
                Explore Collection
              </span>

              <div 
                className="p-2 md:p-3 rounded-full border border-white/20 md:border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500"
              >
                <ArrowRight size={16} />
              </div>
            </button>

            <div className="text-sm md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-gray-300 md:text-gray-600 uppercase italic">
              *Exclusive Jewelry Series
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING BADGE */}
      <div 
        className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[42%] bg-white px-6 md:px-8 py-3 md:py-4 shadow-lg md:shadow-xl z-20 border border-gray-100"
      >
        <p className="text-xs md:text-[9px] text-black font-black tracking-[0.3em] md:tracking-[0.4em] uppercase whitespace-nowrap">
          Crafted with Precision
        </p>
      </div>
    </section>
  );
};

export default EliteBanner;
