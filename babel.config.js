module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@config': './src/config',
          '@container': './src/container',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@layout': './src/layout',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
        },
      },
    ],
    'jest-hoist',
  ],
};
