import React, {
  useEffect,
  useState,
} from "react";

// ─────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────

import HeroSection from "../components/Herosection";

// import CategoryGrid from "../components/CategoryGrid";

import TrendingNow from "../components/TrendingNow";

import NewArrivals from "../components/NewArrivals";

import BestSellers from "../components/BestSellers";

import FashionStories from "../components/FashionStories";

import DealsBanner from "../components/DealsBanner";

import ShopByCategory from "../components/ShopByCategory";

import BrandShowcase from "../components/BrandShowCase";

import FashionEcomGallery
  from "../components/FashionVideoGallery";

import AsSeenOn from "../components/AsSeenOn";

import VIPMembership
  from "../components/VIPMembership";

import BrandArchiveTimeline
  from "../components/BrandArchiveTimeline";

import MaterialDeepDive
  from "../components/MaterialDeepDive";

import ShopBySlider
  from "../components/ShopBySlider";

// ─────────────────────────────────────────────
// Skeletons
// ─────────────────────────────────────────────

// import ShopByCategorySkeleton
//   from "../skeletons/ShopByCategorySkeleton";

// import CategoryGridSkeleton
//   from "../skeletons/CategoryGridSkeleton";

// import NewArrivalsSkeleton
//   from "../skeletons/NewArrivalsSkeleton";

// import BestSellersSkeleton
//   from "../skeletons/BestSellersSkeleton";

// import FashionEcomGallerySkeleton
//   from "../skeletons/FashionEcomGallerySkeleton";

const HomepageSections = () => {

  const [showSkeletons, setShowSkeletons] =
    useState(false);

  useEffect(() => {

    const hasVisitedBefore =
      sessionStorage.getItem(
        "hasVisitedHomepage"
      );

    if (!hasVisitedBefore) {

      setShowSkeletons(true);

      const timer = setTimeout(() => {

        setShowSkeletons(false);

        sessionStorage.setItem(
          "hasVisitedHomepage",
          "true"
        );

      }, 3000);

      return () => clearTimeout(timer);
    }

  }, []);

  return (

    <div className="min-h-screen bg-white">

      <HeroSection />

      {/* {showSkeletons ? (
        <ShopByCategorySkeleton />
      ) : (
        <ShopByCategory />
      )} */}

      <ShopBySlider />

      {/* {showSkeletons ? (
        <CategoryGridSkeleton />
      ) : (
        <CategoryGrid />
      )} */}

      <DealsBanner />
{/* 
      {showSkeletons ? (
        <NewArrivalsSkeleton />
      ) : (
        <NewArrivals />
      )} */}

      {/* {showSkeletons ? (
        <BestSellersSkeleton />
      ) : (
        <BestSellers />
      )} */}

      <FashionStories />

      <TrendingNow />

      {/* {showSkeletons ? (
        <FashionEcomGallerySkeleton />
      ) : (
        <FashionEcomGallery />
      )} */}

      <MaterialDeepDive />

      <BrandArchiveTimeline />

      <AsSeenOn />

      <VIPMembership />

      <BrandShowcase />

    </div>
  );
};

export default HomepageSections;