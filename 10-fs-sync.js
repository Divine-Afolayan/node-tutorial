const { readFileSync, writeFileSync } = require('fs')

// requires path to file as well as encoding
// default is utf8
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// requires file name and value to pass
// the options object with flag set to a is a possible argument. it appends
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })