const express = require('express')
const app = express()

app.get('/merhaba', function (req, res) {
  res.send('Merhaba Dünya')
})

app.listen(4000)
