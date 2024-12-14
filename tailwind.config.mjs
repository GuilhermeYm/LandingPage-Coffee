/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontJeju: "var(--font-Jeju)",
        fontIrian: "var(--font-Irian)",
        fontIsland: "var(--font-Island)",
      },
      width: {
        containeritemsWidth: "1798px",
        containerSectionWidth: "214px",
        ServiceItem: "299px",
      },
      height: {
        headerHeight: "500px",
        mainOneHeight: "581px",
        containerSectionHeight: "270px",
        AboutUSHeight: "348px",
        ServiceItemHeight: "294px",
      },
      letterSpacing: {
        spaceTitle: "0.2em",
      },
      colors: {
        backgroundMain: "var(--background-main)",
        backgroundArticle: "var(--background-article)",
        backgroundSection: "var(--background-section)",
        backgroundAboutUs: "var(--background-AboutUs)",
        backgroundServices: "var(--background-Services)",
        backgroundServicesItems: "var(--background-ServicesItems)",
      },
    },
  },
  plugins: [],
};
