module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/, //Should this be /jsx?$/  ?
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
