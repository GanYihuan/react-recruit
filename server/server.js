const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/react-chat' // connect mongo, (copy from iTerm mongo)

// connect mongo
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect server')
})

// define document model
const User = mongoose.model('user', new mongoose.Schema(
  {
    user: {
      type: String,
      require: true
    },
    age: {
      type: Number,
      require: true
    }
  }
))

User.create( // create data
  {
    user: 'xiaohua',
    age: 14
  },
  function (err, doc) {
    if (!err) {
      console.log(doc)
    } else {
      console.log(err)
    }
  }
)

// User.remove( // detele data
//   {
//     age: 18
//   },
//   function (err, doc) {
//     console.log(doc)
//   }
// )

// User.update( // change data
//   {
//     'name': 'xiaoming'
//   },
//   {
//     '$set': {
//       age: 30
//     }
//   },
//   function (err, doc) {
//     console.log(doc)
//   }
// )

const app = express()
app.get('/data', function (req, res) {
  User.find({}, function (err, doc) { // find data
    res.json(doc)
  })
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
