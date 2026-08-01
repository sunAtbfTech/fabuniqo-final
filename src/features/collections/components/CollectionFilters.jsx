import React, { useState } from "react";

// ── Filter Config ──────────────────────────────────────────────────────────────
export const FILTER_CONFIG = {
  color: {
    title: "Color",
    options: [
      { value: "red",    label: "Red",    bg: "#EF4444" },
      { value: "green",  label: "Green",  bg: "#15803D" },
      { value: "gold",   label: "Gold",   bg: "#D4A017" },
      { value: "silver", label: "Silver", bg: "#C0C0C0" },
      { value: "blue",   label: "Blue",   bg: "#3B82F6" },
      { value: "pink",   label: "Pink",   bg: "#EC4899" },
      { value: "black",  label: "Black",  bg: "#111827" },
      { value: "orange", label: "Orange", bg: "#F97316" },
      { value: "purple", label: "Purple", bg: "#A855F7" },
      { value: "brown",  label: "Brown",  bg: "#92400E" },
    ],
  },
  plating: {
    title: "Plating",
    options: [
      { value: "gold",     label: "Gold"     },
      { value: "rosegold", label: "Rose Gold" },
      { value: "silver",   label: "Silver"   },
      { value: "oxidised", label: "Oxidised" },
    ],
  },
  occasion: {
    title: "Occasion",
    options: [
      { value: "everyday", label: "Everyday Wear" },
      { value: "office",   label: "Office"        },
      { value: "party",    label: "Party"         },
      { value: "festival", label: "Festival"      },
      { value: "wedding",  label: "Wedding"       },
    ],
  },
  productType: {
    title: "Product Type",
    options: [
      { value: "Rings",     label: "Rings"    },
      { value: "Earrings",  label: "Earrings" },
      { value: "Necklaces", label: "Necklaces"},
      { value: "Bracelets", label: "Bracelets"},
      { value: "Pendants",  label: "Pendants" },
      { value: "Sets",      label: "Sets"     },
      { value: "Gifting",   label: "Gifting"  },
    ],
  },
  price: {
    title: "Price",
    options: [
      { value: "under5k",  label: "Under ₹5,000",      min: 0,     max: 5000      },
      { value: "5k10k",    label: "₹5,000 – ₹10,000",  min: 5000,  max: 10000     },
      { value: "10k50k",   label: "₹10,000 – ₹50,000", min: 10000, max: 50000     },
      { value: "50k+",     label: "₹50,000 & Above",   min: 50000, max: Infinity  },
    ],
  },
  discount: {
    title: "Discount",
    options: [
      { value: 10, label: "10% Or More" },
      { value: 20, label: "20% Or More" },
      { value: 30, label: "30% Or More" },
      { value: 50, label: "50% Or More" },
    ],
  },
  rating: {
    title: "Customer Rating",
    options: [
      { value: 4, label: "4★ & Above" },
      { value: 3, label: "3★ & Above" },
      { value: 2, label: "2★ & Above" },
    ],
  },
};

// ── Shared styles ──────────────────────────────────────────────────────────────
const headStyle = {
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#1a1a1a",
  fontWeight: 600,
};

const labelStyle = {
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#1a1a1a",
  fontWeight: 400,
  lineHeight: 1.8,
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  marginBottom: "6px",
};

// ── Collapsible Section ────────────────────────────────────────────────────────
const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderTop: "0.5px solid #d4d4d4", paddingTop: "16px", paddingBottom: "4px" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", background: "none",
          border: "none", cursor: "pointer", padding: 0,
          marginBottom: open ? "12px" : "16px",
        }}
      >
        <span style={headStyle}>{title}</span>
        <span style={{ fontSize: "12px", color: "#aaa" }}>{open ? "∧" : "∨"}</span>
      </button>
      {open && <div style={{ marginBottom: "14px" }}>{children}</div>}
    </div>
  );
};

// ── Custom Radio / Checkbox ────────────────────────────────────────────────────
const CustomCheck = ({ checked, onChange, label, type = "checkbox" }) => (
  <div onClick={onChange} style={labelStyle}>
    <div style={{
      width: "13px", height: "13px", flexShrink: 0,
      border: "1px solid #aaa",
      borderRadius: type === "radio" ? "50%" : "2px",
      backgroundColor: "white", cursor: "pointer",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {checked && (
        type === "radio"
          ? <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#1a1a1a" }} />
          : <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <path d="M1 3L3 5L7 1" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
      )}
    </div>
    <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a1a1a" }}>
      {label}
    </span>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────────
// Props:
//   filters  — current filter state (from CollectionDetailsPage)
//   onChange — (filterKey, value) => void  called on every change
//   onClear  — () => void
const CollectionFilters = ({ filters, onChange, onClear }) => {
  const {
    colors = [], platings = [], occasions = [],
    productTypes = [], price = null, discount = null, rating = null,
  } = filters || {};

  const toggleArr = (key, val, arr) => {
    onChange(key, arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  const activeCount = [
    ...colors, ...platings, ...occasions, ...productTypes,
    price, discount, rating,
  ].filter(Boolean).length;

  return (
    <aside style={{ width: "220px", flexShrink: 0 }} className="hidden lg:block">
      <div style={{ position: "sticky", top: "24px" }}>

        {/* ── HEADER ───────────────────────────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={headStyle}>Filter By</span>
            {activeCount > 0 && (
              <span style={{
                fontSize: "9px", backgroundColor: "#1a1a1a", color: "white",
                padding: "2px 6px", borderRadius: "20px", fontWeight: 500,
              }}>
                {activeCount}
              </span>
            )}
          </div>
          {activeCount > 0 && (
            <button onClick={onClear} style={{
              fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#888", background: "none", border: "none", cursor: "pointer",
              textDecoration: "underline",
            }}>
              Clear All
            </button>
          )}
        </div>

        {/* ── COLOR ────────────────────────────────────────────────────────── */}
        <FilterSection title="Color">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
            {FILTER_CONFIG.color.options.map(opt => (
              <button
                key={opt.value}
                title={opt.label}
                onClick={() => toggleArr("colors", opt.value, colors)}
                style={{
                  width: "18px", height: "18px", borderRadius: "50%",
                  backgroundColor: opt.bg, padding: 0, cursor: "pointer",
                  border: colors.includes(opt.value) ? "2px solid #1a1a1a" : "1.5px solid #ccc",
                  outline: colors.includes(opt.value) ? "2px solid white" : "none",
                  outlineOffset: "-4px",
                }}
              />
            ))}
          </div>
          {colors.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "6px" }}>
              {colors.map(c => {
                const opt = FILTER_CONFIG.color.options.find(x => x.value === c);
                return (
                  <span key={c} style={{
                    fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase",
                    border: "0.5px solid #ccc", padding: "2px 7px", borderRadius: "20px",
                    display: "flex", alignItems: "center", gap: "3px", color: "#555",
                  }}>
                    {opt?.label}
                    <button onClick={() => toggleArr("colors", c, colors)}
                      style={{ color: "#aaa", cursor: "pointer", background: "none", border: "none", padding: 0, lineHeight: 1 }}>×</button>
                  </span>
                );
              })}
            </div>
          )}
        </FilterSection>

        {/* ── PLATING ──────────────────────────────────────────────────────── */}
        <FilterSection title="Plating">
          {FILTER_CONFIG.plating.options.map(opt => (
            <CustomCheck
              key={opt.value}
              label={opt.label}
              checked={platings.includes(opt.value)}
              onChange={() => toggleArr("platings", opt.value, platings)}
            />
          ))}
        </FilterSection>

        {/* ── OCCASION ─────────────────────────────────────────────────────── */}
        <FilterSection title="Occasion">
          {FILTER_CONFIG.occasion.options.map(opt => (
            <CustomCheck
              key={opt.value}
              label={opt.label}
              checked={occasions.includes(opt.value)}
              onChange={() => toggleArr("occasions", opt.value, occasions)}
            />
          ))}
        </FilterSection>

        {/* ── PRODUCT TYPE ─────────────────────────────────────────────────── */}
        <FilterSection title="Product Type">
          {FILTER_CONFIG.productType.options.map(opt => (
            <CustomCheck
              key={opt.value}
              label={opt.label}
              checked={productTypes.includes(opt.value)}
              onChange={() => toggleArr("productTypes", opt.value, productTypes)}
            />
          ))}
        </FilterSection>

        {/* ── PRICE ────────────────────────────────────────────────────────── */}
        <FilterSection title="Price" defaultOpen={false}>
          {FILTER_CONFIG.price.options.map(opt => (
            <CustomCheck
              key={opt.value}
              type="radio"
              label={opt.label}
              checked={price === opt.value}
              onChange={() => onChange("price", price === opt.value ? null : opt.value)}
            />
          ))}
        </FilterSection>

        {/* ── DISCOUNT ─────────────────────────────────────────────────────── */}
        <FilterSection title="Discount" defaultOpen={false}>
          {FILTER_CONFIG.discount.options.map(opt => (
            <CustomCheck
              key={opt.value}
              type="radio"
              label={opt.label}
              checked={discount === opt.value}
              onChange={() => onChange("discount", discount === opt.value ? null : opt.value)}
            />
          ))}
        </FilterSection>

        {/* ── CUSTOMER RATING ──────────────────────────────────────────────── */}
        <FilterSection title="Customer Rating" defaultOpen={false}>
          {FILTER_CONFIG.rating.options.map(opt => (
            <CustomCheck
              key={opt.value}
              type="radio"
              label={opt.label}
              checked={rating === opt.value}
              onChange={() => onChange("rating", rating === opt.value ? null : opt.value)}
            />
          ))}
        </FilterSection>

      </div>
    </aside>
  );
};

export default CollectionFilters;