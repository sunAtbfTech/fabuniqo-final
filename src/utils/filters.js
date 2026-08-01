 export const applyFilters = (
  products,
  filters
) => {

  return products.filter((p) => {

    // COLORS
    if (
      filters.colors.length &&
      !filters.colors.includes(
        p.color?.toLowerCase()
      )
    ) {
      return false;
    }

    // PLATINGS
    if (
      filters.platings.length &&
      !filters.platings.includes(
        p.plating?.toLowerCase()
      )
    ) {
      return false;
    }

    // OCCASIONS
    if (
      filters.occasions.length &&
      !filters.occasions.includes(
        p.occasion?.toLowerCase()
      )
    ) {
      return false;
    }

    // PRODUCT TYPES
    if (
      filters.productTypes.length &&
      !filters.productTypes.includes(
        p.type
      )
    ) {
      return false;
    }

    // PRICE
    if (filters.price) {

      switch(filters.price) {

        case "under5k":
          if (p.price > 5000)
            return false;
          break;

        case "5k10k":
          if (
            p.price < 5000 ||
            p.price > 10000
          ) return false;
          break;

        case "10k50k":
          if (
            p.price < 10000 ||
            p.price > 50000
          ) return false;
          break;

        case "50k+":
          if (p.price < 50000)
            return false;
          break;

      }

    }

    // DISCOUNT
    if (
      filters.discount &&
      p.discount < filters.discount
    ) {
      return false;
    }

    // RATING
    if (
      filters.rating &&
      p.rating < filters.rating
    ) {
      return false;
    }

    return true;

  });

};

export const applySort = (
  products,
  sortBy
) => {

  const sorted = [...products];

  switch(sortBy) {

    case "price-high":

      return sorted.sort(
        (a, b) =>
          b.price - a.price
      );

    case "price-low":

      return sorted.sort(
        (a, b) =>
          a.price - b.price
      );

    case "rating":

      return sorted.sort(
        (a, b) =>
          b.rating - a.rating
      );

    case "discount":

      return sorted.sort(
        (a, b) =>
          b.discount - a.discount
      );

    default:

      return sorted;

  }

};