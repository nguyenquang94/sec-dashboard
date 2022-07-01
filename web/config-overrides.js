const { addReactRefresh } = require('customize-cra-react-refresh');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const { override, addLessLoader, addBabelPlugins } = require('customize-cra');

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:5]',
        modifyVars: {
          'primary-color': '#004684',
        },
      },
    }),
    ...addBabelPlugins('babel-plugin-styled-components'),
    addReactRefresh(),
    (config) => {
      // config.plugins.push(
      //   new MonacoWebpackPlugin({
      //     languages: ['json', 'html', 'javascript', 'typescript'],
      //     features: ['format', 'snippets', 'suggest'],
      //   }),
      // );
      return config;
    },
  ),
};
