'use strict'
const fs = require('fs')

const PATH = require('path')

const FOLDER = process.argv[2]

const EXT = '.' + process.argv[3]

fs.readdir(FOLDER,  (err, files) => {

  if (err) return console.error(err)

  files.forEach( (file) => {

    if (PATH.extname(file) === EXT) {

      console.log(file)

    }
    
  })

})