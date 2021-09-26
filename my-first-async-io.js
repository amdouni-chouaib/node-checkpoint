const fs = require('fs')

const File_Pos = process.argv[2]

fs.readFile(File_Pos ,  (err, contents) => {

  if (err) {
    return console.log(err)
  }

  const NB_Line = contents.toString().split('\n').length - 1

  console.log(NB_Line)
  
})