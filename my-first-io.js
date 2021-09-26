const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])

const NB_lines = contents.toString().split('\n').length - 1

console.log(NB_lines)
