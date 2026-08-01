import React from "react";

const ITEMS = [

  "Free Worldwide Shipping",
  "Hallmarked Jewellery",
  "Secure Payments",
  "Easy 7 Day Returns",

];

const ProductMeta = () => {

  return (

    <section
      className="
        mt-20

        border-y
        border-neutral-200

        py-7
      "
    >

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4

          gap-8
        "
      >

        {ITEMS.map((item) => (

          <div
            key={item}

            className="
              text-center
            "
          >

            <p
              className="
                text-[11px]
                uppercase

                tracking-[0.24em]

                text-neutral-600
              "
            >

              {item}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

};

export default ProductMeta;