import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        krona: ["Krona One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customGray: "#D1D5DB",
        customHover: "#0F172A",
        customBorder: "#4B5563",
        footerTopBorder: "#101827",
        headerBg: "#669BBC",
        contentBg: "#FDF0D5",
        footerBg: "#003049",
        // formBg: '#DFDFD0',
        formBg: "#E4E7EB",
        linkColor: "#007AFF",
        disabledButton: "#B6B0B0",
        disabledButtonText: "#6F727B",
      },
      fontSize: {
        subtitleSize: "2rem",
        titleSize: "2rem",
        footerSize: "12px",
        buttonSize: "14px",
        // Add responsive font sizes
        "titleSize-md": "2.5rem", // Medium breakpoint
        "titleSize-lg": "3.2rem", // Large breakpoint
        "subtitleSize-md": "1rem", // Medium breakpoint
        "subtitleSize-lg": "1.125rem", // Large breakpoint
        "footerSize-md": "16px", // Medium breakpoint
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      width: {
        customButton: "145px",
      },
      maxWidth: {
        "custom-778": "778px", // Custom max-width
      },
      borderRadius: {
        custom: "50px",
      },
      borderWidth: {
        "1": "1px",
      },
      backgroundImage: {
        "first-container-car": "url('/first-container-car.png')",
      },
    },
  },
  plugins: [],
};
export default config;
