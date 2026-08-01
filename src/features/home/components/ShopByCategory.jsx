
// import React, { useState, useEffect, useRef } from 'react';

// import Rssred  from "../../assets/Rset-red (2).png"
// import Rss203 from "../../assets/Rss - 203 (4).png"
// import Rss201 from "../../assets/Rss -201 (3).png"
// import Rss201A from "../../assets/Rss -201 (4).png"
// import Rss204 from "../../assets/Rss-204 (2).png"
// import Rss205 from "../../assets/Rss-205 (3).png"
// import Rss206 from "../../assets/Rss-206  (2).png"
// import Rss222 from "../../assets/Rss-222 (1).png"
// import Rss225 from "../../assets/Rss-225-gold (1).png"
// import Rss225S from "../../assets/Rss-225-silver (1).png"
// import vjs230 from "../../assets/vjs-231-rosegold (1).png"
// import vjs231 from "../../assets/vjs-231-silverWhite (3).png"
// import Egur158 from "../../assets/Egur 158 Red (3).png"
// import Egur159 from "../../assets/Egur-159-Green (1).png"
// import vjs230a from "../../assets/vjs-230 (5).png"
// import vjs230b from "../../assets/vjs-230 (2).png"




// const ShopByCategory = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isHoveringImages, setIsHoveringImages] = useState(false);
  
//   const sectionRef = useRef(null);

//   const categories = [
   

//      { name: 'Everyday Elegance',
//           description: "Minimal yet beautiful jewelry designed to add effortless charm to your daily style.",

//       //  image: 'https://media.istockphoto.com/id/2188506249/photo/hand-figurine-various-jewelry-and-accessories.jpg?s=612x612&w=0&k=20&c=7jnylgA-041k6mgGgWzLEmKJfAle61zO0kt-Kb-2yog=',
//       image :vjs231,  
//       count: '156'
//        },
//     { name: 'Office ',
//           description: "Refined and graceful pieces crafted to complement your professional elegance.",

//       //  image: 'https://media.istockphoto.com/id/1339130661/photo/chain-shape-golden-bracelet-and-ring-on-pink-box-on-green-paper-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=G2wlnMCohdihUVrrdMLCFIRd2SGSDgqpLOEmIZUnutg=',
//         image: vjs230a,
//       count: '289' },
//     { name: 'Party & Night out Glamour ',
//           description: "Statement jewelry that shines bright and adds sparkle to every celebration.",

//       //  image: 'https://media.istockphoto.com/id/1011494028/photo/beautiful-girl.jpg?s=612x612&w=0&k=20&c=9vVd2yPvkoCJL6p8N7MElfuv2dmNCK-UvR7MBTh4aLE=', 
//       image : vjs230, 
//       count: '187' },
//     { name: 'Festival Radiance', 
//           description: "Traditional yet modern designs perfect for festivals and joyful moments.",

//       // image: 'https://media.istockphoto.com/id/1296634658/photo/indian-traditional-gold-wedding-earrings-on-wooden-box.jpg?s=612x612&w=0&k=20&c=I50vTgqCA1j3t9R09qk1xIjn72lLxi_prB9kQAXFdz4=',
//       image : Rss203,
//       count: '098' },
//     { name: 'wedding Royalty', 
//           description: "Luxurious bridal jewelry crafted to make your most special day unforgettable.",

//       // image: 'https://media.istockphoto.com/id/2219482315/photo/elegant-hands-adorned-with-gold-jewelry-and-intricate-henna-design.jpg?s=612x612&w=0&k=20&c=-u-s4-88dFOghXbPMxTldbM9Ra8IN7Jzub-28vMfgU8=',
//        image: Egur158,
//       count: '176' },
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section 
//       ref={sectionRef} 
//       className="py-12 bg-white w-full relative"
//     >
      
//       {/* --- CUSTOM FLOATING CURSOR (Visible only on Image Hover) --- */}
//       <div 
//         className={`fixed top-0 left-0 w-24 h-24 rounded-full bg-[rgb(209,167,67)] pointer-events-none z-[9999] flex items-center justify-center transition-transform duration-500 ease-out
//           ${isHoveringImages ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
//         style={{ 
//           left: 0,
//           top: 0,
//           transform: `translate3d(${mousePos.x - 48}px, ${mousePos.y - 48}px, 0)`,
//         }}
//       >
//         <div className="flex flex-col items-center">
//             <span className="text-white text-[9px] font-bold uppercase tracking-widest">
//                 View
//             </span>
//             <span className="text-white text-[10px] font-serif italic font-bold">
//                 {categories[hoveredIndex].name}
//             </span>
//         </div>
//       </div>

//       <div className="w-full px-4 md:px-10">
//         {/* Minimalist Header */}
//         <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
//           <div className="flex items-end justify-between border-b border-gray-100 pb-6">
//             <div>
//               <span className="font-sans text-[14px] tracking-[0.2em] uppercase text-[rgb(209,167,67)] font-bold">The Fabuniqo</span>
//               <h3 style={{borderRadius:"50px" , padding:"15px" , backgroundColor:"black"}} className="text-red-400 text-3xl md:text-4xl font-light  tracking-tighter text-gray-900  font- mt-2">Shop By Ocassion</h3>

//             </div>
//             <p className="hidden md:block text-[10px] tracking-widest text-gray-400 uppercase italic">Autumn / Winter 2026</p>
//           </div>
//         </div>

//         {/* Fluid Accordion Container - HOVER TRIGGERS MOVED HERE */}
//         <div 
//           className="flex h-[65vh] md:h-[75vh] min-h-[500px] w-full gap-2 md:gap-4 cursor-none"
//           onMouseEnter={() => setIsHoveringImages(true)}
//           onMouseLeave={() => setIsHoveringImages(false)}
//         >
//           {categories.map((cat, i) => (
//             <div
//               key={i}
//               onMouseEnter={() => setHoveredIndex(i)}
//               className={`relative overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)]
//                 ${hoveredIndex === i ? 'flex-[4]' : 'flex-[1]'}
//                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'}
//               `}
//               style={{ transitionDelay: `${i * 120}ms` }}
//             >
//               {/* Image Layer */}
//               <div className="absolute inset-0 w-full h-full">
//                 <img
//                   src={cat.image}
//                   alt={cat.name}
//                   className={`w-full h-full object-cover transition-all duration-[2s] 
//                     ${hoveredIndex === i ? 'scale-100 grayscale-0' : 'scale-110 grayscale'}`}
//                 />
//                 <div className={`absolute inset-0 bg-black/30 transition-opacity duration-700 ${hoveredIndex === i ? 'opacity-60' : 'opacity-20'}`} />
//               </div>

//               {/* Minimal Text Branding */}
//               <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
//                 <span className={`text-[11px] font-medium tracking-[0.4em] transition-all duration-500 ${hoveredIndex === i ? 'text-white translate-x-0' : 'text-white/40 -translate-x-2'}`}>
//                   0{i + 1}
//                 </span>

//                 <div className={`transition-all duration-700 ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                   <h4 className="text-3xl md:text-5xl text-[#D36F6F] font-lato tracking-tight mb-4">{cat.name}</h4>
//                   <p className="text-white/70 text-[18px] text-semibold mb-4 font-lato">{cat.description}</p>
//                   <div className="flex items-center gap-6">
//                     <button className="font-lato text-white text-[10px] uppercase tracking-[0.3em] border-b border-[rgb(209,167,67)] pb-2 transition-colors">
//                       Discover
//                     </button>
//                     <span className="font-lato text-white/40 text-[9px] tracking-widest uppercase">{cat.count} Pieces</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Inactive Vertical Title */}
//               <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-0' : 'opacity-100'}`}>
//                  <p className="font-lato rotate-90 text-[10px] tracking-[0.8em] uppercase text-white font-light whitespace-nowrap">
//                    {cat.name}
//                  </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopByCategory;









import React, { useState, useEffect, useRef } from 'react';

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
import vjs230a from "../../../assets/vjs-230 (5).png"
import vjs230b from "../../../assets/vjs-230 (2).png"

const ShopByCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringImages, setIsHoveringImages] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const sectionRef = useRef(null);

  const categories = [
    { name: 'Everyday Elegance',
      description: "Minimal yet beautiful jewelry designed to add effortless charm to your daily style.",
      image: vjs231,  
      count: '156'
    },
    { name: 'Office',
      description: "Refined and graceful pieces crafted to complement your professional elegance.",
      image: vjs230a,
      count: '289' 
    },
    { name: 'Party & Night out Glamour',
      description: "Statement jewelry that shines bright and adds sparkle to every celebration.",
      image: vjs230, 
      count: '187' 
    },
    { name: 'Festival Radiance', 
      description: "Traditional yet modern designs perfect for festivals and joyful moments.",
      image: Rss203,
      count: '098' 
    },
    { name: 'Wedding Royalty', 
      description: "Luxurious bridal jewelry crafted to make your most special day unforgettable.",
      image: Egur158,
      count: '176' 
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Check for mobile/tablet screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-8 sm:py-10 md:py-12 bg-white w-full relative overflow-hidden"
    >
      
      {/* --- CUSTOM FLOATING CURSOR (Visible only on Image Hover for Desktop) --- */}
      {!isMobile && (
        <div 
          className={`fixed top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full bg-[rgb(209,167,67)] pointer-events-none z-[9999] flex items-center justify-center transition-transform duration-500 ease-out
            ${isHoveringImages ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
          style={{ 
            left: 0,
            top: 0,
            transform: `translate3d(${mousePos.x - (isMobile ? 32 : 48)}px, ${mousePos.y - (isMobile ? 32 : 48)}px, 0)`,
          }}
        >
          <div className="flex flex-col items-center px-2">
              <span className="text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-widest">
                  View
              </span>
              <span className="text-white text-[8px] sm:text-[10px] font-serif italic font-bold text-center">
                  {categories[hoveredIndex]?.name.substring(0, 15)}...
              </span>
          </div>
        </div>
      )}

      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-10">
        {/* Minimalist Header - Responsive */}
        <div className={`mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-100 pb-4 sm:pb-6">
            <div>
              <span className="font-lato text-[10px] sm:text-[12px] md:text-[16px] tracking-[0.2em] uppercase text-[rgb(209,167,67)] font-bold">
                The Fabuniqo
              </span>
              <h3 style={{fontWeight:"400"}} className="text-fab-pink text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tighter mt-1 sm:mt-2">
                Shop By Ocassion
              </h3>
            </div>
            {/* <p className="hidden sm:block text-[8px] md:text-[10px] tracking-widest text-gray-400 uppercase italic mt-2 sm:mt-0">
              Autumn / Winter 2026
            </p> */}
          </div>
        </div>

        {/* Fluid Accordion Container - Responsive Height */}
        <div 
          className={`flex flex-col lg:flex-row h-auto lg:h-[65vh] xl:h-[75vh] min-h-0 lg:min-h-[500px] w-full gap-2 md:gap-4 ${!isMobile ? 'lg:cursor-none' : ''}`}
          onMouseEnter={() => !isMobile && setIsHoveringImages(true)}
          onMouseLeave={() => !isMobile && setIsHoveringImages(false)}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              onMouseEnter={() => !isMobile && setHoveredIndex(i)}
              onClick={() => {
                if (isMobile) {
                  setHoveredIndex(hoveredIndex === i ? -1 : i);
                }
              }}
              className={`relative overflow-hidden transition-all duration-[600ms] lg:duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)]
                ${!isMobile ? (hoveredIndex === i ? 'lg:flex-[4]' : 'lg:flex-[1]') : 'w-full'}
                ${isMobile ? 'h-[300px] sm:h-[350px] md:h-[400px] mb-3 sm:mb-4' : ''}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 sm:translate-y-16 md:translate-y-24 lg:translate-y-32'}
                rounded-lg lg:rounded-none
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={`w-full h-full object-cover transition-all duration-[1.5s] lg:duration-[2s] 
                    ${!isMobile 
                      ? (hoveredIndex === i ? 'scale-100 grayscale-0' : 'scale-110 grayscale')
                      : (hoveredIndex === i ? 'scale-105 grayscale-0' : 'scale-100 grayscale-50')
                    }`}
                />
                <div className={`absolute inset-0 transition-opacity duration-500 lg:duration-700 
                  ${!isMobile 
                    ? (hoveredIndex === i ? 'bg-black/60' : 'bg-black/20')
                    : (hoveredIndex === i ? 'bg-black/50' : 'bg-black/30')
                  }`} 
                />
              </div>

              {/* Minimal Text Branding - Responsive */}
              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                <span className={`text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.3em] sm:tracking-[0.4em] transition-all duration-500 
                  ${!isMobile 
                    ? (hoveredIndex === i ? 'text-white translate-x-0' : 'text-white/40 -translate-x-2')
                    : (hoveredIndex === i ? 'text-white' : 'text-white/60')
                  }`}>
                  0{i + 1}
                </span>

                <div className={`transition-all duration-500 lg:duration-700 
                  ${!isMobile 
                    ? (hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')
                    : (hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-100')
                  }`}>
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-fab-pink font-lato tracking-tight mb-2 sm:mb-3 md:mb-4">
                    {cat.name}
                  </h4>
                  <p className="text-white/80 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] mb-2 sm:mb-3 md:mb-4 font-lato max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                    {cat.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6">
                    <button className="font-lato text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] border-b border-[rgb(209,167,67)] pb-1 sm:pb-2 transition-colors w-fit">
                      Discover Collection
                    </button>
                    <span className="font-lato text-white/60 text-[8px] sm:text-[9px] tracking-widest uppercase">
                      {cat.count} Pieces
                    </span>
                  </div>
                </div>
              </div>

              {/* Inactive Vertical Title - Hide on mobile/tablet when active */}
              <div className={`absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none transition-opacity duration-500 
                ${!isMobile 
                  ? (hoveredIndex === i ? 'opacity-0' : 'opacity-100')
                  : 'hidden'
                }`}>
                 <p className="font-lato rotate-90 text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[0.8em] uppercase text-white font-light whitespace-nowrap">
                   {cat.name}
                 </p>
              </div>

              {/* Mobile/Tablet indicator dots */}
              {isMobile && (
                <div className="absolute bottom-2 right-2 flex gap-1">
                  {categories.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 
                        ${idx === i ? 'bg-white w-3' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet view all button */}
        {isMobile && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button className="font-lato text-[rgb(209,167,67)] text-xs sm:text-sm uppercase tracking-widest border-b border-[rgb(209,167,67)] pb-2 transition-colors hover:text-[rgb(189,147,47)]">
              View All Categories →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopByCategory;
























