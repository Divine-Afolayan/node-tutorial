const path = require('path')

// returns platform specific seperator
console.log(path.sep)


const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// returns the base of a filepath
const base = path.basename(filePath)
console.log(base)

// returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)