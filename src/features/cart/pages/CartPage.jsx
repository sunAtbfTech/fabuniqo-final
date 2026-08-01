import React from "react";

const CartPage = () => {

  return (

    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="mb-14">

          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
            Your Bag
          </p>

          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-black">
            Shopping Cart
          </h1>

        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">

          {/* LEFT */}

          <div className="border border-neutral-200 rounded-[30px] p-10 bg-[#fafafa] min-h-[300px] flex items-center justify-center">

            <p className="text-neutral-600 text-lg">
              Your cart is empty.
            </p>

          </div>

          {/* RIGHT */}

          <div className="border border-neutral-200 rounded-[30px] p-8 h-fit sticky top-24">

            <h2 className="text-xl font-medium mb-8">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm text-neutral-600">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹0</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

            </div>

            <button className="w-full mt-10 bg-black text-white py-4 rounded-full text-sm tracking-wide hover:opacity-90 transition">

              Proceed to Checkout

            </button>

          </div>

        </div>

      </div>

    </div>

  );
};

export default CartPage;