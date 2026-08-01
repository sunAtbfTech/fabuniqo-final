import React from "react";

const CollectionHero = ({
  title,
  description,
  image,
}) => {

  return (

    <section className="relative h-[78vh] overflow-hidden">

      {/* IMAGE */}
      <img
        src={image}
        alt="Luxury Collection"
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white px-6">

        <p className="uppercase tracking-[0.45em] text-[10px] mb-5">

          Fabiquino Jewellery

        </p>

        <h1 className="text-4xl sm:text-6xl font-light tracking-tight">

          {title}

        </h1>

        <p className="max-w-xl mt-5 text-[13px] leading-relaxed text-white/80">
        { description}

        </p>

      </div>

    </section>

  );
};

export default CollectionHero;