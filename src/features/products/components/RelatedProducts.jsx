import React from "react";

import ProductCard
from "./ProductCard";

const MOCK_PRODUCTS = [

  {
    id: 1,
    name: "Noir Bracelet",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",

    material: "Gold",

    color: "Black",

    price: 9999,

    originalPrice: 12999,
  },

  {
    id: 2,
    name: "Velour Chain",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",

    material: "Silver",

    color: "Silver",

    price: 7999,

    originalPrice: 10999,
  },

  {
    id: 3,
    name: "Celeste Ring",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop",

    material: "Gold",

    color: "Gold",

    price: 11999,

    originalPrice: 14999,
  },

];

const RelatedProducts = () => {

  return (

    <section
      className="
        mt-24
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-end
          justify-between

          mb-12
        "
      >

        <div>

          <p
            className="
              text-[11px]
              uppercase

              tracking-[0.28em]

              text-neutral-500
            "
          >

            Curated Selection

          </p>

          <h2
            className="
              mt-4

              text-3xl
              md:text-5xl

              font-light
              tracking-tight
            "
          >

            Related Products

          </h2>

        </div>

      </div>

      {/* PRODUCTS */}

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-3

          gap-6
        "
      >

        {MOCK_PRODUCTS.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  );

};

export default RelatedProducts;