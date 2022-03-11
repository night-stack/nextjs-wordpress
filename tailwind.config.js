module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "witech-dark-blue": "#05103A",
        "witech-blue": "#061A64",
        "witech-link": "#67F8EF",
        "hero-dots": "#293461",
      },
      spacing: {
        7.5: "30px",
        13: "50px",
        25: "100px",
        28: "7rem",
        35: "150px",
        63: "250px",
        md: "8.6%",
        "md-menu": "8.81%",
        lg: "12.2%",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
        11: "52px",
      },
      fontSize: {
        "3.5xl": "32px",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
        ss: "13px",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
