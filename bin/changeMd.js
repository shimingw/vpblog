const fs = require('fs')
const path = require('path')
const yamlFront = require('yaml-front-matter')
const moment = require('moment')

const docsRoot = path.join(__dirname, '..', 'docs')

const md = path.join(__dirname, '..', 'docs', 'linux', 'test.md')
const template = params => `---
title: "${params.title}"
date: ${params.date}
permalink: "${params.date}-${params.title}"
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
const filesList = fs.readdirSync(docsRoot)
// filesList.forEach(file=>{

// })
const name = filesList[0]
const file = path.resolve(docsRoot, name)
console.log(file)
console.log(fs.statSync(file).isDirectory())
console.log(fs.statSync(path.resolve(file, 'CSS世界.md')).isDirectory())

// console.log(fs.readdirSync(file))

// fs.readFile(md, 'utf8', function(err, fileContents) {
//   const yamlData = yamlFront.loadFront(fileContents)
//   const { title, date } = yamlData
//   yamlData.date = moment(date).format('YYYY-MM-DD')
//   yamlData.permalink = `${yamlData.date}-title`
//   console.log(template(yamlData))
//   fs.writeFileSync(
//     path.join(__dirname, '..', 'docs', 'linux', 'changeTest.md'),
//     template(yamlData)
//   )
// })
