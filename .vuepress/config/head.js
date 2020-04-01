module.exports = [
  // 插入百度分析脚本
  [
    'script',
    {
      type: 'text/javascript',
      src: '/baidu-analytics.js',
      async: 'async'
    }
  ],
  ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
  ['meta', { name: 'referrer', content: 'no-referrer' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  // 是否启动webapp功能，会删除默认的苹果工具栏和菜单栏。
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  // 根据实际的页面设计的主体色为搭配来进行设置。
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '192x192', href: '/icons/192.png' }
  ],
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: '/icons/144.png'
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
]
