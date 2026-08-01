// import React from 'react';
// import { TrendingUp, Hash } from 'lucide-react';

// const TrendingNow = () => {
//   const trends = [
//     { tag: '#MinimalistStyle', items: 245 },
//     { tag: '#SustainableFashion', items: 189 },
//     { tag: '#OversizedBlazers', items: 156 },
//     { tag: '#PastelPalette', items: 203 },
//     { tag: '#LeatherEverything', items: 178 },
//     { tag: '#EveningGlow', items: 134 },
//   ];

//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-8">
//           <div className="p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
//             <TrendingUp className="w-6 h-6 text-[rgb(209,167,67)]" />
//           </div>
//           <div>
//             <h2 className="font-playfair text-2xl font-semibold text-gray-900">
//               Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
//             </h2>
//             <p className="font-poppins text-gray-600 text-sm">
//               Explore what's hot in fashion right now
//             </p>
//           </div>
//         </div>

//         {/* Trends Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {trends.map((trend, index) => (
//             <div
//               key={index}
//               className="group relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
//                     <Hash className="w-4 h-4 text-[rgb(209,167,67)]" />
//                   </div>
//                   <div>
//                     <h3 className="font-poppins font-semibold text-gray-900 group-hover:text-[rgb(209,167,67)]">
//                       {trend.tag}
//                     </h3>
//                     <p className="font-poppins text-sm text-gray-500 mt-1">
//                       {trend.items} items
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors">
//                   Trending
//                 </div>
//               </div>
              
//               <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-2 h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingNow;















// import React from 'react';
// import { TrendingUp, Hash } from 'lucide-react';

// const TrendingNow = () => {
//   const trends = [
//     { tag: '#MinimalistStyle', items: 245 },
//     { tag: '#SustainableFashion', items: 189 },
//     { tag: '#OversizedBlazers', items: 156 },
//     { tag: '#PastelPalette', items: 203 },
//     { tag: '#LeatherEverything', items: 178 },
//     { tag: '#EveningGlow', items: 134 },
//   ];

//   return (
//     <section className="py-8 sm:py-10 md:py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
//         {/* Header - Responsive spacing and sizing */}
//         <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
//           <div className="p-1.5 sm:p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
//             <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(209,167,67)]" />
//           </div>
//           <div>
//             <h2 className="font-main text-xl sm:text-2xl font-light text-gray-900">
//               Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
//             </h2>
//             <p className="font-main text-gray-600 text-xs sm:text-sm">
//               Explore what's hot in fashion right now
//             </p>
//           </div>
//         </div>

//         {/* Trends Grid - Responsive columns and spacing */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
//           {trends.map((trend, index) => (
//             <div
//               key={index}
//               className="group relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 sm:hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
//                     <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[rgb(209,167,67)]" />
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-[rgb(209,167,67)] truncate">
//                       {trend.tag}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
//                       {trend.items} items
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors whitespace-nowrap ml-1 sm:ml-2">
//                   Trending
//                 </div>
//               </div>
              
//               <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingNow;






// import React from 'react';
// import { TrendingUp, Hash } from 'lucide-react';

// const TrendingNow = () => {
//   const trends = [
//     { tag: '#DiamondElegance', items: 245 },
//     { tag: '#GoldJewelry', items: 189 },
//     { tag: '#MinimalistRings', items: 156 },
//     { tag: '#PearlCollection', items: 203 },
//     { tag: '#LuxuryBracelets', items: 178 },
//     { tag: '#BridalJewelry', items: 134 },
//   ];

//   return (
//     <section className="py-8 sm:py-10 md:py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
//         {/* Header */}
//         <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8">
//           <div className="p-1.5 sm:p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
//             <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(209,167,67)]" />
//           </div>
//           <div>
//             <h2 className="font-main text-xl sm:text-2xl font-light text-gray-900">
//               Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
//             </h2>
//             <p className="font-main text-gray-600 text-xs sm:text-sm">
//               Explore what's trending in jewelry right now
//             </p>
//           </div>
//         </div>

//         {/* Trends Grid */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
//           {trends.map((trend, index) => (
//             <div
//               key={index}
//               className="group relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5 sm:hover:-translate-y-1"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 sm:gap-3">
//                   <div className="p-1.5 sm:p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
//                     <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[rgb(209,167,67)]" />
//                   </div>
//                   <div className="min-w-0">
//                     <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-[rgb(209,167,67)] truncate">
//                       {trend.tag}
//                     </h3>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
//                       {trend.items} items
//                     </p>
//                   </div>
//                 </div>

//                 <div className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors whitespace-nowrap ml-1 sm:ml-2">
//                   Trending
//                 </div>
//               </div>

//               <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingNow;

























import React, { useState, useEffect } from 'react';
import { TrendingUp, Sparkles, Eye, ArrowRight, Star, Flame } from 'lucide-react';
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
import vjs232a from "../../../assets/vjs-232 (1).png"

const TrendingNow = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real jewelry images from Unsplash
  const trends = [
    { 
      tag: '#DiamondElegance', 
      items: 245,
         description: "Diamond Pendant Necklace Set",
                image : vjs232a,
            category: "Set",
      iconImage: vjs232a,
      growth: '+45%',
      jewelry: 'Diamond',
      color: 'from-blue-400/20 to-blue-600/20'
    },
    { 
      tag: '#GoldJewelry', 
      items: 189,
        description: "Traditional Black Beads Set",
               image : Rss205,
            category: "Set",
      iconImage: Rss205,
      growth: '+32%',
      jewelry: 'Gold',
      color: 'from-amber-400/20 to-yellow-600/20'
    },
    { 
      tag: '#MinimalistRings', 
      items: 156,
        description: "Golden Stud Earrings",
                image : Rss222,
            category: "Earrings & Studs",
      iconImage: Rss222,
      growth: '+28%',
      jewelry: 'Platinum',
      color: 'from-purple-400/20 to-purple-600/20'
    },
    { 
      tag: '#PearlCollection', 
      items: 203,
        description: "Rose Earings",
              image : Egur158,
            category: "Earrings & Studs",
      iconImage: Egur158,
      growth: '+56%',
      jewelry: 'Pearl',
      color: 'from-pink-400/20 to-rose-500/20'
    },
    { 
      tag: '#LuxuryBracelets', 
      items: 178,
       description: "Traditional Black Beads Set",
               image : Rss205,
            category: "Set",
      iconImage: Rss205,
      growth: '+41%',
      jewelry: 'Gemstone',
      color: 'from-emerald-400/20 to-teal-500/20'
    },
    { 
      tag: '#BridalJewelry', 
      items: 134,
       description: "Pearl Multicolor set",
              image: Rss201,
            category: "Set",
      iconImage: Rss201,
      growth: '+67%',
      jewelry: 'Bridal',
      color: 'from-red-400/20 to-rose-600/20'
    },
  ];

  // Mini jewelry icons for the bottom section
  const jewelryIcons = [
    // 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=50&h=50&fit=crop&auto=format',
    // 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=50&h=50&fit=crop&auto=format',
    // 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=50&h=50&fit=crop&auto=format',
    // 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=50&h=50&fit=crop&auto=format',
    // 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=50&h=50&fit=crop&auto=format',
    Rss201,vjs230,Rss203
  ];

  return (
   <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[rgb(209,167,67)]/5 to-white overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(209,167,67)]/5 rounded-full blur-3xl animate-pulse" />

    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(209,167,67)]/5 rounded-full blur-3xl animate-pulse delay-1000" />

  </div>

  <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* HEADER */}
    <div
      className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14 transform transition-all duration-1000 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >

      {/* LEFT */}
      <div className="text-center lg:text-left">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-5">

          <TrendingUp className="w-4 h-4 text-[rgb(209,167,67)]" />

          <span className="font-lato text-[11px] sm:text-sm font-semibold tracking-[0.15em] text-fab-pink uppercase">
            Trending Jewellery
          </span>

        </div>

        <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-light leading-tight text-[#111]">

          Trending{" "}

          <span className="font-semibold bg-gradient-to-r from-[rgb(209,167,67)] to-[rgb(163,126,42)] bg-clip-text text-transparent">
            Now
          </span>

        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-[700px] font-lato leading-relaxed mx-auto lg:mx-0">
          Explore the hottest jewellery trends customers are loving right now.
        </p>

      </div>

      {/* BUTTON */}
      <button className="group flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-gray-600 hover:text-[rgb(209,167,67)] transition-colors">

        View All Trends

        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

      </button>

    </div>

    {/* GRID */}
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-5 lg:gap-7">

  {trends.map((trend, index) => (

    <div
      key={index}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`group relative transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >

      <div className="relative bg-white rounded-2xl sm:rounded-[28px] overflow-hidden border border-gray-100 hover:border-[rgb(209,167,67)]/30 shadow-sm hover:shadow-xl hover:shadow-[rgb(209,167,67)]/10 transition-all duration-500 group-hover:-translate-y-1">

        {/* IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden">

          {/* Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
          />

          {/* Image */}
          <img
            src={trend.image}
            alt={trend.tag}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badge */}
          <div className="absolute top-3 right-3 animate-heartbeat">

            <div className="relative">

              <div className="absolute inset-0 bg-fab-pink rounded-full blur-md opacity-50 animate-pulse" />

              <div className="relative px-3 py-1 rounded-full bg-fab-pink text-white text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-lg">

                <Flame className="w-3 h-3 animate-pulse" />

                Trending

              </div>

            </div>

          </div>

          {/* Items */}
          <div className="absolute bottom-3 left-3">

            <div className="px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-[10px] sm:text-xs border border-white/20 shadow">
              {trend.items} Items
            </div>

          </div>

          {/* Quick View */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">

            <button className="translate-y-5 group-hover:translate-y-0 transition-all duration-500 px-4 py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-900 shadow-xl flex items-center gap-2 hover:bg-[rgb(209,167,67)] hover:text-white">

              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />

              Quick View

            </button>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-3 sm:p-5">

          <div className="flex items-start justify-between gap-3">

            {/* LEFT */}
            <div className="flex items-center gap-2 sm:gap-3">

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[rgb(209,167,67)]/30 shadow-md flex-shrink-0">

                <img
                  src={trend.iconImage}
                  alt={trend.jewelry}
                  className="w-full h-full object-cover"
                />

              </div>

              <div>

                <h3 className="text-[13px] sm:text-[17px] font-semibold text-gray-900 mb-1 group-hover:text-[rgb(209,167,67)] transition-colors line-clamp-1">

                  {trend.tag}

                </h3>

                <p className="text-[11px] sm:text-sm text-gray-500 line-clamp-2">
                  {trend.description}
                </p>

              </div>

            </div>

            {/* GROWTH */}
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full flex-shrink-0">

              <Star className="w-3 h-3 text-green-600 fill-current" />

              <span className="text-xs font-medium text-green-600">
                {trend.growth}
              </span>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">

            {/* TYPE */}
            <div className="flex items-center gap-2">

              <div className="w-5 h-5 rounded-full overflow-hidden">

                <img
                  src={trend.iconImage}
                  alt={trend.jewelry}
                  className="w-full h-full object-cover"
                />

              </div>

              <span className="text-[11px] sm:text-sm text-gray-500">
                {trend.jewelry}
              </span>

            </div>

            {/* USERS */}
            <div className="flex items-center gap-2">

              <div className="flex -space-x-2">

                {[...Array(3)].map((_, i) => (

                  <div
                    key={i}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >

                    <img
                      src={jewelryIcons[(index + i) % jewelryIcons.length]}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  </div>

                ))}

              </div>

              <span className="hidden sm:block text-xs text-gray-400">
                Active
              </span>

            </div>

          </div>

          {/* ARROW */}
          <div className="absolute bottom-4 right-4 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">

            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[rgb(209,167,67)] flex items-center justify-center shadow-lg hover:bg-[rgb(163,126,42)] transition-colors">

              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />

            </div>

          </div>

        </div>

      </div>

    </div>

  ))}

</div>

    {/* STATS */}
    <div
      className={`mt-14 sm:mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 transition-all duration-1000 delay-700 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >

      {[
        { label: "Active Trends", value: "156", image: jewelryIcons[0] },
        { label: "Daily Views", value: "45K+", image: jewelryIcons[1] },
        { label: "New Items", value: "1.2K", image: jewelryIcons[2] },
      ].map((stat, i) => (

        <div
          key={i}
          className="text-center group cursor-pointer"
        >

          <div className="relative mb-3">

            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[rgb(209,167,67)]/30 mx-auto group-hover:border-[rgb(209,167,67)] group-hover:scale-110 transition-all duration-300 shadow-sm">

              <img
                src={stat.image}
                alt={stat.label}
                className="w-full h-full object-cover"
              />

            </div>

            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(209,167,67)] rounded-full animate-ping" />

          </div>

          <div className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[rgb(209,167,67)] transition-colors">

            {stat.value}

          </div>

          <div className="text-xs sm:text-sm text-gray-500">
            {stat.label}
          </div>

        </div>

      ))}

    </div>

  </div>
</section>
  );
};


export default TrendingNow;