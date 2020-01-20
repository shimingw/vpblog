/*
 * @Description: 根据docs中目录结构自动生成侧边栏
 * @Author: shimingwen
 * @Date: 2020-01-17 09:46:11
 * @LastEditTime : 2020-01-20 16:51:06
 * @LastEditors  : shimingwen
 */
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const logger = require('tracer').colorConsole()
const fp = require('lodash/fp')
const { getMdPaths } = require('./util')

const docsRoot = path.join(__dirname, '..', 'docs')
const notesRoot = path.join(__dirname, '..', 'notes')
const sidebarPath = path.join(
  __dirname,
  '..',
  '.vuepress',
  'config',
  'sidebar-auto.js'
)
const template = `
<% for(let variable of variables) { %>
  const <%- variable.name %> = <%- JSON.stringify(variable.js); %>
<% } %>

module.exports = {
  <% for (let variable of variables) { %>
    "<%- variable.path %>": <%- variable.name %>,
  <% } %>
}
`
/**
 * 实现思路
 * 1、使用readdirSync递归遍历docs目录
 * 2、使用path.resolve拼接文件路径
 * 3、将拼接好的路径使用fs.statSync(file).isDirectory()判断是否为md文件
 * 4、如果是则将文件路径保存下来
  const variables = [
    {
      path: '/docs/css/',
      name: 'css',
      js: [
        ['CSS世界.md', 'CSS世界'],
        ['CSS干货.md', 'CSS干货'],
        ['less学习笔记.md', 'less学习笔记'],
        ['Transform.md', 'Transform']
      ]
    },
    {
      path: '/docs/git/',
      name: 'git',
      js: [
        ['git-commit规范.md', 'git-commit规范'],
        ['git干货.md', 'git干货']
      ]
    }
  ]
 */

//  将无用路径进行切割
const mdPathDrop = fp.flow(
  fp.split(path.sep),
  fp.dropWhile(val => val !== 'docs')
)
// const replaceSep = mdPath => mdPath.replace(/\\/g, '/')
// const getMdTitle = mdPath => {
//   try {
//     return mdPath.match(/([a-zA-Z0-9\u4e00-\u9fa5]*)\.md/)[1]
//   } catch (error) {
//     console.log(mdPath)
//   }
// }
// const createMdName = mdPath => [mdPath, getMdTitle(mdPath)]
const mdPathFilter = fp.flow(mdPathDrop)
const mdPathsDrop = fp.map(item => mdPathFilter(item))
/**
 * 主体函数
 */
function main() {
  const variables = []

  const tocs = readTocs(docsRoot)

  tocs.forEach(toc => {
    const js = mapTocToSidebar(toc)
    console.log(js)

    if (!js.length) {
      return
    }

    variables.push({
      path: `/docs/${path.basename(toc)}/`,
      name: path.basename(toc).replace(/ /g, '_'),
      js
    })
  })

  fs.writeFileSync(sidebarPath, ejs.render(template, { variables }))
}

/**
 * 读取指定目录的文件夹作为不同的目录
 * @param {String} root
 */
function readTocs(root) {
  const result = []
  const files = fs.readdirSync(root)
  files.forEach(name => {
    const file = path.resolve(root, name)
    if (fs.statSync(file).isDirectory()) {
      result.push(file)
    }
  })
  return result
}

/**
 * 将对应目录映射为对应的边栏配置
 * @param {String} root
 * @param {String} prefix
 */
function mapTocToSidebar(root, prefix) {
  prefix = prefix || ''
  let sidebar = []

  const files = fs.readdirSync(root)
  files.forEach(filename => {
    const file = path.resolve(root, filename)
    const stat = fs.statSync(file)

    const [title, type] = filename.split('.')
    // order = parseInt(order, 10)
    // if (isNaN(order) || order < 0) {
    //   return
    // }

    // if (sidebar[order]) {
    //   logger.warn(
    //     `For ${file}, its order has appeared in the same level directory. And it will be rewritten.`
    //   )
    // }

    if (stat.isFile()) {
      if (type !== 'md') {
        logger.error(`For ${file}, its type is not supported.`)
        return
      }
      sidebar.push([prefix + filename, title])
    } else {
      // sidebar[order] = {
      //   title,
      //   collapsable: false,
      //   children: mapTocToSidebar(file, prefix + filename + '/')
      // }
    }
  })

  // sidebar = sidebar.filter(item => item !== null && item !== undefined)
  return sidebar
}

main(docsRoot)
