const production = !process.env.ROLLUP_WATCH;
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}