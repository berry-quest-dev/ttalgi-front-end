const { ref } = require("process");

module.exports = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  typescript: true,
  expandProps: "end",
  dimensions: true,
  template: require("./template.js"),
  svgProps: {
    width: "{square ?? width}",
    height: "{square ?? height}",
    ref: "{ref}",
  },
};
