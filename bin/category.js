const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const logger = require('tracer').colorConsole()
const fp = require('lodash/fp')
const { readTocs } = require('./util')
const yamlFront = require('yaml-front-matter')

const docsRoot = path.join(__dirname, '..', 'docs')
const categoryPath = path.join(
  __dirname,
  '..',
  '.vuepress',
  'config',
  'category-auto.js'
)

const getDirec = fp.flow(fp.split(path.sep), fp.last, data => {
  const val = fp.split('.', data)
  return val.length === 1 ? val[0] : val[1]
})

const getCategoryTree = toc => {
  if (fs.statSync(toc).isDirectory()) {
    // 如果是目录
    const title = getDirec(toc)
    const categoryTree = {
      title,
      child: []
    }
    const tocChilds = fs.readdirSync(toc)
    tocChilds.forEach(tocChild => {
      const tocChildPath = path.resolve(toc, tocChild)
      categoryTree.child.push(getCategoryTree(tocChildPath))
    })
    return categoryTree
  } else {
    // 如果是文件
    const title = getDirec(toc)
    const fileContents = fs.readFileSync(toc)
    const yamlData = yamlFront.loadFront(fileContents)
    return {
      title,
      href: `/docs/${yamlData.permalink}`
    }
  }
}

const main = docsRoot => {
  const variables = []
  const tocs = readTocs(docsRoot)
  tocs.forEach(toc => {
    variables.push(getCategoryTree(toc))
    fs.writeFileSync(
      categoryPath,
      `module.exports = ${JSON.stringify(variables)}`
    )
  })
}

main(docsRoot)
