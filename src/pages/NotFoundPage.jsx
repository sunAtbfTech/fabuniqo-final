import React from "react";

import { Link } from "react-router-dom";

const NotFoundPage = () => {

  return (

    <div className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">

          404 Error

        </p>

        <h1 className="text-5xl sm:text-7xl font-light tracking-tight leading-tight text-black">

          The page you’re looking for no longer exists.
        </h1>

        <p className="mt-8 text-neutral-600 leading-relaxed">

          It may have been moved, removed, or perhaps never existed at all.

        </p>

        <Link
          to="/"
          className="inline-flex mt-10 px-8 py-4 bg-black text-white rounded-full text-sm tracking-wide hover:opacity-90 transition"
        >

          Return Home

        </Link>

      </div>

    </div>

  );
};

export default NotFoundPage;