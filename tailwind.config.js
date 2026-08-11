/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#d4e4fc",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed-variant": "#2d476f",
        "on-surface-variant": "#43474e",
        "surface-dim": "#d7dadc",
        "error": "#ba1a1a",
        "on-tertiary-fixed-variant": "#39485c",
        "on-secondary-container": "#167249",
        "tertiary-fixed-dim": "#b8c8e0",
        "on-secondary-fixed-variant": "#005231",
        "outline-variant": "#c4c6cf",
        "surface": "#f7fafc",
        "inverse-surface": "#2d3133",
        "tertiary": "#122234",
        "on-surface": "#181c1e",
        "surface-variant": "#e0e3e5",
        "surface-container-highest": "#e0e3e5",
        "surface-container": "#ebeef0",
        "on-tertiary-container": "#91a0b7",
        "on-primary-fixed": "#001b3c",
        "secondary-fixed": "#9ff5c1",
        "outline": "#74777f",
        "on-primary-container": "#86a0cd",
        "on-secondary-fixed": "#002111",
        "primary": "#002045",
        "surface-tint": "#455f88",
        "secondary-container": "#9ff5c1",
        "secondary": "#0a6c44",
        "primary-fixed": "#d6e3ff",
        "inverse-on-surface": "#eef1f3",
        "surface-bright": "#f7fafc",
        "on-tertiary-fixed": "#0d1c2e",
        "tertiary-container": "#28374a",
        "on-error-container": "#93000a",
        "primary-container": "#1a365d",
        "background": "#f7fafc",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#adc7f7",
        "surface-container-high": "#e5e9eb",
        "primary-fixed-dim": "#adc7f7",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "secondary-fixed-dim": "#83d8a6",
        "on-background": "#181c1e",
        "surface-container-low": "#f1f4f6"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "container-max": "1200px",
        "stack-sm": "8px",
        "stack-lg": "32px",
        "base": "8px",
        "gutter": "24px",
        "stack-md": "16px",
        "margin-mobile": "16px",
        "margin-desktop": "48px"
      },
      fontFamily: {
        "display-lg-mobile": ["Montserrat", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "headline-sm": ["Montserrat", "sans-serif"],
        "display-lg": ["Montserrat", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-bold": ["Inter", "sans-serif"]
      },
      fontSize: {
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["30px", { lineHeight: "38px", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-bold": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
