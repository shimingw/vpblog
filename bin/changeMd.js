const fs = require('fs')
const path = require('path')
const yamlFront = require('yaml-front-matter')
const moment = require('moment')
const fp = require('lodash/fp')

const docsRoot = path.join(__dirname, '..', 'docs')

const template = params => `---
title: "${params.title}"
date: ${params.date}
permalink: "${params.permalink}"
---
${params.__content}`

// 获取文件目录
/**
 * 修改思路
 * 1、使用readdirSync递归遍历docs目录
 * 2、使用path.resolve拼接文件路径
 * 3、将拼接好的路径使用fs.statSync(file).isDirectory()判断是否为md文件
 * 4、如果是md文件则使用yaml-front-matter读取并修改文件头部内容
 */

const mdPathDrop = fp.dropWhile(val => val !== 'docs')
const mdPathFormat = fp.flow(
  mdPathDrop,
  fp.drop(1),
  fp.dropLast(1),
  fp.join('-')
)

main(docsRoot)

function main(docsRoot) {
  const childDocs = fs.readdirSync(docsRoot)
  childDocs.forEach(childDoc => {
    const childDocPath = path.resolve(docsRoot, childDoc)
    if (fs.statSync(childDocPath).isDirectory()) {
      // 如果是文件夹则继续遍历
      main(childDocPath)
    } else {
      // 否则执行转换方法
      changeYamlFrontMatter(childDocPath)
    }
  })
}

function changeYamlFrontMatter(mdPath) {
  try {
    const fileContents = fs.readFileSync(mdPath)
    const yamlData = yamlFront.loadFront(fileContents)
    const { title, date } = yamlData
    const mdPathList = mdPath.split(path.sep)
    const mdDocTitle = mdPathFormat(mdPathList)
    yamlData.date = moment(date).format('YYYY-MM-DD')
    yamlData.permalink = `${yamlData.date}-${mdDocTitle}-${title}`
    fs.writeFileSync(mdPath, template(yamlData))
  } catch (error) {
    console.log(mdPath, error)
  }
}
