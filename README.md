## 工程架构
- webpack配置
- node服务
- 服务端渲染基础

## 项目架构
- React
- React-Router配置
- Mobx配置
- 服务端渲染优化

## 业务开发
- 页面开发
- 登录服务
- 服务端渲染优化

## 项目部署
- PM2
- Nginx
- 一键部署

## 多页应用
- 内容都是由服务端用模版生成
- 每次页面跳转都要经过服务端
- JS更多只是处理动画
- 静态文件：使用gulp或grunt等工具手动编译到html中，自由度低，操作复杂，甚至不处理，直接交给后端，让后端服务处理

## 单页应用
- 所有内容都在前端生成
- JS承担更多的业务逻辑，后端只提供API
- 页面路由跳转不需要经过后端
- 类库：React、Vue、Angular、BackBone
- 架构工具：npm、bower、jspm
- 模块化工具：webpack、rollup、browserify
- 静态文件：可以直接在JS代码中进行引用，交由模块化工具转化成线上可用的静态资源，并且可以定制转化过程来适应不同的需求场景
- 其他：浏览器兼容性、toB还是toC、移动端还是PC端

## 常用配置
- webpack dev server
- Hot module replacement

## 使用eslint和editorconfig规范代码
- 规范代码有利用团队协作
- 纯手工规范费时费力而且不能保证准确性
- 能配合编辑自动提醒错误，提高开发效率
- eslint-config-airbnb
- babel-eslint
- eslint-config-standard
- eslint-loader
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-jsx-ally
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-standard --save-dev

## 使用eslint强相关git绑定
- git init
- husky: commit前的校验

## 项目基本架构
- views：存放项目功能模块的页面，需要根据路由配置情况分割子级目录
- config：存放一些配置目录，比如第三方类库的引用，路由配置等
- store：存放项目store相关的文件，包括数据获取的封装等
- components：存放非业务组件，或者在多个业务间都需要用到的公用组件

## 什么是路由
- 路由是用来区分一个网站不同功能模块的地址，浏览器通过访问同一站点下的不同路由，来访问网站不同的功能。同样路由也让开发者区分返回的内容
