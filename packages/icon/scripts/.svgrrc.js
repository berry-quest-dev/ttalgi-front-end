const { ref } = require("process");

module.exports = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  typescript: true,
  expandProps: "end",
  dimensions: true,
  template: require("./template.js"),
  svgProps: {
    ref: "{ref}",
    width: "{width}",
    height: "{height}",
    fill: "{color}",
    stroke: "{stroke}",
  },
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "removeAttrs",
        params: {
          attrs: ["stroke", "fill"],
        },
      },
    ],
  },
};
