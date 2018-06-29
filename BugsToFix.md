### app.[hash].js 404 (Not Found)
- 项目里已经有./dist文件夹，默认服务器会优先读取已存在的dist

### Warning: Expected server HTML to contain a matching <div> in <div>.
- 这是因为react16.1加了一个提醒，在没有提供服务端渲染的情况下，使用hydrate会有这个warning，因为hydrate是用在有服务端渲染的情况。所以跟着课程走的同学在使用webpack-dev-server进行调试的时候会有这个提醒。但是这门课是会有服务端渲染的，最终上线的也是带有服务端渲染的版本，所以这个提醒可以忽略。

### http://localhost:8888/public/0.bd2f8fea8dd6a8d169f3.hot-update.js
- xxx.hot-update.js这个函数的功能是监听页面的改动，通知项目有模块更新，通知hot-modules-replacement去替换模块，在webpack.config.js配置项里的output中的publicPath中要注意： '/public/'

### TypeError: Path must be a string. Received undefined
- m._compile(bundle, 'server-entry.js') 动态编译的时候要指定一个文件名，否则无法存储到缓存中

### eslint-disable-line
- eslint 专用注释语法