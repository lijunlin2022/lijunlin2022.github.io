const fs = require('fs')
const path = require('path')

const getNavbarItemLink = (relativePath) => {
  const dirPath = path.join(__dirname, relativePath)
  const fileNames = fs.readdirSync(dirPath).filter(v => v !== 'index.md' && v !== 'img')
  if (!fileNames.length) {
    return null
  }
  return relativePath.split('.').pop() + fileNames[0]
}

module.exports = {
  getNavbarItemLink
}
