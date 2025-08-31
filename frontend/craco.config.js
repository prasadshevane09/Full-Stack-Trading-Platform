const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Include dashboard/src for Babel transpilation
      const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
      if (oneOfRule) {
        oneOfRule.oneOf.forEach(rule => {
          if (rule.loader && rule.loader.includes('babel-loader')) {
            if (rule.include) {
              if (Array.isArray(rule.include)) {
                rule.include.push(path.resolve(__dirname, '../dashboard/src'));
              } else {
                rule.include = [rule.include, path.resolve(__dirname, '../dashboard/src')];
              }
            }
          }
        });
      }
      return webpackConfig;
    }
  }
};
