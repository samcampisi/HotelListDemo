module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            assets: './assets',
            mocks: './__mocks__',
            contexts: './src/contexts',
            components: './src/components',
            config: './src/config',
            constants: './src/constants',
            hooks: './src/hooks',
            interfaces: './src/interfaces',
            screens: './src/screens',
            theme: './src/theme',
            types: './src/types',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
