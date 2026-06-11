const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      if (webpackConfig.mode === 'production') {
        webpackConfig.devtool = false;
      }
      return webpackConfig;
    },
  },
  eslint: {
    enable: process.env.NODE_ENV === 'development',
  },
  typescript: {
    enable: true,
  },
};