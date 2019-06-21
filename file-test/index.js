const path = require('path')
const fs = require('fs')

const fileName = path.resolve(__dirname, 'test.txt')

fs.readFile(fileName, (err, data) => {
  if (err){
    console.err(err)
    return
  }
  console.log(data.toString())
})