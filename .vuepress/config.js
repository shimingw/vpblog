/*
 * @Description: vuepress的配置文件 api参考：https://www.vuepress.cn/config/
 * @Author: shimingwen
 * @Date: 2020-01-16 17:38:01
 * @LastEditTime : 2020-01-17 15:31:49
 * @LastEditors  : shimingwen
 */
const { headConf, localesConf, themeConf } = require('./config/')

module.exports = {
  locales: localesConf,
  head: headConf,
  themeConfig: themeConf,
  plugins:[
    require("./plugins/my-loader"),
    require("./plugins/my-router"),
  ]
}
