import React from "react";

import ProductCard
from "../../products/components/ProductCard";

// ─────────────────────────────────────────────
// No Results
// ─────────────────────────────────────────────

const NoResults = ({
  onClear,
}) => (

  <div className="py-28 text-center">

    <p className="text-4xl mb-4">
      —
    </p>

    <h3
      className="
        text-[13px]
        tracking-[0.18em]
        uppercase
        text-neutral-900
        mb-3
      "
    >
      No Products Found
    </h3>

    <p
      className="
        text-[11px]
        tracking-[0.08em]
        text-neutral-400
        mb-6
      "
    >
      Try adjusting your filters
    </p>

    <button
      onClick={onClear}
      className="
        border
        border-neutral-900

        px-6
        py-3

        text-[10px]
        tracking-[0.18em]
        uppercase

        hover:bg-black
        hover:text-white

        transition-all
        duration-300
      "
    >
      Clear Filters
    </button>

  </div>

);

// ─────────────────────────────────────────────
// Grid
// ─────────────────────────────────────────────

const CollectionGrid = ({
  products = [],
  view = "grid",
}) => {

  if (!products.length) {
    return <NoResults />;
  }

  return (

    <div
      className={`
        grid
        gap-x-6
        gap-y-14
              grid-cols-2
              md:grid-cols-3
              xl:grid-cols-4
            
        }
      `}
    >

      {products.map((product) => (

        <ProductCard

          key={
            product.id ||
            product._id
          }

          product={product}

        />

      ))}

    </div>

  );

};

export default CollectionGrid;