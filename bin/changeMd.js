var fs = require('fs')
const path = require('path')
var yamlFront = require('yaml-front-matter')

const md = path.join(__dirname, '..', 'docs', 'linux', 'Linux.md')
fs.readFile(md, 'utf8', function(err, fileContents) {
  console.log(fileContents)
  console.log(yamlFront.loadFront(fileContents))
})
