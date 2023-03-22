const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // plugins: [
    //   {
    //       plugin: sassResourcesLoader,
    //       options: {
    //           resources: "./src/global.scss",
    //       },
    //   },
    // ],
  },

  jest: {
    configure: {
      moduleNameMapper: {
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@(.+)': '<rootDir>/$1',
      },
    },
  },

  // style: {
  //   postcss: {
  //     env: {
  //       stage: 3,
  //       features: {
  //         'nesting-rules': true,
  //       },
  //       autoprefixer: {
  //         cascade: true,
  //       },
  //     },
  //   },
  // },

};