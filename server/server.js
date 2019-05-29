const express = require('express')
const bodyParser = require('body-parser') // Node.js body parsing middleware.
const cookieParser = require('cookie-parser') // Parse Cookie header and populate req
const model = require('./model')
const userRouter = require('./user')
const path = require('path')

// 服务器端渲染
// // babel 支持 jsx
// import React from 'react'
// // React component => div
// import {renderToString} from 'react-dom/server'
// // <div data-reactroot=""><h2>hello babel</h2></div>
// function App() {
//   return (
//       <div>
//         <h2>hello babel</h2>
//       </div>
//   )
// }
// console.log(renderToString(<App></App>))

const Chat = model.getModel('chat')
const app = express()
const server = require('http').Server(app) // work with express
const io = require('socket.io')(server)

io.on('connection', function(socket) {
  socket.on('sendmsg', function(data) {
    console.log(data)
    // io.emit('recvmsg', data)
    const { from, to, msg } = data
    const chatid = [from, to].sort().join('_')
    Chat.create({ chatid, from, to, content: msg }, (err, doc) => {
      io.emit('recvmsg', Object.assign({}, doc._doc))
      console.log(err, 'err ------')
    })
  })
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

// 1. 购买域名
// 2. DNS解析到你的服务器的IP
// 3. 安装nginx
// 4. 使用 pm2 管理node进程
app.use(function(req, res, next) {
  if (req.url.startsWith('/user/') || req.url.startsWith('/static/')) {
    return next()
  }
  // 服务器端渲染
  // const htmlRes = renderToString(<App></App>)
  // res.send(htmlRes)
  return res.sendFile(path.resolve('build/index.html'))
})
app.use('/', express.static(path.resolve('build')))

server.listen(9093, function() {
  console.log('Node app start at port 9093')
})
