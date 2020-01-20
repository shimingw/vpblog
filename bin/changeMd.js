/*
 * @Description:md文件的yaml-front-matter属性转换
 * @Author: shimingwen
 * @Date: 2020-01-17 19:13:44
 * @LastEditTime : 2020-01-19 20:14:36
 * @LastEditors  : shimingwen
 * * 实现思路
 * 1、使用readdirSync递归遍历docs目录
 * 2、使用path.resolve拼接文件路径
 * 3、将拼接好的路径使用fs.statSync(file).isDirectory()判断是否为md文件
 * 4、如果是md文件则使用yaml-front-matter读取并修改文件头部内容
 */
const fs = require('fs')
const path = require('path')
const yamlFront = require('yaml-front-matter')
const moment = require('moment')
const fp = require('lodash/fp')
const { getMdPaths, splitMdPath } = require('./util')

const docsRoot = path.join(__dirname, '..', 'docs')

const template = params => `---
title: "${params.title}"
date: ${params.date}
permalink: "${params.permalink}"
---
${params.__content}`

const mdPathDrop = fp.dropWhile(val => val !== 'docs')
const mdPathFormat = fp.flow(
  splitMdPath,
  mdPathDrop,
  fp.drop(1),
  fp.dropLast(1),
  fp.join('-')
)

function main(docsRoot) {
  const mdPaths = getMdPaths(docsRoot)
  mdPaths.forEach(mdPath => changeYamlFrontMatter(mdPaths))
}

function changeYamlFrontMatter(mdPath) {
  try {
    const fileContents = fs.readFileSync(mdPath)
    const yamlData = yamlFront.loadFront(fileContents)
    const { title, date } = yamlData
    const mdDocTitle = mdPathFormat(mdPathList)
    yamlData.date = moment(date).format('YYYY-MM-DD')
    yamlData.permalink = `${yamlData.date}-${mdDocTitle}-${title}`
    fs.writeFileSync(mdPath, template(yamlData))
  } catch (error) {
    console.log(mdPath, error)
  }
}

main(docsRoot)
