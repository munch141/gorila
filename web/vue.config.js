const path = require('path');

const isMainApp = process.env.APP_TYPE === 'main-app';
const appDir = isMainApp ? 'main-app' : 'gorila-app';

module.exports = {
  outputDir: path.resolve(__dirname, `${appDir}/dist`),
  chainWebpack: (config) => {
    // I've ommited all the non-relevant config stuff

    config.resolve.alias.set('@core', path.resolve(__dirname, './core'));
    config.resolve.alias.set('@products', path.resolve(__dirname, './core/modules/products'));
    config.resolve.alias.set('@auth', path.resolve(__dirname, './core/modules/auth'));

    config.resolve.alias.set('@main', path.resolve(__dirname, './main-app/src'));
    config.resolve.alias.set('@gorila', path.resolve(__dirname, './gorila-app/src'));

    config.plugin('html').tap((args) => {
      args[0].template = path.resolve(__dirname, `${appDir}/index.html`);
      return args;
    });
  },
  devServer: {
    port: isMainApp ? 8081 : 8082,
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};
