

  const css = [["01.CSS干货.md","CSS干货"],["02.CSS世界.md","CSS世界"],["03.less学习笔记.md","less学习笔记"],["04.Transform.md","Transform"],["05.动画库.md","动画库"]]

  const git = [["01.git干货.md","git干货"],["02.git-commit规范.md","git-commit规范"],["03.git如何配置ssh代理.md","git如何配置ssh代理"]]

  const JavaScript = [{"title":"ES6","collapsable":false,"children":[["01.ES6/01.ES6.md","ES6"]]},{"title":"React","collapsable":false,"children":[["02.React/01.React学习笔记.md","React学习笔记"],["02.React/02.Redux.md","Redux"]]},{"title":"Vue","collapsable":false,"children":[["03.Vue/01.vue笔记.md","vue笔记"],["03.Vue/02.vue-cli3.md","vue-cli3"],["03.Vue/03.VueTable学习笔记.md","VueTable学习笔记"]]},{"title":"其他","collapsable":false,"children":[["04.其他/01.深入浅出lodash.md","深入浅出lodash"],["04.其他/02.代码规范.md","代码规范"],["04.其他/03.函数式编程.md","函数式编程"],["04.其他/04.深入了解NodeList与HTMLCollection.md","深入了解NodeList与HTMLCollection"]]},{"title":"书籍学习笔记","collapsable":false,"children":[["05.书籍学习笔记/01.JavaScript设计模式—笔记.md","JavaScript设计模式—笔记"],["05.书籍学习笔记/02.JavaScript语言精粹—笔记.md","JavaScript语言精粹—笔记"]]}]

  const linux = [["01.Linux.md","Linux"],["02.nginx.md","nginx"]]

  const webpack = [["01.webpack.md","webpack"],["02.webpack-plugin.md","webpack-plugin"],["03.打包工具运行原理.md","打包工具运行原理"],["04.使用ESlint、lint-staged提升项目代码质量.md","使用ESlint、lint-staged提升项目代码质量"],["05.Babel学习笔记.md","Babel学习笔记"]]

  const 开发工具 = [["01.vscode使用eslint技巧.md","vscode使用eslint技巧"]]

  const 数据结构和算法 = [["01.数据结构与算法.md","数据结构与算法"]]

  const 服务器搭建 = [["01.SSL的申请与部署.md","SSL的申请与部署"]]

  const 源码学习笔记 = [{"title":"汇总","collapsable":false,"children":[["01.汇总/01.源码习笔记1.md","源码习笔记1"]]},{"title":"vue","collapsable":false,"children":[["02.vue/01.v-model原理.md","v-model原理"],["02.vue/02.用vue实现表单组件.md","用vue实现表单组件"],["02.vue/03.实现弹窗组件.md","实现弹窗组件"],["02.vue/04.实现递归组件Tree.md","实现递归组件Tree"],["02.vue/05.实现vue-route.md","实现vue-route"],["02.vue/06.实现vuex.md","实现vuex"],["02.vue/07.实现vue.md","实现vue"]]}]

  const 缓存 = [["01.service-worker.md","service-worker"]]


module.exports = {
  
    "/docs/css/": css,
  
    "/docs/git/": git,
  
    "/docs/JavaScript/": JavaScript,
  
    "/docs/linux/": linux,
  
    "/docs/webpack/": webpack,
  
    "/docs/开发工具/": 开发工具,
  
    "/docs/数据结构和算法/": 数据结构和算法,
  
    "/docs/服务器搭建/": 服务器搭建,
  
    "/docs/源码学习笔记/": 源码学习笔记,
  
    "/docs/缓存/": 缓存,
  
}
