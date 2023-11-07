const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (config) => {

  // config.plugins.push(new BundleAnalyzerPlugin());

  config.devServer = config.devServer || {};
  // config.optimization.splitChunks = {
  //   chunks: 'async',
  //   minSize: 0,
  //   minRemainingSize: 0,
  //   minChunks: 1,
  //   maxAsyncRequests: 30,
  //   maxInitialRequests: 30,
  //   cacheGroups: {
  //     forms: {
  //       test: /[\\/]node_modules[\\/](@angular)[\\/](router)[\\/]/,
  //       enforce: true,
  //       priority: 1,
  //       reuseExistingChunk: true,
  //       name: 'vendors_2',
  //     },
  //     phonelibrary: {
  //       test: /[\\/]node_modules[\\/](google-libphonenumber)[\\/]/,
  //       enforce: true,
  //       priority: 1,
  //       reuseExistingChunk: true,
  //       name: 'libphone',
  //     },
  //     vendors: {
  //       test: /[\\/]node_modules[\\/]/,
  //       enforce: true,
  //       priority: -10,
  //       reuseExistingChunk: true,
  //       name: 'vendors',
  //     },
  //     default: false
  //   },
  // };

  return config;
};
