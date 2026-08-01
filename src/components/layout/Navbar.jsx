// main-------------------

// import React, { useState, useEffect } from "react";
// import logo from "../assets/logo1.png";
// import { NavLink, Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { FaRegHeart, FaBars, FaMale, FaFemale, FaChild, FaFire } from "react-icons/fa";
// import { GiTShirt, GiHandBag, GiRunningShoe, GiDress } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";
// import { MdOutlineNewReleases, MdCollections, MdContactSupport } from "react-icons/md";
// import { BsInfoCircle } from "react-icons/bs";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
//   const [imageError, setImageError] = useState(false);

//   // Image mapping for menu items using direct URLs
//   const menuImages = {
//     "Earings & Studs": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop&auto=format",
//     "Rings": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop&auto=format",
//     "Bracelets & Bangles": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop&auto=format",
//     "Necklace & Pendants": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop&auto=format",
//     "Mangalsutras": "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop&auto=format",
//     "Sets": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&auto=format",
//     "Gifting": "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=300&h=300&fit=crop&auto=format",
//     "Trendings": "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=300&h=300&fit=crop&auto=format",
//   };

//   // Fallback image in case the main image fails to load
//   const fallbackImage = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&auto=format";

//   // Rotating offers text
//   const offers = [
//     { icon: "🚚", text: "Free Delivery on Orders Over $50", color: "from-[#d5a541] to-[#b08535]" },
//     { icon: "🎁", text: "New Customer Coupon: SAVE20", color: "from-[#b08535] to-[#d5a541]" },
//     { icon: "🏷️", text: "Flash Sale: 30% Off Select Items", color: "from-[#d5a541] to-[#b08535]" },
//     { icon: "⭐", text: "Best Platform to Shop Fashion", color: "from-[#b08535] to-[#d5a541]" },
//     { icon: "💳", text: "Easy Returns & Exchange", color: "from-[#d5a541] to-[#b08535]" },
//   ];

//   // Desktop Navigation items
//   const desktopNavItems = [
//     { name: "Earings & Studs", path: "/men" },
//     { name: "Rings", path: "/women" },
//     { name: "Bracelets & Bangles", path: "/kids" },
//     { name: "Necklace & Pendants", path: "/new-arrivals" },
//     { name: "Mangalsutras", path: "/collections" },
//     { name: "Sets", path: "/collections" },
//     { name: "Gifting", path: "/collections" },
//     { name: "Trendings", path: "/collections" },
//   ];

//   // Mobile Navigation items
//   const mobileNavItems = [
//     { name: "Earings & Studs", path: "/men" },
//     { name: "Rings", path: "/women" },
//     { name: "Bracelets & Bangles", path: "/kids" },
//     { name: "Necklace & Pendants", path: "/new-arrivals" },
//     { name: "Mangalsutras", path: "/collections" },
//     { name: "Sets", path: "/collections" },
//     { name: "Gifting", path: "/collections" },
//     { name: "Trendings", path: "/collections" },
//   ];

//   // Rotate offers every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [offers.length]);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle mouse move for image popup
//   const handleMouseMove = (e, itemName) => {
//     // Get viewport dimensions
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;
    
//     // Calculate position to keep image within viewport
//     let x = e.clientX + 20;
//     let y = e.clientY - 150;
    
//     // Adjust if image would go off screen
//     if (x + 250 > viewportWidth) {
//       x = e.clientX - 270; // Show on left side of cursor
//     }
    
//     if (y < 0) {
//       y = e.clientY + 20; // Show below cursor
//     } else if (y + 250 > viewportHeight) {
//       y = viewportHeight - 270; // Adjust to bottom of viewport
//     }
    
//     setImagePosition({ x, y });
//   };

//   // Reset image error state when hovering new item
//   useEffect(() => {
//     setImageError(false);
//   }, [hoveredItem]);

//   // Toggle menu function
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <style jsx>{`
//         @keyframes fabricWave {
//           0%, 100% { 
//             transform: scale(1) rotate(0deg); 
//             filter: brightness(1) drop-shadow(0 0 0px rgba(213, 165, 65, 0));
//           }
//           25% { 
//             transform: scale(1.02) rotate(-1deg); 
//             filter: brightness(1.1) drop-shadow(0 0 5px rgba(213, 165, 65, 0.3));
//           }
//           50% { 
//             transform: scale(1.05) rotate(1deg); 
//             filter: brightness(1.15) drop-shadow(0 0 10px rgba(213, 165, 65, 0.5));
//           }
//           75% { 
//             transform: scale(1.02) rotate(-0.5deg); 
//             filter: brightness(1.1) drop-shadow(0 0 5px rgba(213, 165, 65, 0.3));
//           }
//         }

//         @keyframes threadGlow {
//           0%, 100% { 
//             opacity: 0.3; 
//             transform: scaleX(0.8) translateX(-10%);
//             background: linear-gradient(90deg, transparent, #d5a541, #b08535, #d5a541, transparent);
//           }
//           50% { 
//             opacity: 1; 
//             transform: scaleX(1.2) translateX(0);
//             background: linear-gradient(90deg, transparent, #d5a541, #f5c542, #b08535, #d5a541, transparent);
//           }
//         }

//         @keyframes shimmerEffect {
//           0% { transform: translateX(-100%) skewX(-15deg); }
//           100% { transform: translateX(200%) skewX(-15deg); }
//         }

//         @keyframes slideUpFade {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           10% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           90% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           100% {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//         }

//         @keyframes pulseScale {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//         }

//         @keyframes imagePop {
//           0% {
//             opacity: 0;
//             transform: scale(0.8) translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }

//         @keyframes rotateGlow {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         .offer-carousel {
//           position: relative;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//         }

//         .offer-item {
//           position: absolute;
//           width: 100%;
//           text-align: center;
//           animation: slideUpFade 3s ease-in-out forwards;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//         }

//         .offer-icon {
//           display: inline-block;
//           animation: pulseScale 2s ease-in-out infinite;
//         }

//         .logo-container {
//           position: relative;
//           display: inline-block;
//           cursor: pointer;
//         }

//         .logo-image {
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           z-index: 2;
//         }

//         .logo-image.fabric-wave {
//           animation: fabricWave 4s ease-in-out infinite;
//         }

//         .logo-thread {
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(90deg, 
//             transparent, 
//             #d5a541, 
//             #b08535, 
//             #f5c542, 
//             #d5a541, 
//             transparent
//           );
//           animation: threadGlow 2.5s ease-in-out infinite;
//           border-radius: 50%;
//           z-index: 1;
//           filter: blur(0.5px);
//         }

//         .logo-shimmer {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.3),
//             transparent
//           );
//           transform: translateX(-100%) skewX(-15deg);
//           animation: shimmerEffect 3s infinite;
//           pointer-events: none;
//           z-index: 3;
//         }

//         .logo-container:hover .logo-image {
//           transform: scale(1.08) translateY(-2px);
//           filter: brightness(1.2) drop-shadow(0 5px 15px rgba(213, 165, 65, 0.4));
//         }

//         .logo-fashion-dots {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//           background-image: radial-gradient(circle at 30% 40%, #d5a541 1px, transparent 1px);
//           background-size: 15px 15px;
//           opacity: 0;
//           transition: opacity 0.5s ease;
//           pointer-events: none;
//           z-index: 0;
//         }

//         .logo-container:hover .logo-fashion-dots {
//           opacity: 0.3;
//         }

//         .logo-fashion-stripe {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: repeating-linear-gradient(
//             45deg,
//             transparent,
//             transparent 5px,
//             rgba(213, 165, 65, 0.1) 5px,
//             rgba(213, 165, 65, 0.1) 10px
//           );
//           opacity: 0;
//           transition: opacity 0.5s ease;
//           pointer-events: none;
//           z-index: 0;
//         }

//         .logo-container:hover .logo-fashion-stripe {
//           opacity: 0.2;
//         }

//         .logo-glitch {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(213, 165, 65, 0.1);
//           opacity: 0;
//           pointer-events: none;
//           z-index: 5;
//           mix-blend-mode: overlay;
//         }

//         .logo-container:hover .logo-glitch {
//           opacity: 0.5;
//           animation: glitchEffect 0.5s ease-in-out;
//         }

//         .hover-image-popup {
//           position: fixed;
//           width: 280px;
//           height: 280px;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.2);
//           border: 4px solid white;
//           z-index: 9999;
//           pointer-events: none;
//           animation: imagePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//           transform-origin: top left;
//           backdrop-filter: blur(5px);
//         }

//         .hover-image-popup img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//           display: block;
//         }

//         .hover-image-popup:hover img {
//           transform: scale(1.1);
//         }

//         .hover-image-popup::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
//           pointer-events: none;
//           z-index: 1;
//         }

//         .hover-image-popup::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: linear-gradient(
//             45deg,
//             transparent 30%,
//             rgba(255, 215, 0, 0.2) 50%,
//             transparent 70%
//           );
//           animation: rotateGlow 4s linear infinite;
//           z-index: 0;
//         }

//         .image-caption {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           padding: 15px;
//           background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
//           color: white;
//           font-size: 16px;
//           font-weight: 600;
//           text-align: center;
//           z-index: 2;
//           transform: translateY(100%);
//           transition: transform 0.3s ease;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           backdrop-filter: blur(5px);
//         }

//         .hover-image-popup:hover .image-caption {
//           transform: translateY(0);
//         }

//         .image-loader {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
//           background-size: 200% 100%;
//           animation: shimmer 1.5s infinite;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .image-loader::after {
//           content: '✨';
//           font-size: 40px;
//           animation: pulseScale 1s infinite;
//         }

//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }

//         .jewelry-badge {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background: rgba(213, 165, 65, 0.9);
//           color: white;
//           padding: 5px 10px;
//           border-radius: 20px;
//           font-size: 12px;
//           font-weight: 600;
//           z-index: 3;
//           backdrop-filter: blur(5px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           animation: pulseScale 2s infinite;
//         }
//       `}</style>

//       {/* Top Announcement Bar with Rotating Offers */}
//       <div className="hidden sm:block bg-[#ddb65c] overflow-hidden border-b border-[#ddb65c30]">
//         <div className="offer-carousel">
//           {offers.map((offer, index) => (
//             <div
//               key={index}
//               className="offer-item"
//               style={{
//                 animation: index === currentOfferIndex 
//                   ? 'slideUpFade 3s ease-in-out forwards' 
//                   : 'none',
//                 opacity: index === currentOfferIndex ? 1 : 0,
//                 pointerEvents: index === currentOfferIndex ? 'auto' : 'none',
//               }}
//             >
//               <span className="offer-icon text-lg">{offer.icon}</span>
//               <span className={`text-sm font-medium bg-gradient-to-r ${offer.color} bg-clip-text text-black`}>
//                 {offer.text}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Top Bar with Rotating Offers */}
//       <div className="sm:hidden bg-[#ddb65c] py-2 overflow-hidden border-b border-[#d5a54120] text-black">
//         <div className="offer-carousel" style={{ height: '30px' }}>
//           {offers.map((offer, index) => (
//             <div
//               key={index}
//               className="offer-item"
//               style={{
//                 animation: index === currentOfferIndex 
//                   ? 'slideUpFade 3s ease-in-out forwards' 
//                   : 'none',
//                 opacity: index === currentOfferIndex ? 1 : 0,
//                 fontSize: '0.8rem',
//                 pointerEvents: index === currentOfferIndex ? 'auto' : 'none',
//               }}
//             >
//               <span className="offer-icon text-base">{offer.icon}</span>
//               <span className={`text-xs font-medium bg-gradient-to-r ${offer.color} bg-clip-text `}>
//                 {offer.text}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav 
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           isScrolled 
//                ? "bg-[#FAE7EB] backdrop-blur-md shadow-lg border-b border-gray-100 py-3" 
//             : "bg-[#FAE7EB] border-b border-gray-100 py-3"
//         }`}
//       >
//         <div className="max-w-9xl ma-auto px-8">
//           <div className="flex items-center justify-between h-16 sm:h-20">
            
//             {/* Left: Logo */}
//             <div className="flex items-center">
//               <Link 
//                 to="/" 
//                 className="block"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <div className="logo-container">
//                   <img
//                     src={logo}
//                     alt="Fabniquo - Fashion Redefined"
//                     className={`logo-image h-10 sm:h-12 lg:h-16 cursor-pointer ${
//                       isHovered ? 'fabric-wave' : ''
//                     }`}
//                   />
//                   {isHovered && (
//                     <>
//                       <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#d5a541] to-[#b08535] rounded-full opacity-50 animate-ping"></div>
//                       <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#d5a541] rounded-full opacity-30 animate-pulse"></div>
//                     </>
//                   )}
//                 </div>
//               </Link>
//             </div>

//             {/* Right: Desktop Navigation + Search + Icons - ALL ON RIGHT SIDE */}
//             <div className="hidden lg:flex items-center space-x-6">
//               {/* Navigation Items */}
//               {desktopNavItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `text-["#D36E6E"] relative text-sm xl:text-[15px] font-semibold tracking-wide transition-all duration-300 group py-2 font-lato ${
//                       isActive 
//                         ? "text-[#d5a541]" 
//                         : "text-[#0e0e0e] hover:text-[#d5a541]"
//                     }`
//                   }
//                   onMouseEnter={(e) => {
//                     setHoveredItem(item.name);
//                     handleMouseMove(e, item.name);
//                   }}
//                   onMouseMove={(e) => handleMouseMove(e, item.name)}
//                   onMouseLeave={() => {
//                     setHoveredItem(null);
//                     setImageError(false);
//                   }}
//                 >
//                   {({ isActive }) => (
//                     <>
//                       <span className="relative z-10">{item.name}</span>
//                       {isActive && (
//                         <span 
//                           className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-6 h-0.5 bg-gradient-to-r from-[#d5a541] to-[#b08535] rounded-full"
//                         ></span>
//                       )}
//                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d5a541] to-[#b08535] group-hover:w-full transition-all duration-400 rounded-full"></span>
//                     </>
//                   )}
//                 </NavLink>
//               ))}

//               {/* Desktop Search */}
//               <div className="relative">
//                 <div className="relative">
//                   <input
//                     style={{marginLeft:"20px"}}
//                     type="text"
//                     placeholder="Search products..."
//                     className="font-latow-48 xl:w-56 py-2.5 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-full outline-none transition-all duration-300 text-sm hover:border-[#d5a54140] focus:border-[#d5a541] focus:shadow-[0_0_15px_#d5a54130]"
//                   />
//                   <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
//                 </div>
//               </div>

//               {/* Action Icons */}
//               <div className="flex items-center space-x-2">
//                 {/* Profile */}
//                 <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
//                   <CgProfile className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
//                   <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d5a541] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                 </button>
                
//                 {/* Wishlist */}
//                 <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
//                   <FaRegHeart className="text-lg sm:text-xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
//                   <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//                 </button>
                
//                 {/* Cart */}
//                 <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
//                   <AiOutlineShoppingCart className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
//                   <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#d5a541] to-[#b08535] text-white text-xs font-bold rounded-full flex items-center justify-center">
//                     3
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Mobile: Menu Button and Icons */}
//             <div className="flex items-center lg:hidden space-x-3">
//               {/* Search Button */}
//               <button 
//                 className="p-2 rounded-full hover:bg-gray-50 transition-colors"
//                 onClick={() => setIsSearchActive(!isSearchActive)}
//               >
//                 <CiSearch className="text-xl text-gray-700" />
//               </button>

//               {/* Cart */}
//               <button className="relative p-2 rounded-full hover:bg-gray-50 transition-colors">
//                 <AiOutlineShoppingCart className="text-xl text-gray-700" />
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#d5a541] to-[#b08535] text-white text-xs font-bold rounded-full flex items-center justify-center">
//                   3
//                 </span>
//               </button>

//               {/* Menu Button */}
//               <button 
//                 className="p-2 rounded-lg hover:bg-gray-50 transition-colors menu-button"
//                 onClick={toggleMenu}
//                 aria-label="Toggle menu"
//               >
//                 {isMenuOpen ? (
//                   <IoClose className="text-2xl text-gray-700" />
//                 ) : (
//                   <FaBars className="text-xl text-gray-700" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Search Bar */}
//           {isSearchActive && (
//             <div className="lg:hidden px-4 py-3 border-t border-gray-100 bg-white">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search for products..."
//                   className="w-full py-3 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-full outline-none text-sm focus:border-[#d5a541] focus:shadow-[0_0_10px_#d5a54120]"
//                   autoFocus
//                 />
//                 <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
//               </div>
//             </div>
//           )}

//           {/* Mobile Menu */}
//           <div 
        
//             className={`lg:hidden mobile-menu fixed left-0 right-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
//               isMenuOpen ? "translate-x-0" : "-translate-x-full"
//             }`}
//             style={{ 
//               top: isScrolled ? '72px' : '80px',
//               height: 'calc(100vh - 72px)',
//               overflowY: 'auto',
//               // border:"2px solid green",
//               // marginTop:"50px"
//             }}
//           >
//             <div  className="h-full overflow-y-auto" >
//               <div className="px-6 py-8">
//                 <div className="space-y-1">
//                   {mobileNavItems.map((item) => (
//                     <NavLink
//                       key={item.name}
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `block py-4 px-4 text-base font-medium rounded-xl transition-all duration-300 ${
//                           isActive 
//                             ? "bg-gradient-to-r from-[#d5a54110] to-[#b0853510] text-[#d5a541] border-l-4 border-[#d5a541] pl-6" 
//                             : "text-[#0e0e0e] hover:bg-gray-50 hover:pl-6"
//                         }`
//                       }
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>


//                 {/* Mobile-only additional links */}
//                 <div className="mt-8 pt-8 border-t border-gray-100">
//                   <div className="flex flex-col gap-4">
//                     <button className="flex items-center gap-4 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors">
//                       <CgProfile className="text-xl" />
//                       <span>My Account</span>
//                     </button>
//                   </div>
                  
//                   {/* Contact info for mobile */}
//                   <div className="mt-8 text-sm text-gray-600">
//                     <p className="font-medium text-gray-900 mb-2">Need help?</p>
//                     <p>📞 Call: +1 (555) 123-4567</p>
//                     <p>✉️ Email: support@fabniquo.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu Overlay */}
//           {isMenuOpen && (
//             <div 
//               // className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
//                             className="lg:hidden fixed inset-0 z-30"

//               onClick={() => setIsMenuOpen(false)}
//               style={{ top: isScrolled ? '72px' : '80px' }}
//             />
//           )}
//         </div>
//       </nav>

//       {/* Hover Image Popup */}
//       {hoveredItem && menuImages[hoveredItem] && (
//         <div 
//           className="hover-image-popup"
//           style={{
//             left: `${imagePosition.x}px`,
//             top: `${imagePosition.y}px`,
//           }}
//         >
//           {!imageError ? (
//             <img 
//               src={menuImages[hoveredItem]} 
//               alt={hoveredItem}
//               onError={() => setImageError(true)}
//               loading="lazy"
//             />
//           ) : (
//             <img 
//               src={fallbackImage} 
//               alt={hoveredItem}
//               loading="lazy"
//             />
//           )}
//           <div className="jewelry-badge">
//             ✨ Premium
//           </div>
//           <div className="image-caption">
//             {hoveredItem} Collection
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;









import React, { useState, useEffect } from "react";
import logo from "../../assets/logo1.png";
import { NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaBars, FaMale, FaFemale, FaChild, FaFire } from "react-icons/fa";
import { GiTShirt, GiHandBag, GiRunningShoe, GiDress } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdOutlineNewReleases, MdCollections, MdContactSupport } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
const isTouchDevice =
  typeof window !== "undefined" && window.innerWidth < 1024;

  // Image mapping for menu items using direct URLs
  const menuImages = {
    "Earings & Studs": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop&auto=format",
    "Rings": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop&auto=format",
    "Bracelets & Bangles": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop&auto=format",
    "Necklace & Pendants": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=300&fit=crop&auto=format",
    "Mangalsutras": "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&h=300&fit=crop&auto=format",
    "Sets": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&auto=format",
    "Gifting": "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=300&h=300&fit=crop&auto=format",
    "Trendings": "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=300&h=300&fit=crop&auto=format",
  };

  // Fallback image in case the main image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&auto=format";

  // Rotating offers text
  const offers = [
    { icon: "🚚", text: "Free Delivery on Orders Over $50", color: "from-[#d5a541] to-[#b08535]" },
    { icon: "🎁", text: "New Customer Coupon: SAVE20", color: "from-[#b08535] to-[#d5a541]" },
    { icon: "🏷️", text: "Flash Sale: 30% Off Select Items", color: "from-[#d5a541] to-[#b08535]" },
    { icon: "⭐", text: "Best Platform to Shop Fashion", color: "from-[#b08535] to-[#d5a541]" },
    { icon: "💳", text: "Easy Returns & Exchange", color: "from-[#d5a541] to-[#b08535]" },
  ];

  // Desktop Navigation items
  const desktopNavItems = [
    { name: "Earings & Studs", path: "category/men" },
    { name: "Rings", path: "/category/women" },
    { name: "Bracelets & Bangles", path: "/category/kids" },
    { name: "Necklace & Pendants", path: "/category/new-arrivals" },
    { name: "Mangalsutras", path: "/category/Mangalsutras" },
    { name: "Sets", path: "/category/sets" },
    { name: "Gifting", path: "/category/gifting" },
    { name: "Trendings", path: "/category/collections" },
  ];

  // Mobile Navigation items
  const mobileNavItems = [
    { name: "Earings & Studs", path: "/men" },
    { name: "Rings", path: "/women" },
    { name: "Bracelets & Bangles", path: "/kids" },
    { name: "Necklace & Pendants", path: "/new-arrivals" },
    { name: "Mangalsutras", path: "/collections" },
    { name: "Sets", path: "/collections" },
    { name: "Gifting", path: "/collections" },
    { name: "Trendings", path: "/collections" },
  ];

  // Rotate offers every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [offers.length]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse move for image popup
  const handleMouseMove = (e, itemName) => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate position to keep image within viewport
    let x = e.clientX + 20;
    let y = e.clientY - 150;
    
    // Adjust if image would go off screen
    if (x + 250 > viewportWidth) {
      x = e.clientX - 270; // Show on left side of cursor
    }
    
    if (y < 0) {
      y = e.clientY + 20; // Show below cursor
    } else if (y + 250 > viewportHeight) {
      y = viewportHeight - 270; // Adjust to bottom of viewport
    }
    
    setImagePosition({ x, y });
  };

  // Reset image error state when hovering new item
  useEffect(() => {
    setImageError(false);
  }, [hoveredItem]);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fabricWave {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            filter: brightness(1) drop-shadow(0 0 0px rgba(213, 165, 65, 0));
          }
          25% { 
            transform: scale(1.02) rotate(-1deg); 
            filter: brightness(1.1) drop-shadow(0 0 5px rgba(213, 165, 65, 0.3));
          }
          50% { 
            transform: scale(1.05) rotate(1deg); 
            filter: brightness(1.15) drop-shadow(0 0 10px rgba(213, 165, 65, 0.5));
          }
          75% { 
            transform: scale(1.02) rotate(-0.5deg); 
            filter: brightness(1.1) drop-shadow(0 0 5px rgba(213, 165, 65, 0.3));
          }
        }

        @keyframes threadGlow {
          0%, 100% { 
            opacity: 0.3; 
            transform: scaleX(0.8) translateX(-10%);
            background: linear-gradient(90deg, transparent, #d5a541, #b08535, #d5a541, transparent);
          }
          50% { 
            opacity: 1; 
            transform: scaleX(1.2) translateX(0);
            background: linear-gradient(90deg, transparent, #d5a541, #f5c542, #b08535, #d5a541, transparent);
          }
        }

        @keyframes shimmerEffect {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }

        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes imagePop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .offer-carousel {
          position: relative;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .offer-item {
          position: absolute;
          width: 100%;
          text-align: center;
          animation: slideUpFade 3s ease-in-out forwards;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .offer-icon {
          display: inline-block;
          animation: pulseScale 2s ease-in-out infinite;
        }

        .logo-container {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }

        .logo-image {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
        }

        .logo-image.fabric-wave {
          animation: fabricWave 4s ease-in-out infinite;
        }

        .logo-thread {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, 
            transparent, 
            #d5a541, 
            #b08535, 
            #f5c542, 
            #d5a541, 
            transparent
          );
          animation: threadGlow 2.5s ease-in-out infinite;
          border-radius: 50%;
          z-index: 1;
          filter: blur(0.5px);
        }

        .logo-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: translateX(-100%) skewX(-15deg);
          animation: shimmerEffect 3s infinite;
          pointer-events: none;
          z-index: 3;
        }

        .logo-container:hover .logo-image {
          transform: scale(1.08) translateY(-2px);
          filter: brightness(1.2) drop-shadow(0 5px 15px rgba(213, 165, 65, 0.4));
        }

        .logo-fashion-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: radial-gradient(circle at 30% 40%, #d5a541 1px, transparent 1px);
          background-size: 15px 15px;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .logo-container:hover .logo-fashion-dots {
          opacity: 0.3;
        }

        .logo-fashion-stripe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 5px,
            rgba(213, 165, 65, 0.1) 5px,
            rgba(213, 165, 65, 0.1) 10px
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .logo-container:hover .logo-fashion-stripe {
          opacity: 0.2;
        }

        .logo-glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(213, 165, 65, 0.1);
          opacity: 0;
          pointer-events: none;
          z-index: 5;
          mix-blend-mode: overlay;
        }

        .logo-container:hover .logo-glitch {
          opacity: 0.5;
          animation: glitchEffect 0.5s ease-in-out;
        }

        .hover-image-popup {
          position: fixed;
           width: clamp(180px, 18vw, 280px);
  height: clamp(180px, 18vw, 280px);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.2);
          border: 4px solid white;
          z-index: 9999;
          pointer-events: none;
          animation: imagePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: top left;
          backdrop-filter: blur(5px);
        }

        .hover-image-popup img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }

        .hover-image-popup:hover img {
          transform: scale(1.1);
        }

        .hover-image-popup::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          pointer-events: none;
          z-index: 1;
        }

        .hover-image-popup::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 215, 0, 0.2) 50%,
            transparent 70%
          );
          animation: rotateGlow 4s linear infinite;
          z-index: 0;
        }

        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 15px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          z-index: 2;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          backdrop-filter: blur(5px);
        }

        .hover-image-popup:hover .image-caption {
          transform: translateY(0);
        }

        .image-loader {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-loader::after {
          content: '✨';
          font-size: 40px;
          animation: pulseScale 1s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .jewelry-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(213, 165, 65, 0.9);
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          z-index: 3;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          animation: pulseScale 2s infinite;
        }
      `}</style>

      {/* Top Announcement Bar with Rotating Offers */}
      <div className="hidden sm:block bg-[#ddb65c] overflow-hidden border-b border-[#ddb65c30]">
        <div className="offer-carousel">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="offer-item"
              style={{
                animation: index === currentOfferIndex 
                  ? 'slideUpFade 3s ease-in-out forwards' 
                  : 'none',
                opacity: index === currentOfferIndex ? 1 : 0,
                pointerEvents: index === currentOfferIndex ? 'auto' : 'none',
              }}
            >
              <span className="offer-icon text-lg">{offer.icon}</span>
              <span className={`text-sm font-medium bg-gradient-to-r ${offer.color} bg-clip-text text-black`}>
                {offer.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Top Bar with Rotating Offers */}
      <div className="sm:hidden bg-[#ddb65c] py-2 overflow-hidden border-b border-[#d5a54120] text-black">
        <div className="offer-carousel" style={{ height: '30px' }}>
          {offers.map((offer, index) => (
            <div
              key={index}
              className="offer-item"
              style={{
                animation: index === currentOfferIndex 
                  ? 'slideUpFade 3s ease-in-out forwards' 
                  : 'none',
                opacity: index === currentOfferIndex ? 1 : 0,
                fontSize: '0.8rem',
                pointerEvents: index === currentOfferIndex ? 'auto' : 'none',
              }}
            >
              <span className="offer-icon text-base">{offer.icon}</span>
              <span className={`text-xs font-medium bg-gradient-to-r ${offer.color} bg-clip-text `}>
                {offer.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all min-h-[72px] duration-300 ${
          isScrolled 
               ? "bg-[#FAE7EB] backdrop-blur-md shadow-lg border-b border-gray-100 py-3" 
            : "bg-[#FAE7EB] border-b border-gray-100 py-3"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="logo-container">
                  <img
                    src={logo}
                    alt="Fabniquo - Fashion Redefined"
                    className={`logo-image h-9 sm:h-11 lg:h-14 xl:h-16 w-auto cursor-pointer ${
                      isHovered ? 'fabric-wave' : ''
                    }`}
                  />
                  {isHovered && (
                    <>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#d5a541] to-[#b08535] rounded-full opacity-50 animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#d5a541] rounded-full opacity-30 animate-pulse"></div>
                    </>
                  )}
                </div>
              </Link>
            </div>

            {/* Right: Desktop Navigation + Search + Icons - ALL ON RIGHT SIDE */}
            <div className="hidden xl:flex items-center gap-3 xl:gap-5">
              {/* Navigation Items */}
              {desktopNavItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-["#D36E6E"] relative text-[13px] xl:text-[15px] whitespace-nowrap font-semibold tracking-wide transition-all duration-300 group py-2 font-lato ${
                      isActive 
                        ? "text-[#d5a541]" 
                        : "text-[#0e0e0e] hover:text-[#d5a541]"
                    }`
                  }
                 onMouseEnter={(e) => {
  if (isTouchDevice) return;
  setHoveredItem(item.name);
  handleMouseMove(e, item.name);
}}
                onMouseMove={(e) => {
  if (isTouchDevice) return;
  handleMouseMove(e, item.name);
}}
                
onMouseLeave={() => {
  if (isTouchDevice) return;
  setHoveredItem(null);
  setImageError(false);
}}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{item.name}</span>
                      {isActive && (
                        <span 
                          className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-6 h-0.5 bg-gradient-to-r from-[#d5a541] to-[#b08535] rounded-full"
                        ></span>
                      )}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d5a541] to-[#b08535] group-hover:w-full transition-all duration-400 rounded-full"></span>
                    </>
                  )}
                </NavLink>
              ))}

              {/* Desktop Search */}
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="ont-lato w-36 xl:w-52 2xl:w-64 py-2.5 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-full outline-none transition-all duration-300 text-sm hover:border-[#d5a54140] focus:border-[#d5a541] focus:shadow-[0_0_15px_#d5a54130]"
                  />
                  <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center space-x-2">
                {/* Profile */}
                <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
                  <CgProfile className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#d5a541] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
                
                {/* Wishlist */}
                <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
                  <FaRegHeart className="text-lg sm:text-xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {/* Cart */}
                <button className="relative p-2 sm:p-2.5 rounded-full hover:bg-gray-50 group transition-all duration-300">
                  <AiOutlineShoppingCart className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#d5a541] transition-colors" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#d5a541] to-[#b08535] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile: Menu Button and Icons */}
            <div className="flex items-center xl:hidden gap-2">
              {/* Search Button */}
              <button 
                className="p-2 rounded-full hover:bg-gray-50 transition-colors"
                onClick={() => setIsSearchActive(!isSearchActive)}
              >
                <CiSearch className="text-xl text-gray-700" />
              </button>

              {/* Cart */}
              <button className="relative p-2 rounded-full hover:bg-gray-50 transition-colors">
                <AiOutlineShoppingCart className="text-xl text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#d5a541] to-[#b08535] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Menu Button */}
            <button
  className="p-2.5 rounded-xl bg-[#d5a54110] hover:bg-[#d5a54120] transition-all duration-300"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  {isMenuOpen ? (
    <IoClose className="text-[22px] text-[#b08535]" />
  ) : (
    <FaBars className="text-[18px] text-[#b08535]" />
  )}
</button>
            </div>
          </div>

          {/* Mobile Search Bar */}
<div
  className={`xl:hidden overflow-hidden transition-all duration-300 ${
    isSearchActive
      ? "max-h-32 opacity-100 py-3 border-t border-gray-100"
      : "max-h-0 opacity-0 py-0 border-0"
  } bg-white`}
>
  <div className="px-4">
    <div className="relative">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full py-3 pl-4 pr-12 text-[14px] bg-gray-50 border border-gray-200 rounded-full outline-none focus:border-[#d5a541] focus:shadow-[0_0_10px_#d5a54120]"
        autoFocus={isSearchActive}
      />
      <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-600" />
    </div>
  </div>
</div>

          {/* Mobile Menu */}
<div
  className={`xl:hidden fixed top-0 left-0 h-screen w-[85%] max-w-[350px] bg-white z-[999] shadow-2xl transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Close Button */}
  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
    <img
      src={logo}
      alt="Logo"
      className="h-10 w-auto object-contain"
    />

    <button
      onClick={() => setIsMenuOpen(false)}
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
    >
      <IoClose className="text-2xl text-gray-700" />
    </button>
  </div>

  {/* Menu Content */}
  <div className="overflow-y-auto h-[calc(100vh-80px)] px-5 py-6">
    <div className="space-y-3">
      {mobileNavItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `block rounded-2xl px-5 py-4 text-[15px] font-medium transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-[#d5a541] to-[#b08535] text-white shadow-lg"
                : "bg-[#d5a54110] text-[#b08535] hover:bg-[#d5a54120]"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>

    {/* Bottom Section */}
    <div className="mt-8 border-t border-gray-100 pt-6">
      <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-gray-50 transition">
        <CgProfile className="text-xl text-gray-700" />
        <span className="text-gray-700 font-medium">My Account</span>
      </button>

      <div className="mt-8 text-sm text-gray-500 space-y-2">
        <p className="font-semibold text-gray-800">Need help?</p>
        <p>📞 +1 (555) 123-4567</p>
        <p>✉️ support@fabniquo.com</p>
      </div>
    </div>
  </div>
</div>

          {/* Mobile Overlay */}
{isMenuOpen && (
  <div
    className="xl:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
    onClick={() => setIsMenuOpen(false)}
  />
)}
        </div>
      </nav>

      {/* Hover Image Popup */}
      {hoveredItem && menuImages[hoveredItem] && (
        <div 
          className="hover-image-popup"
          style={{
            left: `${imagePosition.x}px`,
            top: `${imagePosition.y}px`,
          }}
        >
          {!imageError ? (
            <img 
              src={menuImages[hoveredItem]} 
              alt={hoveredItem}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <img 
              src={fallbackImage} 
              alt={hoveredItem}
              loading="lazy"
            />
          )}
          <div className="jewelry-badge">
            ✨ Premium
          </div>
          <div className="image-caption">
            {hoveredItem} Collection
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
























