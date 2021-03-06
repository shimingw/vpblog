const path = require('path')
const fs = require('fs')
const fp = require('lodash/fp')

const getMdPaths = docsRoot => {
  const mdPaths = []
  const searchMd = docsRoot => {
    const childDocs = fs.readdirSync(docsRoot)
    childDocs.forEach(childDoc => {
      const childDocPath = path.resolve(docsRoot, childDoc)
      if (fs.statSync(childDocPath).isDirectory()) {
        // 如果是文件夹则继续遍历
        searchMd(childDocPath)
      } else {
        mdPaths.push(childDocPath)
      }
    })
  }
  searchMd(docsRoot)
  return mdPaths
}

const splitMdPath = fp.split(path.sep)

/**
 * 读取指定目录的文件夹作为不同的目录
 * @param {String} root
 */
const readTocs = root => {
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

module.exports = {
  getMdPaths,
  splitMdPath,
  readTocs
}
