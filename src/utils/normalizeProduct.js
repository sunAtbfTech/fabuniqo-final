export const normalizeProduct = (product) => {

  const variant =
    product?.variants?.[0];

  const attrs =
    variant?.attributes || [];

  const getAttr = (key) =>
    attrs.find(
      (a) => a.key === key
    )?.value;

  const basePrice =
    variant?.price?.base || 0;

  const salePrice =
    variant?.price?.sale || 0;

  const discount =
    basePrice > salePrice
      ? Math.round(
          ((basePrice - salePrice) /
            basePrice) *
            100
        )
      : 0;

  return {

    id: product?._id,

    name: product?.name,

    slug: product?.slug,

    image:
  variant?.images?.[0]?.url ||
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",

    price: salePrice,

    originalPrice: basePrice,

    discount,

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
      product?.rating?.value || 0,

    reviewCount:
      product?.rating?.count || 0,

    badge:
      product?.isFeatured
        ? "Featured"
        : null,

    stock:
      variant?.inventory?.quantity,

    isActive:
      variant?.isActive,

  };

};