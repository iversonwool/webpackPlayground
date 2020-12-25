module.exports = {
  // entry: './src/main.js',
  entry: './src/main.css',

  mode: 'none',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      // 一旦配置多个 Loader，执行顺序是从后往前执行的，
      // 所以这里一定要将 css-loader 放在最后，因为必须要 css-loader 先把 CSS 代码转换为 JS 模块，才可以正常打包，
      // style-loader 的作用总结一句话就是，将 css-loader 中所加载到的所有样式模块，通过创建 style 标签的方式添加到页面上。
    ]
  }
}
