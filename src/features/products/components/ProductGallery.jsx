import React,
{
  useState,
  useRef,
} from "react";

import {
  Heart,
} from "lucide-react";

const ProductGallery = ({
  product,
}) => {

  const images =
    product?.images?.length
      ? product.images
      : [product?.image];

  const [mainImage,
    setMainImage] =
    useState(images?.[0]);

  const [showZoom,
    setShowZoom] =
    useState(false);

  const [zoomPosition,
    setZoomPosition] =
    useState({
      x: 50,
      y: 50,
    });

  const zoomRef =
    useRef(null);

  const handleMove =
    (e) => {

      const rect =
        e.currentTarget.getBoundingClientRect();

      const x =
        ((e.clientX - rect.left)
          / rect.width) * 100;

      const y =
        ((e.clientY - rect.top)
          / rect.height) * 100;

      setZoomPosition({
        x,
        y,
      });

    };

  return (

    <div
      className="
        flex
        gap-5
      "
    >

      {/* THUMBNAILS */}

      <div
        className="
          hidden
          sm:flex

          flex-col
          gap-4
        "
      >

        {images.map((img, i) => (

          <button
            key={i}

            onMouseEnter={() =>
              setMainImage(img)
            }

            className="
              overflow-hidden

              border

              border-neutral-200

              hover:border-black

              transition
            "
          >

            <img
              src={img}
              alt="thumb"

              className="
                w-20
                h-24

                object-cover
              "
            />

          </button>

        ))}

      </div>

      {/* MAIN IMAGE */}

      <div
        className="
          relative
          flex-1

          bg-white

          overflow-hidden
        "
      >

        <div
          className="
            relative
            overflow-hidden
            cursor-crosshair
          "

          onMouseEnter={() =>
            setShowZoom(true)
          }

          onMouseLeave={() =>
            setShowZoom(false)
          }

          onMouseMove={handleMove}
        >

          <img
            src={mainImage}

            alt={product?.name}

            className="
              w-full
              h-[720px]

              object-cover
            "
          />

        </div>

        {/* WISHLIST */}

        <button
          className="
            absolute
            top-5
            right-5

            w-11
            h-11

            flex
            items-center
            justify-center

            bg-white/90
            backdrop-blur-md
          "
        >

          <Heart
            size={18}
          />

        </button>

      </div>

      {/* ZOOM */}

      {showZoom && (

        <div
          ref={zoomRef}

          className="
            hidden
            xl:block

            fixed
            right-10
            top-1/2

            -translate-y-1/2

            w-[380px]
            h-[500px]

            bg-white

            border
            border-neutral-200

            z-50
          "

          style={{

            backgroundImage:
              `url(${mainImage})`,

            backgroundPosition:
              `${zoomPosition.x}% ${zoomPosition.y}%`,

            backgroundSize:
              "220%",

            backgroundRepeat:
              "no-repeat",

          }}
        />

      )}

    </div>

  );

};

export default ProductGallery;