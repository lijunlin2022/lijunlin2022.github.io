const fs = require('fs')
const path = require('path')

const getSidebarItems = (relativePath) => {
  const dirPath = path.join(__dirname, relativePath)
  const fileNames = fs.readdirSync(dirPath).filter(v => v !== 'index.md')
  const items = []
  fileNames.forEach(name => {
    const filePath = dirPath + name
    const firstLine = fs.readFileSync(filePath).toString('utf-8').split('\n')[0]
    const text = firstLine.split('#')[1].trim()
    const link = relativePath.split('.').pop() + name
    items.push({
      text,
      link
    })
  })
  return items
}

console.log(getSidebarItems('../blog/vitepress/'))
module.exports = {
  getSidebarItems
}