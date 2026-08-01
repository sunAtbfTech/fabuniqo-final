// import React, { useState } from 'react';
// import { ArrowRight, MoveRight } from 'lucide-react';

// const BrandArchiveTimeline = () => {
//   const [activeYear, setActiveYear] = useState(0);

//   const archiveData = [
//     {
//       year: "2022",
//       collection: "The Genesis",
//       description: "Founded on the principles of architectural minimalism and sustainable silk weaving.",
//       image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
//       signature: "Raw Edge Blazer",
//       price: "$640"
//     },
//     {
//       year: "2023",
//       collection: "Midnight Sands",
//       description: "Exploration of desert tones and fluid silhouettes inspired by nomadic luxury.",
//       image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
//       signature: "Nomad Linen Coat",
//       price: "$820"
//     },
//     {
//       year: "2024",
//       collection: "Digital Nomad",
//       description: "Integrating technical fabrics with traditional tailoring for the modern traveler.",
//       image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
//       signature: "Tech-Wool Parka",
//       price: "$950"
//     },
//     {
//       year: "2025",
//       collection: "Eternal Bloom",
//       description: "A celebration of floral geometry and hand-painted silk textures.",
//       image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
//       signature: "Artisan Silk Wrap",
//       price: "$410"
//     },
//     {
//       year: "2026",
//       collection: "Neo-Classic",
//       description: "Redefining the classics for a new era of conscious, luxury craftsmanship.",
//       image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=800&auto=format&fit=crop",
//       signature: "Structured Vest",
//       price: "$550"
//     }
//   ];

//   return (
//     <section className="relative min-h-screen bg-[#fcfcfc] py-24 flex flex-col justify-center overflow-hidden font-sans">
      
//       {/* Background Year - Large Decorative Watermark */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
//         <h1 className="text-[35vw] font-bold text-zinc-100/80 leading-none select-none transition-all duration-1000 ease-in-out">
//           {archiveData[activeYear].year}
//         </h1>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
//         {/* Header */}
//         <div className="mb-16 text-center md:text-left">
//           <span className="text-[rgb(209,167,67)] tracking-[0.2em] text-[14px] font-bold uppercase block mb-4">
//             Legacy & Evolution
//           </span>
//           <h2 className="text-5xl md:text-7xl font-light text-zinc-900 tracking-tighter">
//             The <span className="italic font-light">Archive</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
//           {/* Main Visual Display (6 Columns) */}
//           <div className="lg:col-span-6">
//             <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200 group">
//               {archiveData.map((item, index) => (
//                 <img
//                   key={index}
//                   src={item.image}
//                   alt={item.collection}
//                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
//                     activeYear === index ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-2'
//                   }`}
//                 />
//               ))}
              
//               {/* Product Tag Badge */}
//               <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 shadow-xl">
//                 <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Signature Piece</p>
//                 <h4 className="text-sm font-bold text-zinc-900">{archiveData[activeYear].signature}</h4>
//                 <p className="text-[rgb(209,167,67)] text-xs mt-1 font-mono">{archiveData[activeYear].price}</p>
//               </div>
//             </div>
//           </div>

//           {/* Text Content (6 Columns) */}
//           <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
//             <div className="space-y-4">
//               <h3 className="text-[rgb(209,167,67)]  text-3xl">
//                 {archiveData[activeYear].collection}
//               </h3>
//               <p className="text-zinc-600 text-lg leading-relaxed font-light max-w-lg transition-opacity duration-500">
//                 {archiveData[activeYear].description}
//               </p>
//             </div>

//             <button className="flex items-center gap-4 text-zinc-900 tracking-[0.2em] text-xs font-bold uppercase group w-fit">
//               Shop This Era <MoveRight className="group-hover:translate-x-3 transition-transform" />
//             </button>

//             {/* Interactive Timeline Selector */}
//             <div className="pt-12 border-t border-zinc-200">
//               <div className="flex justify-between items-end relative">
//                 {archiveData.map((item, index) => (
//                   <div 
//                     key={index}
//                     onMouseEnter={() => setActiveYear(index)}
//                     className="flex flex-col items-center cursor-pointer group"
//                   >
//                     {/* The Ruler Tick */}
//                     <div className={`w-[2px] mb-4 transition-all duration-500 ${
//                       activeYear === index ? 'h-12 bg-black' : 'h-4 bg-zinc-300 group-hover:bg-zinc-500'
//                     }`} />
                    
//                     <span className={`text-[11px] font-bold tracking-tighter transition-all duration-500 ${
//                       activeYear === index ? 'text-black scale-125' : 'text-zinc-400'
//                     }`}>
//                       {item.year}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Side Label */}
//       <div className="absolute right-10 top-1/2 -rotate-90 origin-right hidden xl:block">
//         <span className="text-[10px] tracking-[1em] uppercase text-zinc-300">
//           Chronicles of Fabuniqo
//         </span>
//       </div>

//     </section>
//   );
// };

// export default BrandArchiveTimeline;













import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';
import Rssred  from "../../../assets/Rset-red (2).png"
import Rss203 from "../../../assets/Rss - 203 (4).png"
import Rss201 from "../../../assets/Rss -201 (3).png"
import Rss201A from "../../../assets/Rss -201 (4).png"
import Rss204 from "../../../assets/Rss-204 (2).png"
import Rss205 from "../../../assets/Rss-205 (3).png"
import Rss206 from "../../../assets/Rss-206  (2).png"
import Rss222 from "../../../assets/Rss-222 (1).png"
import Rss225 from "../../../assets/Rss-225-gold (1).png"
import Rss225S from "../../../assets/Rss-225-silver (1).png"
import vjs230 from "../../../assets/vjs-231-rosegold (1).png"
import vjs231 from "../../../assets/vjs-231-silverWhite (3).png"
import Egur158 from "../../../assets/Egur 158 Red (3).png"
import Egur159 from "../../../assets/Egur-159-Green (1).png"

const BrandArchiveTimeline = () => {
  const [activeYear, setActiveYear] = useState(0);

  const archiveData = [
    {
      year: "2022",
      collection: "Golden Origins",
    //   description:
    //     "Our journey began with handcrafted gold pieces inspired by timeless Indian heritage and minimal luxury.",
    //  name: "Green earrings",
    //             image : Egur159,
    //           signature: "Earrings & Studs",
     description:
        "A luxurious bridal collection featuring intricate mangalsutras, bangles, and royal necklace sets.",
      signature: "Golden Stud Earrings",
                 image : Rss222,
             category: "Earrings & Studs",
              
      price: "₹24,900"
    },
    {
      year: "2023",
      collection: "Sparkle Era",
      description:
        "A celebration of brilliance featuring diamond-studded rings and earrings designed for modern elegance.",
      signature: "Diamond Pendant Necklace Set",
                   image : vjs231,
               category: "Set",
      price: "₹32,500"
    },
    {
      year: "2024",
      collection: "Pearl Elegance",
      description:
        "Inspired by ocean beauty, this collection introduced graceful pearl necklaces and delicate pendants.",
     signature: "Traditional Black Beads Set",
                 image : Rss205,
              category: "Set",
      price: "₹18,700"
    },
    {
      year: "2025",
      collection: "Bridal Heritage",
        description:
        "Our journey began with handcrafted gold pieces inspired by timeless Indian heritage and minimal luxury.",
     name: "Green earrings",
                image : Egur159,
              signature: "Earrings & Studs",
      price: "₹48,900"
    },
    {
      year: "2026",
      collection: "Modern Minimal",
      description:
        "Sleek, lightweight jewelry crafted for everyday elegance with contemporary geometric designs.",
      signature: "Exclusive Jewellery Set",
              image :vjs230,
            category: "Jewellery Sets",
      price: "₹12,900"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#fcfcfc] py-24 flex flex-col justify-center overflow-hidden font-sans">

      {/* Background Year */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[35vw] font-bold text-zinc-100/80 leading-none select-none transition-all duration-1000">
          {archiveData[activeYear].year}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-[rgb(209,167,67)] tracking-[0.2em] text-[14px] font-bold font-lato uppercase block mb-4">
            Legacy & Craftsmanship
          </span>

          <h2 className="text-5xl md:text-7xl font-light text-zinc-900 tracking-tighter">
            Jewelry <span className="italic font-light">Archive</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image Section */}
          <div  className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200 group rounded-lg shadow-xl">

              {archiveData.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.collection}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    activeYear === index
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-110 rotate-2"
                  }`}
                />
              ))}

              {/* Product Badge */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 shadow-xl rounded-md">
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">
                  Signature Jewelry
                </p>

                {/* <h4 className="text-sm font-bold text-zinc-900"> */}
                                <h4 className="text-sm font-bold text-fab-pink">

                  {archiveData[activeYear].signature}
                </h4>

                <p className="text-[rgb(209,167,67)] text-xs mt-1 font-mono">
                  {archiveData[activeYear].price}
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">

            <div className="space-y-4">
              <h3 className="text-[rgb(209,167,67)] text-3xl">
                {archiveData[activeYear].collection}
              </h3>

              <p className="text-zinc-600 text-lg leading-relaxed font-light max-w-lg">
                {archiveData[activeYear].description}
              </p>
            </div>

            <button className="flex items-center gap-4 text-zinc-900 tracking-[0.2em] text-xs font-bold uppercase group w-fit">
              Explore Collection
              <MoveRight className="group-hover:translate-x-3 transition-transform" />
            </button>

            {/* Timeline */}
            <div className="pt-12 border-t border-zinc-200">
              <div className="flex justify-between items-end relative">

                {archiveData.map((item, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveYear(index)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <div
                      className={`w-[2px] mb-4 transition-all duration-500 ${
                        activeYear === index
                          ? "h-12 bg-black"
                          : "h-4 bg-zinc-300 group-hover:bg-zinc-500"
                      }`}
                    />

                    <span
                      className={`text-[14px] font-bold transition-all duration-500 ${
                        activeYear === index
                          // ? "text-black scale-125"
                          // : "text-zinc-400"
                          ? "text-fab-pink scale-105"
                          : "text-zinc-400"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute right-10 top-1/2 -rotate-90 origin-right hidden xl:block">
        <span className="text-[10px] tracking-[1em] uppercase text-zinc-300">
          Chronicles of Your Jewelry House
        </span>
      </div>

    </section>
  );
};

export default BrandArchiveTimeline;