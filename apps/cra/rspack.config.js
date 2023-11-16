const {defineConfig } = require('@rspack/cli');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;

const path = require('path');
module.exports = defineConfig({
  entry: {
    main: './src/index.ts',
  },
  experiments: {
    rspackFuture: {
      newResolver:true
    }
  },
  resolve: {
    tsConfig: {
      references: 'auto',
      configFile:path.resolve(__dirname,'./tsconfig.json')
    },
    plugins: [
       new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.ts', '.tsx'],
        references: ['../../libs/lib1/tsconfig.json', '../../libs/lib2/tsconfig.json'],
      }),
    ]
  }
});
