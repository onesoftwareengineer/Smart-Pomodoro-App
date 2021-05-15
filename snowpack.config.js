/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
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