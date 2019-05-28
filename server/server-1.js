const express = require('express')
const app = express()

// res.send() return txt
// res.json() return json
// res.sendfile() return file
// app.use() use module
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

// [chrome](http://localhost:9093/data)
app.get('/data', function (req, res) {
  res.json({
    name: 'imooc',
    type: 'IT'
  })
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
