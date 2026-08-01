import React, { useRef } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import logo from "../../../assets/logo1.png";

const BrandShowcase = () => {
  const scrollRef = useRef(null);
  const fabniquoGold = "rgb(209,167,67)";

  const brands = [
    { name: "AAVARAN", desc: "Handcrafted block prints from Udaipur", category: "Sustainable Ethnic",logo:logo },
    { name: "SHAZÉ", desc: "Bold, edgy jewelry for the modern woman", category: "Luxury Accessories",logo:logo  },
    { name: "RAW MANGO", desc: "Redefining Indian textiles", category: "High Fashion" , logo:logo },
    { name: "MULMUL", desc: "Lightweight embroidery on pure cotton", category: "Designer Kurtas", logo:logo  },
    { name: "ANITA D.", desc: "Timeless elegance in luxury pret", category: "Couture", logo:logo  },
  ];

  return (
    /* Changed pb-20 to pb-0 and added relative/z-10 to stay above the footer */
    <section className="relative z-10 bg-white pt-20 pb-0 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span style={{ color: fabniquoGold }} className="text-xs text-[18px] font-bold tracking-[0.2em] uppercase mb-4 block animate-pulse">
          Featured Labels
        </span>
        <h2 className="text-4xl md:text-5xl  text-gray-900 mb-4 font-light">The Artisans of Fabniquo</h2>
        <p className="text-gray-500 font-light max-w-xl mx-auto">
          Discover the soul of Indian craftsmanship through our handpicked selection of niche luxury brands.
        </p>
      </div>


      {/* INFINITE LOGO MARQUEE */}
      {/* <div className="relative flex overflow-x-hidden border-y border-gray-100 py-10 mb-20">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {brands.map((brand, idx) => (
                <span key={idx} className="mx-12 text-3xl md:text-4xl font-serif text-gray-300 hover:text-[#D1A743] transition-colors cursor-default uppercase tracking-widest">
                  {brand.name}
                   
                </span>
              ))}
            </div>
          ))}
        </div>
      </div> */}

      <div style={{border:"" , backgroundColor:"#FAE7EB"}} className="bg-fabpink relative flex overflow-x-hidden border-y border-gray-100 py-10 mb-20">
  <div className="animate-marquee flex whitespace-nowrap items-center">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex items-center">
        {brands.map((brand, idx) => (
       <span className="mx-12 w-[350px] h-[80px] flex items-center justify-center overflow-hidden">
  <img
    src={brand.logo}
    alt="brand logo"
    className="w-full h-full object-cover"
  />
</span>

        ))}
      </div>
    ))}
  </div>
</div>


      {/* BRAND STORY CARDS */}
      <div className="max-w-7xl mx-auto px-6 mb-32"> {/* Added margin bottom for spacing before the curve */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.slice(0, 3).map((brand, index) => (
            <div key={index} className="group relative bg-[#FBFBFB] p-10 border border-transparent hover:border-gray-200 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">{brand.category}</span>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#D1A743] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              
              <h3 className="text-3xl font-serif mb-4 group-hover:text-[#D1A743] transition-colors">
                {brand.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {brand.desc}
              </p>
              
             
              <button 
                style={{ borderColor: 'transparent' }} 
                className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:border-[#D1A743] hover:text-[#D1A743] transition-all"
              >
                View Collection
              </button>

              <div className="absolute -bottom-2 -right-2 text-6xl font-serif text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* THE CURVE REVEALER */}
      <div className="relative w-full overflow-hidden leading-[0] rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          fill="#080808" /* Matches your Footer Background */
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
        {/* Layer to ensure pure white transitions to the curve */}
        <div className="absolute top-0 left-0 w-full h-full bg-white -z-10"></div>
      </div>

      {/* INLINE CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default BrandShowcase;


// import React, { useRef } from 'react';
// import { ChevronRight, ArrowUpRight } from 'lucide-react';

// const BrandShowcase = () => {
//   const scrollRef = useRef(null);
//   const fabniquoGold = "rgb(209,167,67)";

//   const brands = [
//     { name: "AAVARAN", desc: "Handcrafted block prints from Udaipur", category: "Sustainable Ethnic" },
//     { name: "SHAZÉ", desc: "Bold, edgy jewelry for the modern woman", category: "Luxury Accessories" },
//     { name: "RAW MANGO", desc: "Redefining Indian textiles", category: "High Fashion" },
//     { name: "MULMUL", desc: "Lightweight embroidery on pure cotton", category: "Designer Kurtas" },
//     { name: "ANITA D.", desc: "Timeless elegance in luxury pret", category: "Couture" },
//   ];

//   return (
//     <section className="bg-white py-20 overflow-hidden">
//       {/* SECTION HEADER */}
//       <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//         <span style={{ color: fabniquoGold }} className="text-xs font-bold tracking-[0.4em] uppercase mb-4 block animate-pulse">
//           Featured Labels
//         </span>
//         <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">The Artisans of Fabniquo</h2>
//         <p className="text-gray-500 font-light max-w-xl mx-auto">
//           Discover the soul of Indian craftsmanship through our handpicked selection of niche luxury brands.
//         </p>
//       </div>

//       {/* INFINITE LOGO MARQUEE */}
//       <div className="relative flex overflow-x-hidden border-y border-gray-100 py-10 mb-20">
//         <div className="animate-marquee flex whitespace-nowrap items-center">
//           {[...Array(2)].map((_, i) => (
//             <div key={i} className="flex items-center">
//               {brands.map((brand, idx) => (
//                 <span key={idx} className="mx-12 text-3xl md:text-4xl font-serif text-gray-300 hover:text-[#D1A743] transition-colors cursor-default uppercase tracking-widest">
//                   {brand.name}
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* BRAND STORY CARDS */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {brands.slice(0, 3).map((brand, index) => (
//             <div key={index} className="group relative bg-[#FBFBFB] p-10 border border-transparent hover:border-gray-200 transition-all duration-500">
//               <div className="flex justify-between items-start mb-12">
//                 <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">{brand.category}</span>
//                 <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#D1A743] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
//               </div>
              
//               <h3 className="text-3xl font-serif mb-4 group-hover:text-[#D1A743] transition-colors">
//                 {brand.name}
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed mb-8">
//                 {brand.desc}
//               </p>
              
//               <button 
//                 style={{ borderColor: 'transparent' }} 
//                 className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:border-[#D1A743] hover:text-[#D1A743] transition-all"
//               >
//                 View Collection
//               </button>

//               {/* Decorative Background Element */}
//               <div className="absolute -bottom-2 -right-2 text-6xl font-serif text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
//                 {index + 1}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* INLINE CSS FOR MARQUEE */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}} />
//     </section>
//   );
// };

// export default BrandShowcase;