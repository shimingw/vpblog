const { baseUrl } = require('../config/config-data')
const routePfx = `/${baseUrl}/docs/`

module.exports = {
  // 一个函数，用于拓展或者修改 $page 对象。这个函数将会在编译器为每个页面执行一次。
  // 文章路径增加前缀 和 评论标识
  // 用来拼接md页面的permalink
  extendPageData($page) {
    // 页面的 frontmatter 对象
    const { frontmatter } = $page

    if (
      !frontmatter ||
      JSON.stringify(frontmatter) === '{}' ||
      !frontmatter.permalink ||
      frontmatter.single === true
    ) {
      return
    }

    frontmatter.permalink = `${routePfx}${frontmatter.permalink}`
  }
}
