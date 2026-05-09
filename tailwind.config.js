/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — pulled from Flexo Africa logo
        ink: {
          DEFAULT: "#0F2E5F", // navy from wordmark
          soft: "#1E3A8A",
          muted: "#475569",
        },
        accent: {
          DEFAULT: "#DC2626", // red from logo stripe
          dark: "#991B1B",
          light: "#FEE2E2",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAFC",
          gray: "#F1F5F9",
        },
        brand: {
          yellow: "#F5C518",
          orange: "#EA580C",
          red: "#DC2626",
          darkRed: "#991B1B",
          blue: "#1E40AF",
          teal: "#0EA5E9",
          green: "#16A34A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
        cardHover: "0 8px 24px rgba(15, 23, 42, 0.10), 0 2px 6px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};
