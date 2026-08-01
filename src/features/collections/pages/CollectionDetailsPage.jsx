import React, { useMemo, useState } from "react";

import { useParams } from "react-router-dom";

import CollectionHero from "../components/CollectionHero";
import CollectionFilters from "../components/CollectionFilters";
import CollectionToolbar from "../components/CollectionToolbar";
import CollectionGrid from "../components/CollectionGrid";

import {
  useGetProductsByCategoryQuery,
} from "../../products/services/productApi";

import {
  applyFilters,
  applySort,
} from "../../../utils/filters";

// ─────────────────────────────────────────────
// Initial Filters
// ─────────────────────────────────────────────

const INITIAL_FILTERS = {

  colors: [],
  platings: [],
  occasions: [],
  productTypes: [],

  price: null,
  discount: null,
  rating: null,

};

// ─────────────────────────────────────────────
// Fallback Hero Image
// ─────────────────────────────────────────────

const FALLBACK_HERO_IMAGE =
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=2000&auto=format&fit=crop";

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

const CollectionDetailsPage = () => {

  // ───────────────────────────────────────────
  // Route Params
  // ───────────────────────────────────────────

//   const { slug } = useParams();
const slug = "jwelleries"

  // ───────────────────────────────────────────
  // Local UI State
  // ───────────────────────────────────────────

  const [filters, setFilters] =
    useState(INITIAL_FILTERS);

  const [sortBy, setSortBy] =
    useState("featured");

  const [view, setView] =
    useState("grid");

  // ───────────────────────────────────────────
  // API
  // ───────────────────────────────────────────

  const {
    data,
    isLoading,
    isFetching,
    error,
  } = useGetProductsByCategoryQuery({
    slug,
  });

  // ───────────────────────────────────────────
  // Backend Data
  // ───────────────────────────────────────────

  const products =
    data?.products || [];

  const collection =
    data?.category || {};

  // ───────────────────────────────────────────
  // Frontend Filtering + Sorting
  // ───────────────────────────────────────────

  const finalProducts = useMemo(() => {

    const filteredProducts =
      applyFilters(
        products,
        filters
      );

    return applySort(
      filteredProducts,
      sortBy
    );

  }, [products, filters, sortBy]);

  // ───────────────────────────────────────────
  // Handlers
  // ───────────────────────────────────────────

  const handleFilterChange = (
    key,
    value
  ) => {

    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

  };

  const handleClearFilters = () => {

    setFilters(INITIAL_FILTERS);

  };

  // ───────────────────────────────────────────
  // Loading State
  // ───────────────────────────────────────────

  if (isLoading) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#faf9f7]
        "
      >

        <p
          className="
            text-sm
            tracking-[0.18em]
            uppercase
            text-neutral-500
          "
        >
          Loading Collection...
        </p>

      </div>

    );

  }

  // ───────────────────────────────────────────
  // Error State
  // ───────────────────────────────────────────

  if (error) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#faf9f7]
        "
      >

        <div className="text-center">

          <h2
            className="
              text-2xl
              font-light
              tracking-tight
              text-neutral-900
              mb-3
            "
          >
            Something went wrong
          </h2>

          <p
            className="
              text-sm
              text-neutral-500
            "
          >
            Failed to load this collection.
          </p>

        </div>

      </div>

    );

  }

  // ───────────────────────────────────────────
  // Render
  // ───────────────────────────────────────────

  return (

    <div className="min-h-screen bg-[#faf9f7]">

      {/* ───────────────────────────────────── */}
      {/* HERO */}
      {/* ───────────────────────────────────── */}

      <CollectionHero

        title={
          collection?.name ||
          "Luxury Collection"
        }

        description={
          collection?.description ||
          "Curated fashion pieces crafted for elevated styling and timeless luxury."
        }

        image={
          collection?.heroImage ||
          FALLBACK_HERO_IMAGE
        }

      />

      {/* ───────────────────────────────────── */}
      {/* CONTENT */}
      {/* ───────────────────────────────────── */}

      <section
        className="
          px-4
          sm:px-6
          lg:px-10
          py-10
        "
      >

        <div className="max-w-[1600px] mx-auto">

          {/* ───────────────────────────────── */}
          {/* TOOLBAR */}
          {/* ───────────────────────────────── */}

          <CollectionToolbar

            productCount={
              finalProducts.length
            }

            sortBy={sortBy}

            onSortChange={
              setSortBy
            }

            onViewChange={
              setView
            }

            isLoading={
              isFetching
            }

          />

          {/* ───────────────────────────────── */}
          {/* GRID LAYOUT */}
          {/* ───────────────────────────────── */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[220px_1fr]
              gap-10
            "
          >

            {/* ───────────────────────────── */}
            {/* FILTERS */}
            {/* ───────────────────────────── */}

            <CollectionFilters

              filters={filters}

              onChange={
                handleFilterChange
              }

              onClear={
                handleClearFilters
              }

            />

            {/* ───────────────────────────── */}
            {/* PRODUCTS */}
            {/* ───────────────────────────── */}

            <CollectionGrid

              products={finalProducts}

              view={view}

            />

          </div>

        </div>

      </section>

    </div>

  );

};

export default CollectionDetailsPage;