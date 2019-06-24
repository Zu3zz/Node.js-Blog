const fs = require('fs')
const path = require('path')
const readline = require('readline')

// 文件名
const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log')

// 创建 read stream
const readStream = fs.createReadStream(fileName)

// 创建 readline对象
const rl = readline.createInterface({
  input: readStream
})

let chromeNum = 0
let sum = 0

// 逐行读取
rl.on('line', (lineData) => {
  if (!lineData){
    return
  }
  // 记录总行数
  sum+=1
  const arr = lineData.split(' -- ')
  if(arr[2] && arr[2].indexOf('Chrome') > 0){
    // 累加chrome的数量
    chromeNum++
  }
})
// 监听逐行读取完成
rl.on('close', () => {
  console.log('chrome 占比：' + chromeNum / sum)
})