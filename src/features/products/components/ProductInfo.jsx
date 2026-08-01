import React from "react";

import {
  Heart,
  Share2,
  Star,
} from "lucide-react";

const ProductInfo = ({
  product,
}) => {

  const variant =
    product?.variants?.[0];

  const attributes =
    variant?.attributes || [];

  const getAttr = (key) =>
    attributes.find(
      (a) => a.key === key
    )?.value;

  const salePrice =
    variant?.price?.sale;

  const basePrice =
    variant?.price?.base;

  const discount =
    basePrice && salePrice
      ? Math.round(
          ((basePrice - salePrice)
            / basePrice) * 100
        )
      : 0;

  return (

    <div>

      {/* BRAND */}

      <p
        className="
          text-[11px]
          uppercase

          tracking-[0.28em]

          text-neutral-500
        "
      >

        {product?.brand}

      </p>

      {/* TITLE */}

      <h1
        className="
          mt-4

          text-4xl
          lg:text-5xl

          font-light
          tracking-tight

          text-neutral-900
        "
      >

        {product?.title}

      </h1>

      {/* RATING */}

      <div
        className="
          flex
          items-center

          gap-3

          mt-6
        "
      >

        <div
          className="
            flex
            items-center
            gap-1
          "
        >

          {[1,2,3,4,5].map((star) => (

            <Star
              key={star}

              size={15}

              fill={
                star <= Math.round(
                  product?.rating?.value
                )
                  ? "#c5a46d"
                  : "none"
              }

              className="
                text-[#c5a46d]
              "
            />

          ))}

        </div>

        <span
          className="
            text-sm
            text-neutral-500
          "
        >

          {product?.rating?.count || 0}
          {" "}
          reviews

        </span>

      </div>

      {/* PRICE */}

      <div
        className="
          flex
          items-end

          gap-4

          mt-8
        "
      >

        <span
          className="
            text-4xl
            font-light

            text-black
          "
        >

          ₹{salePrice?.toLocaleString()}

        </span>

        {basePrice > salePrice && (

          <span
            className="
              text-lg
              line-through

              text-neutral-400
            "
          >

            ₹{basePrice?.toLocaleString()}

          </span>

        )}

        {discount > 0 && (

          <span
            className="
              text-sm

              text-green-700
            "
          >

            {discount}% OFF

          </span>

        )}

      </div>

      {/* FOMO */}

      <div
        className="
          mt-6

          flex
          flex-col

          gap-2
        "
      >

        {product?.fomo?.enabled && (

          <p
            className="
              text-[13px]
              text-neutral-700
            "
          >

            🔥
            {" "}
            {product?.fomo?.viewingNow}
            {" "}
            people are viewing
            this right now

          </p>

        )}

        {product?.soldInfo?.enabled && (

          <p
            className="
              text-[13px]
              text-neutral-700
            "
          >

            ✨
            {" "}
            {product?.soldInfo?.count}
            {" "}
            people bought this
            product

          </p>

        )}

      </div>

      {/* DESCRIPTION */}

      <p
        className="
          mt-8

          text-[15px]
          leading-[1.9]

          text-neutral-600
        "
      >

        {product?.description}

      </p>

      {/* ATTRIBUTES */}

      <div
        className="
          mt-8

          flex
          flex-col

          gap-4
        "
      >

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-neutral-200

            pb-3
          "
        >

          <span
            className="
              text-[12px]
              uppercase

              tracking-[0.18em]

              text-neutral-400
            "
          >

            Material

          </span>

          <span
            className="
              text-sm
            "
          >

            {getAttr("Material")}

          </span>

        </div>

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-neutral-200

            pb-3
          "
        >

          <span
            className="
              text-[12px]
              uppercase

              tracking-[0.18em]

              text-neutral-400
            "
          >

            Plating

          </span>

          <span
            className="
              text-sm
            "
          >

            {getAttr("Plating")}

          </span>

        </div>

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-neutral-200

            pb-3
          "
        >

          <span
            className="
              text-[12px]
              uppercase

              tracking-[0.18em]

              text-neutral-400
            "
          >

            Occasion

          </span>

          <span
            className="
              text-sm
            "
          >

            {getAttr("Occasion")}

          </span>

        </div>

      </div>

      {/* CTA */}

      <div
        className="
          mt-10

          flex
          flex-col

          gap-4
        "
      >

        <button
          className="
            h-14

            bg-black
            text-white

            uppercase
            tracking-[0.24em]

            text-[11px]

            hover:bg-neutral-800

            transition
          "
        >

          Add To Cart

        </button>

        <div
          className="
            grid
            grid-cols-2

            gap-4
          "
        >

          <button
            className="
              h-14

              border
              border-neutral-300

              flex
              items-center
              justify-center
              gap-2

              uppercase
              tracking-[0.18em]

              text-[11px]

              hover:border-black

              transition
            "
          >

            <Heart size={16} />

            Wishlist

          </button>

          <button
            className="
              h-14

              border
              border-neutral-300

              flex
              items-center
              justify-center
              gap-2

              uppercase
              tracking-[0.18em]

              text-[11px]

              hover:border-black

              transition
            "
          >

            <Share2 size={16} />

            Share

          </button>

        </div>

      </div>

    </div>

  );

};

export default ProductInfo;