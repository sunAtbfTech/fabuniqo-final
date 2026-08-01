import React, { useState } from 'react';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaShoppingBag, 
  FaHeart, 
  FaExpand, 
  FaMusic, 
  FaVolumeMute,
  FaPlay,
  FaPause,
  FaInfoCircle,
  FaTimes
} from 'react-icons/fa';
import { GiClothes, GiGemNecklace } from 'react-icons/gi';
import { Md360, MdZoomIn, MdZoomOut } from 'react-icons/md';

const VirtualShowroom = () => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showProductInfo, setShowProductInfo] = useState(false);

  // Room configurations
  const rooms = [
    {
      id: 1,
      name: "Luxury Lounge",
      description: "Evening wear collection in a sophisticated setting",
      bgImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&auto=format&fit=crop",
      products: [
        { 
          id: 1, 
          name: "Silk Evening Gown", 
          price: "$899", 
          position: { x: 30, y: 40 }, 
          image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&auto=format&fit=crop",
          category: "dresses"
        },
        { 
          id: 2, 
          name: "Velvet Blazer", 
          price: "$459", 
          position: { x: 70, y: 60 }, 
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop",
          category: "outerwear"
        },
        { 
          id: 3, 
          name: "Gold Crystal Heels", 
          price: "$320", 
          position: { x: 40, y: 80 }, 
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop",
          category: "shoes"
        },
      ]
    },
    {
      id: 2,
      name: "Premium Studio",
      description: "Exclusive collections in elegant settings",
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&auto=format&fit=crop",
      products: [
        { 
          id: 4, 
          name: "Designer Blazer", 
          price: "$699", 
          position: { x: 20, y: 30 }, 
          image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop",
          category: "outerwear"
        },
        { 
          id: 5, 
          name: "Premium Silk Shirt", 
          price: "$289", 
          position: { x: 60, y: 50 }, 
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
          category: "tops"
        },
        { 
          id: 6, 
          name: "Leather Loafers", 
          price: "$459", 
          position: { x: 80, y: 70 }, 
          image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop",
          category: "shoes"
        },
      ]
    },
    {
      id: 3,
      name: "Elegance Atelier",
      description: "Luxurious and minimalist premium designs",
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&auto=format&fit=crop",
      products: [
        { 
          id: 7, 
          name: "Gold Lace Dress", 
          price: "$1299", 
          position: { x: 50, y: 40 }, 
          image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop",
          category: "dresses"
        },
        { 
          id: 8, 
          name: "Cashmere Sweater", 
          price: "$429", 
          position: { x: 30, y: 70 }, 
          image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop",
          category: "tops"
        },
        { 
          id: 9, 
          name: "Gold Clutch", 
          price: "$279", 
          position: { x: 70, y: 20 }, 
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop",
          category: "accessories"
        },
      ]
    }
  ];

  // Product categories
  const categories = [
    { id: 'all', name: 'All Items', icon: <GiClothes /> },
    { id: 'dresses', name: 'Dresses', icon: '👗' },
    { id: 'tops', name: 'Tops', icon: '👔' },
    { id: 'outerwear', name: 'Outerwear', icon: '🧥' },
    { id: 'shoes', name: 'Footwear', icon: '👠' },
    { id: 'accessories', name: 'Accessories', icon: <GiGemNecklace /> },
  ];

  // Handle room navigation
  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length);
    setSelectedProduct(null);
    setShowProductInfo(false);
  };

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
    setSelectedProduct(null);
    setShowProductInfo(false);
  };

  // Handle product selection
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductInfo(true);
  };

  // Handle zoom
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };

  // Filter products by category
  const filteredProducts = rooms[currentRoom].products.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  );

  // Fullscreen mode
  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Get emoji for category
  const getCategoryEmoji = (category) => {
    switch(category) {
      case 'dresses': return '👗';
      case 'tops': return '👔';
      case 'outerwear': return '🧥';
      case 'shoes': return '👠';
      case 'accessories': return '💎';
      default: return '👔';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold-50/10 to-gold-100/5 backdrop-blur-sm mb-6 border border-gold-200/20">
            <Md360 className="text-2xl text-gold-400 animate-spin" style={{animationDuration: '20s'}} />
            <span className="text-lg font-semibold text-gold-300 uppercase tracking-widest">
              Virtual Showroom
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Experience Luxury</span>
            <span className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              In Virtual Reality
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Step into our exclusive digital boutique. Explore premium collections 
            in immersive environments that match their elegance.
          </p>
        </div>

        {/* Main Showroom */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold-200/20">
          {/* Room Display */}
          <div className="relative h-[600px] md:h-[700px] overflow-hidden">
            {/* Background Room Image with Grid Pattern */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
              style={{
                backgroundImage: `url(${rooms[currentRoom].bgImage})`,
                transform: `scale(${zoomLevel})`,
                backgroundSize: 'cover',
              }}
            >
              {/* Grid Overlay for 3D Effect */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(244, 208, 63, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(244, 208, 63, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
              />
              
              {/* Interactive Product Hotspots */}
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 group ${
                    selectedProduct?.id === product.id ? 'z-50 animate-[fadeIn_0.3s_ease-out]' : 'z-30'
                  }`}
                  style={{
                    left: `${product.position.x}%`,
                    top: `${product.position.y}%`,
                  }}
                >
                  <div className="relative">
                    {/* Pulsing Gold Animation */}
                    <div className="absolute inset-0 animate-ping rounded-full bg-gold-500/30"></div>
                    
                    {/* Product Marker with Gold Gradient */}
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gold-100 to-gold-300 shadow-lg flex items-center justify-center group-hover:from-gold-200 group-hover:to-gold-400 transition-all duration-300 border border-gold-300/30">
                      <div className="text-lg text-gold-800">{getCategoryEmoji(product.category)}</div>
                    </div>
                    
                    {/* Product Name on Hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      <div className="bg-gradient-to-r from-gold-800/90 to-gold-900/90 backdrop-blur-sm text-gold-50 text-sm px-3 py-1 rounded-lg font-medium border border-gold-600/30">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Room Info Overlay */}
            <div className="absolute top-6 left-6 bg-gradient-to-br from-gold-900/60 to-gold-800/40 backdrop-blur-sm rounded-xl p-4 text-white max-w-sm border border-gold-600/20">
              <h3 className="text-2xl font-bold mb-2 text-gold-50">{rooms[currentRoom].name}</h3>
              <p className="text-gold-100/90">{rooms[currentRoom].description}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gold-200">{rooms[currentRoom].products.length} premium items</span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={prevRoom}
                className="w-12 h-12 rounded-full bg-gold-900/40 backdrop-blur-sm flex items-center justify-center hover:bg-gold-800/60 transition-all duration-300 hover:scale-110 group border border-gold-600/30"
              >
                <FaArrowLeft className="text-gold-300 text-xl group-hover:text-gold-100 group-hover:scale-110 transition-transform" />
              </button>
              
              <div className="flex gap-2">
                {rooms.map((room, index) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      setCurrentRoom(index);
                      setSelectedProduct(null);
                      setShowProductInfo(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentRoom
                        ? 'w-8 bg-gradient-to-r from-gold-500 to-gold-400'
                        : 'bg-gold-200/50 hover:bg-gold-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextRoom}
                className="w-12 h-12 rounded-full bg-gold-900/40 backdrop-blur-sm flex items-center justify-center hover:bg-gold-800/60 transition-all duration-300 hover:scale-110 group border border-gold-600/30"
              >
                <FaArrowRight className="text-gold-300 text-xl group-hover:text-gold-100 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Top Controls */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-lg bg-gold-900/40 backdrop-blur-sm hover:bg-gold-800/60 transition-all duration-300 group border border-gold-600/30"
              >
                {isPlaying ? (
                  <FaPause className="text-gold-300 text-lg group-hover:text-gold-100" />
                ) : (
                  <FaPlay className="text-gold-300 text-lg group-hover:text-gold-100" />
                )}
              </button>
              
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 rounded-lg bg-gold-900/40 backdrop-blur-sm hover:bg-gold-800/60 transition-all duration-300 group border border-gold-600/30"
              >
                {isMuted ? (
                  <FaVolumeMute className="text-gold-300 text-lg group-hover:text-gold-100" />
                ) : (
                  <FaMusic className="text-gold-300 text-lg group-hover:text-gold-100" />
                )}
              </button>
              
              <div className="flex gap-1">
                <button
                  onClick={handleZoomOut}
                  className="p-3 rounded-l-lg bg-gold-900/40 backdrop-blur-sm hover:bg-gold-800/60 transition-all duration-300 group border border-gold-600/30"
                >
                  <MdZoomOut className="text-gold-300 text-lg group-hover:text-gold-100" />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="p-3 rounded-r-lg bg-gold-900/40 backdrop-blur-sm hover:bg-gold-800/60 transition-all duration-300 group border border-gold-600/30"
                >
                  <MdZoomIn className="text-gold-300 text-lg group-hover:text-gold-100" />
                </button>
              </div>
              
              <button
                onClick={toggleFullscreen}
                className="p-3 rounded-lg bg-gold-900/40 backdrop-blur-sm hover:bg-gold-800/60 transition-all duration-300 group border border-gold-600/30"
              >
                <FaExpand className="text-gold-300 text-lg group-hover:text-gold-100" />
              </button>
            </div>

            {/* Selected Product Modal */}
            {selectedProduct && showProductInfo && (
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gold-900 to-gold-800 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full mx-4 border border-gold-600/30 z-50 shadow-2xl shadow-gold-900/30"
                style={{
                  animation: 'fadeIn 0.3s ease-out',
                }}
              >
                <button
                  onClick={() => setShowProductInfo(false)}
                  className="absolute top-4 right-4 text-gold-300 hover:text-gold-100 text-xl transition-colors"
                >
                  <FaTimes />
                </button>
                
                <div className="mb-4 rounded-xl overflow-hidden border border-gold-600/20">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gold-50 mb-2">{selectedProduct.name}</h3>
                <p className="text-gold-300 mb-4 text-lg font-semibold">Price: {selectedProduct.price}</p>
                
                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-gray-900 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-500 transition-all duration-300 flex items-center justify-center gap-2">
                    <FaShoppingBag />
                    Add to Cart
                  </button>
                  <button className="p-3 bg-gold-800/40 rounded-lg hover:bg-gold-700/60 transition-all duration-300 border border-gold-600/30">
                    <FaHeart className="text-gold-300" />
                  </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gold-600/20">
                  <div className="flex items-center gap-2 text-sm text-gold-400">
                    <FaInfoCircle />
                    <span>Click outside to close</span>
                  </div>
                </div>
              </div>
            )}

            {/* Click outside to close product info */}
            {showProductInfo && (
              <div 
                className="absolute inset-0 z-40"
                onClick={() => setShowProductInfo(false)}
              />
            )}
          </div>

          {/* Category Filter */}
          <div className="bg-gradient-to-r from-gold-900/30 to-gold-800/20 backdrop-blur-sm border-t border-gold-600/20 p-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 border ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-gray-900 border-gold-500 font-semibold'
                      : 'bg-gold-900/30 text-gold-200 hover:bg-gold-800/40 border-gold-600/30'
                  }`}
                >
                  <span className={activeCategory === category.id ? 'text-gray-900' : 'text-gold-300'}>
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-gold-900/20 to-gold-800/10 backdrop-blur-sm rounded-2xl p-6 border border-gold-600/20 hover:border-gold-500/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-gold-500/30">
              <Md360 className="text-2xl text-gold-400" />
            </div>
            <h3 className="text-xl font-bold text-gold-100 mb-2">360° View</h3>
            <p className="text-gold-300/80">Rotate and inspect premium products from every angle</p>
          </div>
          
          <div className="bg-gradient-to-br from-gold-900/20 to-gold-800/10 backdrop-blur-sm rounded-2xl p-6 border border-gold-600/20 hover:border-gold-500/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-gold-500/30">
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gold-100 mb-2">Virtual Try-On</h3>
            <p className="text-gold-300/80">See how luxury items look before purchase</p>
          </div>
          
          <div className="bg-gradient-to-br from-gold-900/20 to-gold-800/10 backdrop-blur-sm rounded-2xl p-6 border border-gold-600/20 hover:border-gold-500/40 transition-all duration-300 group hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-gold-500/30">
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gold-100 mb-2">Share Experience</h3>
            <p className="text-gold-300/80">Share your favorite luxury finds with friends</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gold-300 mb-6">Experience luxury shopping like never before</p>
          <button className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-gray-900 rounded-full font-semibold hover:from-gold-600 hover:to-gold-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 flex items-center gap-3 mx-auto group">
            <span>Book Private Virtual Tour</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Hidden element to ensure animations work */}
      <div className="hidden">
        <div className="animate-[fadeIn_0.3s_ease-out]"></div>
      </div>
    </section>
  );
};

export default VirtualShowroom;