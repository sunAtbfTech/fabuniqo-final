// import React from 'react';
// import { ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';

// const Footer = () => {
//   const fabniquoGold = "rgb(209,167,67)";

//   return (
//     <footer className=" bottom-0 z-[-10] w-full bg-[#080808] text-white border-t border-white/5 selection:bg-[#D1A743] selection:text-black">
//       <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        
//         {/* LARGE BRAND SIGNATURE SECTION */}
//         <div className="flex flex-col mb-24">
//           <div className="relative group w-full pt-20">
            
//             <svg viewBox="0 0 1000 250" className="w-full h-auto select-none pointer-events-none overflow-visible">
//               <defs>
//                 {/* 1. THE MASK */}
//                 <mask id="text-mask">
//                   <text x="50%" y="70%" textAnchor="middle" className="font-serif font-black text-[150px] tracking-tighter fill-white">
//                     FABUNIQO
//                   </text>
//                 </mask>

//                 {/* 2. GLITTER EFFECT (Fractal Noise) */}
//                 <filter id="glitter">
//                   <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="5">
//                     <animate attributeName="seed" values="1;50;1" dur="10s" repeatCount="indefinite" />
//                   </feTurbulence>
//                   <feComposite operator="in" in2="SourceGraphic" />
//                   <feColorMatrix type="matrix" values="0 0 0 0 1   0 0 0 0 0.8   0 0 0 0 0.4  0 0 0 1 0" />
//                 </filter>

//                 {/* 3. WAVY LIQUID FILTER */}
//                 <filter id="water-waves">
//                   <feTurbulence type="turbulence" baseFrequency="0.01 0.05" numOctaves="2" result="wave">
//                     <animate attributeName="baseFrequency" dur="4s" values="0.01 0.05;0.012 0.07;0.01 0.05" repeatCount="indefinite" />
//                   </feTurbulence>
//                   <feDisplacementMap in="SourceGraphic" in2="wave" scale="15" />
//                 </filter>

//                 {/* 4. THE WAVE PATH */}
//                 <path id="complexWave" d="M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z">
//                   <animate 
//                     attributeName="d" 
//                     dur="6s" 
//                     repeatCount="indefinite"
//                     values="
//                       M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z;
//                       M 0 100 C 200 150 350 50 500 100 C 650 150 800 50 1000 100 V 400 H 0 Z;
//                       M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z" 
//                   />
//                 </path>
//               </defs>

//               {/* GHOST VESSEL */}
//               <text x="50%" y="70%" textAnchor="middle" 
//                 className="font-serif font-black text-[150px] tracking-tighter fill-white/[0.04]">
//                 FABUNIQO
//               </text>

//               {/* LIQUID FILL WITH GLITTER */}
//               <g mask="url(#text-mask)">
//                 <g filter="url(#water-waves)">
//                   <use href="#complexWave" fill={fabniquoGold}>
//                     {/* FILL CYCLE: Rise (8s), Pause Full (2s), Reset (0s) */}
//                     <animateTransform 
//                       attributeName="transform" 
//                       type="translate" 
//                       values="0 250; 0 -100; 0 -100; 0 250" 
//                       keyTimes="0; 0.7; 0.9; 1"
//                       dur="12s" 
//                       repeatCount="indefinite"
//                     />
//                   </use>
//                 </g>
                
//                 {/* GLITTER OVERLAY */}
//                 <rect width="1000" height="250" filter="url(#glitter)" opacity="0.4" pointerEvents="none">
//                     <animateTransform 
//                       attributeName="transform" 
//                       type="translate" 
//                       values="0 250; 0 -100; 0 -100; 0 250" 
//                       keyTimes="0; 0.7; 0.9; 1"
//                       dur="12s" 
//                       repeatCount="indefinite"
//                     />
//                 </rect>
//               </g>
//             </svg>

//             {/* DESCRIPTION & NEWSLETTER */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 items-end">
//               <p className="text-xl font-light max-w-md text-gray-500 leading-relaxed">
//                 Redefining the landscape of <span className="text-white italic">Indian Luxury</span> through curated craft and modern silhouettes.
//               </p>

//               <div className="flex flex-col items-start lg:items-end">
//                 <div className="w-full max-w-md">
//                   <p className="text-[10px] tracking-[0.4em] uppercase text-gray-500 mb-4">Newsletter Concierge</p>
//                   <div className="relative w-full border-b border-white/20 pb-2 group/input">
//                     <input 
//                       type="text" 
//                       placeholder="Enter your email for the inner circle" 
//                       className="bg-transparent w-full outline-none text-xl font-light placeholder:text-gray-700 focus:placeholder:text-gray-500 transition-all"
//                     />
//                     <button className="absolute right-0 bottom-3 hover:scale-110 transition-transform">
//                       <ArrowUpRight size={24} style={{ color: fabniquoGold }} />
//                     </button>
//                     <div className="absolute bottom-0 left-0 h-[1px] bg-[#D1A743] w-0 group-hover/input:w-full transition-all duration-700"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* NAVIGATION LINKS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-20 border-b border-white/5">
//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">The Collections</h4>
//             <ul className="space-y-3 text-sm font-light">
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Hidden Gems</a></li>
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Traditional Pret</a></li>
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Modern Ethnic</a></li>
//               <li><a href="#" className="hover:pl-2 transition-all duration-300 hover:text-[#D1A743]">Accessories</a></li>
//             </ul>
//           </div>

//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Assistance</h4>
//             <ul className="space-y-3 text-sm font-light">
//               <li><a href="#" className="hover:text-white transition-colors">Shipping & Concierge</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Payment Security</a></li>
//             </ul>
//           </div>

//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Corporate</h4>
//             <ul className="space-y-3 text-sm font-light">
//               <li><a href="#" className="hover:text-white transition-colors">The Brand Story</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
//               <li><a href="#" className="hover:text-white transition-colors">Press & Editorial</a></li>
//             </ul>
//           </div>

//           {/* Section 4: Social (Interactive Hover) */}
//           <div className="space-y-6">
//             <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Connect</h4>
//             <div className="flex gap-6">
//               {[Instagram, Facebook, Youtube].map((Icon, idx) => (
//                 <a key={idx} href="#" className="relative p-2 group overflow-hidden border border-white/10 rounded-full hover:border-[#D1A743]/50 transition-colors duration-500">
//                   <Icon size={18} className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
//                   <span className="absolute inset-0 bg-[#D1A743] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="lg:text-right space-y-2">
//             <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-6">Flagship Atelier</p>
//             <p className="text-xs font-light leading-relaxed text-gray-400">
//               Chanakyapuri, New Delhi<br />
//               India, 110021
//             </p>
//           </div>
//         </div>

//         {/* COPYRIGHT BAR */}
//         <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-gray-600 uppercase">
//           <p>© 2026 Fabniquo Retail. All Rights Reserved.</p>
//           <div className="flex gap-10 mt-6 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">Privacy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms</a>
//             <a href="#" className="hover:text-white transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;















// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaWhatsapp,
//   FaPinterestP,
//   FaYoutube,
//   FaXTwitter,
// } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-[#0f1720] text-white pt-16 pb-10 px-6 md:px-20">

//         {/* GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-700 pb-14">

//           {/* BRAND INFO */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">About Fabuniqo</h3>

//             <p className="text-gray-300 text-sm leading-relaxed mb-6">
//               Elegant jewellery crafted for modern women who love timeless
//               beauty and everyday luxury.
//             </p>

//             <div className="text-sm text-gray-200 space-y-1">
//               <p>Customer Care</p>
//               <p>Email: xyz@gmail.com</p>
//               <p>Mobile: +91 XXXXX XXXXX</p>
//             </div>
//           </div>

//           {/* SHOP CATEGORIES */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Shop</h3>

//             <ul className="space-y-3 text-gray-200 text-sm">
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Earings & Studs
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">Rings</li>
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Bracelets & Bangles
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Necklace & Pendants
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Mangalsutras
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">Sets</li>
//             </ul>
//           </div>

//           {/* CUSTOMER SUPPORT */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Customer Support</h3>

//             <ul className="space-y-3 text-gray-200 text-sm">
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Contact Us
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">FAQs</li>
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Shipping & Delivery
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Returns & Exchange
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Privacy Policy
//               </li>
//               <li className="hover:text-[#D1A743] cursor-pointer">
//                 Terms & Conditions
//               </li>
//             </ul>
//           </div>

//           {/* SOCIAL + NEWSLETTER */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

//             <div className="flex gap-4 mb-6">

//               <a className="bg-gradient-to-tr from-yellow-400 to-pink-500 p-2 rounded-full text-white">
//                 <FaInstagram />
//               </a>

//               <a className="bg-blue-600 p-2 rounded-full text-white">
//                 <FaFacebookF />
//               </a>

//               <a className="bg-green-500 p-2 rounded-full text-white">
//                 <FaWhatsapp />
//               </a>

//               <a className="bg-red-500 p-2 rounded-full text-white">
//                 <FaPinterestP />
//               </a>

//               <a className="bg-red-600 p-2 rounded-full text-white">
//                 <FaYoutube />
//               </a>

//               <a className="bg-black p-2 rounded-full text-white">
//                 <FaXTwitter />
//               </a>
//             </div>

//             <p className="text-gray-200 text-sm mb-3">
//               Subscribe for exclusive offers & jewellery tips
//             </p>

//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-3 py-2 w-full text-black rounded-l-md outline-none"
//               />

//               <button className="bg-[#D1A743] px-4 rounded-r-md text-black font-medium">
//                 Join
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="text-center text-gray-300 text-sm mt-8">
//           © 2026 Fabuniqo. All Rights Reserved.
//         </div>
//       </footer>

//       {/* WHATSAPP FLOATING BUSINESS BUTTON */}

//       <a
//         href="https://wa.me/91XXXXXXXXXX"
//         className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
//       >
//         <FaWhatsapp className="text-white text-2xl" />
//       </a>
//     </>
//   );
// };

// export default Footer;










// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaWhatsapp,
//   FaPinterestP,
//   FaYoutube,
//   FaXTwitter,
// } from "react-icons/fa6";

// const Footer = () => {
//   const fabuniqoGold = "rgb(209,167,67)";

//   return (
//     <>
//       <footer className="w-full bg-[#080808] text-white border-t border-white/5">

//         <div className="max-w-[1800px] mx-auto px-8 lg:px-16">

//           {/* ================= FABUNIQO ANIMATION ================= */}

//           <div className="flex flex-col mb-20">

//             <div className="relative w-full pt-20">

//               <svg viewBox="0 0 1000 250" className="w-full h-auto overflow-visible">

//                 <defs>

//                   {/* TEXT MASK */}
//                   <mask id="text-mask">
//                     <text
//                       x="50%"
//                       y="70%"
//                       textAnchor="middle"
//                       className="font-serif font-black text-[150px] tracking-tighter fill-white"
//                     >
//                       FABUNIQO
//                     </text>
//                   </mask>

//                   {/* GLITTER */}
//                   <filter id="glitter">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="5">
//                       <animate attributeName="seed" values="1;50;1" dur="10s" repeatCount="indefinite" />
//                     </feTurbulence>
//                     <feComposite operator="in" in2="SourceGraphic" />
//                     <feColorMatrix
//                       type="matrix"
//                       values="0 0 0 0 1  0 0 0 0 0.8  0 0 0 0 0.4  0 0 0 1 0"
//                     />
//                   </filter>

//                   {/* WATER WAVES */}
//                   <filter id="water-waves">
//                     <feTurbulence
//                       type="turbulence"
//                       baseFrequency="0.01 0.05"
//                       numOctaves="2"
//                       result="wave"
//                     >
//                       <animate
//                         attributeName="baseFrequency"
//                         dur="4s"
//                         values="0.01 0.05;0.012 0.07;0.01 0.05"
//                         repeatCount="indefinite"
//                       />
//                     </feTurbulence>
//                     <feDisplacementMap in="SourceGraphic" in2="wave" scale="15" />
//                   </filter>

//                   {/* WAVE PATH */}
//                   <path
//                     id="complexWave"
//                     d="M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z"
//                   >
//                     <animate
//                       attributeName="d"
//                       dur="6s"
//                       repeatCount="indefinite"
//                       values="
//                       M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z;
//                       M 0 100 C 200 150 350 50 500 100 C 650 150 800 50 1000 100 V 400 H 0 Z;
//                       M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z"
//                     />
//                   </path>

//                 </defs>

//                 {/* BACK TEXT */}
//                 <text
//                   x="50%"
//                   y="70%"
//                   textAnchor="middle"
//                   className="font-serif font-black text-[150px] tracking-tighter fill-white/[0.05]"
//                 >
//                   FABUNIQO
//                 </text>

//                 {/* LIQUID GOLD */}
//                 <g mask="url(#text-mask)">
//                   <g filter="url(#water-waves)">
//                     <use href="#complexWave" fill={fabuniqoGold}>
//                       <animateTransform
//                         attributeName="transform"
//                         type="translate"
//                         values="0 250; 0 -100; 0 -100; 0 250"
//                         keyTimes="0; 0.7; 0.9; 1"
//                         dur="12s"
//                         repeatCount="indefinite"
//                       />
//                     </use>
//                   </g>

//                   {/* GLITTER */}
//                   <rect width="1000" height="250" filter="url(#glitter)" opacity="0.4">
//                     <animateTransform
//                       attributeName="transform"
//                       type="translate"
//                       values="0 250; 0 -100; 0 -100; 0 250"
//                       keyTimes="0; 0.7; 0.9; 1"
//                       dur="12s"
//                       repeatCount="indefinite"
//                     />
//                   </rect>
//                 </g>

//               </svg>

//               {/* DESCRIPTION */}

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-end">

//                 <p className="text-lg text-gray-300 max-w-md">
//                   Discover timeless jewellery crafted for modern women who
//                   appreciate elegance and luxury.
//                 </p>

//                 {/* NEWSLETTER */}

//                 <div className="flex flex-col lg:items-end">

//                   <div className="w-full max-w-md">

//                     <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
//                  Subscribe for exclusive offers and jewellery tips
//                     </p>

//                     <div className="relative border-b border-white/20 pb-2">

//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="bg-transparent w-full outline-none text-lg text-white placeholder:text-gray-500"
//                       />

//                       <button className="absolute right-0 bottom-2 hover:scale-110 transition">
//                         <ArrowUpRight size={22} style={{ color: fabuniqoGold }} />
//                       </button>

//                     </div>
//                   </div>

//                 </div>

//               </div>

//             </div>
//           </div>

//           {/* ================= FOOTER GRID ================= */}

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">

//             {/* ABOUT */}

//             <div>

//               <h3 className="text-lg font-semibold mb-4">About Fabuniqo</h3>

//               <p className="text-gray-300 text-sm leading-relaxed mb-5">
//                 Elegant jewellery designed for everyday luxury and timeless beauty.
//               </p>

//               <div className="text-sm text-gray-300">
//                 <p>Email:  fabuniqo@gmail.com</p>
//                 <p>Mobile: +91 XXXXX XXXXX</p>
//               </div>

//             </div>

//             {/* SHOP */}

//             <div>

//               <h3 className="text-lg font-semibold mb-4">Shop</h3>

//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li className="hover:text-[#D1A743] cursor-pointer">Earings & Studs</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Rings</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Bracelets & Bangles</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Necklace & Pendants</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Mangalsutras</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Sets</li>
//               </ul>

//             </div>

//             {/* SUPPORT */}

//             <div>

//               <h3 className="text-lg font-semibold mb-4">Customer Support</h3>

//               <ul className="space-y-2 text-gray-300 text-sm">
//                 <li className="hover:text-[#D1A743] cursor-pointer">Contact Us</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">FAQs</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Shipping</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Returns</li>
//                 <li className="hover:text-[#D1A743] cursor-pointer">Privacy Policy</li>
//               </ul>

//             </div>

//             {/* SOCIAL */}

//             <div>

//               <h3 className="text-sm font-semibold mb-4">Follow us for latest collections & offers  :</h3>

//               <div className="flex gap-4">

//                 <a className="bg-gradient-to-tr from-yellow-400 to-pink-500 p-2 rounded-full">
//                   <FaInstagram />
//                 </a>

//                 <a className="bg-blue-600 p-2 rounded-full">
//                   <FaFacebookF />
//                 </a>

//                 <a className="bg-green-500 p-2 rounded-full">
//                   <FaWhatsapp />
//                 </a>

//                 <a className="bg-red-500 p-2 rounded-full">
//                   <FaPinterestP />
//                 </a>

//                 <a className="bg-red-600 p-2 rounded-full">
//                   <FaYoutube />
//                 </a>

//                 <a className="bg-black p-2 rounded-full">
//                   <FaXTwitter />
//                 </a>

//               </div>

//             </div>

//           </div>

//           {/* COPYRIGHT */}

//           <div className="py-10 text-center text-gray-400 text-sm">
//             © 2026 Fabuniqo. All Rights Reserved.
//           </div>

//         </div>

//       </footer>

//       {/* FLOATING WHATSAPP */}

//       <a
//         href="https://wa.me/91XXXXXXXXXX"
//         className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
//       >
//         <FaWhatsapp className="text-white text-2xl" />
//       </a>
//     </>
//   );
// };

// export default Footer;











import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaXTwitter,
 
} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import twitter from "../../assets/twitter.png"

const Footer = () => {
  const fabuniqoGold = "rgb(209,167,67)";

  return (
    <>
     <footer className="w-full bg-[#080808] text-white border-t border-white/10 overflow-hidden">

  <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-16">

    {/* FABUNIQO HERO */}
    <div className="flex flex-col mb-14 sm:mb-20 relative">

      <div className="relative w-full pt-14 sm:pt-20">

        {/* LOGO SVG */}
        <svg
          viewBox="0 0 1000 250"
          className="w-full h-auto overflow-visible"
        >

          <defs>

            <mask id="text-mask">

              <text
                x="50%"
                y="70%"
                textAnchor="middle"
                className="font-serif font-black text-[110px] sm:text-[150px] tracking-tighter fill-white"
              >

                FABUNIQO

              </text>

            </mask>

            <filter id="glitter">

              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
              >

                <animate
                  attributeName="seed"
                  values="1;50;1"
                  dur="10s"
                  repeatCount="indefinite"
                />

              </feTurbulence>

              <feComposite
                operator="in"
                in2="SourceGraphic"
              />

            </filter>

            <filter id="water-waves">

              <feTurbulence
                type="turbulence"
                baseFrequency="0.01 0.05"
                numOctaves="2"
                result="wave"
              >

                <animate
                  attributeName="baseFrequency"
                  dur="4s"
                  values="0.01 0.05;0.012 0.07;0.01 0.05"
                  repeatCount="indefinite"
                />

              </feTurbulence>

              <feDisplacementMap
                in="SourceGraphic"
                in2="wave"
                scale="15"
              />

            </filter>

            <path
              id="complexWave"
              d="M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z"
            >

              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z;
                M 0 100 C 200 150 350 50 500 100 C 650 150 800 50 1000 100 V 400 H 0 Z;
                M 0 100 C 250 50 400 150 500 100 C 600 50 850 150 1000 100 V 400 H 0 Z"
              />

            </path>

          </defs>

          {/* BACK TEXT */}
          <text
            x="50%"
            y="70%"
            textAnchor="middle"
            className="font-serif font-black text-[110px] sm:text-[150px] tracking-tighter fill-white/[0.05]"
          >

            FABUNIQO

          </text>

          {/* WAVE */}
          <g mask="url(#text-mask)">

            <g filter="url(#water-waves)">

              <use
                href="#complexWave"
                fill={fabuniqoGold}
              >

                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 250; 0 -100; 0 -100; 0 250"
                  keyTimes="0; 0.7; 0.9; 1"
                  dur="12s"
                  repeatCount="indefinite"
                />

              </use>

            </g>

            <rect
              width="1000"
              height="250"
              filter="url(#glitter)"
              opacity="0.4"
            />

          </g>

        </svg>

        {/* DESCRIPTION + NEWSLETTER */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 mt-10 sm:mt-12 items-center">

          {/* TEXT */}
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-2xl text-center xl:text-left">

            Discover timeless jewellery crafted for modern women who appreciate
            elegance, luxury and everyday brilliance.

          </p>

          {/* NEWSLETTER */}
          <div className="bg-[#111] border border-[#D1A743]/40 rounded-[24px] sm:rounded-[30px] p-5 sm:p-7 shadow-lg">

            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#D1A743] mb-3 font-semibold">

              Join Fabuniqo

            </p>

<h3 className="text-[18px] sm:text-2xl font-semibold mb-5 leading-snug break-words">
              Subscribe for exclusive offers and jewellery tips

            </h3>

            <div className="flex items-center gap-2 sm:gap-3 border-b border-white/20 pb-3 min-w-0">

             <input
  type="email"
  placeholder="Enter your email"
  className="bg-transparent flex-1 min-w-0 outline-none text-sm sm:text-base text-white placeholder:text-gray-500"
/>

              <button className="hover:scale-110 transition-transform duration-300">

                <ArrowUpRight
                  size={22}
                  style={{ color: fabuniqoGold }}
                />

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* FOOTER GRID */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-14 sm:pb-16 border-b border-white/10">

      {/* ABOUT */}
      <div className="lg:border-r lg:border-white/10 lg:pr-6">

        <h3 className="text-base sm:text-lg font-semibold mb-4">
          About Fabuniqo
        </h3>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">

          Elegant jewellery designed for everyday luxury and timeless beauty.

        </p>

        <div className="text-gray-300 text-xs sm:text-sm space-y-2">

          <p>📧 fabuniqo@gmail.com</p>

          <p>📞 +91 XXXXX XXXXX</p>

        </div>

      </div>

      {/* SHOP */}
      <div className="lg:border-r lg:border-white/10 lg:pr-6">

        <h3 className="text-base sm:text-lg font-semibold mb-4">
          Shop
        </h3>

        <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">

          {[
            "Earings & Studs",
            "Rings",
            "Bracelets & Bangles",
            "Necklace & Pendants",
            "Mangalsutras",
            "Sets",
          ].map((item) => (

            <li
              key={item}
              className="hover:text-[#D1A743] cursor-pointer transition-colors duration-300"
            >

              {item}

            </li>

          ))}

        </ul>

      </div>

      {/* SUPPORT */}
      <div className="lg:border-r lg:border-white/10 lg:pr-6">

        <h3 className="text-base sm:text-lg font-semibold mb-4">
          Customer Support
        </h3>

        <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">

          {[
            "Contact Us",
            "FAQs",
            "Shipping",
            "Returns",
            "Privacy Policy",
          ].map((item) => (

            <li
              key={item}
              className="hover:text-[#D1A743] cursor-pointer transition-colors duration-300"
            >

              {item}

            </li>

          ))}

        </ul>

      </div>

      {/* SOCIAL */}
      <div>

        <h3 className="text-sm sm:text-base font-semibold mb-5 leading-relaxed">

          Follow us for latest collections & offers

        </h3>

        <div className="flex flex-wrap gap-2 sm:gap-3">

          <a className="bg-gradient-to-tr from-yellow-400 to-pink-500 p-2.5 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300">
            <FaInstagram className="text-sm sm:text-base" />
          </a>

          <a className="bg-blue-600 p-2.5 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300">
            <FaFacebookF className="text-sm sm:text-base" />
          </a>

          <a className="bg-green-500 p-2.5 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300">
            <FaWhatsapp className="text-sm sm:text-base" />
          </a>

          <a className="bg-red-500 p-2.5 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300">
            <FaPinterestP className="text-sm sm:text-base" />
          </a>

          <a className="bg-red-600 p-2.5 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300">
            <FaYoutube className="text-sm sm:text-base" />
          </a>

          <a className="bg-blue-400 p-2.5 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300">
            <FaXTwitter className="text-sm sm:text-base" />
          </a>

        </div>

      </div>

    </div>

    {/* COPYRIGHT */}
    <div className="py-8 sm:py-10 text-center text-gray-400 text-xs sm:text-sm">

      © 2026 Fabuniqo. All Rights Reserved.

    </div>

  </div>

</footer>

{/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/91XXXXXXXXXX"
  className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 hover:scale-110 transition-transform duration-300"
>

  <img
    width="52"
    src="https://cdn-icons-png.flaticon.com/128/4782/4782351.png"
    alt="WhatsApp"
    className="drop-shadow-2xl"
  />

</a>
    </>
  );
};

export default Footer;