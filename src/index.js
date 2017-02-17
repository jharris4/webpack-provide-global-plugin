var webpack = require('webpack');

function setPluginOptions (pluginOptions) {
  const provideMap = {};

  const globalPackages = Object.keys(pluginOptions);
  globalPackages.forEach(function(package) {
    const globalName = pluginOptions[package];
    provideMap[globalName] = 'imports-loader?this=>global!exports-loader?global.' + globalName + '!' + package;
  });

  return {
    provideMap
  };
}

class WebpackProvideGlobalPlugin {
  constructor (pluginOptions = {}) {
    Object.assign(this, setPluginOptions(pluginOptions))
  }

  apply (compiler) {
    compiler.apply(
      new webpack.ProvidePlugin(this.provideMap)
    );
  }
}
module.exports = WebpackProvideGlobalPlugin;