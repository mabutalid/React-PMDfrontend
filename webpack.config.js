"module": {
    "loaders": [{
      "loader": "babel-loader",
      "test": /\.js$/,
      "exclude": /node_modules/,
      "query": {
        "plugins": ["recharts"],
        ...
      }
    }]
  }