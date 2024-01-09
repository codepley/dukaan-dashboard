// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '720px',
        'md': '864px',
        'lg': '1152px',
        'xl': '1441px',
        '2xl': '1728px'
      },
      colors: {
        "black-98": "#fafafa",
        "secondary-navbar": "#1e2640",
        darkslategray: "#353c53",
        "black-100": "#fff",
        gray: "rgba(255, 255, 255, 0.1)",
        "black-85": "#d9d9d9",
        "black-30": "#4d4d4d",
        "primary-blue": "#146eb4",
        chocolate: "rgba(238, 116, 31, 0.15)",
        "primary-orange": "#ee741f",
        "black-12": "#1a181e",
        "black-50": "#808080",
        "secondary-green": "#17b31b",
        "secondary-red": "#e50b20",
        "secondary-yellow": "#fab73b",
        "black-95": "#f2f2f2",
        "black-60": "#999",
        "black-90": "#e6e6e6",
      },
      spacing: {},
      fontFamily: {
        "body-1-medium": "Inter",
        "caption-regular": "'Galano Grotesque'",
      },
      borderRadius: {
        "10xs": "3px",
        "21xl": "40px",
        "spacing-spacing-04": "8px",
      },
    },
    fontSize: {
      base: "1rem",
      smi: "0.81rem",
      sm: "0.88rem",
      mini: "0.94rem",
      xs: "0.75rem",
      "3xs": "0.63rem",
      xl: "1.25rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};


