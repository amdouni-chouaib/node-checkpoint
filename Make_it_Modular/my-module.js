
const fs = require('fs')

const PATH = require('path')

module.exports =  ( DIR, FILTER_STR, callback) => {

  fs.readdir( DIR ,  (err, list) => {

    if (err) {
      return callback(err)
    }

    list = list.filter( (file) => {
      return PATH.extname(file) === '.' + FILTER_STR
    })

    callback(null, list)

  })

}