// Config the @ alias to ease importing file
const path = require('path');
const alias = {
  '@': path.join(__dirname, '../src'),
}

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  // The order you list these addons will dictate the order in which they appear as tabs on your addon panel
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs', '@storybook/addon-links'],
  // Custom Webpack Config
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Alias config
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias
    }

    // Return the altered config
    return config;
  },
};
