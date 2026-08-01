import React from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

// ─────────────────────────────────────────────
// Layouts
// ─────────────────────────────────────────────

import MainLayout from "../components/layout/MainLayout";
// import AuthLayout from "@/components/layout/AuthLayout";
// import CheckoutLayout from "@/components/layout/CheckoutLayout";

// ─────────────────────────────────────────────
// Main Pages
// ─────────────────────────────────────────────

import Homepage from "../pages/Homepage";
// import AboutPage from "@/pages/AboutPage";
// import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

// ─────────────────────────────────────────────
// Product Pages
// ─────────────────────────────────────────────

// import ProductsPage from "@/features/products/pages/ProductsPage";
// import ProductDetailsPage from "@/features/products/pages/ProductDetailsPage";

// ─────────────────────────────────────────────
// Collection Pages
// ─────────────────────────────────────────────

import CollectionsPage from "../features/collections/pages/CollectionsPage";
import CollectionDetailsPage from "../features/collections/pages/CollectionDetailsPage";

// ─────────────────────────────────────────────
// Auth Pages
// ─────────────────────────────────────────────

// import LoginPage from "@/features/auth/pages/LoginPage";
// import RegisterPage from "@/features/auth/pages/RegisterPage";

// ─────────────────────────────────────────────
// Cart / Wishlist / Checkout
// ─────────────────────────────────────────────

import CartPage from "../features/cart/pages/CartPage";
import WishlistPage from "../features/wishlist/pages/WishlistPage";
import ProductDetailsPage from "../features/products/pages/ProductDetailsPage";
import ProductDetail from "../pages/ProductDetail";
// import CheckoutPage from "@/features/checkout/pages/CheckoutPage";

// ─────────────────────────────────────────────
// Account
// ─────────────────────────────────────────────

// import UserDashboard from "@/features/account/pages/UserDashboard";

const MainRoutes = () => {

  return (

    <Routes>

      {/* ───────────────────────────────────── */}
      {/* MAIN WEBSITE LAYOUT */}
      {/* ───────────────────────────────────── */}

    
    
      <Route element={<MainLayout />}>

        {/* Homepage */}
        <Route
          path="/"
          element={<Homepage />}
        />

        {/* Products */}
        {/* <Route
          path="/products"
          element={<ProductsPage />}
        /> */}

        {/* Product Details */}
        {/* <Route
          path="/products/:slug"
          element={<ProductDetailsPage />}
        /> */}

        {/* Collections */}
        {/* <Route
          path="/collections"
          element={<CollectionsPage />}
        /> */}

        {/* Collection Details */}
        <Route
          path="/collections/jwelleries"
          element={<CollectionDetailsPage />}
        />
        <Route
        path="/products/:slug"
        element={<ProductDetailsPage/>}
        />
          <Route path='/productDetail' element={<ProductDetail />} />


        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={<WishlistPage />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* About */}
        {/* <Route
          path="/about"
          element={<AboutPage />}
        /> */}

        {/* Contact */}
        {/* <Route
          path="/contact"
          element={<ContactPage />}
        /> */}
          <Route
        path="*"
        element={<NotFoundPage />}
      />

      </Route>

      {/* ───────────────────────────────────── */}
      {/* AUTH LAYOUT */}
      {/* ───────────────────────────────────── */}

      {/* <Route element={<AuthLayout />}>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

      </Route> */}

      {/* ───────────────────────────────────── */}
      {/* CHECKOUT LAYOUT */}
      {/* ───────────────────────────────────── */}

      {/* <Route element={<CheckoutLayout />}>

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

      </Route> */}

      {/* ───────────────────────────────────── */}
      {/* ACCOUNT */}
      {/* ───────────────────────────────────── */}

      {/*
        TEMPORARILY PUBLIC
        Later protect with auth
      */}

      {/* <Route
        path="/account/*"
        element={<UserDashboard />}
      /> */}

      {/* ───────────────────────────────────── */}
      {/* 404 */}
      {/* ───────────────────────────────────── */}

    </Routes>

  );
};


export default MainRoutes;