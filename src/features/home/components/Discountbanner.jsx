import React from 'react';
import vedio4 from "../../assets/vedio4.mp4";
import discountBanner from "../../assets/discountBanner.png";
import discountImage2 from "../../assets/discountImage2.jpg"; // Import the background image


export default function DiscountBanner() {
  return (
    <>
      <div className="relative w-full h-[500px] overflow-hidden rounded-lg p-10 md:h-[300px] lg:h-[350px]">
        <video 
          src={vedio4} 
          className="w-full h-[550px] object-cover block" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-5">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2.5 text-shadow-[2px_2px_8px_rgba(0,0,0,0.6)]">
            Extra 
            <span 
              className="inline-block bg-cover bg-center text-white font-bold text-2xl md:text-3xl lg:text-4xl text-center rounded-xl mx-2 my-0 px-7 py-6"
              style={{ backgroundImage: `url(${discountImage2})` }}
            >
           
            </span> 
            Off!
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-0 text-shadow-[1px_1px_6px_rgba(0,0,0,0.6)]">
            Shop the latest collection at Fabniquo
          </p>
        </div>
      </div>

      {/* Uncomment if you want to use the discount banner image */}
      {/* <div className="w-full h-auto mt-7">
        <img 
          className="w-full h-auto" 
          src={discountBanner} 
          alt="Discount Banner" 
        />
      </div> */}
    </>
  );
}