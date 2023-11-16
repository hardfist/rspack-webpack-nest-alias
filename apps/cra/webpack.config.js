const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader'
        }
      ],
      type: 'css'
    }]
  },
  resolve: {
    extensions: ['.ts', '...'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.ts', '.tsx'],
        references: ['../../libs/lib1/tsconfig.json', '../../libs/lib2/tsconfig.json'],
      }),
    ],
  },
  experiments: {
    css:true
  }
};
