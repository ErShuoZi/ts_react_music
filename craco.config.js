const path = require("path")
const CracoLessPlugin = require("craco-less")
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("@/components")
    }
  },
  plugins: [{ plugin: CracoLessPlugin }]
}
