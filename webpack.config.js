const path = require('path');

module.exports = {
  entry: "./src/main", // string | object | array
  devtool: "source-map",
  module: {
    noParse: [/jquery/],
    rules: [
      {
        test: /\.tsx|\.ts?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },       {
        test: /\.js$/,
        include: path.resolve(__dirname, '/src'),
        use: ['source-map-loader'],
      },
    ],
  },
  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    publicPath: 'dist/',
    filename: "bundle.js", // string
    // the filename template for entry chunks

    /* Advanced output configuration (click to show) */
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.html', '.htm'],
    alias: {
      'app': path.resolve('src/app/'),
    }
  },
  externals: [
    (context, request, callback) => {

      console.log(request);

      if (/^external\/[a-z]*$/i.test(request)) {
        console.log('src/external/' + request.split('external/')[1]);
        return callback(null,  'src/external/' + request.split('external/')[1]);
      }
      callback();
    }
  ],
}