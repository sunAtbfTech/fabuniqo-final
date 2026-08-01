import React, { useState } from "react";

// Sort By is here — top right, as requested
const CollectionToolbar = ({
  productCount = 0,
  breadcrumb = ["Home", "Jewellery", "Bracelets"],
  sortBy = "featured",
  onSortChange,
  onViewChange,
}) => {
  const [view, setView] = useState("grid");

  const handleView = (v) => { setView(v); onViewChange?.(v); };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "20px",
      marginBottom: "28px",
      borderBottom: "0.5px solid #d4d4d4",
      flexWrap: "wrap",
      gap: "12px",
    }}>

      {/* LEFT — Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        {breadcrumb.map((crumb, i) => (
          <span key={crumb} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && <span style={{ fontSize: "10px", color: "#bbb" }}>/</span>}
            <span style={{
              fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
              color: i === breadcrumb.length - 1 ? "#1a1a1a" : "#888",
              fontWeight: i === breadcrumb.length - 1 ? 500 : 400,
            }}>
              {crumb}
            </span>
          </span>
        ))}
      </div>

      {/* CENTER — Count */}
      <p style={{ fontSize: "13px", letterSpacing: "0.05em", color: "#1a1a1a" }}>
        {productCount} Models
      </p>

      {/* RIGHT — Sort By (featured default) + Grid/Feed toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

        {/* ── SORT BY — top right ──────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888" }}>
            Sort
          </span>
          <select
            value={sortBy}
            onChange={e => onSortChange?.(e.target.value)}
            style={{
              fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#1a1a1a", background: "none", border: "none",
              outline: "none", cursor: "pointer", fontWeight: 500,
              appearance: "none", WebkitAppearance: "none",
              paddingRight: "14px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'%3E%3Cpath d='M1 1l3 3 3-3' stroke='%23888' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0px center",
            }}
          >
            <option value="featured">Featured</option>
            <option value="price-high">Price: High To Low</option>
            <option value="price-low">Price: Low To High</option>
            <option value="rating">Customer Rating</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>

        {/* ── VIEW TOGGLE ──────────────────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
        </div>

      </div>
    </div>
  );
};

export default CollectionToolbar;