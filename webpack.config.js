const path = require("path");
const modules ={
  entry :"./src/index.js",
  output:{
    path: path.resolve(__dirname,"dist"),
    filename:"build.js"
  }
}

module.exports = modules;