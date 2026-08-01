import React from "react";

import {
  useLocation,
} from "react-router-dom";

import ProductGallery
from "../components/ProductGallery";

import ProductInfo
from "../components/ProductInfo";

import ProductMeta
from "../components/ProductMeta";

import ProductAccordion
from "../components/ProductAccordion";

import ProductReviews
from "../components/ProductReviews";

import RelatedProducts
from "../components/RelatedProducts";

const ProductDetailsPage = () => {

  const location =
    useLocation();

  const product =
    location.state?.product;
    console.log(product);
    

  if (!product) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >

        Product not found

      </div>

    );

  }
  const variant =
  product?.variants?.[0];

const attributes =
  variant?.attributes || [];

const getAttr = (key) =>
  attributes.find(
    (a) => a.key === key
  )?.value;

const normalizedProduct = {

  ...product,

  image:
    variant?.images?.[0]?.url ||

    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",

  images:
    variant?.images?.map(
      (img) => img?.url
    ) || [],

  price:
    variant?.price?.sale,

  originalPrice:
    variant?.price?.base,

  material:
    getAttr("Material"),

  plating:
    getAttr("Plating"),

  color:
    getAttr("Color"),

  occasion:
    getAttr("Occasion"),

  type:
    getAttr("Type"),

  rating:
    product?.rating?.value,

  reviews:
    product?.rating?.count,

};

  return (

    <section
      className="
        bg-[#faf9f7]
        min-h-screen

        px-4
        sm:px-6
        lg:px-10

        py-10
      "
    >

      <div
        className="
          max-w-[1500px]
          mx-auto
        "
      >

        {/* TOP SECTION */}

        <div
          className="
            grid
            lg:grid-cols-2

            gap-14
            xl:gap-20
          "
        >

          <ProductGallery
            product={normalizedProduct}
          />

          <div>

            <div
              className="
                lg:sticky
                lg:top-24
              "
            >

              <ProductInfo
                product={normalizedProduct}
              />

            </div>

          </div>

        </div>

        {/* META */}

        <ProductMeta />

        {/* ACCORDION */}

        <ProductAccordion
          product={normalizedProduct}
        />

        {/* REVIEWS */}

        <ProductReviews
          product={normalizedProduct}
        />

        {/* RELATED */}

        <RelatedProducts />

      </div>

    </section>

  );

};

export default ProductDetailsPage;