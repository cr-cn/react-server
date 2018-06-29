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
