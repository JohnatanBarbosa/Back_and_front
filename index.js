const PORT = 3000
const express = require('express')
const apiRoute = require('./routers/api')

const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', apiRoute)

app.listen(PORT, () => {
  console.log('server Running on port', PORT)
})