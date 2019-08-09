const csvFilePath = './customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson/v2')
let arr = []
csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
    arr.push(jsonObj)
    console.log(arr)
    console.log(arr)
    fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error)=>{
      if (error) return process.exit(1)
      console.log('done')
      process.exit(0)
    })
  })
