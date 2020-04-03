/*
 * @Description: vuepress的配置文件 api参考：https://www.vuepress.cn/config/
 * @Author: shimingwen
 * @Date: 2020-01-16 17:38:01
 * @LastEditTime: 2020-04-01 18:00:19
 * @LastEditors: shimingwen
 * <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-162461200-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-162461200-1');
</script>

 */
const { headConf, localesConf, themeConf } = require('./config/')
const { baseUrl } = require('./config/config-data')

module.exports = {
  locales: localesConf,
  head: headConf,
  themeConfig: themeConf,
  // base: `/${baseUrl}/`,
  plugins: [
    // 路由切换时的过渡动画插件
    require('./plugins/my-loader'),
    require('./plugins/my-router'),
    // 图片放大器插件
    require('vuepress-plugin-viewer'),
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现页面有新内容',
          buttonText: '刷新'
        }
      }
    ],
    // https://analytics.google.com/analytics/web/provision/#/provision
    ['@vuepress/google-analytics', { ga: 'UA-162461200-1' }],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'eebb84d37d34f69c4837',
          clientSecret: '6a5198165d462284b63abc23af42c8e228664a3f',
          repo: 'vpblog',
          owner: 'shimingw',
          admin: ['shimingw'],
          id: '<%- frontmatter.commentid || frontmatter.permalink %>', // Ensure uniqueness and length less than 50
          distractionFreeMode: false, // Facebook-like distraction free mode
          labels: ['Gitalk', 'Comment'],
          title: '「评论」<%- frontmatter.title %>',
          body:
            '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
        }
      }
    ]
  ]
}
