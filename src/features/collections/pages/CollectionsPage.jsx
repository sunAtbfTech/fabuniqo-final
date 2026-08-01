import React from "react";

import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    title: "Modern Bracelets",
    slug: "modern-bracelets",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Luxury Rings",
    slug: "luxury-rings",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Minimal Chains",
    slug: "minimal-chains",
    image:
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop",
  },
];

const CollectionsPage = () => {

  return (

    <div className="min-h-screen bg-[#faf9f7] px-4 sm:px-6 lg:px-10 py-20">

      <div className="max-w-[1500px] mx-auto">

        <div className="mb-16 text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-5">

            Fabiquino Collections

          </p>

          <h1 className="text-5xl sm:text-7xl font-light tracking-tight">

            Curated Fashion Stories
          </h1>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {collections.map((collection) => (

            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              className="group"
            >

              <div className="relative overflow-hidden rounded-[32px]">

                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-[620px] object-cover group-hover:scale-[1.03] transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-10 left-10 text-white">

                  <h2 className="text-3xl font-light tracking-tight">

                    {collection.title}

                  </h2>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>

  );
};

export default CollectionsPage;