

// // main ----------------------------

// import React, { useState } from "react";
// import { Heart, ShoppingBag, Eye, Zap, Star } from "lucide-react";
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
// import { useNavigate } from "react-router-dom";




// const NewArrivals = () => {

//   const fabuniqoGold = "#D1A743";

//   const [visibleProducts, setVisibleProducts] = useState(8);
//   const navigate = useNavigate();

//   function handleNavigate(){
//     navigate("/productDetail")
//   }

//   const jewelleryCategories = [
//     {
//       id: 1,
//       title: "Diamond Stud Earrings",
//       category: "Earrings & Studs",
//       price: "₹2,499",
//       rating: 4.8,
//       reviews: 126,
//           // image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&auto=format&fit=crop"

//       image: Rssred},
//     {
//       id: 2,
//       title: "Multicolor Set",
//        image: Rss203,
//       category: "Set",
//       price: "₹3,999",
//       rating: 4.7,
//       reviews: 94,

//     },
//     {
//       id: 3,
//       title: "Pearl Multicolor set",
//         image: Rss201,
//       category: "Set",
//       price: "₹2,899",
//       rating: 4.6,
//       reviews: 82,
//       // image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop"


//     },
//     {
//       id: 4,
//       title: "Diamond Pendant Necklace",
//        image : vjs231,
//       category: "Necklace & Pendants",
//       price: "₹4,499",
//       rating: 4.9,
//       reviews: 142,
//           // image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop"

//   },
//     {
//       id: 5,
//       title: "Traditional Black Beads Set",
//          image : Rss205,
//       category: "Set",
//       price: "₹5,999",
//       rating: 4.8,
//       reviews: 73,
//       // image: "https://media.istockphoto.com/id/1395172510/photo/mangalsutra-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=pWwaOwx8bpr6Use0B4ODAS2l_-8u1joFJl2KWiT5prU="

//     },
//     {
//       id: 6,
//       title: "Exclusive Jewellery Set",
//         image :vjs230,
//       category: "Jewellery Sets",
//       price: "₹9,999",
//       rating: 4.9,
//       reviews: 210,
//           // image: "https://media.istockphoto.com/id/1175408308/photo/embrace-your-inner-queen-with-these-exquisite-bangles.jpg?s=612x612&w=0&k=20&c=qejgKpgGfC7nLPJ-v0Wi-8gomPv9UMgTkXDyQuYUjYw="
//   },
//     {
//       id: 7,
//       title: "Diamond Pendant Necklace Set",
//           image : vjs231,
//       category: "Set",
//       price: "₹3,199",
//       rating: 4.7,
//       reviews: 89,
//       // image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&auto=format&fit=crop"

//     },
//     {
//       id: 8,
//       title: "Yellow Beads Set",
//           image :Rss206,
//       category: "Set",
//       price: "₹2,299",
//       rating: 4.5,
//       reviews: 65,
//       // image: "https://media.istockphoto.com/id/1944923205/photo/close-up-of-the-wedding-rings-of-the-bride-and-groom-in-a-box.jpg?s=2048x2048&w=is&k=20&c=82FOP9fLbLZAwok0HLNbL7-ZCLVxaavqhYjEmY_WhlE="

//     }, 

//      {
//       id: 9,
//       title: "Golden Stud Earrings",
//           image : Rss222,
//       category: "Earrings & Studs",
//       price: "₹2,499",
//       rating: 4.8,
//       reviews: 126,
//       // image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&auto=format&fit=crop"

//     },
//     {
//       id: 10,
//       title: "Elegant Golden set",
//         image : Rss225,
//       category: "Set",
//       price: "₹3,999",
//       rating: 4.7,
//       reviews: 94,
//       // image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop"

//     },
//     {
//       id: 11,
//       title: "Rose Earings",
//         image : Egur158,
//       category: "Earrings & Studs",
//       price: "₹2,899",
//       rating: 4.6,
//       reviews: 82,
//       // image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop"

//     },
//     {
//       id: 12,
//       title: "Green earrings",
//         image : Egur159,
//       category: "Earrings & Studs",
//       price: "₹4,499",
//       rating: 4.9,
//       reviews: 142,
//       // image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop"

//     },
//   ];

//   const loadMoreProducts = () => {
//     setVisibleProducts(prev => prev + 4);
//   };

//   return (
//     <section className="py-16 bg-white">

//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-10">

//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
//             <Zap className="w-4 h-4 text-[rgb(209,167,67)] animate-pulse" />
//             <span className="font-main text-xs font-medium text-[rgb(209,167,67)] tracking-wider">
//               JEWELLERY COLLECTION
//             </span>
//           </div>

//           <h2 className="text-2xl md:text-3xl font-light text-[#0e0e0e] mb-3">
//             Explore Our <span style={{ color: fabuniqoGold }}>Jewellery</span>
//           </h2>

//           <p className="font-main text-sm text-gray-600">
//             Perfect jewellery for everyday wear, weddings, festivals and parties
//           </p>

//         </div>

//         {/* Grid */}
//         <div className="border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

//           {jewelleryCategories.slice(0, visibleProducts).map((item) => (

//             <div
//             onClick={handleNavigate}
//             style={{border:"2px solid red"}} 
//               key={item.id}
//               className=" border bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
//             >

//               <div className="border relative aspect-square overflow-hidden bg-gray-50">

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

//                   <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm">
//                     <Heart className="w-3 h-3" />
//                   </button>

//                   <button className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm">
//                     <Eye className="w-3 h-3" />
//                   </button>

//                 </div>

//               </div>

//               <div className="p-4">

//                 <span className="text-xs text-gray-500 uppercase">
//                   {item.category}
//                 </span>

//                 <h3 className="text-sm font-semibold text-[#0e0e0e] mt-1 mb-2 group-hover:text-[rgb(209,167,67)] transition-colors">
//                   {item.title}
//                 </h3>

//                 <div className="flex items-center gap-1 mb-2">
//                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   <span className="text-xs font-semibold text-gray-700">
//                     {item.rating}
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     ({item.reviews})
//                   </span>
//                 </div>

//                 <div className="text-sm font-bold mb-4" style={{ color: fabuniqoGold }}>
//                   {item.price}
//                 </div>

//                 <button className="w-full py-2 text-xs font-semibold rounded bg-gray-100 text-gray-800 hover:bg-[rgb(209,167,67)] hover:text-white transition flex items-center justify-center gap-2 group-hover:bg-[rgb(209,167,67)] group-hover:text-white">
//                   <ShoppingBag className="w-3 h-3" />
//                   Shop Now
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//         {/* Load More Button */}
//         {visibleProducts < jewelleryCategories.length && (

//           <div className="text-center mt-12">

//             <button
//               onClick={loadMoreProducts}
//               className="relative px-8 py-3 font-bold text-sm border overflow-hidden group transition-all duration-500 rounded-full active:scale-95 hover:shadow-[0_10px_20px_rgba(209,167,67,0.2)]"
//               style={{
//                 borderColor: "rgb(209,167,67)",
//                 color: "rgb(209,167,67)"
//               }}
//             >

//               <span className="relative z-10 group-hover:text-white transition uppercase tracking-widest">
//                 View All Jewellery
//               </span>

//               <span
//                 className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
//                 style={{ backgroundColor: "rgb(209,167,67)" }}
//               ></span>

//             </button>

//           </div>

//         )}

//       </div>

//     </section>
//   );
// };

// export default NewArrivals;



































// latest---------------------

// import React, { useState } from "react";
// import { Heart, ShoppingBag, Eye, Zap, Star } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // Image imports
// import Rssred from "../../assets/Rset-red (2).png";
// import Rss203 from "../../assets/Rss - 203 (4).png";
// import Rss203a from "../../assets/Rss - 203 (1).png";
// import Rss203b from "../../assets/Rss - 203 (2).png";
// import Rss203c from "../../assets/Rss - 203 (3).png";
// import Rss203d from "../../assets/Rss - 203 (5).png";
// import Rss201 from "../../assets/Rss -201 (3).png";
// import Rss201A from "../../assets/Rss -201 (4).png";
// import Rss204 from "../../assets/Rss-204 (2).png";
// import Rss205 from "../../assets/Rss-205 (3).png";
// import Rss206 from "../../assets/Rss-206  (2).png";
// import Rss222 from "../../assets/Rss-222 (1).png";
// import Rss225 from "../../assets/Rss-225-gold (1).png";
// import Rss225S from "../../assets/Rss-225-silver (1).png";
// import vjs230 from "../../assets/vjs-231-rosegold (1).png";
// import vjs231 from "../../assets/vjs-231-silverWhite (3).png";
// import Egur158 from "../../assets/Egur 158 Red (3).png";
// import Egur159 from "../../assets/Egur-159-Green (1).png";

// const NewArrivals = () => {
//   const fabuniqoGold = "#D1A743";
//   const [visibleProducts, setVisibleProducts] = useState(8);
//   const navigate = useNavigate();

//   const jewelleryCategories = [
//     {
//       id: 1,
//       title: "Stud & Earrings",
//       category: "Earrings & Studs",
//       price: 2499,
//       originalPrice: 4999,
//       discount: 50,
//       rating: 4.8,
//       reviews: 126,
//       image: Rssred,
//       // Using same image for all 5 thumbnails (you can replace with different angles later)
//       images: [Rssred, Rssred, Rssred, Rssred, Rssred],
//       description: "Beautiful diamond stud earrings crafted in 925 sterling silver. These elegant earrings feature brilliant-cut diamonds set in a classic four-prong setting, perfect for everyday wear or special occasions.",
//       material: "925 Sterling Silver",
//       color: "Silver",
//       plating: "Rhodium",
//       occasion: "Everyday Essentials",
//       weight: "3 grams",
//       inStock: true,
//       sku: "DS-001"
//     },
//     {
//       id: 2,
//       title: "Multicolor Set",
//       image: Rss203,
//       images: [Rss203, Rss203a, Rss203b, Rss203c, Rss203d],
//       category: "Set",
//       price: 3999,
//       originalPrice: 7999,
//       discount: 50,
//       rating: 4.7,
//       reviews: 94,
//       description: "A stunning multicolor jewelry set that adds a pop of color to any outfit. Features intricate designs with multiple colored stones set in high-quality metal.",
//       material: "Alloy with Gold Plating",
//       color: "Multicolor",
//       plating: "Gold",
//       occasion: "Festive & Parties",
//       weight: "12 grams",
//       inStock: true,
//       sku: "MS-002"
//     },
//     {
//       id: 3,
//       title: "Pearl Multicolor set",
//       image: Rss206,
//       images: [Rss206, Rss206, Rss206, Rss206, Rss206],
//       category: "Set",
//       price: 2899,
//       originalPrice: 5798,
//       discount: 50,
//       rating: 4.6,
//       reviews: 82,
//       description: "Elegant pearl set combined with multicolor stones for a unique and sophisticated look. Perfect for weddings and festive occasions.",
//       material: "Alloy with Gold Plating",
//       color: "Gold & White",
//       plating: "Gold",
//       occasion: "Weddings & Parties",
//       weight: "10 grams",
//       inStock: true,
//       sku: "PS-003"
//     },
//     {
//       id: 4,
//       title: "Diamond Pendant Necklace",
//       image: vjs231,
//       images: [vjs231, vjs231, vjs231, vjs231, vjs231],
//       category: "Necklace & Pendants",
//       price: 4499,
//       originalPrice: 8998,
//       discount: 50,
//       rating: 4.9,
//       reviews: 142,
//       description: "Exquisite diamond pendant necklace featuring a stunning diamond solitaire on a delicate chain. The perfect balance of elegance and simplicity.",
//       material: "925 Sterling Silver",
//       color: "Silver",
//       plating: "Rhodium",
//       occasion: "Everyday Essentials",
//       weight: "4 grams",
//       inStock: true,
//       sku: "DPN-004"
//     },
//     {
//       id: 5,
//       title: "Traditional Black Beads Set",
//       image: Rss205,
//       images: [Rss205, Rss205, Rss205, Rss205, Rss205],
//       category: "Set",
//       price: 5999,
//       originalPrice: 11998,
//       discount: 50,
//       rating: 4.8,
//       reviews: 73,
//       description: "Traditional black beads set with gold accents, perfect for married women. A timeless piece that adds elegance to any traditional outfit.",
//       material: "Gold Plated Alloy",
//       color: "Gold & Black",
//       plating: "Gold",
//       occasion: "Traditional Events",
//       weight: "15 grams",
//       inStock: true,
//       sku: "TBBS-005"
//     },
//     {
//       id: 6,
//       title: "Exclusive Jewellery Set",
//       image: vjs230,
//       images: [vjs230, vjs230, vjs230, vjs230, vjs230],
//       category: "Jewellery Sets",
//       price: 9999,
//       originalPrice: 19998,
//       discount: 50,
//       rating: 4.9,
//       reviews: 210,
//       description: "An exclusive jewelry set that makes a statement. Complete set including necklace, earrings, and matching bracelet with intricate designs.",
//       material: "22kt Gold Plated",
//       color: "Gold",
//       plating: "22kt Gold",
//       occasion: "Weddings & Special Occasions",
//       weight: "25 grams",
//       inStock: true,
//       sku: "EJS-006"
//     },
//     {
//       id: 7,
//       title: "Diamond Pendant Necklace Set",
//       image: vjs231,
//       images: [vjs231, vjs231, vjs231, vjs231, vjs231],
//       category: "Set",
//       price: 3199,
//       originalPrice: 6398,
//       discount: 50,
//       rating: 4.7,
//       reviews: 89,
//       description: "Matching diamond pendant necklace and earring set. Features sparkling diamonds in a classic design that never goes out of style.",
//       material: "925 Sterling Silver",
//       color: "Silver",
//       plating: "Rhodium",
//       occasion: "Everyday Essentials",
//       weight: "6 grams",
//       inStock: true,
//       sku: "DPNS-007"
//     },
//     {
//       id: 8,
//       title: "Yellow Beads Set",
//       image: Rss206,
//       images: [Rss206, Rss206, Rss206, Rss206, Rss206],
//       category: "Set",
//       price: 2299,
//       originalPrice: 4598,
//       discount: 50,
//       rating: 4.5,
//       reviews: 65,
//       description: "Vibrant yellow beads set that brightens up any outfit. Perfect for festive occasions and adding a pop of color to your jewelry collection.",
//       material: "Gold Plated Alloy",
//       color: "Gold & Yellow",
//       plating: "Gold",
//       occasion: "Festive",
//       weight: "8 grams",
//       inStock: true,
//       sku: "YBS-008"
//     },
//     {
//       id: 9,
//       title: "Golden Stud Earrings",
//       image: Rss222,
//       images: [Rss222, Rss222, Rss222, Rss222, Rss222],
//       category: "Earrings & Studs",
//       price: 2499,
//       originalPrice: 4998,
//       discount: 50,
//       rating: 4.8,
//       reviews: 126,
//       description: "Classic golden stud earrings with a modern twist. Lightweight and comfortable for all-day wear.",
//       material: "Gold Plated Alloy",
//       color: "Gold",
//       plating: "Gold",
//       occasion: "Everyday Essentials",
//       weight: "2 grams",
//       inStock: true,
//       sku: "GSE-009"
//     },
//     {
//       id: 10,
//       title: "Elegant Golden set",
//       image: Rss225,
//       images: [Rss225, Rss225, Rss225, Rss225, Rss225],
//       category: "Set",
//       price: 3999,
//       originalPrice: 7998,
//       discount: 50,
//       rating: 4.7,
//       reviews: 94,
//       description: "An elegant golden set that exudes sophistication. Perfect for parties and special events.",
//       material: "22kt Gold Plated",
//       color: "Gold",
//       plating: "22kt Gold",
//       occasion: "Parties & Events",
//       weight: "14 grams",
//       inStock: true,
//       sku: "EGS-010"
//     },
//     {
//       id: 11,
//       title: "Rose Earrings",
//       image: Egur158,
//       images: [Egur158, Egur158, Egur158, Egur158, Egur158],
//       category: "Earrings & Studs",
//       price: 2899,
//       originalPrice: 5798,
//       discount: 50,
//       rating: 4.6,
//       reviews: 82,
//       description: "Romantic rose-themed earrings with delicate design. Lightweight and perfect for adding a feminine touch to any outfit.",
//       material: "Rose Gold Plated",
//       color: "Rose Gold",
//       plating: "Rose Gold",
//       occasion: "Everyday Essentials",
//       weight: "3 grams",
//       inStock: true,
//       sku: "RE-011"
//     },
//     {
//       id: 12,
//       title: "Green earrings",
//       image: Egur159,
//       images: [Egur159, Egur159, Egur159, Egur159, Egur159],
//       category: "Earrings & Studs",
//       price: 4499,
//       originalPrice: 8998,
//       discount: 50,
//       rating: 4.9,
//       reviews: 142,
//       description: "Stunning green earrings featuring emerald-colored stones. Eye-catching design that adds elegance to any outfit.",
//       material: "Silver with Gold Plating",
//       color: "Gold & Green",
//       plating: "Gold",
//       occasion: "Parties & Events",
//       weight: "4 grams",
//       inStock: true,
//       sku: "GE-012"
//     },
//   ];

//   const loadMoreProducts = () => {
//     setVisibleProducts(prev => prev + 4);
//   };

//   const handleProductClick = (product) => {
//     navigate(`/productDetail/${product.id}`, { state: { product } });
//   };

//   const handleShopNow = (e, product) => {
//     e.stopPropagation();
//     navigate(`/productDetail/${product.id}`, { state: { product } });
//   };

//   const handleWishlist = (e, product) => {
//     e.stopPropagation();
//     console.log("Added to wishlist:", product.title);
//   };

//   const handleQuickView = (e, product) => {
//     e.stopPropagation();
//     console.log("Quick view:", product.title);
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent rounded-full border border-[rgb(209,167,67)]/20 mb-4">
//             <Zap className="w-5 h-5  text-[rgb(209,167,67)] animate-pulse" />
//             {/* <span className="font-lato font-main text-m font-medium text-[rgb(209,167,67)] tracking-wider">
//               JEWELLERY COLLECTION
//             </span> */}
//             <span className="font-lato font-main text-lg font-medium  text-[#D36E6E] tracking-wider">
//   JEWELLERY COLLECTION
// </span>
//           </div>
//           <h2 className="text-2xl md:text-3xl font-light text-[#0e0e0e] mb-3">
//             Explore Our <span style={{ color: fabuniqoGold , fontWeight:"400" ,fontSize:"38px" , textDecoration:"underline"}}>Jewellery</span>
//           </h2>
//           <p className="font-lato font-main text-m text-gray-600">
//             Perfect jewellery for everyday wear, weddings, festivals and parties
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {jewelleryCategories.slice(0, visibleProducts).map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleProductClick(item)}
//               className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group cursor-pointer"
//             >
//               <div className="relative aspect-square overflow-hidden bg-gray-50">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />

//                 {/* Discount Badge */}
//                 {item.discount > 0 && (
//                   <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                     {item.discount}% OFF
//                   </div>
//                 )}

//                 <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <button 
//                     onClick={(e) => handleWishlist(e, item)}
//                     className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm"
//                   >
//                     <Heart className="w-3 h-3" />
//                   </button>
//                   <button 
//                     onClick={(e) => handleQuickView(e, item)}
//                     className="p-2 bg-white rounded-full hover:bg-[rgb(209,167,67)] hover:text-white transition shadow-sm"
//                   >
//                     <Eye className="w-3 h-3" />
//                   </button>
//                 </div>
//               </div>

//               <div className="p-4">
//                 <span className="text-xs text-gray-500 uppercase">
//                   {item.category}
//                 </span>

//                 <h3 className="text-sm font-semibold text-[#0e0e0e] mt-1 mb-2 group-hover:text-[rgb(209,167,67)] transition-colors line-clamp-2">
//                   {item.title}
//                 </h3>

//                 <div className="flex items-center gap-1 mb-2">
//                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   <span className="text-xs font-semibold text-gray-700">
//                     {item.rating}
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     ({item.reviews})
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="text-sm font-bold" style={{ color: fabuniqoGold }}>
//                     ₹{item.price.toLocaleString()}
//                   </span>
//                   {item.originalPrice && (
//                     <>
//                       <span className="text-xs text-gray-400 line-through">
//                         ₹{item.originalPrice.toLocaleString()}
//                       </span>
//                       <span className="text-xs text-green-600 font-medium">
//                         {item.discount}% off
//                       </span>
//                     </>
//                   )}
//                 </div>

//                 <button 
//                   onClick={(e) => handleShopNow(e, item)}
//                   // className="w-full py-2 text-xs font-semibold rounded bg-gray-100 text-gray-800 hover:bg-[rgb(209,167,67)] hover:text-white transition flex items-center justify-center gap-2"
//                                  className="w-full py-2 text-sm font-semibold rounded bg-[#FAE7EB] text-gray-800 hover:bg-[black] hover:text-white transition flex items-center justify-center gap-2"

//                >
//                   <ShoppingBag className="w-3 h-3" />
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleProducts < jewelleryCategories.length && (
//           <div className="text-center mt-12">
//             <button
//               onClick={loadMoreProducts}
//               className="relative px-8 py-3 font-bold text-sm border overflow-hidden group transition-all duration-500 rounded-full active:scale-95 hover:shadow-[0_10px_20px_rgba(209,167,67,0.2)]"
//               style={{
//                 borderColor: "rgb(209,167,67)",
//                 color: "rgb(209,167,67)"
//               }}
//             >
//               <span className="relative z-10 group-hover:text-white transition uppercase tracking-widest">
//                 View All Jewellery
//               </span>
//               <span
//                 className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
//                 style={{ backgroundColor: "rgb(209,167,67)" }}
//               ></span>
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;

















// main ----------------------------

import React, { useState } from "react";
import { Heart, ShoppingBag, Eye, Zap, Star } from "lucide-react";
import Rssred from "../../../assets/Rset-red (2).png"
import Rss203 from "../../../assets/Rss - 203 (4).png"
import Rss203a from "../../../assets/Rss - 203 (1).png";
import Rss203b from "../../../assets/Rss - 203 (2).png";
import Rss203c from "../../../assets/Rss - 203 (3).png";
import Rss203d from "../../../assets/Rss - 203 (5).png";
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
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {

  const fabuniqoGold = "#D1A743";

  const [visibleProducts, setVisibleProducts] = useState(8);
  const navigate = useNavigate();

  const jewelleryCategories = [
    {
      id: 1,
      title: "Diamond Stud Earrings",
      category: "Earrings & Studs",
      price: "₹2,499",
      originalPrice: "₹4,999",
      rating: 4.8,
      reviews: 126,
      discount: 50,
      image: Rssred,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Silver",
      plating: "Rhodium",
      occasion: "Everyday Essentials",
      weight: "2.5g",
      inStock: true,
      sku: "DS-E-001",
      images: [Rssred, Rss203, Rss201, vjs231],
            sold: 90,
    },
    {
      id: 2,
      title: "Multicolor Set",
      image: Rss203,
      category: "Set",
      price: "₹3,999",
      originalPrice: "₹7,999",
      rating: 4.7,
      reviews: 94,
      discount: 20,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Multicolor",
      plating: "Rose Gold",
      occasion: "Festival & Party",
      weight: "4.2g",
      inStock: true,
      sku: "MS-S-002",
      images: [Rss203, Rss203a, Rss203b, Rss203c],
            sold: 12,
    },
    {
      id: 3,
      title: "Pearl Multicolor set",
      image: Rss201,
      category: "Set",
      price: "₹2,899",
      originalPrice: "₹5,799",
      rating: 4.6,
      reviews: 82,
      discount: 10,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "White Gold",
      plating: "Rhodium",
      occasion: "Wedding",
      weight: "3.8g",
      inStock: true,
      sku: "PM-S-003",
      images: [Rss201, Rss203, Rssred, vjs231],
            sold: 124,
    },
    {
      id: 4,
      title: "Diamond Pendant Necklace",
      image: vjs231,
      category: "Necklace & Pendants",
      price: "₹4,499",
      originalPrice: "₹8,999",
      rating: 4.9,
      reviews: 142,
      discount: 50,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Silver",
      plating: "Rhodium",
      occasion: "Everyday Essentials",
      weight: "3.2g",
      inStock: true,
      sku: "DP-N-004",
      images: [vjs231, Rss203, Rss201, Rssred],
            sold: 20,
    },
    {
      id: 5,
      title: "Traditional Black Beads Set",
      image: Rss205,
      category: "Set",
      price: "₹5,999",
      originalPrice: "₹11,999",
      rating: 4.8,
      reviews: 73,
      discount: 50,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Black & Gold",
      plating: "Gold",
      occasion: "Traditional",
      weight: "6.5g",
      inStock: true,
      sku: "TB-S-005",
      images: [Rss205, Rss203, Rss201, vjs231],
            sold: 224,
    },
    {
      id: 6,
      title: "Exclusive Jewellery Set",
      image: vjs230,
      category: "Jewellery Sets",
      price: "₹9,999",
      originalPrice: "₹19,999",
      rating: 4.9,
      reviews: 210,
      discount: 10,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Rose Gold",
      plating: "Rose Gold",
      occasion: "Wedding",
      weight: "8.2g",
      inStock: true,
      sku: "EJ-S-006",
      images: [vjs230, Rss203, Rss201, vjs231],
            sold: 12,
    },
    {
      id: 7,
      title: "Diamond Pendant Necklace Set",
      image: vjs231,
      category: "Set",
      price: "₹3,199",
      originalPrice: "₹6,399",
      rating: 4.7,
      reviews: 89,
      discount: 20,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Silver",
      plating: "Rhodium",
      occasion: "Everyday Essentials",
      weight: "3.5g",
      inStock: true,
      sku: "DP-S-007",
      images: [vjs231, Rss203, Rss201, Rssred],
            sold: 100,
    },
    {
      id: 8,
      title: "Yellow Beads Set",
      image: Rss206,
      category: "Set",
      price: "₹2,299",
      originalPrice: "₹4,599",
      rating: 4.5,
      reviews: 65,
      discount: 30,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Yellow Gold",
      plating: "Gold",
      occasion: "Festival",
      weight: "2.8g",
      inStock: true,
      sku: "YB-S-008",
      images: [Rss206, Rss203, Rss201, vjs231],
            sold: 24,
    },
    {
      id: 9,
      title: "Golden Stud Earrings",
      image: Rss222,
      category: "Earrings & Studs",
      price: "₹2,499",
      originalPrice: "₹4,999",
      rating: 4.8,
      reviews: 126,
      discount: 50,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Gold",
      plating: "Gold",
      occasion: "Everyday Essentials",
      weight: "1.8g",
      inStock: true,
      sku: "GS-E-009",
      images: [Rss222, Rss203, Rss201, vjs231],
            sold: 224,
    },
    {
      id: 10,
      title: "Elegant Golden set",
      image: Rss225,
      category: "Set",
      price: "₹3,999",
      originalPrice: "₹7,999",
      rating: 4.7,
      reviews: 94,
      discount: 10,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Gold",
      plating: "Gold",
      occasion: "Wedding",
      weight: "5.2g",
      inStock: true,
      sku: "EG-S-010",
      images: [Rss225, Rss203, Rss201, vjs231],
            sold: 50,
    },
    {
      id: 11,
      title: "Rose Earrings",
      image: Egur158,
      category: "Earrings & Studs",
      price: "₹2,899",
      originalPrice: "₹5,799",
      rating: 4.6,
      reviews: 82,
      discount: 30,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Rose Gold",
      plating: "Rose Gold",
      occasion: "Party",
      weight: "2.2g",
      inStock: true,
      sku: "RE-E-011",
      images: [Egur158, Rss203, Rss201, vjs231],
            sold: 14,
    },
    {
      id: 12,
      title: "Green earrings",
      image: Egur159,
      category: "Earrings & Studs",
      price: "₹4,499",
      originalPrice: "₹8,999",
      rating: 4.9,
      reviews: 142,
      discount: 50,
      description: "A touch of timeless charm to your jewelry collection with this 925 Pure Silver Chain Pendant Set. Designed with fine detailing and a smooth finish, it offers a graceful look that complements both ethnic and western outfits.",
      material: "925 Sterling Silver",
      color: "Green & Silver",
      plating: "Rhodium",
      occasion: "Everyday Essentials",
      weight: "2.4g",
      inStock: true,
      sku: "GE-E-012",
      images: [Egur159, Rss203, Rss201, vjs231],
            sold: 124,

    },
  ];

  const handleProductClick = (product) => {
    navigate(`/productDetail/${product.id}`, { state: { product } });
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 4);
  };


  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#fffaf5] overflow-hidden">

  <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="text-center mb-10 sm:mb-14">

      {/* TOP BADGE */}
      <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[rgb(209,167,67)]/10 to-transparent border border-[rgb(209,167,67)]/20 shadow-sm mb-5">

        <Zap className="w-4 h-4 text-fab-pink animate-pulse" />

        <span className="font-lato text-[11px] sm:text-sm font-semibold tracking-[0.18em] text-fab-pink uppercase">
          Jewellery Collection
        </span>

      </div>

      {/* HEADING */}
      <h2 className="font-lato text-[28px] sm:text-[38px] md:text-[48px] leading-tight font-light text-[#0e0e0e]">

        Explore Our{" "}

        <span
          className="font-semibold"
          style={{ color: fabuniqoGold }}
        >
          Jewellery
        </span>

      </h2>

      {/* SUBTEXT */}
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-[750px] mx-auto leading-relaxed font-lato px-2">
        Perfect jewellery crafted for everyday elegance, weddings,
        festivals, celebrations and unforgettable moments.
      </p>

    </div>

    {/* PRODUCTS GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-7">

      {jewelleryCategories
        .slice(0, visibleProducts)
        .map((item) => (

        <div
          key={item.id}
          onClick={() => handleProductClick(item)}
          className="group relative bg-white rounded-[22px] sm:rounded-[28px] overflow-hidden border border-gray-100 hover:border-[#d1a74330] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer"
        >

          {/* IMAGE SECTION */}
          <div className="relative overflow-hidden bg-[#fafafa] aspect-[4/5]">

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* DISCOUNT BADGE */}
            {item.discount > 0 && (
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#d36e6e] text-white text-[10px] sm:text-xs font-bold shadow-md backdrop-blur-sm">
                {item.discount}% OFF
              </div>
            )}

            {/* SOLD BADGE */}
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 rounded-full bg-black/75 text-white text-[10px] sm:text-xs backdrop-blur-md shadow">
                🔥 {item.sold} Sold
              </span>
            </div>

            {/* QUICK ACTIONS */}
            <div className="absolute right-3 top-14 flex flex-col gap-2 opacity-0 translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">

              <button className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#d1a743] hover:text-white transition">

                <Heart className="w-4 h-4" />

              </button>

              <button className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#d1a743] hover:text-white transition">

                <Eye className="w-4 h-4" />

              </button>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-3 sm:p-5">

            {/* CATEGORY */}
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-gray-400 font-medium">
              {item.category}
            </span>

            {/* TITLE */}
            <h3 className="mt-2 text-[13px] sm:text-[17px] font-semibold text-[#111] leading-snug group-hover:text-[#d1a743] transition-colors duration-300 line-clamp-2 min-h-[40px] sm:min-h-[52px]">

              {item.title}

            </h3>

            {/* RATING */}
            <div className="flex items-center gap-1 mt-2">

              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

              <span className="text-[11px] sm:text-xs font-semibold text-gray-700">
                {item.rating}
              </span>

              <span className="text-[10px] sm:text-xs text-gray-400">
                ({item.reviews})
              </span>

            </div>

            {/* PRICE */}
            <div className="flex flex-wrap items-center gap-2 mt-3">

              <span
                className="text-sm sm:text-lg font-bold"
                style={{ color: fabuniqoGold }}
              >
                {item.price}
              </span>

              {item.originalPrice && (
                <span className="text-[11px] sm:text-sm text-gray-400 line-through">
                  {item.originalPrice}
                </span>
              )}

            </div>

            {/* BUTTON */}
            <button className="mt-4 w-full py-2.5 sm:py-3 rounded-full bg-[#f8dede] text-[#111] text-[11px] sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#d36e6e] hover:text-white transition-all duration-300">

              <ShoppingBag className="w-4 h-4" />

              Shop Now

            </button>

          </div>

        </div>

      ))}

    </div>

    {/* LOAD MORE */}
    {visibleProducts < jewelleryCategories.length && (

      <div className="flex justify-center mt-12 sm:mt-16">

        <button
          onClick={loadMoreProducts}
          className="group relative overflow-hidden px-7 sm:px-10 py-3 sm:py-4 rounded-full border-2 text-sm sm:text-base font-semibold tracking-[0.12em] uppercase transition-all duration-500 hover:shadow-[0_10px_30px_rgba(209,167,67,0.2)]"
          style={{
            borderColor: fabuniqoGold,
            color: fabuniqoGold,
          }}
        >

          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            View All Jewellery
          </span>

          <span
            className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
            style={{ backgroundColor: fabuniqoGold }}
          />

        </button>

      </div>

    )}

  </div>

</section>
  );
};

export default NewArrivals;






