import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // safelist: [
  //   {
  //     pattern:
  //       /_mask-(circle|square|squircle|heart|decagon|hexagon|hexagon-2|star|star-2)/,
  //   },
  // ],
  theme: {
    extend: {
      colors: {
        woo_commerce: "#7F54B3",
        wc_green: "#7ad03a",
        wc_red: "#a00",
        wc_orange: "#ffba00",
        wc_blue: "#2ea2cc",
        wc_primary: "#7F54B3",
        wc_secondary: "#e9e6ed",
        wc_secondary_text: "#515151",
        wc_highlight: "#b3af54",
        wc_content_bg: "#fff",
        wc_subtext: "#767676",
        wp_preset_color_vivid_red: "#EE4B2B;",
        main_color: "#8d6ed3",
        border_gray: "#ededed",
        product_item_bg: "#fafafa",
        product_item_hover: "#ddd",
        bullet_color: "#D6D6D6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #8d6ed3 0%, rgba(255, 255, 255, 0) 100%)",
      },
      boxShadow: {
        "inner-custom": "inset 2px 2px 14px 2px",
        "avatar-custom": "0px 0px 42px -18px",
      },
    },
  },
  //   plugins: [
  //     // For creating utility class - drop-shadow-[tailwind color]
  //     plugin(function ({ addUtilities, theme }) {
  //       const newUtilities = {};
  //       const colors = theme("colors");

  //       Object.keys(colors).forEach((colorName) => {
  //         if (typeof colors[colorName] === "object") {
  //           Object.keys(colors[colorName]).forEach((shade) => {
  //             const colorValue = colors[colorName][shade];
  //             newUtilities[`.drop-shadow-${colorName}-${shade}`] = {
  //               filter: `drop-shadow(0 0 10px ${colorValue})`,
  //             };
  //           });
  //         } else {
  //           newUtilities[`.drop-shadow-${colorName}`] = {
  //             filter: `drop-shadow(0 0 10px ${colors[colorName]})`,
  //           };
  //         }
  //       });

  //       addUtilities(newUtilities, ["responsive", "hover"]);
  //     }),
  //   ],
};
