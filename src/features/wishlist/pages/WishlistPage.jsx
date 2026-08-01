import React from "react";

const WishlistPage = () => {

  return (

    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="mb-14">

          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
            Your Saved Pieces
          </p>

          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-black">
            Wishlist
          </h1>

        </div>

        <div className="border border-neutral-200 rounded-[28px] p-10 sm:p-16 text-center bg-[#fafafa]">

          <p className="text-lg text-neutral-600">
            Your wishlist is currently empty.
          </p>

          <button className="mt-8 px-8 py-3 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-90 transition">

            Explore Collection

          </button>

        </div>

      </div>

    </div>

  );
};

export default WishlistPage;