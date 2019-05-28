const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/react-recruit' // connect mongo, (copy from iTerm mongo)

mongoose.connect(DB_URL) // connect mongo
mongoose.connection.on('connected', function () { // connect success
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
      type: String,
      require: true
    }
  }
))

// create data
User.create(
  {
    name: 'xiaohua',
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

// detele data
// User.remove(
//   {
//     age: 18
//   },
//   function (err, doc) {
//     console.log(doc)
//   }
// )

// change data
// User.update(
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
  // find data
  User.find({}, function (err, doc) {
    res.json(doc)
  })
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
