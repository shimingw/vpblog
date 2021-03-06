const sidebar = require('./sidebar-auto.js')

module.exports = {
  // 会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
  repo: 'shimingw/vpblog',
  // 默认是 false, 设置为 true 来启用，启动页面编辑功能
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  // 设置页面导航栏，此为全局有效，也可以在单个md文件中设置false，来关闭此页面的导航栏
  navbar: true,
  lastUpdated: '更新于',
  // sidebar: {
  //   '/docs/css/CSS世界.md/': [
  //     ['CSS.md', 'CSS世界'],
  //     ['CSS干货.md', 'CSS干货']
  //   ]
  // },
  sidebar,
  sidebarDepth: 3,
  // TODO: 增加一个归档页面，同时增加检索功能
  nav: [
    { text: '首页', link: '/' },
    { text: '最新', link: '/guide/' },
    {
      text: '归档',
      link: '/archives/'
    }
  ]
}
