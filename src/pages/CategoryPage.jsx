
// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Diamond Ring", price: 14200, type: "Rings", discount: 10, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
//   { id: 2, name: "Gold Earrings", price: 6012, type: "Earrings", discount: 20, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },
//   { id: 3, name: "Gold Pendant", price: 6147, type: "Pendants", discount: 5, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },
//   { id: 4, name: "Necklace Set", price: 11200, type: "Necklaces", discount: 15, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
//     { id: 5, name: "Necklace Set", price: 11200, type: "Necklaces", discount: 15, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },

//       { id: 6, name: "Necklace Set", price: 11200, type: "Necklaces", discount: 15, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a" },
//   { id: 7, name: "Gold Pendant", price: 6147, type: "Pendants", discount: 5, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },
//   { id: 8, name: "Gold Pendant", price: 6147, type: "Pendants", discount: 5, img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1" },

// ];

// const CategoryPage = () => {

//   const [selectedType, setSelectedType] = useState([]);
//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [selectedDiscount, setSelectedDiscount] = useState(null);
//   const [activeTopFilter, setActiveTopFilter] = useState("All");

//   const clearFilters = () => {
//     setSelectedType([]);
//     setSelectedPrice(null);
//     setSelectedDiscount(null);
//     setActiveTopFilter("All");
//   };

//   const handleTypeChange = (type) => {
//     if (selectedType.includes(type)) {
//       setSelectedType(selectedType.filter((t) => t !== type));
//     } else {
//       setSelectedType([...selectedType, type]);
//     }
//   };

//   const filteredProducts = products.filter((p) => {

//     if (selectedType.length && !selectedType.includes(p.type)) return false;

//     if (selectedPrice === "under5k" && p.price > 5000) return false;
//     if (selectedPrice === "5k10k" && (p.price < 5000 || p.price > 10000)) return false;
//     if (selectedPrice === "10k20k" && (p.price < 10000 || p.price > 20000)) return false;

//     if (selectedDiscount && p.discount < selectedDiscount) return false;

//     return true;
//   });

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 py-8 bg-white">

//       {/* TOP FILTER BUTTONS */}

//       <div className="flex flex-wrap gap-3 mb-6">
//         {["All", "Fast Delivery", "Latest Designs", "Store Pickup", "Try at Home"].map((item) => (
//           <button
//             key={item}
//             onClick={() => setActiveTopFilter(item)}
//             className={`px-4 py-2 rounded-full border text-sm transition 
//               ${activeTopFilter === item 
//               ? "bg-[#D1A743] text-white border-[#D1A743]" 
//               : "bg-white text-gray-700 hover:border-[#D1A743]"}`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       <div className="flex gap-8">

//         {/* SIDEBAR FILTERS */}

//         <div className="w-[260px] hidden lg:block">

//           <div className="flex justify-between mb-4">
//             <h3 className="font-semibold text-gray-700">FILTERS</h3>

//             <button
//               onClick={clearFilters}
//               className="text-sm text-pink-500 hover:underline"
//             >
//               CLEAR ALL
//             </button>
//           </div>

//           {/* PRICE FILTER */}

//           <div className="mb-8">
//             <h4 className="font-medium mb-3">Price</h4>

//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => setSelectedPrice("under5k")}
//               />{" "}
//               Under ₹5,000
//             </label>

//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => setSelectedPrice("5k10k")}
//               />{" "}
//               ₹5,000 - ₹10,000
//             </label>

//             <label className="block mb-2">
//               <input
//                 type="radio"
//                 name="price"
//                 onChange={() => setSelectedPrice("10k20k")}
//               />{" "}
//               ₹10,000 - ₹20,000
//             </label>
//           </div>

//           {/* PRODUCT TYPE */}

//           <div className="mb-8">
//             <h4 className="font-medium mb-3">Product Type</h4>

//             {["Rings", "Earrings", "Necklaces", "Pendants"].map((type) => (
//               <label key={type} className="block mb-2">

//                 <input
//                   type="checkbox"
//                   checked={selectedType.includes(type)}
//                   onChange={() => handleTypeChange(type)}
//                 />

//                 <span className="ml-2">{type}</span>

//               </label>
//             ))}
//           </div>

//           {/* DISCOUNT */}

//           <div>
//             <h4 className="font-medium mb-3">Discounts</h4>

//             <label className="block mb-2">
//               <input type="radio" name="discount" onChange={() => setSelectedDiscount(10)} />
//               <span className="ml-2">10% or more</span>
//             </label>

//             <label className="block mb-2">
//               <input type="radio" name="discount" onChange={() => setSelectedDiscount(20)} />
//               <span className="ml-2">20% or more</span>
//             </label>

//           </div>

//         </div>

//         {/* PRODUCTS */}

//         <div className="flex-1">

//           {/* SORT */}

//           <div className="flex justify-end mb-6">

//             <select className="border rounded-md px-3 py-2 text-sm">
//               <option>Sort By: Featured</option>
//               <option>Price Low → High</option>
//               <option>Price High → Low</option>
//             </select>

//           </div>

//           {/* PRODUCT GRID */}

//           <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

//             {filteredProducts.map((product) => (

//               <div
//                 key={product.id}
//                 className="border rounded-xl p-4 hover:shadow-lg transition"
//               >

//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-[220px] object-contain"
//                 />

//                 <h3 className="mt-3 font-medium">{product.name}</h3>

//                 <p className="text-[#D1A743] font-semibold">
//                   ₹{product.price.toLocaleString()}
//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default CategoryPage;














// import React, { useState, useEffect } from "react";


// import Rssred  from "../assets/Rset-red (2).png"
// import Rss203 from "../assets/Rss - 203 (4).png"
// import Rss203a from "../assets/Rss - 203 (1).png";
// import Rss203b from "../assets/Rss - 203 (2).png";
// import Rss203c from "../assets/Rss - 203 (3).png";
// import Rss203d from "../assets/Rss - 203 (5).png";
// import Rss201 from "../assets/Rss -201 (3).png"
// import Rss201A from "../assets/Rss -201 (4).png"
// import Rss204 from "../assets/Rss-204 (2).png"
// import Rss205 from "../assets/Rss-205 (3).png"
// import Rss206 from "../assets/Rss-206  (2).png"
// import Rss222 from "../assets/Rss-222 (1).png"
// import Rss225 from "../assets/Rss-225-gold (1).png"
// import Rss225S from "../assets/Rss-225-silver (1).png"
// import vjs230 from "../assets/vjs-231-rosegold (1).png"
// import vjs231 from "../assets/vjs-231-silverWhite (3).png"
// import Egur158 from "../assets/Egur 158 Red (3).png"
// import Egur159 from "../assets/Egur-159-Green (1).png"
// // import vjs231 from "../../assets/vjs-231-silverWhite (3).png"
// import vjs230d from "../assets/vjs-230 (5).png"
// import { Filter } from "lucide-react";




// // This would be replaced with API data later
// const initialProducts = [
//   { 
//     id: 1, 
//     name: "Diamond Ring", 
//     price: 14200, 
//     type: "Rings", 
//     discount: 10, 
//     // img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     img:Rss203,
//     material: "platinum",
//     occasion: "party",
//     weight: 2.5,
//     rating: 4.5,
//     inStock: true
//   },
//   { 
//     id: 2, 
//     name: "Gold Earrings", 
//     price: 6012, 
//     type: "Earrings", 
//     discount: 20, 
//     // img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
//     img:Rss201A,
//     material: "gold",
//     occasion: "festival",
//     weight: 3.2,
//     rating: 4.2,
//     inStock: true
//   },
//   { 
//     id: 3, 
//     name: "Gold Pendant", 
//     price: 6147, 
//     type: "Pendants", 
//     discount: 5, 
//     // img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
//     img:Rss204,
//     material: "gold",
//     occasion: "office",
//     weight: 1.8,
//     rating: 4.0,
//     inStock: true
//   },
//   { 
//     id: 4, 
//     name: "Necklace Set", 
//     price: 11200, 
//     type: "Necklaces", 
//     discount: 15, 
//     // img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     img:Rss205,
//     material: "silver",
//     occasion: "wedding",
//     weight: 4.5,
//     rating: 4.8,
//     inStock: true
//   },
//   { 
//     id: 5, 
//     name: "Platinum Ring", 
//     price: 22500, 
//     type: "Rings", 
//     discount: 12, 
//     // img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     img:vjs231,
//     material: "platinum",
//     occasion: "engagement",
//     weight: 3.8,
//     rating: 4.9,
//     inStock: true
//   },
//   { 
//     id: 6, 
//     name: "Silver Earrings", 
//     price: 3500, 
//     type: "Earrings", 
//     discount: 25, 
//     // img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
//     img:vjs230,
//     material: "silver",
//     occasion: "everyday",
//     weight: 1.2,
//     rating: 4.3,
//     inStock: true
//   },
//   { 
//     id: 7, 
//     name: "Gold Necklace", 
//     price: 18400, 
//     type: "Necklaces", 
//     discount: 8, 
//     // img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     img:Rss222,
//     material: "gold",
//     occasion: "festival",
//     weight: 6.2,
//     rating: 4.6,
//     inStock: true
//   },
//   { 
//     id: 8, 
//     name: "Diamond Pendant", 
//     price: 8950, 
//     type: "Pendants", 
//     discount: 15, 
//     // img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
//     img:Egur158,
//     material: "platinum",
//     occasion: "party",
//     weight: 1.5,
//     rating: 4.4,
//     inStock: true
//   },
//   { 
//     id: 9, 
//     name: "Office Wear Set", 
//     price: 7500, 
//     type: "Sets", 
//     discount: 10, 
//     // img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     img:Rss206,
//     material: "silver",
//     occasion: "office",
//     weight: 3.0,
//     rating: 4.1,
//     inStock: true
//   },
//   { 
//     id: 10, 
//     name: "Party Wear Earrings", 
//     price: 4200, 
//     type: "Earrings", 
//     discount: 18, 
//     // img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
//     img:Rss225,
//     material: "gold",
//     occasion: "party",
//     weight: 2.2,
//     rating: 4.7,
//     inStock: true
//   },
//   { 
//     id: 11, 
//     name: "Wedding Necklace", 
//     price: 28500, 
//     type: "Necklaces", 
//     discount: 20, 
//     // img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
//     img:Egur159,
//     material: "gold",
//     occasion: "wedding",
//     weight: 8.5,
//     rating: 4.9,
//     inStock: true
//   },
//   { 
//     id: 12, 
//     name: "Festival Special Set", 
//     price: 12400, 
//     type: "Sets", 
//     discount: 22, 
//     // img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1",
//     img:vjs230d,
//     material: "silver",
//     occasion: "festival",
//     weight: 5.2,
//     rating: 4.5,
//     inStock: true
//   },
// ];

// // Filter configurations - easy to modify and extend
// const FILTER_CONFIG = {
//   material: {
//     title: "Coating",
//     options: [
//       { value: "gold", label: "Gold" },
//       { value: "silver", label: "Silver" },
//       { value: "platinum", label: "Platinum" },
//       { value: "diamond", label: "Diamond" }
//     ]
//   },
//   occasion: {
//     title: "Occasion",
//     options: [
//       { value: "everyday", label: "Everyday Wear" },
//       { value: "office", label: "Office" },
//       { value: "party", label: "Party" },
//       { value: "festival", label: "Festival" },
//       { value: "wedding", label: "Wedding" },
//       { value: "engagement", label: "Engagement" }
//     ]
//   },
//   weight: {
//     title: "Weight",
//     options: [
//       { value: "0-2", label: "0 - 2 g", min: 0, max: 2 },
//       { value: "2-5", label: "2 - 5 g", min: 2, max: 5 },
//       { value: "5-10", label: "5 - 10 g", min: 5, max: 10 },
//       { value: "10+", label: "10 g & above", min: 10, max: Infinity }
//     ]
//   },
//   type: {
//     title: "Product Type",
//     options: [
//       { value: "Rings", label: "Rings" },
//       { value: "Earrings", label: "Earrings" },
//       { value: "Necklaces", label: "Necklaces" },
//       { value: "Pendants", label: "Pendants" },
//       { value: "Sets", label: "Sets" }
//     ]
//   },
//   price: {
//     title: "Price Range",
//     options: [
//       { value: "under5k", label: "Under ₹5,000", min: 0, max: 5000 },
//       { value: "5k10k", label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
//       { value: "10k20k", label: "₹10,000 - ₹20,000", min: 10000, max: 20000 },
//       { value: "20k50k", label: "₹20,000 - ₹50,000", min: 20000, max: 50000 },
//       { value: "50k+", label: "₹50,000 & above", min: 50000, max: Infinity }
//     ]
//   },
//   discount: {
//     title: "Discount",
//     options: [
//       { value: 10, label: "10% or more" },
//       { value: 20, label: "20% or more" },
//       { value: 30, label: "30% or more" },
//       { value: 40, label: "40% or more" },
//       { value: 50, label: "50% or more" }
//     ]
//   },
//   rating: {
//     title: "Customer Rating",
//     options: [
//       { value: 4, label: "4★ & above" },
//       { value: 3, label: "3★ & above" },
//       { value: 2, label: "2★ & above" }
//     ]
//   },
//   color:{
//     title:"Color",
//     options:[
//       {value:red , label:"red"},
//       {value:green , label:"green"},
//       {value:blue , label:"blue"}
//     ]
//   }
// };

// const CategoryPage = () => {
//   // State for products and loading
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Filter states
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedMaterials, setSelectedMaterials] = useState([]);
//   const [selectedOccasions, setSelectedOccasions] = useState([]);
//   const [selectedWeight, setSelectedWeight] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [selectedDiscount, setSelectedDiscount] = useState(null);
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedColor , setSelectedColor] = useState(null);
//   const [activeTopFilter, setActiveTopFilter] = useState("All");
 
  
//   // Sorting state
//   const [sortBy, setSortBy] = useState("featured");
  
//   // Mobile filter visibility
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   // Simulate API fetch
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 500));
//         setProducts(initialProducts);
//         setError(null);
//       } catch (err) {
//         setError("Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Clear all filters
//   const clearFilters = () => {
//     setSelectedTypes([]);
//     setSelectedMaterials([]);
//     setSelectedOccasions([]);
//     setSelectedWeight(null);
//     setSelectedPrice(null);
//     setSelectedDiscount(null);
//     setSelectedRating(null);
//     setActiveTopFilter("All");
//     setSortBy("featured");
//   };

//   // Check if any filter is active
//   const hasActiveFilters = () => {
//     return selectedTypes.length > 0 ||
//       selectedMaterials.length > 0 ||
//       selectedOccasions.length > 0 ||
//       selectedWeight !== null ||
//       selectedPrice !== null ||
//       selectedDiscount !== null ||
//       selectedRating !== null ||
//       activeTopFilter !== "All";
//   };

//   // Generic checkbox handler
//   const handleCheckboxChange = (value, selectedArray, setSelectedArray) => {
//     if (selectedArray.includes(value)) {
//       setSelectedArray(selectedArray.filter(item => item !== value));
//     } else {
//       setSelectedArray([...selectedArray, value]);
//     }
//   };

//   // Filter products based on all criteria
//   const filteredProducts = products.filter((p) => {
//     // Product type filter
//     if (selectedTypes.length && !selectedTypes.includes(p.type)) return false;

//     // Material filter
//     if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false;

//     // Occasion filter
//     if (selectedOccasions.length && !selectedOccasions.includes(p.occasion)) return false;

//     // Weight filter
//     if (selectedWeight) {
//       const weightOption = FILTER_CONFIG.weight.options.find(opt => opt.value === selectedWeight);
//       if (weightOption && (p.weight < weightOption.min || p.weight > weightOption.max)) return false;
//     }

//     // Price filter
//     if (selectedPrice) {
//       const priceOption = FILTER_CONFIG.price.options.find(opt => opt.value === selectedPrice);
//       if (priceOption && (p.price < priceOption.min || p.price > priceOption.max)) return false;
//     }

//     // Discount filter
//     if (selectedDiscount && p.discount < selectedDiscount) return false;

//     // Rating filter
//     if (selectedRating && p.rating < selectedRating) return false;

//     // Top filters
//     if (activeTopFilter === "Fast Delivery" && p.id % 2 !== 0) return false; // Example logic
//     if (activeTopFilter === "Latest Designs" && p.id > 8) return false; // Example logic

//     return true;
//   });

//   // Sort products
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch(sortBy) {
//       case "price-low":
//         return a.price - b.price;
//       case "price-high":
//         return b.price - a.price;
//       case "rating":
//         return b.rating - a.rating;
//       case "discount":
//         return b.discount - a.discount;
//       default:
//         return a.id - b.id; // Featured (default)
//     }
//   });

//   // Count active filters
//   const getActiveFilterCount = () => {
//     let count = 0;
//     if (selectedTypes.length) count += selectedTypes.length;
//     if (selectedMaterials.length) count += selectedMaterials.length;
//     if (selectedOccasions.length) count += selectedOccasions.length;
//     if (selectedWeight) count += 1;
//     if (selectedPrice) count += 1;
//     if (selectedDiscount) count += 1;
//     if (selectedRating) count += 1;
//     if (activeTopFilter !== "All") count += 1;
//     return count;
//   };

//   if (loading) {
//     return (
//       <div className="max-w-[1400px] mx-auto px-4 py-8">
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D1A743]"></div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-[1400px] mx-auto px-4 py-8">
//         <div className="text-center text-red-600">
//           <p>{error}</p>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="mt-4 bg-[#D1A743] text-white px-4 py-2 rounded"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 py-8">
//       {/* Active Filters Summary */}
//       {hasActiveFilters() && (
//         <div className="mb-4 flex flex-wrap items-center gap-2">
//           <span className="text-sm text-gray-600">Active Filters:</span>
//           {selectedTypes.map(type => (
//             <span key={type} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               {type}
//               <button onClick={() => handleCheckboxChange(type, selectedTypes, setSelectedTypes)} className="ml-1 text-gray-500 hover:text-red-500">×</button>
//             </span>
//           ))}
//           {selectedMaterials.map(material => (
//             <span key={material} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               {material.charAt(0).toUpperCase() + material.slice(1)}
//               <button onClick={() => handleCheckboxChange(material, selectedMaterials, setSelectedMaterials)} className="ml-1 text-gray-500 hover:text-red-500">×</button>
//             </span>
//           ))}
//           {activeTopFilter !== "All" && (
//             <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               {activeTopFilter}
//               <button onClick={() => setActiveTopFilter("All")} className="ml-1 text-gray-500 hover:text-red-500">×</button>
//             </span>
//           )}
//           <button 
//             onClick={clearFilters}
//             className="text-sm text-[#D1A743] hover:underline ml-2"
//           >
//             Clear All
//           </button>
//         </div>
//       )}

//       {/* TOP FILTER BUTTONS */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         {["All", "Fast Delivery", "Latest Designs", "Store Pickup", "Try at Home", "Best Sellers", "New Arrivals"].map((item) => (
//           <button
//             key={item}
//             onClick={() => setActiveTopFilter(item)}
//             className={`px-4 py-2 rounded-full border text-sm transition whitespace-nowrap
//               ${activeTopFilter === item 
//               ? "bg-[#D1A743] text-white border-[#D1A743]" 
//               : "bg-white text-gray-700 hover:border-[#D1A743]"}`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Mobile Filter Button */}
//       <div className="lg:hidden mb-4">
//         <button
//           onClick={() => setShowMobileFilters(!showMobileFilters)}
//           className="w-full bg-white border rounded-lg px-4 py-3 flex items-center justify-between"
//         >
//           <span className="font-medium">Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}</span>
//           <span>{showMobileFilters ? '▲' : '▼'}</span>
//         </button>
//       </div>

//       <div className="flex gap-8">
//         {/* SIDEBAR FILTERS */}
//         <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block w-full lg:w-[280px]`}>
//           <div className="bg-white p-6 rounded-lg border sticky top-4">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="font-semibold text-lg">FILTERS</h3>
//               <button
//                 onClick={clearFilters}
//                 className="text-sm text-[#D1A743] hover:underline"
//               >
//                 CLEAR ALL {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
//               </button>
//             </div>

//             {/* Material Type Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.material.title}</h4>
//               {FILTER_CONFIG.material.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={selectedMaterials.includes(option.value)}
//                     onChange={() => handleCheckboxChange(option.value, selectedMaterials, setSelectedMaterials)}
//                     className="w-4 h-4 text-[#D1A743] rounded border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Occasion Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.occasion.title}</h4>
//               {FILTER_CONFIG.occasion.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={selectedOccasions.includes(option.value)}
//                     onChange={() => handleCheckboxChange(option.value, selectedOccasions, setSelectedOccasions)}
//                     className="w-4 h-4 text-[#D1A743] rounded border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Product Type Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.type.title}</h4>
//               {FILTER_CONFIG.type.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={selectedTypes.includes(option.value)}
//                     onChange={() => handleCheckboxChange(option.value, selectedTypes, setSelectedTypes)}
//                     className="w-4 h-4 text-[#D1A743] rounded border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Weight Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.weight.title}</h4>
//               {FILTER_CONFIG.weight.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="weight"
//                     checked={selectedWeight === option.value}
//                     onChange={() => setSelectedWeight(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Price Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.price.title}</h4>
//               {FILTER_CONFIG.price.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="price"
//                     checked={selectedPrice === option.value}
//                     onChange={() => setSelectedPrice(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Discount Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.discount.title}</h4>
//               {FILTER_CONFIG.discount.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="discount"
//                     checked={selectedDiscount === option.value}
//                     onChange={() => setSelectedDiscount(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Rating Filter */}
//             <div className="mb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.rating.title}</h4>
//               {FILTER_CONFIG.rating.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="rating"
//                     checked={selectedRating === option.value}
//                     onChange={() => setSelectedRating(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

        
//           </div>
//         </div>

//         {/* PRODUCTS SECTION */}
//         <div className="flex-1">
//           {/* Header with Results Count and Sort */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//             <div className="text-sm text-gray-600">
//               Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
//             </div>

//             <div className="flex items-center gap-2 w-full sm:w-auto">
//               <select 
//                 className="border rounded-md px-3 py-2 text-sm flex-1 sm:flex-none"
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//               >
//                 <option value="featured">Sort By: Featured</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="rating">Customer Rating</option>
//                 <option value="discount">Discount</option>
//               </select>
//             </div>
//           </div>

//           {/* No Results Message */}
//           {sortedProducts.length === 0 && (
//             <div className="text-center py-12">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
//               <p className="text-gray-600 mb-4">Try adjusting your filters</p>
//               <button
//                 onClick={clearFilters}
//                 className="bg-[#D1A743] text-white px-6 py-2 rounded-lg hover:bg-[#b78e34] transition"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           )}

//           {/* PRODUCT GRID */}
//           <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
//             {sortedProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="border rounded-xl p-3 md:p-4 hover:shadow-lg transition cursor-pointer group"
//               >
//                 <div className="relative">
//                   <img
//                     src={product.img}
//                     alt={product.name}
//                     className="w-full h-[150px] md:h-[200px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//                   />
//                   {product.discount > 0 && (
//                     <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   )}
//                 </div>

//                 <h3 className="mt-3 font-medium text-sm md:text-base">{product.name}</h3>
                
//                 <div className="flex items-center gap-1 mt-1">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
//                   ))}
//                   <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
//                 </div>

//                 <div className="mt-2 flex items-center gap-2">
//                   <p className="text-[#D1A743] font-semibold text-sm md:text-base">
//                     ₹{product.price.toLocaleString()}
//                   </p>
//                   {product.discount > 0 && (
//                     <p className="text-xs text-gray-400 line-through">
//                       ₹{(product.price * (100 + product.discount) / 100).toFixed(0)}
//                     </p>
//                   )}
//                 </div>

//                 <div className="mt-2 flex flex-wrap gap-1">
//                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full">
//                     {product.material}
//                   </span>
//                   <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full">
//                     {product.occasion}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;









// import React, { useState, useEffect } from "react";

// import Rssred  from "../assets/Rset-red (2).png"
// import Rss203 from "../assets/Rss - 203 (4).png"
// import Rss203a from "../assets/Rss - 203 (1).png";
// import Rss203b from "../assets/Rss - 203 (2).png";
// import Rss203c from "../assets/Rss - 203 (3).png";
// import Rss203d from "../assets/Rss - 203 (5).png";
// import Rss201 from "../assets/Rss -201 (3).png"
// import Rss201A from "../assets/Rss -201 (4).png"
// import Rss204 from "../assets/Rss-204 (2).png"
// import Rss205 from "../assets/Rss-205 (3).png"
// import Rss206 from "../assets/Rss-206  (2).png"
// import Rss222 from "../assets/Rss-222 (1).png"
// import Rss225 from "../assets/Rss-225-gold (1).png"
// import Rss225S from "../assets/Rss-225-silver (1).png"
// import vjs230 from "../assets/vjs-231-rosegold (1).png"
// import vjs231 from "../assets/vjs-231-silverWhite (3).png"
// import Egur158 from "../assets/Egur 158 Red (3).png"
// import Egur159 from "../assets/Egur-159-Green (1).png"
// import vjs230d from "../assets/vjs-230 (5).png"




// // This would be replaced with API data later
// const initialProducts = [
//   { 
//     id: 1, 
//     name: "Diamond Ring", 
//     price: 60, 
//     type: "Rings", 
//     discount: 10, 
//     img: Rss203,
//     material: "platinum",
//     occasion: "party",
//     weight: 2.5,
//     rating: 4.5,
//     inStock: true,
//     color: "silver"
//   },
//   { 
//     id: 2, 
//     name: "Gold Earrings", 
//     price: 250, 
//     type: "Earrings", 
//     discount: 20, 
//     img: Rss201A,
//     material: "gold",
//     occasion: "festival",
//     weight: 3.2,
//     rating: 4.2,
//     inStock: true,
//     color: "gold"
//   },
//   { 
//     id: 3, 
//     name: "Gold Pendant", 
//     price: 750, 
//     type: "Pendants", 
//     discount: 5, 
//     img: Rss204,
//     material: "gold",
//     occasion: "office",
//     weight: 1.8,
//     rating: 4.0,
//     inStock: true,
//     color: "gold"
//   },
//   { 
//     id: 4, 
//     name: "Necklace Set", 
//     price: 500, 
//     type: "Necklaces", 
//     discount: 15, 
//     img: Rss205,
//     material: "silver",
//     occasion: "wedding",
//     weight: 4.5,
//     rating: 4.8,
//     inStock: true,
//     color: "silver"
//   },
//   { 
//     id: 5, 
//     name: "Platinum Ring", 
//     price: 900, 
//     type: "Rings", 
//     discount: 12, 
//     img: vjs231,
//     material: "platinum",
//     occasion: "engagement",
//     weight: 3.8,
//     rating: 4.9,
//     inStock: true,
//     color: "silver"
//   },
//   { 
//     id: 6, 
//     name: "Silver Earrings", 
//     price: 350, 
//     type: "Earrings", 
//     discount: 25, 
//     img: vjs230,
//     material: "silver",
//     occasion: "everyday",
//     weight: 1.2,
//     rating: 4.3,
//     inStock: true,
//     color: "silver"
//   },
//   { 
//     id: 7, 
//     name: "Gold Necklace", 
//     price: 400, 
//     type: "Necklaces", 
//     discount: 8, 
//     img: Rss222,
//     material: "gold",
//     occasion: "festival",
//     weight: 6.2,
//     rating: 4.6,
//     inStock: true,
//     color: "gold"
//   },
//   { 
//     id: 8, 
//     name: "Diamond Pendant", 
//     price: 80, 
//     type: "Pendants", 
//     discount: 15, 
//     img: Egur158,
//     material: "platinum",
//     occasion: "party",
//     weight: 1.5,
//     rating: 4.4,
//     inStock: true,
//     color: "red",
 
//   },
//   { 
//     id: 9, 
//     name: "Office Wear Set", 
//     price: 750, 
//     type: "Sets", 
//     discount: 10, 
//     img: Rss206,
//     material: "silver",
//     occasion: "office",
//     weight: 3.0,
//     rating: 4.1,
//     inStock: true,
//     color: "silver"
//   },
//   { 
//     id: 10, 
//     name: "Party Wear Earrings", 
//     price: 150, 
//     type: "Earrings", 
//     discount: 18, 
//     img: Rss225,
//     material: "gold",
//     occasion: "party",
//     weight: 2.2,
//     rating: 4.7,
//     inStock: true,
//     color: "gold"
//   },
//   { 
//     id: 11, 
//     name: "Wedding Necklace", 
//     price: 280, 
//     type: "Necklaces", 
//     discount: 20, 
//     img: Egur159,
//     material: "gold",
//     occasion: "wedding",
//     weight: 8.5,
//     rating: 4.9,
//     inStock: true,
//     color: "green"
//   },
//   { 
//     id: 12, 
//     name: "Festival Special Set", 
//     price: 30, 
//     type: "Sets", 
//     discount: 22, 
//     img: vjs230d,
//     material: "silver",
//     occasion: "festival",
//     weight: 5.2,
//     rating: 4.5,
//     inStock: true,
//     color: "silver"
//   },
// ];

// // Filter configurations - easy to modify and extend
// const FILTER_CONFIG = {
//   material: {
//     title: "Plating",
//     options: [
//       { value: "gold", label: "Gold" },
//             { value: "rosegold", label: "Rose Gold" },

//       { value: "silver", label: "Silver" },
//             { value: "oxidised", label: "Oxidised" },

//       // { value: "platinum", label: "Platinum" },
//       // { value: "diamond", label: "Diamond" }
//     ]
//   },
//   occasion: {
//     title: "Occasion",
//     options: [
//       { value: "everyday", label: "Everyday Wear" },
//       { value: "office", label: "Office" },
//       { value: "party", label: "Party" },
//       { value: "festival", label: "Festival" },
//       { value: "wedding", label: "Wedding" },
//       // { value: "engagement", label: "Engagement" }
//     ]
//   },
//   weight: {
//     title: "Weight",
//     options: [
//       { value: "0-2", label: "0 - 2 g", min: 0, max: 2 },
//       { value: "2-5", label: "2 - 5 g", min: 2, max: 5 },
//       { value: "5-10", label: "5 - 10 g", min: 5, max: 10 },
//       { value: "10+", label: "10 g & above", min: 10, max: Infinity }
//     ]
//   },
//   type: {
//     title: "Product Type",
//     options: [
//       { value: "Rings", label: "Rings" },
//       { value: "Earrings", label: "Earrings" },
//       { value: "Necklaces", label: "Necklaces" },
//       { value: "Pendants", label: "Pendants" },
//       { value: "Sets", label: "Sets" },
//             { value: "Gifting", label: "Gifting" }

//     ]
//   },
//   price: {
//     title: "Price Range",
//     // options: [
//     //   { value: "under5k", label: "Under ₹5,000", min: 0, max: 5000 },
//     //   { value: "5k10k", label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
//     //   { value: "10k20k", label: "₹10,000 - ₹20,000", min: 10000, max: 20000 },
//     //   { value: "20k50k", label: "₹20,000 - ₹50,000", min: 20000, max: 50000 },
//     //   { value: "50k+", label: "₹50,000 & above", min: 50000, max: Infinity }
//     // ]


//      options: [
//       { value: "under50", label: "Under ₹50", min: 0, max: 50 },
//       { value: "50-100", label: "₹50 - ₹100", min: 50, max: 100 },
//       { value: "100-200", label: "₹100 - ₹200", min: 100, max: 200 },
//       { value: "200-500", label: "₹200 - ₹500", min: 200, max: 500 },
//       { value: "500+", label: "₹500 & above", min: 500, max: Infinity }
//     ]

//   },
//   discount: {
//     title: "Discount",
//     options: [
//       { value: 10, label: "10% or more" },
//       { value: 20, label: "20% or more" },
//       { value: 30, label: "30% or more" },
//       { value: 40, label: "40% or more" },
//       { value: 50, label: "50% or more" }
//     ]
//   },
//   rating: {
//     title: "Customer Rating",
//     options: [
//       { value: 4, label: "4★ & above" },
//       { value: 3, label: "3★ & above" },
//       { value: 2, label: "2★ & above" }
//     ]
//   },
//   color: {
//     title: "Color",
//     options: [
//       { value: "red", label: "Red", bg: "bg-red-500", border: "border-red-500" },
//       { value: "green", label: "Green", bg: "bg-green-700", border: "border-green-500" },
//       { value: "gold", label: "Gold", bg: "bg-yellow-300", border: "border-yellow-500" },
//       { value: "silver", label: "Silver", bg: "bg-gray-300", border: "border-gray-300" },
//       { value: "blue", label: "Blue", bg: "bg-blue-500", border: "border-blue-500" },
//       { value: "pink", label: "Pink", bg: "bg-pink-500", border: "border-pink-500" },
//   { value: "black", label: "Black", bg: "bg-black", border: "border-black" },
//       { value: "orange", label: "Orange", bg: "bg-orange-500", border: "border-orange-500" },
//       { value: "purple", label: "Purple", bg: "bg-purple-500", border: "border-purple-500" },
//   { value: "brown", label: "Brown", bg: "bg-amber-700", border: "border-amber-700" },
//     ]
//   }
// };

// const CategoryPage = () => {
//   // State for products and loading
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Filter states
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedMaterials, setSelectedMaterials] = useState([]);
//   const [selectedOccasions, setSelectedOccasions] = useState([]);
//   const [selectedWeight, setSelectedWeight] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [selectedDiscount, setSelectedDiscount] = useState(null);
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [activeTopFilter, setActiveTopFilter] = useState("All");
 
  
//   // Sorting state
//   const [sortBy, setSortBy] = useState("featured");
  
//   // Mobile filter visibility
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   // Simulate API fetch
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 500));
//         setProducts(initialProducts);
//         setError(null);
//       } catch (err) {
//         setError("Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Clear all filters
//   const clearFilters = () => {
//     setSelectedTypes([]);
//     setSelectedMaterials([]);
//     setSelectedOccasions([]);
//     setSelectedWeight(null);
//     setSelectedPrice(null);
//     setSelectedDiscount(null);
//     setSelectedRating(null);
//     setSelectedColors([]);
//     setActiveTopFilter("All");
//     setSortBy("featured");
//   };

//   // Check if any filter is active
//   const hasActiveFilters = () => {
//     return selectedTypes.length > 0 ||
//       selectedMaterials.length > 0 ||
//       selectedOccasions.length > 0 ||
//       selectedWeight !== null ||
//       selectedPrice !== null ||
//       selectedDiscount !== null ||
//       selectedRating !== null ||
//       selectedColors.length > 0 ||
//       activeTopFilter !== "All";
//   };

//   // Generic checkbox handler
//   const handleCheckboxChange = (value, selectedArray, setSelectedArray) => {
//     if (selectedArray.includes(value)) {
//       setSelectedArray(selectedArray.filter(item => item !== value));
//     } else {
//       setSelectedArray([...selectedArray, value]);
//     }
//   };

 

//   // Filter products based on all criteria
//   const filteredProducts = products.filter((p) => {
//     // Product type filter
//     if (selectedTypes.length && !selectedTypes.includes(p.type)) return false;

//     // Material filter
//     if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false;

//     // Occasion filter
//     if (selectedOccasions.length && !selectedOccasions.includes(p.occasion)) return false;

//     // Color filter
//     if (selectedColors.length && !selectedColors.includes(p.color)) return false;

//     // Weight filter
//     if (selectedWeight) {
//       const weightOption = FILTER_CONFIG.weight.options.find(opt => opt.value === selectedWeight);
//       if (weightOption && (p.weight < weightOption.min || p.weight > weightOption.max)) return false;
//     }

//     // Price filter
//     if (selectedPrice) {
//       const priceOption = FILTER_CONFIG.price.options.find(opt => opt.value === selectedPrice);
//       if (priceOption && (p.price < priceOption.min || p.price > priceOption.max)) return false;
//     }

//     // Discount filter
//     if (selectedDiscount && p.discount < selectedDiscount) return false;

//     // Rating filter
//     if (selectedRating && p.rating < selectedRating) return false;

//     // Top filters
//     if (activeTopFilter === "Fast Delivery" && p.id % 2 !== 0) return false; // Example logic
//     if (activeTopFilter === "Latest Designs" && p.id > 8) return false; // Example logic

//     return true;
//   });

//   // Sort products
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch(sortBy) {
//       case "price-low":
//         return a.price - b.price;
//       case "price-high":
//         return b.price - a.price;
//       case "rating":
//         return b.rating - a.rating;
//       case "discount":
//         return b.discount - a.discount;
//       default:
//         return a.id - b.id; // Featured (default)
//     }
//   });

//   // Count active filters
//   const getActiveFilterCount = () => {
//     let count = 0;
//     if (selectedTypes.length) count += selectedTypes.length;
//     if (selectedMaterials.length) count += selectedMaterials.length;
//     if (selectedOccasions.length) count += selectedOccasions.length;
//     if (selectedColors.length) count += selectedColors.length;
//     if (selectedWeight) count += 1;
//     if (selectedPrice) count += 1;
//     if (selectedDiscount) count += 1;
//     if (selectedRating) count += 1;
//     if (activeTopFilter !== "All") count += 1;
//     return count;
//   };

//   if (loading) {
//     return (
//       <div className="max-w-[1400px] mx-auto px-4 py-8">
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D1A743]"></div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-[1400px] mx-auto px-4 py-8">
//         <div className="text-center text-red-600">
//           <p>{error}</p>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="mt-4 bg-[#D1A743] text-white px-4 py-2 rounded"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 py-8">
//       {/* Active Filters Summary */}
//       {hasActiveFilters() && (
//         <div className="mb-4 flex flex-wrap items-center gap-2">
//           <span className="text-sm text-gray-600">Active Filters:</span>
//           {selectedTypes.map(type => (
//             <span key={type} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               {type}
//               <button onClick={() => handleCheckboxChange(type, selectedTypes, setSelectedTypes)} className="ml-1 text-gray-500 hover:text-red-500">×</button>
//             </span>
//           ))}
//           {selectedMaterials.map(material => (
//             <span key={material} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               {material.charAt(0).toUpperCase() + material.slice(1)}
//               <button onClick={() => handleCheckboxChange(material, selectedMaterials, setSelectedMaterials)} className="ml-1 text-gray-500 hover:text-red-500">×</button>
//             </span>
//           ))}
//           {selectedColors.map(color => {
//             const colorOption = FILTER_CONFIG.color.options.find(c => c.value === color);
//             return (
//               <span key={color} className={`${colorOption?.bg} bg-opacity-20 px-3 py-1 rounded-full text-sm flex items-center gap-1 border ${colorOption?.border}`}>
//                 <span className={`w-3 h-3 rounded-full ${colorOption?.bg}`}></span>
//                 {colorOption?.label}
//                 <button onClick={() => handleCheckboxChange(color, selectedColors, setSelectedColors)} className="ml-1 text-gray-500 hover:text-red-500">×</button>
//               </span>
//             );
//           })}
//           {activeTopFilter !== "All" && (
//             <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
//               {activeTopFilter}
//               <button onClick={() => setActiveTopFilter("All")} className="ml-1 text-gray-500 hover:text-red-500">×</button>
//             </span>
//           )}
//           <button 
//             onClick={clearFilters}
//             className="text-sm text-[#D1A743] hover:underline ml-2"
//           >
//             Clear All
//           </button>
//         </div>
//       )}

//       {/* TOP FILTER BUTTONS */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         {["All", "Fast Delivery", "Latest Designs", "Store Pickup", "Try at Home", "Best Sellers", "New Arrivals"].map((item) => (
//           <button
//             key={item}
//             onClick={() => setActiveTopFilter(item)}
//             className={`px-4 py-2 rounded-full border text-sm transition whitespace-nowrap
//               ${activeTopFilter === item 
//               ? "bg-[#D1A743] text-white border-[#D1A743]" 
//               : "bg-white text-gray-700 hover:border-[#D1A743]"}`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Mobile Filter Button */}
//       <div className="lg:hidden mb-4">
//         <button
//           onClick={() => setShowMobileFilters(!showMobileFilters)}
//           className="w-full bg-white border rounded-lg px-4 py-3 flex items-center justify-between"
//         >
//           <span className="font-medium">Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}</span>
//           <span>{showMobileFilters ? '▲' : '▼'}</span>
//         </button>
//       </div>

//       <div className="flex gap-8">
//         {/* SIDEBAR FILTERS */}
//         <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block w-full lg:w-[280px]`}>
//           <div className="bg-white p-6 rounded-lg border sticky top-4">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="font-semibold text-lg">FILTERS</h3>
//               <button
//                 onClick={clearFilters}
//                 className="text-sm text-[#D1A743] hover:underline"
//               >
//                 CLEAR ALL {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
//               </button>
//             </div>

//             {/* Color Filter - New Addition */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.color.title}</h4>
//               <div  className="flex flex-wrap gap-2">
//                 {FILTER_CONFIG.color.options.map((option) => (
//                   <button
//                   style={{}}
//                     key={option.value}
//                     onClick={() => handleCheckboxChange(option.value, selectedColors, setSelectedColors)}
//                     className={`w-6 h-6 rounded-full ${option.bg} ${
//                       selectedColors.includes(option.value) 
//                         ? 'ring-2 ring-offset-2 ring-[#D1A743]' 
//                         : 'hover:scale-110 transition'
//                     }`}
//                     title={option.label}
//                   />
//                 ))}
//               </div>
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {selectedColors.map(color => {
//                   const colorOption = FILTER_CONFIG.color.options.find(c => c.value === color);
//                   return (
//                     <span key={color} className="text-xs bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1">
//                       {colorOption?.label}
//                       <button onClick={() => handleCheckboxChange(color, selectedColors, setSelectedColors)} className="text-gray-500 hover:text-red-500">×</button>
//                     </span>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Material Type Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.material.title}</h4>
//               {FILTER_CONFIG.material.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={selectedMaterials.includes(option.value)}
//                     onChange={() => handleCheckboxChange(option.value, selectedMaterials, setSelectedMaterials)}
//                     className="w-4 h-4 text-[#D1A743] rounded border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Occasion Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.occasion.title}</h4>
//               {FILTER_CONFIG.occasion.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={selectedOccasions.includes(option.value)}
//                     onChange={() => handleCheckboxChange(option.value, selectedOccasions, setSelectedOccasions)}
//                     className="w-4 h-4 text-[#D1A743] rounded border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Product Type Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.type.title}</h4>
//               {FILTER_CONFIG.type.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={selectedTypes.includes(option.value)}
//                     onChange={() => handleCheckboxChange(option.value, selectedTypes, setSelectedTypes)}
//                     className="w-4 h-4 text-[#D1A743] rounded border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Weight Filter */}
//             {/* <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.weight.title}</h4>
//               {FILTER_CONFIG.weight.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="weight"
//                     checked={selectedWeight === option.value}
//                     onChange={() => setSelectedWeight(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div> */}

//             {/* Price Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.price.title}</h4>
//               {FILTER_CONFIG.price.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="price"
//                     checked={selectedPrice === option.value}
//                     onChange={() => setSelectedPrice(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Discount Filter */}
//             <div className="mb-6 border-b pb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.discount.title}</h4>
//               {FILTER_CONFIG.discount.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="discount"
//                     checked={selectedDiscount === option.value}
//                     onChange={() => setSelectedDiscount(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Rating Filter */}
//             {/* <div className="mb-6">
//               <h4 className="font-medium mb-3">{FILTER_CONFIG.rating.title}</h4>
//               {FILTER_CONFIG.rating.options.map((option) => (
//                 <label key={option.value} className="flex items-center mb-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="rating"
//                     checked={selectedRating === option.value}
//                     onChange={() => setSelectedRating(option.value)}
//                     className="w-4 h-4 text-[#D1A743] border-gray-300 focus:ring-[#D1A743]"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">{option.label}</span>
//                 </label>
//               ))}
//             </div> */}
//           </div>
//         </div>

//         {/* PRODUCTS SECTION */}
//         <div className="flex-1">
//           {/* Header with Results Count and Sort */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//             <div className="text-sm text-gray-600">
//               Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
//             </div>

//             <div className="flex items-center gap-2 w-full sm:w-auto">
//               <select 
//                 className="border rounded-md px-3 py-2 text-sm flex-1 sm:flex-none"
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//               >
//                 <option value="featured">Sort By: Featured</option>
//                 <option value="price-low">Price: Low to High</option>
//                 <option value="price-high">Price: High to Low</option>
//                 <option value="rating">Customer Rating</option>
//                 <option value="discount">Discount</option>
//               </select>
//             </div>
//           </div>

//           {/* No Results Message */}
//           {sortedProducts.length === 0 && (
//             <div className="text-center py-12">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
//               <p className="text-gray-600 mb-4">Try adjusting your filters</p>
//               <button
//                 onClick={clearFilters}
//                 className="bg-[#D1A743] text-white px-6 py-2 rounded-lg hover:bg-[#b78e34] transition"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           )}

//           {/* PRODUCT GRID */}
//           <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
//             {sortedProducts.map((product) => {
//               const colorOption = FILTER_CONFIG.color.options.find(c => c.value === product.color);
//               return (
//                 <div
//                   key={product.id}
//                   className="border rounded-xl p-3 md:p-4 hover:shadow-lg transition cursor-pointer group"
//                 >
//                   <div className="relative">
//                     <img
//                       src={product.img}
//                       alt={product.name}
//                       className="w-full h-[150px] md:h-[200px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//                     />
//                     {product.discount > 0 && (
//                       <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                         {product.discount}% OFF
//                       </span>
//                     )}
//                     {/* Color indicator */}
//                     <span className={`absolute top-2 right-2 w-4 h-4 rounded-full ${colorOption?.bg} border border-white shadow-md`} title={colorOption?.label}></span>
//                   </div>

//                   <h3 className="mt-3 font-medium text-sm md:text-base">{product.name}</h3>
                  
//                   <div className="flex items-center gap-1 mt-1">
//                     {[...Array(5)].map((_, i) => (
//                       <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
//                     ))}
//                     <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
//                   </div>

//                   <div className="mt-2 flex items-center gap-2">
//                     <p className="text-[#D1A743] font-semibold text-sm md:text-base">
//                       ₹{product.price.toLocaleString()}
//                     </p>
//                     {product.discount > 0 && (
//                       <p className="text-xs text-gray-400 line-through">
//                         ₹{(product.price * (100 + product.discount) / 100).toFixed(0)}
//                       </p>
                    
//                     )}
//                   </div>



//                   <div className="mt-2 flex flex-wrap gap-1">
//                     <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full">
//                       {product.material}
//                     </span>
//                     <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full">
//                       {product.occasion}
//                     </span>
                 

//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Rssred  from "../assets/Rset-red (2).png"
import Rss203 from "../assets/Rss - 203 (4).png"
import Rss203a from "../assets/Rss - 203 (1).png";
import Rss203b from "../assets/Rss - 203 (2).png";
import Rss203c from "../assets/Rss - 203 (3).png";
import Rss203d from "../assets/Rss - 203 (5).png";
import Rss201 from "../assets/Rss -201 (3).png"
import Rss201A from "../assets/Rss -201 (4).png"
import Rss204 from "../assets/Rss-204 (2).png"
import Rss205 from "../assets/Rss-205 (3).png"
import Rss206 from "../assets/Rss-206  (2).png"
import Rss222 from "../assets/Rss-222 (1).png"
import Rss225 from "../assets/Rss-225-gold (1).png"
import Rss225S from "../assets/Rss-225-silver (1).png"
import vjs230 from "../assets/vjs-231-rosegold (1).png"
import vjs231 from "../assets/vjs-231-silverWhite (3).png"
import Egur158 from "../assets/Egur 158 Red (3).png"
import Egur159 from "../assets/Egur-159-Green (1).png"
import vjs230d from "../assets/vjs-230 (5).png"

// ── Category Banner Config ─────────────────────────────────────────────────
const CATEGORY_BANNERS = {
  rings: {
    title: "Rings",
    subtitle: "Timeless bands for every occasion",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2000&auto=format&fit=crop",
    accent: "#D1A743",
  },
  earrings: {
    title: "Earrings",
    subtitle: "Elegant drops & stunning studs",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2000&auto=format&fit=crop",
    accent: "#C084FC",
  },
  necklaces: {
    title: "Necklaces",
    subtitle: "Graceful chains for every neckline",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000&auto=format&fit=crop",
    accent: "#F472B6",
  },
  pendants: {
    title: "Pendants",
    subtitle: "Delicate charms, big statements",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop",
    accent: "#34D399",
  },
  sets: {
    title: "Jewellery Sets",
    subtitle: "Complete looks, perfectly matched",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2000&auto=format&fit=crop",
    accent: "#FB923C",
  },
  gifting: {
    title: "Gifting",
    subtitle: "Curated gifts for every milestone",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop",
    accent: "#F87171",
  },
};

const DEFAULT_BANNER = {
  title: "Collection",
  subtitle: "Explore our exclusive range",
  image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2000&auto=format&fit=crop",
  accent: "#D1A743",
};

// ── Products ──────────────────────────────────────────────────────────────────
const initialProducts = [
  { id: 1, name: "Diamond Ring", price: 60, type: "Rings", discount: 10, img: Rss203, material: "platinum", occasion: "party", weight: 2.5, rating: 4.5, inStock: true, color: "silver" },
  { id: 2, name: "Gold Earrings", price: 250, type: "Earrings", discount: 20, img: Rss201A, material: "gold", occasion: "festival", weight: 3.2, rating: 4.2, inStock: true, color: "gold" },
  { id: 3, name: "Gold Pendant", price: 750, type: "Pendants", discount: 5, img: Rss204, material: "gold", occasion: "office", weight: 1.8, rating: 4.0, inStock: true, color: "gold" },
  { id: 4, name: "Necklace Set", price: 500, type: "Necklaces", discount: 15, img: Rss205, material: "silver", occasion: "wedding", weight: 4.5, rating: 4.8, inStock: true, color: "silver" },
  { id: 5, name: "Platinum Ring", price: 900, type: "Rings", discount: 12, img: vjs231, material: "platinum", occasion: "engagement", weight: 3.8, rating: 4.9, inStock: true, color: "silver" },
  { id: 6, name: "Silver Earrings", price: 350, type: "Earrings", discount: 25, img: vjs230, material: "silver", occasion: "everyday", weight: 1.2, rating: 4.3, inStock: true, color: "silver" },
  { id: 7, name: "Gold Necklace", price: 400, type: "Necklaces", discount: 8, img: Rss222, material: "gold", occasion: "festival", weight: 6.2, rating: 4.6, inStock: true, color: "gold" },
  { id: 8, name: "Diamond Pendant", price: 80, type: "Pendants", discount: 15, img: Egur158, material: "platinum", occasion: "party", weight: 1.5, rating: 4.4, inStock: true, color: "red" },
  { id: 9, name: "Office Wear Set", price: 750, type: "Sets", discount: 10, img: Rss206, material: "silver", occasion: "office", weight: 3.0, rating: 4.1, inStock: true, color: "silver" },
  { id: 10, name: "Party Wear Earrings", price: 150, type: "Earrings", discount: 18, img: Rss225, material: "gold", occasion: "party", weight: 2.2, rating: 4.7, inStock: true, color: "gold" },
  { id: 11, name: "Wedding Necklace", price: 280, type: "Necklaces", discount: 20, img: Egur159, material: "gold", occasion: "wedding", weight: 8.5, rating: 4.9, inStock: true, color: "green" },
  { id: 12, name: "Festival Special Set", price: 30, type: "Sets", discount: 22, img: vjs230d, material: "silver", occasion: "festival", weight: 5.2, rating: 4.5, inStock: true, color: "silver" },
];

// ── Filter Config ──────────────────────────────────────────────────────────────
const FILTER_CONFIG = {
  material: {
    title: "Plating",
    options: [
      { value: "gold", label: "Gold" },
      { value: "rosegold", label: "Rose Gold" },
      { value: "silver", label: "Silver" },
      { value: "oxidised", label: "Oxidised" },
    ],
  },
  occasion: {
    title: "Occasion",
    options: [
      { value: "everyday", label: "Everyday Wear" },
      { value: "office", label: "Office" },
      { value: "party", label: "Party" },
      { value: "festival", label: "Festival" },
      { value: "wedding", label: "Wedding" },
    ],
  },
  type: {
    title: "Product Type",
    options: [
      { value: "Rings", label: "Rings" },
      { value: "Earrings", label: "Earrings" },
      { value: "Necklaces", label: "Necklaces" },
      { value: "Pendants", label: "Pendants" },
      { value: "Sets", label: "Sets" },
      { value: "Gifting", label: "Gifting" },
    ],
  },
  price: {
    title: "Price Range",
    options: [
      { value: "under50", label: "Under ₹50", min: 0, max: 50 },
      { value: "50-100", label: "₹50 – ₹100", min: 50, max: 100 },
      { value: "100-200", label: "₹100 – ₹200", min: 100, max: 200 },
      { value: "200-500", label: "₹200 – ₹500", min: 200, max: 500 },
      { value: "500+", label: "₹500 & above", min: 500, max: Infinity },
    ],
  },
  discount: {
    title: "Discount",
    options: [
      { value: 10, label: "10% or more" },
      { value: 20, label: "20% or more" },
      { value: 30, label: "30% or more" },
      { value: 50, label: "50% or more" },
    ],
  },
  // ✅ Customer Rating filter added
  rating: {
    title: "Customer Rating",
    options: [
      { value: 4, label: "4★ & above" },
      { value: 3, label: "3★ & above" },
      { value: 2, label: "2★ & above" },
    ],
  },
  color: {
    title: "Color",
    options: [
      { value: "red",    label: "Red",    bg: "bg-red-500",    border: "border-red-500"    },
      { value: "green",  label: "Green",  bg: "bg-green-700",  border: "border-green-700"  },
      { value: "gold",   label: "Gold",   bg: "bg-yellow-400", border: "border-yellow-400" },
      { value: "silver", label: "Silver", bg: "bg-gray-300",   border: "border-gray-300"   },
      { value: "blue",   label: "Blue",   bg: "bg-blue-500",   border: "border-blue-500"   },
      { value: "pink",   label: "Pink",   bg: "bg-pink-500",   border: "border-pink-500"   },
      { value: "black",  label: "Black",  bg: "bg-black",      border: "border-black"      },
      { value: "orange", label: "Orange", bg: "bg-orange-500", border: "border-orange-500" },
      { value: "purple", label: "Purple", bg: "bg-purple-500", border: "border-purple-500" },
      { value: "brown",  label: "Brown",  bg: "bg-amber-700",  border: "border-amber-700"  },
    ],
  },
};

// ── Reusable FilterSection ─────────────────────────────────────────────────────
const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b pb-4 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center mb-3 group"
      >
        <h4 className="font-semibold text-sm text-gray-800 uppercase tracking-wide">{title}</h4>
        <span className="text-gray-400 text-xs group-hover:text-[#D1A743] transition">
          {open ? "▲" : "▼"}
        </span>
      </button>
      {open && children}
    </div>
  );
};

// ── Star Rating Display ────────────────────────────────────────────────────────
const StarRating = ({ rating, size = "text-xs" }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`${size} ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"}`}>★</span>
    ))}
    <span className="text-xs text-gray-400 ml-1">({rating})</span>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────────
const CategoryPage = () => {
  const { slug } = useParams();

  // ✅ Banner based on params
  const bannerKey = slug?.toLowerCase().replace(/\s+/g, "-");
  const banner = CATEGORY_BANNERS[bannerKey] ?? DEFAULT_BANNER;

  const [products, setProducts]           = useState([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedPrice, setSelectedPrice]   = useState(null);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [selectedRating, setSelectedRating]   = useState(null); // ✅
  const [selectedColors, setSelectedColors]   = useState([]);
  const [activeTopFilter, setActiveTopFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // ✅ Default sort: price-high
  const [sortBy, setSortBy] = useState("price-high");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        await new Promise((r) => setTimeout(r, 400));
        setProducts(initialProducts);
      } catch {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [slug]);

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedMaterials([]);
    setSelectedOccasions([]);
    setSelectedPrice(null);
    setSelectedDiscount(null);
    setSelectedRating(null);
    setSelectedColors([]);
    setActiveTopFilter("All");
  };

  const toggleArr = (value, arr, setArr) => {
    setArr(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const activeFilterCount = [
    ...selectedTypes,
    ...selectedMaterials,
    ...selectedOccasions,
    ...selectedColors,
    selectedPrice,
    selectedDiscount,
    selectedRating,
    activeTopFilter !== "All" ? activeTopFilter : null,
  ].filter(Boolean).length;

  // ── Filter ──────────────────────────────────────────────────────────────────
  const filteredProducts = products.filter((p) => {
    if (selectedTypes.length && !selectedTypes.includes(p.type)) return false;
    if (selectedMaterials.length && !selectedMaterials.includes(p.material)) return false;
    if (selectedOccasions.length && !selectedOccasions.includes(p.occasion)) return false;
    if (selectedColors.length && !selectedColors.includes(p.color)) return false;
    if (selectedPrice) {
      const opt = FILTER_CONFIG.price.options.find((o) => o.value === selectedPrice);
      if (opt && (p.price < opt.min || p.price > opt.max)) return false;
    }
    if (selectedDiscount && p.discount < selectedDiscount) return false;
    if (selectedRating && p.rating < selectedRating) return false; // ✅
    if (activeTopFilter === "Fast Delivery" && p.id % 2 !== 0) return false;
    if (activeTopFilter === "Latest Designs" && p.id > 8) return false;
    return true;
  });

  // ── Sort ────────────────────────────────────────────────────────────────────
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":    return a.price - b.price;
      case "price-high":   return b.price - a.price;       // ✅ default
      case "rating":       return b.rating - a.rating;
      case "discount":     return b.discount - a.discount;
      default:             return a.id - b.id;
    }
  });

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D1A743]" />
    </div>
  );

  if (error) return (
    <div className="text-center py-20 text-red-500">
      <p>{error}</p>
      <button onClick={() => window.location.reload()} className="mt-4 bg-[#D1A743] text-white px-4 py-2 rounded">
        Try Again
      </button>
    </div>
  );

  return (
    <div className="bg-[#fafafa] min-h-screen">

      {/* ── CATEGORY BANNER ──────────────────────────────────────────────────── */}
      <div className="relative max-w-[1400px] h-[220px] sm:h-[300px] mx-auto md:h-[360px] overflow-hidden">
        <img
          src={banner.image}
          alt={banner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
            style={{ color: banner.accent }}
          >
            Collection
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight capitalize leading-none">
            {banner.title}
          </h1>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-md">
            {banner.subtitle}
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span
              className="h-[2px] w-10 inline-block"
              style={{ backgroundColor: banner.accent }}
            />
            <span className="text-white/50 text-xs uppercase tracking-widest">
              {sortedProducts.length} Products
            </span>
          </div>
        </div>
      </div>

      {/* ── TOP QUICK FILTERS ─────────────────────────────────────────────────── */}
      {/* <div className="bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {["All", "Fast Delivery", "Latest Designs", "Store Pickup", "Try at Home", "Best Sellers", "New Arrivals"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTopFilter(item)}
              className={`px-4 py-1.5 rounded-full border text-xs font-semibold transition whitespace-nowrap flex-shrink-0
                ${activeTopFilter === item
                  ? "bg-[#D1A743] text-white border-[#D1A743]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#D1A743] hover:text-[#D1A743]"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div> */}

      <div className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">

        {/* ── SIDEBAR ────────────────────────────────────────────────────────── */}
        <aside className={`${showMobileFilters ? "fixed inset-0 z-50 bg-black/40" : "hidden"} lg:relative lg:block lg:inset-auto lg:bg-transparent lg:z-auto`}>

          {/* Mobile overlay close */}
          {showMobileFilters && (
            <div className="absolute inset-0" onClick={() => setShowMobileFilters(false)} />
          )}

          <div className={`
            ${showMobileFilters ? "absolute bottom-0 left-0 right-0 rounded-t-2xl max-h-[85vh] overflow-y-auto" : ""}
            lg:static lg:max-h-none lg:overflow-visible
            bg-white lg:rounded-2xl border border-gray-100 shadow-sm
            w-full lg:w-[260px] flex-shrink-0
          `}>
            {/* Sidebar Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Filters</h3>
                {activeFilterCount > 0 && (
                  <span className="bg-[#D1A743] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </div>
              <button onClick={clearFilters} className="text-xs text-[#D1A743] font-semibold hover:underline">
                Clear All
              </button>
            </div>

            <div className="px-5 py-4 space-y-1">

              {/* Color */}
              <FilterSection title="Color">
                <div className="flex flex-wrap gap-2 mt-1">
                  {FILTER_CONFIG.color.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => toggleArr(opt.value, selectedColors, setSelectedColors)}
                      title={opt.label}
                      className={`w-7 h-7 rounded-full ${opt.bg} transition-all
                        ${selectedColors.includes(opt.value)
                          ? "ring-2 ring-offset-2 ring-[#D1A743] scale-110"
                          : "hover:scale-110 hover:ring-1 hover:ring-gray-300"}`}
                    />
                  ))}
                </div>
                {selectedColors.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {selectedColors.map((c) => {
                      const opt = FILTER_CONFIG.color.options.find((x) => x.value === c);
                      return (
                        <span key={c} className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          {opt?.label}
                          <button onClick={() => toggleArr(c, selectedColors, setSelectedColors)} className="hover:text-red-500">×</button>
                        </span>
                      );
                    })}
                  </div>
                )}
              </FilterSection>

              {/* Plating */}
              <FilterSection title="Plating">
                {FILTER_CONFIG.material.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 mb-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(opt.value)}
                      onChange={() => toggleArr(opt.value, selectedMaterials, setSelectedMaterials)}
                      className="w-4 h-4 accent-[#D1A743] rounded"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#D1A743] transition">{opt.label}</span>
                  </label>
                ))}
              </FilterSection>

              {/* Occasion */}
              <FilterSection title="Occasion">
                {FILTER_CONFIG.occasion.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 mb-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedOccasions.includes(opt.value)}
                      onChange={() => toggleArr(opt.value, selectedOccasions, setSelectedOccasions)}
                      className="w-4 h-4 accent-[#D1A743] rounded"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#D1A743] transition">{opt.label}</span>
                  </label>
                ))}
              </FilterSection>

              {/* Product Type */}
              <FilterSection title="Product Type">
                {FILTER_CONFIG.type.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 mb-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(opt.value)}
                      onChange={() => toggleArr(opt.value, selectedTypes, setSelectedTypes)}
                      className="w-4 h-4 accent-[#D1A743] rounded"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#D1A743] transition">{opt.label}</span>
                  </label>
                ))}
              </FilterSection>

              {/* Price */}
              <FilterSection title="Price Range">
                {FILTER_CONFIG.price.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 mb-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === opt.value}
                      onChange={() => setSelectedPrice(opt.value)}
                      className="w-4 h-4 accent-[#D1A743]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#D1A743] transition">{opt.label}</span>
                  </label>
                ))}
                {selectedPrice && (
                  <button onClick={() => setSelectedPrice(null)} className="text-xs text-gray-400 hover:text-red-400 mt-1">
                    Clear ×
                  </button>
                )}
              </FilterSection>

              {/* Discount */}
              <FilterSection title="Discount" defaultOpen={false}>
                {FILTER_CONFIG.discount.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 mb-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="discount"
                      checked={selectedDiscount === opt.value}
                      onChange={() => setSelectedDiscount(opt.value)}
                      className="w-4 h-4 accent-[#D1A743]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#D1A743] transition">{opt.label}</span>
                  </label>
                ))}
                {selectedDiscount && (
                  <button onClick={() => setSelectedDiscount(null)} className="text-xs text-gray-400 hover:text-red-400 mt-1">
                    Clear ×
                  </button>
                )}
              </FilterSection>

              {/* ✅ Customer Rating Filter */}
              <FilterSection title="Customer Rating" defaultOpen={false}>
                {FILTER_CONFIG.rating.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 mb-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="rating"
                      checked={selectedRating === opt.value}
                      onChange={() => setSelectedRating(opt.value)}
                      className="w-4 h-4 accent-[#D1A743]"
                    />
                    <div className="flex items-center gap-1">
                      {[...Array(opt.value)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">★</span>
                      ))}
                      <span className="text-sm text-gray-700 group-hover:text-[#D1A743] transition">& above</span>
                    </div>
                  </label>
                ))}
                {selectedRating && (
                  <button onClick={() => setSelectedRating(null)} className="text-xs text-gray-400 hover:text-red-400 mt-1">
                    Clear ×
                  </button>
                )}
              </FilterSection>

            </div>

            {/* Mobile Apply Button */}
            {showMobileFilters && (
              <div className="sticky bottom-0 bg-white border-t px-5 py-4">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-[#D1A743] text-white py-3 rounded-xl font-bold text-sm"
                >
                  Show {sortedProducts.length} Products
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* ── PRODUCTS AREA ──────────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M7 8h10M11 12h2" />
              </svg>
              Filters {activeFilterCount > 0 && <span className="bg-[#D1A743] text-white text-[10px] px-1.5 py-0.5 rounded-full">{activeFilterCount}</span>}
            </button>

            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">{sortedProducts.length}</span> products
            </p>

            {/* ✅ Sort — default price-high */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white shadow-sm focus:outline-none focus:border-[#D1A743] font-medium"
            >
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="rating">Customer Rating</option>
              <option value="discount">Highest Discount</option>
              <option value="featured">Featured</option>
            </select>
          </div>

          {/* Active Filter Chips */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedTypes.map((v) => (
                <span key={v} className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {v} <button onClick={() => toggleArr(v, selectedTypes, setSelectedTypes)} className="hover:text-red-500 ml-0.5">×</button>
                </span>
              ))}
              {selectedMaterials.map((v) => (
                <span key={v} className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {v} <button onClick={() => toggleArr(v, selectedMaterials, setSelectedMaterials)} className="hover:text-red-500 ml-0.5">×</button>
                </span>
              ))}
              {selectedOccasions.map((v) => (
                <span key={v} className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                  {v} <button onClick={() => toggleArr(v, selectedOccasions, setSelectedOccasions)} className="hover:text-red-500 ml-0.5">×</button>
                </span>
              ))}
              {selectedColors.map((v) => {
                const opt = FILTER_CONFIG.color.options.find((x) => x.value === v);
                return (
                  <span key={v} className="flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    <span className={`w-3 h-3 rounded-full ${opt?.bg}`} />
                    {opt?.label}
                    <button onClick={() => toggleArr(v, selectedColors, setSelectedColors)} className="hover:text-red-500">×</button>
                  </span>
                );
              })}
              {selectedPrice && (
                <span className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {FILTER_CONFIG.price.options.find((o) => o.value === selectedPrice)?.label}
                  <button onClick={() => setSelectedPrice(null)} className="hover:text-red-500 ml-0.5">×</button>
                </span>
              )}
              {selectedDiscount && (
                <span className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {selectedDiscount}%+ Off
                  <button onClick={() => setSelectedDiscount(null)} className="hover:text-red-500 ml-0.5">×</button>
                </span>
              )}
              {selectedRating && (
                <span className="flex items-center gap-1 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {selectedRating}★ & above
                  <button onClick={() => setSelectedRating(null)} className="hover:text-red-500 ml-0.5">×</button>
                </span>
              )}
              <button onClick={clearFilters} className="text-xs text-[#D1A743] font-semibold hover:underline px-2">
                Clear All
              </button>
            </div>
          )}

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-400 text-sm mb-6">Try adjusting your filters</p>
              <button onClick={clearFilters} className="bg-[#D1A743] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#b78e34] transition">
                Clear All Filters
              </button>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedProducts.map((product) => {
              const colorOpt = FILTER_CONFIG.color.options.find((c) => c.value === product.color);
              const originalPrice = Math.round(product.price * (100 + product.discount) / 100);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-[160px] sm:h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.discount > 0 && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {product.discount}% OFF
                      </span>
                    )}
                    <span
                      className={`absolute top-2 right-2 w-4 h-4 rounded-full ${colorOpt?.bg} border-2 border-white shadow`}
                      title={colorOpt?.label}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{product.material} · {product.occasion}</p>
                    <h3 className="font-semibold text-sm text-gray-900 line-clamp-1 group-hover:text-[#D1A743] transition-colors">
                      {product.name}
                    </h3>

                    {/* Stars */}
                    <StarRating rating={product.rating} />

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-[#D1A743] font-bold text-base">₹{product.price.toLocaleString()}</span>
                      {product.discount > 0 && (
                        <span className="text-gray-300 text-xs line-through">₹{originalPrice.toLocaleString()}</span>
                      )}
                    </div>

                    {/* Add to Cart */}
                    <button className="mt-3 w-full py-2 rounded-xl bg-[#D1A743]/10 text-[#D1A743] text-xs font-bold uppercase tracking-wider hover:bg-[#D1A743] hover:text-white transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;