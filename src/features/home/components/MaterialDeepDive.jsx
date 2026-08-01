import React, { useState, useRef } from 'react';
import { ChevronRight, Gem, ShieldCheck, Fingerprint } from 'lucide-react';
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
const MaterialDeepDive = () => {
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);
  const containerRef = useRef(null);

  // High-res jewelry texture image (gold / diamond macro)
  const textureImage =
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop";
    // vjs230;

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setZoomPos({ x, y });
  };

  return (
    <section className="bg-[#fafafa] py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-zinc-300"></span>
            <span className="text-[10px] tracking-[0.5em] font-bold font-lato text-zinc-400 uppercase">
              Craftsmanship Inspection
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter  text-fab-pink uppercase">
            Gold <span className="text-[rgb(209,167,67)]">&</span> Diamond
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT: Interactive Magnifier */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
            className="relative aspect-[4/5] bg-zinc-200 cursor-none overflow-hidden rounded-sm group shadow-2xl"
          >

            <img
              src={textureImage}
              alt="Jewelry Texture"
              className="w-full h-full object-cover transition-all duration-700"
            />

            {showLens && (
              <div
                className="absolute pointer-events-none border-2 border-white/50 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-no-repeat overflow-hidden"
                style={{
                  width: "250px",
                  height: "250px",
                  left: `${zoomPos.x}%`,
                  top: `${zoomPos.y}%`,
                  transform: "translate(-50%, -50%)",
                  backgroundImage: `url(${textureImage})`,
                  backgroundSize: "600%",
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  zIndex: 20,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
              </div>
            )}

            <div className="absolute bottom-6 left-6 text-white z-10 transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <Fingerprint size={14} />
                <span className="text-[10px] tracking-widest uppercase">
                  Hover to inspect craftsmanship
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Jewelry Details */}
          <div className="flex flex-col space-y-12">

            <div className="space-y-6">
              <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tight">
                18K Solid Gold <br /> Natural Diamonds
              </h3>

              <p className="text-zinc-500 leading-relaxed max-w-md font-lato font-light">
                Our jewelry pieces are handcrafted by skilled artisans using
                certified 18K gold and ethically sourced natural diamonds.
                Every gemstone is carefully selected for brilliance, clarity,
                and precision setting to ensure timeless elegance.
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-8 border-t border-zinc-200 pt-8">

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[rgb(209,167,67)]">
                  <Gem size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Diamond Clarity
                  </span>
                </div>
                <p className="text-xl font-medium text-zinc-800">VVS1</p>
                <p className="text-[10px] text-zinc-400 uppercase">
                  Exceptional brilliance
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[rgb(209,167,67)]">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Gold Purity
                  </span>
                </div>
                <p className="text-xl font-medium text-zinc-800">18K (75%)</p>
                <p className="text-[10px] text-zinc-400 uppercase">
                  Hallmarked Certification
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="group flex items-center gap-6 px-8 py-5 bg-fab-pink text-white hover:bg-[rgb(209,167,67)] transition-all duration-500 rounded-sm">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Shop Jewelry
                </span>
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex gap-8 opacity-40">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/35/BIS_Hallmark_Logo.svg"
                className="h-10 grayscale hover:grayscale-0 transition-all"
                alt="BIS Hallmark"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/GIA_logo.svg"
                className="h-10 grayscale hover:grayscale-0 transition-all"
                alt="GIA Certified"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialDeepDive;











