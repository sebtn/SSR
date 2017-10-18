require('babel-register')({
  presets: ['react', 'es2015']
})
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(require('./routes/index'))

const PORT = 3000
app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`)
}) 