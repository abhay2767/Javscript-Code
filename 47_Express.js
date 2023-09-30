const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/48_index.html')) //serve html file
}) 
app.get('/', (req, res) => {
    console.log(req.query.name)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}/`)
})