/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [["@snowpack/plugin-webpack"]],
  extends: '@snowpack/app-scripts-react',
  packageOptions: {
    knownEntrypoints: ['styled-components'],
  },
  buildOptions: {
    baseUrl: './',
    metaUrlPath: "dist"
    /* ... */
  }
}