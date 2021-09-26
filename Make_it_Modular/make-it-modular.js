'use strict'

const FILTER_FN = require('./my-module.js')

const DIR = process.argv[2]

const FILTER_STR = process.argv[3]

FILTER_FN( DIR , FILTER_STR ,  (err, list) => {

  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(  (file) => {
    console.log(file)
  })

})