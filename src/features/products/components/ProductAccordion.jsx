import React,
{
  useState,
} from "react";

const ProductAccordion = ({
  product,
}) => {

  const [open,
    setOpen] =
    useState("details");

  const items = [

    {
      id: "details",
      title: "Product Details",
      content:
        product?.description,
    },

    {
      id: "material",
      title: "Material & Care",
      content:
        `${product?.material}
        •
        ${product?.plating}`,
    },

    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping. Easy 7 day returns available.",
    },

  ];

  return (

    <section
      className="
        mt-20
      "
    >

      {items.map((item) => (

        <div
          key={item.id}

          className="
            border-b
            border-neutral-200
          "
        >

          <button
            onClick={() =>
              setOpen(
                open === item.id
                  ? null
                  : item.id
              )
            }

            className="
              w-full

              flex
              items-center
              justify-between

              py-7
            "
          >

            <span
              className="
                text-[12px]
                uppercase

                tracking-[0.24em]
              "
            >

              {item.title}

            </span>

            <span>

              {open === item.id
                ? "−"
                : "+"}

            </span>

          </button>

          {open === item.id && (

            <div
              className="
                pb-8

                text-[15px]
                leading-[1.9]

                text-neutral-600
              "
            >

              {item.content}

            </div>

          )}

        </div>

      ))}

    </section>

  );

};

export default ProductAccordion;