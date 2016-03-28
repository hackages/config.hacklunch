import path from 'path';

const configuration = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'output.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  },
};

export default configuration;
