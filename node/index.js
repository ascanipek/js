const express = require('express')
const app = express()
const {accessControl} = require("./middleware")

const users = [
  {
    id: 1,
    name: "Eren",
    place: "Eskişehir"
  },
  {
    id: 2,
    name: "Abdullah",
    palce: "Ankara"
  }
]

app.use(express.json())
// app.use(accessControl)

app.get('/', function (req, res) {
  res.send('Ana sayfa')
})

app.get('/users',accessControl, function (req, res, next) {
  res.json({
    success: true,
    data: users
  })
})  

app.post('/users', function (req, res, next) {
  // console.log(req.body)
  users.push(req.body.user)
  res.json({
    success: true,
    data: users
  })
})

app.listen(4000)

