import React from "react";

const REVIEWS = [

  {
    id: 1,
    name: "Aarav",
    rating: 5,
    review:
      "Absolutely premium quality. The finishing feels incredibly luxurious.",
  },

  {
    id: 2,
    name: "Meera",
    rating: 4,
    review:
      "Elegant minimal styling. Looks even better in person.",
  },

];

const ProductReviews = ({
  product,
}) => {

  return (

    <section
      className="
        mt-20
      "
    >

      {/* HEADING */}

      <div
        className="
          flex
          items-end
          justify-between

          gap-6

          mb-10
        "
      >

        <div>

          <p
            className="
              text-[11px]
              uppercase

              tracking-[0.28em]

              text-neutral-500
            "
          >

            Customer Experience

          </p>

          <h2
            className="
              mt-4

              text-3xl
              md:text-4xl

              font-light
              tracking-tight
            "
          >

            Ratings & Reviews

          </h2>

        </div>

        <div
          className="
            text-right
          "
        >

          <div
            className="
              text-4xl
              font-light
            "
          >

            {product?.rating?.value}

          </div>

          <p
            className="
              text-sm
              text-neutral-500
            "
          >

            Based on
            {" "}
            {product?.rating?.count}
            {" "}
            reviews

          </p>

        </div>

      </div>

      {/* REVIEWS */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2

          gap-6
        "
      >

        {REVIEWS.map((review) => (

          <div

            key={review.id}

            className="
              border
              border-neutral-200

              bg-white

              p-8
            "
          >

            {/* STARS */}

            <div
              className="
                flex
                gap-1

                mb-5
              "
            >

              {[1,2,3,4,5].map((star) => (

                <span
                  key={star}

                  className="
                    text-[#c5a46d]
                  "
                >

                  {star <= review.rating
                    ? "★"
                    : "☆"}

                </span>

              ))}

            </div>

            {/* REVIEW */}

            <p
              className="
                text-[15px]
                leading-[1.9]

                text-neutral-700
              "
            >

              {review.review}

            </p>

            {/* USER */}

            <p
              className="
                mt-6

                text-[12px]
                uppercase

                tracking-[0.18em]

                text-neutral-400
              "
            >

              {review.name}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

};

export default ProductReviews;