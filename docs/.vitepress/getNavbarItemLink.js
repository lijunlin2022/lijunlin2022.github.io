const fs = require('fs')
const path = require('path')

const getNavbarItemLink = (relativePath) => {
  const dirPath = path.join(__dirname, relativePath)
  if (fs.existsSync(dirPath)) {
    const fileNames = fs.readdirSync(dirPath).filter(v => v !== 'index.md' && v !== 'img')
    if (fileNames.length) {
      return relativePath.split('.').pop() + fileNames[0]
    }
  }
  return null
}

module.exports = {
  getNavbarItemLink
}
