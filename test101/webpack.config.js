var webpack = require('webpack');
var path = require('path');

var releaseList = [
  './practiceSpec.js',
]

module.exports = {
  // devtool: 'source-map',   // 生成Source Maps
  entry:{
    index:  releaseList,
  },
  output: {
    filename:'[name].js',
    path: path.resolve(__dirname,'release'),
    publicPath: '/release'
  },
};

