import React, {
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  className = "",
  onClick,
  onAddToCart,
}) => {

  const [wishlisted, setWishlisted] =
    useState(false);

  const [currentImage, setCurrentImage] =
    useState(0);
    const navigate = useNavigate();

  // ─────────────────────────────────────────────
  // Images
  // ─────────────────────────────────────────────

  const images = useMemo(() => {

    const variantImages =
      product?.images ||
      product?.variant?.images ||
      [];

    const normalized =
      variantImages
        .map((img) =>
          typeof img === "string"
            ? img
            : img?.url
        )
        .filter(Boolean);

    if (
      !normalized.length &&
      (product?.image || product?.img)
    ) {

      return [
        product?.image ||
        product?.img,
      ];

    }

    return normalized;

  }, [product]);

  // ─────────────────────────────────────────────
  // Price
  // ─────────────────────────────────────────────

  const finalPrice =
    product?.price || 0;

  const originalPrice =
    product?.originalPrice;

  // ─────────────────────────────────────────────
  // Name
  // ─────────────────────────────────────────────

  const formattedName =
    product?.name
      ?.replace(/,/g, ", ")
      ?.toUpperCase();

  // ─────────────────────────────────────────────
  // Subtitle
  // ─────────────────────────────────────────────

  const materialText = [

    product?.material,
    product?.color,

  ]
    .filter(Boolean)
    .join(" · ");

  // ─────────────────────────────────────────────
  // Carousel
  // ─────────────────────────────────────────────

  const nextImage = (e) => {

    e.stopPropagation();

    setCurrentImage((prev) =>

      prev === images.length - 1
        ? 0
        : prev + 1

    );

  };

  return (

    <article

      onClick={onClick}

      className={`
        group
        relative
        w-full
        cursor-pointer

        ${className}
      `}
    >

      <div
        className="
          relative

          overflow-hidden
          border

          hover:border
          hover:border-[#ddd7cf]

          bg-[#f8f6f2]

          transition-all
          duration-500

          group-hover:border-[#c8beb2]
          group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        "
      >

        {/* ───────────────────────────────── */}
        {/* IMAGE */}
        {/* ───────────────────────────────── */}

        <div
          className="
            relative

            overflow-hidden

            bg-[#f3efe9]

            w-full h-72 p-6
          "
        >

          {/* IMAGE */}

          <img

            src={images[currentImage]}

            alt={product?.name}

            className="
              h-full
              w-full

              object-cover

              transition-transform
              duration-[1800ms]

              ease-[cubic-bezier(0.19,1,0.22,1)]

            "

          />

          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0

              bg-black/5

              opacity-0

              group-hover:opacity-100

              transition-all
              duration-700
            "
          />

          {/* ───────────────────────────── */}
          {/* TOP ACTIONS */}
          {/* ───────────────────────────── */}

          <div
            className="
              absolute
              top-4
              right-4

              flex
              flex-col
              gap-2

              opacity-0
              translate-y-2

              group-hover:opacity-100
              group-hover:translate-y-0

              transition-all
              duration-500
            "
          >

            {/* WISHLIST */}

            <button

              onClick={(e) => {

                e.stopPropagation();

                setWishlisted(
                  !wishlisted
                );

              }}

              className="
                h-9
                w-9

                flex
                items-center
                justify-center
                mr-4 mt-4

                rounded-full

                bg-white
                backdrop-blur-md

                shadow-sm

                transition-all
                duration-300

                hover:scale-105
              "
            >

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill={
                  wishlisted
                    ? "#080606"
                    : "none"
                }
                stroke="#080505"
                strokeWidth="1.2"
              >

                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />

              </svg>

            </button>

            {/* NEXT IMAGE */}

            {images.length > 1 && (

              <button

                onClick={nextImage}

                className="
                  h-9
                  w-9

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-white/92
                  backdrop-blur-md

                  shadow-sm

                  transition-all
                  duration-300

                  hover:scale-105
                "
              >

                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >

                  <polyline points="9 18 15 12 9 6" />

                </svg>

              </button>

            )}

          </div>

          {/* ───────────────────────────── */}
          {/* BOTTOM HOVER CTA */}
          {/* ───────────────────────────── */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0

              p-4

              translate-y-full

              group-hover:translate-y-0

              transition-all
              duration-500

              ease-out
            "
          >

            <div
              className="
                grid
                grid-cols-2
                gap-2
              "
            >

              {/* DISCOVER */}

              <button

                onClick={(e) => {

                  e.stopPropagation();
                  navigate(
  `/products/${product.slug}`,
  {
    state: {
      product,
    },
  }
)

                  onClick?.();

                }}

                className="
                  bg-white
                  text-black

                  py-3

                  text-[10px]
                  uppercase

                  tracking-[0.24em]

                  transition-all
                  duration-300

                  hover:bg-black
                  hover:text-white
                "
              >

                Discover

              </button>

              {/* CART */}

              <button

                onClick={(e) => {

                  e.stopPropagation();

                  onAddToCart?.(product);

                }}

                className="
                  bg-black
                  text-white

                  py-3

                  text-[10px]
                  uppercase

                  tracking-[0.22em]

                  transition-all
                  duration-300

                  hover:bg-neutral-800
                "
              >

                Add Cart

              </button>

            </div>

          </div>

          {/* ───────────────────────────── */}
          {/* IMAGE PROGRESS */}
          {/* ───────────────────────────── */}

          {images.length > 1 && (

            <div
              className="
                absolute
                bottom-0
                left-0

                flex
                w-full
                gap-[2px]

                px-3
                pb-2
              "
            >

              {images.map((_, idx) => (

                <div
                  key={idx}
                  className="
                    h-[2px]
                    flex-1

                    overflow-hidden

                    bg-white/20
                  "
                >

                  <div
                    className={`
                      h-full
                      bg-white

                      transition-all
                      duration-500

                      ${
                        idx === currentImage
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />

                </div>

              ))}

            </div>

          )}

        </div>

        {/* ───────────────────────────────── */}
        {/* CONTENT */}
        {/* ───────────────────────────────── */}

        <div
          className="
            px-5

            pt-6
            pb-7

            text-center
          "
        >

          {/* TITLE */}

          <h3
            className="
              mx-auto

              max-w-[240px]

              text-[13px]
              uppercase

              tracking-[0.12em]

              leading-[1.7]

              text-neutral-900
            "
          >

            {formattedName}

          </h3>

          {/* SUBTITLE */}

          {materialText && (

            <p
              className="
                mt-3

                text-[11px]

                tracking-[0.04em]

                text-neutral-500
              "
            >

              {materialText}

            </p>

          )}

          {/* PRICE */}

          <div
            className="
              mt-4

              flex
              items-center
              justify-center
              gap-3
            "
          >

            <span
              className="
                text-[15px]

                tracking-[0.04em]

                text-black
              "
            >

              INR {finalPrice?.toLocaleString()}

            </span>

            {originalPrice && (

              <span
                className="
                  text-[11px]
                  text-neutral-400
                  line-through
                "
              >

                INR {originalPrice?.toLocaleString()}

              </span>

            )}

          </div>

        </div>

      </div>

      {/* ───────────────────────────────────── */}
      {/* MOBILE ACTIONS */}
      {/* ───────────────────────────────────── */}

      <div
        className="
          mt-3

          grid
          grid-cols-2
          gap-2

          sm:hidden
        "
      >

        <button
          onClick={(e) => {

            e.stopPropagation();

            onClick?.();

          }}

          className="
            border
            border-black

            bg-white

            py-3

            text-[10px]
            uppercase

            tracking-[0.2em]
          "
        >

          Discover

        </button>

        <button
          onClick={(e) => {

            e.stopPropagation();

            onAddToCart?.(product);

          }}

          className="
            bg-black
            text-white

            py-3

            text-[10px]
            uppercase

            tracking-[0.2em]
          "
        >

          Add Cart

        </button>

      </div>

    </article>

  );

};

export default ProductCard;