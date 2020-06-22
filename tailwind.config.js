const plugin = require("tailwindcss/plugin");
module.exports = {
  theme: {
    extend: {},
    screens: {
      "galaxy-s5": { min: "360px", max: "640px" },
      "pixel-2": { min: "411px", max: "731px" },
      "pixel-2xl": { min: "411px", max: "823px" },
      "iphone-5se": { min: "320px", max: "568px" },
      "iphone-6": { min: "375px", max: "667px" },
      "iphone-6-plus": { min: "414px", max: "736px" },
      "iphone-x": { min: "375px", max: "812px" },
      "ipad-d": { min: "768px", max: "1024px" },
      "ipad-pro": { min: "1024px", max: "1366px" },
      "screen-xl": { min: "1280px" },
    },
  },
  variants: {},
  plugins: [],
};
